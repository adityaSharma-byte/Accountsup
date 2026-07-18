import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { site } from "@/content/site";

export default function CtaBand() {
  return (
    <section className="bg-brand">
      <Container>
        <div className="flex flex-col items-center justify-between gap-6 py-14 text-center md:flex-row md:text-left">
          <div>
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Let&apos;s talk about your books.
            </h2>
            <p className="mt-2 text-white/90">
              Join the corporations that trust AccountsUp for bookkeeping,
              payroll, and cross-border tax.
            </p>
          </div>
          <Button href={site.ctaPrimary.href} variant="light" className="shrink-0">
            {site.ctaPrimary.label} <ArrowRight size={16} />
          </Button>
        </div>
      </Container>
    </section>
  );
}
