"use client";

import { useState, useRef, type FormEvent, type ChangeEvent } from "react";
import { AlertCircle, CheckCircle2, ChevronDown, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { company } from "@/content/company";

/* ------------------------------------------------------------------ */
/*  Types                                                               */
/* ------------------------------------------------------------------ */

type FormState = "idle" | "sending" | "success" | "error";

interface Fields {
  nom: string;
  email: string;
  telephone: string;
  ville: string;
  typeProjet: string;
  description: string;
  budget: string;
  consentement: boolean;
  /** Honeypot — doit rester vide */
  entreprise: string;
}

type FieldErrors = Partial<Record<keyof Omit<Fields, "entreprise">, string>>;

const TYPES_PROJET = [
  { value: "", label: "Choisir un type de projet" },
  { value: "electricite", label: "Électricité" },
  { value: "salle-de-bain", label: "Salle de bain" },
  { value: "cuisine", label: "Cuisine" },
  { value: "plomberie", label: "Plomberie" },
  { value: "renovation-complete", label: "Rénovation complète" },
  { value: "autre", label: "Autre" },
] as const;

const BUDGETS = [
  { value: "", label: "Budget approximatif (optionnel)" },
  { value: "moins-5000", label: "Moins de 5 000 €" },
  { value: "5000-15000", label: "5 000 – 15 000 €" },
  { value: "15000-30000", label: "15 000 – 30 000 €" },
  { value: "30000-plus", label: "Plus de 30 000 €" },
  { value: "non-defini", label: "Non défini pour l'instant" },
] as const;

/* ------------------------------------------------------------------ */
/*  Helpers de style                                                    */
/* ------------------------------------------------------------------ */

const labelCls =
  "block text-xs font-semibold uppercase tracking-wider text-muted mb-1.5";

const inputBase =
  "w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-anthracite placeholder:text-muted/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper/60 focus-visible:border-copper disabled:opacity-60";

const inputError =
  "border-red-400 focus-visible:ring-red-400/40 focus-visible:border-red-400";

/* ------------------------------------------------------------------ */
/*  Validation                                                          */
/* ------------------------------------------------------------------ */

function validate(fields: Fields): FieldErrors {
  const errs: FieldErrors = {};
  if (!fields.nom.trim()) errs.nom = "Le nom est requis.";
  if (!fields.email.trim()) {
    errs.email = "L'email est requis.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    errs.email = "Adresse email invalide.";
  }
  if (!fields.telephone.trim()) {
    errs.telephone = "Le téléphone est requis.";
  } else if (!/^[\d\s().+/-]{6,20}$/.test(fields.telephone)) {
    errs.telephone = "Numéro de téléphone invalide.";
  }
  if (!fields.typeProjet) errs.typeProjet = "Veuillez choisir un type de projet.";
  if (!fields.description.trim())
    errs.description = "Une description est requise.";
  else if (fields.description.trim().length < 15)
    errs.description = "Décrivez votre projet en quelques mots supplémentaires.";
  if (!fields.consentement)
    errs.consentement = "Vous devez accepter le traitement de vos données.";
  return errs;
}

/* ------------------------------------------------------------------ */
/*  Encodage mailto                                                     */
/* ------------------------------------------------------------------ */

function buildMailto(fields: Fields): string {
  const typeLabel =
    TYPES_PROJET.find((t) => t.value === fields.typeProjet)?.label ?? fields.typeProjet;
  const budgetLabel =
    BUDGETS.find((b) => b.value === fields.budget)?.label ?? "Non précisé";

  const subject = encodeURIComponent(
    `Demande de devis — ${typeLabel} — ${fields.nom}`,
  );

  const body = encodeURIComponent(
    [
      `Nom : ${fields.nom}`,
      `Email : ${fields.email}`,
      `Téléphone : ${fields.telephone}`,
      `Ville : ${fields.ville || "Non précisée"}`,
      `Type de projet : ${typeLabel}`,
      `Budget approximatif : ${budgetLabel}`,
      ``,
      `Description :`,
      fields.description,
    ].join("\n"),
  );

  return `mailto:${company.contact.email}?subject=${subject}&body=${body}`;
}

/* ------------------------------------------------------------------ */
/*  Composant                                                           */
/* ------------------------------------------------------------------ */

export function DevisForm() {
  const [state, setState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof Fields, boolean>>>({});

  const [fields, setFields] = useState<Fields>({
    nom: "",
    email: "",
    telephone: "",
    ville: "",
    typeProjet: "",
    description: "",
    budget: "",
    consentement: false,
    entreprise: "",
  });

  const formRef = useRef<HTMLFormElement>(null);

  /* Mise à jour d'un champ texte */
  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) {
    const { name, type } = e.target;
    const value =
      type === "checkbox"
        ? (e.target as HTMLInputElement).checked
        : e.target.value;
    setFields((prev) => ({ ...prev, [name]: value }));
  }

  /* Marquer un champ comme touché (pour l'affichage des erreurs inline) */
  function handleBlur(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) {
    setTouched((prev) => ({ ...prev, [e.target.name]: true }));
  }

  /* Erreur visible pour un champ (seulement si touché ou soumis) */
  function fieldError(name: keyof Fields): string | undefined {
    return touched[name] || state === "error"
      ? errors[name as keyof FieldErrors]
      : undefined;
  }

  /* Soumission */
  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    /* Honeypot */
    if (fields.entreprise) {
      return;
    }

    const errs = validate(fields);
    setTouched({
      nom: true,
      email: true,
      telephone: true,
      typeProjet: true,
      description: true,
      consentement: true,
    });

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      setState("error");
      /* Focaliser le premier champ en erreur */
      const firstErr = Object.keys(errs)[0] as string;
      const el = formRef.current?.elements.namedItem(firstErr) as HTMLElement | null;
      el?.focus();
      return;
    }

    setState("sending");
    try {
      window.location.href = buildMailto(fields);
      /* Légère temporisation pour laisser le navigateur déclencher l'ouverture */
      setTimeout(() => setState("success"), 800);
    } catch {
      setState("error");
    }
  }

  /* ---------------------------------------------------------------- */
  /*  État succès                                                       */
  /* ---------------------------------------------------------------- */
  if (state === "success") {
    return (
      <div
        role="status"
        aria-live="polite"
        className="flex flex-col items-start gap-5 rounded-2xl border border-line bg-white p-8"
      >
        <CheckCircle2
          className="h-10 w-10 shrink-0 text-copper"
          strokeWidth={1.6}
          aria-hidden
        />
        <div>
          <h3 className="text-lg font-bold text-anthracite">
            Votre client de messagerie va s'ouvrir
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            Un email pré-rempli avec vos informations a été préparé à
            destination de{" "}
            <strong className="text-anthracite">{company.contact.email}</strong>.
            Envoyez-le depuis votre messagerie habituelle.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            Si votre messagerie ne s'est pas ouverte, vous pouvez aussi nous
            appeler directement au{" "}
            <a
              href={company.contact.phoneHref}
              className="font-semibold text-anthracite underline decoration-copper/40 hover:text-copper"
            >
              {company.contact.phone}
            </a>
            .
          </p>
        </div>
        <button
          type="button"
          onClick={() => {
            setState("idle");
            setErrors({});
            setTouched({});
            setFields({
              nom: "",
              email: "",
              telephone: "",
              ville: "",
              typeProjet: "",
              description: "",
              budget: "",
              consentement: false,
              entreprise: "",
            });
          }}
          className="mt-2 text-xs font-semibold text-muted underline decoration-muted/40 hover:text-copper"
        >
          Soumettre une nouvelle demande
        </button>
      </div>
    );
  }

  /* ---------------------------------------------------------------- */
  /*  Formulaire                                                        */
  /* ---------------------------------------------------------------- */
  const isSending = state === "sending";

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      noValidate
      aria-label="Formulaire de demande de devis"
      className="space-y-6"
    >
      {/* Honeypot — invisible pour les humains */}
      <div
        aria-hidden="true"
        style={{ position: "absolute", left: "-9999px", top: "auto", width: "1px", height: "1px", overflow: "hidden" }}
      >
        <label htmlFor="entreprise">Entreprise (ne pas remplir)</label>
        <input
          id="entreprise"
          name="entreprise"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={fields.entreprise}
          onChange={handleChange}
        />
      </div>

      {/* Erreur globale */}
      {state === "error" && Object.keys(errors).length > 0 && (
        <div
          role="alert"
          aria-live="assertive"
          className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
        >
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
          <span>Certains champs nécessitent votre attention.</span>
        </div>
      )}

      {/* Nom + Téléphone */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="devis-nom" className={labelCls}>
            Nom <span className="text-copper" aria-hidden>*</span>
          </label>
          <input
            id="devis-nom"
            name="nom"
            type="text"
            required
            autoComplete="name"
            placeholder="Jean Dupont"
            value={fields.nom}
            onChange={handleChange}
            onBlur={handleBlur}
            disabled={isSending}
            aria-describedby={fieldError("nom") ? "err-nom" : undefined}
            aria-invalid={Boolean(fieldError("nom"))}
            className={cn(inputBase, fieldError("nom") && inputError)}
          />
          {fieldError("nom") && (
            <p id="err-nom" role="alert" className="mt-1.5 text-xs text-red-600">
              {fieldError("nom")}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="devis-telephone" className={labelCls}>
            Téléphone <span className="text-copper" aria-hidden>*</span>
          </label>
          <input
            id="devis-telephone"
            name="telephone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="06 12 34 56 78"
            value={fields.telephone}
            onChange={handleChange}
            onBlur={handleBlur}
            disabled={isSending}
            aria-describedby={fieldError("telephone") ? "err-telephone" : undefined}
            aria-invalid={Boolean(fieldError("telephone"))}
            className={cn(inputBase, fieldError("telephone") && inputError)}
          />
          {fieldError("telephone") && (
            <p id="err-telephone" role="alert" className="mt-1.5 text-xs text-red-600">
              {fieldError("telephone")}
            </p>
          )}
        </div>
      </div>

      {/* Email + Ville */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="devis-email" className={labelCls}>
            Email <span className="text-copper" aria-hidden>*</span>
          </label>
          <input
            id="devis-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="jean@exemple.fr"
            value={fields.email}
            onChange={handleChange}
            onBlur={handleBlur}
            disabled={isSending}
            aria-describedby={fieldError("email") ? "err-email" : undefined}
            aria-invalid={Boolean(fieldError("email"))}
            className={cn(inputBase, fieldError("email") && inputError)}
          />
          {fieldError("email") && (
            <p id="err-email" role="alert" className="mt-1.5 text-xs text-red-600">
              {fieldError("email")}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="devis-ville" className={labelCls}>
            Ville
          </label>
          <input
            id="devis-ville"
            name="ville"
            type="text"
            autoComplete="address-level2"
            placeholder="Lyon, Francheville…"
            value={fields.ville}
            onChange={handleChange}
            onBlur={handleBlur}
            disabled={isSending}
            className={inputBase}
          />
        </div>
      </div>

      {/* Type de projet */}
      <div>
        <label htmlFor="devis-type-projet" className={labelCls}>
          Type de projet <span className="text-copper" aria-hidden>*</span>
        </label>
        <div className="relative">
          <select
            id="devis-type-projet"
            name="typeProjet"
            required
            value={fields.typeProjet}
            onChange={handleChange}
            onBlur={handleBlur}
            disabled={isSending}
            aria-describedby={fieldError("typeProjet") ? "err-type-projet" : undefined}
            aria-invalid={Boolean(fieldError("typeProjet"))}
            className={cn(
              inputBase,
              "appearance-none pr-10",
              fieldError("typeProjet") && inputError,
              !fields.typeProjet && "text-muted/60",
            )}
          >
            {TYPES_PROJET.map((t) => (
              <option key={t.value} value={t.value} disabled={t.value === ""}>
                {t.label}
              </option>
            ))}
          </select>
          <ChevronDown
            className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted/60"
            aria-hidden
          />
        </div>
        {fieldError("typeProjet") && (
          <p id="err-type-projet" role="alert" className="mt-1.5 text-xs text-red-600">
            {fieldError("typeProjet")}
          </p>
        )}
      </div>

      {/* Description */}
      <div>
        <label htmlFor="devis-description" className={labelCls}>
          Description du projet <span className="text-copper" aria-hidden>*</span>
        </label>
        <textarea
          id="devis-description"
          name="description"
          required
          rows={5}
          placeholder="Décrivez votre projet : type de travaux, superficie, contraintes particulières, délai souhaité…"
          value={fields.description}
          onChange={handleChange}
          onBlur={handleBlur}
          disabled={isSending}
          aria-describedby={fieldError("description") ? "err-description" : undefined}
          aria-invalid={Boolean(fieldError("description"))}
          className={cn(inputBase, "resize-y min-h-[120px]", fieldError("description") && inputError)}
        />
        {fieldError("description") && (
          <p id="err-description" role="alert" className="mt-1.5 text-xs text-red-600">
            {fieldError("description")}
          </p>
        )}
      </div>

      {/* Budget */}
      <div>
        <label htmlFor="devis-budget" className={labelCls}>
          Budget approximatif
        </label>
        <div className="relative">
          <select
            id="devis-budget"
            name="budget"
            value={fields.budget}
            onChange={handleChange}
            onBlur={handleBlur}
            disabled={isSending}
            className={cn(
              inputBase,
              "appearance-none pr-10",
              !fields.budget && "text-muted/60",
            )}
          >
            {BUDGETS.map((b) => (
              <option key={b.value} value={b.value} disabled={b.value === ""}>
                {b.label}
              </option>
            ))}
          </select>
          <ChevronDown
            className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted/60"
            aria-hidden
          />
        </div>
      </div>

      {/* Consentement RGPD */}
      <div>
        <div className="flex items-start gap-3">
          <input
            id="devis-consentement"
            name="consentement"
            type="checkbox"
            required
            checked={fields.consentement}
            onChange={handleChange}
            onBlur={handleBlur}
            disabled={isSending}
            aria-describedby={
              fieldError("consentement") ? "err-consentement" : "hint-consentement"
            }
            aria-invalid={Boolean(fieldError("consentement"))}
            className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer rounded border-line accent-copper focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-copper"
          />
          <label
            htmlFor="devis-consentement"
            className="cursor-pointer text-sm leading-relaxed text-muted"
          >
            J'accepte que mes informations soient utilisées pour traiter ma
            demande de devis, conformément à la{" "}
            <a
              href="/politique-confidentialite"
              className="font-semibold text-anthracite underline decoration-copper/40 hover:text-copper"
              target="_blank"
              rel="noopener noreferrer"
            >
              politique de confidentialité
            </a>
            .{" "}
            <span className="text-copper" aria-hidden>
              *
            </span>
          </label>
        </div>
        {fieldError("consentement") && (
          <p id="err-consentement" role="alert" className="mt-1.5 text-xs text-red-600">
            {fieldError("consentement")}
          </p>
        )}
        <p id="hint-consentement" className="mt-2 text-xs text-muted/70">
          Vos données sont transmises par email directement à {company.brandName} et ne sont
          pas stockées sur nos serveurs.
        </p>
      </div>

      {/* Note sur le fonctionnement mailto */}
      <p className="rounded-xl border border-line bg-cream-200 px-4 py-3 text-xs leading-relaxed text-muted">
        Ce formulaire ouvre votre client de messagerie avec un email pré-rempli.
        Si vous préférez appeler directement :{" "}
        <a
          href={company.contact.phoneHref}
          className="font-semibold text-anthracite hover:text-copper"
        >
          {company.contact.phone}
        </a>
        .
      </p>

      {/* Bouton soumettre */}
      <button
        type="submit"
        disabled={isSending}
        className={cn(
          "inline-flex w-full items-center justify-center gap-2 rounded-full bg-copper px-8 py-3.5 text-sm font-semibold text-cream transition-all duration-200 copper-glow",
          "hover:bg-copper-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-copper",
          "disabled:cursor-not-allowed disabled:opacity-60",
        )}
      >
        {isSending ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
            Ouverture de la messagerie…
          </>
        ) : (
          "Envoyer ma demande de devis"
        )}
      </button>

      <p className="text-xs text-muted/60">
        <span className="text-copper" aria-hidden>*</span> Champs obligatoires
      </p>
    </form>
  );
}
