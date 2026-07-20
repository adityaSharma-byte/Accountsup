import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/ui/PageHeader";
import CtaBand from "@/components/sections/CtaBand";
import Icon from "@/components/ui/Icon";
import { serviceCategories, allServices } from "@/content/services";
import { media } from "@/content/media";

export function generateStaticParams() {
  return allServices.map((s) => ({ slug: s.slug }));
}

function find(slug: string) {
  for (const cat of serviceCategories) {
    const svc = cat.services.find((s) => s.slug === slug);
    if (svc) return { svc, cat };
  }
  return null;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const f = find(slug);
  if (!f) return { title: "Service" };
  return { title: f.svc.name, description: f.svc.description };
}

const catImage: Record<string, string> = {
  cpa: media.partnership,
  business: media.growth,
  technology: media.security,
  support: media.hero,
};

const process = [
  { step: "01", title: "Discovery", body: "We learn your systems, volumes, and goals to scope the right engagement." },
  { step: "02", title: "Onboarding", body: "Secure, controlled access into your tools — without disrupting your work." },
  { step: "03", title: "Delivery", body: "A dedicated team executes with multi-level quality review." },
  { step: "04", title: "Reporting", body: "Clear, timely reporting and a partner you can always reach." },
];

export default async function ServiceDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const f = find(slug);
  if (!f) notFound();
  const { svc, cat } = f;
  const related = cat.services.filter((s) => s.slug !== svc.slug).slice(0, 3);
  const included =
    svc.features ?? [
      "A dedicated, trained team as an extension of yours",
      "AI-assisted accuracy with expert human review",
      "Transparent, timely reporting you can rely on",
      "Flexible, scalable engagement — no long lock-ins",
    ];

  return (
    <>
      <PageHeader eyebrow={cat.title} title={svc.name} subtitle={svc.description} />

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-navy text-white">
                <Icon name={svc.icon} size={26} />
              </div>
              <h2 className="mt-6 text-2xl font-bold text-ink sm:text-3xl">
                What&apos;s included
              </h2>
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
                Every engagement is scoped to your workload and delivered by a team
                that learns your business — so it runs cleanly, accurately, and on
                time, every cycle.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="overflow-hidden rounded-3xl shadow-lg">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={catImage[cat.key] ?? media.growth}
                  alt=""
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
              <div className="mt-6 rounded-3xl border border-line bg-cream p-7">
                <p className="text-sm font-bold uppercase tracking-wider text-navy">
                  Why AccountsUp
                </p>
                <p className="mt-3 leading-relaxed text-body">
                  One global partner for your entire finance function — dedicated
                  experts, enterprise-grade security, and AI-powered accuracy.
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
              <h2 className="text-2xl font-bold text-ink sm:text-3xl">
                Related services
              </h2>
              <Link
                href="/services"
                className="inline-flex items-center gap-1.5 font-semibold text-navy transition-colors hover:text-brand"
              >
                All services <ArrowRight size={16} />
              </Link>
            </div>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/services/${r.slug}`}
                  className="group flex flex-col rounded-2xl border border-line bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-soft text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                    <Icon name={r.icon} size={22} />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-ink">{r.name}</h3>
                  <p className="mt-2 flex-1 leading-relaxed text-body">
                    {r.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 font-semibold text-navy transition-colors group-hover:text-brand">
                    Learn more <ArrowRight size={15} />
                  </span>
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
