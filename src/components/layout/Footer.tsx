import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { site } from "@/content/site";
import { serviceCategories } from "@/content/services";
import { cpaCountries } from "@/content/cpaCountries";
import { trustBadges } from "@/content/home";
import Logo from "@/components/ui/Logo";

const shortLabels: Record<string, string> = {
  cpa: "For CPA Firms",
  business: "For Businesses",
  technology: "Technology",
  support: "Support Services",
};

// lucide v1 removed brand icons, so social glyphs are inline SVG paths.
const socials = [
  {
    label: "LinkedIn",
    href: site.socials.linkedin,
    viewBox: "0 0 448 512",
    path: "M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z",
  },
  {
    label: "X",
    href: site.socials.x,
    viewBox: "0 0 512 512",
    path: "M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z",
  },
  {
    label: "Facebook",
    href: site.socials.facebook,
    viewBox: "0 0 320 512",
    path: "M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z",
  },
  {
    label: "YouTube",
    href: site.socials.youtube,
    viewBox: "0 0 576 512",
    path: "M549.65 124.08c-6.28-23.65-24.79-42.28-48.28-48.6C458.79 64 288 64 288 64S117.21 64 74.63 75.48c-23.49 6.32-42 24.95-48.28 48.6-11.4 42.87-11.4 132.3-11.4 132.3s0 89.43 11.4 132.3c6.28 23.65 24.79 41.5 48.28 47.82C117.21 448 288 448 288 448s170.79 0 213.37-11.48c23.49-6.32 42-24.17 48.28-47.82 11.4-42.87 11.4-132.3 11.4-132.3s0-89.43-11.4-132.32zM232.15 337.6V174.4L361.4 256z",
  },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-navy text-white/70">
      <div className="border-b border-white/10">
        <div className="container-x flex flex-wrap items-center justify-center gap-x-8 gap-y-3 py-6">
          {trustBadges.map((b) => (
            <span
              key={b}
              className="text-sm font-semibold uppercase tracking-wide text-white/50"
            >
              {b}
            </span>
          ))}
        </div>
      </div>

      <div className="container-x grid gap-10 py-14 md:grid-cols-3 lg:grid-cols-6">
        <div className="md:col-span-3 lg:col-span-2">
          <Logo tone="light" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed">{site.description}</p>
          <div className="mt-5 flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white/80 transition-colors hover:bg-brand hover:text-white"
              >
                <svg viewBox={s.viewBox} className="h-3.5 w-3.5" fill="currentColor" aria-hidden="true">
                  <path d={s.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {serviceCategories.map((cat) => (
          <div key={cat.key}>
            <h4 className="mb-4 text-sm font-semibold text-white">
              {shortLabels[cat.key] ?? cat.title}
            </h4>
            <ul className="space-y-2.5 text-sm">
              {cat.key === "cpa"
                ? cpaCountries.map((country) => (
                    <li key={country.code}>
                      <Link
                        href={`/services/cpa/${country.code}`}
                        className="transition-colors hover:text-brand"
                      >
                        {country.flag} {country.name}
                      </Link>
                    </li>
                  ))
                : cat.services.slice(0, 6).map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/services/${s.slug}`}
                        className="transition-colors hover:text-brand"
                      >
                        {s.name}
                      </Link>
                    </li>
                  ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col gap-4 py-6 text-sm md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-white/70">
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-2 hover:text-brand"
            >
              <Mail size={15} className="text-brand" /> {site.email}
            </a>
            <a
              href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}
              className="inline-flex items-center gap-2 hover:text-brand"
            >
              <Phone size={15} className="text-brand" /> {site.phone}
            </a>
            <span className="text-white/50">{site.availability}</span>
          </div>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-white/60">
            {site.nav.map((i) => (
              <Link key={i.href} href={i.href} className="hover:text-brand">
                {i.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/45 sm:flex-row">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <p className="text-white/40">
            Brand-film music: &ldquo;Inspired&rdquo; by Kevin MacLeod (incompetech.com) — CC BY 4.0
          </p>
        </div>
      </div>
    </footer>
  );
}
