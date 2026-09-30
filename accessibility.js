(function () {
  'use strict';

  function makeKeyboardAccessible(element) {
    if (!element.hasAttribute('role')) element.setAttribute('role', 'button');
    if (!element.hasAttribute('tabindex')) element.setAttribute('tabindex', '0');
    element.addEventListener('keydown', function (event) {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        element.click();
      }
    });
  }

  function syncExpanded(header) {
    var section = header.closest('.study-section');
    if (section) header.setAttribute('aria-expanded', String(section.classList.contains('open')));
  }

  document.addEventListener('DOMContentLoaded', function () {
    if (!document.querySelector('.skip-link') && document.querySelector('main')) {
      var main = document.querySelector('main');
      if (!main.id) main.id = 'main-content';
      var skip = document.createElement('a');
      skip.className = 'skip-link';
      skip.href = '#' + main.id;
      skip.textContent = 'Skip to content';
      document.body.insertBefore(skip, document.body.firstChild);
    }

    document.querySelectorAll('.study-section-header[onclick]').forEach(function (header) {
      makeKeyboardAccessible(header);
      syncExpanded(header);
      header.addEventListener('click', function () {
        window.requestAnimationFrame(function () { syncExpanded(header); });
      });
    });

    document.querySelectorAll('.flashcard[onclick], .bandit[onclick], [data-keyboard-control][onclick]').forEach(function (element) {
      makeKeyboardAccessible(element);
    });

    document.querySelectorAll('a[target="_blank"]').forEach(function (link) {
      var values = (link.getAttribute('rel') || '').split(/\s+/).filter(Boolean);
      if (!values.includes('noopener')) values.push('noopener');
      link.setAttribute('rel', values.join(' '));
    });

    var style = document.createElement('style');
    style.textContent = [
      '.skip-link{position:fixed;left:1rem;top:-5rem;z-index:9999;padding:.65rem 1rem;border-radius:8px;background:#111;color:#fff;font:700 14px/1.2 system-ui;text-decoration:none}',
      '.skip-link:focus{top:1rem}',
      ':focus-visible{outline:3px solid #22d3ee!important;outline-offset:3px!important}',
      '@media(prefers-reduced-motion:reduce){*,*::before,*::after{scroll-behavior:auto!important;animation-duration:.01ms!important;animation-iteration-count:1!important;transition-duration:.01ms!important}}'
    ].join('');
    document.head.appendChild(style);
  });
})();
