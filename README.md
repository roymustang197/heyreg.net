# HeyReg — Regulatory Consulting Website

A fully static, bilingual (Spanish / English) multi-page regulatory consulting website. Built with HTML5, CSS3, and Vanilla JavaScript. Deployed on GitHub Pages with a custom domain at **heyreg.net**.

---

## Project Overview

Public-facing website for a regulatory consulting firm serving businesses in highly regulated industries. The site defaults to Spanish (`es`) and supports instant language switching to English (`en`) without a page reload. Language preference and dark/light theme are saved in `localStorage` and persist across all pages.

The site uses **Jekyll** (active on GitHub Pages) with `permalink` front matter to serve clean URLs — no `.html` extension visible in the browser.

---

## Architecture

```
heyreg.net/
│
├── index.html                        Home — landing page with summary of all sections
├── about.html                        About Us — full story, mission, vision, values, team
├── contact.html                      Contact — WhatsApp/email cards + office info + map
├── contact-form.html                 Contact Form — full inquiry form
│
├── services/
│   ├── index.html                    Services overview — all 4 services with full descriptions
│   ├── regulatory-compliance.html    Detail: Regulatory Compliance
│   ├── permits-and-licenses.html     Detail: Permits & Licenses
│   ├── government-relations.html     Detail: Government Relations
│   └── risk-assessment.html          Detail: Risk Assessment
│
├── css/
│   ├── styles.css                    Global styles — design tokens, all components, layout, dark mode
│   └── responsive.css                Breakpoints: medium (769–1023px), tablet (≤768px), mobile (≤480px)
│
├── js/
│   ├── config.js                     Site-wide config — brand, colors, contact info, images, team
│   ├── main.js                       Shared logic — navbar, config injection, dark mode, language
│   └── translations.js               All user-facing text in EN and ES, organized by page
│
├── assets/
│   └── images/
│       └── .gitkeep                  Keeps the images/ folder tracked by git when empty
│
├── _config.yml                       Jekyll config — disables Liquid processing in HTML files
└── README.md                         This file
```

---

## Tech Stack

| Layer      | Technology                                                          |
|------------|---------------------------------------------------------------------|
| Markup     | HTML5 — semantic elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`) |
| Styles     | CSS3 — Custom Properties, Grid, Flexbox, `@media` queries, dark mode via `[data-theme="dark"]` |
| Behaviour  | Vanilla JavaScript (ES6+, IIFE pattern — no frameworks)             |
| Fonts      | Google Fonts — Inter (body), Playfair Display (headings)            |
| Icons      | Inline SVG — zero external icon libraries                           |
| Hosting    | GitHub Pages + Jekyll (for clean URL permalinks)                    |

---

## Customization via `js/config.js`

All key site values are centralized in `config.js`. Edit this file to update:

| Field | Purpose |
|-------|---------|
| `brand.name` / `brand.text1` / `brand.text2` | Navbar + footer text logo |
| `brand.logo` | Path to logo image (replaces text logo when set) |
| `brand.favicon` | Path to favicon image |
| `whatsapp` | WhatsApp number (digits only, used in `wa.me` links) |
| `phoneDisplay` | Human-readable phone number shown in UI |
| `emailAddress` | Contact email (used in `mailto:` links) |
| `linkedin` / `instagram` / `facebook` | Social media URLs |
| `images.homeAbout` | Image in the Home page "About Us" preview section |
| `images.aboutStory` | Image in the About page "Our Story" section |
| `team[0].photo` / `team[1].photo` | Team member profile photos |
| `colors` | Active color palette (CSS custom properties) |

---

## How to Run Locally

### Option A — VS Code Live Server (simplest, no clean URLs)

1. Clone or download this repository.
2. Open the folder in VS Code.
3. Install the **Live Server** extension.
4. Right-click `index.html` → **Open with Live Server**.
5. Pages will have `.html` extensions locally — clean URLs only apply on GitHub Pages.

### Option B — Jekyll (matches production exactly)

1. Install Ruby and Jekyll: https://jekyllrb.com/docs/installation/
2. From the repo root, run:
   ```bash
   bundle exec jekyll serve
   # or, if no Gemfile:
   jekyll serve
   ```
3. Visit `http://localhost:4000` — clean URLs work exactly as on the live site.

---

## How to Deploy to GitHub Pages

1. Push the repository to GitHub.
2. Go to **Settings → Pages** in your GitHub repository.
3. Under **Source**, select your branch (e.g. `main`) and folder `/` (root).
4. Click **Save**. GitHub builds with Jekyll and publishes at:
   ```
   https://<your-username>.github.io/<repo-name>/
   ```
5. To use a custom domain, add a `CNAME` file at the repo root containing just your domain (e.g. `heyreg.net`).

---

## How to Add a New Service Page

Follow these steps to add a fifth service (e.g. "Environmental Compliance"):

**Step 1 — Create the HTML file**

Copy `services/regulatory-compliance.html` to `services/environmental-compliance.html`. Change:
- The Jekyll front matter: `permalink: /services/environmental-compliance`
- `<body data-page="ec" ...>` — pick a unique two-letter key
- All `data-i18n` attributes to use a new prefix (e.g. `ec_*`)
- The breadcrumb and page title
- The related services cards (link to the other 4 services)

**Step 2 — Add the navbar submenu entry (all pages)**

In every HTML file, add a new `<li>` inside the `.submenu` of the Services nav item:
```html
<li><a href="/services/environmental-compliance" data-nav="ec" data-i18n="nav_service_environmental">Environmental Compliance</a></li>
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

## Dark Mode

Dark mode is implemented in pure CSS via the `[data-theme="dark"]` attribute on `<html>`. A moon/sun toggle button in the navbar switches themes. The preference is saved to `localStorage` key `heyreg_theme` and restored on every page load.

No JavaScript frameworks or CSS libraries are used.

---

## Checklist Before Going Live

Most values are now set in `js/config.js`. Items still needing attention:

- [ ] **Brand logo** — set `brand.logo` in `config.js` to an image path (e.g. `img/logo.svg`)
- [ ] **Favicon** — set `brand.favicon` in `config.js` to an image path
- [ ] **Team photos** — set `team[0].photo` and `team[1].photo` in `config.js`
- [ ] **Section images** — set `images.homeAbout` and `images.aboutStory` in `config.js`
- [ ] **Social links** — update `linkedin`, `instagram`, `facebook` in `config.js`
- [ ] **Map** — replace the `.map-placeholder` `<div>` in `contact.html` with a real Google Maps `<iframe>`
- [ ] **Office address** — update `contact_office_address` and `contact_office_hours` in `translations.js`
- [ ] **Spanish copy** — review all `es` values in `translations.js` for accuracy
- [ ] **English copy** — review all `en` values in `translations.js` for accuracy
- [ ] **Meta descriptions** — update `<meta name="description">` in every HTML file
- [ ] **Page titles** — update `<title>` in every HTML file
- [ ] **Copyright year** — update `footer_copy` in `translations.js`
- [ ] **Analytics** — add your Google Analytics or Plausible snippet before `</body>` in every HTML file
