// Jo, the study buddy: a small physio friend who jumps onto whatever you scroll to and talks like a classmate who already
// passed the exam. Real-life examples come from the library (RELATE and mnemonics); everything else is a
// fixed list of jokes, healthy teasing and motivation. No AI, no network, works offline.
(() => {
  const root = document.documentElement;
  const SVG = `<svg viewBox="0 0 120 170" aria-hidden="true" class="bd-svg">
  <ellipse class="bd-shadow" cx="60" cy="164" rx="30" ry="4.5" fill="#000" opacity=".16"/>
  <g class="bd-body">
    <!-- backpack behind -->
    <rect x="30" y="80" width="60" height="50" rx="14" fill="#2a2a30"/>
    <!-- legs: dark cargo joggers -->
    <path d="M44 120h15l-1 34h-13z" fill="#3e3e45"/><path d="M61 120h15l-1 34h-13z" fill="#3e3e45"/>
    <rect x="45" y="132" width="7" height="9" rx="1.5" fill="#34343a"/><rect x="68" y="132" width="7" height="9" rx="1.5" fill="#34343a"/>
    <path d="M45 151h13M62 151h13" stroke="#2e2e34" stroke-width="3" stroke-linecap="round"/>
    <!-- sneakers -->
    <path d="M41 153h18c1 0 2 1 2 3v3H38c0-3 1-6 3-6z" fill="#eceef0"/><path d="M61 153h18c2 0 3 3 3 6H59v-3c0-2 1-3 2-3z" fill="#eceef0"/>
    <path d="M44 156c4 0 8-1 11-3M66 156c4 0 8-1 11-3" stroke="#9aa1a8" stroke-width="2" fill="none" stroke-linecap="round"/>
    <rect x="38" y="159" width="23" height="2.5" rx="1" fill="#b9bec4"/><rect x="59" y="159" width="23" height="2.5" rx="1" fill="#b9bec4"/>
    <!-- open white shirt over a white tee -->
    <path d="M40 84c5-4 13-6 20-6s15 2 20 6l2 40H38z" fill="#f6f3ec"/>
    <path d="M52 80h16l-1 44H53z" fill="#fff"/>
    <path d="M52 80l4 9 4-7 4 7 4-9" fill="none" stroke="#d8d2c6" stroke-width="2" stroke-linejoin="round"/>
    <path d="M53 90v32M67 90v32" stroke="#e2ddd2" stroke-width="1.5"/>
    <!-- backpack straps -->
    <path d="M45 82c-1 12-1 26 0 40" stroke="#1d1d22" stroke-width="6" fill="none" stroke-linecap="round"/>
    <path d="M75 82c1 12 1 26 0 40" stroke="#1d1d22" stroke-width="6" fill="none" stroke-linecap="round"/>
    <!-- left arm: hand in pocket -->
    <path d="M40 86c-6 6-8 18-6 30l8 2c0-8 0-16 3-24z" fill="#f6f3ec"/>
    <path d="M35 113c-1 3 1 6 4 6s5-2 5-5" fill="#b97a52"/>
    <!-- right arm: waves -->
    <g class="bd-arm">
      <path d="M80 86c6 6 8 18 6 30l-8 2c0-8 0-16-3-24z" fill="#f6f3ec"/>
      <rect x="77" y="111" width="10" height="5" rx="2" fill="#1c1c20"/>
      <circle cx="82" cy="121" r="5.5" fill="#b97a52"/>
    </g>
    <!-- neck and head -->
    <rect x="54" y="70" width="12" height="11" rx="4" fill="#a86c46"/>
    <g class="bd-head">
      <circle cx="35" cy="54" r="5" fill="#b97a52"/><circle cx="85" cy="54" r="5" fill="#b97a52"/>
      <ellipse cx="60" cy="52" rx="25" ry="24" fill="#b97a52"/>
      <ellipse cx="46" cy="63" rx="4.5" ry="2.6" fill="#d98b6a" opacity=".55"/><ellipse cx="74" cy="63" rx="4.5" ry="2.6" fill="#d98b6a" opacity=".55"/>
      <!-- curly hair -->
      <g class="bd-hair" fill="#1b120c">
        <circle cx="38" cy="38" r="9"/><circle cx="48" cy="28" r="10"/><circle cx="60" cy="24" r="11"/><circle cx="72" cy="28" r="10"/><circle cx="82" cy="38" r="9"/>
        <circle cx="34" cy="48" r="7"/><circle cx="86" cy="48" r="7"/><circle cx="54" cy="33" r="8"/><circle cx="67" cy="33" r="8"/><circle cx="44" cy="38" r="7"/><circle cx="76" cy="38" r="7"/>
        <circle cx="52" cy="18" r="6"/><circle cx="68" cy="18" r="6"/><circle cx="60" cy="14" r="5"/>
      </g>
      <g fill="none" stroke="#4a3526" stroke-width="1.6" stroke-linecap="round" opacity=".9">
        <path d="M45 24a5 5 0 0 1 6-2"/><path d="M58 17a5 5 0 0 1 6 0"/><path d="M70 23a5 5 0 0 1 5 3"/><path d="M36 35a5 5 0 0 1 4-4"/><path d="M80 32a5 5 0 0 1 4 4"/>
      </g>
      <!-- sunglasses -->
      <path d="M38 50h44" stroke="#0f0f12" stroke-width="2.5"/>
      <rect x="40" y="48" width="17" height="12" rx="4" fill="#0f0f12"/><rect x="63" y="48" width="17" height="12" rx="4" fill="#0f0f12"/>
      <path d="M57 51q3-2 6 0" stroke="#0f0f12" stroke-width="2.5" fill="none"/>
      <path class="bd-glint" d="M43 57l6-7M66 57l6-7" stroke="#fff" stroke-width="2" stroke-linecap="round" opacity=".35"/>
      <!-- smile -->
      <path class="bd-smile" d="M52 66q8 6 16 0" fill="none" stroke="#5a2e1a" stroke-width="2.4" stroke-linecap="round"/>
      <path class="bd-laugh" d="M51 65q9 10 18 0z" fill="#5a2e1a"/>
    </g>
  </g>
</svg>`;

  const pick = a => a[Math.floor(Math.random() * a.length)];
  const firstSentence = t => { const m = String(t || "").match(/^.{20,220}?[.!?](\s|$)/); return (m ? m[0] : String(t || "").slice(0, 200)).trim(); };
  const hour = new Date().getHours();
  const GREET = hour >= 23 || hour < 5 ? "It's late, friend. Revise one small thing, then sleep. Your brain saves today's learning while you snore."
    : hour < 12 ? "Good morning, future physio! Chai first, then capsular patterns."
    : hour < 17 ? "Post-lunch sleepy? Same. One topic before the nap wins, deal?"
    : "Evening study squad! Ten focused minutes beats an hour of reels.";

  const TEASE = [
    "You scroll faster than a sprinter's hamstring. Slow down and read one card fully.",
    "Sitting like a question mark? Your neck is filing a complaint. Sit tall, small chin tuck, carry on.",
    "Phone this close to your face? Look at something far away for 20 seconds. Your eyes asked me to say that.",
    "Don't just read it. Close your eyes and say it out loud. People may stare. Toppers don't care.",
    "Highlighting the whole page is not studying, it's colouring. Pick the three lines that matter.",
    "Viva tip: examiners can smell \"I'll just say it confidently\". Know the why, not only the what.",
    "If you can't explain it to your little cousin, you don't know it yet. Try it on me. I'm a drawing, I won't judge.",
    "Bunking revision today? Your future self just sighed loudly."
  ];
  const MOTIVATE = [
    "Every physio you admire once forgot the brachial plexus too. Keep going.",
    "One topic a day is 365 topics a year. Compounding, like your quads after squats.",
    "You don't need to beat the class topper. Just beat yesterday's you.",
    "Patients won't remember your marks. They'll remember you got them walking again. Study for them.",
    "Tired? Stand up, five calf raises, sip of water, back in. That's literally physio for your brain.",
    "Small steps, daily. That's how we rehab a knee and that's how we rehab a syllabus."
  ];
  const SEC = {
    flow: "Draw this flowchart in your answer. Examiners love boxes and arrows more than long paragraphs.",
    glance: "Picture this diagram before you sleep. Visual memory is a cheat code that's totally legal.",
    flags: "Red flags mean refer, don't treat. A good physio knows when not to touch.",
    viva: "Practise these out loud with a friend. Bonus points if you do it in the examiner's serious voice.",
    refs: "Name at least one textbook in your answer. Instant respect from the examiner.",
    exam: "Match the length to the marks. A 2-marker is not a love letter.",
    marks: "Match the length to the marks. A 2-marker is not a love letter.",
    adv: "Advanced bit. You don't need it for every exam, but it makes you sound like a real clinician.",
    simple: "Read the simple version first, then the exam version. Your brain needs the story before the jargon.",
    play: "Try the activity. Learning with your hands sticks way longer than staring at a screen.",
    ex: "Real-life examples are gold in a viva. Steal this one."
  };
  const PLACE = {
    today: P => P.streak ? `${P.streak}-day streak! Don't break it now, I've already told everyone about you.` : "Streak at zero? Let's fix that. One topic. I'll wait. I'm a drawing, I have all day.",
    comfort: () => "Long study session? Switch on e-ink paper mode. Your eyes will send you a thank-you note.",
    panel: () => "Type a topic, like \"stroke\" or \"knee\". Short words work best, just like in a viva.",
    subj: s => `${s}? Good choice. Tap it and I'll line up the easy ones first.`,
    qcard: () => "No peeking at the answer. I'm watching you through these shades.",
    shelf: () => "Textbooks are heavy. That's why I carry a backpack. Read the chapter after the summary."
  };

  function topicOf(node){
    const host = node.closest("[data-id]"); const id = host && host.dataset.id;
    if (!id) return null;
    const items = typeof allItems === "function" ? allItems() : (window.LIB || []);
    return items.find(t => t.id === id) || null;
  }
  function lineFor(node){
    if (!node) return pick(Math.random() < .5 ? TEASE : MOTIVATE);
    const t = topicOf(node), R = t && window.RELATE && window.RELATE[t.id];
    const sec = node.closest(".sheet .sec[id]");
    if (sec && Math.random() < .8) {
      const key = (sec.id.match(/-([a-z]+)$/) || [])[1];
      if (key === "relate" && R) return "Like a friend would say it: " + firstSentence(R.r);
      if (key === "mem" && t && t.mnemonic && t.mnemonic.word) return `Memory hack: "${t.mnemonic.word}". Say it three times in your head. Done? Now it's yours.`;
      if (SEC[key]) return SEC[key];
    }
    if (node.closest(".card,.sheet")) {
      const opts = [];
      if (R && R.r) opts.push("Real life version: " + firstSentence(R.r));
      if (t && t.mnemonic && t.mnemonic.word) opts.push(`"${t.mnemonic.word}" is the memory key for ${t.title}. Trust me, it saves you in the exam hall.`);
      if (t) opts.push(`${t.title}. Open it, read the simple words, then hit Test me. Ten minutes, that's it.`);
      return pick(opts);
    }
    if (node.id === "today") { const P = prog.get(); return PLACE.today({ streak: streakOf(P) }); }
    if (node.classList.contains("comfort")) return PLACE.comfort();
    if (node.classList.contains("panel")) return PLACE.panel();
    if (node.classList.contains("subj")) return PLACE.subj(node.dataset.k);
    if (node.classList.contains("qcard")) return PLACE.qcard();
    if (node.matches("details.shelf")) return PLACE.shelf();
    return pick(Math.random() < .5 ? TEASE : MOTIVATE);
  }

  const el = document.createElement("div");
  el.className = "buddy"; el.id = "buddy";
  el.innerHTML = `<button type="button" class="bd-btn" aria-label="Jo, your study buddy. Tap for a tip">${SVG}</button><div class="bd-say" role="status" aria-live="polite" hidden><b>Jo</b><p></p></div>`;
  document.body.append(el);
  const say = el.querySelector(".bd-say"), sayP = say.querySelector("p"), svg = el.querySelector(".bd-svg");
  const W = 84, H = 119;
  let x = innerWidth - W - 12, y = scrollY + innerHeight + 20, target = null, lastJump = 0, lastSay = 0, hideT = 0, anim = null;
  const enabled = () => pref.get("la-buddy") !== "0" && !root.classList.contains("focus-on");
  const moving = () => root.classList.contains("motion");
  const put = () => { el.style.transform = `translate(${x}px,${y}px)`; if (say) say.classList.toggle("below", y - scrollY < 190); };

  function speak(text, ms = 7000){
    if (!text) return;
    sayP.textContent = text; say.hidden = false; lastSay = Date.now();
    say.classList.toggle("left", x - scrollX > innerWidth / 2);
    say.classList.toggle("below", y - scrollY < 190);
    clearTimeout(hideT); hideT = setTimeout(() => { say.hidden = true; }, ms);
  }
  function mood(m, ms = 900){ el.classList.add(m); setTimeout(() => el.classList.remove(m), ms); }

  const SPOTS = ".sheet .memory,.sheet .sheet-head,.sheet .sec,.sheet .sec > *,.sec .path li,.sec .glance .node,.sec .viva details,.card,.subj,.qcard,.panel,.comfort,#today,details.shelf";
  function visibleSpots(){
    const top = Math.max(innerHeight * .2, 200), bottom = innerHeight * .72;
    return [...document.querySelectorAll(SPOTS)].filter(n => { if (!n.offsetParent) return false; const r = n.getBoundingClientRect(); return r.top > top && r.top < bottom && r.width > 120; });
  }
  function spotFor(n){
    const r = n.getBoundingClientRect();
    return [Math.max(8, Math.min(innerWidth - W - 8, r.right - W - 6)) + scrollX, r.top + scrollY - H + 8];
  }
  function jumpTo(n, talk){
    const [nx, ny] = n ? spotFor(n) : [innerWidth - W - 12 + scrollX, scrollY + innerHeight - H - 16];
    target = n; lastJump = Date.now(); if (Date.now() - lastSay > 4000) say.hidden = true;
    const onScreen = y > scrollY - H && y < scrollY + innerHeight;
    const x0 = onScreen ? x : nx, y0 = onScreen ? y : scrollY + innerHeight + 10;
    x = nx; y = ny;
    if (!moving() || !el.animate) { put(); if (talk) speak(lineFor(n)); return; }
    if (anim) anim.cancel();
    const peak = Math.min(y0, ny) - 70 - Math.min(120, Math.abs(ny - y0) * .25);
    el.classList.add("air");
    anim = el.animate([
      { transform: `translate(${x0}px,${y0}px)` },
      { transform: `translate(${(x0 + nx) / 2}px,${peak}px)`, easing: "cubic-bezier(.3,0,.7,1)" },
      { transform: `translate(${nx}px,${ny}px)` }
    ], { duration: 720, easing: "cubic-bezier(.2,.7,.3,1)" });
    put();
    anim.onfinish = () => { anim = null; el.classList.remove("air"); mood("land", 350); if (talk) speak(lineFor(n)); };
  }

  function settle(){
    if (!enabled()) { el.hidden = true; return; }
    el.hidden = false; say.classList.toggle("below", y - scrollY < 190);
    const stillThere = target && target.isConnected && target.offsetParent && (() => { const r = target.getBoundingClientRect(); return r.top > 190 && r.top < innerHeight * .85; })();
    if (stillThere) { const [nx, ny] = spotFor(target); if (Math.abs(nx - x) > 2 || Math.abs(ny - y) > 2) { x = nx; y = ny; put(); } return; }
    const spots = visibleSpots();
    jumpTo(spots.length ? spots[Math.floor(spots.length / 3)] : null, Date.now() - lastSay > 6000);
  }

  let scrollT = 0;
  addEventListener("scroll", () => { clearTimeout(scrollT); scrollT = setTimeout(settle, 650); }, { passive: true });
  addEventListener("resize", () => { clearTimeout(scrollT); scrollT = setTimeout(settle, 300); });
  document.addEventListener("click", e => {
    if (e.target.closest("nav.tabs button")) { target = null; setTimeout(settle, 450); return; }
    const opt = e.target.closest(".opt");
    if (opt) setTimeout(() => {
      if (opt.classList.contains("right")) { mood("happy", 1600); speak(pick(["Topper energy! Your future patients just felt that.", "Correct! Okay, okay, you're cooking now.", "Right answer. Don't let it go to your head... okay, a little."])); }
      else if (opt.classList.contains("wrong")) { mood("oops", 900); speak(pick(["Wrong, but that's how memory works. A mistake now saves you in the exam. Read the why.", "Arre, so close! Read the explanation once, you'll never miss this one again.", "Even I got that wrong the first time. And I wear sunglasses indoors."])); }
    }, 60);
    const lb = e.target.closest(".learn-btn");
    if (lb) setTimeout(() => { if (lb.getAttribute("aria-pressed") === "true") { mood("happy", 1600); speak("Marked as learned! Collecting topics like trophies. Revise it again in three days and it sticks for good."); } }, 60);
  });
  el.querySelector(".bd-btn").addEventListener("click", () => {
    if (typeof haptic === "function") haptic("tap");
    mood("wave", 1200);
    speak(Math.random() < .55 ? lineFor(target) : pick(Math.random() < .5 ? TEASE : MOTIVATE));
  });
  say.addEventListener("click", () => { say.hidden = true; });

  // Nudge after a long quiet spell, then a fresh joke every so often (never more than once a minute)
  let idleT = 0;
  const idle = () => { clearTimeout(idleT); idleT = setTimeout(() => { if (enabled() && !document.hidden && Date.now() - lastSay > 60000) { mood("wave", 1200); speak(pick([...TEASE, ...MOTIVATE])); } idle(); }, 90000); };
  ["pointerdown", "keydown", "scroll"].forEach(ev => addEventListener(ev, idle, { passive: true }));

  // the comfort-panel switch
  const sw = document.getElementById("buddyBtn");
  if (sw) {
    const sync = () => sw.setAttribute("aria-pressed", pref.get("la-buddy") === "0" ? "false" : "true");
    sw.onclick = () => { pref.set("la-buddy", pref.get("la-buddy") === "0" ? "1" : "0"); sync(); if (enabled()) { target = null; settle(); } else { el.hidden = true; } };
    sync();
  }
  new MutationObserver(() => { if (!enabled()) el.hidden = true; else if (el.hidden) setTimeout(settle, 300); }).observe(root, { attributes: true, attributeFilter: ["class"] });

  put(); el.hidden = !enabled();
  setTimeout(() => { if (!enabled()) return; const spots = visibleSpots(); jumpTo(spots[0] || null, false); setTimeout(() => { mood("wave", 1400); speak(GREET, 8000); }, 800); idle(); }, 1800);
})();
