/**
 * Placeholder « blur-up » neutre (ton anthracite) pour next/image sur les
 * visuels distants. Évite le saut de mise en page et donne une apparition
 * élégante sans dépendance externe.
 */
const shimmer = `
<svg width="40" height="30" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <rect width="40" height="30" fill="#1a1d23"/>
  <rect width="40" height="30" fill="#23272f" opacity="0.5"/>
</svg>`;

const toBase64 = (str: string) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);

export const blurData = `data:image/svg+xml;base64,${toBase64(shimmer)}`;
