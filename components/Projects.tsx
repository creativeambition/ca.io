"use client";
import { montserrat_alternates, morona } from "@/lib/fonts";
import { projects } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { FaArrowRightLong, FaChevronLeft, FaChevronRight } from "react-icons/fa6";

function Projects() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = projects.length;

  const goTo = useCallback(
    (next: number) => {
      setIndex((next + count) % count);
    },
    [count]
  );

  const prev = useCallback(() => goTo(index - 1), [goTo, index]);
  const next = useCallback(() => goTo(index + 1), [goTo, index]);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % count), 5000);
    return () => clearInterval(id);
  }, [paused, count]);

  return (
    <div
      id="projects"
      className="relative w-screen min-h-[100vh] flex flex-col items-center justify-center py-6 md:py-20 md:pb-20 lg:pt-[40px] gap-6 md:gap-8"
    >
      <div className={`flex flex-col items-center text-2xl mb-4 md:mb-12`}>
        <span className={`opacity-80 font-normal ${morona.className}`}>
          collection of my
        </span>
        <h1 className={`text-4xl md:text-4xl font-medium`}>recent projects</h1>
      </div>

      <div
        className="slide-clip relative flex items-center w-full h-[50vh] md:h-[70vh] lg:h-[80vh] translate-y-[-20px] overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <button
          type="button"
          aria-label="Previous project"
          onClick={prev}
          className="absolute left-3 md:left-4 top-1/2 z-20 -translate-y-1/2 size-11 md:size-12 rounded-full bg-black/45 hover:bg-black/60 text-white flex items-center justify-center transition-colors"
        >
          <FaChevronLeft className="text-lg md:text-xl" />
        </button>
        <button
          type="button"
          aria-label="Next project"
          onClick={next}
          className="absolute right-3 md:right-4 top-1/2 z-20 -translate-y-1/2 size-11 md:size-12 rounded-full bg-black/45 hover:bg-black/60 text-white flex items-center justify-center transition-colors"
        >
          <FaChevronRight className="text-lg md:text-xl" />
        </button>

        <div className="relative flex items-center w-full h-full overflow-hidden">
          <div
            className="flex items-center w-full h-full transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {projects.map((project, i) => (
              <div
                key={i}
                className="relative w-full flex-none h-full flex items-center justify-center"
              >
                <div className="w-full h-full flex flex-col items-center pt-10 md:pt-16 px-4 md:px-10 bg-[#61cc9c]/85">
                  <Link
                    href="https://github.com/creativeambition"
                    target="_blank"
                    className="group"
                  >
                    <div
                      className={`flex flex-wrap items-center justify-center gap-2 md:gap-4 text-center text-2xl md:text-5xl lg:text-6xl text-black/[80%] font-bold ${montserrat_alternates.className}`}
                    >
                      {project.title}
                      <div className="size-[20px] md:size-[30px] text-xl md:text-2xl group-hover:translate-x-3 group-hover:-translate-y-3 group-hover:-rotate-[35deg] transition-transform">
                        <FaArrowRightLong />
                      </div>
                    </div>
                    <span className="block text-sm md:text-base font-medium text-black/[80%] mt-2 max-w-[90%] md:max-w-[75%] lg:max-w-[60%] text-center mx-auto">
                      {project.description}
                    </span>
                  </Link>

                  <div className="relative flex-1 w-full overflow-hidden mt-6 md:mt-8">
                    <Image
                      src={project.thumbnail}
                      alt={`${project.title} preview`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 100vw, 100vw"
                      className="object-cover object-top"
                      loading={i === 0 ? "eager" : "lazy"}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3 -mt-4 z-10">
        {projects.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to project ${i + 1}`}
            onClick={() => goTo(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === index
                ? "w-8 bg-[#61cc9c]"
                : "w-2 bg-[#61cc9c]/30 hover:bg-[#61cc9c]/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
