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
            className={`${stretch.className} text-4xl sm:text-5xl md:text-7xl 2xl:text-8xl`}
          >
            mmoodeern
          </h1>

          <div className="w-full flex items-center gap-4 md:gap-8">
            <span
              className={`${sacramento.className} text-center text-3xl sm:text-4xl md:text-6xl xl:text-[50px] 2xl:text-[60px] gap-4`}
            >
              problems require
            </span>
            <div className="h-2 flex-1 bg-gray-50 rounded-lg"></div>
          </div>

          <div className="relative">
            <span
              className={`${stretch.className} text-4xl sm:text-5xl md:text-7xl 2xl:text-8xl`}
            >
              opptimaLL
            </span>{" "}
            <span
              className={`${sacramento.className} absolute bottom-2 md:bottom-3 right-1 text-3xl sm:text-4xl md:text-6xl xl:text-[60px] 2xl:text-[80px]`}
            >
              solutions
            </span>
          </div>
        </div>
      </div>

      <div className="mb-auto">
        <FancyButton target="projects" />
      </div>
    </div>
  );
}

export default Hero;
