"use client";

import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { testimonials } from "@/content/home";
import { avatar } from "@/content/media";

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
      <div className="mt-7 flex items-center justify-center gap-3">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={avatar(t.avatar)}
          alt={t.name}
          className="h-12 w-12 rounded-full object-cover ring-2 ring-brand/20"
        />
        <div className="text-left text-sm">
          <div className="font-bold text-ink">{t.name}</div>
          <div className="text-muted">{t.role}</div>
        </div>
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
