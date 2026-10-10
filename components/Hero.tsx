import { sacramento, stretch } from "@/lib/fonts";
import { FancyButton } from "./ui/FancyButton";

function Hero() {
  return (
    <div
      id="hero"
      className="relative flex flex-col min-h-[100vh]  px-2 items-center w-screen"
    >
      <div className="relative flex flex-col items-center w-fit mt-[100px] md:mt-[120px]">
        <div className="flex flex-col items-center gap-3 lg:gap-5">
          <h1
            className={`${stretch.className} text-[length:clamp(1.75rem,7vw_+_0.5rem,6rem)] leading-[1.1]`}
          >
            mmoodeern
          </h1>

          <div className="w-full flex items-center gap-4 md:gap-8">
            <span
              className={`${sacramento.className} text-center text-[length:clamp(1.4rem,5vw_+_0.5rem,3.75rem)] leading-[1.1] gap-4`}
            >
              problems require
            </span>
            <div aria-hidden className="relative flex flex-1 items-center">
              <span className="size-2 md:size-2.5 shrink-0 rounded-full bg-[#61cc9c] shadow-[0_0_12px_rgba(97,204,156,0.8)]" />
              <span className="hero-wave relative h-3 flex-1" />
            </div>
          </div>

          <div className="relative">
            <span
              className={`${stretch.className} text-[length:clamp(1.75rem,7vw_+_0.5rem,6rem)] leading-[1.1]`}
            >
              opptimaLL
            </span>{" "}
            <span
              className={`${sacramento.className} absolute bottom-2 md:bottom-3 right-1 text-[length:clamp(1.4rem,5vw_+_0.5rem,5rem)] leading-[1.1]`}
            >
              solutions
            </span>
          </div>
        </div>
      </div>

      <div className="mb-auto mt-12 md:mt-16">
        <FancyButton target="projects" label="View my work" />
      </div>
    </div>
  );
}

export default Hero;
