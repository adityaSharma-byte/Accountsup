import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceDetail from "@/components/ServiceDetail";
import { cpaCountries, findCountryService } from "@/content/cpaCountries";
import { getServiceContent } from "@/content/serviceContent";
import { serviceImage, serviceImageAlt } from "@/content/media";

export function generateStaticParams() {
  return cpaCountries.flatMap((c) =>
    c.services.map((s) => ({ country: c.code, service: s.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ country: string; service: string }>;
}): Promise<Metadata> {
  const { country, service } = await params;
  const f = findCountryService(country, service);
  if (!f) return { title: "Service" };
  const content = getServiceContent(service, f.service.name, f.service.description);
  return {
    title: `${f.service.name} — ${f.country.name}`,
    description: content.metaDescription,
  };
}

export default async function CountryServiceDetail({
  params,
}: {
  params: Promise<{ country: string; service: string }>;
}) {
  const { country, service } = await params;
  const f = findCountryService(country, service);
  if (!f) notFound();
  const { country: c, service: s } = f;

  const content = getServiceContent(service, s.name, s.description);
  const related = c.services
    .filter((x) => x.slug !== s.slug)
    .slice(0, 3)
    .map((x) => ({
      name: x.name,
      href: `/services/cpa/${c.code}/${x.slug}`,
      description: x.description,
      icon: x.icon,
    }));

  return (
    <ServiceDetail
      eyebrow={`Accounting for CPA · ${c.name}`}
      name={s.name}
      jurisdiction={c.name}
      content={content}
      breadcrumb={[
        { label: "Services", href: "/services" },
        { label: "Accounting for CPA", href: "/services/cpa" },
        { label: c.short, href: `/services/cpa/${c.code}` },
        { label: s.name },
      ]}
      overviewImage={serviceImage(service)}
      diffImage={serviceImageAlt(service)}
      relatedHeading={`More ${c.short} services`}
      relatedAllHref={`/services/cpa/${c.code}`}
      relatedAllLabel={`All ${c.short} services`}
      related={related}
    />
  );
}
