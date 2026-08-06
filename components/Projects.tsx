"use client";
import { montserrat_alternates, morona } from "@/lib/fonts";
import { projects } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { FaArrowRightLong, FaChevronLeft, FaChevronRight } from "react-icons/fa6";

function Projects() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (dir: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const step = card ? card.offsetWidth + el.clientWidth * 0.05 : el.clientWidth;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <div
      id="projects"
      className="relative w-screen min-h-[100vh] flex flex-col items-center justify-center py-10 md:py-20 md:pb-20 lg:pt-[40px] gap-8"
    >
      <div className={`flex flex-col items-center text-2xl mb-8 md:mb-12`}>
        <span className={`opacity-80 font-normal ${morona.className}`}>
          collection of my
        </span>
        <h1 className={`text-4xl md:text-4xl font-medium`}>recent projects</h1>
      </div>

      <div
        className="relative flex items-center w-full h-[50vh] md:h-[70vh] lg:h-[80vh] translate-y-[-20px] overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(black, black), radial-gradient(ellipse 55% 15% at 50% -6%, black 0, black 100%), radial-gradient(ellipse 55% 15% at 50% 106%, black 0, black 100%)",
          maskComposite: "exclude",
          WebkitMaskImage:
            "linear-gradient(black, black), radial-gradient(ellipse 55% 15% at 50% -6%, black 0, black 100%), radial-gradient(ellipse 55% 15% at 50% 106%, black 0, black 100%)",
          WebkitMaskComposite: "xor",
        }}
      >
        <button
            type="button"
            aria-label="Scroll left"
            onClick={() => scrollByCard(-1)}
            className="absolute left-3 md:left-4 top-1/2 z-20 -translate-y-1/2 size-11 md:size-12 rounded-full bg-black/45 hover:bg-black/60 text-white flex items-center justify-center transition-colors"
          >
            <FaChevronLeft className="text-lg md:text-xl" />
          </button>
          <button
            type="button"
            aria-label="Scroll right"
            onClick={() => scrollByCard(1)}
            className="absolute right-3 md:right-4 top-1/2 z-20 -translate-y-1/2 size-11 md:size-12 rounded-full bg-black/45 hover:bg-black/60 text-white flex items-center justify-center transition-colors"
          >
            <FaChevronRight className="text-lg md:text-xl" />
          </button>

          <div
            ref={scrollerRef}
            className="relative flex items-center w-full h-full gap-[5%] overflow-x-scroll scrollbar-hide"
            style={{
              scrollSnapType: "x mandatory",
            }}
          >
          <div></div>

          {projects.map((project, index) => (
            <div
              key={index}
              data-card
              className="relative min-w-[90%] md:min-w-[90%] h-full bg-[#61cc9c]/85 snap-center flex flex-col items-center pt-10 md:pt-16 px-2 md:px-4 rounded-t-[20px] md:rounded-t-[40px]"
            >
              <Link href="https://github.com/creativeambition" target="_blank">
                <div
                  className={`group relative flex items-center gap-2 md:gap-4 text-2xl md:text-5xl lg:text-6xl text-black/[80%] font-bold ${montserrat_alternates.className} font-bold`}
                >
                  {project.title}
                  <div className="size-[20px] md:size-[30px] text-xl md:text-2xl group-hover:translate-x-3 group-hover:-translate-y-3 group-hover:-rotate-[35deg] transition-transform">
                    <FaArrowRightLong />
                  </div>
                </div>
              </Link>

              <span className="text-sm font-medium text-black/[80%] mt-2 max-w-[90%] md:max-w-[65%] lg:max-w-[35%] text-center">
                {project.description}
              </span>

              <div className="relative flex-1 flex items-center justify-center w-full overflow-hidden mt-6 md:mt-8">
                <Image
                  src={project.thumbnail}
                  alt={`${project.title} preview`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 90vw"
                  className="object-cover object-top"
                  loading="lazy"
                />
              </div>
            </div>
          ))}

          <div></div>
        </div>
      </div>

      <HScrollIndicator />
    </div>
  );
}

export default Projects;

function HScrollIndicator() {
  return (
    <div className="absolute bottom-20 flex flex-col items-center gap-4 mt-4 select-none pointer-events-none">
      <div className="flex items-center gap-3">
        <div className="h-[1px] w-16 bg-gradient-to-r from-transparent via-[#61cc9c] to-transparent animate-slide-right" />
        <span className="text-xs uppercase tracking-wider text-white/60">
          scroll
        </span>
        <div className="h-[1px] w-16 bg-gradient-to-r from-transparent via-[#61cc9c] to-transparent animate-slide-left" />
      </div>
      <div className="flex gap-2">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="h-1.5 w-1.5 rounded-full bg-[#61cc9c]/30 animate-pulse"
            style={{ animationDelay: `${i * 200}ms` }}
          />
        ))}
      </div>
    </div>
  );
}
