/**
 * Full AccountsUp service suite — global, full-service positioning.
 * Organized into categories; every service has an original description.
 * `icon` is a kebab-case key mapped to a lucide icon in the components
 * (with a safe fallback), so a missing icon never breaks the build.
 */
export type Service = {
  slug: string;
  name: string;
  icon: string;
  description: string;
  features?: string[];
};

export type ServiceCategory = {
  key: string;
  title: string;
  blurb: string;
  services: Service[];
};

export const serviceCategories: ServiceCategory[] = [
  {
    key: "cpa",
    title: "Accounting for CPA & Accounting Firms",
    blurb:
      "White-label back-office support for CPA and accounting firms across the US, Canada, UK, and Australia — scale your capacity without adding headcount.",
    services: [
      {
        slug: "bookkeeping",
        name: "Bookkeeping & Accounting",
        icon: "book-open",
        description:
          "Accurate, timely bookkeeping and month-end close that keeps client records organized, reconciled, and decision-ready.",
        features: [
          "AR/AP cycle & bank reconciliation",
          "Monthly close — Balance Sheet, P&L, Cash Flow",
          "Multi-currency & multi-entity ledgers",
          "GAAP / IFRS chart of accounts",
        ],
      },
      {
        slug: "taxation",
        name: "Taxation & Tax Preparation",
        icon: "receipt",
        description:
          "End-to-end tax preparation, planning, and compliance designed to minimize liabilities and keep every filing accurate and on time.",
        features: [
          "Individual & corporate returns",
          "Tax planning & advisory",
          "Multi-jurisdiction compliance",
          "Year-end filing support",
        ],
      },
      {
        slug: "sales-tax",
        name: "Sales Tax, VAT & GST/HST",
        icon: "percent",
        description:
          "Indirect-tax calculation, registration, filing, and reconciliation across US sales tax, UK/EU VAT, and Canadian GST/HST/PST.",
        features: [
          "Nexus review & registration",
          "Filing & remittance",
          "Reconciliation & audit support",
        ],
      },
      {
        slug: "audit",
        name: "Audit & Assurance Support",
        icon: "clipboard-check",
        description:
          "Audit-ready documentation, reconciliations, and reviewer support to help you move through audits smoothly and confidently.",
        features: [
          "Audit-ready workpapers",
          "Reconciliations & schedules",
          "Reviewer & partner support",
        ],
      },
      {
        slug: "financial-statements",
        name: "Financial Statements & Reporting",
        icon: "file-text",
        description:
          "Accurate financial statements and expert handling of complex accounting standards and transactions.",
        features: [
          "GAAP / IFRS statements",
          "Notice-to-Reader / compilations",
          "Complex transactions",
        ],
      },
      {
        slug: "cfo",
        name: "Virtual CFO & Business Advisory",
        icon: "line-chart",
        description:
          "Strategic financial insight, forecasting, and performance analysis to support smarter decisions and long-term growth.",
        features: [
          "Forecasting & budgeting",
          "KPI & cash-flow dashboards",
          "Board & strategic advisory",
        ],
      },
      {
        slug: "payroll",
        name: "Payroll Solutions",
        icon: "wallet",
        description:
          "End-to-end, compliant payroll across every jurisdiction you operate in — timely, accurate, and error-free.",
        features: [
          "Full-run payroll & direct deposit",
          "Statutory deductions & filings",
          "Year-end W-2 / 1099 / T4",
        ],
      },
      {
        slug: "tax-credits",
        name: "Tax Credits & Incentives",
        icon: "badge-check",
        description:
          "Capture the credits you're entitled to — from US ERTC to Canadian SR&ED — backed by documentation that stands up to scrutiny.",
        features: [
          "Eligibility assessment",
          "Documentation & filing",
          "Audit-defense support",
        ],
      },
    ],
  },
  {
    key: "business",
    title: "Accounting for Businesses",
    blurb:
      "Full-cycle finance operations for growing companies — we run the function end to end so your team can focus on the business.",
    services: [
      {
        slug: "p2p",
        name: "Procure-to-Pay (P2P)",
        icon: "banknote",
        description:
          "Vendor onboarding, invoice processing, approvals, and payments with tight controls and clean audit trails.",
      },
      {
        slug: "o2c",
        name: "Order-to-Cash (O2C)",
        icon: "coins",
        description:
          "Faster, cleaner revenue cycles — from billing and collections to cash application and reconciliation.",
      },
      {
        slug: "r2r",
        name: "Record-to-Report (R2R)",
        icon: "file-check",
        description:
          "A disciplined close and reporting engine: journal entries, reconciliations, and reliable management reporting.",
      },
      {
        slug: "reporting",
        name: "Financial Reporting",
        icon: "pie-chart",
        description:
          "Board- and investor-ready reporting packs with the accuracy and consistency stakeholders expect.",
      },
      {
        slug: "consulting",
        name: "Finance & Accounting Consulting",
        icon: "users",
        description:
          "Process design, system selection, and finance-transformation support to level up your operations.",
      },
      {
        slug: "tax-support",
        name: "Tax Support",
        icon: "receipt",
        description:
          "Hands-on support across compliance, provisioning, and planning so nothing slips through the cracks.",
      },
      {
        slug: "fpna",
        name: "FP&A Solutions",
        icon: "trending-up",
        description:
          "Planning, budgeting, and analysis that turn your numbers into forward-looking decisions.",
      },
    ],
  },
  {
    key: "technology",
    title: "Technology & Automation",
    blurb:
      "Modernize how your finance function runs — automation, analytics, and custom builds that remove manual work and unlock insight.",
    services: [
      {
        slug: "power-platform",
        name: "Power Platform & SharePoint",
        icon: "cpu",
        description:
          "Automate workflows and build internal apps and portals on Power Automate, Power Apps, and SharePoint.",
      },
      {
        slug: "bi",
        name: "Business Intelligence & Analytics",
        icon: "database",
        description:
          "Dashboards and analytics that turn scattered financial data into a single, clear source of truth.",
      },
      {
        slug: "web-dev",
        name: "Web Application Development",
        icon: "code",
        description:
          "Full-spectrum web and application development for finance and operations use cases.",
      },
      {
        slug: "design",
        name: "Graphic & Web Design",
        icon: "palette",
        description:
          "Clean, on-brand design for decks, reports, dashboards, and digital presence.",
      },
      {
        slug: "integration",
        name: "Integration & Migration",
        icon: "workflow",
        description:
          "Seamless data migration and system integration across your accounting and business stack.",
      },
    ],
  },
  {
    key: "support",
    title: "Business Support Services",
    blurb:
      "Extend your team with reliable, cost-effective operational support built around your workflows.",
    services: [
      {
        slug: "hr",
        name: "HR Operations",
        icon: "briefcase",
        description:
          "Employee lifecycle administration, onboarding, records, and day-to-day HR process support.",
      },
      {
        slug: "va",
        name: "Virtual Assistance",
        icon: "headset",
        description:
          "Trained virtual assistants for admin, scheduling, research, and daily operational tasks.",
      },
      {
        slug: "rcm",
        name: "Healthcare Revenue Cycle Management",
        icon: "activity",
        description:
          "End-to-end RCM — coding, billing, claims, and collections — to optimize healthcare revenue.",
      },
    ],
  },
];

/** Flattened list of every service. */
export const allServices: Service[] = serviceCategories.flatMap((c) => c.services);

/** Curated highlights for the homepage grid. */
export const featuredSlugs = [
  "bookkeeping",
  "taxation",
  "audit",
  "cfo",
  "payroll",
  "reporting",
  "fpna",
  "bi",
];
export const featuredServices: Service[] = featuredSlugs
  .map((slug) => allServices.find((s) => s.slug === slug))
  .filter((s): s is Service => Boolean(s));
