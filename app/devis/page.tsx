import type { Metadata } from "next";
import {
  Phone,
  ReceiptText,
  ShieldCheck,
  UserCheck,
  MapPin,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { PageHero } from "@/components/shared/PageHero";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { Reveal } from "@/components/shared/Reveal";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd } from "@/lib/structured-data";
import { DevisForm } from "@/components/devis/DevisForm";
import { company } from "@/content/company";

export const metadata: Metadata = {
  title: "Devis gratuit — électricité & rénovation",
  description:
    "Demandez un devis gratuit à AH ELEC RENOV. Électricité, salle de bain, cuisine, rénovation complète dans l'ouest lyonnais. Réponse rapide, sans engagement.",
};

const breadcrumbItems = [
  { name: "Accueil", path: "/" },
  { name: "Devis gratuit", path: "/devis" },
];

const reassuranceSidebar = [
  {
    icon: ReceiptText,
    title: "Devis 100 % gratuit",
    text: "Aucuns frais pour l'établissement et la remise du devis, même en cas de déplacement sur chantier.",
  },
  {
    icon: ShieldCheck,
    title: "Assurance décennale",
    text: "Tous les travaux sont couverts par une assurance décennale. Vous êtes protégé pendant 10 ans.",
  },
  {
    icon: UserCheck,
    title: "Un seul interlocuteur",
    text: "Hocine ASLI suit votre dossier du premier contact à la réception. Pas d'intermédiaire.",
  },
  {
    icon: MapPin,
    title: "Secteur ouest lyonnais",
    text: "Francheville, Tassin, Écully, Sainte-Foy, Lyon 5e et 9e — pas de frais de déplacement dans le secteur.",
  },
];

export default function DevisPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(breadcrumbItems)} />

      <PageHero
        eyebrow="Devis gratuit"
        title="Demandez votre devis gratuit"
        intro="Réponse rapide, sans engagement. Décrivez votre projet et recevez une estimation personnalisée sous 24 h ouvrées."
      />

      <Breadcrumbs items={breadcrumbItems} />

      <section className="bg-cream-200">
        <Container className="py-16 sm:py-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_360px] lg:gap-16 xl:grid-cols-[1fr_380px]">

            {/* Colonne principale — formulaire */}
            <Reveal>
              <div className="rounded-2xl border border-line bg-white px-6 py-8 shadow-soft sm:px-8 sm:py-10">
                <div className="mb-8 border-b border-line pb-6">
                  <h2 className="text-xl font-bold text-anthracite sm:text-2xl">
                    Votre projet en quelques lignes
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    Plus votre description est précise, plus le devis sera fidèle à
                    la réalité du chantier.
                  </p>
                </div>
                <DevisForm />
              </div>
            </Reveal>

            {/* Colonne latérale — réassurance */}
            <aside aria-label="Pourquoi choisir AH ELEC RENOV">
              <div className="sticky top-8 space-y-5">
                {/* Appel direct */}
                <Reveal className="rounded-2xl border border-line bg-anthracite px-5 py-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-copper-300">
                    Préférez parler directement ?
                  </p>
                  <p className="mt-2 text-base font-bold text-cream">
                    Appelez Hocine ASLI
                  </p>
                  <p className="mt-1 text-sm text-cream/70">{company.hours}</p>
                  <div className="mt-5 flex flex-col gap-3">
                    <ButtonLink
                      href={company.contact.phoneHref}
                      variant="copper"
                      size="md"
                      className="justify-center"
                    >
                      <Phone className="h-4 w-4" aria-hidden />
                      {company.contact.phone}
                    </ButtonLink>
                    <ButtonLink
                      href={company.contact.phoneFixedHref}
                      variant="outline-light"
                      size="md"
                      className="justify-center"
                    >
                      <Phone className="h-4 w-4" aria-hidden />
                      {company.contact.phoneFixed}
                    </ButtonLink>
                  </div>
                </Reveal>

                {/* Points de réassurance */}
                <ul role="list" className="space-y-4">
                  {reassuranceSidebar.map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <Reveal key={item.title} as="li" delay={i * 0.05}>
                        <div className="flex items-start gap-4 rounded-2xl border border-line bg-white px-5 py-4 shadow-soft">
                          <span
                            className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-copper/10 text-copper"
                            aria-hidden
                          >
                            <Icon className="h-4 w-4" strokeWidth={1.8} />
                          </span>
                          <div>
                            <p className="text-sm font-bold text-anthracite">
                              {item.title}
                            </p>
                            <p className="mt-1 text-xs leading-relaxed text-muted">
                              {item.text}
                            </p>
                          </div>
                        </div>
                      </Reveal>
                    );
                  })}
                </ul>

                {/* Délai */}
                <Reveal className="rounded-2xl border border-copper/20 bg-copper/5 px-5 py-4">
                  <div className="flex items-start gap-3">
                    <span className="accent-line mt-1" aria-hidden />
                    <div>
                      <p className="text-sm font-bold text-anthracite">
                        Délai de réponse
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-muted">
                        Votre demande est lue le jour même. Un retour sous 24 h
                        ouvrées, avec un rendez-vous de visite si nécessaire.
                      </p>
                    </div>
                  </div>
                </Reveal>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
