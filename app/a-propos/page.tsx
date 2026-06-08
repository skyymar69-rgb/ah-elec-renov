import type { Metadata } from "next";
import { Placeholder } from "@/components/site/Placeholder";

export const metadata: Metadata = {
  title: "À propos — Asli Hocine, artisan",
  description:
    "Asli Hocine, artisan électricien et rénovation intérieure à Francheville. Parcours, valeurs et engagement qualité.",
};

export default function AProposPage() {
  return (
    <Placeholder
      eyebrow="À propos"
      title="L'artisan derrière AH ELEC RENOV"
      text="La présentation d'Asli Hocine, son parcours, ses valeurs et ses certifications arrivent en Phase 2."
    />
  );
}
