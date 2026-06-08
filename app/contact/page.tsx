import type { Metadata } from "next";
import {
  Phone,
  PhoneCall,
  Mail,
  MapPin,
  Clock,
  ExternalLink,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button, ButtonLink } from "@/components/ui/Button";
import { PageHero } from "@/components/shared/PageHero";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { Reveal } from "@/components/shared/Reveal";
import { CTABand } from "@/components/shared/CTABand";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd } from "@/lib/structured-data";
import {
  company,
  mapsDirectionsUrl,
  mapsUrl,
} from "@/content/company";

export const metadata: Metadata = {
  title: "Contact — AH ELEC RENOV Lyon",
  description:
    "Contactez AH ELEC RENOV à Lyon 9e : mobile, fixe, email et accès en voiture. Hocine ASLI répond du lundi au vendredi, 8h–18h.",
};

const breadcrumbItems = [
  { name: "Accueil", path: "/" },
  { name: "Contact", path: "/contact" },
];

const contactPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact — AH ELEC RENOV",
  url: `${process.env.NEXT_PUBLIC_SITE_URL ?? "https://ahelecrenov.fr"}/contact`,
  mainEntity: { "@id": `${process.env.NEXT_PUBLIC_SITE_URL ?? "https://ahelecrenov.fr"}/#business` },
};

const contactMethods = [
  {
    icon: Phone,
    label: "Mobile",
    value: company.contact.phone,
    href: company.contact.phoneHref,
    note: "CTA principal — joignable 7j/7",
    isLink: true,
  },
  {
    icon: PhoneCall,
    label: "Fixe",
    value: company.contact.phoneFixed,
    href: company.contact.phoneFixedHref,
    note: "Lun.–ven. 8h–18h",
    isLink: true,
  },
  {
    icon: Mail,
    label: "Email",
    value: company.contact.email,
    href: `mailto:${company.contact.email}`,
    note: "Réponse sous 24 h ouvrées",
    isLink: true,
  },
  {
    icon: MapPin,
    label: "Adresse",
    value: `${company.address.street}, ${company.address.postalCode} ${company.address.city}`,
    href: mapsUrl,
    note: "Siège social",
    isLink: false,
    external: true,
  },
  {
    icon: Clock,
    label: "Horaires",
    value: company.hours,
    href: null,
    note: null,
    isLink: false,
    external: false,
  },
] as const;

const reassuranceItems = [
  { title: "Réponse rapide", text: "Hocine ASLI vous rappelle en général le jour même." },
  { title: "Devis gratuit", text: "Aucun frais de déplacement pour l'établissement du devis." },
  { title: "Un seul interlocuteur", text: "Du premier appel à la réception de chantier, vous traitez avec la même personne." },
  { title: "Secteur ouest lyonnais", text: "Lyon, Francheville, Tassin, Écully, Sainte-Foy… Pas de frais de déplacement dans le secteur." },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(breadcrumbItems)} />
      <JsonLd data={contactPageJsonLd} />

      <PageHero
        eyebrow="Contact"
        title="Parlons de votre projet"
        intro="Appelez directement ou envoyez un email — Hocine ASLI vous répond personnellement et sans intermédiaire."
      />

      <Breadcrumbs items={breadcrumbItems} />

      {/* Bloc principal : coordonnées + carte */}
      <section className="bg-cream">
        <Container className="py-16 sm:py-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">

            {/* Colonne gauche — méthodes de contact */}
            <div>
              <Reveal>
                <h2 className="text-xl font-bold text-anthracite sm:text-2xl">
                  Coordonnées
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Toutes les façons de nous joindre, directement depuis votre appareil.
                </p>
              </Reveal>

              <ul className="mt-8 space-y-5" role="list">
                {contactMethods.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <Reveal key={item.label} as="li" delay={i * 0.06}>
                      <div className="flex items-start gap-4 rounded-2xl border border-line bg-white p-5 shadow-soft transition-shadow hover:shadow-lift">
                        <span
                          className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-copper/10 text-copper"
                          aria-hidden
                        >
                          <Icon className="h-5 w-5" strokeWidth={1.8} />
                        </span>
                        <div className="min-w-0 flex-1">
                          <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                            {item.label}
                          </p>
                          {item.isLink ? (
                            <a
                              href={item.href as string}
                              className="mt-0.5 block text-base font-semibold text-anthracite hover:text-copper focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-copper"
                            >
                              {item.value}
                            </a>
                          ) : item.external ? (
                            <a
                              href={item.href as string}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="mt-0.5 inline-flex items-center gap-1 text-base font-semibold text-anthracite hover:text-copper focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-copper"
                            >
                              {item.value}
                              <ExternalLink className="h-3.5 w-3.5 shrink-0 text-muted/60" aria-hidden />
                            </a>
                          ) : (
                            <p className="mt-0.5 text-base font-semibold text-anthracite">
                              {item.value}
                            </p>
                          )}
                          {item.note && (
                            <p className="mt-1 text-xs text-muted">{item.note}</p>
                          )}
                        </div>
                      </div>
                    </Reveal>
                  );
                })}
              </ul>
            </div>

            {/* Colonne droite — carte Google Maps + bouton itinéraire */}
            <Reveal className="flex flex-col gap-5">
              <div>
                <h2 className="text-xl font-bold text-anthracite sm:text-2xl">
                  Nous trouver
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {company.address.street}, {company.address.postalCode} {company.address.city}
                </p>
              </div>

              <div className="overflow-hidden rounded-2xl border border-line shadow-soft" style={{ aspectRatio: "4/3" }}>
                <iframe
                  src={`https://www.google.com/maps?q=${encodeURIComponent(
                    `${company.address.street} ${company.address.postalCode} ${company.address.city}`,
                  )}&output=embed`}
                  title={`Plan d'accès à ${company.brandName}, ${company.address.street} ${company.address.postalCode} ${company.address.city}`}
                  loading="lazy"
                  className="h-full w-full border-0"
                  aria-label="Carte Google Maps de nos locaux"
                />
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Button
                  href={mapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="copper"
                  size="md"
                  className="flex-1 justify-center"
                >
                  <MapPin className="h-4 w-4" aria-hidden />
                  Obtenir l'itinéraire
                </Button>
                <ButtonLink
                  href={company.contact.phoneHref}
                  variant="outline"
                  size="md"
                  className="flex-1 justify-center"
                >
                  <Phone className="h-4 w-4" aria-hidden />
                  {company.contact.phone}
                </ButtonLink>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Bandeau de réassurance */}
      <section className="border-y border-line bg-cream-200">
        <Container className="py-12 sm:py-14">
          <Reveal>
            <h2 className="mb-8 text-xs font-bold uppercase tracking-[0.18em] text-copper">
              Ce que vous pouvez attendre
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {reassuranceItems.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.06}>
                <div className="flex flex-col gap-2">
                  <span className="accent-line" aria-hidden />
                  <h3 className="text-sm font-bold text-anthracite">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTABand
        title="Préférez un devis écrit ?"
        text="Remplissez le formulaire en ligne — réponse personnalisée sous 24 h ouvrées, sans engagement."
      />
    </>
  );
}
