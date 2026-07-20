import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, ArrowRight, ChevronRight } from "lucide-react";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/ui/PageHeader";
import CtaBand from "@/components/sections/CtaBand";
import Icon from "@/components/ui/Icon";
import { cpaCountries, findCountryService } from "@/content/cpaCountries";
import { media } from "@/content/media";

export function generateStaticParams() {
  return cpaCountries.flatMap((c) =>
    c.services.map((s) => ({ country: c.code, service: s.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ country: string; service: string }>;
}): Promise<Metadata> {
  const { country, service } = await params;
  const f = findCountryService(country, service);
  if (!f) return { title: "Service" };
  return { title: `${f.service.name} — ${f.country.name}`, description: f.service.description };
}

const process = [
  { step: "01", title: "Discovery", body: "We learn your systems, volumes, and goals to scope the engagement." },
  { step: "02", title: "Onboarding", body: "Secure, controlled access into your tools — without disrupting your work." },
  { step: "03", title: "Delivery", body: "A dedicated team executes with multi-level quality review." },
  { step: "04", title: "Reporting", body: "Clear, timely reporting and a partner you can always reach." },
];

export default async function CountryServiceDetail({
  params,
}: {
  params: Promise<{ country: string; service: string }>;
}) {
  const { country, service } = await params;
  const f = findCountryService(country, service);
  if (!f) notFound();
  const { country: c, service: s } = f;
  const related = c.services.filter((x) => x.slug !== s.slug).slice(0, 3);
  const included = [
    `A dedicated ${c.short} finance team as an extension of yours`,
    "AI-assisted accuracy with expert human review",
    "Compliant with local standards and filing deadlines",
    "Transparent, timely reporting you can rely on",
  ];

  return (
    <>
      <PageHeader
        eyebrow={`Accounting for CPA · ${c.name}`}
        title={s.name}
        subtitle={s.description}
      />
      <section className="bg-white py-14 sm:py-16">
        <Container>
          <nav className="mb-10 flex flex-wrap items-center gap-1.5 text-sm text-muted">
            <Link href="/services" className="hover:text-brand">Services</Link>
            <ChevronRight size={14} />
            <Link href="/services/cpa" className="hover:text-brand">Accounting for CPA</Link>
            <ChevronRight size={14} />
            <Link href={`/services/cpa/${c.code}`} className="hover:text-brand">{c.short}</Link>
            <ChevronRight size={14} />
            <span className="font-semibold text-ink">{s.name}</span>
          </nav>

          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-navy text-white">
                <Icon name={s.icon} size={26} />
              </div>
              <h2 className="mt-6 text-2xl font-bold text-ink sm:text-3xl">What&apos;s included</h2>
              <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                {included.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/15">
                      <Check size={13} className="text-brand" />
                    </span>
                    <span className="leading-relaxed text-body">{b}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-8 leading-relaxed text-body">
                Delivered by a dedicated team that understands {c.name} requirements — so your {s.name.toLowerCase()} runs cleanly, accurately, and on time, every cycle.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="overflow-hidden rounded-3xl shadow-lg">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={media.partnership} alt="" className="aspect-[4/3] w-full object-cover" />
              </div>
              <div className="mt-6 rounded-3xl border border-line bg-cream p-7">
                <p className="text-sm font-bold uppercase tracking-wider text-navy">Why AccountsUp</p>
                <p className="mt-3 leading-relaxed text-body">
                  One global partner for your entire finance function — dedicated experts, enterprise-grade security, and AI-powered accuracy.
                </p>
                <Link href="/contact" className="mt-5 inline-flex items-center gap-1.5 font-semibold text-navy transition-colors hover:text-brand">
                  Talk to an expert <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-cream py-16 sm:py-20">
        <Container>
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">How we deliver</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p) => (
              <div key={p.step} className="rounded-2xl border border-line bg-white p-6">
                <span className="text-3xl font-extrabold text-brand/40">{p.step}</span>
                <h3 className="mt-3 text-lg font-bold text-ink">{p.title}</h3>
                <p className="mt-2 leading-relaxed text-body">{p.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {related.length > 0 && (
        <section className="bg-white py-16 sm:py-20">
          <Container>
            <div className="flex items-end justify-between gap-4">
              <h2 className="text-2xl font-bold text-ink sm:text-3xl">More {c.short} services</h2>
              <Link href={`/services/cpa/${c.code}`} className="inline-flex items-center gap-1.5 font-semibold text-navy transition-colors hover:text-brand">
                All {c.short} services <ArrowRight size={16} />
              </Link>
            </div>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {related.map((r) => (
                <Link key={r.slug} href={`/services/cpa/${c.code}/${r.slug}`} className="group flex flex-col rounded-2xl border border-line bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-xl">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-soft text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                    <Icon name={r.icon} size={22} />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-ink">{r.name}</h3>
                  <p className="mt-2 flex-1 leading-relaxed text-body">{r.description}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 font-semibold text-navy transition-colors group-hover:text-brand">View details <ArrowRight size={15} /></span>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      <CtaBand />
    </>
  );
}
