// Jo, the study buddy: a small physio friend who jumps onto whatever you scroll to and talks like a classmate who already
// passed the exam. Real-life examples come from the library (RELATE and mnemonics); everything else is a
// fixed list of jokes, healthy teasing and motivation. No AI, no network, works offline.
(() => {
  const root = document.documentElement;
  // Chibi Jo, drawn from jose's character sheet: big round face, spiral curls, shades, open white shirt,
  // backpack, dark joggers. He sits on the edge of things with his legs dangling over the front.
  const CURL = (x, y, r, k = "") => `<g class="bd-curl ${k}" transform="translate(${x} ${y})"><circle r="${r}"/><path d="M${-r * .45} ${r * .1}a${r * .45} ${r * .45} 0 1 1 ${r * .5} ${r * .35}a${r * .25} ${r * .25} 0 1 1 ${-r * .15} ${-r * .4}"/></g>`;
  const SVG = `<svg viewBox="0 0 100 112" aria-hidden="true" class="bd-svg">
  <g class="bd-all">
    <rect x="29" y="61" width="42" height="27" rx="11" fill="#2b2b33"/>
    <g class="bd-leg bd-legL"><rect x="37" y="84" width="11" height="18" rx="5.5" fill="#3f3f47"/><ellipse cx="42" cy="104" rx="8" ry="5" fill="#f1f2f4"/><path d="M36 104h12" stroke="#a3a9b0" stroke-width="2" stroke-linecap="round"/></g>
    <g class="bd-leg bd-legR"><rect x="52" y="84" width="11" height="18" rx="5.5" fill="#3f3f47"/><ellipse cx="58" cy="104" rx="8" ry="5" fill="#f1f2f4"/><path d="M52 104h12" stroke="#a3a9b0" stroke-width="2" stroke-linecap="round"/></g>
    <g class="bd-torso">
      <path d="M33 88c-1-14 5-24 17-24s18 10 17 24z" fill="#f8f5ef"/>
      <path d="M45 64h10v24H45z" fill="#fff"/>
      <path d="M44 64l3 6 3-4 3 4 3-6" fill="none" stroke="#dcd5c8" stroke-width="1.6" stroke-linejoin="round"/>
      <path d="M39 66c-1 7-1 15 0 22M61 66c1 7 1 15 0 22" stroke="#1f1f25" stroke-width="4.5" stroke-linecap="round" fill="none"/>
    </g>
    <g class="bd-book"><path d="M35 76l15 3 15-3v12l-15 3-15-3z" fill="#2457f5"/><path d="M37 77l13 3v10l-13-3zM63 77l-13 3v10l13-3z" fill="#fff"/><path d="M40 81l7 1.5M40 84l7 1.5M53 82.5l7-1.5M53 85.5l7-1.5" stroke="#c9cfdb" stroke-width="1"/></g>
    <g class="bd-head">
      <g class="bd-hair-back" fill="#22160e">${CURL(23, 38, 7)}${CURL(77, 38, 7)}${CURL(25, 27, 8)}${CURL(75, 27, 8)}</g>
      <circle cx="24.5" cy="45" r="5" fill="#b97d52"/><circle cx="75.5" cy="45" r="5" fill="#b97d52"/>
      <ellipse cx="50" cy="42" rx="26" ry="24" fill="#c58a5e"/>
      <ellipse cx="50" cy="58" rx="15" ry="5" fill="#b97d52" opacity=".35"/>
      <g class="bd-eyes"><ellipse cx="40" cy="47" rx="3.6" ry="4.6" fill="#1b1410"/><ellipse cx="60" cy="47" rx="3.6" ry="4.6" fill="#1b1410"/><circle cx="41.3" cy="45.3" r="1.4" fill="#fff"/><circle cx="61.3" cy="45.3" r="1.4" fill="#fff"/></g>
      <ellipse cx="34" cy="54" rx="5" ry="3" fill="#ff8f7a" opacity=".5"/><ellipse cx="66" cy="54" rx="5" ry="3" fill="#ff8f7a" opacity=".5"/>
      <path d="M48.5 51.5q1.5 1.2 3 0" fill="none" stroke="#8c5634" stroke-width="1.3" stroke-linecap="round"/>
      <path class="bd-smile" d="M45 55.5q5 4.5 10 0" fill="none" stroke="#5a2e1a" stroke-width="2" stroke-linecap="round"/>
      <g class="bd-laugh"><path d="M44.5 55h11q-1 7-5.5 7t-5.5-7z" fill="#5a2e1a"/><path d="M47 60q3-2 6 0q-1 2-3 2t-3-2z" fill="#ff8a8a"/></g>
      <g class="bd-hair" fill="#22160e" stroke="#4d3526" stroke-width="1.2" stroke-linecap="round">
        ${CURL(31, 22, 8.5, "c1")}${CURL(41, 15, 9, "c2")}${CURL(53, 12, 9.5, "c3")}${CURL(65, 15, 9, "c4")}${CURL(73, 23, 8, "c5")}
        ${CURL(36, 28, 6.5, "c2")}${CURL(46, 25, 6.5, "c4")}${CURL(57, 25, 6.5, "c1")}${CURL(66, 28, 6.5, "c3")}
        ${CURL(47, 7, 5.5, "c5")}${CURL(59, 6, 5, "c2")}
        <path class="bd-flick" d="M51 27q-4 5 0 7q3 1 2-2" fill="none" stroke="#22160e" stroke-width="2.4"/>
      </g>
      <g class="bd-shades">
        <path d="M27 42.5h46" stroke="#111114" stroke-width="2.2"/>
        <rect x="30.5" y="39" width="17" height="12" rx="5.5" fill="#111114"/><rect x="52.5" y="39" width="17" height="12" rx="5.5" fill="#111114"/>
        <path d="M47.5 42q2.5-2 5 0" fill="none" stroke="#111114" stroke-width="2.2"/>
        <path d="M33.5 48l5-6M55.5 48l5-6" stroke="#fff" stroke-width="1.6" stroke-linecap="round" opacity=".4"/>
      </g>
    </g>
    <g class="bd-arm bd-armL"><path d="M36 66q-7 6-7 16l6 1q0-8 4-13z" fill="#f8f5ef"/><circle cx="31.5" cy="84" r="4" fill="#c58a5e"/></g>
    <g class="bd-arm bd-armR"><path d="M64 66q7 6 7 16l-6 1q0-8-4-13z" fill="#f8f5ef"/><rect x="64.5" y="79" width="7" height="3" rx="1.2" fill="#1c1c20"/><circle cx="68.5" cy="84" r="4" fill="#c58a5e"/>
      <g class="bd-cup"><path d="M65 72h9l-1 9h-7z" fill="#fff" stroke="#e0d8cc" stroke-width=".8"/><path d="M65.3 73.5h8.4" stroke="#b5713b" stroke-width="2"/><path d="M74 74.5q3 0 2.5 3t-3 2" fill="none" stroke="#e0d8cc" stroke-width="1.4"/>
        <path class="bd-steam" d="M68 70q-2-3 0-5t0-5M71 70q-2-3 0-5" fill="none" stroke="#c9c2b6" stroke-width="1.2" stroke-linecap="round"/></g></g>
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
  el.innerHTML = `<button type="button" class="bd-btn" aria-label="Jo, your study buddy. Tap for a tip">${SVG}</button><div class="bd-say" role="status" aria-live="polite" hidden><b>Jo</b><p></p><i class="bd-tail t1"></i><i class="bd-tail t2"></i></div>`;
  document.body.append(el);
  const say = el.querySelector(".bd-say"), sayP = say.querySelector("p"), svg = el.querySelector(".bd-svg");
  const W = 60, H = 67, SEAT = 51;
  let x = innerWidth - W - 12, y = scrollY + innerHeight + 20, target = null, lastJump = 0, lastSay = 0, hideT = 0, anim = null;
  const enabled = () => pref.get("la-buddy") !== "0" && !root.classList.contains("focus-on");
  const moving = () => root.classList.contains("motion");
  const put = () => { el.style.transform = `translate(${x}px,${y}px)`; if (say) say.classList.toggle("below", y - scrollY < (el.classList.contains("big") ? 240 : 190)); };

  function speak(text, ms = 7000, big = false){
    if (!text) return;
    el.classList.toggle("big", big);
    sayP.textContent = text; say.hidden = false; lastSay = Date.now();
    say.classList.toggle("left", x - scrollX > innerWidth / 2);
    say.classList.toggle("below", y - scrollY < (el.classList.contains("big") ? 240 : 190));
    clearTimeout(hideT); hideT = setTimeout(() => { say.hidden = true; el.classList.remove("big"); }, ms);
  }
  function mood(m, ms = 900){ el.classList.add(m); setTimeout(() => el.classList.remove(m), ms); }

  const SPOTS = ".sheet .memory,.sheet .sheet-head,.sheet .sec,.sheet .sec > *,.sec .path li,.sec .glance .node,.sec .viva details,.card,.subj,.qcard,.panel,.comfort,#today,details.shelf";
  function visibleSpots(){
    const top = Math.max(innerHeight * .2, 200), bottom = innerHeight * .72;
    return [...document.querySelectorAll(SPOTS)].filter(n => { if (!n.offsetParent) return false; const r = n.getBoundingClientRect(); return r.top > top && r.top < bottom && r.width > 120; });
  }
  function spotFor(n){
    const r = n.getBoundingClientRect();
    return [Math.max(8, Math.min(innerWidth - W - 8, r.right - W - 14)) + scrollX, r.top + scrollY - SEAT];
  }
  function jumpTo(n, talk){
    const [nx, ny] = n ? spotFor(n) : [innerWidth - W - 12 + scrollX, scrollY + innerHeight - H - 16];
    target = n; lastJump = Date.now(); if (Date.now() - lastSay > 4000) { say.hidden = true; el.classList.remove("big"); }
    act(null);
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
    el.hidden = false; say.classList.toggle("below", y - scrollY < (el.classList.contains("big") ? 240 : 190));
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
    act(null); mood("happy", 1400);
    speak(Math.random() < .55 ? lineFor(target) : pick(Math.random() < .5 ? TEASE : MOTIVATE), 8000, true);
  });
  say.addEventListener("click", () => { say.hidden = true; el.classList.remove("big"); });

  // Little things Jo does while he sits: sips chai, reads, stretches, waves
  const ACTS = [["chai", 4200], ["read", 6000], ["stretch", 2600], ["wave", 2000]];
  let actT = 0;
  function act(name, ms){
    ACTS.forEach(([a]) => el.classList.remove("act-" + a)); clearTimeout(actT);
    if (name) { el.classList.add("act-" + name); actT = setTimeout(() => el.classList.remove("act-" + name), ms); }
  }
  (function fidget(){
    setTimeout(() => {
      if (enabled() && moving() && !anim && !el.classList.contains("big") && !document.hidden) { const [a, ms] = pick(ACTS); act(a, ms); }
      fidget();
    }, 8000 + Math.random() * 7000);
  })();

  // Nudge after a long quiet spell, then a fresh joke every so often (never more than once a minute)
  let idleT = 0;
  const idle = () => { clearTimeout(idleT); idleT = setTimeout(() => { if (enabled() && !document.hidden && Date.now() - lastSay > 60000) { act("wave", 2000); speak(pick([...TEASE, ...MOTIVATE])); } idle(); }, 90000); };
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
  setTimeout(() => { if (!enabled()) return; const spots = visibleSpots(); jumpTo(spots[0] || null, false); setTimeout(() => { act("wave", 2000); speak(GREET, 8000); }, 800); idle(); }, 1800);
})();
