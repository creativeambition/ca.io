"use client";

import { sacramento } from "@/lib/fonts";
import { useEffect, useRef } from "react";

function ScrollIndicator() {
  const barRef = useRef(null);
  const labelRef = useRef(null);

  useEffect(() => {
    let rafId = null;
    // Measured only when the document resizes, so scrolling never forces layout.
    let maxScroll = 0;

    const update = () => {
      rafId = null;
      const fraction =
        maxScroll > 0 ? Math.min(1, Math.max(0, window.scrollY / maxScroll)) : 0;

      if (barRef.current) {
        barRef.current.style.transform = `scaleY(${fraction})`;
      }
      if (labelRef.current) {
        labelRef.current.textContent = `${Math.ceil(fraction * 100)}%`;
      }
    };

    const onScroll = () => {
      if (rafId == null) {
        rafId = requestAnimationFrame(update);
      }
    };

    const resizeObserver = new ResizeObserver(() => {
      maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      onScroll();
    });
    resizeObserver.observe(document.body);

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("scroll", onScroll);
      if (rafId != null) {
        cancelAnimationFrame(rafId);
      }
    };
  }, [barRef, labelRef]);

  return (
    <div className="hidden md:flex fixed z-30 right-8 top-[50%] translate-y-[-50%] w-1 h-[80vh] bg-[#61cc9c]/[0.04] before:absolute before:w-full before:aspect-[1/2] before:top-0 before:border before:border-b-0 after:absolute after:w-full after:aspect-[1/2] after:bottom-0 after:border after:border-t-0">
      <div
        ref={barRef}
        className="scroll-indicator absolute w-full h-full top-0 origin-top rounded-full"
        style={{
          backgroundImage: "linear-gradient(transparent, #61cc9c)",
          transform: "scaleY(0)",
          transition: "transform .3s ease",
        }}
      ></div>
      <span
        ref={labelRef}
        className={`${sacramento.className} absolute top-[101%] font-semibold left-[50%] translate-x-[-50%]`}
      >
        0%
      </span>
    </div>
  );
}

export default ScrollIndicator;
