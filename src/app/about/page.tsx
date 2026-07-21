import type { Metadata } from "next";
import { Globe, Briefcase, Handshake, ShieldCheck } from "lucide-react";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/ui/PageHeader";
import Stats from "@/components/sections/Stats";
import CtaBand from "@/components/sections/CtaBand";
import { media } from "@/content/media";

export const metadata: Metadata = {
  title: "About",
  description:
    "AccountsUp is a full-service global accounting and finance partner for CPA firms and growing businesses worldwide.",
};

const values = [
  {
    icon: Globe,
    title: "Global by design",
    body: "One partner across the US, Canada, UK, and Australia — your obligations handled wherever you operate.",
  },
  {
    icon: Briefcase,
    title: "Full-service, end to end",
    body: "Bookkeeping to CFO, tax to technology — the complete finance function under one roof.",
  },
  {
    icon: Handshake,
    title: "Partnership, not tickets",
    body: "Dedicated teams that learn your business and stay with you, not a rotating support queue.",
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
        title="Your global accounting and finance partner"
        subtitle="We run the finance function for CPA firms and growing businesses around the world — so their teams can focus on what they do best."
      />

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand">
                Who we are
              </p>
              <h2 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">
                One partner for the entire finance function
              </h2>
            </div>
            <div className="space-y-4 leading-relaxed text-body">
              <p>
                AccountsUp is a global accounting and finance partner. We take
                on the complete back-office function — bookkeeping, tax, audit,
                payroll, virtual CFO, and reporting — for CPA firms and growing
                businesses across the US, Canada, the UK, Australia, and beyond.
              </p>
              <p>
                We work as an extension of your team inside the systems you
                already use, pairing dedicated experts with AI-driven automation
                for precision, speed, and scale — without the overhead of hiring.
              </p>
              <p>
                Whether you&apos;re a CPA firm that needs white-label capacity or a
                business that wants its whole finance operation handled, the goal
                is the same: numbers you can trust, every cycle.
              </p>
            </div>
          </div>

          <div className="mt-14 overflow-hidden rounded-3xl shadow-lg">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={media.partnership}
              alt="AccountsUp advisors working with a client"
              className="aspect-[21/9] w-full object-cover"
            />
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
