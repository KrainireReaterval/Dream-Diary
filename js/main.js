/**
 * main.js — shared page logic
 *
 * 1. Canvas scaling  — reads data-w / data-h from the hero canvas and applies
 *    transform:scale(). Supports data-canvas-container for sidebar layouts.
 * 2. Scroll-to       — data-scroll-to="<id>" elements scroll that id into view.
 * 3. Blog overlays   — data-overlay="<panelId>" triggers slide-in panels.
 * 4. Sidebar highlights — IntersectionObserver adds is-active to canvas
 *    elements when their linked content section enters the viewport.
 */
(function () {
  'use strict';

  /* ── 1. Canvas scaling ── */
  var canvas = document.querySelector('[data-canvas]');

  if (canvas) {
    var W = parseFloat(canvas.getAttribute('data-w'));
    var H = parseFloat(canvas.getAttribute('data-h'));
    var containerSel = canvas.getAttribute('data-canvas-container');

    function getScaleBounds() {
      if (containerSel) {
        var el = document.querySelector(containerSel);
        if (el) {
          var r = el.getBoundingClientRect();
          return { w: r.width, h: r.height };
        }
      }
      return { w: window.innerWidth, h: window.innerHeight };
    }

    function scaleCanvas() {
      var b = getScaleBounds();
      var s = Math.min(b.w / W, b.h / H);
      canvas.style.transform = 'scale(' + s + ')';
    }

    scaleCanvas();
    window.addEventListener('resize', scaleCanvas);
  }

  /* ── 2. Scroll-to click handlers ── */
  var scrollTriggers = document.querySelectorAll('[data-scroll-to]');
  for (var i = 0; i < scrollTriggers.length; i++) {
    scrollTriggers[i].addEventListener('click', (function (el) {
      return function () {
        var target = document.getElementById(el.getAttribute('data-scroll-to'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      };
    })(scrollTriggers[i]));
  }

  /* ── 3. Blog overlay panels ── */
  var backdrop = document.getElementById('overlay-backdrop');
  var overlayTriggers = document.querySelectorAll('[data-overlay]');
  var closeButtons = document.querySelectorAll('.overlay-close');

  function openOverlay(panelId) {
    var panel = document.getElementById(panelId);
    if (!panel) return;
    panel.classList.add('is-open');
    panel.focus();
    if (backdrop) backdrop.classList.add('is-open');
  }

  function closeAllOverlays() {
    var panels = document.querySelectorAll('.overlay-panel');
    for (var k = 0; k < panels.length; k++) {
      panels[k].classList.remove('is-open');
    }
    if (backdrop) backdrop.classList.remove('is-open');
  }

  for (var j = 0; j < overlayTriggers.length; j++) {
    overlayTriggers[j].addEventListener('click', (function (el) {
      return function () { openOverlay(el.getAttribute('data-overlay')); };
    })(overlayTriggers[j]));

    overlayTriggers[j].addEventListener('keydown', (function (el) {
      return function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openOverlay(el.getAttribute('data-overlay'));
        }
      };
    })(overlayTriggers[j]));
  }

  for (var m = 0; m < closeButtons.length; m++) {
    closeButtons[m].addEventListener('click', closeAllOverlays);
  }

  if (backdrop) backdrop.addEventListener('click', closeAllOverlays);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeAllOverlays();
  });

  /* ── 4. Sidebar canvas highlights (IntersectionObserver) ── */
  var sidebarCanvas = document.querySelector('.sidebar [data-canvas]');
  if (sidebarCanvas && 'IntersectionObserver' in window) {

    var highlightMap = {};
    var forEls = sidebarCanvas.querySelectorAll('[data-for]');
    for (var n = 0; n < forEls.length; n++) {
      var id = forEls[n].getAttribute('data-for');
      if (!highlightMap[id]) highlightMap[id] = [];
      highlightMap[id].push(forEls[n]);
    }

    var sectionIds = Object.keys(highlightMap);
    if (sectionIds.length) {
      var observer = new IntersectionObserver(function (entries) {
        for (var e = 0; e < entries.length; e++) {
          var els = highlightMap[entries[e].target.id] || [];
          for (var t = 0; t < els.length; t++) {
            els[t].classList.toggle('is-active', entries[e].isIntersecting);
          }
        }
        var anyActive = sidebarCanvas.querySelector('[data-for].is-active');
        sidebarCanvas.classList.toggle('has-active', !!anyActive);
      }, { threshold: 0.3 });

      for (var p = 0; p < sectionIds.length; p++) {
        var section = document.getElementById(sectionIds[p]);
        if (section) observer.observe(section);
      }
    }
  }

})();
