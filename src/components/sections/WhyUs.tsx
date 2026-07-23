import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Icon from "@/components/ui/Icon";
import { whyUs } from "@/content/home";

export default function WhyUs() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Why AccountsUp"
          title="The reliability of an in-house team, without the overhead"
          subtitle="The experience, scale, and controls you need to outsource your finance function with confidence."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {whyUs.map((f) => (
            <div
              key={f.title}
              className="group rounded-2xl border border-line bg-white p-7 transition-all hover:-translate-y-1 hover:border-brand/40 hover:shadow-lg"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-soft text-brand ring-1 ring-brand/10 transition-colors group-hover:bg-brand group-hover:text-white group-hover:ring-transparent">
                <Icon name={f.icon} size={26} />
              </div>
              <h3 className="mt-5 text-lg font-bold text-ink">{f.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-body">{f.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
