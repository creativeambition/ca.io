import { montserrat_alternates, sacramento, stretch } from "@/lib/fonts";
import AboutCard from "@/components/ui/AboutCard";
import Image from "next/image";
import StoryAndDetailsCard from "@/components/StoryAndDetailsCard";
import me from "@/public/assets/me.jpg";
import UselessFacts from "@/components/UselessFacts";

function About() {
  return (
    <div
      id="about"
      className="relative flex flex-col w-screen md:max-lg:min-h-screen lg:h-[80vh] xl:h-[90vh] px-4 py-16 pb-0 lg:flex-row md:px-[50px] lg:px-[40px] xl:px-[100px] xl:pl-[80px] 2xl:px-[180px] 2xl:pl-[180px] gap-8 md:gap-0 pointer-events-none"
    >
      <div className={`flex md:flex-1 flex-col items-center md:items-start`}>
        <div className="flex flex-1 w-full gap-4">
          <div className="w-[2px] h-full bg-slate-200 rounded-lg ml-4"></div>

          <div className={`hidden sm:flex flex-col mt-2 gap-2`}>
            <h2 className={`text-lg font-medium`}>
              Did you know ?{" "}
              <i className="text-[#61cc9c]">
                {"{"} Useless, but true facts {"}"}
              </i>
            </h2>
            <UselessFacts />
          </div>
        </div>

        <span
          className={`${sacramento.className} mb-4 md:mb-8 text-2xl mt-9 md:text-4xl`}
        >
          Hey mate! I&apos;m
        </span>
        <h1
          className={`${stretch.className} text-4xl mb-5 font-semibold md:text-6xl 2xl:text-7xl md:text-nowrap`}
        >
          Chrys {"{ca.io}"}
        </h1>
        <span
          className={`text-base md:text-xl ${montserrat_alternates.className}`}
        >
          Full-Stack <code className="text-[#61cc9c]">Ctrl + C </code>
          De
          <code className="text-[#61cc9c]"> V </code>eloper 😎
        </span>
      </div>

      <div className="relative min-h-[70vh] md:max-xl:min-h-[90vh] md:flex mt-[250px] md:mt-0 flex-1 mx-auto lg:ml-auto items-center justify-center lg:gap-8 md:px-2 w-full pointer-events-auto">
        <AboutCard detailsCard={false}>
          <Image
            fill
            sizes="(max-width: 768px) 85vw, 350px"
            className="absolute top-0 left-0 object-cover"
            src={me}
            alt="me"
          />
        </AboutCard>

        <AboutCard
          detailsCard={true}
          className="details-card top-[40%] right-0 md:top-auto"
        >
          <span className="text-[#61cc9c] font-semibold text-lg md:text-xl">
            # Dev-101
          </span>

          <StoryAndDetailsCard />
        </AboutCard>
      </div>
    </div>
  );
}

export default About;

