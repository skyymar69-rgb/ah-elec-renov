import type { Metadata } from "next";
import { Placeholder } from "@/components/site/Placeholder";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez AH ELEC RENOV à Francheville pour vos travaux d'électricité et de rénovation intérieure.",
};

export default function ContactPage() {
  return (
    <Placeholder
      eyebrow="Contact"
      title="Parlons de votre projet"
      text="Les coordonnées complètes et la carte arrivent en Phase 3. En attendant, demandez un devis gratuit."
    />
  );
}
