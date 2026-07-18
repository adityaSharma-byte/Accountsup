import type { Metadata } from "next";
import { Mail, Phone, Clock } from "lucide-react";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/ui/PageHeader";
import ContactForm from "@/components/sections/ContactForm";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a consultation with AccountsUp — outsourced bookkeeping, payroll, and cross-border tax for US & Canadian corporations.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's talk about your books"
        subtitle="Tell us about your entities and what you need — we'll map an engagement to your workload."
      />

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-5 lg:gap-16">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-ink">Get in touch</h2>
              <p className="mt-3 leading-relaxed text-body">
                Reach us directly, or send the form and we&apos;ll respond within
                one business day.
              </p>
              <ul className="mt-8 space-y-6">
                <ContactRow icon={<Mail size={18} />} title="Email">
                  <a
                    href={`mailto:${site.email}`}
                    className="transition-colors hover:text-brand"
                  >
                    {site.email}
                  </a>
                  <br />
                  <a
                    href={`mailto:${site.emailOps}`}
                    className="transition-colors hover:text-brand"
                  >
                    {site.emailOps}
                  </a>
                </ContactRow>
                <ContactRow icon={<Phone size={18} />} title="Phone">
                  <span className="block">United States — {site.phoneUS}</span>
                  <span className="block">Canada — {site.phoneCA}</span>
                </ContactRow>
                <ContactRow icon={<Clock size={18} />} title="Availability">
                  {site.availability}
                </ContactRow>
              </ul>
            </div>

            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

function ContactRow({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex items-start gap-4">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-brand">
        {icon}
      </span>
      <div>
        <p className="text-sm font-bold text-ink">{title}</p>
        <div className="mt-1 text-sm leading-relaxed text-body">{children}</div>
      </div>
    </li>
  );
}
