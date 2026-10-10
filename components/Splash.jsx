"use client";
import { useEffect, useState } from "react";
import SplashLogo from "@/components/ui/SplashLogo";

export const SPLASH_KEY = "ca-io-splash-seen";
const MIN_MS = 800; // let the logo finish a pass
const MAX_MS = 2500; // never hold anyone longer than this
const FADE_MS = 500;

// Runs before the splash is parsed: returning visitors (this session) skip it
// without a flash. Inlined in the layout.
export const splashSkipScript = `try{if(sessionStorage.getItem("${SPLASH_KEY}"))document.documentElement.dataset.splash="seen"}catch(e){}`;

// First-visit splash. It sits on top of the already-rendered page, fades out
// once fonts and the window load are done (between MIN_MS and MAX_MS), and has
// a CSS-only fallback (.splash in global.css) so it clears even without JS.
function Splash() {
  const [phase, setPhase] = useState("visible"); // visible -> leaving -> gone

  useEffect(() => {
    // Returning visitors: CSS already hides it (html[data-splash="seen"]).
    if (document.documentElement.dataset.splash === "seen") return;

    let cancelled = false;
    const loaded = new Promise((resolve) => {
      if (document.readyState === "complete") resolve();
      else window.addEventListener("load", resolve, { once: true });
    });
    const ready = Promise.all([document.fonts?.ready, loaded]);
    const atLeast = (ms) =>
      new Promise((resolve) =>
        setTimeout(resolve, Math.max(0, ms - performance.now()))
      );

    Promise.race([Promise.all([ready, atLeast(MIN_MS)]), atLeast(MAX_MS)]).then(
      () => {
        if (cancelled) return;
        try {
          sessionStorage.setItem(SPLASH_KEY, "1");
        } catch {
          // storage unavailable (private mode); the splash just shows again
        }
        setPhase("leaving");
        setTimeout(() => !cancelled && setPhase("gone"), FADE_MS);
      }
    );

    return () => {
      cancelled = true;
    };
  }, []);

  if (phase === "gone") return null;

  return (
    <div
      aria-hidden
      className={`splash fixed inset-0 z-[100] flex items-center justify-center bg-black transition-opacity duration-500 ${
        phase === "leaving" ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <SplashLogo />
    </div>
  );
}

export default Splash;
