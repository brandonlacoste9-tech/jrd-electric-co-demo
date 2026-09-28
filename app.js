const I18N = {
en: {
  "nav.services": "Services", "nav.why": "Why us", "nav.reviews": "Reviews", "nav.contact": "Contact",
  "nav.call": "(919) 832-5208",
  "hero.kicker": "Raleigh, NC · New construction & additions · 5.0-star rated",
  "hero.title": "Wired right,<br>the first time.",
  "hero.sub": "Rated 5.0 out of 5 from 14 reviews: JRD Electric Co handles new construction wiring, home additions and electrical repairs across Raleigh — clean, code-compliant work.",
  "hero.cta1": "Call (919) 832-5208", "hero.cta2": "See services",
  "trust.t1t": "New construction", "trust.t1d": "Rough-in to finish wiring",
  "trust.t2t": "5.0 ★ rated", "trust.t2d": "14 reviews on BestProsInTown",
  "trust.t3t": "Mon – Fri, 8 AM – 5 PM", "trust.t3d": "Open weekdays for projects",
  "stats.hoursNum": "Mon – Fri", "stats.hours": "8 AM – 5 PM",
  "stats.makesNum": "New builds", "stats.makes": "& additions wired",
  "stats.diagNum": "5.0 ★", "stats.diag": "14 reviews",
  "stats.quoteNum": "Upfront", "stats.quote": "clear pricing",
  "services.kicker": "What we do", "services.title": "Electrical work for homes & projects",
  "services.s1t": "New construction wiring", "services.s1d": "Complete electrical rough-in and finish for new builds — done to code, on schedule.",
  "services.s2t": "Home additions & remodels", "services.s2d": "Power, lighting and outlets for additions, renovations and remodel projects.",
  "services.s3t": "Panel & breaker upgrades", "services.s3d": "Safe, code-compliant panel upgrades and breaker replacements for older homes.",
  "services.s4t": "Troubleshooting & repairs", "services.s4d": "Fast, accurate diagnosis of electrical problems — fixed right the first time.",
  "services.s5t": "Lighting & fixtures", "services.s5d": "Recessed lighting, interior and exterior fixtures installed cleanly.",
  "services.s6t": "General electrical projects", "services.s6d": "Residential and light-commercial wiring, upgrades and repairs — big or small.",
  "why.kicker": "Why choose us", "why.title": "The electrician builders trust",
  "why.intro": "JRD Electric Co specializes in new construction wiring and home additions across Raleigh — plus the repairs and upgrades homeowners need. Every review we have is five stars, and we work to keep it that way.",
  "why.l1t": "New-construction pros", "why.l1d": "Wiring new builds and additions right the first time.",
  "why.l2t": "5.0-star rated", "why.l2d": "A perfect rating across 14 published reviews.",
  "why.l3t": "Upfront pricing", "why.l3d": "Clear pricing confirmed before work begins.",
  "why.l4t": "Raleigh local", "why.l4d": "Based at 2023 Reaves Dr — serving the Triangle.",
  "gallery.kicker": "On the job", "gallery.title": "Clean, code-compliant work",
  "gallery.c1": "Lighting installed cleanly",
  "gallery.c2": "Panels wired to code",
  "gallery.c3": "Exterior fixtures done right",
  "reviews.kicker": "Word on the street", "reviews.title": "A perfect rating from Raleigh homeowners",
  "reviews.num": "5.0", "reviews.more": "from 14 reviews on BestProsInTown",
  "reviews.cta": "Find our reviews on Google",
  "faq.kicker": "Good to know", "faq.title": "Frequently asked questions",
  "faq.q1": "Do you wire new construction?",
  "faq.a1": "Yes — new construction wiring from rough-in to finish is our specialty. Call (919) 832-5208 to discuss your project.",
  "faq.q2": "Can you wire my home addition or remodel?",
  "faq.a2": "Absolutely — we wire additions, renovations and remodels, including new circuits, lighting and outlets.",
  "faq.q3": "What are your hours?",
  "faq.a3": "Monday to Friday, 8:00 AM to 5:00 PM. We're closed on weekends.",
  "faq.q4": "How do I get a quote?",
  "faq.a4": "Call us at (919) 832-5208 — we'll go over your project and confirm clear pricing before any work starts.",
  "contact.kicker": "Get in touch", "contact.title": "Start your project",
  "contact.addr": "Address", "contact.phone": "Phone", "contact.hours": "Hours",
  "contact.hoursVal": "Mon – Fri: 8:00 AM – 5:00 PM<br>Sat – Sun: closed",
  "contact.cta": "Call now for a quote",
  "nav.gallery": "Gallery", "nav.faq": "FAQ",
  "footer.tag": "Electrician · Raleigh, North Carolina"
}};

function applyLang() {
  document.documentElement.lang = "en";
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const val = I18N.en[key];
    if (val !== undefined) el.innerHTML = val;
  });
  document.title = "JRD Electric Co — Electrician in Raleigh, NC | New Construction & Additions";
}

const menuBtn = document.getElementById("menuBtn");
const mainNav = document.getElementById("mainNav");
menuBtn.addEventListener("click", () => mainNav.classList.toggle("open"));
mainNav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => mainNav.classList.remove("open")));

applyLang();
