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
      <div className="container-x flex h-16 items-center justify-between">
        <Link href="/" aria-label={site.name} className="flex items-center">
          <Logo tone="light" />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {site.nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-brand ${
                  active ? "text-brand" : "text-white/85"
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
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-navy md:hidden">
          <div className="container-x flex flex-col gap-1 py-4">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-white/85 transition-colors hover:bg-white/5 hover:text-brand"
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
