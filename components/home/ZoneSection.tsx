import { Circle, Quote } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/shared/Reveal";
import { Button } from "@/components/ui/Button";
import { interventionZones } from "@/content/site";
import { testimonials } from "@/content/testimonials";

export function ZoneSection() {
  const featured = testimonials[0];

  return (
    <section className="bg-cream">
      <Container className="grid grid-cols-1 items-center gap-16 py-24 sm:py-28 lg:grid-cols-2 lg:gap-24">
        {/* Zone */}
        <Reveal>
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-copper">
            Proximité
          </span>
          <h2 className="mt-4 text-3xl font-bold text-anthracite sm:text-4xl">
            Nous intervenons près de chez vous
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            Au service de l'ouest lyonnais, je couvre l'ensemble du secteur pour
            vos rénovations et interventions électriques.
          </p>
          <ul className="mt-8 grid grid-cols-2 gap-y-3 text-sm font-medium text-anthracite">
            {interventionZones.map((zone) => (
              <li key={zone} className="flex items-center gap-2.5">
                <Circle className="h-2 w-2 fill-copper text-copper" />
                {zone}
              </li>
            ))}
          </ul>
          <Button href="/zone-intervention" variant="dark" className="mt-9">
            Voir la zone détaillée
          </Button>
        </Reveal>

        {/* Témoignage vedette */}
        <Reveal delay={0.1} className="relative overflow-hidden rounded-2xl bg-cream-200 p-9 sm:p-11">
          <Quote
            className="absolute right-6 top-6 h-24 w-24 text-copper/15"
            aria-hidden
          />
          <blockquote className="relative z-10">
            <p className="text-xl italic leading-relaxed text-anthracite">
              « {featured.text} »
            </p>
            <footer className="mt-8 flex items-center gap-4">
              <span
                className="flex h-12 w-12 items-center justify-center rounded-full bg-copper font-display font-bold text-cream"
                aria-hidden
              >
                {featured.name.charAt(0)}
              </span>
              <div>
                <p className="font-bold text-anthracite">{featured.name}</p>
                <p className="text-sm text-muted">
                  {featured.project} · {featured.city}
                </p>
              </div>
            </footer>
          </blockquote>
        </Reveal>
      </Container>
    </section>
  );
}
