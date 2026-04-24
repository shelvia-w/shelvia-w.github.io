/* ============================================================
   DRAWER
   ============================================================ */
const drawerOverlay = document.getElementById('drawerOverlay');
const drawer        = document.getElementById('drawer');
const drawerBtns    = document.querySelectorAll('.drawer-btn, .drawer-open-btn');
const drawerClose   = document.getElementById('drawerClose');

function openDrawer() {
  drawerOverlay.classList.add('open');
  drawer.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeDrawer() {
  drawerOverlay.classList.remove('open');
  drawer.classList.remove('open');
  document.body.style.overflow = '';
}

drawerBtns.forEach(btn => btn.addEventListener('click', openDrawer));
drawerClose?.addEventListener('click', closeDrawer);
drawerOverlay?.addEventListener('click', closeDrawer);

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeDrawer();
});

/* ============================================================
   SCROLL: nav shrink
   ============================================================ */
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) nav?.classList.add('scrolled');
  else nav?.classList.remove('scrolled');
}, { passive: true });

/* ============================================================
   SCROLL REVEAL
   ============================================================ */
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealEls.forEach(el => revealObserver.observe(el));

/* ============================================================
   SMOOTH ANCHOR SCROLL
   ============================================================ */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
