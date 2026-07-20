import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ChevronRight } from "lucide-react";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/ui/PageHeader";
import CtaBand from "@/components/sections/CtaBand";
import Icon from "@/components/ui/Icon";
import { cpaCountries, findCountry } from "@/content/cpaCountries";

export function generateStaticParams() {
  return cpaCountries.map((c) => ({ country: c.code }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ country: string }>;
}): Promise<Metadata> {
  const { country } = await params;
  const c = findCountry(country);
  if (!c) return { title: "Accounting for CPA" };
  return { title: `Accounting for CPA — ${c.name}`, description: c.blurb };
}

export default async function CountryPage({
  params,
}: {
  params: Promise<{ country: string }>;
}) {
  const { country } = await params;
  const c = findCountry(country);
  if (!c) notFound();

  return (
    <>
      <PageHeader
        eyebrow="Accounting for CPA Firms"
        title={`${c.flag}  ${c.name}`}
        subtitle={c.blurb}
      />
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <nav className="mb-8 flex flex-wrap items-center gap-1.5 text-sm text-muted">
            <Link href="/services" className="hover:text-brand">Services</Link>
            <ChevronRight size={14} />
            <Link href="/services/cpa" className="hover:text-brand">Accounting for CPA</Link>
            <ChevronRight size={14} />
            <span className="font-semibold text-ink">{c.short}</span>
          </nav>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {c.services.map((s) => (
              <Link
                key={s.slug}
                href={`/services/cpa/${c.code}/${s.slug}`}
                className="group flex flex-col rounded-2xl border border-line bg-white p-6 transition-all hover:-translate-y-1 hover:border-brand/40 hover:shadow-xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-soft text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                  <Icon name={s.icon} size={22} />
                </div>
                <h3 className="mt-5 text-lg font-bold text-ink">{s.name}</h3>
                <p className="mt-2 flex-1 leading-relaxed text-body">{s.description}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-navy transition-colors group-hover:text-brand">
                  View details <ArrowRight size={15} />
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-3">
            <span className="text-sm font-semibold text-muted">Other regions:</span>
            {cpaCountries
              .filter((x) => x.code !== c.code)
              .map((x) => (
                <Link
                  key={x.code}
                  href={`/services/cpa/${x.code}`}
                  className="rounded-full border border-line bg-white px-4 py-1.5 text-sm font-semibold text-navy transition-colors hover:border-brand hover:text-brand"
                >
                  {x.flag} {x.short}
                </Link>
              ))}
          </div>
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
