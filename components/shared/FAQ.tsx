import { Container } from "@/components/ui/Container";
import { Reveal } from "./Reveal";

export type QA = { q: string; a: string };

/**
 * FAQ en liste ouverte (pas d'accordéon) : tout le contenu est visible —
 * meilleur pour le SEO et l'accessibilité. À associer à `faqJsonLd`.
 */
export function FAQ({
  title = "Questions fréquentes",
  eyebrow = "FAQ",
  items,
  className,
}: {
  title?: string;
  eyebrow?: string;
  items: QA[];
  className?: string;
}) {
  return (
    <section className={className ?? "bg-cream"}>
      <Container className="py-20 sm:py-24">
        <Reveal className="mb-12 max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-copper">
            {eyebrow}
          </span>
          <h2 className="mt-4 text-3xl font-bold text-anthracite sm:text-4xl">
            {title}
          </h2>
        </Reveal>
        <dl className="grid gap-x-12 gap-y-9 md:grid-cols-2">
          {items.map((item, i) => (
            <Reveal as="div" key={i} delay={(i % 2) * 0.05}>
              <dt className="font-display text-lg font-bold text-anthracite">
                {item.q}
              </dt>
              <dd className="mt-2 text-[15px] leading-relaxed text-muted">
                {item.a}
              </dd>
            </Reveal>
          ))}
        </dl>
      </Container>
    </section>
  );
}
