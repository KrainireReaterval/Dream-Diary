/**
 * navigation.js — injects the fixed site-nav bar
 *
 * [CHANGED] Removed the inline <style> injection that was here previously.
 * All #site-nav styles now live in css/styles.css (section 9).
 * This script only creates the DOM element.
 */
(function () {
  'use strict';

  var nav = document.createElement('nav');
  nav.id = 'site-nav';

  var current = window.location.pathname.split('/').pop() || 'index.html';
  var links = [
    { label: 'home',     href: 'index.html' },
    { label: 'blog',     href: 'blog.html' },
    { label: 'about',    href: 'about.html' },
    { label: 'projects', href: 'projects.html' },
  ];

  links.forEach(function (item) {
    if (item.href === current) return;
    var a = document.createElement('a');
    a.href = item.href;
    a.textContent = item.label;
    nav.appendChild(a);
  });

  document.body.appendChild(nav);
})();
