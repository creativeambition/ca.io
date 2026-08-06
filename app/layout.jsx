import "@/styles/global.css";
import { poppins } from "@/lib/fonts";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata = {
  title: {
    default: "ca~io",
    template: "%s · ca~io",
  },
  description:
    "Portfolio of Chrysoprase Ayita (ca.io) — full-stack developer, designer and problem solver.",
  applicationName: "ca~io",
  keywords: [
    "ca.io",
    "Chrys",
    "full-stack developer",
    "software engineer",
    "portfolio",
    "creative ambition",
  ],
  openGraph: {
    title: "ca~io",
    description:
      "Portfolio of Chrysoprase Ayita (ca.io) — full-stack developer, designer and problem solver.",
    type: "website",
    url: "https://ca-io.vercel.app",
    siteName: "ca~io",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "ca~io",
    description:
      "Portfolio of Chrysoprase Ayita (ca.io) — full-stack developer, designer and problem solver.",
  },
};

export const viewport = {
  themeColor: "#0f2018",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <SmoothScroll />
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
