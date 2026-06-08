import { ReceiptText, ShieldCheck, Gauge, BadgeCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";

const items = [
  { icon: ReceiptText, label: "Devis gratuit" },
  { icon: ShieldCheck, label: "Assurance décennale" },
  { icon: Gauge, label: "Intervention rapide" },
  { icon: BadgeCheck, label: "Normes NF C 15-100" },
] as const;

/** Bandeau de réassurance flottant qui chevauche le bas du hero. */
export function Reassurance() {
  return (
    <Container className="relative z-30 -mt-12">
      <div className="grid grid-cols-2 gap-6 rounded-2xl bg-anthracite px-6 py-9 shadow-band sm:gap-8 md:grid-cols-4 md:px-10">
        {items.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="flex flex-col items-center gap-3 text-center"
          >
            <Icon className="h-8 w-8 text-copper-300" strokeWidth={1.6} />
            <p className="text-xs font-bold uppercase tracking-wider text-cream sm:text-sm">
              {label}
            </p>
          </div>
        ))}
      </div>
    </Container>
  );
}
