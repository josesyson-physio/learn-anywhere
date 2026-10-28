// Offline support: cache the app shell on install, serve it cache-first,
// and cache Google Fonts the first time they load.
const VERSION = "la-v23";
const SHELL = ["./", "index.html", "manifest.webmanifest", "vendor/jspdf.umd.min.js", "icons/icon.svg", "icons/icon-192.png", "icons/icon-512.png", "icons/icon-maskable-512.png", "icons/apple-touch-icon.png", "icons/logo-animated.svg","inclusive-si.html","library/books.js","library/msk.js","library/neuro.js","library/cardio.js","library/principles.js","library/syllabus.js","library/mgr-electro.js","library/mgr-exercise.js","library/mgr-ortho.js","library/mgr-neuro-cardio.js","library/mgr-map.js","library/ei-neurobiology.js","library/ei-disorders.js","library/ei-child-dev.js","library/ei-therapy.js","library/ei-speech-family.js","library/pgdei-map.js","library/relate-1.js","library/relate-2.js","library/relate-3.js","library/relate-4.js","library/relate-5.js","library/relate-6.js","library/bpt-biomech-a.js","library/bpt-biomech-b.js","library/bpt-exth1.js","library/bpt-exth2.js","library/bpt-medpath.js","library/relate-bpt-biomech-a.js","library/relate-bpt-biomech-b.js","library/relate-bpt-exth1.js","library/relate-bpt-exth2.js","library/relate-bpt-medpath.js","library/bpt-cardio.js","library/relate-bpt-cardio.js","library/bpt-ptorthoneuro.js","library/relate-bpt-ptorthoneuro.js","library/bpt-orthorehab.js","library/relate-bpt-orthorehab.js","library/bpt-electro1.js","library/relate-bpt-electro1.js","library/bpt-electro2.js","library/relate-bpt-electro2.js","library/bpt-commneuro.js","library/relate-bpt-commneuro.js","library/bpt-psych.js","library/relate-bpt-psych.js","library/bpt-anat-a.js","library/relate-bpt-anat-a.js","library/bpt-anat-b.js","library/relate-bpt-anat-b.js","library/bpt-physio.js","library/relate-bpt-physio.js","library/bpt-physics.js","library/relate-bpt-physics.js"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  const sameOrigin = url.origin === location.origin;
  const isFont = /fonts\.(googleapis|gstatic)\.com$/.test(url.hostname);
  if (!sameOrigin && !isFont) return;

  // Pages: try the network first so updates arrive, fall back to the cache offline.
  if (req.mode === "navigate") {
    e.respondWith(fetch(req).then(res => {
      if (res.ok) { const copy = res.clone(); caches.open(VERSION).then(c => c.put(req, copy)); }
      return res;
    }).catch(() => caches.match(req, { ignoreSearch: true }).then(hit => hit || caches.match("index.html"))));
    return;
  }

  // Everything else: cache first, then network (and remember it).
  e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(res => {
    if (res.ok || res.type === "opaque") { const copy = res.clone(); caches.open(VERSION).then(c => c.put(req, copy)); }
    return res;
  })));
});
