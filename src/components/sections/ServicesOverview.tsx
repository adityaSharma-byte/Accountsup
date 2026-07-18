import Link from "next/link";
import {
  BookOpenCheck,
  Wallet,
  FileCheck,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { services, type Service } from "@/content/services";

const icons: Record<Service["icon"], LucideIcon> = {
  ledger: BookOpenCheck,
  payroll: Wallet,
  tax: FileCheck,
};

export default function ServicesOverview() {
  return (
    <section className="bg-cream py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="What We Do"
          title="Three services, done to an institutional standard"
          subtitle="We stay deliberately focused — bookkeeping, payroll, and cross-border tax — so every engagement is deep, not spread thin."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {services.map((s) => {
            const Icon = icons[s.icon];
            return (
              <div
                key={s.slug}
                className="flex flex-col rounded-2xl border border-line bg-white p-8 transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-navy text-white">
                  <Icon size={24} />
                </div>
                <p className="mt-6 text-xs font-bold uppercase tracking-wider text-brand">
                  {s.short}
                </p>
                <h3 className="mt-1 text-xl font-bold text-ink">{s.name}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-body">
                  {s.description}
                </p>
                <Link
                  href={`/services#${s.slug}`}
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-navy transition-colors hover:text-brand"
                >
                  Learn more <ArrowRight size={15} />
                </Link>
              </div>
            );
          })}
        </div>
        <div className="mt-12 text-center">
          <Button href="/services" variant="dark">
            View all services <ArrowRight size={16} />
          </Button>
        </div>
      </Container>
    </section>
  );
}
