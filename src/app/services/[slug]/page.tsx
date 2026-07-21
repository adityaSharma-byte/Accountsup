import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceDetail from "@/components/ServiceDetail";
import { serviceCategories, allServices } from "@/content/services";
import { getServiceContent } from "@/content/serviceContent";
import { serviceImage, serviceImageAlt } from "@/content/media";

export function generateStaticParams() {
  return allServices.map((s) => ({ slug: s.slug }));
}

function find(slug: string) {
  for (const cat of serviceCategories) {
    const svc = cat.services.find((s) => s.slug === slug);
    if (svc) return { svc, cat };
  }
  return null;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const f = find(slug);
  if (!f) return { title: "Service" };
  const content = getServiceContent(slug, f.svc.name, f.svc.description);
  return { title: f.svc.name, description: content.metaDescription };
}

export default async function ServiceSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const f = find(slug);
  if (!f) notFound();
  const { svc, cat } = f;

  const content = getServiceContent(slug, svc.name, svc.description);
  const related = cat.services
    .filter((s) => s.slug !== svc.slug)
    .slice(0, 3)
    .map((s) => ({
      name: s.name,
      href: `/services/${s.slug}`,
      description: s.description,
      icon: s.icon,
    }));

  return (
    <ServiceDetail
      eyebrow={cat.title}
      name={svc.name}
      content={content}
      breadcrumb={[
        { label: "Services", href: "/services" },
        { label: cat.title, href: `/services#${cat.key}` },
        { label: svc.name },
      ]}
      overviewImage={serviceImage(slug)}
      diffImage={serviceImageAlt(slug)}
      relatedHeading="Related services"
      relatedAllHref="/services"
      relatedAllLabel="All services"
      related={related}
    />
  );
}
