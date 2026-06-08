import type { Metadata } from "next";
import { Placeholder } from "@/components/site/Placeholder";

export const metadata: Metadata = {
  title: "Zone d'intervention — ouest lyonnais",
  description:
    "Francheville, Tassin-la-Demi-Lune, Écully, Sainte-Foy-lès-Lyon, Craponne et tout l'ouest lyonnais.",
};

export default function ZonePage() {
  return (
    <Placeholder
      eyebrow="Zone d'intervention"
      title="Francheville & tout l'ouest lyonnais"
      text="La carte interactive et le détail des communes desservies arrivent en Phase 2."
    />
  );
}
