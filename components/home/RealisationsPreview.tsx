import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/shared/Reveal";
import { BeforeAfterCard } from "@/components/shared/BeforeAfterCard";
import { realisations } from "@/content/realisations";

export function RealisationsPreview() {
  return (
    <section id="realisations" className="bg-cream">
      <Container className="py-24 sm:py-28">
        <Reveal className="mb-14 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-copper">
              Portfolio
            </span>
            <h2 className="mt-4 text-3xl font-bold text-anthracite sm:text-4xl">
              Nos dernières réalisations
            </h2>
            <p className="mt-4 text-muted">
              Quelques chantiers récents, avant / après. Survolez une image pour
              voir l'état d'origine.
            </p>
          </div>
          <Link
            href="/realisations"
            className="inline-flex shrink-0 items-center gap-1.5 border-b-2 border-copper pb-1 text-sm font-bold text-copper transition-all hover:gap-3"
          >
            Voir tous les projets
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {realisations.slice(0, 3).map((item, i) => (
            <Reveal key={item.slug} delay={i * 0.06}>
              <BeforeAfterCard item={item} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
