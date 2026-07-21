/**
 * Global site configuration — brand, contact, navigation, socials.
 */
export const site = {
  name: "AccountsUp",
  domain: "accountsup.com",
  tagline: "Global Accounting & Finance Partner",
  description:
    "AccountsUp is a global accounting and finance partner — bookkeeping, tax, audit, payroll, virtual CFO, and reporting — for CPA firms and growing businesses worldwide.",

  // --- Contact ---
  email: "info@accountsup.com",
  emailOps: "operations@accountsup.com",
  phone: "+1 213 456 8222",
  phoneFlag: "🇺🇸",
  phoneCountry: "USA",
  availability: "24/7 Global Operations & Support",

  // Lead capture: get a FREE access key in ~1 min at https://web3forms.com by
  // entering info@accountsup.com — every form submission is then emailed there
  // (add operations@accountsup.com as a CC in the Web3Forms dashboard). Paste
  // the key below. Until it's set, the form falls back to opening the email app.
  formAccessKey: "REPLACE_WITH_WEB3FORMS_ACCESS_KEY",

  ctaPrimary: { label: "Book a Consultation", href: "/contact" },
  ctaSecondary: { label: "Talk to an Expert", href: "/contact" },

  nav: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Industries", href: "/#industries" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],

  socials: {
    linkedin: "#",
    x: "#",
    facebook: "#",
    instagram: "#",
    youtube: "#",
  },

  legal: ["Terms of Service", "Privacy Policy", "Cookie Policy"],
} as const;

export type Site = typeof site;
