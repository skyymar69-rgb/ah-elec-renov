/**
 * Les 5 prestations. Chaque service = une landing SEO autonome (Phase 2).
 * En Phase 1 on s'en sert pour la grille de la home.
 */

export type Service = {
  slug: string;
  title: string;
  short: string; // accroche courte (cards home)
  description: string; // intro métier (page service)
  icon: ServiceIcon;
  highlights: string[]; // prestations clés
  image?: string; // visuel (carte bento large)
};

export type ServiceIcon =
  | "zap"
  | "hammer"
  | "shower"
  | "cooking"
  | "pipe";

export const services: Service[] = [
  {
    slug: "electricite",
    title: "Électricité générale",
    short: "Mise aux normes, tableau électrique, dépannage, Consuel.",
    description:
      "Installation, rénovation et mise en sécurité de votre installation électrique dans le respect de la norme NF C 15-100.",
    icon: "zap",
    image:
      "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1100&q=70",
    highlights: [
      "Mise aux normes NF C 15-100",
      "Rénovation de tableau électrique",
      "Remise aux normes avant vente",
      "Dépannage électrique",
      "Attestation Consuel",
    ],
  },
  {
    slug: "renovation-interieure",
    title: "Rénovation intérieure",
    short: "Rénovation complète clé en main, de A à Z.",
    description:
      "Aménagement, isolation, cloisons, peinture et finitions : votre rénovation intérieure gérée par un seul interlocuteur.",
    icon: "hammer",
    highlights: [
      "Aménagement intérieur",
      "Isolation thermique & phonique",
      "Cloisons & placo",
      "Peinture & finitions",
      "Coordination de A à Z",
    ],
  },
  {
    slug: "salle-de-bain",
    title: "Salle de bain",
    short: "Création & rénovation complète, douche italienne, PMR.",
    description:
      "Création ou rénovation complète de salle de bain, de la plomberie aux finitions, y compris aménagement PMR.",
    icon: "shower",
    highlights: [
      "Rénovation complète clé en main",
      "Douche à l'italienne",
      "Adaptation PMR / sénior",
      "Plomberie & électricité incluses",
      "Carrelage & finitions",
    ],
  },
  {
    slug: "cuisine",
    title: "Cuisine",
    short: "Aménagement sur mesure, électricité & plomberie.",
    description:
      "Aménagement de cuisine sur mesure, avec une installation électrique et une plomberie aux normes.",
    icon: "cooking",
    highlights: [
      "Aménagement sur mesure",
      "Électricité aux normes",
      "Raccordements plomberie",
      "Pose & finitions",
    ],
  },
  {
    slug: "plomberie",
    title: "Plomberie",
    short: "Installation, rénovation et dépannage.",
    description:
      "Installation, rénovation et dépannage de plomberie pour vos projets neufs comme pour vos urgences.",
    icon: "pipe",
    highlights: [
      "Installation neuve",
      "Rénovation de réseau",
      "Dépannage",
      "Sanitaires & raccordements",
    ],
  },
];

export const getService = (slug: string) =>
  services.find((s) => s.slug === slug);
