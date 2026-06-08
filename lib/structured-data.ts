import { company } from "@/content/company";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ahelecrenov.fr";

/**
 * JSON-LD principal : électricien + entreprise du bâtiment, avec les données
 * réelles. Les champs vides (téléphone, etc.) sont omis tant qu'ils ne sont
 * pas renseignés.
 */
export function localBusinessJsonLd() {
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": ["Electrician", "HomeAndConstructionBusiness", "LocalBusiness"],
    "@id": `${siteUrl}/#business`,
    name: company.brandName,
    description:
      "Électricien & rénovation intérieure clé en main à Lyon et dans l'ouest lyonnais.",
    url: siteUrl,
    address: {
      "@type": "PostalAddress",
      streetAddress: company.address.street,
      postalCode: company.address.postalCode,
      addressLocality: company.address.city,
      addressRegion: company.address.region,
      addressCountry: company.address.countryCode,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: company.address.latitude,
      longitude: company.address.longitude,
    },
    areaServed: [
      "Francheville",
      "Tassin-la-Demi-Lune",
      "Charbonnières-les-Bains",
      "Écully",
      "Sainte-Foy-lès-Lyon",
      "Craponne",
      "Marcy-l'Étoile",
      "La Tour-de-Salvagny",
      "Lyon",
    ],
    founder: { "@type": "Person", name: company.director },
  };

  if (company.legal.tva) data.vatID = company.legal.tva;
  if (company.contact.phone) data.telephone = company.contact.phone;
  if (company.contact.email) data.email = company.contact.email;
  if (company.social.googleBusinessUrl)
    data.sameAs = [company.social.googleBusinessUrl];

  return data;
}
