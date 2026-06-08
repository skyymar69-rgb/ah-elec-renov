import Link from "next/link";
import { Phone, ReceiptText } from "lucide-react";
import { company, hasPhone } from "@/content/company";

/**
 * Action flottante mobile : « contact » toujours à portée de pouce.
 * Téléphone si renseigné, sinon raccourci vers le devis.
 */
export function MobileFAB() {
  const label = hasPhone ? "Appeler" : "Devis gratuit";

  const inner = (
    <>
      {hasPhone ? (
        <Phone className="h-6 w-6" />
      ) : (
        <ReceiptText className="h-6 w-6" />
      )}
      <span className="sr-only">{label}</span>
    </>
  );

  const cls =
    "fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-copper text-cream shadow-band copper-glow lg:hidden";

  if (hasPhone) {
    return (
      <a href={company.contact.phoneHref} className={cls} aria-label={label}>
        {inner}
      </a>
    );
  }
  return (
    <Link href="/devis" className={cls} aria-label={label}>
      {inner}
    </Link>
  );
}
