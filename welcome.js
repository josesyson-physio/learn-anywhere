// Welcome screens on first launch, then a simple profile: a name and an optional 4-digit PIN, kept only on this phone.
// The profile keeps each person's streak, goals and quiz points separate on a shared phone. No email, no
// server, nothing leaves the device. The PIN is not a security lock (anyone with the phone can read browser
// storage), so it is only stored as a slow salted PBKDF2 hash and students are told never to reuse a real one.
(() => {
  const root = document.documentElement;
  const LS = {
    get: k => { try { return localStorage.getItem(k); } catch { return null; } },
    set: (k, v) => { try { localStorage.setItem(k, v); } catch {} },
    del: k => { try { localStorage.removeItem(k); } catch {} }
  };
  const SS = {
    set: (k, v) => { try { sessionStorage.setItem(k, v); } catch {} },
    del: k => { try { sessionStorage.removeItem(k); } catch {} }
  };
  const profiles = () => { try { return JSON.parse(LS.get("la-profiles") || "[]"); } catch { return []; } };
  const saveProfiles = list => LS.set("la-profiles", JSON.stringify(list));
  const rid = () => [...crypto.getRandomValues(new Uint8Array(8))].map(b => b.toString(16).padStart(2, "0")).join("");
  const hex = buf => [...new Uint8Array(buf)].map(b => b.toString(16).padStart(2, "0")).join("");
  const ITER = 300000;
  async function pbkdf2(salt, pin, iter){
    const key = await crypto.subtle.importKey("raw", new TextEncoder().encode(pin), "PBKDF2", false, ["deriveBits"]);
    return hex(await crypto.subtle.deriveBits({ name: "PBKDF2", hash: "SHA-256", salt: new TextEncoder().encode(salt), iterations: iter }, key, 256));
  }
  const locked = p => !!p.hash;
  // Profiles made before PINs used a password hashed once with SHA-256. They still open with that password
  // (p.pin stays unset), and are re-saved with PBKDF2 the first time they do.
  async function check(p, pin){
    if (!crypto.subtle) throw new Error("insecure");
    if (p.kdf === "pbkdf2") return await pbkdf2(p.salt, pin, p.iter) === p.hash;
    const ok = hex(await crypto.subtle.digest("SHA-256", new TextEncoder().encode(p.salt + ":" + pin))) === p.hash;
    if (ok) { const salt = rid() + rid(), h = await pbkdf2(salt, pin, ITER); saveProfiles(profiles().map(x => x.id === p.id ? { ...x, salt, kdf: "pbkdf2", iter: ITER, hash: h } : x)); }
    return ok;
  }
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const ico = k => (typeof svgI === "function" ? svgI(k) : "");
  const logo = (document.querySelector(".hero .logo") || {}).outerHTML || "";

  const SLIDES = [
    `<div class="gt-art gt-logo">${logo}<i class="gt-spark s1"></i><i class="gt-spark s2"></i><i class="gt-spark s3"></i></div>
     <h2 id="gateTitle">Welcome to Learn Anywhere</h2>
     <p>Free physiotherapy learning for every student. No fees, no ads, forever.</p>
     <p class="gt-small">Built around the <b>Tamil Nadu Dr. M.G.R. Medical University</b> BPT and MPT syllabus. Students from other universities are welcome too.</p>`,
    `<h2>What's inside</h2>
     <ul class="gt-list">
       <li><span class="gt-ico">${ico("book")}</span><span><b>Exam answers by marks</b>2, 5 and 15 markers in the MGR pattern, with flowcharts</span></li>
       <li><span class="gt-ico">${ico("brain")}</span><span><b>Memory keys and real-life examples</b>so it sticks, not just gets read</span></li>
       <li><span class="gt-ico">${ico("flame")}</span><span><b>Quiz, daily goal and streaks</b>three topics a day keeps the exam fear away</span></li>
       <li><span class="gt-ico">${ico("eye")}</span><span><b>Easy on the eyes</b>e-ink paper mode, bigger text and focus mode</span></li>
       <li><span class="gt-ico">${ico("check")}</span><span><b>Works offline</b>open it once on Wi-Fi, then study anywhere</span></li>
     </ul>`,
    `<div class="gt-art gt-jo">${window.JO_SVG || ""}</div>
     <h2>Meet Jo, your study buddy</h2>
     <p>Jo sits on whatever you are reading and drops short tips, memory keys and the odd friendly tease. He is part of the app, not a chatbot, and he works offline.</p>
     <ul class="gt-how">
       <li><b>Tap Jo</b> for a line</li>
       <li><b>👍</b> closes his cloud</li>
       <li><b>🤫 Shh</b> keeps him quiet for 15 minutes</li>
       <li><b>Turn him off</b> with the Jo switch under Eye comfort on the home screen</li>
     </ul>`,
    `<h2>Before you start</h2>
     <ul class="gt-list gt-rules">
       <li><span class="gt-ico">${ico("plus")}</span><span><b>Study aid, not medical advice</b>check doses and settings with official guidance and a qualified clinician before using them on a patient</span></li>
       <li><span class="gt-ico">${ico("clip")}</span><span><b>Independent</b>not affiliated with or endorsed by any university. Always check your official syllabus</span></li>
       <li><span class="gt-ico">${ico("people")}</span><span><b>Free to share, never to sell</b>share it with your class. Please don't copy from it in an exam</span></li>
     </ul>`
  ];

  const gate = document.createElement("div");
  gate.className = "gate"; gate.setAttribute("role", "dialog"); gate.setAttribute("aria-modal", "true"); gate.setAttribute("aria-labelledby", "gateTitle");
  gate.hidden = true;
  gate.innerHTML = `<div class="gt-bg" aria-hidden="true"><i></i><i></i><i></i></div><div class="gt-card"><div class="gt-body"></div><div class="gt-foot"></div></div>`;
  document.body.append(gate);
  const body = gate.querySelector(".gt-body"), foot = gate.querySelector(".gt-foot");
  let step = 0;

  function open(fromStep){
    step = fromStep; gate.hidden = false; root.classList.add("gate-on");
    const wrap = document.querySelector(".wrap"); if (wrap) wrap.inert = true;
    render();
  }
  function close(){
    gate.hidden = true; root.classList.remove("gate-on");
    const wrap = document.querySelector(".wrap"); if (wrap) wrap.inert = false;
  }
  function dots(){ return `<div class="gt-dots" aria-hidden="true">${[...SLIDES, 0].map((_, i) => `<i class="${i === step ? "on" : ""}"></i>`).join("")}</div>`; }
  function render(){
    if (step < SLIDES.length) {
      body.innerHTML = `<div class="gt-slide">${SLIDES[step]}</div>`;
      foot.innerHTML = `${dots()}<div class="gt-btns">${step ? `<button type="button" class="ghost" data-go="back">Back</button>` : `<button type="button" class="ghost" data-go="skip">Skip</button>`}<button type="button" class="primary" data-go="next">${step === SLIDES.length - 1 ? "Let's go" : "Next"}</button></div>`;
    } else profileStep();
    const f = gate.querySelector("h2"); if (f) { f.tabIndex = -1; f.focus({ preventScroll: true }); }
  }
  foot.addEventListener("click", e => {
    const b = e.target.closest("[data-go]"); if (!b) return;
    if (b.dataset.go === "next") step++; else if (b.dataset.go === "back") step--; else step = SLIDES.length;
    if (step >= SLIDES.length) { LS.set("la-intro-seen", "1"); if (window.LA_PROFILE) return close(); }
    if (typeof haptic === "function") haptic("tap");
    render();
  });

  function profileStep(mode){
    const list = profiles();
    mode = mode || (list.length ? "in" : "new");
    const note = `<p class="gt-small">Your name, PIN and progress stay <b>only on this phone</b>. No email, no account on any server. The PIN just keeps profiles apart on a shared phone. <b>It is not a security lock</b>, so never use your bank or phone PIN, or a password you use anywhere else.</p>`;
    if (mode === "in") {
      body.innerHTML = `<div class="gt-slide"><h2 id="gateTitle">Welcome back</h2>
        <form class="gt-form" id="gtIn" autocomplete="off">
          <label class="field"><span>Your name</span><select id="gtWho">${list.map(p => `<option value="${esc(p.id)}">${esc(p.name)}</option>`).join("")}</select></label>
          <label class="field" id="gtPinRow"><span id="gtPinLabel">PIN</span><input id="gtPw" type="password" autocomplete="off"></label>
          <label class="gt-check"><input type="checkbox" id="gtKeep" checked> Keep me signed in on this phone</label>
          <p class="gt-err" id="gtErr" role="alert"></p>
          <button class="primary" type="submit">Start learning</button>
        </form>
        <p class="gt-links"><button type="button" class="gt-link" data-mode="new">New profile</button> · <button type="button" class="gt-link" id="gtForgot">Forgot PIN?</button></p>${note}</div>`;
      foot.innerHTML = "";
      const who = () => profiles().find(x => x.id === $("#gtWho").value);
      const pinRow = () => {
        const p = who(), legacy = p && locked(p) && !p.pin, pw = $("#gtPw");
        $("#gtPinRow").hidden = !(p && locked(p)); $("#gtForgot").hidden = !(p && locked(p));
        $("#gtPinLabel").textContent = legacy ? "Password" : "PIN";
        pw.inputMode = legacy ? "text" : "numeric"; pw.maxLength = legacy ? 200 : 4; pw.value = ""; $("#gtErr").textContent = "";
      };
      $("#gtWho").onchange = pinRow; pinRow();
      $("#gtIn").onsubmit = async e => {
        e.preventDefault();
        const p = who(); if (!p) return;
        let ok = !locked(p);
        if (!ok) try { ok = await check(p, $("#gtPw").value); } catch { $("#gtErr").textContent = "Open Learn Anywhere from its https:// address to use a PIN."; return; }
        if (ok) return enter(p, $("#gtKeep").checked);
        $("#gtErr").textContent = `That ${p.pin ? "PIN" : "password"} doesn't match. Try again.`;
        if (typeof haptic === "function") haptic("error");
      };
      // Removing a profile needs its exact name typed, so a classmate can't wipe it with one tap
      $("#gtForgot").onclick = () => {
        const p = who(); if (!p) return;
        const typed = prompt(`Forgot the PIN? The only way back is to remove "${p.name}" and its streak and progress from this phone. If you saved a progress file, you can restore it afterwards from the About tab.\n\nTo remove it, type the name exactly:`);
        if (typed === null) return;
        if (typed.trim() !== p.name) { $("#gtErr").textContent = "The name didn't match, so nothing was removed."; return; }
        saveProfiles(profiles().filter(x => x.id !== p.id)); LS.del("la-progress:" + p.id); LS.del("la-welcomed:" + p.id);
        profileStep();
      };
    } else {
      body.innerHTML = `<div class="gt-slide"><h2 id="gateTitle">Make your profile</h2>
        <p>Just a name, so your streak and progress are yours. Add a PIN if you share this phone.</p>
        <form class="gt-form" id="gtNew" autocomplete="off">
          <label class="field"><span>Your name</span><input id="gtName" maxlength="30" autocomplete="nickname" required placeholder="e.g. Tara"></label>
          <label class="field"><span>4-digit PIN (optional)</span><input id="gtPw1" type="password" inputmode="numeric" maxlength="4" autocomplete="off"></label>
          <label class="field"><span>Type the PIN again</span><input id="gtPw2" type="password" inputmode="numeric" maxlength="4" autocomplete="off"></label>
          <label class="gt-check"><input type="checkbox" id="gtKeep" checked> Keep me signed in on this phone</label>
          <p class="gt-err" id="gtErr" role="alert"></p>
          <button class="primary" type="submit">Start learning</button>
        </form>
        ${list.length ? `<p class="gt-links"><button type="button" class="gt-link" data-mode="in">I already have a profile</button></p>` : ""}${note}</div>`;
      foot.innerHTML = "";
      $("#gtNew").onsubmit = async e => {
        e.preventDefault();
        const name = $("#gtName").value.trim().replace(/\s+/g, " "), a = $("#gtPw1").value, b = $("#gtPw2").value, err = $("#gtErr");
        if (!name) return void (err.textContent = "Please type your name.");
        if (a && !/^\d{4}$/.test(a)) return void (err.textContent = "The PIN needs exactly 4 digits, or leave it empty.");
        if (a !== b) return void (err.textContent = "The two PINs are different.");
        const all = profiles();
        if (all.some(p => p.name.toLowerCase() === name.toLowerCase())) return void (err.textContent = "That name is already on this phone. Add your initial, like Tara S.");
        const p = { id: rid(), name };
        if (a) {
          if (!crypto.subtle) return void (err.textContent = "Open Learn Anywhere from its https:// address to use a PIN.");
          Object.assign(p, { pin: true, salt: rid() + rid(), kdf: "pbkdf2", iter: ITER });
          p.hash = await pbkdf2(p.salt, a, ITER);
        }
        // The first profile on a phone keeps any progress made before profiles existed
        const old = LS.get("la-progress");
        if (old && !all.length) { LS.set("la-progress:" + p.id, old); LS.del("la-progress"); }
        saveProfiles([...all, p]);
        enter(p, $("#gtKeep").checked);
      };
    }
    body.querySelectorAll("[data-mode]").forEach(b => b.onclick = () => profileStep(b.dataset.mode));
  }

  function enter(p, keep){
    window.LA_PROFILE = p.id; window.LA_NAME = p.name;
    SS.set("la-active-s", p.id);
    if (keep) LS.set("la-active", p.id); else LS.del("la-active");
    close(); refresh();
    if (typeof celebrate === "function" && !LS.get("la-welcomed:" + p.id)) { LS.set("la-welcomed:" + p.id, "1"); celebrate(); }
    dispatchEvent(new Event("la-ready"));
  }
  function refresh(){
    try { renderToday(); renderLib(); } catch {}
    const who = document.getElementById("who");
    if (who) {
      who.innerHTML = window.LA_NAME ? `<span>👋 Hi, <b>${esc(window.LA_NAME)}</b></span><button type="button" class="gt-link" id="whoSwitch">Switch profile</button>` : "";
      const sw = document.getElementById("whoSwitch");
      if (sw) sw.onclick = () => { LS.del("la-active"); SS.del("la-active-s"); window.LA_PROFILE = null; window.LA_NAME = ""; refresh(); open(SLIDES.length); };
    }
  }
  const $ = s => gate.querySelector(s);

  gate.addEventListener("keydown", e => { if (e.key === "Escape" && window.LA_PROFILE) close(); });

  // Replay the intro from the About tab
  const replay = document.getElementById("replayIntro");
  if (replay) replay.onclick = () => open(0);

  // Backup and restore of the current profile's progress, as a small file the student keeps
  const progKeyOf = id => "la-progress" + (id ? ":" + id : "");
  const save = document.getElementById("saveProgress"), load = document.getElementById("loadProgress"), file = document.getElementById("progressFile");
  if (save) save.onclick = () => {
    let progress = {}; try { progress = JSON.parse(LS.get(progKeyOf(window.LA_PROFILE)) || "{}"); } catch {}
    const blob = new Blob([JSON.stringify({ app: "learn-anywhere", v: 1, name: window.LA_NAME || "", saved: new Date().toISOString(), progress })], { type: "application/json" });
    const link = document.createElement("a"), url = URL.createObjectURL(blob);
    link.href = url; link.download = `learn-anywhere-progress-${(window.LA_NAME || "me").replace(/[^\w-]+/g, "-")}.json`;
    document.body.append(link); link.click(); link.remove(); setTimeout(() => URL.revokeObjectURL(url), 1000);
  };
  // Only known fields of the right shape are kept from a backup file, so a tampered file can't inject anything
  const DAY = /^\d{4}-\d{2}-\d{2}$/, ID = /^[\w-]{1,80}$/;
  function cleanProgress(x){
    if (!x || typeof x !== "object") throw new Error("bad");
    const days = {}, learned = {};
    for (const [d, ids] of Object.entries(x.days || {})) if (DAY.test(d) && Array.isArray(ids)) days[d] = [...new Set(ids.filter(i => typeof i === "string" && ID.test(i)))].slice(0, 200);
    for (const [i, d] of Object.entries(x.learned || {})) if (ID.test(i) && typeof d === "string" && DAY.test(d)) learned[i] = d;
    return { days, learned, xp: Math.max(0, Math.min(1e7, Math.floor(Number(x.xp) || 0))) };
  }
  if (load && file) {
    load.onclick = () => file.click();
    file.onchange = async () => {
      const f = file.files[0]; file.value = ""; if (!f) return;
      try {
        if (f.size > 2e6) throw new Error("big");
        const data = JSON.parse(await f.text());
        if (data.app !== "learn-anywhere") throw new Error("bad");
        const P = cleanProgress(data.progress);
        if (!confirm(`Replace ${window.LA_NAME ? `${window.LA_NAME}'s` : "this"} progress on this phone with the backup${data.name ? ` from ${data.name}` : ""}?`)) return;
        LS.set(progKeyOf(window.LA_PROFILE), JSON.stringify(P)); refresh();
        alert("Progress restored.");
      } catch { alert("That file isn't a Learn Anywhere progress backup."); }
    };
  }

  const known = window.LA_PROFILE && profiles().find(p => p.id === window.LA_PROFILE);
  if (known) { window.LA_NAME = known.name; refresh(); }
  else { window.LA_PROFILE = null; open(LS.get("la-intro-seen") ? SLIDES.length : 0); }
})();
