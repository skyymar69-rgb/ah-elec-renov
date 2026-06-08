# AH ELEC RENOV — Site vitrine

Site vitrine local pour **AH ELEC RENOV**, artisan électricien & rénovation
intérieure à Francheville (ouest lyonnais). Objectif : générer des demandes de
devis qualifiées.

## Stack

- **Next.js 15** (App Router) + **TypeScript** strict
- **Tailwind CSS v4** (design system anthracite / cuivre via `@theme`)
- **Framer Motion** (animations sobres) · **next/font** (Bricolage Grotesque + Inter)
- **lucide-react** (icônes) · **next/image** (photos optimisées)
- À venir : **react-hook-form + zod + Resend** (formulaire de devis, Phase 3)
- Déploiement **Vercel**

## Démarrage

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de production
```

Copier `.env.example` vers `.env.local` et renseigner les variables.

## Structure

```
app/                 Routes (App Router) + layout, sitemap, robots
components/
  site/              Header, Footer, Placeholder
  home/              Sections de la page d'accueil
  shared/            ServiceCard, CTABand, Reveal, BeforeAfter, SectionHeading…
  ui/                Container, Button (primitives)
  seo/               JsonLd
content/             ⭐ TOUT le contenu éditable (company, services, site, …)
lib/                 utils (cn), structured-data (JSON-LD)
```

> 💡 Pour modifier textes, coordonnées ou prestations : éditer les fichiers de
> `content/`. Aucune autre modification nécessaire.

## Avancement (roadmap)

- [x] **Phase 1** — Fondations, design system, layout, page **Accueil**
- [x] **Design Stitch « Artisan Core »** appliqué (bento services, hero image-forward,
      bandeau flottant, étapes pastilles, CTA halo, boutons pill, micro-interactions)
- [x] **Carte de contact numérique** : QR codes (Site / Plan / Avis) + **vCard**
      téléchargeable (`/contact.vcf`) + bouton dans le header
- [x] Crédit footer **Kayzen Web** → https://internet.kayzen-lyon.fr
- [ ] **Pages légales** (mentions, CGU, CGV, politique conf., bandeau cookies)
- [ ] **Formulaire devis** RGPD + honeypot (Resend)
- [ ] **Phase 2** — Pages services (×5), À propos, Zone d'intervention
- [ ] **Phase 4** — SEO (JSON-LD Service/FAQ, OG images), Réalisations, Lighthouse
- [ ] **Phase 5** — Mise en ligne, domaine, Google Business Profile

Les routes non finalisées affichent une page-jalon temporaire.

### Carte de contact / QR / vCard

- Les **QR codes** sont générés au build (`lib/qr.ts`, lib `qrcode`) et passés au
  header via `app/layout.tsx`. QR « Avis » affiché uniquement si
  `company.social.googleReviewUrl` est renseigné.
- La **vCard** (`app/contact.vcf/route.ts`) se construit depuis `company.ts` :
  tél/email s'ajoutent automatiquement dès qu'ils sont renseignés.
- Images : `next/image` sert **AVIF/WebP + srcset Retina** automatiquement, avec
  effet **blur-up** (`lib/image.ts`) et filtres « craft » (`.img-craft`).

## ⚠️ <À_REMPLIR> bloquants avant mise en prod

Tout est centralisé dans **`content/company.ts`** (champs marqués `TODO`).

| Élément | Où | Statut |
|---|---|---|
| **Téléphone pro** | `company.contact.phone` + `phoneHref` | ❌ à fournir |
| **Email pro** | `company.contact.email` | ❌ à fournir |
| **Assurance décennale** (assureur + n° + zone) | `company.legal.decennale` | ❌ à fournir |
| **RC Pro** | `company.legal.rcPro` | ❌ à fournir |
| **Médiateur de la consommation** (nom + URL) — obligatoire B2C | `company.legal.mediator` | ❌ à fournir |
| **Hébergeur** (si autre que Vercel) | `company.legal.host` | ⚠️ Vercel par défaut |
| **Certifications** (RGE / Qualifelec / Qualibat / Handibat) | `company.ts` → `certifications` | ⏳ passer `active: true` si applicable |
| **Photos de chantiers** (6–12, avant/après) | `public/realisations/` + `content/realisations.ts` | ⚠️ visuels de transition (Unsplash) en attendant |
| **Fiche Google Business** (URL) | `company.social.googleBusinessUrl` | ⏳ Phase 5 |

> Tant que `phone`/`email` sont vides, les CTA téléphone basculent
> automatiquement vers « Me contacter » / le formulaire de devis. Aucune donnée
> fictive n'est affichée.

> ⚠️ Ne **pas** afficher de convention collective (l'IDCC 1597 vue sur Pappers
> est probablement erronée pour un effectif de 0 salarié — hors sujet en
> mentions légales).

## Données légales déjà intégrées

SIREN 933 755 423 · SIRET 933 755 423 00011 · RCS Lyon · TVA FR80933755423 ·
APE 43.21A · SASU au capital de 100 € · Président : Asli Hocine.

## Déploiement Vercel

1. Pousser le repo sur GitHub.
2. Importer le projet sur Vercel (framework détecté automatiquement).
3. Renseigner les variables d'env (`RESEND_API_KEY`, `DEVIS_TO_EMAIL`,
   `NEXT_PUBLIC_SITE_URL`).
4. Connecter le domaine `ahelecrenov.fr`.
