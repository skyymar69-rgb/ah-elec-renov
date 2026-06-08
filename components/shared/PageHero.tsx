import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { blurData } from "@/lib/image";
import { cn } from "@/lib/utils";

/**
 * En-tête de page réutilisable. Deux variantes :
 *  - sans `image` : fond clair (cream).
 *  - avec `image` : photo plein cadre + dégradé sombre (image-forward).
 */
export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  imageAlt,
  children,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  image?: string;
  imageAlt?: string;
  children?: React.ReactNode;
}) {
  const dark = Boolean(image);

  return (
    <section
      className={cn(
        "relative isolate overflow-hidden",
        dark ? "grain-overlay bg-ink" : "border-b border-line bg-cream-200",
      )}
    >
      {image && (
        <div className="absolute inset-0 -z-10">
          <Image
            src={image}
            alt={imageAlt ?? ""}
            fill
            priority
            sizes="100vw"
            placeholder="blur"
            blurDataURL={blurData}
            className="img-craft object-cover"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-ink/92 via-ink/70 to-ink/30"
            aria-hidden
          />
        </div>
      )}

      <Container className={cn("py-16 sm:py-20", dark && "py-24 sm:py-28")}>
        <div className="max-w-3xl">
          <div className="mb-4 flex items-center gap-3">
            <span className="accent-line" aria-hidden />
            <span
              className={cn(
                "text-xs font-bold uppercase tracking-[0.18em]",
                dark ? "text-copper-300" : "text-copper",
              )}
            >
              {eyebrow}
            </span>
          </div>
          <h1
            className={cn(
              "text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl",
              dark ? "text-cream" : "text-anthracite",
            )}
          >
            {title}
          </h1>
          {intro && (
            <p
              className={cn(
                "mt-5 max-w-2xl text-lg leading-relaxed",
                dark ? "text-cream/80" : "text-muted",
              )}
            >
              {intro}
            </p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </div>
      </Container>
    </section>
  );
}
