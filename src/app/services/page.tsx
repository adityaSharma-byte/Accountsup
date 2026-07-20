import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/ui/PageHeader";
import CtaBand from "@/components/sections/CtaBand";
import Icon from "@/components/ui/Icon";
import { serviceCategories } from "@/content/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Full-service global accounting and finance — bookkeeping, tax, audit, payroll, virtual CFO, reporting, technology, and business support.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Services"
        title="A complete finance function, delivered globally"
        subtitle="Everything from day-to-day bookkeeping to virtual CFO, technology, and business support — organized into four focused service lines."
      />

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="space-y-16">
            {serviceCategories.map((cat) => (
              <div key={cat.key} id={cat.key} className="scroll-mt-28">
                <div className="max-w-2xl">
                  <h2 className="text-2xl font-bold text-ink sm:text-3xl">{cat.title}</h2>
                  <p className="mt-3 leading-relaxed text-body">{cat.blurb}</p>
                </div>
                <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {cat.services.map((s) => (
                    <div
                      key={s.slug}
                      id={s.slug}
                      className="flex scroll-mt-28 flex-col rounded-2xl border border-line bg-white p-6 transition-all hover:border-brand/40 hover:shadow-lg"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-soft text-brand">
                        <Icon name={s.icon} size={22} />
                      </div>
                      <h3 className="mt-5 text-lg font-bold text-ink">{s.name}</h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-body">
                        {s.description}
                      </p>
                      {s.features && (
                        <ul className="mt-4 space-y-2 border-t border-line pt-4">
                          {s.features.map((f) => (
                            <li
                              key={f}
                              className="flex items-start gap-2 text-sm text-body"
                            >
                              <Check size={15} className="mt-0.5 shrink-0 text-brand" />
                              {f}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy transition-colors hover:text-brand"
            >
              Not sure where to start? Talk to an expert <ArrowRight size={15} />
            </Link>
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
