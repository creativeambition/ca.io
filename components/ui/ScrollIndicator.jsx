"use client";

import { sacramento } from "@/lib/fonts";
import { useEffect, useRef } from "react";

function ScrollIndicator() {
  const barRef = useRef(null);
  const labelRef = useRef(null);

  useEffect(() => {
    let rafId = null;

    const update = () => {
      rafId = null;
      const scrollTop = window.scrollY;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const percentage = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;

      if (barRef.current) {
        barRef.current.style.height = `${percentage}%`;
      }
      if (labelRef.current) {
        labelRef.current.textContent = `${Math.ceil(percentage)}%`;
      }
    };

    const onScroll = () => {
      if (rafId == null) {
        rafId = requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafId != null) {
        cancelAnimationFrame(rafId);
      }
    };
  }, [barRef, labelRef]);

  return (
    <div className="hidden md:flex fixed right-8 top-[50%] translate-y-[-50%] w-1 h-[80vh] bg-[#61cc9c]/[0.04] before:absolute before:w-full before:aspect-[1/2] before:top-0 before:border before:border-b-0 after:absolute after:w-full after:aspect-[1/2] after:bottom-0 after:border after:border-t-0">
      <div
        ref={barRef}
        className="scroll-indicator absolute w-full h-[0%] top-0 rounded-full"
        style={{
          backgroundImage: "linear-gradient(transparent, #61cc9c)",
          transition: ".3s ease",
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
