import type { Metadata } from "next";
import Link from "next/link";
import { LegalShell } from "@/components/legal/LegalShell";
import { company } from "@/content/company";

export const metadata: Metadata = {
  title: "Conditions générales d'utilisation",
  description:
    "Conditions générales d'utilisation du site AH ELEC RENOV.",
  robots: { index: false, follow: true },
};

export default function CGUPage() {
  return (
    <LegalShell
      eyebrow="CGU"
      title="Conditions générales d'utilisation"
      updated="juin 2026"
    >
      <p>
        Les présentes conditions générales d'utilisation (les « CGU ») régissent
        l'accès et l'utilisation du site {company.brandName} (le « Site »). En
        accédant au Site, l'utilisateur accepte sans réserve les présentes CGU.
      </p>

      <h2>1. Objet du Site</h2>
      <p>
        Le Site est un site vitrine présentant les prestations d'électricité et
        de rénovation intérieure de {company.brandName} et permettant aux
        visiteurs de demander un devis ou de prendre contact. Il n'effectue
        aucune vente en ligne.
      </p>

      <h2>2. Accès au Site</h2>
      <p>
        Le Site est accessible gratuitement à tout utilisateur disposant d'un
        accès à Internet. Tous les coûts afférents à l'accès (matériel,
        connexion) sont à la charge de l'utilisateur. {company.brandName}{" "}
        s'efforce d'assurer la disponibilité du Site 24h/24, mais ne saurait
        être tenue responsable d'une indisponibilité, notamment pour maintenance,
        mise à jour ou cause de force majeure.
      </p>

      <h2>3. Comportement de l'utilisateur</h2>
      <p>
        L'utilisateur s'engage à utiliser le Site conformément à la loi et aux
        présentes CGU. Il s'interdit notamment de porter atteinte au
        fonctionnement du Site, d'y introduire un contenu illicite, ou de
        transmettre, via les formulaires, des informations fausses ou des
        données concernant des tiers sans leur accord.
      </p>

      <h2>4. Propriété intellectuelle</h2>
      <p>
        L'ensemble des contenus du Site est protégé. Toute reproduction non
        autorisée est interdite, dans les conditions précisées dans les{" "}
        <Link href="/mentions-legales">mentions légales</Link>.
      </p>

      <h2>5. Liens hypertextes</h2>
      <p>
        Le Site peut contenir des liens vers des sites tiers. {company.brandName}{" "}
        n'exerce aucun contrôle sur ces sites et décline toute responsabilité
        quant à leur contenu ou à leur politique de confidentialité.
      </p>

      <h2>6. Responsabilité</h2>
      <p>
        Les informations diffusées sur le Site sont fournies à titre indicatif et
        peuvent être modifiées à tout moment. Elles ne constituent pas un
        engagement contractuel ; seul un devis signé fait foi (voir les{" "}
        <Link href="/cgp">conditions générales de prestation</Link>).{" "}
        {company.brandName} ne saurait être tenue responsable d'un dommage
        résultant de l'utilisation du Site ou de l'impossibilité d'y accéder.
      </p>

      <h2>7. Données personnelles &amp; cookies</h2>
      <p>
        Le traitement des données et la gestion des cookies sont décrits dans la{" "}
        <Link href="/politique-confidentialite">
          politique de confidentialité
        </Link>
        .
      </p>

      <h2>8. Droit applicable</h2>
      <p>
        Les présentes CGU sont soumises au droit français. Tout litige relatif à
        leur interprétation ou à leur exécution relève des tribunaux français
        compétents, sous réserve des dispositions protectrices du consommateur.
      </p>
    </LegalShell>
  );
}
