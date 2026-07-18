"use client";

import { Star } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { testimonials } from "@/content/home";

export default function Testimonials() {
  const items = [...testimonials, ...testimonials];
  return (
    <section className="overflow-hidden bg-cream py-20 sm:py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="Testimonials"
          title="What our clients say"
          subtitle="How partnering closely with AccountsUp makes finance smoother and growth easier."
        />
      </div>
      <div className="marquee mt-14">
        <div className="marquee-track">
          {items.map((t, i) => (
            <figure
              key={i}
              className="mr-6 w-[340px] shrink-0 rounded-2xl border border-line bg-white p-7"
            >
              <div className="flex gap-0.5 text-brand">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} size={15} fill="currentColor" />
                ))}
              </div>
              <blockquote className="mt-4 text-sm leading-relaxed text-body">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-5">
                <p className="text-sm font-bold text-ink">{t.name}</p>
                <p className="text-xs text-muted">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
