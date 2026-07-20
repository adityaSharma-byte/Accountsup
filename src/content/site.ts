/**
 * Global site configuration — brand, contact, navigation, socials.
 *
 * NOTE: phone numbers are PLACEHOLDERS (555-xxxx / 0000 are not real).
 * Replace with real numbers before publishing.
 */
export const site = {
  name: "AccountsUp",
  domain: "accountsup.com",
  tagline: "Global Accounting & Finance Partner",
  description:
    "AccountsUp is a full-service global accounting and finance partner — bookkeeping, tax, audit, payroll, virtual CFO, reporting, technology, and business support — for CPA firms and growing companies worldwide.",

  // --- Contact (replace placeholders) ---
  email: "info@accountsup.com",
  emailOps: "operations@accountsup.com",
  phoneUS: "+1 (800) 555-1234",
  phoneCA: "+1 (888) 555-1234",
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
