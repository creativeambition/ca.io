"use client";
import Lenis from "lenis";

let lenisInstance = null;

export function getLenis() {
  if (typeof window === "undefined") return null;
  return lenisInstance;
}

export function startSmoothScroll() {
  if (typeof window === "undefined" || lenisInstance) return () => {};

  lenisInstance = new Lenis();

  let rafId;
  const raf = (time) => {
    lenisInstance.raf(time);
    rafId = requestAnimationFrame(raf);
  };
  rafId = requestAnimationFrame(raf);

  return () => {
    cancelAnimationFrame(rafId);
    lenisInstance.destroy();
    lenisInstance = null;
  };
}

export function scrollToSection(target, offset = -80, duration = 0.8) {
  if (typeof window === "undefined") return;

  const el = document.getElementById(target);
  if (!el) return;

  if (lenisInstance) {
    lenisInstance.scrollTo(el, { offset, duration });
  } else {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
