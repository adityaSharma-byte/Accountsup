/**
 * Industry verticals — each becomes a full landing page under /industries/[slug].
 * This is AccountsUp's step beyond Global FPO, which has no industries section.
 * All copy is original and written to be credible for a finance-outsourcing buyer.
 */
export type Industry = {
  slug: string;
  name: string;
  short: string;
  icon: string;
  blurb: string;
  overview: string;
  challenges: string[];
  howWeHelp: string[];
};

export const industries: Industry[] = [
  {
    slug: "saas-technology",
    name: "SaaS & Technology",
    short: "SaaS & Technology",
    icon: "cpu",
    blurb:
      "Revenue recognition, deferred revenue, and investor-ready metrics for subscription businesses.",
    overview:
      "Recurring-revenue models create accounting complexity that generic bookkeeping can't keep up with. AccountsUp gives SaaS and technology companies clean ASC 606 revenue recognition, reliable SaaS metrics, and board-ready reporting — so your numbers are ready the moment a fundraise or audit begins.",
    challenges: [
      "ASC 606 revenue recognition across subscriptions, usage, and multi-year contracts",
      "Deferred revenue and MRR/ARR schedules that reconcile to the GL",
      "Investor and board reporting on SaaS metrics (churn, CAC, LTV, burn)",
      "Multi-entity and multi-currency consolidation as you scale globally",
    ],
    howWeHelp: [
      "Automated revenue schedules tied to your billing system",
      "Monthly close with SaaS KPI dashboards",
      "Cap-table-aware equity and stock-comp accounting",
      "Audit-ready workpapers for your next round or diligence",
    ],
  },
  {
    slug: "ecommerce-retail",
    name: "E-commerce & Retail",
    short: "E-commerce & Retail",
    icon: "shopping-bag",
    blurb:
      "Multi-channel reconciliation, inventory accounting, and sales-tax nexus handled end to end.",
    overview:
      "Selling across Shopify, Amazon, and physical channels means thousands of transactions, payouts, fees, and refunds to reconcile every month. AccountsUp turns that firehose into clean books — with accurate inventory and cost of goods, and full sales-tax and VAT compliance across the markets you sell in.",
    challenges: [
      "Reconciling payouts, fees, and refunds across marketplaces and processors",
      "Inventory and COGS accuracy across multiple warehouses and channels",
      "Sales-tax nexus, VAT, and GST across every jurisdiction you ship to",
      "Margin visibility by SKU, channel, and campaign",
    ],
    howWeHelp: [
      "Automated channel-to-GL reconciliation",
      "Perpetual inventory and landed-cost accounting",
      "Multi-jurisdiction indirect-tax filing",
      "Contribution-margin reporting by product and channel",
    ],
  },
  {
    slug: "real-estate-construction",
    name: "Real Estate & Construction",
    short: "Real Estate & Construction",
    icon: "building-2",
    blurb:
      "Property-level books, job costing, and draw management for owners, developers, and contractors.",
    overview:
      "Real estate and construction finance lives at the property and project level. AccountsUp keeps entity- and project-level books clean — from job costing and WIP schedules to CAM reconciliations and lender draw packages — so every stakeholder sees an accurate picture.",
    challenges: [
      "Entity-by-entity books across a portfolio of properties or projects",
      "Job costing, WIP, and percentage-of-completion accounting",
      "Draw schedules, retainage, and lender reporting",
      "CAM reconciliations and tenant/owner statements",
    ],
    howWeHelp: [
      "Property- and project-level general ledgers",
      "Job-cost and WIP reporting against budget",
      "Lender-ready draw packages and covenant tracking",
      "Consolidated portfolio reporting for owners and investors",
    ],
  },
  {
    slug: "healthcare",
    name: "Healthcare & Life Sciences",
    short: "Healthcare & Life Sciences",
    icon: "activity",
    blurb:
      "Compliant bookkeeping, payer reconciliation, and cost reporting for care providers and clinics.",
    overview:
      "Healthcare organizations juggle payer mixes, insurance reconciliation, and tight compliance. AccountsUp delivers accurate, compliant financial operations for practices, clinics, and life-sciences companies — with the documentation discipline the sector demands.",
    challenges: [
      "Reconciling payments across insurers, patients, and clearinghouses",
      "Accurate accrual accounting for a complex payer mix",
      "Compliance-grade documentation and controls",
      "Cost and margin reporting by location and service line",
    ],
    howWeHelp: [
      "Payer and patient-payment reconciliation",
      "Accrual bookkeeping and monthly close",
      "Controls and audit-ready documentation",
      "Location- and service-line profitability reporting",
    ],
  },
  {
    slug: "manufacturing-distribution",
    name: "Manufacturing & Distribution",
    short: "Manufacturing & Distribution",
    icon: "factory",
    blurb:
      "Standard costing, inventory valuation, and margin analysis for makers and distributors.",
    overview:
      "For manufacturers and distributors, the truth is in the cost of goods. AccountsUp maintains accurate standard and actual costing, disciplined inventory valuation, and variance analysis — so pricing, purchasing, and production decisions rest on numbers you can trust.",
    challenges: [
      "Standard vs. actual costing and variance analysis",
      "Inventory valuation across raw materials, WIP, and finished goods",
      "Landed cost, freight, and duty allocation",
      "Margin visibility by product line and customer",
    ],
    howWeHelp: [
      "Bill-of-materials and standard-cost maintenance",
      "Perpetual inventory and periodic revaluation",
      "Purchase-price and manufacturing variance reporting",
      "Product- and customer-level margin analysis",
    ],
  },
  {
    slug: "startups",
    name: "Startups & Scale-ups",
    short: "Startups & Scale-ups",
    icon: "rocket",
    blurb:
      "Runway, burn, and investor reporting — a full finance function before you need to hire one.",
    overview:
      "Early-stage companies need finance rigor without an in-house team. AccountsUp is your outsourced finance function — clean books, burn and runway tracking, and diligence-ready reporting — so founders can focus on building while staying fundraise-ready.",
    challenges: [
      "Clean, investor-ready books on a startup budget",
      "Burn rate, runway, and cash-flow visibility",
      "Cap table, SAFE, and equity accounting",
      "Diligence readiness for the next round",
    ],
    howWeHelp: [
      "Outsourced bookkeeping and monthly close",
      "Burn and runway dashboards",
      "Equity, SAFE, and convertible-note accounting",
      "Data-room-ready financials and support",
    ],
  },
  {
    slug: "professional-services",
    name: "Professional Services",
    short: "Professional Services",
    icon: "briefcase",
    blurb:
      "Project profitability, WIP, and utilization reporting for agencies, firms, and consultancies.",
    overview:
      "For agencies, law firms, and consultancies, profitability is a project- and people-level question. AccountsUp keeps time, billing, and WIP tightly reconciled — turning utilization and realization into clear reporting that protects your margins.",
    challenges: [
      "Project-level revenue, WIP, and unbilled tracking",
      "Utilization, realization, and effective-rate reporting",
      "Retainer, milestone, and time-and-materials billing",
      "Partner and practice-level profitability",
    ],
    howWeHelp: [
      "Project accounting tied to your PSA or time system",
      "WIP and revenue-recognition schedules",
      "Utilization and realization dashboards",
      "Practice- and client-level profitability reporting",
    ],
  },
  {
    slug: "financial-services",
    name: "Financial Services",
    short: "Financial Services",
    icon: "landmark",
    blurb:
      "Fund, management-company, and fintech accounting with the controls and reporting the sector expects.",
    overview:
      "Financial-services firms operate under a higher bar for accuracy and controls. AccountsUp supports fund managers, fintechs, and advisory firms with rigorous bookkeeping, reconciliations, and reporting built for regulated, high-scrutiny environments.",
    challenges: [
      "Management-company and fund-level accounting",
      "High-volume transaction and settlement reconciliation",
      "Controls, segregation of duties, and audit readiness",
      "Investor and regulatory reporting",
    ],
    howWeHelp: [
      "Management-company bookkeeping and close",
      "Daily and monthly reconciliations at volume",
      "Control frameworks and audit-ready documentation",
      "Investor and management reporting packs",
    ],
  },
];

export function findIndustry(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug);
}
