import type { Metadata } from "next";
import Image from "next/image";
import { MapPin, Navigation, Clock, Phone } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { Button, ButtonLink } from "@/components/ui/Button";
import { PageHero } from "@/components/shared/PageHero";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { Reveal } from "@/components/shared/Reveal";
import { CTABand } from "@/components/shared/CTABand";
import { JsonLd } from "@/components/seo/JsonLd";

import { breadcrumbJsonLd } from "@/lib/structured-data";
import { blurData } from "@/lib/image";
import { photo } from "@/content/photos";
import { company, mapsDirectionsUrl } from "@/content/company";
import { zones } from "@/content/zones";

/* ------------------------------------------------------------------ */
/*  Metadata                                                           */
/* ------------------------------------------------------------------ */

export const metadata: Metadata = {
  title: "Zone d'intervention — ouest lyonnais",
  description:
    "Électricien et rénovation intérieure à Lyon 9e, Francheville, Tassin, Écully, Sainte-Foy-lès-Lyon, Craponne et tout l'ouest lyonnais. Devis gratuit, déplacement rapide.",
};

/* ------------------------------------------------------------------ */
/*  Structured data                                                    */
/* ------------------------------------------------------------------ */

const breadcrumbs = [
  { name: "Accueil", path: "/" },
  { name: "Zone d'intervention", path: "/zone-intervention" },
];

const areaServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Électricien & rénovation intérieure — ouest lyonnais",
  serviceType: "Electrical Installation and Interior Renovation",
  description:
    "Mise aux normes électriques, rénovation de cuisine et salle de bain, tableau électrique, à Lyon 9e et dans l'ensemble de l'ouest lyonnais.",
  provider: {
    "@id": `${process.env.NEXT_PUBLIC_SITE_URL ?? "https://ahelecrenov.fr"}/#business`,
  },
  areaServed: zones.map((z) => ({
    "@type": "City",
    name: z.name,
    postalCode: z.postalCode,
  })),
  availableChannel: {
    "@type": "ServiceChannel",
    serviceUrl: `${process.env.NEXT_PUBLIC_SITE_URL ?? "https://ahelecrenov.fr"}/devis`,
  },
};

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

const reassurances = [
  { icon: Clock, label: "Déplacement rapide", detail: "Sous 48 h sur devis" },
  {
    icon: MapPin,
    label: "Artisan local",
    detail: `Basé ${company.address.street}, Lyon 9e`,
  },
  { icon: Phone, label: "Devis gratuit", detail: "Sans engagement" },
  {
    icon: Navigation,
    label: "Tout l'ouest lyonnais",
    detail: "10 communes couvertes",
  },
] as const;

export default function ZoneInterventionPage() {
  const embedSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    `${company.address.street} ${company.address.postalCode} ${company.address.city}`,
  )}&output=embed`;

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />
      <JsonLd data={areaServiceJsonLd} />

      {/* Hero --------------------------------------------------------- */}
      <PageHero
        eyebrow="Zone d'intervention"
        title="Électricien & rénovation dans l'ouest lyonnais"
        intro="Basé au 27 rue de Bourgogne (Lyon 9e), j'interviens rapidement sur Francheville, Tassin, Écully, Sainte-Foy-lès-Lyon, Craponne et l'ensemble du secteur ouest."
        image={photo("architectureLyon")}
        imageAlt="Vue de l'architecture lyonnaise, secteur d'intervention AH ELEC RENOV"
      />

      {/* Breadcrumb ---------------------------------------------------- */}
      <Breadcrumbs items={breadcrumbs} />

      {/* Intro + carte ------------------------------------------------- */}
      <section className="bg-cream">
        <Container className="grid grid-cols-1 items-start gap-12 py-20 sm:py-24 lg:grid-cols-2 lg:gap-16">
          {/* Texte + adresse */}
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-copper">
              Proximité
            </span>
            <h2 className="mt-4 text-3xl font-bold text-anthracite sm:text-4xl">
              Un artisan à quelques minutes de chez vous
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              Toutes mes interventions partent depuis Lyon 9e. Cela me permet de
              répondre rapidement aux urgences — panne de tableau, court-circuit,
              dégât des eaux — et d'organiser les chantiers de rénovation avec
              souplesse sur tout le secteur ouest.
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              Les déplacements sont inclus dans le devis pour les communes
              listées ci-dessous. En dehors de ce périmètre, contactez-moi :
              j'étudie chaque demande au cas par cas.
            </p>

            {/* Adresse */}
            <address className="mt-8 not-italic">
              <div className="inline-flex items-start gap-3 rounded-2xl border border-line bg-cream-200 px-5 py-4">
                <MapPin
                  className="mt-0.5 h-5 w-5 flex-shrink-0 text-copper"
                  aria-hidden
                />
                <div>
                  <p className="font-bold text-anthracite">
                    {company.brandName}
                  </p>
                  <p className="text-sm text-muted">
                    {company.address.street}
                    <br />
                    {company.address.postalCode} {company.address.city}
                  </p>
                  <p className="mt-0.5 text-sm text-muted">
                    {company.hours}
                  </p>
                </div>
              </div>
            </address>

            <div className="mt-7 flex flex-wrap gap-3">
              <ButtonLink
                href={mapsDirectionsUrl}
                variant="copper"
                size="md"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Navigation className="h-4 w-4" aria-hidden />
                Itinéraire Google Maps
              </ButtonLink>
              <Button href="/devis" variant="outline" size="md">
                Demander un devis
              </Button>
            </div>
          </Reveal>

          {/* Carte Google Maps embed */}
          <Reveal delay={0.1} className="aspect-[4/3] w-full overflow-hidden rounded-2xl border border-line shadow-soft lg:aspect-square">
            <iframe
              src={embedSrc}
              title="Localisation AH ELEC RENOV — 27 rue de Bourgogne Lyon 9e"
              loading="lazy"
              className="h-full w-full rounded-2xl"
              style={{ border: 0 }}
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Reveal>
        </Container>
      </section>

      {/* Bandeau réassurance ------------------------------------------ */}
      <section className="border-y border-line bg-cream-200">
        <Container className="py-10">
          <dl className="grid grid-cols-2 divide-x divide-line md:grid-cols-4">
            {reassurances.map(({ icon: Icon, label, detail }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-2 px-6 py-4 text-center first:pl-0 last:pr-0"
              >
                <Icon
                  className="h-6 w-6 text-copper"
                  strokeWidth={1.8}
                  aria-hidden
                />
                <dt className="text-sm font-bold text-anthracite">{label}</dt>
                <dd className="text-xs text-muted">{detail}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* Grille des communes ------------------------------------------ */}
      <section className="bg-cream">
        <Container className="py-20 sm:py-24">
          <Reveal className="mb-14 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-copper">
              Communes desservies
            </span>
            <h2 className="mt-4 text-3xl font-bold text-anthracite sm:text-4xl">
              Secteur ouest lyonnais — commune par commune
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              Voici les communes où j'interviens régulièrement. Chaque
              déplacement est planifié depuis Lyon 9e pour garantir ponctualité
              et réactivité.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {zones.map((zone, i) => (
              <Reveal
                key={zone.slug}
                as="div"
                delay={Math.min(i * 0.04, 0.24)}
              >
                <article className="group flex flex-col gap-4 rounded-2xl border border-line bg-white p-6 shadow-soft transition-shadow duration-200 hover:shadow-lift">
                  {/* En-tête */}
                  <header className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span
                        className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-copper/10 text-copper"
                        aria-hidden
                      >
                        <MapPin className="h-4 w-4" strokeWidth={2} />
                      </span>
                      <h3 className="font-bold text-anthracite group-hover:text-copper transition-colors duration-200">
                        {zone.name}
                      </h3>
                    </div>
                    <span className="flex-shrink-0 rounded-full bg-copper/10 px-2.5 py-1 text-xs font-semibold text-copper">
                      Intervention
                    </span>
                  </header>

                  {/* Blurb SEO */}
                  <p className="text-sm leading-relaxed text-muted">
                    {zone.blurb}
                  </p>

                  {/* Code postal */}
                  <footer className="mt-auto pt-2 border-t border-line">
                    <span className="text-xs font-medium text-muted/70">
                      Code postal {zone.postalCode}
                    </span>
                  </footer>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Section photo + texte ---------------------------------------- */}
      <section className="grain-overlay relative overflow-hidden bg-anthracite">
        <div className="absolute inset-0 -z-10">
          <Image
            src={photo("lyonVille", 1600, 60)}
            alt="Vue de Lyon depuis les hauteurs, zone d'intervention AH ELEC RENOV"
            fill
            sizes="100vw"
            placeholder="blur"
            blurDataURL={blurData}
            className="img-craft object-cover"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/75 to-ink/50"
            aria-hidden
          />
        </div>

        <Container className="relative z-10 py-20 sm:py-24">
          <div className="max-w-2xl">
            <Reveal>
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-copper-300">
                Engagement local
              </span>
              <h2 className="mt-4 text-3xl font-bold text-cream sm:text-4xl">
                Travailler local, c'est du concret
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-cream/80">
                Être artisan dans son propre secteur, c'est tenir ses
                engagements de délai, connaître les contraintes de chaque
                commune (PLU, copropriétés, bâtiments anciens) et pouvoir
                revenir rapidement si besoin. Je ne sous-traite pas : vous
                traitez avec une seule personne, du premier coup de fil à la
                réception du chantier.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <ButtonLink
                  href={`tel:${company.contact.phoneHref.replace("tel:", "")}`}
                  variant="copper"
                  size="lg"
                >
                  <Phone className="h-5 w-5" aria-hidden />
                  {company.contact.phone}
                </ButtonLink>
                <Button href="/devis" variant="outline-light" size="lg">
                  Demander un devis gratuit
                </Button>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* CTA final ---------------------------------------------------- */}
      <CTABand
        title="Votre projet dans l'ouest lyonnais ?"
        text="Décrivez-moi vos travaux par téléphone ou via le formulaire. Je me déplace gratuitement pour estimer le chantier et vous remettre un devis détaillé."
      />
    </>
  );
}
