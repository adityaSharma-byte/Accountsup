import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/ui/PageHeader";
import CtaBand from "@/components/sections/CtaBand";
import { cpaCountries } from "@/content/cpaCountries";

export const metadata: Metadata = {
  title: "Accounting for CPA Firms",
  description:
    "Outsourced accounting for CPA firms across the US, Canada, Australia/NZ, and the UK & Europe.",
};

export default function CpaHub() {
  return (
    <>
      <PageHeader
        eyebrow="Accounting for CPA & Accounting Firms"
        title="White-label accounting, in every market you serve"
        subtitle="Choose a region to see the full service set — bookkeeping to CFO — delivered to that jurisdiction's standards."
      />
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2">
            {cpaCountries.map((c) => (
              <Link
                key={c.code}
                href={`/services/cpa/${c.code}`}
                className="group flex flex-col rounded-3xl border border-line bg-white p-8 transition-all hover:-translate-y-1 hover:border-brand/40 hover:shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <span className="text-4xl leading-none">{c.flag}</span>
                  <h2 className="text-2xl font-bold text-ink">{c.name}</h2>
                </div>
                <p className="mt-4 flex-1 leading-relaxed text-body">{c.blurb}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {c.services.slice(0, 4).map((s) => (
                    <span
                      key={s.slug}
                      className="rounded-full border border-line bg-cream px-3 py-1 text-xs font-medium text-navy"
                    >
                      {s.name}
                    </span>
                  ))}
                  <span className="rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold text-brand">
                    +{c.services.length - 4} more
                  </span>
                </div>
                <span className="mt-6 inline-flex items-center gap-1.5 font-semibold text-navy transition-colors group-hover:text-brand">
                  View {c.short} services <ArrowRight size={16} />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
