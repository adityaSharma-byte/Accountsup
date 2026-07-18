import type { Metadata } from "next";
import { Target, Handshake, Globe, ShieldCheck } from "lucide-react";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/ui/PageHeader";
import Stats from "@/components/sections/Stats";
import CtaBand from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  title: "About",
  description:
    "AccountsUp is a corporate accounting partner delivering outsourced bookkeeping, payroll, and cross-border tax for growing US and Canadian companies.",
};

const values = [
  {
    icon: Target,
    title: "Precision over volume",
    body: "We stay focused on three services and do them to an institutional standard — rather than spreading thin across dozens.",
  },
  {
    icon: Handshake,
    title: "Partnership, not tickets",
    body: "A dedicated team that learns your business and stays with you, not a rotating support queue.",
  },
  {
    icon: Globe,
    title: "Cross-border by design",
    body: "US and Canadian compliance handled together, so nothing falls between jurisdictions.",
  },
  {
    icon: ShieldCheck,
    title: "Security as default",
    body: "Confidentiality, controlled access, and audit-ready trails are built into every process.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About AccountsUp"
        title="Institutional-grade finance, built for cross-border teams"
        subtitle="We embed bookkeeping, payroll, and tax compliance for growing corporations across the US and Canada."
      />

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand">
                Who we are
              </p>
              <h2 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">
                Your outsourced financial infrastructure
              </h2>
            </div>
            <div className="space-y-4 leading-relaxed text-body">
              <p>
                AccountsUp is a corporate accounting partner for companies
                operating across the United States and Canada. We take on the
                back-office finance function — bookkeeping, payroll, and
                cross-border tax — so your team can focus on running the business.
              </p>
              <p>
                We work as an extension of your team inside the systems you
                already use, with a single dedicated partner who understands your
                entity structure, your close calendar, and your reporting needs.
              </p>
              <p>
                Whether you need a clean monthly close, error-free payroll across
                jurisdictions, or coordinated IRS and CRA compliance, the goal is
                the same: books you can trust, every cycle.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <Stats />

      <section className="bg-cream py-20 sm:py-24">
        <Container>
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand">
              What we believe
            </p>
            <h2 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">
              Principles that shape every engagement
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className="rounded-2xl border border-line bg-white p-7"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-soft text-brand">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-ink">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-body">{v.body}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
