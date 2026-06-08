import type { Metadata } from "next";
import { Placeholder } from "@/components/site/Placeholder";

export const metadata: Metadata = {
  title: "Devis gratuit",
  description:
    "Demandez votre devis gratuit pour vos travaux d'électricité ou de rénovation intérieure dans l'ouest lyonnais.",
};

export default function DevisPage() {
  return (
    <Placeholder
      eyebrow="Devis gratuit"
      title="Demandez votre devis gratuit"
      text="Le formulaire de demande de devis (avec envoi par email) sera mis en place en Phase 3."
    />
  );
}
