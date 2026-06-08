import Image from "next/image";
import type { Realisation } from "@/content/realisations";
import { blurData } from "@/lib/image";

/**
 * Carte réalisation (style Stitch) : visuel « après » avec badge catégorie/ville
 * en overlay, titre dessous. Au survol/focus, l'« avant » se révèle. Une vraie
 * comparaison à curseur arrivera en Phase 4 avec les photos réelles.
 */
export function BeforeAfterCard({ item }: { item: Realisation }) {
  return (
    <article className="group cursor-pointer">
      <div className="relative mb-4 aspect-[16/10] overflow-hidden rounded-2xl border border-anthracite/10">
        <Image
          src={item.after}
          alt={`${item.title} — après, ${item.city}`}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          placeholder="blur"
          blurDataURL={blurData}
          className="img-craft object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <Image
          src={item.before}
          alt={`${item.title} — avant, ${item.city}`}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          placeholder="blur"
          blurDataURL={blurData}
          className="object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-within:opacity-100"
        />
        <span className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-anthracite backdrop-blur">
          {item.category} · {item.city}
        </span>
        <span className="absolute right-4 top-4 rounded-full bg-ink/65 px-3 py-1 text-[11px] font-medium text-cream/90 backdrop-blur opacity-0 transition-opacity group-hover:opacity-100">
          Survoler : avant
        </span>
      </div>
      <h3 className="font-display text-lg font-bold text-anthracite">
        {item.title}
      </h3>
    </article>
  );
}
