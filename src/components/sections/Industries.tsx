import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import { industries } from "@/content/industries";

export default function Industries() {
  return (
    <section id="industries" className="scroll-mt-24 bg-navy py-16 text-white sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Industries"
          title="Finance expertise, tailored to your sector"
          subtitle="The same rigor, shaped around how your industry actually earns and reports — from SaaS revenue recognition to construction job costing."
          light
        />
        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {industries.map((i) => (
            <Link
              key={i.slug}
              href={`/industries/${i.slug}`}
              className="group flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:bg-white/10"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/15 text-brand">
                  <Icon name={i.icon} size={22} />
                </div>
                <ArrowUpRight
                  size={18}
                  className="text-white/40 transition-colors group-hover:text-brand"
                />
              </div>
              <span className="text-sm font-semibold leading-tight">{i.name}</span>
            </Link>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button href="/industries">
            Explore all industries <ArrowRight size={16} />
          </Button>
        </div>
      </Container>
    </section>
  );
}
