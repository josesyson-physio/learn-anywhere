// Inclusive.Si page: pauses the SVG animations for people who prefer reduced motion.
(function () {
  try {
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.querySelectorAll('#isi-about svg').forEach(function (s) { if (s.pauseAnimations) { s.pauseAnimations(); } });
    }
  } catch (e) {}
})();
