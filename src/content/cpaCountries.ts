/**
 * "Accounting for CPA" — organized by country, mirroring the Global FPO
 * solutions structure. Each country has its own set of services (original copy),
 * each of which becomes a sub-page.
 */
export type CountryService = {
  slug: string;
  name: string;
  description: string;
  icon: string;
};

export type CpaCountry = {
  code: string;
  name: string;
  short: string;
  flag: string;
  blurb: string;
  services: CountryService[];
};

export const cpaCountries: CpaCountry[] = [
  {
    code: "usa",
    name: "United States",
    short: "USA",
    flag: "🇺🇸",
    blurb:
      "Full back-office accounting for US CPA firms and businesses — GAAP-compliant, IRS-ready, and delivered by a dedicated team.",
    services: [
      { slug: "bookkeeping", name: "Bookkeeping & Accounting", icon: "book-open", description: "Accurate, timely US bookkeeping and month-end close — GAAP-compliant and audit-ready." },
      { slug: "taxation", name: "Taxation Services", icon: "receipt", description: "Federal and state tax preparation, planning, and compliance for US individuals and entities." },
      { slug: "sales-tax", name: "Sales Tax Filing", icon: "percent", description: "US sales-tax nexus review, registration, calculation, and multi-state filing." },
      { slug: "audit", name: "Audit & Assurance", icon: "clipboard-check", description: "Audit-ready workpapers, reconciliations, and reviewer support for US audits." },
      { slug: "financial-statements", name: "Financial Statements", icon: "file-text", description: "US GAAP financial statements and complex-transaction accounting." },
      { slug: "cfo", name: "Virtual CFO & Advisory", icon: "line-chart", description: "Forecasting, performance analysis, and strategic advisory for US businesses." },
      { slug: "ertc", name: "Employee Retention Tax Credit", icon: "badge-check", description: "ERTC eligibility, documentation, and filing with audit-defense support." },
      { slug: "payroll", name: "Payroll Solutions", icon: "wallet", description: "Full-run US payroll, statutory deductions, and year-end W-2 / 1099 filings." },
    ],
  },
  {
    code: "canada",
    name: "Canada",
    short: "Canada",
    flag: "🇨🇦",
    blurb:
      "Accounting and tax support aligned to CRA requirements — for Canadian CPA firms and growing companies.",
    services: [
      { slug: "bookkeeping", name: "Bookkeeping & Accounting", icon: "book-open", description: "Clean Canadian bookkeeping and close aligned to CRA requirements." },
      { slug: "gst-hst", name: "GST / HST / QST Services", icon: "percent", description: "Registration, calculation, and remittance of GST, HST, and QST." },
      { slug: "sales-tax", name: "Provincial Sales Tax", icon: "percent", description: "PST calculation, filing, and reconciliation across provinces." },
      { slug: "audit", name: "Accounting & Audit", icon: "clipboard-check", description: "Audit support and assurance-ready documentation for Canadian entities." },
      { slug: "financial-statements", name: "Financial Statements", icon: "file-text", description: "Canadian financial statements and complex accounting services." },
      { slug: "cfo", name: "Virtual CFO & Advisory", icon: "line-chart", description: "Forecasting and business advisory tailored to Canadian companies." },
      { slug: "notice-to-reader", name: "Notice-to-Reader", icon: "file-check", description: "Compilation (Notice-to-Reader) financial statements for Canadian clients." },
      { slug: "payroll", name: "Payroll Outsourcing", icon: "wallet", description: "Canadian payroll with CPP, EI, and T4 / T5018 compliance." },
    ],
  },
  {
    code: "australia",
    name: "Australia & NZ",
    short: "Australia",
    flag: "🇦🇺",
    blurb:
      "BAS-ready accounting, tax, and SMSF support for Australian and New Zealand firms and businesses.",
    services: [
      { slug: "bookkeeping", name: "Bookkeeping & Accounting", icon: "book-open", description: "Australian bookkeeping and close — accurate and BAS-ready." },
      { slug: "taxation", name: "Tax Preparation", icon: "receipt", description: "Australian income-tax preparation, planning, and compliance." },
      { slug: "gst", name: "GST / VAT Services", icon: "percent", description: "GST calculation, BAS lodgement, and indirect-tax compliance." },
      { slug: "audit", name: "Auditing Services", icon: "clipboard-check", description: "Audit support and assurance for Australian entities." },
      { slug: "financial-statements", name: "Financial Statements", icon: "file-text", description: "Financial statements for Australia and New Zealand." },
      { slug: "cfo", name: "CFO & Business Advisory", icon: "line-chart", description: "Analytical and advisory support for Australian businesses." },
      { slug: "smsf", name: "Self-Managed Super Fund", icon: "badge-check", description: "SMSF administration, accounting, and compliance." },
      { slug: "payroll", name: "Payroll Services", icon: "wallet", description: "Australian payroll with superannuation and STP compliance." },
    ],
  },
  {
    code: "uk",
    name: "United Kingdom & Europe",
    short: "UK",
    flag: "🇬🇧",
    blurb:
      "Companies House- and HMRC-ready accounting, tax, and VAT support for UK and European firms.",
    services: [
      { slug: "bookkeeping", name: "Bookkeeping Services", icon: "book-open", description: "UK bookkeeping and management accounts — accurate and timely." },
      { slug: "taxation", name: "Tax Preparation", icon: "receipt", description: "Outsourced UK corporate and personal tax preparation." },
      { slug: "annual-return", name: "Annual Return Filing", icon: "file-check", description: "Companies House annual return and confirmation-statement filing." },
      { slug: "vat", name: "UK & EU VAT", icon: "percent", description: "VAT registration, returns, and cross-border EU VAT compliance." },
      { slug: "audit", name: "Tax Return & Audit", icon: "clipboard-check", description: "UK and Europe tax-return and accounting-audit support." },
      { slug: "cfo", name: "Virtual CFO & Advisory", icon: "line-chart", description: "Outsourced business advisory and virtual CFO for UK firms." },
      { slug: "payroll", name: "Payroll Services", icon: "wallet", description: "UK payroll with PAYE, NIC, and RTI compliance." },
      { slug: "financial-statements", name: "Financial Statements", icon: "file-text", description: "UK statutory financial-statement preparation." },
    ],
  },
];

export function findCountry(code: string): CpaCountry | undefined {
  return cpaCountries.find((c) => c.code === code);
}

export function findCountryService(code: string, slug: string) {
  const country = findCountry(code);
  if (!country) return null;
  const service = country.services.find((s) => s.slug === slug);
  if (!service) return null;
  return { country, service };
}
