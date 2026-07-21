import { ChevronDown } from "lucide-react";
import type { ServiceFaq as Faq } from "@/content/serviceContent";

export default function ServiceFaq({ faqs }: { faqs: Faq[] }) {
  return (
    <div className="mx-auto max-w-3xl divide-y divide-line overflow-hidden rounded-2xl border border-line bg-white">
      {faqs.map((f, i) => (
        <details key={i} className="group px-6">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-left font-semibold text-ink [&::-webkit-details-marker]:hidden">
            {f.q}
            <ChevronDown
              size={18}
              className="shrink-0 text-brand transition-transform group-open:rotate-180"
            />
          </summary>
          <p className="pb-5 leading-relaxed text-body">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
