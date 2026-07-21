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

  // Lead capture via Web3Forms (reliable, Cloudflare-backed). Get a FREE access
  // key in ~1 min: go to https://web3forms.com, enter info@accountsup.com, and
  // copy the key it shows you — then paste it below. Submissions are then emailed
  // to that address automatically (the form CCs operations@accountsup.com).
  // Until a real key is set, the form safely opens the email app instead.
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
