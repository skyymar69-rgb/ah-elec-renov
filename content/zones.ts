/**
 * Communes couvertes par AH ELEC RENOV — secteur ouest lyonnais.
 * Chaque entrée fournit un slug URL, un code postal et un blurb SEO
 * (2 phrases max, ton informatif, sans bourrage de mots-clés).
 */

export interface ZoneCommune {
  name: string;
  slug: string;
  postalCode: string;
  blurb: string;
}

export const zones: ZoneCommune[] = [
  {
    name: "Lyon 9e",
    slug: "lyon-9e",
    postalCode: "69009",
    blurb:
      "C'est depuis le 9e arrondissement que l'artisan intervient au quotidien : mise aux normes électriques, rénovation de cuisine ou de salle de bain, à deux pas des quais de Saône. Devis sur place sous 48 h.",
  },
  {
    name: "Lyon 5e",
    slug: "lyon-5e",
    postalCode: "69005",
    blurb:
      "Entre Fourvière et Saint-Jean, le 5e concentre de beaux appartements anciens qui nécessitent souvent une mise en conformité électrique complète. Rénovation intérieure et électricité traités en un seul chantier.",
  },
  {
    name: "Francheville",
    slug: "francheville",
    postalCode: "69340",
    blurb:
      "À quelques minutes de Lyon, Francheville est au coeur du secteur d'intervention : électricité générale, rénovation de pièces, tableaux électriques. Artisan disponible rapidement pour les urgences.",
  },
  {
    name: "Tassin-la-Demi-Lune",
    slug: "tassin-la-demi-lune",
    postalCode: "69160",
    blurb:
      "Tassin est l'une des communes les plus demandées pour la rénovation de maisons individuelles et d'appartements. Electricien qualifié pour les mises aux normes NF C 15-100 et les extensions de circuit.",
  },
  {
    name: "Charbonnières-les-Bains",
    slug: "charbonnieres-les-bains",
    postalCode: "69260",
    blurb:
      "Dans ce secteur résidentiel calme, les projets de rénovation complète (électricité, plâtrerie, peinture) sont fréquents. Un seul interlocuteur pour coordonner l'ensemble des corps de métier.",
  },
  {
    name: "Écully",
    slug: "ecully",
    postalCode: "69130",
    blurb:
      "Écully accueille de nombreuses villas et copropriétés avec des installations électriques vieillissantes. Rénovation partielle ou complète, diagnostic électrique et attestation Consuel disponibles.",
  },
  {
    name: "Sainte-Foy-lès-Lyon",
    slug: "sainte-foy-les-lyon",
    postalCode: "69110",
    blurb:
      "Sainte-Foy concentre un parc immobilier varié, des maisons de ville aux résidences récentes. Interventions en électricité courante forte et courant faible, ainsi qu'en rénovation de salles de bain.",
  },
  {
    name: "Craponne",
    slug: "craponne",
    postalCode: "69290",
    blurb:
      "À Craponne et ses alentours, la demande porte souvent sur des rénovations de cuisines et des remises aux normes de tableaux anciens. Devis gratuit sur place, délais respectés.",
  },
  {
    name: "Marcy-l'Étoile",
    slug: "marcy-letoile",
    postalCode: "69280",
    blurb:
      "Commune verdoyante du plateau lyonnais, Marcy-l'Étoile voit de nombreux projets de rénovation de maisons individuelles. Electricien de proximité pour l'installation et la mise aux normes.",
  },
  {
    name: "La Tour-de-Salvagny",
    slug: "la-tour-de-salvagny",
    postalCode: "69890",
    blurb:
      "La Tour-de-Salvagny, aux portes du Beaujolais, fait partie du périmètre d'intervention régulier. Rénovation intérieure clé en main et travaux électriques pour maisons et résidences.",
  },
];
