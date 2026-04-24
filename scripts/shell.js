/* ============================================================
   SHELL — injects nav, drawer, footer into every page.
   Each page sets `window.SHELL_BASE` before loading this file:
     root pages  → SHELL_BASE = './'
     subpages    → SHELL_BASE = '../'
   ============================================================ */
(function () {
  const base   = window.SHELL_BASE || './';
  const onHome = window.location.pathname.replace(/\\/g, '/').split('/').pop().replace('', 'index.html') === 'index.html';

  const link = {
    home:     onHome ? '#home'       : base + 'index.html',
    research: base + 'research.html',
    projects: base + 'projects.html',
    cv:       base + 'CV.pdf',
  };

  /* ── NAV ──────────────────────────────────────────────── */
  const navEl = document.getElementById('shell-nav');
  if (navEl) {
    navEl.innerHTML = `
      <nav class="nav" aria-label="Main navigation">
        <ul class="nav-links" role="list">
          <li><a href="${link.home}"     class="nav-link-home">Home</a></li>
          <li><a href="${link.research}" class="nav-link-research">Research</a></li>
          <li><a href="${link.projects}" class="nav-link-projects">Projects</a></li>
          <li><a href="${link.cv}" class="nav-link-cv" target="_blank" rel="noopener">CV</a></li>
        </ul>
        <div class="nav-right">
          <button class="drawer-btn" aria-haspopup="true" aria-expanded="false" aria-controls="drawer">
            <span class="drawer-btn-dot" aria-hidden="true"></span>
            Shelvia Wongso
          </button>
          <button class="hamburger-btn" id="hamburgerBtn" aria-label="Open menu" aria-expanded="false">
            <svg class="hamburger-icon" width="22" height="22" viewBox="0 0 22 22" fill="none">
              <line class="ham-top"    x1="3" y1="6"  x2="19" y2="6"  stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
              <line class="ham-mid"    x1="3" y1="11" x2="19" y2="11" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
              <line class="ham-bottom" x1="3" y1="16" x2="19" y2="16" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
            </svg>
          </button>
        </div>
      </nav>
      <div class="mobile-menu" id="mobileMenu" aria-hidden="true">
        <a href="${link.home}" class="mobile-menu-link">
          <span class="mobile-menu-icon" style="background:rgba(184,152,255,0.15);">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" stroke="var(--accent-lavender)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </span>
          Home
        </a>
        <a href="${link.research}" class="mobile-menu-link">
          <span class="mobile-menu-icon" style="background:rgba(184,152,255,0.15);">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2zM22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" stroke="var(--accent-lavender)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </span>
          Research
        </a>
        <a href="${link.projects}" class="mobile-menu-link">
          <span class="mobile-menu-icon" style="background:rgba(255,63,164,0.15);">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="var(--accent-pink)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </span>
          Projects
        </a>
        <a href="${link.cv}" class="mobile-menu-link" target="_blank" rel="noopener">
          <span class="mobile-menu-icon" style="background:rgba(240,192,64,0.15);">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" stroke="var(--accent-gold)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><polyline points="14 2 14 8 20 8" stroke="var(--accent-gold)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </span>
          CV
        </a>
      </div>`;
  }

  /* ── DRAWER ───────────────────────────────────────────── */
  const drawerEl = document.getElementById('shell-drawer');
  if (drawerEl) {
    drawerEl.innerHTML = `
      <div class="drawer-overlay" id="drawerOverlay" aria-hidden="true"></div>
      <aside class="drawer" id="drawer" role="dialog" aria-modal="true" aria-label="Profile drawer">
        <button class="drawer-close" id="drawerClose" aria-label="Close profile drawer">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
          </svg>
        </button>

        <div class="drawer-avatar" aria-label="Shelvia's profile photo"><img src="images/prof_pic.jpg" alt="Shelvia Wongso"></div>
        <div class="drawer-name">Shelvia Wongso</div>
        <div class="drawer-tagline">AI Researcher · Creative Developer</div>

        <div class="drawer-section-label">About</div>
        <p class="drawer-bio">
          Hi, I'm Shelvia, an AI researcher based in Singapore. I am a Research Fellow at Nanyang Technological University, where I work with 
          <a href="https://jeremiehoussineau.com/" target="_blank" rel="noopener noreferrer">Jeremie Houssineau</a>
          on possibility theory for epistemic uncertainty in AI systems. I completed my PhD at the National University of Singapore in 2025 under
          <a href="https://mehulmotani.github.io/" target="_blank" rel="noopener noreferrer">Mehul Motani</a>,
          where I studied information-theoretic approaches to analyzing deep neural networks.
          <br><br>
          I am also looking towards specializing in <strong> AI safety </strong> and <strong> education</strong>, two areas I care deeply about. Outside of research, I enjoy creating interactive web experiences that bring my ideas to life.
        </p>

        <div class="drawer-divider"></div>

        <div class="drawer-section-label">Connect</div>
        <div class="drawer-links">
          <a href="https://www.linkedin.com/in/shelvia-w/" target="_blank" rel="noopener" class="drawer-link">
            <span class="drawer-link-icon linkedin">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" stroke="#0A66C2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <circle cx="4" cy="4" r="2" stroke="#0A66C2" stroke-width="2"/>
              </svg>
            </span>
            LinkedIn
          </a>
          <a href="https://github.com/shelvia-w" target="_blank" rel="noopener" class="drawer-link">
            <span class="drawer-link-icon github">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" stroke="rgba(255,255,255,0.7)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </span>
            GitHub
          </a>
          <a href="mailto:shelvia1039@gmail.com" class="drawer-link">
            <span class="drawer-link-icon email">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="#ff8c60" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <polyline points="22,6 12,13 2,6" stroke="#ff8c60" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </span>
            Email
          </a>
          <a href="https://scholar.google.com/citations?user=f27noUwAAAAJ&hl=en" target="_blank" rel="noopener" class="drawer-link">
            <span class="drawer-link-icon scholar">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L1 8l11 6 9-4.91V17M5 9.57V17c0 0 2.5 3 7 3s7-3 7-3v-7.43" stroke="#4285F4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </span>
            Google Scholar
          </a>

        </div>
      </aside>`;
  }

  /* ── FOOTER ───────────────────────────────────────────── */
  const footerEl = document.getElementById('shell-footer');
  if (footerEl) {
    const year = new Date().getFullYear();
    footerEl.innerHTML = `
      <footer class="footer">
        <div class="container">
          <p class="footer-text">
            Crafted with ❤️ by <span>Shelvia</span> &nbsp;·&nbsp; <span>${year}</span>
          </p>
        </div>
      </footer>`;
  }
})();
