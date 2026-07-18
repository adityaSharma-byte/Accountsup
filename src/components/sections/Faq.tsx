"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { faqs } from "@/content/home";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="container-x max-w-3xl">
        <SectionHeading
          eyebrow="FAQs"
          title="Frequently asked questions"
          subtitle="Answers to the questions we hear most from finance and operations leaders."
        />
        <div className="mt-10 divide-y divide-line rounded-2xl border border-line">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold text-ink">{f.q}</span>
                  <span className="shrink-0 text-brand">
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 text-sm leading-relaxed text-body">
                    {f.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
