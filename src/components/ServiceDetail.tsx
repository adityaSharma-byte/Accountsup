import Link from "next/link";
import { Check, ArrowRight, ChevronRight, ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/ui/PageHeader";
import CtaBand from "@/components/sections/CtaBand";
import Reveal from "@/components/ui/Reveal";
import Icon from "@/components/ui/Icon";
import ToolsMarquee from "@/components/sections/ToolsMarquee";
import ServiceTestimonials from "@/components/sections/ServiceTestimonials";
import ServiceFaq from "@/components/sections/ServiceFaq";
import { industries } from "@/content/industries";
import type { ServiceContent } from "@/content/serviceContent";

type Related = { name: string; href: string; description: string; icon: string };
type Crumb = { label: string; href?: string };

type Props = {
  eyebrow: string;
  name: string;
  jurisdiction?: string;
  content: ServiceContent;
  breadcrumb: Crumb[];
  overviewImage: string;
  diffImage: string;
  relatedHeading: string;
  relatedAllHref: string;
  relatedAllLabel: string;
  related: Related[];
};

const shownIndustries = industries.slice(0, 6);

export default function ServiceDetail({
  eyebrow,
  name,
  jurisdiction,
  content,
  breadcrumb,
  overviewImage,
  diffImage,
  relatedHeading,
  relatedAllHref,
  relatedAllLabel,
  related,
}: Props) {
  const region = jurisdiction ? ` in ${jurisdiction}` : "";

  return (
    <>
      <PageHeader eyebrow={eyebrow} title={name} subtitle={content.heroTagline} />

      {/* Breadcrumb + Overview */}
      <section className="bg-white py-14 sm:py-16">
        <Container>
          <nav className="mb-10 flex flex-wrap items-center gap-1.5 text-sm text-muted">
            {breadcrumb.map((c, i) => (
              <span key={i} className="inline-flex items-center gap-1.5">
                {c.href ? (
                  <Link href={c.href} className="hover:text-brand">
                    {c.label}
                  </Link>
                ) : (
                  <span className="font-semibold text-ink">{c.label}</span>
                )}
                {i < breadcrumb.length - 1 && <ChevronRight size={14} />}
              </span>
            ))}
          </nav>

          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <p className="text-sm font-bold uppercase tracking-wider text-brand">
                Overview
              </p>
              <h2 className="mt-3 text-2xl font-bold text-ink sm:text-3xl">
                {name}
                {jurisdiction ? ` for ${jurisdiction}` : ""}
              </h2>
              <div className="mt-5 space-y-4">
                {content.overview.map((p, i) => (
                  <p key={i} className="text-lg leading-relaxed text-body">
                    {p}
                  </p>
                ))}
              </div>
              <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                {content.outcomes.map((o) => (
                  <li key={o} className="flex items-start gap-2.5">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/15">
                      <Check size={13} className="text-brand" />
                    </span>
                    <span className="font-medium text-navy">{o}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal>
              <div className="overflow-hidden rounded-3xl shadow-xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={overviewImage}
                  alt=""
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* What's included */}
      <section className="bg-cream py-16 sm:py-20">
        <Container>
          <Reveal>
            <p className="text-sm font-bold uppercase tracking-wider text-brand">
              What&apos;s included
            </p>
            <h2 className="mt-3 max-w-2xl text-2xl font-bold text-ink sm:text-3xl">
              Everything the {name.toLowerCase()} engagement covers
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {content.included.map((item) => (
              <div
                key={item.title}
                className="flex flex-col rounded-2xl border border-line bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-brand">
                  <Icon name={item.icon} size={20} />
                </div>
                <h3 className="mt-4 font-bold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-body">{item.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Benefits */}
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <Reveal>
            <p className="text-sm font-bold uppercase tracking-wider text-brand">
              Why AccountsUp
            </p>
            <h2 className="mt-3 max-w-2xl text-2xl font-bold text-ink sm:text-3xl">
              The advantage of {name.toLowerCase()} done right
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {content.benefits.map((b) => (
              <div key={b.title} className="rounded-2xl border border-line bg-white p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-white">
                  <Icon name={b.icon} size={20} />
                </div>
                <h3 className="mt-4 font-bold text-ink">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-body">{b.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Differentiator band */}
      <section className="bg-navy py-16 text-white sm:py-20">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="order-2 overflow-hidden rounded-3xl shadow-xl lg:order-1">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={diffImage}
                alt=""
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-sm font-bold uppercase tracking-wider text-brand">
                AI-powered, expert-led
              </p>
              <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
                The reliability of an in-house team, without the overhead
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-white/80">
                {content.differentiator}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="bg-cream py-16 sm:py-20">
        <Container>
          <Reveal>
            <p className="text-sm font-bold uppercase tracking-wider text-brand">
              How it works
            </p>
            <h2 className="mt-3 text-2xl font-bold text-ink sm:text-3xl">
              A clear path from first call to steady delivery
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {content.process.map((p, i) => (
              <div key={p.title} className="rounded-2xl border border-line bg-white p-6">
                <span className="text-3xl font-extrabold text-brand/40">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-bold text-ink">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-body">{p.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Tools */}
      <section className="bg-white py-14 sm:py-16">
        <Container>
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-brand">
              Works inside your stack
            </p>
            <h2 className="mx-auto mt-3 max-w-2xl text-2xl font-bold text-ink sm:text-3xl">
              We operate in the platforms you already run
            </h2>
          </div>
        </Container>
        <div className="mt-10">
          <ToolsMarquee />
        </div>
      </section>

      {/* Industries served */}
      <section className="bg-cream py-16 sm:py-20">
        <Container>
          <Reveal>
            <p className="text-sm font-bold uppercase tracking-wider text-brand">
              Industries we serve
            </p>
            <h2 className="mt-3 text-2xl font-bold text-ink sm:text-3xl">
              {name} shaped around your sector{region}
            </h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {shownIndustries.map((ind) => (
              <Link
                key={ind.slug}
                href={`/industries/${ind.slug}`}
                className="group flex items-center gap-3 rounded-2xl border border-line bg-white p-5 transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                  <Icon name={ind.icon} size={20} />
                </span>
                <span className="text-sm font-semibold leading-tight text-navy">
                  {ind.name}
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="mb-10 text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-brand">
              What clients say
            </p>
            <h2 className="mx-auto mt-3 max-w-2xl text-2xl font-bold text-ink sm:text-3xl">
              Trusted by firms and businesses worldwide
            </h2>
          </div>
          <ServiceTestimonials />
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-cream py-16 sm:py-20">
        <Container>
          <div className="mb-10 text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-brand">
              Questions
            </p>
            <h2 className="mx-auto mt-3 max-w-2xl text-2xl font-bold text-ink sm:text-3xl">
              {name}, answered
            </h2>
          </div>
          <ServiceFaq faqs={content.faqs} />
        </Container>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="bg-white py-16 sm:py-20">
          <Container>
            <div className="flex items-end justify-between gap-4">
              <h2 className="text-2xl font-bold text-ink sm:text-3xl">
                {relatedHeading}
              </h2>
              <Link
                href={relatedAllHref}
                className="inline-flex shrink-0 items-center gap-1.5 font-semibold text-navy transition-colors hover:text-brand"
              >
                {relatedAllLabel} <ArrowRight size={16} />
              </Link>
            </div>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.href}
                  href={r.href}
                  className="group flex flex-col rounded-2xl border border-line bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-soft text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                    <Icon name={r.icon} size={22} />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-ink">{r.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-body">
                    {r.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-navy transition-colors group-hover:text-brand">
                    View details <ArrowUpRight size={15} />
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
