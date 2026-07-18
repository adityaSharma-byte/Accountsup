import { ArrowRight, Check } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { site } from "@/content/site";

const proofs = ["US GAAP & CRA compliant", "Multi-currency close", "Dedicated partner"];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-brand/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-navy/5 blur-3xl" />
      </div>
      <Container className="relative py-20 sm:py-28">
        <div className="mx-auto max-w-3xl text-center animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-1.5 text-xs font-semibold text-navy">
            <span className="h-2 w-2 rounded-full bg-brand" />
            Outsourced Financial Infrastructure · US &amp; Canada
          </span>
          <h1 className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight text-ink sm:text-5xl md:text-6xl">
            Your <span className="text-brand">Corporate Accounting</span> Partner
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-body">
            Institutional-grade bookkeeping, payroll, and cross-border tax
            compliance for growing corporations across the US and Canada — one
            dedicated ledger partner, audit-ready every cycle.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href={site.ctaPrimary.href} className="w-full sm:w-auto">
              {site.ctaPrimary.label} <ArrowRight size={16} />
            </Button>
            <Button href="/services" variant="dark" className="w-full sm:w-auto">
              Explore Operations
            </Button>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-body">
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
