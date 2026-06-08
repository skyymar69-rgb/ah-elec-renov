import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CTABand } from "@/components/shared/CTABand";

/**
 * Page-jalon temporaire (Phase 1). Sera remplacée par le vrai contenu aux
 * Phases 2 à 4.
 */
export function Placeholder({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <>
      <section className="bg-cream">
        <Container className="flex min-h-[55vh] flex-col justify-center py-24">
          <div className="mb-5 flex items-center gap-3">
            <span className="accent-line" aria-hidden />
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-copper">
              {eyebrow}
            </span>
          </div>
          <h1 className="max-w-2xl text-4xl font-extrabold leading-tight text-anthracite sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted">{text}</p>
          <span className="mt-8 inline-flex w-fit items-center rounded-full bg-copper/12 px-4 py-1.5 text-sm font-medium text-copper">
            Page en cours de finalisation
          </span>
          <div className="mt-8">
            <Button href="/" variant="dark">
              Retour à l'accueil
            </Button>
          </div>
        </Container>
      </section>
      <CTABand />
    </>
  );
}
