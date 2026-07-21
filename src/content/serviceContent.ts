/**
 * Rich, per-service page content — the deep detail that makes each service
 * page valuable (overview, what's included, benefits, process, FAQ, outcomes).
 *
 * The `serviceContent` map is generated (original copy, modeled on the depth of
 * leading finance-outsourcing sites, not copied from them). `getServiceContent`
 * falls back to a sensible generated page for any slug without bespoke content,
 * so a page can never render empty.
 */
export type IncludedItem = { title: string; body: string; icon: string };
export type BenefitItem = { title: string; body: string; icon: string };
export type ProcessStep = { title: string; body: string };
export type ServiceFaq = { q: string; a: string };

export type ServiceContent = {
  slug: string;
  heroTagline: string;
  metaDescription: string;
  overview: string[];
  included: IncludedItem[];
  benefits: BenefitItem[];
  process: ProcessStep[];
  differentiator: string;
  faqs: ServiceFaq[];
  outcomes: string[];
};

// Populated from the content pipeline. Keyed by service slug.
import { serviceContentData } from "./serviceContentData";
export const serviceContent: Record<string, ServiceContent> = serviceContentData;

function fallback(slug: string, name: string, description: string): ServiceContent {
  const n = name.toLowerCase();
  return {
    slug,
    heroTagline: description,
    metaDescription: `${name} from AccountsUp — ${description}`,
    overview: [
      `AccountsUp delivers ${n} as a fully managed service, run by a dedicated team that works inside the systems you already use. We combine AI-assisted accuracy with expert human review, so the work is fast, precise, and audit-ready every cycle.`,
      `Whether you're a CPA firm that needs white-label capacity or a business outsourcing its finance function, we scale with you — without the cost and overhead of hiring, onboarding, and managing an in-house team.`,
    ],
    included: [
      { title: "End-to-end execution", body: `Complete, day-to-day handling of your ${n} so nothing slips through the cracks.`, icon: "clipboard-check" },
      { title: "Dedicated expert team", body: "A trained team that learns your business and stays with you — not a rotating queue.", icon: "user-check" },
      { title: "Multi-level quality review", body: "Every deliverable is reviewed at multiple levels before it reaches you.", icon: "shield-check" },
      { title: "Works in your stack", body: "We operate inside QuickBooks, Xero, NetSuite, Sage, and the tools you already run.", icon: "plug" },
      { title: "Clear, timely reporting", body: "Transparent reporting and a partner you can always reach.", icon: "file-text" },
      { title: "Enterprise-grade security", body: "Role-based access, MFA, encryption, and full audit trails on every engagement.", icon: "lock" },
    ],
    benefits: [
      { title: "Lower cost", body: "Cut the overhead of hiring and managing an in-house team while keeping quality high.", icon: "coins" },
      { title: "Scale on demand", body: "Add capacity for busy season or growth without the hiring lag.", icon: "trending-up" },
      { title: "Fewer errors", body: "AI-assisted checks plus expert review mean cleaner books and fewer surprises.", icon: "badge-check" },
      { title: "More time to advise", body: "Hand off the execution and focus on higher-value work and client relationships.", icon: "line-chart" },
    ],
    process: [
      { title: "Discovery", body: "We learn your systems, volumes, and goals to scope the engagement precisely." },
      { title: "Onboarding", body: "Secure, controlled access into your tools — without disrupting your current work." },
      { title: "Delivery", body: "A dedicated team executes with multi-level quality review, on a predictable cadence." },
      { title: "Reporting", body: "Clear, timely reporting and a partner you can always reach for questions." },
    ],
    differentiator:
      "What sets AccountsUp apart is the pairing of AI-assisted accuracy with dedicated human experts. Automation handles the repetitive, error-prone work at speed; experienced accountants review, judge, and advise. You get the reliability of an in-house team, the security of an enterprise, and the flexibility of an outsourced partner — inside the systems you already run.",
    faqs: [
      { q: `How do you keep our ${n} accurate?`, a: "We combine automated validation with multi-level human review, so errors are caught before anything reaches you. Every engagement has clear checklists, reconciliations, and a reviewer who signs off." },
      { q: "Do you work inside our existing software?", a: "Yes. We operate directly in the platforms you already use — QuickBooks, Xero, NetSuite, Sage, and more — so there's no migration and no disruption to your workflow." },
      { q: "How is our data kept secure?", a: "Role-based access, multi-factor authentication, encryption in transit and at rest, and full audit trails on every engagement. Access is least-privilege and monitored." },
      { q: "How quickly can we start?", a: "After a short discovery call to scope the work, onboarding typically takes days, not weeks. We set up secure access and a clear delivery cadence from day one." },
      { q: "Can you scale with our workload?", a: "Yes. We add capacity for busy season, growth, or one-off projects without the lag of hiring — and scale back just as easily when you need to." },
    ],
    outcomes: [
      "Cleaner, audit-ready records every cycle",
      "Faster turnaround without added headcount",
      "A dependable partner you can always reach",
    ],
  };
}

export function getServiceContent(
  slug: string,
  name: string,
  description: string
): ServiceContent {
  return serviceContent[slug] ?? fallback(slug, name, description);
}
