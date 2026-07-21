import { site } from "@/content/site";

export default function TopBar() {
  return (
    <div className="bg-navy-dark text-white/75">
      <div className="container-x flex h-9 items-center justify-between gap-4 text-xs">
        <div className="flex items-center gap-4">
          <a
            href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}
            className="whitespace-nowrap transition-colors hover:text-white"
          >
            {site.phone}
          </a>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden md:inline">{site.availability}</span>
          <a
            href={`mailto:${site.email}`}
            className="whitespace-nowrap transition-colors hover:text-white"
          >
            {site.email}
          </a>
        </div>
      </div>
    </div>
  );
}
