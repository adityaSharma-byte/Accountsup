import { Check } from "lucide-react";
import Container from "@/components/ui/Container";
import { security } from "@/content/home";
import { media } from "@/content/media";

export default function DataSecurity() {
  return (
    <section className="bg-cream py-20 sm:py-24">
      <Container>
        <div className="grid overflow-hidden rounded-3xl bg-navy text-white lg:grid-cols-2">
          <div className="relative min-h-[260px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={media.security}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent lg:bg-gradient-to-r" />
          </div>
          <div className="p-10 md:p-14">
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
            <ul className="mt-6 space-y-3.5">
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
