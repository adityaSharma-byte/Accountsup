import { site } from "@/content/site";

/**
 * Wordmark: "Accounts" + brand-colored "Up", with a small rising-ledger mark.
 * tone="light" for dark backgrounds (header/footer), "dark" for light sections.
 */
export default function Logo({ tone = "dark" }: { tone?: "light" | "dark" }) {
  const text = tone === "light" ? "text-white" : "text-ink";
  return (
    <span className="inline-flex items-center gap-2">
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <rect x="2" y="3" width="20" height="18" rx="4" className="fill-brand" />
        <rect x="6" y="12" width="2.6" height="5" rx="1.3" fill="#fff" />
        <rect x="10.7" y="9" width="2.6" height="8" rx="1.3" fill="#fff" />
        <rect x="15.4" y="6" width="2.6" height="11" rx="1.3" fill="#fff" />
      </svg>
      <span className={`text-lg font-bold tracking-tight ${text}`}>
        Accounts<span className="text-brand">Up</span>
      </span>
    </span>
  );
}

export function LogoLabel() {
  return <>{site.name}</>;
}
