import Container from "@/components/ui/Container";

export default function PageHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-brand/20 blur-3xl" />
        <div className="absolute -bottom-24 left-10 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
      </div>
      <Container className="relative py-16 sm:py-20">
        <div className="max-w-2xl">
          {eyebrow && (
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand">
              {eyebrow}
            </p>
          )}
          <h1 className="mt-3 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 text-lg leading-relaxed text-white/70">{subtitle}</p>
          )}
        </div>
      </Container>
    </section>
  );
}
