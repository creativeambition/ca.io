import { Poppins, Doto } from "next/font/google";
import localFont from "next/font/local";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
  fallback: ["sans-serif", "arial"],
});
// Only Poppins, Stretch and Sacramento appear above the fold, so only they preload.
const sacramento = localFont({
  src: "../public/LocalFonts/Sacramento-Regular.woff2",
  display: "swap",
});

const plaster = localFont({
  src: "../public/LocalFonts/Plaster-Regular.woff2",
  display: "swap",
  preload: false,
});

const stretch = localFont({
  src: "../public/LocalFonts/StretchPro.woff2",
  display: "swap",
  preload: true,
});

const doto = Doto({
  subsets: ["latin"],
  weight: "900",
  display: "swap",
  fallback: ["sans-serif", "monospace"],
  preload: false,
});

export {
  poppins,
  sacramento,
  plaster,
  stretch,
  doto,
};
