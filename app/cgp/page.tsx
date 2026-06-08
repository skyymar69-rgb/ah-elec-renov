import type { Metadata } from "next";
import Link from "next/link";
import { LegalShell } from "@/components/legal/LegalShell";
import { company } from "@/content/company";

export const metadata: Metadata = {
  title: "Conditions générales de prestation",
  description:
    "Conditions générales de prestation (devis, exécution, paiement, garanties) — AH ELEC RENOV.",
  robots: { index: false, follow: true },
};

export default function CGPPage() {
  const { contact, legal } = company;

  return (
    <LegalShell
      eyebrow="CGP"
      title="Conditions générales de prestation"
      updated="juin 2026"
    >
      <p>
        Les présentes conditions générales de prestation (les « CGP »)
        s'appliquent à l'ensemble des prestations d'électricité et de rénovation
        intérieure réalisées par <strong>{company.brandName}</strong> (le
        « Prestataire ») au bénéfice de ses clients (le « Client »), sauf
        conditions particulières acceptées par écrit. Toute commande implique
        l'adhésion entière et sans réserve aux présentes CGP.
      </p>

      <h2>1. Devis</h2>
      <p>
        Toute prestation fait l'objet d'un devis gratuit, détaillé et nominatif,
        établi après étude du besoin et, le plus souvent, visite sur site. Le
        devis précise la nature des travaux, le prix et les délais indicatifs. Il
        est valable <strong>30 jours</strong> à compter de son émission, sauf
        mention contraire. La prestation est réputée commandée à compter de la
        signature du devis par le Client, portant la mention « bon pour accord ».
      </p>

      <h2>2. Prix &amp; modalités de paiement</h2>
      <p>
        Les prix sont indiqués en euros. Le régime de TVA applicable (notamment
        les taux réduits de 10 % ou 5,5 % pour certains travaux de rénovation de
        logements de plus de deux ans) est précisé sur le devis, sous réserve de
        la remise par le Client de l'attestation requise.
      </p>
      <ul>
        <li>
          Un <strong>acompte</strong> peut être demandé à la commande, le solde
          étant exigible à la réception des travaux ou selon l'échéancier prévu
          au devis.
        </li>
        <li>
          En cas de retard de paiement, des pénalités au taux légal en vigueur
          ainsi que l'indemnité forfaitaire de recouvrement (40 €) pourront être
          appliquées, après mise en demeure restée sans effet.
        </li>
      </ul>

      <h2>3. Exécution des travaux</h2>
      <p>
        Le Prestataire s'engage à exécuter les travaux dans les règles de l'art
        et dans le respect des normes en vigueur, notamment la norme{" "}
        <strong>NF C 15-100</strong> pour les installations électriques. Le
        Client s'engage à permettre l'accès aux lieux et à fournir les
        informations nécessaires. Les délais sont donnés à titre indicatif ; un
        retard raisonnable ne peut donner lieu à indemnité ou annulation.
      </p>

      <h2>4. Réception des travaux</h2>
      <p>
        La réception est l'acte par lequel le Client déclare accepter les
        travaux. Elle est prononcée contradictoirement, avec ou sans réserves, et
        peut donner lieu à un procès-verbal. Le cas échéant, l'attestation de
        conformité (Consuel) est remise au Client.
      </p>

      <h2>5. Droit de rétractation</h2>
      <p>
        Pour les contrats conclus hors établissement (par exemple à votre
        domicile) avec un Client consommateur, ce dernier dispose d'un délai de
        rétractation de <strong>quatorze (14) jours</strong>, conformément aux
        articles L.221-18 et suivants du Code de la consommation, au moyen du
        formulaire type qui lui est remis. Lorsque le Client demande expressément
        l'exécution des travaux avant la fin de ce délai, il en est informé et
        reste redevable des prestations déjà réalisées.
      </p>

      <h2>6. Garanties légales</h2>
      <p>Les prestations bénéficient des garanties légales applicables :</p>
      <ul>
        <li>
          <strong>Garantie de parfait achèvement</strong> (1 an) couvrant les
          désordres signalés à la réception ou dans l'année qui suit.
        </li>
        <li>
          <strong>Garantie biennale</strong> de bon fonctionnement (2 ans) sur
          les éléments d'équipement dissociables.
        </li>
        <li>
          <strong>Garantie décennale</strong> (10 ans) sur les ouvrages, au titre
          de l'assurance de responsabilité décennale souscrite par le
          Prestataire. {legal.decennale}
        </li>
      </ul>

      <h2>7. Réclamations &amp; médiation</h2>
      <p>
        Toute réclamation peut être adressée à{" "}
        <a href={`mailto:${contact.email}`}>{contact.email}</a> ou par téléphone
        au <a href={contact.phoneHref}>{contact.phone}</a>. À défaut de
        résolution amiable, le Client consommateur peut recourir gratuitement au
        médiateur de la consommation compétent (voir les{" "}
        <Link href="/mentions-legales">mentions légales</Link>).
      </p>

      <h2>8. Droit applicable</h2>
      <p>
        Les présentes CGP sont soumises au droit français. En cas de litige, et
        après recherche d'une solution amiable, compétence est attribuée aux
        tribunaux français compétents, sous réserve des règles protectrices du
        consommateur.
      </p>
    </LegalShell>
  );
}
