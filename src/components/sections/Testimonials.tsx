"use client";

import { Star } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { testimonials } from "@/content/home";
import { avatar } from "@/content/media";

export default function Testimonials() {
  const items = [...testimonials, ...testimonials];
  return (
    <section className="overflow-hidden bg-cream py-16 sm:py-20">
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
              <figcaption className="mt-5 flex items-center gap-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={avatar(t.avatar)}
                  alt={t.name}
                  className="h-11 w-11 rounded-full object-cover ring-2 ring-brand/20"
                />
                <div>
                  <p className="text-sm font-bold text-ink">{t.name}</p>
                  <p className="text-xs text-muted">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
