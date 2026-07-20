import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import { featuredServices } from "@/content/services";

export default function ServicesOverview() {
  return (
    <section className="bg-cream py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="What We Do"
          title="One partner for your entire finance function"
          subtitle="From day-to-day bookkeeping to virtual CFO, technology, and business support — a complete, global service suite under one roof."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredServices.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group flex flex-col rounded-2xl border border-line bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-soft text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                <Icon name={s.icon} size={22} />
              </div>
              <h3 className="mt-5 text-base font-bold text-ink">{s.name}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-body">
                {s.description}
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-navy transition-colors group-hover:text-brand">
                Learn more <ArrowRight size={15} />
              </span>
            </Link>
          ))}
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
