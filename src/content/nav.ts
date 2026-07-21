/**
 * Navigation model for the header mega-menus, derived from the content files
 * so the menu can never drift out of sync with the pages that exist.
 */
import { cpaCountries } from "./cpaCountries";
import { businessServices } from "./services";
import { industries } from "./industries";

export type MegaLink = {
  label: string;
  href: string;
  icon?: string;
  flag?: string;
};

export type MegaColumn = {
  title: string;
  href: string;
  blurb: string;
  links: MegaLink[];
};

export const servicesMenu: { href: string; columns: MegaColumn[] } = {
  href: "/services",
  columns: [
    {
      title: "Accounting for CPA firms",
      href: "/services/cpa",
      blurb: "White-label work, by country",
      links: cpaCountries.map((c) => ({
        label: c.name,
        href: `/services/cpa/${c.code}`,
        flag: c.flag,
      })),
    },
    {
      title: "Accounting for businesses",
      href: "/services#business",
      blurb: "Your finance function, by stage",
      links: businessServices.map((s) => ({
        label: s.name,
        href: `/services/${s.slug}`,
        icon: s.icon,
      })),
    },
  ],
};

export const industriesMenu: { href: string; links: MegaLink[] } = {
  href: "/industries",
  links: industries.map((i) => ({
    label: i.name,
    href: `/industries/${i.slug}`,
    icon: i.icon,
  })),
};
