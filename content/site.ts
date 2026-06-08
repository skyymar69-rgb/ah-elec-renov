/** Navigation, zone d'intervention, étapes, réassurance — contenu éditorial. */

export const nav = [
  { label: "Services", href: "/services" },
  { label: "Réalisations", href: "/realisations" },
  { label: "À propos", href: "/a-propos" },
  { label: "Zone d'intervention", href: "/zone-intervention" },
  { label: "Contact", href: "/contact" },
] as const;

/** Communes desservies — secteur ouest lyonnais. Francheville = siège. */
export const interventionZones = [
  "Francheville",
  "Tassin-la-Demi-Lune",
  "Charbonnières-les-Bains",
  "Écully",
  "Sainte-Foy-lès-Lyon",
  "Craponne",
  "Marcy-l'Étoile",
  "La Tour-de-Salvagny",
  "Lyon 5e",
  "Lyon 9e",
] as const;

/** Bandeau de réassurance (home + pages). */
export const reassurances = [
  "Devis gratuit",
  "Assurance décennale",
  "Intervention rapide secteur ouest lyonnais",
  "Mise aux normes NF C 15-100",
] as const;

/** Arguments « Pourquoi AH ELEC RENOV ». */
export const whyUs = [
  {
    title: "Un seul interlocuteur",
    text: "De l'électricité aux finitions, vous traitez avec une seule personne, du devis à la réception.",
  },
  {
    title: "Pas de sous-traitance opaque",
    text: "Le travail est réalisé par l'artisan, sans intermédiaire ni surprise.",
  },
  {
    title: "Proximité",
    text: "Proche de vous dans l'agglomération lyonnaise, j'interviens vite sur tout le secteur ouest.",
  },
  {
    title: "Travail aux normes",
    text: "Électricité conforme NF C 15-100, attestation Consuel, soin du détail.",
  },
] as const;

/** Étapes de collaboration. */
export const steps = [
  {
    n: "01",
    title: "Contact",
    text: "Vous me décrivez votre projet par téléphone ou via le formulaire.",
  },
  {
    n: "02",
    title: "Visite & devis gratuit",
    text: "Je me déplace, j'évalue le chantier et vous remets un devis détaillé gratuit.",
  },
  {
    n: "03",
    title: "Réalisation",
    text: "Les travaux sont menés dans le respect des délais et des normes.",
  },
  {
    n: "04",
    title: "Réception conforme",
    text: "On valide ensemble le chantier ; attestation Consuel si nécessaire.",
  },
] as const;
