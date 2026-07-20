import { ArrowRight, Check } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { site } from "@/content/site";
import { media } from "@/content/media";

const proofs = ["Global coverage", "AI-powered accuracy", "Audit-ready, always"];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div className="absolute inset-0" aria-hidden>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={media.hero}
          alt=""
          className="h-full w-full object-cover object-center opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/95 to-navy/40" />
      </div>

      <Container className="relative py-24 sm:py-32">
        <div className="max-w-2xl animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-brand" />
            Global Accounting &amp; Finance Partner
          </span>
          <h1 className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl">
            Your entire finance function,{" "}
            <span className="text-brand">handled worldwide</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
            Bookkeeping, tax, audit, payroll, virtual CFO, reporting, and
            technology — delivered by dedicated expert teams for CPA firms and
            growing businesses across the globe.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href={site.ctaPrimary.href} className="w-full sm:w-auto">
              {site.ctaPrimary.label} <ArrowRight size={16} />
            </Button>
            <Button href="/services" variant="outline" className="w-full sm:w-auto">
              Explore Services
            </Button>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/75">
            {proofs.map((t) => (
              <span key={t} className="inline-flex items-center gap-1.5">
                <Check size={15} className="text-brand" /> {t}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
