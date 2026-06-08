import Image from "next/image";
import { Reveal } from "./Reveal";
import { blurData } from "@/lib/image";
import { cn } from "@/lib/utils";

export type GalleryItem = { src: string; alt: string; caption?: string };

/**
 * Galerie photo responsive (blur-up + filtre « craft » + zoom au survol).
 * Variante `mosaic` : la première image s'étend sur 2 colonnes/2 lignes.
 */
export function Gallery({
  items,
  variant = "grid",
}: {
  items: GalleryItem[];
  variant?: "grid" | "mosaic";
}) {
  return (
    <div
      className={cn(
        "grid gap-4",
        variant === "mosaic"
          ? "grid-cols-2 md:grid-cols-4"
          : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
      )}
    >
      {items.map((item, i) => (
        <Reveal
          key={i}
          delay={(i % 3) * 0.05}
          className={cn(
            "group relative overflow-hidden rounded-2xl border border-anthracite/10",
            variant === "mosaic" && i === 0 && "col-span-2 row-span-2",
          )}
        >
          <div
            className={cn(
              "relative",
              variant === "mosaic" && i === 0 ? "aspect-square" : "aspect-[4/3]",
            )}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              placeholder="blur"
              blurDataURL={blurData}
              className="img-craft object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {item.caption && (
              <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-anthracite backdrop-blur">
                {item.caption}
              </span>
            )}
          </div>
        </Reveal>
      ))}
    </div>
  );
}
