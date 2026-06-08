import type { Metadata } from "next";
import Link from "next/link";
import { LegalShell, Field } from "@/components/legal/LegalShell";
import { company } from "@/content/company";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Politique de confidentialité et traitement des données personnelles — AH ELEC RENOV (RGPD).",
  robots: { index: false, follow: true },
};

export default function PolitiqueConfidentialitePage() {
  const { contact, legal } = company;

  return (
    <LegalShell
      eyebrow="RGPD"
      title="Politique de confidentialité"
      updated="juin 2026"
    >
      <p>
        La présente politique décrit la manière dont{" "}
        <strong>{company.brandName}</strong> collecte et traite vos données
        personnelles, conformément au Règlement général sur la protection des
        données (RGPD — UE 2016/679) et à la loi « Informatique et Libertés »
        modifiée.
      </p>

      <h2>1. Responsable du traitement</h2>
      <p>
        Le responsable du traitement est {company.brandName}, dont les
        coordonnées figurent dans les{" "}
        <Link href="/mentions-legales">mentions légales</Link>. Pour toute
        question relative à vos données :{" "}
        <a href={`mailto:${contact.email}`}>{contact.email}</a> —{" "}
        <a href={contact.phoneHref}>{contact.phone}</a>.
      </p>

      <h2>2. Données collectées</h2>
      <p>Nous collectons uniquement les données nécessaires :</p>
      <ul>
        <li>
          <strong>Via le formulaire de demande de devis / contact :</strong> nom,
          adresse e-mail, numéro de téléphone, commune, nature et description du
          projet, et toute information que vous choisissez de nous transmettre.
        </li>
        <li>
          <strong>Lors d'un échange direct</strong> (téléphone, e-mail) : les
          informations nécessaires au traitement de votre demande.
        </li>
        <li>
          <strong>Données techniques</strong> : voir la section « Cookies » ci-dessous.
        </li>
      </ul>
      <p>
        Aucune donnée dite « sensible » n'est demandée. Les champs obligatoires
        sont signalés dans les formulaires ; à défaut, votre demande ne pourra
        être traitée.
      </p>

      <h2>3. Finalités &amp; bases légales</h2>
      <ul>
        <li>
          <strong>Répondre à vos demandes de devis et de contact</strong> —
          base légale : mesures précontractuelles prises à votre demande
          (art. 6.1.b RGPD).
        </li>
        <li>
          <strong>Assurer le suivi de la relation client</strong> et de nos
          obligations légales (comptables, fiscales) — base légale : obligation
          légale et intérêt légitime (art. 6.1.c et 6.1.f RGPD).
        </li>
        <li>
          <strong>Améliorer le site</strong> (mesure d'audience) — base légale :
          votre consentement (art. 6.1.a RGPD), le cas échéant.
        </li>
      </ul>

      <h2>4. Destinataires</h2>
      <p>
        Vos données sont destinées exclusivement à {company.brandName} et ne
        sont jamais vendues. Elles peuvent être traitées par nos sous-traitants
        techniques agissant sur instruction (hébergeur{" "}
        {legal.host.name}, prestataire d'envoi des e-mails du formulaire),
        dans le respect du RGPD. En cas de transfert hors Union européenne, des
        garanties appropriées (clauses contractuelles types) sont mises en
        place.
      </p>

      <h2>5. Durées de conservation</h2>
      <ul>
        <li>
          <strong>Demandes de devis / prospects sans suite :</strong> jusqu'à 3
          ans à compter du dernier contact.
        </li>
        <li>
          <strong>Clients :</strong> durée de la relation contractuelle, puis
          archivage selon les obligations légales (jusqu'à 10 ans pour les
          documents comptables).
        </li>
        <li>
          <strong>Cookies de mesure d'audience :</strong> 13 mois maximum.
        </li>
      </ul>

      <h2>6. Vos droits</h2>
      <p>
        Vous disposez des droits d'accès, de rectification, d'effacement, de
        limitation, d'opposition et de portabilité de vos données, ainsi que du
        droit de définir des directives relatives à leur sort après votre décès.
        Vous pouvez exercer ces droits à tout moment par e-mail à{" "}
        <a href={`mailto:${contact.email}`}>{contact.email}</a>, en justifiant
        de votre identité.
      </p>
      <p>
        Vous pouvez également introduire une réclamation auprès de la CNIL :{" "}
        <a
          href="https://www.cnil.fr"
          target="_blank"
          rel="noopener noreferrer"
        >
          www.cnil.fr
        </a>{" "}
        — 3 place de Fontenoy, TSA 80715, 75334 Paris Cedex 07.
      </p>

      <h2>7. Cookies</h2>
      <p>
        Lors de votre première visite, un bandeau vous informe de l'utilisation
        éventuelle de cookies. Le site ne dépose <strong>aucun cookie de suivi
        non essentiel sans votre consentement</strong>. Seuls les éléments
        strictement nécessaires au fonctionnement du site sont utilisés sans
        consentement préalable. Vous pouvez à tout moment retirer votre
        consentement ou paramétrer votre navigateur pour bloquer les cookies.
      </p>
      <dl>
        <dt>Mesure d'audience (le cas échéant)</dt>
        <dd>
          <Field
            value=""
            hint="préciser l'outil utilisé (ex. Vercel Analytics / Plausible) une fois activé"
          />
        </dd>
      </dl>

      <h2>8. Sécurité</h2>
      <p>
        Nous mettons en œuvre des mesures techniques et organisationnelles
        appropriées (connexion chiffrée HTTPS, accès restreints) afin de
        protéger vos données contre tout accès, altération ou divulgation non
        autorisés.
      </p>
    </LegalShell>
  );
}
