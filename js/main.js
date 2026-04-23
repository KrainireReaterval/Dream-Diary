/**
 * main.js — shared page logic
 *
 * Replaces all per-page inline <script> blocks. Two responsibilities:
 *   1. Canvas scaling: reads data-canvas / data-w / data-h from the hero
 *      canvas element and applies a CSS transform: scale() so it fills
 *      the viewport while keeping its fixed internal coordinate system.
 *   2. Scroll-to interactions: any element with data-scroll-to="<id>"
 *      smoothly scrolls the matching element into view on click.
 */
(function () {
  'use strict';

  /* ── 1. Canvas scaling ── */
  var canvas = document.querySelector('[data-canvas]');

  if (canvas) {
    var W = parseFloat(canvas.getAttribute('data-w'));
    var H = parseFloat(canvas.getAttribute('data-h'));

    function scaleCanvas() {
      var s = Math.min(window.innerWidth / W, window.innerHeight / H);
      canvas.style.transform = 'scale(' + s + ')';
    }

    scaleCanvas();
    window.addEventListener('resize', scaleCanvas);
  }

  /* ── 2. Scroll-to click handlers ── */
  var triggers = document.querySelectorAll('[data-scroll-to]');

  for (var i = 0; i < triggers.length; i++) {
    triggers[i].addEventListener('click', (function (el) {
      return function () {
        var target = document.getElementById(el.getAttribute('data-scroll-to'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      };
    })(triggers[i]));
  }
})();
