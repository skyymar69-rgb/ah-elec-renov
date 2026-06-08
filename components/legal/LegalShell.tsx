import { Container } from "@/components/ui/Container";

/**
 * Coquille commune des pages légales : en-tête + zone de lecture typographiée.
 * Largeur de ligne maîtrisée (~70 car.) pour la lisibilité (bonnes pratiques
 * éditoriales / accessibilité).
 */
export function LegalShell({
  eyebrow,
  title,
  updated,
  children,
}: {
  eyebrow: string;
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <article>
      <header className="border-b border-line bg-cream-200">
        <Container className="py-16 sm:py-20">
          <div className="mb-4 flex items-center gap-3">
            <span className="accent-line" aria-hidden />
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-copper">
              {eyebrow}
            </span>
          </div>
          <h1 className="max-w-3xl text-3xl font-extrabold text-anthracite sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          <p className="mt-4 text-sm text-muted">
            Dernière mise à jour : {updated}
          </p>
        </Container>
      </header>

      <Container className="py-14 sm:py-16">
        <div
          className={[
            "max-w-3xl text-[15px] leading-relaxed text-anthracite/90",
            "[&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-anthracite first:[&_h2]:mt-0",
            "[&_h3]:mt-7 [&_h3]:mb-2 [&_h3]:font-display [&_h3]:text-lg [&_h3]:font-bold [&_h3]:text-anthracite",
            "[&_p]:mb-4",
            "[&_ul]:mb-4 [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-5 [&_li]:marker:text-copper",
            "[&_a]:font-medium [&_a]:text-copper [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-copper-600",
            "[&_strong]:font-semibold [&_strong]:text-anthracite",
            "[&_dl]:mb-4 [&_dt]:font-semibold [&_dt]:text-anthracite [&_dd]:mb-2 [&_dd]:text-muted",
          ].join(" ")}
        >
          {children}
        </div>
      </Container>
    </article>
  );
}

/** Marqueur visible pour une donnée encore manquante (ne pas publier en l'état). */
export function ACompleter({ hint }: { hint?: string }) {
  return (
    <mark className="rounded bg-copper/15 px-1.5 py-0.5 text-sm font-semibold text-copper-600">
      [À COMPLÉTER{hint ? ` : ${hint}` : ""}]
    </mark>
  );
}

/** Affiche la valeur, ou un marqueur « À COMPLÉTER » si vide. */
export function Field({ value, hint }: { value?: string; hint?: string }) {
  return value && value.trim() ? <>{value}</> : <ACompleter hint={hint} />;
}
