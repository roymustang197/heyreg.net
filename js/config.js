/* ============================================================
   config.js — Site-wide settings. Edit here; changes apply
   everywhere automatically via main.js.
   ============================================================ */
const siteConfig = {

  /* ---- Brand -------------------------------------------------------
     text1 / text2 : the two-tone text logo ("Hey" in accent, "Reg" in main color)
     logo          : set to an image path (e.g. 'img/logo.svg') to switch to an image;
                     leave '' to keep the text logo
     logoAlt       : alt text used when logo image is active
     ----------------------------------------------------------------- */
  brand: {
    name:    'HeyReg',
    text1:   'Hey',        // rendered in accent color
    text2:   'Reg',        // rendered in main color
    logo:    '',           // e.g. 'img/logo.svg'
    logoAlt: 'HeyReg',
    favicon: '/img/favicon.svg',
  },

  /* ---- Founding date -----------------------------------------------
     Used to calculate years of experience dynamically.
     The counter increments every year on April 18.
     ----------------------------------------------------------------- */
  foundingDate: '2022-04-18',

  /* ---- Contact & social ---- */
  whatsapp:     '50684671912',          // raw digits — used to build wa.me URLs
  phoneDisplay: '+506 8467-1912',       // formatted number shown as text on contact page
  emailAddress: 'contact@heyreg.net',   // shown as text + used for mailto: links
  linkedin:     'https://www.linkedin.com/company/heyreg/',
  instagram:    'https://www.linkedin.com/company/heyreg/',
  facebook:     'https://www.linkedin.com/company/heyreg/',

  /* ---- Images -------------------------------------------------------
     Set src to a relative path (e.g. 'img/team.jpg') or leave ''
     to keep the default gradient placeholder.
     ----------------------------------------------------------------- */
  images: {
    homeAbout:  '',   // Home page — right column of "About Us" preview section
    aboutStory: '',   // About page — right column of "Our Story" section
  },

  /* ---- Team members -------------------------------------------------
     showTeam: set to false to hide the entire team grid on the About page
     name    : displayed on the team card (not translated — proper names)
     photo   : path to portrait photo, e.g. 'img/nicole.jpg' ('' = placeholder)
     linkedin: full LinkedIn profile URL ('' = icon hidden)
     role    : translations.js handles the bilingual role label
     ----------------------------------------------------------------- */
  showTeam: false,

  team: [
    {
      name:     'Nicole Moya',
      photo:    '',   // e.g. 'img/nicole.jpg'
      linkedin: 'https://www.linkedin.com/in/nimore/',   // e.g. 'https://www.linkedin.com/in/nicole-moya/'
    },
    {
      name:     'Wei Zheng',
      photo:    '',   // e.g. 'img/wei.jpg'
      linkedin: 'https://www.linkedin.com/in/wezhema/',   // e.g. 'https://www.linkedin.com/in/wei-zheng/'
    },
  ],

  /* ---- Contact form -------------------------------------------------
     emailPrimary    : first recipient (the form is submitted to this address)
     emailCC         : second recipient (receives a carbon copy)
     hcaptchaSiteKey : get a free key at hcaptcha.com — leave '' to skip captcha
     ----------------------------------------------------------------- */
  contact: {
    emailPrimary:    'wzheng@heyreg.net',
    emailCC:         'nmoya@heyreg.net',
    hcaptchaSiteKey: '5b801d1e-e606-47c6-82ac-e93034009daa',   // paste your hCaptcha site key here
  },

  /* ---- Color palette ---- */

    colors: {
    main:            '#16213A',   // Ink — primary headings, navbar, buttons
    mainDark:        '#0D1524',   // Ink Dark — footer, deep surfaces
    mainLight:       '#475573',   // Support — lighter variant
    secondary:       '#C29A3A',   // Accent — gold
    secondaryDark:   '#A07E2E',   // Accent Dark — hover
    secondaryLight:  '#E2C77D',   // Acc·Lt — tinted backgrounds
    background:      '#E9E2D2',   // Cream — page background
    text:            '#16213A',   // Ink — body text

    whatsapp:        '#25d366',
    whatsappDark:    '#1ebe5c',
    email:           '#6b7280',
    emailDark:       '#4b5563',
  },
  

};
