import Container from "@/components/ui/Container";
import Counter from "@/components/ui/Counter";
import { stats } from "@/content/home";

export default function Stats() {
  return (
    <section className="border-y border-line bg-white">
      <Container>
        <div className="grid grid-cols-2 gap-8 py-12 lg:grid-cols-4">
          {stats.map((s, i) => {
            const value = (s as { value?: number }).value;
            const decimals = (s as { decimals?: number }).decimals ?? 0;
            const suffix = (s as { suffix?: string }).suffix ?? "";
            const display = (s as { display?: string }).display;
            return (
              <div key={i} className="text-center">
                <div className="text-4xl font-bold tracking-tight text-navy sm:text-5xl">
                  <Counter
                    value={value}
                    decimals={decimals}
                    suffix={suffix}
                    display={display}
                  />
                </div>
                <p className="mt-2 text-sm font-medium text-body">{s.label}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
