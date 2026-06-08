"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Cookie } from "lucide-react";

const STORAGE_KEY = "ahelec-cookie-consent";

/**
 * Bandeau cookies conforme RGPD : information claire, refus aussi simple que
 * l'acceptation, aucun dépôt de cookie non essentiel avant consentement. Le
 * choix est mémorisé dans le localStorage (et non un cookie tiers).
 *
 * Pour activer une mesure d'audience, conditionner son chargement à
 * `localStorage.getItem('ahelec-cookie-consent') === 'granted'`.
 */
export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch {
      /* localStorage indisponible : on n'affiche rien */
    }
  }, []);

  const choose = (value: "granted" | "denied") => {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      /* ignore */
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Gestion des cookies"
      aria-live="polite"
      className="fixed inset-x-3 bottom-3 z-[55] mx-auto max-w-3xl rounded-2xl border border-anthracite/10 bg-cream p-5 shadow-band sm:bottom-5 sm:p-6"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <Cookie
          className="h-7 w-7 shrink-0 text-copper"
          strokeWidth={1.8}
          aria-hidden
        />
        <p className="flex-1 text-sm leading-relaxed text-anthracite/85">
          Nous utilisons uniquement les cookies nécessaires au bon
          fonctionnement du site. Avec votre accord, nous pourrons y ajouter une
          mesure d'audience anonyme.{" "}
          <Link
            href="/politique-confidentialite"
            className="font-medium text-copper underline underline-offset-2"
          >
            En savoir plus
          </Link>
          .
        </p>
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={() => choose("denied")}
            className="h-11 rounded-full border-2 border-anthracite/20 px-5 text-sm font-semibold text-anthracite transition-colors hover:border-anthracite/40"
          >
            Refuser
          </button>
          <button
            type="button"
            onClick={() => choose("granted")}
            className="h-11 rounded-full bg-copper px-5 text-sm font-semibold text-cream copper-glow"
          >
            Accepter
          </button>
        </div>
      </div>
    </div>
  );
}
