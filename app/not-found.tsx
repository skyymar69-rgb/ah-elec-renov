import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Page introuvable",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="bg-cream">
      <Container className="flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
        <span className="font-display text-7xl font-extrabold text-copper/30">
          404
        </span>
        <h1 className="mt-4 text-3xl font-bold text-anthracite">
          Cette page n'existe pas
        </h1>
        <p className="mt-3 max-w-md text-muted">
          Le lien est peut-être erroné ou la page a été déplacée. Revenez à
          l'accueil pour retrouver votre chemin.
        </p>
        <div className="mt-8 flex gap-3">
          <Button href="/" variant="copper">
            Retour à l'accueil
          </Button>
          <Button href="/devis" variant="outline">
            Demander un devis
          </Button>
        </div>
      </Container>
    </section>
  );
}
