import {
  Globe,
  UserCheck,
  ShieldCheck,
  Coins,
  Plug,
  Lock,
  type LucideIcon,
} from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { whyUs } from "@/content/home";

const icons: Record<string, LucideIcon> = {
  globe: Globe,
  "user-check": UserCheck,
  "shield-check": ShieldCheck,
  coins: Coins,
  plug: Plug,
  lock: Lock,
};

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
          {whyUs.map((f) => {
            const Icon = icons[f.icon] ?? Globe;
            return (
              <div
                key={f.title}
                className="group rounded-2xl border border-line bg-white p-7 transition-all hover:border-brand/40 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-soft text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                  <Icon size={22} />
                </div>
                <h3 className="mt-5 text-lg font-bold text-ink">{f.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-body">{f.body}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
