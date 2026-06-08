import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/content/services";
import { ServiceIcon } from "./ServiceIcon";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group relative flex flex-col rounded-2xl border border-anthracite/10 bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-copper/40 hover:shadow-lg"
    >
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-anthracite text-copper-400 transition-colors group-hover:bg-copper group-hover:text-cream">
        <ServiceIcon name={service.icon} className="h-6 w-6" />
      </div>
      <h3 className="text-xl font-bold text-anthracite">{service.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
        {service.short}
      </p>
      <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-copper">
        En savoir plus
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </Link>
  );
}
