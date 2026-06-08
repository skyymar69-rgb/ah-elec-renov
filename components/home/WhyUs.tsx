import { MapPin, UserCheck, ShieldCheck, Workflow } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/shared/Reveal";
import { whyUs } from "@/content/site";

const icons = [MapPin, UserCheck, ShieldCheck, Workflow];

export function WhyUs() {
  return (
    <section className="bg-cream-200">
      <Container className="py-24 sm:py-28">
        <Reveal className="mx-auto mb-16 max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-copper">
            Valeurs &amp; engagement
          </span>
          <h2 className="mt-4 text-3xl font-bold text-anthracite sm:text-4xl">
            Pourquoi nous confier vos travaux ?
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {whyUs.map((item, i) => {
            const Icon = icons[i] ?? ShieldCheck;
            return (
              <Reveal key={item.title} delay={i * 0.05}>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-copper/12 text-copper">
                  <Icon className="h-5 w-5" strokeWidth={2} />
                </div>
                <h3 className="mt-5 text-lg font-bold text-anthracite">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.text}
                </p>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
