import Image from "next/image";
import { Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { MagneticButton } from "@/components/shared/MagneticButton";
import { company, hasPhone } from "@/content/company";
import { blurData } from "@/lib/image";

export function Hero() {
  return (
    <section className="grain-overlay relative isolate flex min-h-[640px] items-center overflow-hidden sm:min-h-[760px] lg:min-h-[860px]">
      {/* Photo plein cadre */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=2200&q=72"
          alt="Tableau électrique rénové dans un intérieur moderne de l'ouest lyonnais"
          fill
          priority
          sizes="100vw"
          placeholder="blur"
          blurDataURL={blurData}
          className="img-craft object-cover"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/60 to-ink/15"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent"
          aria-hidden
        />
      </div>

      <Container className="w-full py-28">
        <div className="max-w-3xl">
          <div className="mb-6 flex items-center gap-3">
            <span className="accent-line" aria-hidden />
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-copper-300">
              Francheville · Ouest lyonnais
            </span>
          </div>

          <h1 className="text-4xl font-extrabold leading-[1.08] text-cream sm:text-5xl lg:text-[64px] lg:leading-[1.05]">
            Électricité &amp; rénovation intérieure clé en main —{" "}
            <span className="text-copper-300">Francheville</span> et Ouest
            lyonnais
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-cream/85">
            Un seul interlocuteur pour vos travaux de mise aux normes et de
            rénovation complète. Proximité, confiance et expertise au service de
            votre habitat.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <MagneticButton href="/devis">Devis gratuit</MagneticButton>
            {hasPhone ? (
              <ButtonLink
                href={company.contact.phoneHref}
                variant="outline-light"
                size="lg"
              >
                <Phone className="h-4 w-4" />
                {company.contact.phone}
              </ButtonLink>
            ) : (
              <MagneticButton href="/contact" className="bg-transparent border-2 border-cream/30 text-cream copper-glow hover:border-copper-300">
                <Phone className="h-4 w-4" />
                Me contacter
              </MagneticButton>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
