import type { Metadata } from "next";
import Link from "next/link";
import { LegalShell, Field } from "@/components/legal/LegalShell";
import { company, agency } from "@/content/company";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site AH ELEC RENOV.",
  // noindex tant que les identifiants légaux ne sont pas confirmés.
  robots: { index: false, follow: true },
};

export default function MentionsLegalesPage() {
  const { legal, address, contact } = company;

  return (
    <LegalShell
      eyebrow="Informations légales"
      title="Mentions légales"
      updated="juin 2026"
    >
      <p>
        Conformément à l'article 6 III-1 de la loi n° 2004-575 du 21 juin 2004
        pour la confiance dans l'économie numérique (LCEN), les utilisateurs du
        site sont informés de l'identité des différents intervenants dans le
        cadre de sa réalisation et de son suivi.
      </p>

      <h2>1. Éditeur du site</h2>
      <p>Le site est édité par :</p>
      <dl>
        <dt>Raison sociale</dt>
        <dd>
          <Field value={legal.raisonSociale || company.brandName} hint="raison sociale officielle (Kbis)" />
        </dd>
        <dt>Forme juridique &amp; capital</dt>
        <dd>
          <Field value={legal.form} hint="ex. EURL / SASU au capital de X €" />
        </dd>
        <dt>Siège social</dt>
        <dd>
          {address.street}, {address.postalCode} {address.city},{" "}
          {address.country}
        </dd>
        <dt>SIREN</dt>
        <dd>
          <Field value={legal.siren} hint="n° SIREN" />
        </dd>
        <dt>SIRET (siège)</dt>
        <dd>
          <Field value={legal.siret} hint="n° SIRET" />
        </dd>
        <dt>RCS</dt>
        <dd>
          <Field value={legal.rcs} hint="ville + n° RCS" />
        </dd>
        <dt>N° TVA intracommunautaire</dt>
        <dd>
          <Field value={legal.tva} hint="n° TVA" />
        </dd>
        <dt>Code APE / NAF</dt>
        <dd>
          <Field value={legal.ape} hint="code APE" />
        </dd>
        <dt>Téléphone</dt>
        <dd>
          <a href={contact.phoneHref}>{contact.phone}</a>
          {contact.phoneFixed ? (
            <>
              {" "}— <a href={contact.phoneFixedHref}>{contact.phoneFixed}</a>
            </>
          ) : null}
        </dd>
        <dt>Courriel</dt>
        <dd>
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
        </dd>
      </dl>

      <h2>2. Directeur de la publication</h2>
      <p>
        Le directeur de la publication est{" "}
        <strong>{company.director}</strong>, en qualité de{" "}
        {company.directorRole.toLowerCase()}.
      </p>

      <h2>3. Hébergeur</h2>
      <p>Le site est hébergé par :</p>
      <dl>
        <dt>{legal.host.name}</dt>
        <dd>{legal.host.address}</dd>
        <dd>
          <a href={legal.host.url} target="_blank" rel="noopener noreferrer">
            {legal.host.url}
          </a>
        </dd>
      </dl>

      <h2>4. Assurances professionnelles</h2>
      <p>
        Conformément à la réglementation applicable aux professionnels du
        bâtiment, l'éditeur a souscrit les assurances suivantes :
      </p>
      <dl>
        <dt>Assurance de responsabilité décennale</dt>
        <dd>
          <Field
            value={legal.decennale}
            hint="assureur + n° de contrat + couverture géographique"
          />
        </dd>
        <dt>Responsabilité civile professionnelle (RC Pro)</dt>
        <dd>
          <Field value={legal.rcPro} hint="assureur + zone de couverture" />
        </dd>
      </dl>

      <h2>5. Médiation de la consommation</h2>
      <p>
        Conformément aux articles L.611-1 et suivants du Code de la
        consommation, tout consommateur a le droit de recourir gratuitement à un
        médiateur de la consommation en vue de la résolution amiable d'un litige
        l'opposant à un professionnel. L'éditeur relève du médiateur suivant :
      </p>
      <dl>
        <dt>Médiateur de la consommation</dt>
        <dd>
          <Field value={legal.mediator.name} hint="nom du médiateur" />
        </dd>
        <dt>Site internet</dt>
        <dd>
          {legal.mediator.url ? (
            <a href={legal.mediator.url} target="_blank" rel="noopener noreferrer">
              {legal.mediator.url}
            </a>
          ) : (
            <Field value="" hint="URL du médiateur" />
          )}
        </dd>
      </dl>
      <p>
        Le consommateur peut également utiliser la plateforme européenne de
        règlement en ligne des litiges (RLL) :{" "}
        <a
          href="https://ec.europa.eu/consumers/odr"
          target="_blank"
          rel="noopener noreferrer"
        >
          ec.europa.eu/consumers/odr
        </a>
        .
      </p>

      <h2>6. Propriété intellectuelle</h2>
      <p>
        L'ensemble des éléments du site (structure, textes, visuels, logo,
        graphismes, éléments sonores ou logiciels) est protégé par le droit de
        la propriété intellectuelle. Toute reproduction, représentation,
        modification ou exploitation, totale ou partielle, sans l'autorisation
        écrite préalable de l'éditeur, est interdite et constitue une
        contrefaçon. Les photographies de chantiers, lorsqu'elles représentent
        des biens de clients, sont publiées avec leur accord.
      </p>

      <h2>7. Données personnelles &amp; cookies</h2>
      <p>
        Le traitement de vos données personnelles est détaillé dans notre{" "}
        <Link href="/politique-confidentialite">
          politique de confidentialité
        </Link>
        . La gestion des cookies y est également décrite.
      </p>

      <h2>8. Conditions d'utilisation &amp; de prestation</h2>
      <p>
        L'utilisation du site est régie par nos{" "}
        <Link href="/cgu">conditions générales d'utilisation</Link>. Les
        prestations réalisées par l'éditeur sont encadrées par ses{" "}
        <Link href="/cgp">conditions générales de prestation</Link>.
      </p>

      <h2>9. Accessibilité</h2>
      <p>
        L'éditeur s'engage à rendre ce site accessible au plus grand nombre,
        conformément à l'European Accessibility Act et aux référentiels RGAA et
        WCAG 2.1 niveau AA (contrastes, navigation au clavier, alternatives
        textuelles, etc.). Pour signaler une difficulté d'accès à un contenu,
        contactez-nous à l'adresse{" "}
        <a href={`mailto:${contact.email}`}>{contact.email}</a>.
      </p>

      <h2>10. Crédits</h2>
      <p>
        Conception et réalisation du site :{" "}
        <a href={agency.url} target="_blank" rel="noopener noreferrer">
          {agency.name}
        </a>{" "}
        — {agency.address} — {agency.email}.
      </p>
    </LegalShell>
  );
}
