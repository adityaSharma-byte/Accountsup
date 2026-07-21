"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import { cpaCountries } from "@/content/cpaCountries";
import { businessServices } from "@/content/services";

const tabs = [
  { key: "cpa", label: "Accounting for CPA firms" },
  { key: "business", label: "Accounting for businesses" },
];

export default function ServicesOverview() {
  const [tab, setTab] = useState("cpa");

  return (
    <section className="bg-cream py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Our Solutions"
          title="Built around who you are"
          subtitle="Whether you're a CPA firm that needs white-label capacity by country, or a business outsourcing its finance function — start with the path that fits you."
        />

        <div className="mt-10 flex justify-center">
          <div className="inline-flex flex-wrap justify-center rounded-full border border-line bg-white p-1">
            {tabs.map((t) => (
              <button
                key={t.key}
                type="button"
                onClick={() => setTab(t.key)}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
                  tab === t.key
                    ? "bg-navy text-white"
                    : "text-navy hover:text-brand"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {tab === "cpa" ? (
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {cpaCountries.map((c) => (
              <Link
                key={c.code}
                href={`/services/cpa/${c.code}`}
                className="group flex flex-col rounded-2xl border border-line bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <span className="text-3xl leading-none">{c.flag}</span>
                <h3 className="mt-4 text-base font-bold text-ink">{c.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-body">
                  {c.blurb}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-navy transition-colors group-hover:text-brand">
                  View {c.short} services <ArrowRight size={15} />
                </span>
              </Link>
            ))}
          </div>
        ) : (
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {businessServices.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group flex flex-col rounded-2xl border border-line bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-soft text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                  <Icon name={s.icon} size={22} />
                </div>
                <h3 className="mt-5 text-base font-bold text-ink">{s.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-body">
                  {s.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-navy transition-colors group-hover:text-brand">
                  Learn more <ArrowRight size={15} />
                </span>
              </Link>
            ))}
          </div>
        )}

        <div className="mt-12 text-center">
          <Button href="/services" variant="dark">
            View all solutions <ArrowRight size={16} />
          </Button>
        </div>
      </Container>
    </section>
  );
}
