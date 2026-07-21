import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/ui/PageHeader";
import CtaBand from "@/components/sections/CtaBand";
import Icon from "@/components/ui/Icon";
import { industries } from "@/content/industries";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Specialized accounting and finance outsourcing for SaaS, e-commerce, real estate, healthcare, manufacturing, startups, professional services, and financial services.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Industries We Serve"
        title="Finance expertise, tailored to your industry"
        subtitle="The same rigor, shaped around how your sector actually earns and reports. Pick your industry to see how we help."
      />
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind) => (
              <Link
                key={ind.slug}
                href={`/industries/${ind.slug}`}
                className="group flex flex-col rounded-2xl border border-line bg-white p-7 transition-all hover:-translate-y-1 hover:border-brand/40 hover:shadow-xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-soft text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                  <Icon name={ind.icon} size={22} />
                </div>
                <h2 className="mt-5 text-lg font-bold text-ink">{ind.name}</h2>
                <p className="mt-2 flex-1 leading-relaxed text-body">{ind.blurb}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-navy transition-colors group-hover:text-brand">
                  Explore {ind.short} <ArrowRight size={15} />
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
