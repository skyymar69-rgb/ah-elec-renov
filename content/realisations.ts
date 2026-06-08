/**
 * Réalisations (avant/après). Placeholders en attendant les vraies photos de
 * chantiers (cœur de la preuve — voir §2 du brief, 6 à 12 photos à fournir).
 *
 * Pour l'instant on utilise des visuels de transition (Unsplash). Remplacer
 * `before`/`after` par les vrais fichiers une fois fournis (les placer dans
 * /public/realisations/).
 */

export type Realisation = {
  slug: string;
  title: string;
  city: string;
  category: string;
  summary: string;
  before: string;
  after: string;
};

export const realisations: Realisation[] = [
  {
    slug: "salle-de-bain-tassin",
    title: "Rénovation complète de salle de bain",
    city: "Tassin-la-Demi-Lune",
    category: "Salle de bain",
    summary:
      "Dépose totale, création d'une douche à l'italienne, reprise de la plomberie et de l'électricité, carrelage et finitions.",
    before:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=70",
    after:
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1200&q=70",
  },
  {
    slug: "tableau-electrique-francheville",
    title: "Rénovation de tableau & mise aux normes",
    city: "Francheville",
    category: "Électricité",
    summary:
      "Remplacement d'un tableau vétuste, mise en conformité NF C 15-100 avant vente et passage du Consuel.",
    before:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=70",
    after:
      "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&q=70",
  },
  {
    slug: "cuisine-ecully",
    title: "Aménagement de cuisine sur mesure",
    city: "Écully",
    category: "Cuisine",
    summary:
      "Création d'une cuisine ouverte : électricité aux normes, raccordements plomberie, pose et finitions.",
    before:
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1200&q=70",
    after:
      "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?auto=format&fit=crop&w=1200&q=70",
  },
];
