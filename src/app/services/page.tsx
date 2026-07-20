import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
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
        subtitle="Everything from day-to-day bookkeeping to virtual CFO, technology, and business support — organized into four focused service lines. Explore any service for the full detail."
      />

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="space-y-16">
            {serviceCategories.map((cat) => (
              <div key={cat.key} id={cat.key} className="scroll-mt-28">
                <div className="max-w-3xl">
                  <h2 className="text-2xl font-extrabold text-ink sm:text-3xl">
                    {cat.title}
                  </h2>
                  <p className="mt-3 text-lg leading-relaxed text-body">
                    {cat.blurb}
                  </p>
                </div>
                <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {cat.services.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      className="group flex flex-col rounded-2xl border border-line bg-white p-7 transition-all hover:-translate-y-1 hover:border-brand/40 hover:shadow-xl"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-soft text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                        <Icon name={s.icon} size={22} />
                      </div>
                      <h3 className="mt-5 text-lg font-bold text-ink">{s.name}</h3>
                      <p className="mt-2 flex-1 leading-relaxed text-body">
                        {s.description}
                      </p>
                      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-navy transition-colors group-hover:text-brand">
                        View details <ArrowRight size={15} />
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
