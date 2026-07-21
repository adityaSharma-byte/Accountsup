"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { site } from "@/content/site";
import { servicesMenu, industriesMenu } from "@/content/nav";
import Logo from "@/components/ui/Logo";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";

function navClass(active: boolean) {
  return `text-[0.95rem] font-semibold transition-colors hover:text-brand ${
    active ? "text-brand" : "text-white/90"
  }`;
}

export default function Header() {
  const [open, setOpen] = useState(false); // mobile drawer
  const [section, setSection] = useState<string | null>(null); // mobile accordion
  const [menu, setMenu] = useState<string | null>(null); // desktop mega-menu
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
    setSection(null);
    setMenu(null);
  }, [pathname]);

  // Hover-intent: opening cancels any pending close; leaving schedules a
  // delayed close so moving between the trigger and the panel never drops it.
  const openMenu = (k: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMenu(k);
  };
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setMenu(null), 180);
  };
  useEffect(() => () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }, []);

  const toggle = (s: string) => setSection((prev) => (prev === s ? null : s));

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy text-white">
      <div className="container-x relative flex h-20 items-center justify-between">
        <Link href="/" aria-label={site.name} className="flex items-center">
          <Logo tone="light" />
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link href="/" className={navClass(pathname === "/")}>
            Home
          </Link>

          {/* Services mega-menu */}
          <div
            className="static"
            onMouseEnter={() => openMenu("services")}
            onMouseLeave={scheduleClose}
          >
            <Link
              href={servicesMenu.href}
              className={`${navClass(pathname.startsWith("/services"))} inline-flex items-center gap-1`}
              onFocus={() => openMenu("services")}
              aria-expanded={menu === "services"}
            >
              Services
              <ChevronDown
                size={15}
                className={`transition-transform duration-200 ${menu === "services" ? "rotate-180" : ""}`}
              />
            </Link>
            {menu === "services" && (
              <div
                className="absolute inset-x-0 top-full z-50 flex justify-center pt-3"
                onMouseEnter={() => openMenu("services")}
                onMouseLeave={scheduleClose}
              >
                <div className="w-full max-w-5xl rounded-2xl border border-line bg-white p-6 text-ink shadow-2xl">
                  <div className="grid grid-cols-3 gap-6">
                    {servicesMenu.columns.map((col) => (
                      <div key={col.title}>
                        <Link href={col.href} className="block">
                          <span className="text-xs font-bold uppercase tracking-wide text-brand">
                            {col.title}
                          </span>
                          <span className="mt-0.5 block text-xs text-muted">
                            {col.blurb}
                          </span>
                        </Link>
                        <ul className="mt-3 space-y-0.5">
                          {col.links.map((l) => (
                            <li key={l.href}>
                              <Link
                                href={l.href}
                                className="flex items-center gap-2.5 rounded-lg px-2 py-2 text-sm font-medium text-navy transition-colors hover:bg-cream hover:text-brand"
                              >
                                {l.flag ? (
                                  <span className="text-base leading-none">{l.flag}</span>
                                ) : l.icon ? (
                                  <Icon name={l.icon} size={16} className="text-brand" />
                                ) : null}
                                {l.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                    <div className="flex flex-col justify-between rounded-xl bg-navy p-5 text-white">
                      <div>
                        <p className="text-sm font-bold">Not sure where you fit?</p>
                        <p className="mt-2 text-sm leading-relaxed text-white/70">
                          Tell us about your books and we&apos;ll map the right team to your needs.
                        </p>
                      </div>
                      <Link
                        href="/contact"
                        className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition-colors hover:text-white"
                      >
                        Talk to an expert →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Industries mega-menu */}
          <div
            className="static"
            onMouseEnter={() => openMenu("industries")}
            onMouseLeave={scheduleClose}
          >
            <Link
              href={industriesMenu.href}
              className={`${navClass(pathname.startsWith("/industries"))} inline-flex items-center gap-1`}
              onFocus={() => openMenu("industries")}
              aria-expanded={menu === "industries"}
            >
              Industries
              <ChevronDown
                size={15}
                className={`transition-transform duration-200 ${menu === "industries" ? "rotate-180" : ""}`}
              />
            </Link>
            {menu === "industries" && (
              <div
                className="absolute inset-x-0 top-full z-50 flex justify-center pt-3"
                onMouseEnter={() => openMenu("industries")}
                onMouseLeave={scheduleClose}
              >
                <div className="w-full max-w-4xl rounded-2xl border border-line bg-white p-6 text-ink shadow-2xl">
                  <div className="grid grid-cols-4 gap-2">
                    {industriesMenu.links.map((l) => (
                      <Link
                        key={l.href}
                        href={l.href}
                        className="flex items-center gap-2.5 rounded-lg px-3 py-3 text-sm font-medium leading-tight text-navy transition-colors hover:bg-cream hover:text-brand"
                      >
                        {l.icon ? (
                          <Icon name={l.icon} size={18} className="shrink-0 text-brand" />
                        ) : null}
                        {l.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link href="/about" className={navClass(pathname.startsWith("/about"))}>
            About
          </Link>
          <Link href="/contact" className={navClass(pathname.startsWith("/contact"))}>
            Contact
          </Link>
        </nav>

        <div className="hidden md:block">
          <Button href={site.ctaPrimary.href}>{site.ctaPrimary.label}</Button>
        </div>

        <button
          type="button"
          className="md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-white/10 bg-navy md:hidden">
          <div className="container-x flex flex-col gap-1 py-4">
            <Link
              href="/"
              className="rounded-lg px-3 py-3 text-base font-semibold text-white/90 hover:bg-white/5 hover:text-brand"
            >
              Home
            </Link>

            <button
              type="button"
              onClick={() => toggle("services")}
              className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-base font-semibold text-white/90 hover:bg-white/5"
              aria-expanded={section === "services"}
            >
              Services
              <ChevronDown
                size={18}
                className={`transition-transform ${section === "services" ? "rotate-180" : ""}`}
              />
            </button>
            {section === "services" && (
              <div className="ml-3 border-l border-white/10 pl-3">
                {servicesMenu.columns.map((col) => (
                  <div key={col.title} className="py-1">
                    <Link
                      href={col.href}
                      className="block px-3 py-2 text-xs font-bold uppercase tracking-wide text-brand"
                    >
                      {col.title}
                    </Link>
                    {col.links.map((l) => (
                      <Link
                        key={l.href}
                        href={l.href}
                        className="block rounded px-3 py-2 text-sm text-white/85 hover:text-brand"
                      >
                        {l.flag ? `${l.flag} ` : ""}
                        {l.label}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            )}

            <button
              type="button"
              onClick={() => toggle("industries")}
              className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-base font-semibold text-white/90 hover:bg-white/5"
              aria-expanded={section === "industries"}
            >
              Industries
              <ChevronDown
                size={18}
                className={`transition-transform ${section === "industries" ? "rotate-180" : ""}`}
              />
            </button>
            {section === "industries" && (
              <div className="ml-3 border-l border-white/10 pl-3">
                {industriesMenu.links.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="block rounded px-3 py-2 text-sm text-white/85 hover:text-brand"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            )}

            <Link
              href="/about"
              className="rounded-lg px-3 py-3 text-base font-semibold text-white/90 hover:bg-white/5 hover:text-brand"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="rounded-lg px-3 py-3 text-base font-semibold text-white/90 hover:bg-white/5 hover:text-brand"
            >
              Contact
            </Link>
            <Button href={site.ctaPrimary.href} className="mt-3 w-full">
              {site.ctaPrimary.label}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
