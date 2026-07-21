/**
 * Home-page content blocks.
 *
 * Stats, testimonials and the case study are ILLUSTRATIVE placeholders —
 * replace with real, verifiable numbers and quotes before publishing.
 */

export const stats = [
  { value: 100, suffix: "+", label: "Businesses & firms served" },
  { value: 200, suffix: "+", label: "Finance professionals" },
  { value: 4, suffix: "", label: "Continents served" },
  { value: 99.8, decimals: 1, suffix: "%", label: "Accuracy rate" },
] as const;

export const whyUs = [
  {
    icon: "globe",
    title: "One Global Partner",
    body: "Your entire finance function — bookkeeping to CFO — across the US, Canada, UK, Australia and beyond, under one roof.",
  },
  {
    icon: "user-check",
    title: "Dedicated Expert Teams",
    body: "A trained team that learns your business and stays with you — not a rotating ticket queue.",
  },
  {
    icon: "shield-check",
    title: "Audit-Ready, Always",
    body: "Multi-level review and clean documentation trails mean your books hold up to scrutiny every cycle.",
  },
  {
    icon: "coins",
    title: "AI-Powered Accuracy",
    body: "Automation paired with expert human review for precision, faster turnaround, and fewer errors.",
  },
  {
    icon: "plug",
    title: "Works In Your Stack",
    body: "QuickBooks, Xero, NetSuite, Sage, ADP — we operate inside the platforms you already run.",
  },
  {
    icon: "lock",
    title: "Enterprise-Grade Security",
    body: "Role-based access, multi-factor authentication, encryption, and full audit trails on every engagement.",
  },
] as const;

export const industries = [
  { name: "CPA & Accounting Firms", icon: "landmark" },
  { name: "SaaS & Technology", icon: "cpu" },
  { name: "E-commerce & Retail", icon: "shopping-bag" },
  { name: "Real Estate", icon: "building-2" },
  { name: "Healthcare", icon: "activity" },
  { name: "Manufacturing", icon: "factory" },
  { name: "Startups & Scale-ups", icon: "rocket" },
  { name: "Professional Services", icon: "briefcase" },
] as const;

export const howWeWork = [
  {
    step: "01",
    title: "Discovery",
    body: "We learn your entities, jurisdictions, systems, and calendar to scope the right engagement.",
  },
  {
    step: "02",
    title: "Transition Plan",
    body: "We define scope, SLAs, responsibilities, and a clean handover map before anything moves.",
  },
  {
    step: "03",
    title: "Secure Onboarding",
    body: "We connect to your systems through controlled, audited access — without disrupting your close.",
  },
  {
    step: "04",
    title: "Deliver & Reconcile",
    body: "Every deliverable follows a structured workflow with multi-level quality review.",
  },
  {
    step: "05",
    title: "Ongoing Partnership",
    body: "Reporting, planning sessions, and responsive support as your business scales.",
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
    "A fast-scaling company was closing books manually across multiple entities and jurisdictions, with reconciliation errors delaying investor reporting every month.",
  solution: [
    "Rebuilt a compliant chart of accounts across all entities",
    "Automated multi-currency reconciliation and intercompany eliminations",
    "Standardized a repeatable four-day close calendar",
    "Centralized bookkeeping, payroll, and tax under one partner",
  ],
  result: "Month-end close reduced by 66%, with audit-ready statements every cycle.",
  quote:
    "AccountsUp took our messy multi-entity books and gave us a clean, predictable close. We finally trust our numbers.",
  attribution: "Controller — Multi-entity technology company",
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
      "As a CPA firm, AccountsUp is the back office that lets us take on more clients without more hires.",
    name: "Jennifer Adams",
    role: "Partner, CPA Firm",
  },
  {
    quote:
      "Managing payroll and tax across regions used to be a nightmare. Now it just runs, correctly, every cycle.",
    name: "Priya Nair",
    role: "Head of People Ops",
  },
  {
    quote:
      "Their team caught nexus and VAT issues our previous provider missed entirely. Real expertise.",
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
      "A single dedicated partner who actually understands our structure. Responsive, precise, global.",
    name: "James Rodriguez",
    role: "Financial Controller",
  },
] as const;

export const faqs = [
  {
    q: "Which countries do you serve?",
    a: "We support clients worldwide, with deep coverage across the US, Canada, the UK, and Australia/NZ — including the cross-border obligations that come with operating in multiple regions.",
  },
  {
    q: "Which services can you provide?",
    a: "The full finance function: bookkeeping, taxation, sales tax / VAT / GST, audit support, financial statements, virtual CFO, payroll, and FP&A — for CPA firms (organized by country) and for growing businesses (organized by function).",
  },
  {
    q: "Which platforms do you support?",
    a: "For accounting: QuickBooks Online, Xero, Wave, Sage Intacct, and NetSuite. For payroll: ADP, Gusto, Ceridian Dayforce, Paylocity, and Rippling. If you run something else, ask us.",
  },
  {
    q: "Can you white-label for our CPA firm?",
    a: "Yes. We work behind the scenes as your back office — your brand, your client relationship, our capacity and expertise.",
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

// Honest capability / platform strip — NOT accreditation logos.
export const trustBadges = [
  "US GAAP",
  "IFRS",
  "Canadian CRA",
  "UK / EU VAT",
  "QuickBooks",
  "Xero",
  "NetSuite",
  "Sage",
] as const;
