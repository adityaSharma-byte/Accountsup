/**
 * The three core AccountsUp services (verbatim from the current site's content).
 * Add/remove a service here and every page that lists services updates.
 */
export type Service = {
  slug: string;
  icon: "ledger" | "payroll" | "tax";
  name: string;
  short: string;
  description: string;
  features: string[];
  platforms?: string[];
  scope?: { label: string; items: string[] }[];
};

export const services: Service[] = [
  {
    slug: "bookkeeping",
    icon: "ledger",
    name: "End-to-End Bookkeeping",
    short: "Ledger Management",
    description:
      "We manage the full bookkeeping lifecycle — from transaction recording through month-end close and financial-statement prep — handling multi-currency complexity and keeping every record audit-ready.",
    features: [
      "Accounts Receivable & Accounts Payable cycle management",
      "Monthly close routines — Balance Sheet, P&L, Cash Flow",
      "Multi-currency ledger tracking (USD, CAD, EUR, GBP, and more)",
      "Bank reconciliation & intercompany eliminations",
      "US GAAP-compliant chart of accounts setup",
      "Fixed-asset tracking & depreciation schedules",
    ],
    platforms: ["QuickBooks Online", "Xero", "Wave", "Sage Intacct", "NetSuite"],
  },
  {
    slug: "payroll",
    icon: "payroll",
    name: "Managed Payroll Accounting",
    short: "Managed Payroll",
    description:
      "Complete payroll operations across US and Canadian jurisdictions — from employee onboarding to year-end regulatory submissions — executed error-free.",
    features: [
      "Full-run payroll execution & direct-deposit processing",
      "Statutory deduction tracking (Federal, State, Provincial)",
      "Year-end W-2 & 1099 distributions (US)",
      "Year-end T4 & T5018 filings (Canada)",
      "FICA, EI, CPP & EHT compliance management",
    ],
    platforms: ["ADP", "Gusto", "Ceridian Dayforce", "Paylocity", "Rippling"],
  },
  {
    slug: "tax",
    icon: "tax",
    name: "Cross-Border Tax Filing & Compliance",
    short: "Tax & Compliance",
    description:
      "End-to-end tax preparation and structural compliance mapping across IRS and CRA frameworks — built for companies carrying simultaneous US–Canadian obligations.",
    features: [
      "Corporate income tax preparation (IRS Form 1120 & CRA T2)",
      "State sales-tax nexus review & registration",
      "GST / HST / PST calculation & remittance",
      "Year-end structural tax mapping & planning sessions",
      "Transfer-pricing documentation & intercompany agreements",
      "IRS & CRA audit support & representation coordination",
    ],
    scope: [
      {
        label: "United States",
        items: [
          "Federal Corporate (1120)",
          "State Sales Tax",
          "Payroll Tax Deposits (941)",
          "FBAR / FATCA",
        ],
      },
      {
        label: "Canada",
        items: [
          "Corporate Tax (T2)",
          "GST / HST",
          "Provincial PST",
          "SR&ED Tax Credits",
        ],
      },
    ],
  },
];
