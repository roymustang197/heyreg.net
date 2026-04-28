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
    favicon: '',           // browser tab icon, e.g. 'img/favicon.png' or 'img/favicon.ico'
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
  /*
  colors: {
    main:            '#6366F1',   // primary — headings, navbar, buttons
    mainDark:        '#4338CA',   // darker variant (gradients, footer)
    mainLight:       '#818CF8',   // lighter variant
    secondary:       '#F59E0B',   // accent — labels, links, icons
    secondaryDark:   '#D97706',   // hover state for secondary
    secondaryLight:  '#FEF3C7',   // tinted backgrounds
    background:      '#FFFFFF',   // page background
    text:            '#1E1B4B',   // body text

    whatsapp:        '#25d366',   // WhatsApp button
    whatsappDark:    '#1ebe5c',   // WhatsApp button hover
    email:           '#6b7280',   // Email button
    emailDark:       '#4b5563',   // Email button hover
  },
*/

 /*
  colors: {
    main:            '#1a2e5a',   // primary — headings, navbar, buttons
    mainDark:        '#111f3f',   // darker variant (gradients, footer)
    mainLight:       '#66A3FF',   // lighter variant
    secondary:       '#00D4AA',   // accent — labels, links, icons
    secondaryDark:   '#00A888',   // hover state for secondary
    secondaryLight:  '#CCFAF4',   // tinted backgrounds
    background:      '#FFFFFF',   // page background
    text:            '#0A0A0A',   // body text

    whatsapp:        '#25d366',   // WhatsApp button
    whatsappDark:    '#1ebe5c',   // WhatsApp button hover
    email:           '#6b7280',   // Email button
    emailDark:       '#4b5563',   // Email button hover
  },
  */


  /*
  colors: {
    main:            '#00C48C',   // primary — headings, navbar, buttons
    mainDark:        '#009E70',   // darker variant (gradients, footer)
    mainLight:       '#4DDDB0',   // lighter variant
    secondary:       '#111827',   // accent — labels, links, icons
    secondaryDark:   '#0A0F1A',   // hover state for secondary
    secondaryLight:  '#1F2937',   // tinted backgrounds
    background:      '#F9FAFB',   // page background
    text:            '#111827',   // body text

    whatsapp:        '#25d366',   // WhatsApp button
    whatsappDark:    '#1ebe5c',   // WhatsApp button hover
    email:           '#6b7280',   // Email button
    emailDark:       '#4b5563',   // Email button hover
  },
  */

    colors: {
    main:            '#0A5C8A',   // primary — azul médico profundo
    mainDark:        '#074268',   // darker variant (gradients, footer)
    mainLight:       '#4A90BA',   // lighter variant
    secondary:       '#27AE60',   // accent — verde salud
    secondaryDark:   '#1E8449',   // hover state for secondary
    secondaryLight:  '#D5F5E3',   // tinted backgrounds
    background:      '#FFFFFF',   // page background
    text:            '#0D2137',   // body text

    whatsapp:        '#25d366',   // WhatsApp button
    whatsappDark:    '#1ebe5c',   // WhatsApp button hover
    email:           '#6b7280',   // Email button
    emailDark:       '#4b5563',   // Email button hover
  },
  

};
