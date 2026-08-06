import {
  Poiret_One,
  Montserrat_Alternates,
  Poppins,
  Doto,
} from "next/font/google";
import localFont from "next/font/local";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "400", "500"],
  fallback: ["sans-serif", "arial"],
});
const poiret_one = Poiret_One({
  style: "normal",
  weight: ["400"],
  subsets: ["latin"],
  fallback: ["sans-serif", "arial"],
});
const montserrat_alternates = Montserrat_Alternates({
  style: "normal",
  subsets: ["latin"],
  weight: ["400", "500"],
  fallback: ["sans-serif", "arial"],
});
const sacramento = localFont({
  src: "../public/LocalFonts/Sacramento-Regular.ttf",
});

const plaster = localFont({
  src: "../public/LocalFonts/Plaster-Regular.ttf",
  preload: true,
});

const stretch = localFont({
  src: "../public/LocalFonts/StretchPro.otf",
  preload: true,
});

const morona = localFont({
  src: "../public/LocalFonts/Morona.otf",
  preload: true,
});

const doto = Doto({
  subsets: ["latin"],
  weight: "900",
  display: "swap",
  fallback: ["sans-serif", "monospace"],
});

export {
  poppins,
  poiret_one,
  montserrat_alternates,
  sacramento,
  plaster,
  stretch,
  morona,
  doto,
};
