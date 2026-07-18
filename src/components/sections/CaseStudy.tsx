import { Check } from "lucide-react";
import Container from "@/components/ui/Container";
import { caseStudy } from "@/content/home";

export default function CaseStudy() {
  const c = caseStudy;
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand">
              {c.eyebrow}
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
              {c.headline}
            </h2>
            <p className="mt-4 leading-relaxed text-body">{c.problem}</p>
            <blockquote className="mt-6 border-l-2 border-brand pl-5">
              <p className="text-lg font-medium italic text-ink">“{c.quote}”</p>
              <footer className="mt-2 text-sm text-muted">— {c.attribution}</footer>
            </blockquote>
          </div>
          <div className="rounded-3xl border border-line bg-cream p-8 sm:p-10">
            <p className="text-xs font-bold uppercase tracking-wider text-navy">
              The Solution
            </p>
            <ul className="mt-5 space-y-3.5">
              {c.solution.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/15">
                    <Check size={13} className="text-brand" />
                  </span>
                  <span className="text-sm leading-relaxed text-body">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-7 rounded-2xl bg-navy p-6 text-white">
              <p className="text-xs font-semibold uppercase tracking-wider text-white/60">
                Result
              </p>
              <p className="mt-1.5 text-lg font-semibold leading-snug">{c.result}</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
