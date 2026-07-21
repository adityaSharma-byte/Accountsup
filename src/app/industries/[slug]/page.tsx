import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, ArrowRight, ChevronRight } from "lucide-react";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/ui/PageHeader";
import CtaBand from "@/components/sections/CtaBand";
import Icon from "@/components/ui/Icon";
import { industries, findIndustry } from "@/content/industries";
import { media } from "@/content/media";

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const ind = findIndustry(slug);
  if (!ind) return { title: "Industry" };
  return { title: `${ind.name} Accounting`, description: ind.blurb };
}

export default async function IndustryDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const ind = findIndustry(slug);
  if (!ind) notFound();
  const related = industries.filter((i) => i.slug !== ind.slug).slice(0, 3);

  return (
    <>
      <PageHeader eyebrow="Industries" title={ind.name} subtitle={ind.blurb} />

      <section className="bg-white py-14 sm:py-16">
        <Container>
          <nav className="mb-10 flex flex-wrap items-center gap-1.5 text-sm text-muted">
            <Link href="/industries" className="hover:text-brand">Industries</Link>
            <ChevronRight size={14} />
            <span className="font-semibold text-ink">{ind.name}</span>
          </nav>

          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-navy text-white">
                <Icon name={ind.icon} size={26} />
              </div>
              <p className="mt-6 text-lg leading-relaxed text-body">{ind.overview}</p>

              <h2 className="mt-10 text-xl font-bold text-ink">Challenges we solve</h2>
              <ul className="mt-5 grid gap-4 sm:grid-cols-2">
                {ind.challenges.map((c) => (
                  <li key={c} className="flex items-start gap-3">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-navy/10">
                      <ChevronRight size={13} className="text-navy" />
                    </span>
                    <span className="leading-relaxed text-body">{c}</span>
                  </li>
                ))}
              </ul>

              <h2 className="mt-10 text-xl font-bold text-ink">How AccountsUp helps</h2>
              <ul className="mt-5 grid gap-4 sm:grid-cols-2">
                {ind.howWeHelp.map((h) => (
                  <li key={h} className="flex items-start gap-3">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/15">
                      <Check size={13} className="text-brand" />
                    </span>
                    <span className="leading-relaxed text-body">{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-5">
              <div className="overflow-hidden rounded-3xl shadow-lg">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={media.growth} alt="" className="aspect-[4/3] w-full object-cover" />
              </div>
              <div className="mt-6 rounded-3xl border border-line bg-cream p-7">
                <p className="text-sm font-bold uppercase tracking-wider text-navy">
                  One partner, your whole finance function
                </p>
                <p className="mt-3 leading-relaxed text-body">
                  From bookkeeping to virtual CFO — a dedicated team that understands {ind.short.toLowerCase()} and works inside your existing stack.
                </p>
                <Link
                  href="/contact"
                  className="mt-5 inline-flex items-center gap-1.5 font-semibold text-navy transition-colors hover:text-brand"
                >
                  Talk to an expert <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-cream py-16 sm:py-20">
        <Container>
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-2xl font-bold text-ink sm:text-3xl">Other industries</h2>
            <Link
              href="/industries"
              className="inline-flex items-center gap-1.5 font-semibold text-navy transition-colors hover:text-brand"
            >
              All industries <ArrowRight size={16} />
            </Link>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/industries/${r.slug}`}
                className="group flex flex-col rounded-2xl border border-line bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-soft text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                  <Icon name={r.icon} size={22} />
                </div>
                <h3 className="mt-5 text-lg font-bold text-ink">{r.name}</h3>
                <p className="mt-2 flex-1 leading-relaxed text-body">{r.blurb}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 font-semibold text-navy transition-colors group-hover:text-brand">
                  Explore <ArrowRight size={15} />
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
