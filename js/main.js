/* ============================================================
   main.js — Shared logic for all pages
   Depends on: translations.js (must load first)

   Features:
     1. Navbar background change on scroll
     2. Active page highlight via data-page attribute on <body>
     3. Hamburger menu toggle (mobile)
     4. Submenu: hover on desktop, click/tap on mobile
     5. Language switcher — persists across pages via localStorage
     6. Smooth scroll for in-page anchor links (home page)
   ============================================================ */

(function () {
  'use strict';

  /* ============================================================
     DOM references
     ============================================================ */
  const navbar      = document.getElementById('navbar');
  const hamburger   = document.getElementById('hamburger');
  const navMenu     = document.getElementById('nav-menu');
  const langBtnEs   = document.getElementById('lang-es');
  const langBtnEn   = document.getElementById('lang-en');
  const themeToggle = document.getElementById('theme-toggle');

  /* ============================================================
     1. NAVBAR — solid background on scroll
        Inner pages set data-navbar="solid" on <body> to force
        the solid state immediately (no transparent hero).
     ============================================================ */
  function handleNavbarScroll() {
    if (document.body.getAttribute('data-navbar') === 'solid') return;
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  }

  /* Force solid navbar on inner pages (non-home) */
  if (document.body.getAttribute('data-navbar') === 'solid') {
    navbar.classList.add('scrolled');
  }

  let scrollTicking = false;
  window.addEventListener('scroll', () => {
    /* Skip scroll-driven transparency if page forces solid */
    if (document.body.getAttribute('data-navbar') === 'solid') return;
    if (!scrollTicking) {
      requestAnimationFrame(() => {
        handleNavbarScroll();
        scrollTicking = false;
      });
      scrollTicking = true;
    }
  }, { passive: true });

  handleNavbarScroll();


  /* ============================================================
     1b. SITE CONFIG — colors + contact/social links from config.js
     ============================================================ */
  (function applyConfig() {
    if (typeof siteConfig === 'undefined') return;

    /* Apply color palette as CSS custom properties */
    const c = siteConfig.colors;
    if (c) {
      const r = document.documentElement;
      if (c.main)           r.style.setProperty('--color-navy',        c.main);
      if (c.mainDark)       r.style.setProperty('--color-navy-dark',   c.mainDark);
      if (c.mainLight)      r.style.setProperty('--color-navy-light',  c.mainLight);
      if (c.secondary)      r.style.setProperty('--color-teal',        c.secondary);
      if (c.secondaryDark)  r.style.setProperty('--color-teal-dark',   c.secondaryDark);
      if (c.secondaryLight) r.style.setProperty('--color-teal-light',  c.secondaryLight);
      if (c.background)     r.style.setProperty('--color-white',       c.background);
      if (c.text)           r.style.setProperty('--color-text',        c.text);
      if (c.whatsapp)       r.style.setProperty('--color-whatsapp',    c.whatsapp);
      if (c.whatsappDark)   r.style.setProperty('--color-whatsapp-dark', c.whatsappDark);
      if (c.email)          r.style.setProperty('--color-email',       c.email);
      if (c.emailDark)      r.style.setProperty('--color-email-dark',  c.emailDark);
    }

    /* Apply contact/social links */
    document.querySelectorAll('[data-config]').forEach(el => {
      const key = el.getAttribute('data-config');
      if (key === 'whatsapp') el.href = 'https://wa.me/' + siteConfig.whatsapp;
      else if (key === 'email' && siteConfig.emailAddress) el.href = 'mailto:' + siteConfig.emailAddress;
      else if (siteConfig[key]) el.href = siteConfig[key];
    });

    /* Apply plain text values (phone, email address display) */
    document.querySelectorAll('[data-config-text]').forEach(el => {
      const key = el.getAttribute('data-config-text');
      if (key === 'email' && siteConfig.emailAddress) el.textContent = siteConfig.emailAddress;
      else if (key === 'phone' && siteConfig.phoneDisplay) el.textContent = siteConfig.phoneDisplay;
    });

    /* Apply images — sets background-image on placeholder divs, or src on <img> */
    Object.entries(siteConfig.images || {}).forEach(([key, src]) => {
      if (!src) return;
      document.querySelectorAll(`[data-config-img="${key}"]`).forEach(el => {
        if (el.tagName === 'IMG') {
          el.src = src;
        } else {
          el.style.backgroundImage = `url('${src}')`;
          el.style.backgroundSize  = 'cover';
          el.style.backgroundPosition = 'center';
        }
      });
    });

    /* Apply team member name and photo */
    (siteConfig.team || []).forEach((member, i) => {
      const card = document.querySelector(`[data-config-member="${i}"]`);
      if (!card) return;
      if (member.name) {
        const nameEl = card.querySelector('.team-card__name');
        if (nameEl) nameEl.textContent = member.name;
      }
      if (member.photo) {
        const photoEl = card.querySelector('.team-card__photo');
        if (photoEl) {
          photoEl.style.backgroundImage  = `url('${member.photo}')`;
          photoEl.style.backgroundSize   = 'cover';
          photoEl.style.backgroundPosition = 'center';
        }
      }
    });
  })();


  /* ============================================================
     2. ACTIVE PAGE HIGHLIGHT
        Each HTML file sets <body data-page="home|about|services|
        contact|rc|pl|gr|ra">.
        Nav links carry data-nav="..." matching those keys.
        Service detail pages also highlight the Services parent link.
     ============================================================ */
  function setActivePage() {
    const page = document.body.getAttribute('data-page');
    if (!page) return;

    /* Which nav key should be highlighted? */
    const serviceDetailPages = ['rc', 'pl', 'gr', 'ra'];
    const activeKey = serviceDetailPages.includes(page) ? 'services' : page;

    /* Mark matching nav links */
    document.querySelectorAll('[data-nav]').forEach(el => {
      el.classList.remove('active');
      if (el.getAttribute('data-nav') === activeKey) {
        el.classList.add('active');
      }
      /* Also mark the exact submenu link for the current service */
      if (serviceDetailPages.includes(page) && el.getAttribute('data-nav') === page) {
        el.classList.add('active');
      }
    });
  }

  setActivePage();


  /* ============================================================
     3. SMOOTH SCROLLING — only for in-page anchor links
        (Used on the home page; skipped for cross-page links)
     ============================================================ */
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', event => {
      const target = document.querySelector(link.getAttribute('href'));
      if (!target) return;
      event.preventDefault();
      closeMobileMenu();
      const top = target.getBoundingClientRect().top + window.scrollY - navbar.offsetHeight;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });


  /* ============================================================
     4. HAMBURGER MENU
     ============================================================ */
  function openMobileMenu() {
    navMenu.classList.add('open');
    hamburger.classList.add('open');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    navMenu.classList.remove('open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    /* Collapse any open submenus */
    document.querySelectorAll('.submenu.submenu--open').forEach(sm => {
      sm.classList.remove('submenu--open');
    });
  }

  if (hamburger) {
    hamburger.addEventListener('click', () => {
      navMenu.classList.contains('open') ? closeMobileMenu() : openMobileMenu();
    });
  }

  /* Close on outside click */
  document.addEventListener('click', event => {
    if (navbar && !navbar.contains(event.target)) closeMobileMenu();
  });

  /* Close on Escape */
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeMobileMenu();
  });


  /* ============================================================
     5. SUBMENU — desktop hover (CSS) + mobile click (JS)
        On mobile, tapping the Services link toggles the submenu
        instead of navigating away.
     ============================================================ */
  document.querySelectorAll('.navbar__item--has-submenu').forEach(item => {
    const trigger = item.querySelector('.navbar__link');
    const submenu = item.querySelector('.submenu');
    if (!trigger || !submenu) return;

    trigger.addEventListener('click', event => {
      /* Only intercept on mobile (hamburger button is visible) */
      if (window.getComputedStyle(hamburger).display === 'none') return;

      event.preventDefault();
      const isOpen = submenu.classList.contains('submenu--open');

      /* Close all other open submenus first */
      document.querySelectorAll('.submenu.submenu--open').forEach(sm => {
        sm.classList.remove('submenu--open');
      });

      if (!isOpen) submenu.classList.add('submenu--open');
    });
  });


  /* ============================================================
     6. LANGUAGE SWITCHER
        Reads from the global `translations` object in translations.js.
        Saves preference to localStorage so it persists across pages.
     ============================================================ */
  function applyLanguage(lang) {
    if (!translations?.[lang]) return;

    /* Update every element with a data-i18n attribute */
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key  = el.getAttribute('data-i18n');
      const text = translations[lang][key];
      if (text !== undefined) el.textContent = text;
    });

    /* Sync the HTML lang attribute (accessibility + SEO) */
    document.documentElement.setAttribute('lang', lang);

    /* Toggle active styling on buttons */
    if (langBtnEs) {
      langBtnEs.classList.toggle('active', lang === 'es');
      langBtnEs.setAttribute('aria-pressed', String(lang === 'es'));
    }
    if (langBtnEn) {
      langBtnEn.classList.toggle('active', lang === 'en');
      langBtnEn.setAttribute('aria-pressed', String(lang === 'en'));
    }

    try { localStorage.setItem('heyreg_lang', lang); } catch (_) {}
  }

  if (langBtnEs) langBtnEs.addEventListener('click', () => applyLanguage('es'));
  if (langBtnEn) langBtnEn.addEventListener('click', () => applyLanguage('en'));

  /* Restore saved language on every page load */
  (function initLanguage() {
    let lang = 'es';
    try { lang = localStorage.getItem('heyreg_lang') || 'es'; } catch (_) {}
    applyLanguage(lang);
  })();


  /* ============================================================
     7. DARK MODE TOGGLE
        Persists choice via localStorage.
     ============================================================ */
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    try { localStorage.setItem('heyreg_theme', theme); } catch (_) {}
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      applyTheme(isDark ? 'light' : 'dark');
    });
  }

  /* Restore saved theme before first paint */
  (function initTheme() {
    let theme = 'light';
    try { theme = localStorage.getItem('heyreg_theme') || 'light'; } catch (_) {}
    if (theme === 'dark') applyTheme('dark');
  })();

})();
