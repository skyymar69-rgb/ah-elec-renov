/**
 * Témoignages — placeholder structuré. À remplacer par de vrais avis clients
 * (idéalement avec lien vers la fiche Google Business).
 */

export type Testimonial = {
  name: string;
  city: string;
  text: string;
  project: string;
};

export const testimonials: Testimonial[] = [
  // TODO : remplacer par de vrais témoignages clients.
  {
    name: "Témoignage à venir",
    city: "Ouest lyonnais",
    project: "Rénovation salle de bain",
    text: "Espace réservé à un avis client. Les retours réels seront ajoutés ici une fois les premiers chantiers livrés et la fiche Google en ligne.",
  },
  {
    name: "Témoignage à venir",
    city: "Francheville",
    project: "Mise aux normes électrique",
    text: "Espace réservé à un avis client. Les retours réels seront ajoutés ici une fois les premiers chantiers livrés et la fiche Google en ligne.",
  },
  {
    name: "Témoignage à venir",
    city: "Tassin-la-Demi-Lune",
    project: "Rénovation complète",
    text: "Espace réservé à un avis client. Les retours réels seront ajoutés ici une fois les premiers chantiers livrés et la fiche Google en ligne.",
  },
];
