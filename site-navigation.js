(() => {
  const script = document.currentScript;
  const siteRoot = new URL('./', script?.src || document.baseURI);
  const homeUrl = new URL('index.html', siteRoot).href;
  const labUrl = 'https://mohebi-associates.org/';

  function addSiteNavigation() {
    if (!document.body || document.querySelector('[data-nldm-site-navigation]')) return;

    const style = document.createElement('style');
    style.textContent = `
      .nldm-site-navigation {
        position: relative;
        z-index: 1000;
        width: 100%;
        border-bottom: 1px solid rgba(255,255,255,.13);
        background: #211d1a;
        color: #fafaf9;
        font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      }
      .nldm-site-navigation__inner {
        width: min(1120px, 100%);
        min-height: 42px;
        margin: 0 auto;
        padding: .45rem 1.25rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
      }
      .nldm-site-navigation__label {
        color: #d6d3d1;
        font-size: .75rem;
        font-weight: 700;
        letter-spacing: .08em;
        text-transform: uppercase;
      }
      .nldm-site-navigation__links { display: flex; align-items: center; gap: .55rem 1rem; flex-wrap: wrap; }
      .nldm-site-navigation a {
        color: #fafaf9;
        font-size: .82rem;
        font-weight: 700;
        line-height: 1.3;
        text-decoration: none;
      }
      .nldm-site-navigation a:hover { color: #5eead4; text-decoration: underline; text-underline-offset: 3px; }
      .nldm-site-navigation a:focus-visible { outline: 3px solid #5eead4; outline-offset: 3px; border-radius: 2px; }
      .nldm-site-navigation__separator { color: #78716c; }
      @media (max-width: 520px) {
        .nldm-site-navigation__inner { align-items: flex-start; flex-direction: column; gap: .3rem; }
        .nldm-site-navigation__label { font-size: .68rem; }
      }
      @media print { .nldm-site-navigation { display: none !important; } }
    `;

    const nav = document.createElement('nav');
    nav.className = 'nldm-site-navigation';
    nav.dataset.nldmSiteNavigation = '';
    nav.setAttribute('aria-label', 'Course and laboratory');

    const currentPath = new URL(window.location.href).pathname.replace(/\/index\.html$/, '/');
    const homePath = new URL(homeUrl).pathname.replace(/\/index\.html$/, '/');
    const homeCurrent = currentPath === homePath ? ' aria-current="page"' : '';

    nav.innerHTML = `
      <div class="nldm-site-navigation__inner">
        <span class="nldm-site-navigation__label">Psychology 505</span>
        <span class="nldm-site-navigation__links">
          <a href="${homeUrl}"${homeCurrent}>NLDM Home</a>
          <span class="nldm-site-navigation__separator" aria-hidden="true">·</span>
          <a href="${labUrl}" target="_blank" rel="noopener noreferrer">Mohebi &amp; Associates Lab ↗</a>
        </span>
      </div>
    `;

    document.head.appendChild(style);
    document.body.insertBefore(nav, document.body.firstChild);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', addSiteNavigation, { once: true });
  } else {
    addSiteNavigation();
  }
})();
