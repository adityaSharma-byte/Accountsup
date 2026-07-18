/**
 * Home-page content blocks.
 *
 * Stats, testimonials and the case study are ILLUSTRATIVE placeholders (the current
 * accountsup.com ships unfilled 0% stats). Replace with real, verifiable numbers and
 * quotes before publishing.
 */

export const stats = [
  { value: 50, suffix: "+", label: "Active corporate clients" },
  { value: 99.8, decimals: 1, suffix: "%", label: "Ledger accuracy" },
  { value: 2, suffix: "", label: "Countries — US & Canada" },
  { display: "24/7", label: "Operations & support" },
] as const;

export const whyUs = [
  {
    icon: "globe",
    title: "Dual-Country Compliance",
    body: "US GAAP and Canadian CRA mastery under one roof — so your cross-border obligations are handled without hand-offs or gaps.",
  },
  {
    icon: "user-check",
    title: "Dedicated Ledger Partner",
    body: "A single point of contact who understands your entity structure, close calendar, and reporting needs — not a rotating ticket queue.",
  },
  {
    icon: "shield-check",
    title: "Audit-Ready, Always",
    body: "Multi-level review and clean documentation trails mean your books hold up to scrutiny every cycle, not just at year-end.",
  },
  {
    icon: "coins",
    title: "Multi-Currency Fluency",
    body: "USD, CAD, EUR and GBP closes handled cleanly, with intercompany eliminations and FX handled as routine, not exceptions.",
  },
  {
    icon: "plug",
    title: "Platform-Agnostic",
    body: "We work inside your stack — QuickBooks, Xero, NetSuite, Sage Intacct, and the payroll platforms you already run.",
  },
  {
    icon: "lock",
    title: "Institutional-Grade Security",
    body: "Role-based access, multi-factor authentication, and encrypted, controlled data transfer with full audit trails.",
  },
] as const;

export const howWeWork = [
  {
    step: "01",
    title: "Discovery",
    body: "We learn your entities, jurisdictions, systems, and close calendar to scope the right engagement.",
  },
  {
    step: "02",
    title: "Transition Plan",
    body: "We define scope, SLAs, responsibilities, and a clean handover map before anything moves.",
  },
  {
    step: "03",
    title: "Secure Onboarding",
    body: "We connect to your ledgers and payroll systems through controlled, audited access.",
  },
  {
    step: "04",
    title: "Deliver & Reconcile",
    body: "Every close follows a structured workflow with multi-level quality review.",
  },
  {
    step: "05",
    title: "Ongoing Partnership",
    body: "Monthly reporting, planning sessions, and responsive support as your business scales.",
  },
] as const;

export const security = [
  "Role-based access with multi-factor authentication",
  "Encrypted, controlled data transfer with full audit trails",
  "Segregated, per-client working environments",
  "NDA-backed, confidentiality-first engagements",
  "Operations on secured, monitored systems",
] as const;

export const caseStudy = {
  eyebrow: "Case Study",
  headline: "Cut month-end close from 12 days to 4",
  problem:
    "A cross-border SaaS company was closing books manually across its US and Canadian entities. Multi-currency errors and manual reconciliation were delaying investor reporting every month.",
  solution: [
    "Rebuilt a GAAP-compliant chart of accounts across both entities",
    "Automated multi-currency reconciliation and intercompany eliminations",
    "Standardized a repeatable four-day close calendar",
    "Centralized US + Canada compliance under one dedicated partner",
  ],
  result: "Month-end close reduced by 66%, with audit-ready statements every cycle.",
  quote:
    "AccountsUp took our messy two-country books and gave us a clean, predictable close. We finally trust our numbers.",
  attribution: "Controller — Cross-border SaaS company",
} as const;

export const testimonials = [
  {
    quote:
      "Our bookkeeping and monthly reporting are finally accurate and on time. AccountsUp feels like an in-house team.",
    name: "Michael Carter",
    role: "CFO, B2B Services",
  },
  {
    quote:
      "Managing payroll across the US and Canada used to be a nightmare. Now it just runs, correctly, every cycle.",
    name: "Priya Nair",
    role: "Head of People Ops",
  },
  {
    quote:
      "Their cross-border tax team caught nexus and GST/HST issues our previous firm missed entirely.",
    name: "David Thompson",
    role: "Founder, E-commerce",
  },
  {
    quote:
      "Clean documentation, multi-level review, zero surprises at audit. Exactly what we needed as we scaled.",
    name: "Sarah Mitchell",
    role: "VP Finance, SaaS",
  },
  {
    quote:
      "A single dedicated partner who actually understands our entity structure. Responsive and precise.",
    name: "James Rodriguez",
    role: "Financial Controller",
  },
] as const;

export const faqs = [
  {
    q: "Which countries do you serve?",
    a: "We specialize in the United States and Canada, including the cross-border obligations that come with operating in both.",
  },
  {
    q: "Which accounting and payroll platforms do you support?",
    a: "For bookkeeping: QuickBooks Online, Xero, Wave, Sage Intacct, and NetSuite. For payroll: ADP, Gusto, Ceridian Dayforce, Paylocity, and Rippling. If you run something else, ask us.",
  },
  {
    q: "Can you handle bookkeeping, payroll, and tax together?",
    a: "Yes. Most clients engage us across all three so their ledger, payroll, and cross-border tax compliance stay in sync under one partner.",
  },
  {
    q: "How do you keep our financial data secure?",
    a: "Role-based access with multi-factor authentication, encrypted and controlled data transfer with audit trails, segregated per-client environments, and NDA-backed engagements.",
  },
  {
    q: "What does onboarding look like?",
    a: "A short discovery, a written transition plan with SLAs, then secure onboarding into your systems — typically without disrupting your current close.",
  },
  {
    q: "How is pricing structured?",
    a: "Engagements are scoped to your entities, volume, and workload with flexible models. Book a consultation and we'll map it to your needs.",
  },
] as const;

export const events = [
  "Accountex",
  "AICPA Engage",
  "QuickBooks Connect",
  "Xerocon",
  "Sage Transform",
] as const;
