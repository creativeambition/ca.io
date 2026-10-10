import { sacramento, stretch } from "@/lib/fonts";
import UselessFacts from "@/components/UselessFacts";

function About() {
  return (
    <div
      id="about"
      className="relative flex flex-col w-screen md:max-lg:min-h-[60vh] lg:h-[60vh] xl:h-[65vh] px-4 py-16 pb-0 lg:flex-row md:px-[50px] lg:px-[40px] xl:px-[100px] xl:pl-[80px] 2xl:px-[180px] 2xl:pl-[180px] gap-8 md:gap-0 pointer-events-none"
    >
      <div className={`flex md:flex-1 flex-col items-center md:items-start`}>
        <div className="flex flex-1 w-full gap-4">
          <div className={`relative lg:z-30 hidden sm:flex flex-col mt-2 gap-2`}>
            <h2 className={`text-lg font-medium`}>
              Did you know ?{" "}
              <i className="text-[#61cc9c]">
                {"{"} Useless, but true facts {"}"}
              </i>
            </h2>
            <UselessFacts />
          </div>
        </div>

        <div className="flex flex-col items-center md:items-start lg:items-end lg:self-end lg:text-right">
          <span
            className={`${sacramento.className} mb-4 md:mb-8 text-2xl mt-9 md:text-4xl`}
          >
            Hello there! I&apos;m
          </span>
          <h1
            className={`${stretch.className} text-4xl mb-5 font-semibold md:text-6xl 2xl:text-7xl md:text-nowrap`}
          >
            Chrys {"{ca.io}"}
          </h1>
          <span
            className={`text-base md:text-xl`}
          >
            Full-Stack <code className="relative top-[0.5em] text-[#61cc9c]">Ctrl + C </code>
            De
            <code className="relative top-[0.5em] text-[#61cc9c]"> V </code>eloper 😎
          </span>
        </div>
      </div>
    </div>
  );
}

export default About;

