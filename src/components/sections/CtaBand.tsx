import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { site } from "@/content/site";
import { media } from "@/content/media";

export default function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-navy">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={media.global}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/60" />
      <Container className="relative">
        <div className="flex flex-col items-center justify-between gap-6 py-16 text-center md:flex-row md:text-left">
          <div>
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Ready to hand off your finance function?
            </h2>
            <p className="mt-2 max-w-xl text-white/80">
              Join the CPA firms and businesses worldwide that trust AccountsUp
              for their entire finance operation.
            </p>
          </div>
          <Button href={site.ctaPrimary.href} className="shrink-0">
            {site.ctaPrimary.label} <ArrowRight size={16} />
          </Button>
        </div>
      </Container>
    </section>
  );
}
