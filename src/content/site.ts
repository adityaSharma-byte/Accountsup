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
  availability: "24/7 Global Operations & Support",

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
