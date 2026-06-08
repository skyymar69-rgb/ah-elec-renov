import type { Metadata } from "next";
import { Placeholder } from "@/components/site/Placeholder";

export const metadata: Metadata = {
  title: "Réalisations — chantiers avant / après",
  description:
    "Portfolio de chantiers d'électricité et de rénovation intérieure dans l'ouest lyonnais.",
};

export default function RealisationsPage() {
  return (
    <Placeholder
      eyebrow="Réalisations"
      title="Nos chantiers avant / après"
      text="Le portfolio complet avec les photos réelles des chantiers sera publié en Phase 4."
    />
  );
}
