/**
 * Global site configuration — brand, contact, navigation, socials.
 * This is the first file to edit when you rebrand or update contact details.
 *
 * NOTE: phone numbers below are the PLACEHOLDERS carried over from the current
 * accountsup.com (555-xxxx are not real). Replace them with real numbers before
 * publishing.
 */
export const site = {
  name: "AccountsUp",
  domain: "accountsup.com",
  tagline: "Corporate Accounting Partner",
  description:
    "Institutional-grade outsourced bookkeeping, payroll, and cross-border tax compliance for growing corporations across the US and Canada.",

  // --- Contact (replace placeholders) ---
  email: "info@accountsup.com",
  emailOps: "operations@accountsup.com",
  phoneUS: "+1 (800) 555-1234",
  phoneCA: "+1 (888) 555-1234",
  availability: "24/7 Operations & Support",

  // --- Primary calls to action ---
  ctaPrimary: { label: "Book a Consultation", href: "/contact" },
  ctaSecondary: { label: "Talk to an Expert", href: "/contact" },

  // --- Header navigation ---
  nav: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],

  // --- Social links (add real URLs) ---
  socials: {
    linkedin: "#",
    x: "#",
    facebook: "#",
    instagram: "#",
  },

  legal: ["Terms of Service", "Privacy Policy", "Cookie Policy"],
} as const;

export type Site = typeof site;
