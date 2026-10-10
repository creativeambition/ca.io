"use client";
import { poppins, sacramento } from "@/lib/fonts";
import Image from "next/image";
import NoodleArrow from "@/public/assets/noodle_arrow.svg";
import dynamic from "next/dynamic";
import { Suspense, useEffect, useRef, useState } from "react";

const SplineComponent = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
  loading: null,
});

export default function SplineScene() {
  const [inView, setInView] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [interacted, setInteracted] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "300px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [containerRef]);

  // The Spline runtime is heavy and redraws every frame, so it loads on the
  // visitor's first interaction rather than with the page (a "facade").
  useEffect(() => {
    const events = ["pointerdown", "pointermove", "touchstart", "keydown", "wheel", "scroll"];
    const start = () => {
      setInteracted(true);
      events.forEach((name) => window.removeEventListener(name, start));
    };
    events.forEach((name) =>
      window.addEventListener(name, start, { once: true, passive: true })
    );
    return () => events.forEach((name) => window.removeEventListener(name, start));
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute top-[100vh] -translate-y-[35%] w-full h-[100vh] overflow-hidden flex flex-col lg:z-20"
    >
      <div
        className={`${sacramento.className} flex gap-4 relative left-8 md:left-12 lg:left-28 mt-8 z-10 pointer-events-none`}
      >
        <div className="flex flex-col gap-4">
          <h1 className={`text-4xl md:text-5xl`}>
            the ultimate <b className="text-[#61cc9c]">dev</b> <br /> keyboard
            workflow
          </h1>

          <span
            role="status"
            aria-hidden={loaded}
            className={`${poppins.className} inline-flex w-max items-center gap-2 text-xs text-[#61cc9c] transition-opacity duration-500 ${
              loaded ? "opacity-0" : "opacity-100"
            }`}
          >
            <span className="size-3 rounded-full border-2 border-[#61cc9c]/30 border-t-[#61cc9c] animate-spin" />
            loading 3D scene…
          </span>
        </div>

        <Image
          src={NoodleArrow}
          alt="noodle-arrow"
          className={`w-[100px] translate-y-[10px] translate-x-[-20px] transition-opacity duration-700 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>

      {inView && interacted && (
        <Suspense fallback={null}>
          <div
            className={`absolute left-0 top-0 w-[135%] h-full sm:w-[122%] sm:left-1/2 sm:-translate-x-1/2 transition-opacity duration-700 ${
              loaded ? "opacity-100" : "opacity-0"
            }`}
          >
            <SplineComponent
              scene="https://prod.spline.design/YTurGkXAz-yWLxOO/scene.splinecode"
              onLoad={() => setLoaded(true)}
            />
          </div>
        </Suspense>
      )}
    </div>
  );
}
