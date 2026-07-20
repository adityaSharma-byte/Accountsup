import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Icon from "@/components/ui/Icon";
import { industries } from "@/content/home";

export default function Industries() {
  return (
    <section id="industries" className="scroll-mt-24 bg-navy py-20 text-white sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Industries"
          title="Trusted across industries"
          subtitle="From CPA firms to fast-growing companies, we tailor our finance support to how your sector actually operates."
          light
        />
        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {industries.map((i) => (
            <div
              key={i.name}
              className="flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-6 text-center transition-colors hover:bg-white/10"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/15 text-brand">
                <Icon name={i.icon} size={22} />
              </div>
              <span className="text-sm font-semibold">{i.name}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
