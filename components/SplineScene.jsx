"use client";
import { sacramento } from "@/lib/fonts";
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

  return (
    <div
      ref={containerRef}
      className="absolute top-[100vh] -translate-y-[35%] w-full h-[100vh] overflow-hidden flex flex-col"
    >
      <div
        className={`${sacramento.className} flex gap-4 relative left-8 md:left-12 lg:left-28 mt-8 z-10 pointer-events-none`}
      >
        <h1 className={`text-4xl md:text-5xl`}>
          the ultimate <b className="text-[#61cc9c]">dev</b> <br /> keyboard
          workflow
        </h1>

        <Image
          src={NoodleArrow}
          alt="noodle-arrow"
          className="w-[100px] translate-y-[10px] translate-x-[-20px]"
        />
      </div>

      {inView && (
        <Suspense fallback={null}>
          <div className="absolute left-1/2 top-0 -translate-x-[35%] w-[135%] h-full sm:w-[122%] sm:left-1/2 sm:-translate-x-1/2">
            <SplineComponent scene="https://prod.spline.design/YTurGkXAz-yWLxOO/scene.splinecode" />
          </div>
        </Suspense>
      )}
    </div>
  );
}
