/* ============================================================
   translations.js — All user-facing text for EN and ES.
   Organized by page / section for maintainability.

   HOW TO ADD A NEW LANGUAGE:
   1. Add a new top-level key (e.g. "fr") to translations.
   2. Copy every key from "en" into your new block and translate.
   3. Add a <button> to .navbar__lang in every HTML file.
   4. In main.js, wire the button: langBtn.addEventListener('click', () => applyLanguage('fr'));
   ============================================================ */

const translations = {

  /* ----------------------------------------------------------
     ENGLISH
     ---------------------------------------------------------- */
  en: {

    /* ---- Shared: Navbar ---- */
    nav_home:              "Home",
    nav_about:             "About Us",
    nav_services:          "Services",
    nav_contact:           "Contact",
    nav_service_regulatory:"Regulatory Compliance",
    nav_service_permits:   "Permits & Licenses",
    nav_service_government:"Government Relations",
    nav_service_risk:      "Risk Assessment",

    /* ---- Shared: Footer ---- */
    footer_tagline: "Regulatory experts. Partners in your growth.",
    footer_copy:    "© 2026 HeyReg. All rights reserved.",
    footer_privacy: "Privacy Policy",
    footer_terms:   "Terms & Conditions",

    /* ---- Shared: Common buttons ---- */
    btn_learn_more:    "Learn More",
    btn_contact_us:    "Contact Us",
    btn_chat_whatsapp: "Chat on WhatsApp",
    btn_send_email:    "Send Email",
    btn_view_services: "View Our Services",
    btn_talk_expert:   "Talk to an Expert",

    /* ==========================================================
       HOME PAGE
       ========================================================== */
    home_hero_title:    "Regulatory Affairs for Pharmaceuticals & Medical Devices in LATAM",
    home_hero_subtitle: "We simplify registration, compliance, and regulatory automation so you can focus on what matters — getting your product to market.",
    home_hero_cta_wa:    "WhatsApp",
    home_hero_cta_email: "Send Email",
    home_hero_cta_svcs:  "View Our Services",

    /* ---- Contact Form page ---- */
    form_hero_title:          "Send Us a Message",
    form_breadcrumb_home:     "Home",
    form_breadcrumb_contact:  "Contact",
    form_breadcrumb_current:  "Send a Message",
    form_intro_label:         "Get in Touch",
    form_intro_title:         "We'd Love to Hear from You",
    form_intro_subtitle:      "Fill out the form below and we'll get back to you within 24 business hours.",
    form_label_name:          "Full Name",
    form_label_company:       "Company",
    form_label_email:         "Email Address",
    form_label_phone:         "Phone (optional)",
    form_label_service:       "Service of Interest",
    form_label_message:       "Message",
    form_placeholder_name:    "Your full name",
    form_placeholder_company: "Your company name",
    form_placeholder_email:   "your@email.com",
    form_placeholder_phone:   "+506 6288-9402",
    form_placeholder_message: "Tell us about your regulatory challenge or question…",
    form_service_default:     "Select a service…",
    form_service_rc:          "Regulatory Compliance",
    form_service_pl:          "Permits & Licenses",
    form_service_gr:          "Government Relations",
    form_service_ra:          "Risk Assessment",
    form_service_other:       "Other / Not sure",
    form_submit_btn:          "Send Message",
    form_required_note:       "Fields marked with * are required.",

    home_about_label: "About Us",
    home_about_title: "Regulatory Affairs, Simplified",
    home_about_text:  "HeyReg is a consulting firm founded in 2026, specialized in regulatory affairs for pharmaceuticals and medical devices in Costa Rica and Latin America. With over 4 years of industry experience, our team combines technical and regulatory expertise with technology-driven solutions to simplify registration, compliance, and the automation of sanitary processes.",
    home_about_btn:   "Learn More About Us",

    home_services_label:    "Our Services",
    home_services_title:    "What We Do",
    home_services_subtitle: "Comprehensive regulatory solutions designed to protect and grow your business.",

    home_svc1_title: "Regulatory Compliance",
    home_svc1_desc:  "Evaluate and manage your regulatory framework to align operations with current legal standards.",
    home_svc2_title: "Permits & Licenses",
    home_svc2_desc:  "Obtain, renew, and maintain permits and licenses with local, national, and international authorities.",
    home_svc3_title: "Government Relations",
    home_svc3_desc:  "Facilitate communication and negotiation with regulatory bodies to defend your interests.",
    home_svc4_title: "Risk Assessment",
    home_svc4_desc:  "Identify and mitigate regulatory risks with effective, preventive strategic plans.",

    home_why_label:    "Why Us",
    home_why_title:    "Why Choose HeyReg?",
    home_why_subtitle: "Experience, precision, and a bilingual team dedicated to your compliance success.",
    home_why1_title:   "Expert Team",
    home_why1_desc:    "4+ years in pharmaceutical and medical device regulatory affairs, nationally and internationally.",
    home_why2_title:   "Personalized Service",
    home_why2_desc:    "Every strategy is tailored to your industry, size, and objectives.",
    home_why3_title:   "Bilingual Team",
    home_why3_desc:    "We serve in Spanish and English, ideal for international dealings.",
    home_why4_title:   "Agile Response",
    home_why4_desc:    "Fast solutions for urgent regulatory changes and compliance needs.",

    home_contact_label: "Contact",
    home_contact_title: "Ready to Get Started?",
    home_contact_intro: "Our team is ready to help. Reach out via WhatsApp for a quick response, or send us an email.",
    home_contact_wa_btn:    "Chat on WhatsApp",
    home_contact_email_btn: "Send Email",

    /* ==========================================================
       ABOUT PAGE
       ========================================================== */
    about_hero_title:        "About Us",
    about_breadcrumb_home:   "Home",
    about_breadcrumb_current:"About Us",

    about_story_label: "Our Story",
    about_story_title: "Built on Expertise and Trust",
    about_story_p1: "HeyReg was founded in 2026 out of a real need: pharmaceutical and medical device companies in Latin America facing increasingly complex regulatory processes without the right guidance.",
    about_story_p2: "With over 4 years of industry experience, we have built a consulting firm that understands the sector from the inside — combining technical and regulatory expertise with technology to make the process simpler, faster, and more predictable.",
    about_story_p3: "We don't just advise — we work alongside you at every stage, from initial registration to maintaining your products in the market.",

    about_mv_label:       "Our Direction",
    about_mv_title:       "Mission & Vision",
    about_mission_title:  "Mission",
    about_mission_text:   "To facilitate our clients' regulatory compliance with precise, agile, and high-impact solutions that protect their operations and unlock growth.",
    about_vision_title:   "Vision",
    about_vision_text:    "To be the leading regulatory consulting firm in Latin America and beyond, recognized for integrity, expertise, and measurable client outcomes.",

    about_values_label: "Our Values",
    about_values_title: "What We Stand For",
    about_val1_title:   "Integrity",
    about_val1_desc:    "We operate with full transparency, honesty, and ethical standards in every engagement.",
    about_val2_title:   "Excellence",
    about_val2_desc:    "We hold ourselves to the highest technical and professional standards on every project.",
    about_val3_title:   "Commitment",
    about_val3_desc:    "We are fully invested in each client's success — their wins are our wins.",
    about_val4_title:   "Innovation",
    about_val4_desc:    "We continuously evolve our methods to stay ahead of the regulatory landscape.",

    about_team_label:    "Our People",
    about_team_title:    "Meet the Team",
    about_team_subtitle: "Experienced professionals dedicated to your regulatory success.",
    about_member1_role:  "Co-founder & Head of Regulatory Affairs",
    about_member2_role:  "Co-founder & Head of Technology and Business Development",

    /* ==========================================================
       SERVICES OVERVIEW PAGE
       ========================================================== */
    services_hero_title:        "Our Services",
    services_breadcrumb_home:   "Home",
    services_breadcrumb_current:"Services",

    services_intro_label:    "What We Offer",
    services_intro_title:    "Comprehensive Regulatory Solutions",
    services_intro_subtitle: "From compliance audits to government negotiations — we cover every dimension of your regulatory needs.",

    services_svc1_title: "Regulatory Compliance",
    services_svc1_desc:  "We assess your existing regulatory posture, identify gaps, and build a compliance framework aligned with current national and international standards. Our team ensures your operations remain audit-ready at all times.",

    services_svc2_title: "Permits & Licenses",
    services_svc2_desc:  "Navigating permit processes can be time-consuming and complex. We manage the full lifecycle — from initial application to renewal and record-keeping — so your operations are never interrupted.",

    services_svc3_title: "Government Relations",
    services_svc3_desc:  "We build and manage strategic relationships with regulatory bodies, government agencies, and public institutions. Our team represents your interests in regulatory proceedings, consultations, and negotiations.",

    services_svc4_title: "Risk Assessment",
    services_svc4_desc:  "We identify, quantify, and prioritize regulatory risks specific to your business. Each assessment results in a clear mitigation roadmap with actionable recommendations and monitoring checkpoints.",

    services_cta_title:    "Not sure which service fits your needs?",
    services_cta_subtitle: "Let our team guide you to the right solution.",
    services_cta_btn:      "Talk to an Expert",

    /* ==========================================================
       SERVICE DETAIL: REGULATORY COMPLIANCE
       ========================================================== */
    rc_hero_title:          "Regulatory Compliance",
    rc_breadcrumb_home:     "Home",
    rc_breadcrumb_services: "Services",
    rc_breadcrumb_current:  "Regulatory Compliance",

    rc_overview_label: "Service Overview",
    rc_overview_title: "Stay Compliant. Stay Competitive.",
    rc_overview_p1: "Regulatory compliance is not just a legal obligation — it is a strategic asset. Organizations that maintain rigorous compliance programs face fewer penalties, build greater stakeholder trust, and are better positioned to expand into new markets.",
    rc_overview_p2: "Our Regulatory Compliance service provides end-to-end support: from mapping your current compliance posture to implementing frameworks, training your team, and monitoring for regulatory changes that could affect your operations.",
    rc_overview_p3: "We work across sectors including pharmaceuticals, financial services, energy, food & beverage, and telecommunications, adapting our methodology to the specific requirements of each industry.",

    rc_included_label: "What's Included",
    rc_included_title: "Service Deliverables",
    rc_inc1: "Regulatory landscape mapping and gap analysis",
    rc_inc2: "Compliance framework design and implementation",
    rc_inc3: "Internal audit support and readiness reviews",
    rc_inc4: "Policy and procedure documentation",
    rc_inc5: "Staff training and compliance culture workshops",
    rc_inc6: "Ongoing regulatory monitoring and alert system",

    rc_who_label: "Ideal For",
    rc_who_title: "Who Is This Service For?",
    rc_who_text:  "This service is ideal for companies entering a new regulated market, organizations that have received a regulatory notice or audit finding, businesses undergoing significant operational or structural changes, and leadership teams seeking proactive compliance assurance rather than reactive fixes.",

    rc_process_label:  "How We Work",
    rc_process_title:  "Our Process",
    rc_step1_title:    "Discovery",
    rc_step1_desc:     "We review your current operations, existing documentation, and applicable regulations.",
    rc_step2_title:    "Assessment",
    rc_step2_desc:     "We identify compliance gaps and rate each finding by risk level and urgency.",
    rc_step3_title:    "Framework Design",
    rc_step3_desc:     "We build a tailored compliance program with policies, procedures, and controls.",
    rc_step4_title:    "Implementation & Monitoring",
    rc_step4_desc:     "We support rollout and set up ongoing monitoring so compliance never lapses.",

    rc_related_label: "Related Services",
    rc_related_title: "You Might Also Need",

    rc_cta_title:    "Ready to strengthen your compliance?",
    rc_cta_subtitle: "Contact us today and let's build a compliance program that protects your business.",

    /* ==========================================================
       SERVICE DETAIL: PERMITS & LICENSES
       ========================================================== */
    pl_hero_title:          "Permits & Licenses",
    pl_breadcrumb_home:     "Home",
    pl_breadcrumb_services: "Services",
    pl_breadcrumb_current:  "Permits & Licenses",

    pl_overview_label: "Service Overview",
    pl_overview_title: "Every Permit. Every Deadline. Handled.",
    pl_overview_p1: "Operating without the right permits is one of the most common — and costly — compliance failures businesses face. From initial setup permits to sector-specific operational licenses, the requirements are numerous and the timelines unforgiving.",
    pl_overview_p2: "Our Permits & Licenses service takes full ownership of your permit portfolio. We track deadlines, manage renewals, coordinate with authorities, and handle the paperwork — so your team can focus on running the business.",
    pl_overview_p3: "We maintain active relationships with licensing bodies at municipal, state, federal, and international levels, enabling us to navigate approval processes efficiently and resolve blockers quickly.",

    pl_included_label: "What's Included",
    pl_included_title: "Service Deliverables",
    pl_inc1: "Full permit and license inventory audit",
    pl_inc2: "Application preparation and submission",
    pl_inc3: "Liaison with local, national, and international authorities",
    pl_inc4: "Renewal tracking and calendar management",
    pl_inc5: "Permit condition monitoring and reporting",
    pl_inc6: "Resolution of permit objections and appeals",

    pl_who_label: "Ideal For",
    pl_who_title: "Who Is This Service For?",
    pl_who_text:  "This service is ideal for companies launching new facilities or product lines that require regulatory approvals, businesses with large and complex permit portfolios, organizations expanding into new jurisdictions, and any company that has experienced permit lapses or violations.",

    pl_process_label:  "How We Work",
    pl_process_title:  "Our Process",
    pl_step1_title:    "Inventory",
    pl_step1_desc:     "We map every permit and license your business holds or needs across all jurisdictions.",
    pl_step2_title:    "Gap Analysis",
    pl_step2_desc:     "We identify missing, expired, or at-risk permits and prioritize action.",
    pl_step3_title:    "Application & Filing",
    pl_step3_desc:     "We prepare, review, and submit all documentation to the relevant authorities.",
    pl_step4_title:    "Tracking & Renewal",
    pl_step4_desc:     "We manage your permit calendar and handle all renewals proactively.",

    pl_related_label: "Related Services",
    pl_related_title: "You Might Also Need",

    pl_cta_title:    "Let us handle your permit portfolio.",
    pl_cta_subtitle: "Get in touch and we'll take it from here.",

    /* ==========================================================
       SERVICE DETAIL: GOVERNMENT RELATIONS
       ========================================================== */
    gr_hero_title:          "Government Relations",
    gr_breadcrumb_home:     "Home",
    gr_breadcrumb_services: "Services",
    gr_breadcrumb_current:  "Government Relations",

    gr_overview_label: "Service Overview",
    gr_overview_title: "Your Voice in the Room That Matters.",
    gr_overview_p1: "Regulatory outcomes are rarely determined by documents alone. The relationships your organization builds — or fails to build — with government entities and regulatory bodies have a profound impact on approvals, timelines, and policy outcomes.",
    gr_overview_p2: "Our Government Relations service provides strategic representation and communication support. We engage on your behalf with the agencies, ministries, and officials who shape your regulatory environment.",
    gr_overview_p3: "We monitor regulatory proposals, participate in public comment processes, and engage in direct dialogue to ensure your perspective is heard at every decision-making table.",

    gr_included_label: "What's Included",
    gr_included_title: "Service Deliverables",
    gr_inc1: "Regulatory agency mapping and stakeholder identification",
    gr_inc2: "Strategic communication plan development",
    gr_inc3: "Direct representation in regulatory proceedings",
    gr_inc4: "Public comment and consultation submissions",
    gr_inc5: "Monitoring of proposed regulations and legislative changes",
    gr_inc6: "Briefing documents and executive communication support",

    gr_who_label: "Ideal For",
    gr_who_title: "Who Is This Service For?",
    gr_who_text:  "This service is ideal for companies operating in heavily regulated sectors where relationships with authorities are critical, organizations seeking to influence upcoming regulatory changes, businesses navigating complex multi-agency approval processes, and international companies entering a new regulatory environment.",

    gr_process_label:  "How We Work",
    gr_process_title:  "Our Process",
    gr_step1_title:    "Stakeholder Mapping",
    gr_step1_desc:     "We identify all relevant government entities, officials, and decision-makers.",
    gr_step2_title:    "Strategy Development",
    gr_step2_desc:     "We design a targeted engagement and communication plan aligned with your goals.",
    gr_step3_title:    "Active Engagement",
    gr_step3_desc:     "We represent your interests through meetings, submissions, and formal proceedings.",
    gr_step4_title:    "Monitoring & Reporting",
    gr_step4_desc:     "We track developments and keep you informed with timely intelligence reports.",

    gr_related_label: "Related Services",
    gr_related_title: "You Might Also Need",

    gr_cta_title:    "Build stronger government relationships.",
    gr_cta_subtitle: "Let us open the right doors for your business.",

    /* ==========================================================
       SERVICE DETAIL: RISK ASSESSMENT
       ========================================================== */
    ra_hero_title:          "Risk Assessment",
    ra_breadcrumb_home:     "Home",
    ra_breadcrumb_services: "Services",
    ra_breadcrumb_current:  "Risk Assessment",

    ra_overview_label: "Service Overview",
    ra_overview_title: "Know Your Risks Before They Know You.",
    ra_overview_p1: "In today's rapidly shifting regulatory landscape, organizations that wait for problems to appear before acting are playing a losing game. Proactive risk assessment is the difference between controlled compliance and reactive crisis management.",
    ra_overview_p2: "Our Risk Assessment service delivers a clear, quantified picture of your regulatory exposure. We analyze your operations, industry context, and applicable regulations to surface risks before they become violations.",
    ra_overview_p3: "The result is a prioritized risk register and mitigation roadmap that your leadership team can act on immediately — with measurable checkpoints to track progress.",

    ra_included_label: "What's Included",
    ra_included_title: "Service Deliverables",
    ra_inc1: "Regulatory risk identification across all business functions",
    ra_inc2: "Risk scoring matrix (likelihood × impact)",
    ra_inc3: "Prioritized risk register with severity classifications",
    ra_inc4: "Mitigation roadmap with actionable recommendations",
    ra_inc5: "Regulatory change monitoring and early-warning alerts",
    ra_inc6: "Executive risk summary dashboard",

    ra_who_label: "Ideal For",
    ra_who_title: "Who Is This Service For?",
    ra_who_text:  "This service is ideal for organizations preparing for an expansion or merger, companies in sectors experiencing rapid regulatory change, businesses that have recently received a warning or fine from a regulator, and boards or audit committees seeking independent regulatory risk assurance.",

    ra_process_label:  "How We Work",
    ra_process_title:  "Our Process",
    ra_step1_title:    "Scoping",
    ra_step1_desc:     "We define the assessment boundaries, business units, and applicable regulations.",
    ra_step2_title:    "Data Collection",
    ra_step2_desc:     "We gather operational data, existing documentation, and regulatory requirements.",
    ra_step3_title:    "Risk Analysis",
    ra_step3_desc:     "We score and rank each risk by likelihood and potential business impact.",
    ra_step4_title:    "Reporting & Roadmap",
    ra_step4_desc:     "We deliver a comprehensive risk register and a concrete mitigation action plan.",

    ra_related_label: "Related Services",
    ra_related_title: "You Might Also Need",

    ra_cta_title:    "Identify your risks before they surface.",
    ra_cta_subtitle: "Schedule a risk assessment consultation today.",

    /* ==========================================================
       CONTACT PAGE
       ========================================================== */
    contact_hero_title:        "Contact Us",
    contact_breadcrumb_home:   "Home",
    contact_breadcrumb_current:"Contact",

    contact_options_label:    "Get in Touch",
    contact_options_title:    "We're Here to Help",
    contact_options_subtitle: "Choose your preferred way to reach us.",

    contact_wa_title:  "WhatsApp",
    contact_wa_desc:   "Fast response during office hours. Ideal for initial inquiries and follow-ups.",
    contact_wa_btn:    "Chat on WhatsApp",

    contact_email_title:   "Email",
    /* contact_email_address moved to config.js → emailAddress */
    contact_email_desc:    "Send us a detailed message and we will reply within 24 business hours.",
    contact_email_btn:     "Send Email",

    contact_office_label:       "Our Office",
    contact_office_title:       "Visit Us",
    contact_office_address:     "123 Regulatory Plaza, Suite 400\nMexico City, CDMX 06600\nMexico",
    contact_office_hours_title: "Business Hours",
    contact_office_hours:       "Monday – Friday: 9:00 AM – 6:00 PM\nSaturday: 10:00 AM – 2:00 PM\nSunday: Closed",
    contact_map_label:          "Map — embed your Google Maps iframe here",

    /* ---- Privacy Policy page ---- */
    pp_hero_title:         "Privacy Policy",
    pp_breadcrumb_current: "Privacy Policy",
    pp_updated:            "Last updated: April 19, 2026",
    pp_intro:              "At HeyReg, we are committed to protecting your personal data and respecting your privacy. This Policy explains what information we collect, how we use it, and your rights as a data subject.",
    pp_s1_title:           "1. Data Controller",
    pp_s1_body:            "HeyReg is the data controller responsible for the personal information you provide through this website and our services. You may contact us at contact@heyreg.net for any privacy-related matter.",
    pp_s2_title:           "2. Data We Collect",
    pp_s2_body:            "We collect information you provide directly, including: full name, email address, phone number, company name, and the content of messages submitted via our contact form. We may also collect technical data such as IP address, browser type, and pages visited through cookies and analytics tools.",
    pp_s3_title:           "3. Purpose of Processing",
    pp_s3_body:            "We use your personal data to: respond to inquiries and service requests, deliver our regulatory consulting services, send relevant communications you have requested, comply with legal and regulatory obligations, and improve our website and services.",
    pp_s4_title:           "4. Legal Basis",
    pp_s4_body:            "Processing is based on your consent (when you submit our contact form), the performance of a contract (when you engage our services), and our legitimate interests in operating and improving our business. Where required by law, we will ask for your explicit consent.",
    pp_s5_title:           "5. Data Retention",
    pp_s5_body:            "We retain your personal data only as long as necessary for the purposes described in this Policy, or as required by applicable law. Contact form submissions are retained for up to 3 years. Client service records are retained for a minimum of 7 years in accordance with professional obligations.",
    pp_s6_title:           "6. Your Rights",
    pp_s6_body:            "Depending on your location, you may have the right to: access your personal data, correct inaccurate data, request deletion of your data, restrict or object to processing, request data portability, and withdraw consent at any time. To exercise these rights, contact us at contact@heyreg.net. In Costa Rica, these rights are governed by Ley 8968.",
    pp_s7_title:           "7. Third-Party Sharing",
    pp_s7_body:            "We do not sell or rent your personal data. We may share data with trusted service providers (e.g., hosting, analytics, email platforms) who process it on our behalf under appropriate data protection agreements. We may also disclose data when required by law.",
    pp_s8_title:           "8. Cookies",
    pp_s8_body:            "Our website uses essential cookies to remember your language and theme preferences (stored locally in your browser). We do not use tracking or advertising cookies. You may disable cookies in your browser settings, though this may affect site functionality.",
    pp_s9_title:           "9. Data Security",
    pp_s9_body:            "We implement appropriate technical and organizational measures to protect your data against unauthorized access, loss, or disclosure. However, no internet transmission is completely secure, and we cannot guarantee absolute security.",
    pp_s10_title:          "10. Changes to This Policy",
    pp_s10_body:           "We may update this Privacy Policy from time to time. The date at the top of this page reflects the most recent revision. Continued use of the website after changes constitutes acceptance of the updated Policy.",
    pp_s11_title:          "11. Contact",
    pp_s11_body:           "For any questions about this Privacy Policy or how we handle your data, please contact us at contact@heyreg.net or through our contact form.",

    /* ---- Terms & Conditions page ---- */
    tc_hero_title:         "Terms & Conditions",
    tc_breadcrumb_current: "Terms & Conditions",
    tc_updated:            "Last updated: April 19, 2026",
    tc_intro:              "Please read these Terms and Conditions carefully before using the HeyReg website or engaging our services. By accessing this website or entering into a service agreement with us, you agree to be bound by these Terms.",
    tc_s1_title:           "1. Acceptance",
    tc_s1_body:            "By accessing or using this website, you confirm that you are at least 18 years old and agree to these Terms and our Privacy Policy. If you do not agree, please do not use this website.",
    tc_s2_title:           "2. Services",
    tc_s2_body:            "HeyReg provides regulatory consulting, compliance advisory, permit and license management, government relations, and risk assessment services. The specific scope of services for each engagement is defined in a written agreement or proposal signed by both parties.",
    tc_s3_title:           "3. Client Obligations",
    tc_s3_body:            "Clients agree to provide accurate and complete information necessary for the delivery of our services, respond promptly to requests, and comply with applicable laws and regulations. HeyReg is not responsible for outcomes resulting from inaccurate information provided by the client.",
    tc_s4_title:           "4. Fees and Payment",
    tc_s4_body:            "Fees are outlined in each service agreement. Unless otherwise specified, invoices are due within 30 calendar days of issuance. Late payments may incur interest at the rate permitted by applicable law. HeyReg reserves the right to suspend services for accounts overdue by more than 60 days.",
    tc_s5_title:           "5. Confidentiality",
    tc_s5_body:            "Both parties agree to keep confidential all non-public information exchanged during the engagement. This obligation survives the termination of services for a period of 5 years. Confidential information does not include data that is publicly available or independently developed.",
    tc_s6_title:           "6. Intellectual Property",
    tc_s6_body:            "All content on this website — including text, graphics, logos, and software — is the property of HeyReg and is protected by applicable intellectual property laws. Work product delivered as part of a service engagement becomes the property of the client upon full payment of fees.",
    tc_s7_title:           "7. Limitation of Liability",
    tc_s7_body:            "HeyReg's liability to any client shall not exceed the fees paid for the specific service giving rise to the claim in the 12 months preceding the event. We are not liable for indirect, incidental, or consequential damages. Regulatory outcomes depend on government authorities and cannot be guaranteed.",
    tc_s8_title:           "8. Governing Law",
    tc_s8_body:            "These Terms are governed by the laws of the Republic of Costa Rica. Any dispute arising from these Terms shall be subject to the exclusive jurisdiction of the courts of San José, Costa Rica, unless otherwise agreed in a service contract.",
    tc_s9_title:           "9. Changes to These Terms",
    tc_s9_body:            "We reserve the right to modify these Terms at any time. Changes take effect upon posting to this page. Your continued use of our website or services after changes constitutes acceptance of the updated Terms.",
    tc_s10_title:          "10. Contact",
    tc_s10_body:           "For questions about these Terms, please contact us at contact@heyreg.net or through our contact form.",
  },

  /* ----------------------------------------------------------
     SPANISH  (default language on page load)
     ---------------------------------------------------------- */
  es: {

    /* ---- Shared: Navbar ---- */
    nav_home:              "Inicio",
    nav_about:             "Quiénes Somos",
    nav_services:          "Servicios",
    nav_contact:           "Contacto",
    nav_service_regulatory:"Cumplimiento Regulatorio",
    nav_service_permits:   "Permisos y Licencias",
    nav_service_government:"Relaciones Gubernamentales",
    nav_service_risk:      "Evaluación de Riesgos",

    /* ---- Shared: Footer ---- */
    footer_tagline: "Expertos en regulación. Aliados en su crecimiento.",
    footer_copy:    "© 2026 HeyReg. Todos los derechos reservados.",
    footer_privacy: "Política de Privacidad",
    footer_terms:   "Términos y Condiciones",

    /* ---- Shared: Common buttons ---- */
    btn_learn_more:    "Conocer Más",
    btn_contact_us:    "Contáctenos",
    btn_chat_whatsapp: "Escribir por WhatsApp",
    btn_send_email:    "Enviar Correo",
    btn_view_services: "Ver Nuestros Servicios",
    btn_talk_expert:   "Hablar con un Experto",

    /* ==========================================================
       HOME PAGE
       ========================================================== */
    home_hero_title:    "Asuntos Regulatorios para Medicamentos y Dispositivos Médicos en LATAM",
    home_hero_subtitle: "Simplificamos el registro, cumplimiento normativo y automatización regulatoria para que puedas enfocarte en lo que importa — llevar tu producto al mercado.",
    home_hero_cta_wa:    "WhatsApp",
    home_hero_cta_email: "Enviar Correo",
    home_hero_cta_svcs:  "Ver Nuestros Servicios",

    /* ---- Página de Formulario de Contacto ---- */
    form_hero_title:          "Envíenos un Mensaje",
    form_breadcrumb_home:     "Inicio",
    form_breadcrumb_contact:  "Contacto",
    form_breadcrumb_current:  "Enviar un Mensaje",
    form_intro_label:         "Comuníquese",
    form_intro_title:         "Nos Encantaría Saber de Usted",
    form_intro_subtitle:      "Complete el formulario y le responderemos en un máximo de 24 horas hábiles.",
    form_label_name:          "Nombre Completo",
    form_label_company:       "Empresa",
    form_label_email:         "Correo Electrónico",
    form_label_phone:         "Teléfono (opcional)",
    form_label_service:       "Servicio de Interés",
    form_label_message:       "Mensaje",
    form_placeholder_name:    "Su nombre completo",
    form_placeholder_company: "Nombre de su empresa",
    form_placeholder_email:   "su@correo.com",
    form_placeholder_phone:   "+506 6288-9402",
    form_placeholder_message: "Cuéntenos sobre su desafío o consulta regulatoria…",
    form_service_default:     "Seleccione un servicio…",
    form_service_rc:          "Cumplimiento Regulatorio",
    form_service_pl:          "Permisos y Licencias",
    form_service_gr:          "Relaciones Gubernamentales",
    form_service_ra:          "Evaluación de Riesgos",
    form_service_other:       "Otro / No estoy seguro",
    form_submit_btn:          "Enviar Mensaje",
    form_required_note:       "Los campos marcados con * son obligatorios.",

    home_about_label: "Sobre Nosotros",
    home_about_title: "Asuntos Regulatorios sin Complicaciones",
    home_about_text:  "HeyReg es una firma consultora fundada en 2026, especializada en asuntos regulatorios para medicamentos y dispositivos médicos en Costa Rica y Latinoamérica. Con más de 4 años de experiencia en la industria, nuestro equipo combina conocimiento técnico y regulatorio con soluciones tecnológicas para simplificar el registro, el cumplimiento normativo y la automatización de procesos sanitarios.",
    home_about_btn:   "Conózcanos Mejor",

    home_services_label:    "Nuestros Servicios",
    home_services_title:    "Lo Que Hacemos",
    home_services_subtitle: "Soluciones regulatorias integrales diseñadas para proteger y hacer crecer su negocio.",

    home_svc1_title: "Cumplimiento Regulatorio",
    home_svc1_desc:  "Evaluamos y gestionamos su marco regulatorio para alinear las operaciones con las normas legales vigentes.",
    home_svc2_title: "Permisos y Licencias",
    home_svc2_desc:  "Obtenemos, renovamos y mantenemos permisos y licencias ante autoridades locales, nacionales e internacionales.",
    home_svc3_title: "Relaciones Gubernamentales",
    home_svc3_desc:  "Facilitamos la comunicación y negociación con organismos reguladores para defender sus intereses.",
    home_svc4_title: "Evaluación de Riesgos",
    home_svc4_desc:  "Identificamos y mitigamos riesgos regulatorios con planes estratégicos efectivos y preventivos.",

    home_why_label:    "Por Qué Nosotros",
    home_why_title:    "¿Por Qué Elegir HeyReg?",
    home_why_subtitle: "Experiencia, precisión y un equipo bilingüe dedicado a su éxito en cumplimiento normativo.",
    home_why1_title:   "Equipo Experto",
    home_why1_desc:    "Más de 4 años en asuntos regulatorios para medicamentos y dispositivos médicos, a nivel nacional e internacional.",
    home_why2_title:   "Servicio Personalizado",
    home_why2_desc:    "Cada estrategia es diseñada según su industria, tamaño y objetivos.",
    home_why3_title:   "Equipo Bilingüe",
    home_why3_desc:    "Atendemos en español e inglés, ideal para trámites internacionales.",
    home_why4_title:   "Respuesta Ágil",
    home_why4_desc:    "Soluciones rápidas ante cambios normativos urgentes.",

    home_contact_label:     "Contacto",
    home_contact_title:     "¿Listo para Comenzar?",
    home_contact_intro:     "Nuestro equipo está disponible para ayudarle. Escríbanos por WhatsApp para una respuesta rápida o envíenos un correo electrónico.",
    home_contact_wa_btn:    "Escribir por WhatsApp",
    home_contact_email_btn: "Enviar Correo",

    /* ==========================================================
       ABOUT PAGE
       ========================================================== */
    about_hero_title:        "Quiénes Somos",
    about_breadcrumb_home:   "Inicio",
    about_breadcrumb_current:"Quiénes Somos",

    about_story_label: "Nuestra Historia",
    about_story_title: "Construidos sobre Experiencia y Confianza",
    about_story_p1: "HeyReg nació en 2026 de una necesidad real: empresas de medicamentos y dispositivos médicos en Latinoamérica enfrentando procesos regulatorios cada vez más complejos sin el acompañamiento adecuado.",
    about_story_p2: "Con más de 4 años de experiencia en la industria, hemos construido una firma consultora que entiende el sector desde adentro — combinando conocimiento técnico y regulatorio con tecnología para hacer el proceso más simple, rápido y predecible.",
    about_story_p3: "No solo asesoramos — trabajamos a tu lado en cada etapa del camino, desde el registro inicial hasta el mantenimiento de tus productos en el mercado.",

    about_mv_label:       "Nuestra Dirección",
    about_mv_title:       "Misión & Visión",
    about_mission_title:  "Misión",
    about_mission_text:   "Facilitar el cumplimiento regulatorio de nuestros clientes con soluciones precisas, ágiles y de alto impacto que protejan sus operaciones y abran nuevas oportunidades de crecimiento.",
    about_vision_title:   "Visión",
    about_vision_text:    "Ser la firma de consultoría regulatoria líder en América Latina y más allá, reconocida por su integridad, experiencia y resultados medibles para sus clientes.",

    about_values_label: "Nuestros Valores",
    about_values_title: "En Lo Que Creemos",
    about_val1_title:   "Integridad",
    about_val1_desc:    "Operamos con total transparencia, honestidad y estándares éticos en cada compromiso.",
    about_val2_title:   "Excelencia",
    about_val2_desc:    "Nos exigimos los más altos estándares técnicos y profesionales en cada proyecto.",
    about_val3_title:   "Compromiso",
    about_val3_desc:    "Estamos plenamente invertidos en el éxito de cada cliente — sus logros son los nuestros.",
    about_val4_title:   "Innovación",
    about_val4_desc:    "Evolucionamos continuamente nuestros métodos para adelantarnos al panorama regulatorio.",

    about_team_label:    "Nuestro Equipo",
    about_team_title:    "Conozca al Equipo",
    about_team_subtitle: "Profesionales experimentados dedicados a su éxito regulatorio.",
    about_member1_role:  "Cofundadora & Directora de Asuntos Regulatorios",
    about_member2_role:  "Cofundador & Director de Tecnología y Desarrollo de Negocios",


    /* ==========================================================
       SERVICES OVERVIEW PAGE
       ========================================================== */
    services_hero_title:        "Nuestros Servicios",
    services_breadcrumb_home:   "Inicio",
    services_breadcrumb_current:"Servicios",

    services_intro_label:    "Lo Que Ofrecemos",
    services_intro_title:    "Soluciones Regulatorias Integrales",
    services_intro_subtitle: "Desde auditorías de cumplimiento hasta negociaciones gubernamentales — cubrimos cada dimensión de sus necesidades regulatorias.",

    services_svc1_title: "Cumplimiento Regulatorio",
    services_svc1_desc:  "Evaluamos su postura regulatoria actual, identificamos brechas y construimos un marco de cumplimiento alineado con las normas nacionales e internacionales vigentes. Nuestro equipo asegura que sus operaciones estén siempre listas para auditoría.",
    services_svc2_title: "Permisos y Licencias",
    services_svc2_desc:  "Navegar los procesos de permisos puede ser tedioso y complejo. Gestionamos el ciclo completo — desde la solicitud inicial hasta la renovación y el archivo — para que sus operaciones nunca se vean interrumpidas.",
    services_svc3_title: "Relaciones Gubernamentales",
    services_svc3_desc:  "Construimos y gestionamos relaciones estratégicas con organismos reguladores, agencias gubernamentales e instituciones públicas. Nuestro equipo representa sus intereses en procedimientos, consultas y negociaciones regulatorias.",
    services_svc4_title: "Evaluación de Riesgos",
    services_svc4_desc:  "Identificamos, cuantificamos y priorizamos los riesgos regulatorios específicos de su empresa. Cada evaluación resulta en una hoja de ruta de mitigación clara con recomendaciones accionables y puntos de seguimiento.",

    services_cta_title:    "¿No está seguro qué servicio se adapta a sus necesidades?",
    services_cta_subtitle: "Permita que nuestro equipo le guíe hacia la solución correcta.",
    services_cta_btn:      "Hablar con un Experto",

    /* ==========================================================
       SERVICE DETAIL: REGULATORY COMPLIANCE
       ========================================================== */
    rc_hero_title:          "Cumplimiento Regulatorio",
    rc_breadcrumb_home:     "Inicio",
    rc_breadcrumb_services: "Servicios",
    rc_breadcrumb_current:  "Cumplimiento Regulatorio",

    rc_overview_label: "Descripción del Servicio",
    rc_overview_title: "Cumpla con la Norma. Mantenga la Ventaja.",
    rc_overview_p1: "El cumplimiento regulatorio no es solo una obligación legal — es un activo estratégico. Las organizaciones que mantienen programas de cumplimiento rigurosos enfrentan menos sanciones, generan mayor confianza entre sus grupos de interés y están mejor posicionadas para expandirse a nuevos mercados.",
    rc_overview_p2: "Nuestro servicio de Cumplimiento Regulatorio ofrece soporte integral: desde mapear su postura actual hasta implementar marcos de trabajo, capacitar a su equipo y monitorear los cambios normativos que puedan afectar sus operaciones.",
    rc_overview_p3: "Trabajamos en sectores como farmacéutico, servicios financieros, energía, alimentos y bebidas, y telecomunicaciones, adaptando nuestra metodología a los requisitos específicos de cada industria.",

    rc_included_label: "Qué Incluye",
    rc_included_title: "Entregables del Servicio",
    rc_inc1: "Mapeo del panorama regulatorio y análisis de brechas",
    rc_inc2: "Diseño e implementación de marcos de cumplimiento",
    rc_inc3: "Apoyo en auditorías internas y revisiones de preparación",
    rc_inc4: "Documentación de políticas y procedimientos",
    rc_inc5: "Capacitación del personal y talleres de cultura de cumplimiento",
    rc_inc6: "Monitoreo regulatorio continuo y sistema de alertas",

    rc_who_label: "Ideal Para",
    rc_who_title: "¿Para Quién Es Este Servicio?",
    rc_who_text:  "Este servicio es ideal para empresas que ingresan a un nuevo mercado regulado, organizaciones que han recibido una notificación regulatoria o hallazgo de auditoría, empresas en proceso de cambios operacionales o estructurales significativos, y equipos directivos que buscan una garantía de cumplimiento proactiva en lugar de soluciones reactivas.",

    rc_process_label:  "Cómo Trabajamos",
    rc_process_title:  "Nuestro Proceso",
    rc_step1_title:    "Diagnóstico",
    rc_step1_desc:     "Revisamos sus operaciones actuales, la documentación existente y las regulaciones aplicables.",
    rc_step2_title:    "Evaluación",
    rc_step2_desc:     "Identificamos brechas de cumplimiento y clasificamos cada hallazgo por nivel de riesgo y urgencia.",
    rc_step3_title:    "Diseño del Marco",
    rc_step3_desc:     "Construimos un programa de cumplimiento a medida con políticas, procedimientos y controles.",
    rc_step4_title:    "Implementación y Monitoreo",
    rc_step4_desc:     "Apoyamos la implementación y establecemos un monitoreo continuo para que el cumplimiento no decaiga.",

    rc_related_label: "Servicios Relacionados",
    rc_related_title: "También Podría Necesitar",

    rc_cta_title:    "¿Listo para fortalecer su cumplimiento?",
    rc_cta_subtitle: "Contáctenos hoy y construyamos un programa de cumplimiento que proteja su empresa.",

    /* ==========================================================
       SERVICE DETAIL: PERMITS & LICENSES
       ========================================================== */
    pl_hero_title:          "Permisos y Licencias",
    pl_breadcrumb_home:     "Inicio",
    pl_breadcrumb_services: "Servicios",
    pl_breadcrumb_current:  "Permisos y Licencias",

    pl_overview_label: "Descripción del Servicio",
    pl_overview_title: "Cada Permiso. Cada Plazo. Resuelto.",
    pl_overview_p1: "Operar sin los permisos correctos es uno de los fallos de cumplimiento más comunes y costosos que enfrentan las empresas. Desde los permisos de instalación inicial hasta las licencias operativas sectoriales, los requisitos son numerosos y los plazos inflexibles.",
    pl_overview_p2: "Nuestro servicio de Permisos y Licencias asume la gestión completa de su cartera de permisos. Rastreamos vencimientos, gestionamos renovaciones, coordinamos con las autoridades y manejamos la documentación para que su equipo pueda enfocarse en operar el negocio.",
    pl_overview_p3: "Mantenemos relaciones activas con organismos de licenciamiento a nivel municipal, estatal, federal e internacional, lo que nos permite navegar los procesos de aprobación de manera eficiente y resolver bloqueos rápidamente.",

    pl_included_label: "Qué Incluye",
    pl_included_title: "Entregables del Servicio",
    pl_inc1: "Auditoría completa del inventario de permisos y licencias",
    pl_inc2: "Preparación y envío de solicitudes",
    pl_inc3: "Enlace con autoridades locales, nacionales e internacionales",
    pl_inc4: "Seguimiento de renovaciones y gestión de calendario",
    pl_inc5: "Monitoreo de condiciones de permiso e informes",
    pl_inc6: "Resolución de objeciones y apelaciones de permisos",

    pl_who_label: "Ideal Para",
    pl_who_title: "¿Para Quién Es Este Servicio?",
    pl_who_text:  "Este servicio es ideal para empresas que inauguran nuevas instalaciones o líneas de productos que requieren aprobaciones regulatorias, negocios con carteras de permisos grandes y complejas, organizaciones que se expanden a nuevas jurisdicciones, y cualquier empresa que haya experimentado vencimientos o infracciones de permisos.",

    pl_process_label:  "Cómo Trabajamos",
    pl_process_title:  "Nuestro Proceso",
    pl_step1_title:    "Inventario",
    pl_step1_desc:     "Mapeamos cada permiso y licencia que su empresa tiene o necesita en todas las jurisdicciones.",
    pl_step2_title:    "Análisis de Brechas",
    pl_step2_desc:     "Identificamos permisos faltantes, vencidos o en riesgo y priorizamos las acciones.",
    pl_step3_title:    "Solicitud y Presentación",
    pl_step3_desc:     "Preparamos, revisamos y enviamos toda la documentación a las autoridades correspondientes.",
    pl_step4_title:    "Seguimiento y Renovación",
    pl_step4_desc:     "Gestionamos su calendario de permisos y tramitamos todas las renovaciones de manera proactiva.",

    pl_related_label: "Servicios Relacionados",
    pl_related_title: "También Podría Necesitar",

    pl_cta_title:    "Déjenos gestionar su cartera de permisos.",
    pl_cta_subtitle: "Póngase en contacto y nos encargamos del resto.",

    /* ==========================================================
       SERVICE DETAIL: GOVERNMENT RELATIONS
       ========================================================== */
    gr_hero_title:          "Relaciones Gubernamentales",
    gr_breadcrumb_home:     "Inicio",
    gr_breadcrumb_services: "Servicios",
    gr_breadcrumb_current:  "Relaciones Gubernamentales",

    gr_overview_label: "Descripción del Servicio",
    gr_overview_title: "Su Voz en la Sala que Importa.",
    gr_overview_p1: "Los resultados regulatorios rara vez se determinan solo por documentos. Las relaciones que su organización construye — o no construye — con entidades gubernamentales y organismos reguladores tienen un impacto profundo en aprobaciones, plazos y resultados de política.",
    gr_overview_p2: "Nuestro servicio de Relaciones Gubernamentales ofrece representación estratégica y apoyo en comunicación. Actuamos en su nombre ante las agencias, ministerios y funcionarios que moldean su entorno regulatorio.",
    gr_overview_p3: "Monitoreamos propuestas regulatorias, participamos en procesos de consulta pública y mantenemos diálogos directos para asegurarnos de que su perspectiva sea escuchada en cada instancia de toma de decisiones.",

    gr_included_label: "Qué Incluye",
    gr_included_title: "Entregables del Servicio",
    gr_inc1: "Mapeo de agencias regulatorias e identificación de partes interesadas",
    gr_inc2: "Desarrollo de plan de comunicación estratégica",
    gr_inc3: "Representación directa en procedimientos regulatorios",
    gr_inc4: "Presentaciones de comentarios públicos y consultas",
    gr_inc5: "Monitoreo de regulaciones propuestas y cambios legislativos",
    gr_inc6: "Documentos de orientación y apoyo en comunicación ejecutiva",

    gr_who_label: "Ideal Para",
    gr_who_title: "¿Para Quién Es Este Servicio?",
    gr_who_text:  "Este servicio es ideal para empresas que operan en sectores fuertemente regulados donde las relaciones con las autoridades son críticas, organizaciones que buscan influir en próximos cambios regulatorios, negocios que navegan procesos de aprobación complejos con múltiples agencias, y empresas internacionales que ingresan a un nuevo entorno regulatorio.",

    gr_process_label:  "Cómo Trabajamos",
    gr_process_title:  "Nuestro Proceso",
    gr_step1_title:    "Mapeo de Partes Interesadas",
    gr_step1_desc:     "Identificamos todas las entidades gubernamentales, funcionarios y tomadores de decisiones relevantes.",
    gr_step2_title:    "Desarrollo de Estrategia",
    gr_step2_desc:     "Diseñamos un plan de participación y comunicación específico alineado con sus objetivos.",
    gr_step3_title:    "Participación Activa",
    gr_step3_desc:     "Representamos sus intereses a través de reuniones, presentaciones y procedimientos formales.",
    gr_step4_title:    "Monitoreo e Informes",
    gr_step4_desc:     "Seguimos los desarrollos y le mantenemos informado con informes de inteligencia oportunos.",

    gr_related_label: "Servicios Relacionados",
    gr_related_title: "También Podría Necesitar",

    gr_cta_title:    "Construya relaciones gubernamentales más sólidas.",
    gr_cta_subtitle: "Permítanos abrir las puertas correctas para su empresa.",

    /* ==========================================================
       SERVICE DETAIL: RISK ASSESSMENT
       ========================================================== */
    ra_hero_title:          "Evaluación de Riesgos",
    ra_breadcrumb_home:     "Inicio",
    ra_breadcrumb_services: "Servicios",
    ra_breadcrumb_current:  "Evaluación de Riesgos",

    ra_overview_label: "Descripción del Servicio",
    ra_overview_title: "Conozca Sus Riesgos Antes de Que Ellos Lo Conozcan.",
    ra_overview_p1: "En el panorama regulatorio actual, que cambia rápidamente, las organizaciones que esperan a que aparezcan los problemas antes de actuar están jugando un juego perdedor. La evaluación proactiva de riesgos es la diferencia entre el cumplimiento controlado y la gestión reactiva de crisis.",
    ra_overview_p2: "Nuestro servicio de Evaluación de Riesgos entrega una imagen clara y cuantificada de su exposición regulatoria. Analizamos sus operaciones, el contexto de su industria y las regulaciones aplicables para identificar riesgos antes de que se conviertan en infracciones.",
    ra_overview_p3: "El resultado es un registro de riesgos priorizado y una hoja de ruta de mitigación sobre la que su equipo directivo puede actuar de inmediato, con puntos de control medibles para rastrear el progreso.",

    ra_included_label: "Qué Incluye",
    ra_included_title: "Entregables del Servicio",
    ra_inc1: "Identificación de riesgos regulatorios en todas las funciones del negocio",
    ra_inc2: "Matriz de puntuación de riesgos (probabilidad × impacto)",
    ra_inc3: "Registro de riesgos priorizado con clasificaciones de severidad",
    ra_inc4: "Hoja de ruta de mitigación con recomendaciones accionables",
    ra_inc5: "Monitoreo de cambios regulatorios y alertas tempranas",
    ra_inc6: "Panel de resumen ejecutivo de riesgos",

    ra_who_label: "Ideal Para",
    ra_who_title: "¿Para Quién Es Este Servicio?",
    ra_who_text:  "Este servicio es ideal para organizaciones que se preparan para una expansión o fusión, empresas en sectores con cambios regulatorios rápidos, negocios que han recibido recientemente una advertencia o multa de un regulador, y juntas directivas o comités de auditoría que buscan una garantía independiente de riesgo regulatorio.",

    ra_process_label:  "Cómo Trabajamos",
    ra_process_title:  "Nuestro Proceso",
    ra_step1_title:    "Definición del Alcance",
    ra_step1_desc:     "Definimos los límites de la evaluación, las unidades de negocio y las regulaciones aplicables.",
    ra_step2_title:    "Recopilación de Datos",
    ra_step2_desc:     "Recopilamos datos operativos, documentación existente y requisitos regulatorios.",
    ra_step3_title:    "Análisis de Riesgos",
    ra_step3_desc:     "Puntuamos y clasificamos cada riesgo por probabilidad e impacto potencial en el negocio.",
    ra_step4_title:    "Informe y Hoja de Ruta",
    ra_step4_desc:     "Entregamos un registro de riesgos completo y un plan de acción concreto de mitigación.",

    ra_related_label: "Servicios Relacionados",
    ra_related_title: "También Podría Necesitar",

    ra_cta_title:    "Identifique sus riesgos antes de que emerjan.",
    ra_cta_subtitle: "Programe una consulta de evaluación de riesgos hoy.",

    /* ==========================================================
       CONTACT PAGE
       ========================================================== */
    contact_hero_title:        "Contáctenos",
    contact_breadcrumb_home:   "Inicio",
    contact_breadcrumb_current:"Contacto",

    contact_options_label:    "Comuníquese",
    contact_options_title:    "Estamos Aquí para Ayudarle",
    contact_options_subtitle: "Elija su forma preferida de contactarnos.",

    contact_wa_title:  "WhatsApp",
    /* contact_wa_number moved to config.js → phoneDisplay */
    contact_wa_desc:   "Respuesta rápida en horario de oficina. Ideal para consultas iniciales y seguimiento.",
    contact_wa_btn:    "Escribir por WhatsApp",

    contact_email_title:   "Correo Electrónico",
    /* contact_email_address moved to config.js → emailAddress */
    contact_email_desc:    "Envíenos un mensaje detallado y le responderemos en un máximo de 24 horas hábiles.",
    contact_email_btn:     "Enviar Correo",

    contact_office_label:       "Nuestra Oficina",
    contact_office_title:       "Visítenos",
    contact_office_address:     "123 Plaza Regulatoria, Suite 400\nCiudad de México, CDMX 06600\nMéxico",
    contact_office_hours_title: "Horario de Atención",
    contact_office_hours:       "Lunes – Viernes: 9:00 AM – 6:00 PM\nSábado: 10:00 AM – 2:00 PM\nDomingo: Cerrado",
    contact_map_label:          "Mapa — inserte aquí su iframe de Google Maps",

    /* ---- Política de Privacidad ---- */
    pp_hero_title:         "Política de Privacidad",
    pp_breadcrumb_current: "Política de Privacidad",
    pp_updated:            "Última actualización: 19 de abril de 2026",
    pp_intro:              "En HeyReg, estamos comprometidos con la protección de sus datos personales y el respeto de su privacidad. Esta Política explica qué información recopilamos, cómo la usamos y cuáles son sus derechos como titular de los datos.",
    pp_s1_title:           "1. Responsable del Tratamiento",
    pp_s1_body:            "HeyReg es el responsable del tratamiento de los datos personales que usted nos proporciona a través de este sitio web y nuestros servicios. Puede contactarnos en contact@heyreg.net para cualquier asunto relacionado con la privacidad.",
    pp_s2_title:           "2. Datos que Recopilamos",
    pp_s2_body:            "Recopilamos la información que usted nos proporciona directamente, incluyendo: nombre completo, correo electrónico, número de teléfono, nombre de empresa y el contenido de los mensajes enviados a través de nuestro formulario de contacto. También podemos recopilar datos técnicos como dirección IP, tipo de navegador y páginas visitadas mediante cookies y herramientas de analítica.",
    pp_s3_title:           "3. Finalidad del Tratamiento",
    pp_s3_body:            "Utilizamos sus datos personales para: responder a consultas y solicitudes de servicios, prestar nuestros servicios de consultoría regulatoria, enviar comunicaciones que usted haya solicitado, cumplir con obligaciones legales y regulatorias, y mejorar nuestro sitio web y servicios.",
    pp_s4_title:           "4. Base Legal",
    pp_s4_body:            "El tratamiento se basa en su consentimiento (al enviar nuestro formulario de contacto), la ejecución de un contrato (cuando contrata nuestros servicios) y nuestros intereses legítimos en la operación y mejora del negocio. Cuando la ley lo exija, solicitaremos su consentimiento expreso.",
    pp_s5_title:           "5. Plazo de Conservación",
    pp_s5_body:            "Conservamos sus datos personales únicamente durante el tiempo necesario para los fines descritos en esta Política o conforme lo exija la legislación aplicable. Los formularios de contacto se conservan hasta 3 años. Los registros de clientes se conservan durante un mínimo de 7 años conforme a las obligaciones profesionales.",
    pp_s6_title:           "6. Sus Derechos",
    pp_s6_body:            "Según su ubicación, puede tener derecho a: acceder a sus datos personales, corregir datos inexactos, solicitar la supresión de sus datos, restringir u oponerse al tratamiento, solicitar la portabilidad de sus datos y retirar su consentimiento en cualquier momento. Para ejercer estos derechos, contáctenos en contact@heyreg.net. En Costa Rica, estos derechos están regulados por la Ley 8968.",
    pp_s7_title:           "7. Compartición con Terceros",
    pp_s7_body:            "No vendemos ni arrendamos sus datos personales. Podemos compartir datos con proveedores de servicios de confianza (hospedaje web, analítica, plataformas de correo) que los procesan en nuestro nombre bajo acuerdos de protección de datos. También podemos divulgar datos cuando lo exija la ley.",
    pp_s8_title:           "8. Cookies",
    pp_s8_body:            "Nuestro sitio web utiliza cookies esenciales para recordar sus preferencias de idioma y tema (almacenadas localmente en su navegador). No utilizamos cookies de rastreo ni publicidad. Puede desactivar las cookies en la configuración de su navegador, aunque esto puede afectar la funcionalidad del sitio.",
    pp_s9_title:           "9. Seguridad de los Datos",
    pp_s9_body:            "Implementamos medidas técnicas y organizativas apropiadas para proteger sus datos contra el acceso no autorizado, pérdida o divulgación. Sin embargo, ninguna transmisión por internet es completamente segura y no podemos garantizar una seguridad absoluta.",
    pp_s10_title:          "10. Cambios a Esta Política",
    pp_s10_body:           "Podemos actualizar esta Política de Privacidad periódicamente. La fecha en la parte superior de esta página refleja la revisión más reciente. El uso continuado del sitio web después de los cambios implica la aceptación de la Política actualizada.",
    pp_s11_title:          "11. Contacto",
    pp_s11_body:           "Para cualquier consulta sobre esta Política de Privacidad o el tratamiento de sus datos, contáctenos en contact@heyreg.net o a través de nuestro formulario de contacto.",

    /* ---- Términos y Condiciones ---- */
    tc_hero_title:         "Términos y Condiciones",
    tc_breadcrumb_current: "Términos y Condiciones",
    tc_updated:            "Última actualización: 19 de abril de 2026",
    tc_intro:              "Lea detenidamente estos Términos y Condiciones antes de utilizar el sitio web de HeyReg o contratar nuestros servicios. Al acceder a este sitio web o suscribir un acuerdo de servicio, usted acepta quedar vinculado por estos Términos.",
    tc_s1_title:           "1. Aceptación",
    tc_s1_body:            "Al acceder o utilizar este sitio web, usted confirma que tiene al menos 18 años de edad y que acepta estos Términos y nuestra Política de Privacidad. Si no está de acuerdo, le rogamos que no utilice este sitio web.",
    tc_s2_title:           "2. Servicios",
    tc_s2_body:            "HeyReg presta servicios de consultoría regulatoria, asesoría en cumplimiento normativo, gestión de permisos y licencias, relaciones gubernamentales y evaluación de riesgos. El alcance específico de los servicios para cada encargo se define en un acuerdo o propuesta escrita firmada por ambas partes.",
    tc_s3_title:           "3. Obligaciones del Cliente",
    tc_s3_body:            "Los clientes se comprometen a proporcionar información veraz y completa necesaria para la prestación de nuestros servicios, a responder con prontitud a las solicitudes y a cumplir con las leyes y regulaciones aplicables. HeyReg no es responsable de los resultados derivados de información inexacta proporcionada por el cliente.",
    tc_s4_title:           "4. Honorarios y Pago",
    tc_s4_body:            "Los honorarios se especifican en cada acuerdo de servicio. Salvo indicación contraria, las facturas vencen dentro de los 30 días calendario siguientes a su emisión. Los pagos tardíos podrán generar intereses al tipo permitido por la ley aplicable. HeyReg se reserva el derecho de suspender los servicios para cuentas con más de 60 días de mora.",
    tc_s5_title:           "5. Confidencialidad",
    tc_s5_body:            "Ambas partes se comprometen a mantener la confidencialidad de toda la información no pública intercambiada durante el encargo. Esta obligación subsiste a la terminación de los servicios por un período de 5 años. La información confidencial no incluye datos de dominio público ni desarrollados de forma independiente.",
    tc_s6_title:           "6. Propiedad Intelectual",
    tc_s6_body:            "Todo el contenido de este sitio web — incluidos textos, gráficos, logotipos y software — es propiedad de HeyReg y está protegido por las leyes de propiedad intelectual aplicables. Los entregables de cada encargo pasan a ser propiedad del cliente una vez abonados íntegramente los honorarios.",
    tc_s7_title:           "7. Limitación de Responsabilidad",
    tc_s7_body:            "La responsabilidad de HeyReg frente a cualquier cliente no excederá los honorarios pagados por el servicio concreto que origine la reclamación en los 12 meses anteriores al evento. No somos responsables de daños indirectos, incidentales o consecuentes. Los resultados regulatorios dependen de las autoridades gubernamentales y no pueden garantizarse.",
    tc_s8_title:           "8. Ley Aplicable",
    tc_s8_body:            "Estos Términos se rigen por las leyes de la República de Costa Rica. Cualquier controversia derivada de estos Términos estará sujeta a la jurisdicción exclusiva de los tribunales de San José, Costa Rica, salvo acuerdo contrario en el contrato de servicios.",
    tc_s9_title:           "9. Cambios a Estos Términos",
    tc_s9_body:            "Nos reservamos el derecho de modificar estos Términos en cualquier momento. Los cambios entrarán en vigor desde su publicación en esta página. El uso continuado de nuestro sitio web o servicios después de los cambios implica la aceptación de los Términos actualizados.",
    tc_s10_title:          "10. Contacto",
    tc_s10_body:           "Para consultas sobre estos Términos, contáctenos en contact@heyreg.net o a través de nuestro formulario de contacto.",
  },

};
