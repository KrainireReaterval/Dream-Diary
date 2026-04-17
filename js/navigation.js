(function () {
  if (!document.querySelector('link[href*="Goblin+One"]')) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Goblin+One&display=swap';
    document.head.appendChild(link);
  }

  const style = document.createElement('style');
  style.textContent = `
    #site-nav {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 9999;
      display: flex;
      justify-content: flex-end;
      gap: 32px;
      padding: 16px 40px;
      background: white;
      transform: translateY(-100%);
      transition: transform 0.25s ease;
    }
    #site-nav.nav-visible {
      transform: translateY(0);
    }
    #site-nav a {
      font-family: 'Goblin One', serif;
      font-size: 12px;
      color: black;
      text-decoration: none;
      white-space: nowrap;
    }
  `;
  document.head.appendChild(style);

  const nav = document.createElement('nav');
  nav.id = 'site-nav';

  const current = window.location.pathname.split('/').pop() || 'index.html';
  const links = [
    { label: 'home',     href: 'index.html' },
    { label: 'blog',     href: 'blog.html' },
    { label: 'about',    href: 'about.html' },
    { label: 'projects', href: 'projects.html' },
  ];

  links.forEach(function (item) {
    if (item.href === current) return;
    const a = document.createElement('a');
    a.href = item.href;
    a.textContent = item.label;
    nav.appendChild(a);
  });

  document.body.appendChild(nav);

  const TRIGGER_Y = 48;
  let hideTimer = null;

  function show() {
    clearTimeout(hideTimer);
    nav.classList.add('nav-visible');
  }

  function scheduleHide() {
    clearTimeout(hideTimer);
    hideTimer = setTimeout(function () {
      nav.classList.remove('nav-visible');
    }, 250);
  }

  document.addEventListener('mousemove', function (e) {
    if (e.clientY < TRIGGER_Y) {
      show();
    } else if (!nav.matches(':hover')) {
      scheduleHide();
    }
  });

  nav.addEventListener('mouseenter', show);
  nav.addEventListener('mouseleave', scheduleHide);
})();
