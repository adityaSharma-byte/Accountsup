import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { site } from "@/content/site";
import { services } from "@/content/services";
import Logo from "@/components/ui/Logo";

// Honest "trust" row: capabilities and platforms we actually work with —
// NOT accreditation logos. Swap in real ISO / GDPR / ProAdvisor badges only
// if you genuinely hold them.
const trustBadges = ["US GAAP", "Canadian CRA", "QuickBooks", "Xero", "NetSuite"];

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
    label: "Instagram",
    href: site.socials.instagram,
    viewBox: "0 0 448 512",
    path: "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z",
  },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-navy text-white/70">
      {/* Trust row */}
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

      <div className="container-x grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
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
                <svg
                  viewBox={s.viewBox}
                  className="h-3.5 w-3.5"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d={s.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold text-white">Company</h4>
          <ul className="space-y-2.5 text-sm">
            {site.nav.map((i) => (
              <li key={i.href}>
                <Link href={i.href} className="transition-colors hover:text-brand">
                  {i.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold text-white">Services</h4>
          <ul className="space-y-2.5 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services#${s.slug}`}
                  className="transition-colors hover:text-brand"
                >
                  {s.short}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold text-white">Get in touch</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2.5">
              <Mail size={15} className="text-brand" />
              <a
                href={`mailto:${site.email}`}
                className="transition-colors hover:text-brand"
              >
                {site.email}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone size={15} className="text-brand" />
              <span>{site.phoneUS}</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone size={15} className="text-brand" />
              <span>{site.phoneCA}</span>
            </li>
            <li className="pt-1 text-white/50">{site.availability}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/50 sm:flex-row">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {site.legal.map((l) => (
              <span key={l} className="transition-colors hover:text-white/80">
                {l}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
