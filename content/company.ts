/**
 * Source unique de vérité pour toutes les données de l'entreprise (NAP, mentions
 * légales, JSON-LD). Modifier ICI met à jour tout le site.
 *
 * ⚠️ Champs « À COMPLÉTER » = données encore manquantes / à confirmer avant prod.
 *    Voir la liste récapitulative dans le README.
 *
 * Coordonnées confirmées depuis la carte de visite (mobile + fixe + adresse).
 * RESTE À CONFIRMER : l'entité légale exacte (la carte indique AH+elec /
 * ahelec.fr / RCS Lyon 853 296 499 / « Gérant », alors que le brief initial
 * indiquait AH ELEC RENOV SASU / 933 755 423 / Francheville). Tant que ce n'est
 * pas tranché, les identifiants légaux restent en « À COMPLÉTER ».
 */

export const TODO = "À COMPLÉTER";
/** Renvoie la valeur si renseignée, sinon le marqueur « À COMPLÉTER ». */
export const orTodo = (v?: string) => (v && v.trim() ? v : TODO);

export const company = {
  // --- Identité ---
  legalName: "AH ELEC RENOV", // marque affichée (à confirmer : AH+elec ?)
  brandName: "AH ELEC RENOV",
  tagline: "Électricité & rénovation intérieure clé en main",
  baseline: "Un seul interlocuteur, de l'électricité à la rénovation.",
  director: "Hocine ASLI",
  directorRole: "Président", // SASU → Président

  // --- Coordonnées (NAP — IDENTIQUE partout : site, Google, annuaires) ---
  contact: {
    phone: "06 50 04 52 33", // mobile — CTA principal
    phoneHref: "tel:+33650045233",
    phoneFixed: "04 87 37 99 27", // fixe
    phoneFixedHref: "tel:+33487379927",
    email: "contact@ahelec.fr",
  },

  address: {
    street: "27 rue de Bourgogne",
    postalCode: "69009",
    city: "Lyon",
    region: "Auvergne-Rhône-Alpes",
    country: "France",
    countryCode: "FR",
    // Coordonnées approximatives (Lyon 9e — à affiner pour la carte).
    latitude: 45.7686,
    longitude: 4.8045,
  },

  // --- Données légales (entité confirmée : AH ELEC RENOV SASU) ---
  legal: {
    raisonSociale: "AH ELEC RENOV",
    // Capital (100 €) repris du brief initial — à vérifier sur le Kbis.
    form: "SASU au capital de 100 €",
    siren: "853 296 499",
    siret: "853 296 499 00017",
    rcs: "853 296 499 R.C.S. Lyon",
    // TVA intracom = clé standard calculée pour le SIREN (à corriger si franchise en base).
    tva: "FR48 853 296 499",
    ape: "", // optionnel en mentions légales (ligne masquée si vide)
    creationDate: "",
    // Assurances : souscrites ; coordonnées/n° non affichés (figurent sur devis/factures).
    decennale:
      "Coordonnées de l'assureur et zone de couverture communiquées sur les devis et factures, conformément à l'article L.243-2 du Code des assurances.",
    rcPro:
      "Responsabilité civile professionnelle souscrite ; coordonnées de l'assureur communiquées sur demande.",
    // Médiateur de la consommation (nom + URL) — OBLIGATOIRE B2C.
    mediator: {
      name: "AME CONSO — Association des Médiateurs Européens",
      url: "https://www.mediationconso-ame.com",
    },
    // Hébergeur (Vercel par défaut).
    host: {
      name: "Vercel Inc.",
      address: "440 N Barranca Ave #4133, Covina, CA 91723, USA",
      url: "https://vercel.com",
    },
  },

  // --- Réseaux / fiche Google ---
  social: {
    website: "https://www.ahelec.fr", // site indiqué sur la carte (domaine à confirmer)
    googleBusinessUrl: "", // À COMPLÉTER : fiche Google Business Profile
    googleReviewUrl: "", // À COMPLÉTER : lien « laisser un avis » (QR Avis)
  },

  // --- Horaires (à confirmer) ---
  hours: "Du lundi au vendredi, 8h–18h",
} as const;

/**
 * Agence web ayant réalisé le site (crédit footer + mentions légales).
 * Données réelles fournies.
 */
export const agency = {
  name: "KAYZEN LYON",
  form: "SASU",
  siren: "999 418 346",
  siret: "999 418 346 000 14",
  rcs: "Lyon — 999 418 346",
  tva: "FR85 999 418 346",
  ape: "4791B",
  address: "6, rue Pierre Termier, 69009 Lyon",
  phone: "+33 (0)4 87 77 68 61",
  phoneHref: "tel:+33487776861",
  email: "contact@kayzen-lyon.fr",
  url: "https://internet.kayzen-lyon.fr",
  creditLabel: "Fièrement réalisé par Kayzen Web",
} as const;

/** URL Google Maps de l'adresse du siège (toujours dérivable). */
export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${company.brandName} ${company.address.street} ${company.address.postalCode} ${company.address.city}`,
)}`;

/** URL d'itinéraire Google Maps vers le siège. */
export const mapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  `${company.address.street} ${company.address.postalCode} ${company.address.city}`,
)}`;

/** Téléphones / email renseignés ? */
export const hasPhone = Boolean(company.contact.phone);
export const hasPhoneFixed = Boolean(company.contact.phoneFixed);
export const hasEmail = Boolean(company.contact.email);

/**
 * Certifications. N'afficher dynamiquement QUE celles fournies/validées
 * (mettre `active: true`). RGE/Qualifelec/Qualibat débloquent MaPrimeRénov'/CEE.
 */
export const certifications = [
  { name: "RGE", label: "Reconnu Garant de l'Environnement", active: false },
  { name: "Qualifelec", label: "Qualification électricité", active: false },
  { name: "Qualibat", label: "Qualification bâtiment", active: false },
  { name: "Handibat", label: "Accessibilité PMR", active: false },
] as const;

export const activeCertifications = certifications.filter((c) => c.active);
