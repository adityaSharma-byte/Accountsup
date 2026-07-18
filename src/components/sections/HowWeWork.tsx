import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { howWeWork } from "@/content/home";

export default function HowWeWork() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="How We Work"
          title="A clear path to getting started"
          subtitle="A structured approach designed to make outsourcing simple, secure, and easy to manage."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {howWeWork.map((s) => (
            <div
              key={s.step}
              className="rounded-2xl border border-line bg-cream/60 p-6"
            >
              <span className="text-3xl font-bold text-brand/40">{s.step}</span>
              <h3 className="mt-3 text-base font-bold text-ink">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-body">{s.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
