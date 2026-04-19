# HeyReg — Regulatory Consulting Website

A fully static, bilingual (Spanish / English) multi-page regulatory consulting website. Built with HTML5, CSS3, and Vanilla JavaScript. No build step, no frameworks, no dependencies beyond Google Fonts.

---

## Project Overview

This is the public-facing website for a regulatory consulting firm serving businesses in highly regulated industries. The site defaults to Spanish (`es`) and supports instant language switching to English (`en`) without a page reload. Language preference is saved in `localStorage` and persists across all pages. The site works by simply opening any `.html` file in a browser or using VS Code Live Server.

---

## Architecture

```
regulatory-consulting/
│
├── index.html                        Home — landing page with summary of all sections
├── about.html                        About Us — full story, mission, vision, values, team
├── contact.html                      Contact — WhatsApp/email cards + office info + map
│
├── services/
│   ├── index.html                    Services overview — all 4 services with full descriptions
│   ├── regulatory-compliance.html    Detail: Regulatory Compliance
│   ├── permits-and-licenses.html     Detail: Permits & Licenses
│   ├── government-relations.html     Detail: Government Relations
│   └── risk-assessment.html          Detail: Risk Assessment
│
├── css/
│   ├── styles.css                    Global styles — design tokens, all components, layout
│   └── responsive.css                Breakpoints for tablet (≤768px) and mobile (≤480px)
│
├── js/
│   ├── main.js                       Shared logic — navbar, hamburger, active page, language
│   └── translations.js               All user-facing text in EN and ES, organized by page
│
├── assets/
│   └── images/
│       └── .gitkeep                  Keeps the images/ folder tracked by git when empty
│
└── README.md                         This file
```

---

## Tech Stack

| Layer      | Technology                                                          |
|------------|---------------------------------------------------------------------|
| Markup     | HTML5 — semantic elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`) |
| Styles     | CSS3 — Custom Properties, Grid, Flexbox, `@media` queries           |
| Behaviour  | Vanilla JavaScript (ES6+, IIFE pattern — no frameworks)             |
| Fonts      | Google Fonts — Inter (body), Playfair Display (headings)            |
| Icons      | Inline SVG — zero external icon libraries                           |

---

## How to Run Locally

### Option A — Open directly in a browser

1. Clone or download this repository.
2. Navigate to the `regulatory-consulting/` folder.
3. Double-click `index.html` — it opens in your default browser.
4. All pages work the same way since all asset paths are relative.

### Option B — VS Code Live Server (recommended)

1. Install the **Live Server** extension in VS Code.
2. Open the `regulatory-consulting/` folder in VS Code.
3. Right-click `index.html` → **Open with Live Server**.
4. The browser auto-reloads on every file save.

---

## How to Deploy to GitHub Pages

1. Push the repository to GitHub.
2. Go to **Settings → Pages** in your GitHub repository.
3. Under **Source**, select your branch (e.g. `main`) and set the folder to `/regulatory-consulting` (or `/` if files are at the repo root).
4. Click **Save**. GitHub publishes the site at:
   ```
   https://<your-username>.github.io/<repo-name>/
   ```
5. Wait ~60 seconds for the first build, then visit the URL.

---

## How to Add a New Language

1. **translations.js** — Add a new top-level key (e.g. `"fr"`) inside the `translations` object. Copy every key from `"en"` and translate the values.

2. **All HTML files** — Add a new button inside `.navbar__lang` in every page:
   ```html
   <span class="lang-divider" aria-hidden="true">|</span>
   <button class="lang-btn" id="lang-fr" aria-pressed="false">FR</button>
   ```

3. **main.js** — Wire the new button near the existing language buttons:
   ```js
   const langBtnFr = document.getElementById('lang-fr');
   if (langBtnFr) langBtnFr.addEventListener('click', () => applyLanguage('fr'));
   ```
   Also update `applyLanguage()` to handle the new button's active state alongside `langBtnEs` and `langBtnEn`.

4. Save. The new language is immediately active.

---

## How to Add a New Service Page

Follow these steps to add a fifth service (e.g. "Environmental Compliance"):

**Step 1 — Create the HTML file**

Copy `services/regulatory-compliance.html` to `services/environmental-compliance.html`. Change:
- `<body data-page="ec" ...>` — pick a unique two-letter key
- All `data-i18n` attributes to use a new prefix (e.g. `ec_*`)
- The breadcrumb and page title
- The related services cards (link to the other 4 services)

**Step 2 — Add the navbar submenu entry (all pages)**

In every HTML file, add a new `<li>` inside the `.submenu` of the Services nav item:
```html
<!-- Root-level pages (index.html, about.html, contact.html) -->
<li><a href="services/environmental-compliance.html" data-nav="ec" data-i18n="nav_service_environmental">Environmental Compliance</a></li>

<!-- services/ pages -->
<li><a href="environmental-compliance.html" data-nav="ec" data-i18n="nav_service_environmental">Environmental Compliance</a></li>
```

**Step 3 — Add translations**

In `translations.js`, add the new key in both `en` and `es` blocks:
- Navbar: `nav_service_environmental`
- All page-specific keys with the `ec_` prefix (overview, included items, process steps, etc.)

**Step 4 — Link from other pages**

Add a card linking to the new service on:
- `index.html` (Services Preview section)
- `services/index.html` (Services Overview grid)
- The Related Services section of the other 4 service detail pages

---

## How to Add a New Module (e.g. IT Services)

To add an entirely new top-level section (e.g. IT services with its own overview + detail pages):

**Step 1 — Create the folder and files**
```
regulatory-consulting/
└── it-services/
    ├── index.html                 IT Services overview
    ├── cybersecurity.html         IT detail page
    └── cloud-compliance.html      IT detail page
```

**Step 2 — Use the correct relative paths**

Files inside `it-services/` are at the same depth as `services/`. Use the same `../` prefix pattern:
- CSS: `href="../css/styles.css"`
- JS: `src="../js/translations.js"`, `src="../js/main.js"`
- Nav links: `href="../index.html"`, `href="../about.html"`, etc.

**Step 3 — Add a new navbar item**

In every HTML file, add an `<li>` to `.navbar__list`:
```html
<li class="navbar__item navbar__item--has-submenu">
  <!-- Root-level pages -->
  <a href="it-services/index.html" class="navbar__link" data-nav="it" data-i18n="nav_it">IT Services</a>
  <ul class="submenu" aria-label="IT Services submenu">
    <li><a href="it-services/cybersecurity.html" data-nav="cyber" data-i18n="nav_it_cyber">Cybersecurity</a></li>
  </ul>
</li>
```

**Step 4 — Add `data-page` keys**

Set `data-page="it"` on `it-services/index.html` body and `data-page="cyber"` on detail pages. In `main.js`, add `"it"` and its children to the `serviceDetailPages` array if they should highlight the IT nav link.

**Step 5 — Add translations**

Add all new keys to both `en` and `es` blocks in `translations.js`.

---

## Customization Checklist

Replace all placeholder values before going live:

- [ ] **Company name** — search `HeyReg` across all HTML files and `translations.js`
- [ ] **WhatsApp number** — replace `50662889402` in all `href="https://wa.me/50662889402"` links
- [ ] **Email address** — replace `contact@heyreg.net` in all `href="mailto:..."` links and translation values
- [ ] **Logo** — replace the text logo in `.navbar__logo` with `<img src="../assets/images/logo.svg" alt="Company Name" />`
- [ ] **Placeholder images** — replace every `.image-placeholder` `<div>` and `.team-card__photo` `<div>` with real `<img>` elements
- [ ] **Map** — replace the `.map-placeholder` `<div>` in `contact.html` with a Google Maps `<iframe>`
- [ ] **Office address** — update `contact_office_address` and `contact_office_hours` in both language blocks of `translations.js`
- [ ] **Phone number display** — update `contact_wa_number` in `translations.js`
- [ ] **Color palette** — edit the `--color-*` custom properties in the `:root` block of `css/styles.css`
- [ ] **Team names and roles** — update `about_member*` keys in `translations.js`
- [ ] **Spanish copy** — review all `es` values in `translations.js` for accuracy
- [ ] **English copy** — review all `en` values in `translations.js` for accuracy
- [ ] **Meta descriptions** — update `<meta name="description">` in every HTML file
- [ ] **Page titles** — update `<title>` in every HTML file
- [ ] **Copyright year** — update `footer_copy` in `translations.js`
- [ ] **Favicon** — add `<link rel="icon" href="../assets/images/favicon.ico">` to every `<head>`
- [ ] **Analytics** — add your Google Analytics or Plausible snippet before `</body>` in every HTML file
