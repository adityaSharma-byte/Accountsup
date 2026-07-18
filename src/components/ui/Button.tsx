import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "outline" | "light" | "dark";

const styles: Record<Variant, string> = {
  primary: "bg-brand text-white hover:bg-brand-dark",
  outline: "border border-white/40 text-white hover:bg-white/10",
  light: "bg-white text-navy hover:bg-cream",
  dark: "bg-navy text-white hover:bg-navy-light",
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors ${styles[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
