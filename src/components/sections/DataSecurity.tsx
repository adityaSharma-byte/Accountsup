import { Check, ShieldCheck } from "lucide-react";
import Container from "@/components/ui/Container";
import { security } from "@/content/home";

export default function DataSecurity() {
  return (
    <section className="bg-cream py-20 sm:py-24">
      <Container>
        <div className="overflow-hidden rounded-3xl bg-navy text-white">
          <div className="grid gap-10 p-10 md:grid-cols-2 md:p-14">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand">
                Data Security
              </p>
              <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
                Your data. Our highest priority.
              </h2>
              <p className="mt-4 leading-relaxed text-white/70">
                Financial data deserves the highest level of protection. We embed
                security into every process so your information stays confidential
                and fully under control.
              </p>
              <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm">
                <ShieldCheck size={16} className="text-brand" />
                Security-first operations
              </div>
            </div>
            <ul className="space-y-4 md:pt-2">
              {security.map((s) => (
                <li key={s} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand">
                    <Check size={13} className="text-white" />
                  </span>
                  <span className="text-sm leading-relaxed text-white/85">{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
