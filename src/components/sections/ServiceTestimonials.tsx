"use client";

import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { testimonials } from "@/content/home";

export default function ServiceTestimonials() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setI((v) => (v + 1) % testimonials.length),
      4800
    );
    return () => clearInterval(id);
  }, []);

  const t = testimonials[i];

  return (
    <div className="mx-auto max-w-3xl text-center">
      <div className="mb-5 flex justify-center gap-1 text-brand">
        {Array.from({ length: 5 }).map((_, k) => (
          <Star key={k} size={18} fill="currentColor" strokeWidth={0} />
        ))}
      </div>
      <blockquote
        key={i}
        className="animate-fade-up text-xl font-medium leading-relaxed text-ink sm:text-2xl"
      >
        &ldquo;{t.quote}&rdquo;
      </blockquote>
      <div className="mt-6 text-sm">
        <span className="font-bold text-ink">{t.name}</span>
        <span className="text-muted"> — {t.role}</span>
      </div>
      <div className="mt-7 flex justify-center gap-2">
        {testimonials.map((_, k) => (
          <button
            key={k}
            type="button"
            onClick={() => setI(k)}
            aria-label={`Show testimonial ${k + 1}`}
            className={`h-2 rounded-full transition-all ${
              k === i ? "w-6 bg-brand" : "w-2 bg-line hover:bg-brand/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
