import QRCode from "qrcode";

/**
 * Génère un QR code en SVG (string) côté serveur / build. Fond transparent,
 * modules anthracite — s'intègre proprement sur les cartes claires.
 */
export async function qrSvg(
  text: string,
  opts?: { dark?: string },
): Promise<string> {
  return QRCode.toString(text, {
    type: "svg",
    errorCorrectionLevel: "M",
    margin: 1,
    color: {
      dark: opts?.dark ?? "#101317",
      light: "#00000000",
    },
  });
}
