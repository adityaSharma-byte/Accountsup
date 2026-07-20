"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { site } from "@/content/site";
import Logo from "@/components/ui/Logo";
import Button from "@/components/ui/Button";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy text-white">
      <div className="container-x flex h-20 items-center justify-between">
        <Link href="/" aria-label={site.name} className="flex items-center">
          <Logo tone="light" />
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {site.nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[0.95rem] font-semibold transition-colors hover:text-brand ${
                  active ? "text-brand" : "text-white/90"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
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

      {open && (
        <div className="border-t border-white/10 bg-navy md:hidden">
          <div className="container-x flex flex-col gap-1 py-4">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-3 text-base font-semibold text-white/90 transition-colors hover:bg-white/5 hover:text-brand"
              >
                {item.label}
              </Link>
            ))}
            <Button href={site.ctaPrimary.href} className="mt-3 w-full">
              {site.ctaPrimary.label}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
