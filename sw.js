// Offline support: cache the app shell on install, serve it cache-first,
// and cache Google Fonts the first time they load.
const VERSION = "la-v10";
const SHELL = ["./", "index.html", "manifest.webmanifest", "vendor/jspdf.umd.min.js", "icons/icon.svg", "icons/icon-192.png", "icons/icon-512.png", "icons/logo-animated.svg","library/books.js","library/msk.js","library/neuro.js","library/cardio.js","library/principles.js","library/syllabus.js","library/mgr-electro.js","library/mgr-exercise.js","library/mgr-ortho.js","library/mgr-neuro-cardio.js","library/mgr-map.js","library/ei-neurobiology.js","library/ei-disorders.js","library/ei-child-dev.js","library/ei-therapy.js","library/ei-speech-family.js","library/pgdei-map.js"];

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
      const copy = res.clone(); caches.open(VERSION).then(c => c.put("index.html", copy));
      return res;
    }).catch(() => caches.match("index.html")));
    return;
  }

  // Everything else: cache first, then network (and remember it).
  e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(res => {
    if (res.ok || res.type === "opaque") { const copy = res.clone(); caches.open(VERSION).then(c => c.put(req, copy)); }
    return res;
  })));
});
