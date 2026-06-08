import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/Container";

/** Fil d'Ariane visible (à coupler avec `breadcrumbJsonLd`). */
export function Breadcrumbs({
  items,
}: {
  items: { name: string; path: string }[];
}) {
  return (
    <nav aria-label="Fil d'Ariane" className="border-b border-line bg-cream">
      <Container className="flex flex-wrap items-center gap-1.5 py-3 text-sm text-muted">
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <span key={item.path} className="flex items-center gap-1.5">
              {last ? (
                <span className="font-medium text-anthracite" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link href={item.path} className="hover:text-copper">
                  {item.name}
                </Link>
              )}
              {!last && (
                <ChevronRight className="h-3.5 w-3.5 text-muted/60" aria-hidden />
              )}
            </span>
          );
        })}
      </Container>
    </nav>
  );
}
