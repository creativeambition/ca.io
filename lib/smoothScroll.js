"use client";
import Lenis from "lenis";

let lenisInstance = null;

export function getLenis() {
  if (typeof window === "undefined") return null;
  return lenisInstance;
}

// Lenis only smooths wheel scrolling (touch stays native by default), so on
// touch-first devices it would be pure per-frame overhead.
const isTouchFirst = () =>
  window.matchMedia("(hover: none) and (pointer: coarse)").matches;

// Frames to keep ticking after Lenis reports it has settled.
const IDLE_FRAMES = 10;

export function startSmoothScroll() {
  if (typeof window === "undefined" || lenisInstance || isTouchFirst()) {
    return () => {};
  }

  const lenis = new Lenis();
  lenisInstance = lenis;

  // Drive Lenis only while it is scrolling. An always-on rAF loop forces a
  // full rendering pass every frame even when the page is idle.
  let rafId = null;
  let idleFrames = 0;

  const loop = (time) => {
    lenis.raf(time);
    idleFrames = lenis.isScrolling ? 0 : idleFrames + 1;
    rafId = idleFrames > IDLE_FRAMES ? null : requestAnimationFrame(loop);
  };

  const wake = () => {
    idleFrames = 0;
    if (rafId != null) return;
    // Lenis measures elapsed time from its last tick; clearing it makes the
    // first frame after a pause a zero-length step instead of a jump.
    lenis.time = undefined;
    rafId = requestAnimationFrame(loop);
  };
  lenis.wake = wake;

  window.addEventListener("wheel", wake, { passive: true });

  return () => {
    window.removeEventListener("wheel", wake);
    if (rafId != null) cancelAnimationFrame(rafId);
    lenis.destroy();
    lenisInstance = null;
  };
}

export function scrollToSection(target, offset = -80, duration = 0.8) {
  if (typeof window === "undefined") return;

  const el = document.getElementById(target);
  if (!el) return;

  if (lenisInstance) {
    lenisInstance.scrollTo(el, { offset, duration });
    lenisInstance.wake();
  } else {
    const top = el.getBoundingClientRect().top + window.scrollY + offset;
    window.scrollTo({ top, behavior: "smooth" });
  }
}
