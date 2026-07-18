import type { Metadata } from "next";
import Link from "next/link";
import {
  BookOpenCheck,
  Wallet,
  FileCheck,
  Check,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/ui/PageHeader";
import CtaBand from "@/components/sections/CtaBand";
import { services, type Service } from "@/content/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Outsourced bookkeeping, managed payroll, and cross-border tax compliance for growing US and Canadian corporations.",
};

const icons: Record<Service["icon"], LucideIcon> = {
  ledger: BookOpenCheck,
  payroll: Wallet,
  tax: FileCheck,
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Services"
        title="Comprehensive back-office accounting for US & Canadian corporations"
        subtitle="From day-to-day bookkeeping to complex cross-border tax compliance — a deliberately focused set of services, delivered to an institutional standard."
      />

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="space-y-8">
            {services.map((s, idx) => {
              const Icon = icons[s.icon];
              return (
                <article
                  key={s.slug}
                  id={s.slug}
                  className="grid scroll-mt-28 gap-8 rounded-3xl border border-line bg-white p-8 sm:p-10 lg:grid-cols-12 lg:gap-10"
                >
                  <div className="lg:col-span-5">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-navy text-white">
                      <Icon size={24} />
                    </div>
                    <p className="mt-5 text-xs font-bold uppercase tracking-wider text-brand">
                      Service 0{idx + 1} · {s.short}
                    </p>
                    <h2 className="mt-1 text-2xl font-bold text-ink">{s.name}</h2>
                    <p className="mt-4 leading-relaxed text-body">{s.description}</p>
                    <Link
                      href="/contact"
                      className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-navy transition-colors hover:text-brand"
                    >
                      Talk to an expert <ArrowRight size={15} />
                    </Link>
                  </div>

                  <div className="lg:col-span-7">
                    <p className="text-sm font-bold text-ink">What&apos;s included</p>
                    <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                      {s.features.map((f) => (
                        <li key={f} className="flex items-start gap-2.5">
                          <Check size={16} className="mt-0.5 shrink-0 text-brand" />
                          <span className="text-sm leading-relaxed text-body">{f}</span>
                        </li>
                      ))}
                    </ul>

                    {s.platforms && (
                      <div className="mt-7">
                        <p className="text-sm font-bold text-ink">
                          Platforms we work in
                        </p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {s.platforms.map((p) => (
                            <span
                              key={p}
                              className="rounded-full border border-line bg-cream px-3 py-1 text-xs font-medium text-navy"
                            >
                              {p}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {s.scope && (
                      <div className="mt-7 grid gap-4 sm:grid-cols-2">
                        {s.scope.map((sc) => (
                          <div key={sc.label} className="rounded-2xl bg-cream p-5">
                            <p className="text-sm font-bold text-navy">{sc.label}</p>
                            <ul className="mt-3 space-y-1.5">
                              {sc.items.map((it) => (
                                <li
                                  key={it}
                                  className="flex items-center gap-2 text-xs text-body"
                                >
                                  <span className="h-1 w-1 rounded-full bg-brand" />
                                  {it}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
