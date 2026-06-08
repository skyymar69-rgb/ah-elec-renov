import type { Metadata } from "next";
import { Placeholder } from "@/components/site/Placeholder";

export const metadata: Metadata = {
  title: "Nos services — électricité & rénovation",
  description:
    "Électricité, rénovation intérieure, salle de bain, cuisine et plomberie à Francheville et dans l'ouest lyonnais.",
};

export default function ServicesPage() {
  return (
    <Placeholder
      eyebrow="Services"
      title="Nos prestations, en détail"
      text="La vue d'ensemble des services et les landings dédiées (électricité, rénovation, salle de bain, cuisine, plomberie) arrivent en Phase 2."
    />
  );
}
