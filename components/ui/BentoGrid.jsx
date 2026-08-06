import { montserrat_alternates } from "@/lib/fonts";
import CardCorners from "./CardCorners";
import { InteractiveGradientBg } from "@/components/ui/InteractiveGradientBg";
import { FancyButtonAlt } from "./FancyButton";
import { socials } from "@/lib/utils";
import { PiFilePdfFill } from "react-icons/pi";
import { RiChatSmile3Line } from "react-icons/ri";
import Link from "next/link";
import { memo, useMemo } from "react";
import { DynamicGame } from "@/lib/dynamic-imports";
import DigitalScoreboard from "./DigitalScoreboard";

const techStack = {
  primary: ["React", "Next", "Node", "Express", "MongoDB"],
  secondary: [
    "Postgres",
    "MySQL",
    "AWS",
    "Google Cloud",
    "Blender",
  ],
};

const BentoGrid = memo(function BentoGrid() {
  const renderTechStack = useMemo(
    () => ({
      primary: techStack.primary.map((item) => (
        <div key={item} className="bg-black rounded-lg p-4 py-2 text-sm">
          {item}
        </div>
      )),
      secondary: techStack.secondary.map((item) => (
        <div key={item} className="bg-black rounded-lg p-4 py-2 text-sm">
          {item}
        </div>
      )),
    }),
    []
  );

  return (
    <div className="flex flex-col md:grid md:grid-cols-6 md:grid-rows-2 xl:grid-rows-3 w-full flex-1 gap-4">
      <div className="relative flex flex-col items-center p-4 min-h-[250px] border border-white/[25%] bg-black/[20%] backdrop-blur-md col-span-2">
        <CardCorners />
        <h1 className={`${montserrat_alternates.className} font-semibold`}>
          Location
        </h1>
        <div className="flex flex-col items-center m-auto gap-2">
          <h1 className="text-2xl font-bold">Accra, Ghana</h1>
          <span className="text-gray-400">
            Flexible &amp; open to remote work
          </span>
        </div>
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "url('/assets/illustration-alt.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div>

      <div
        className={`flex flex-col items-center p-4 relative min-h-[250px] border border-white/[25%] bg-black/[20%] backdrop-blur-md col-span-2`}
      >
        <CardCorners />
        <h1 className={`${montserrat_alternates.className} font-semibold`}>
          Education
        </h1>
        <div className="flex flex-col items-center m-auto gap-2">
          <h1 className={`text-2xl font-bold text-center`}>
            BSc. Computer Science
          </h1>
          <span className="text-center text-gray-400">
            Ghana Communication Technology University
          </span>
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: "url('/assets/address-illustration.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>
      </div>

      <div className="flex flex-col justify-start items-start p-4 relative min-h-[250px] border bg-black/[20%] border-white/[25%] col-span-2 gap-8">
        <CardCorners />
        <InteractiveGradientBg />

        <h1
          className={`relative ${montserrat_alternates.className} whitespace-nowrap font-semibold`}
        >
          Tech Stack
        </h1>
        <span className="relative text-base">
          a result of <i>half-a-decade</i> of continuous learning and
          self-improvements
        </span>

        <div className="flex flex-col gap-2 mt-auto w-full">
          <div
            className="flex justify-between gap-2"
            style={{
              maskImage: "radial-gradient(circle, black, transparent)",
            }}
          >
            {renderTechStack.primary}
          </div>

          <div
            className="flex justify-between items-start gap-2 whitespace-nowrap"
            style={{
              maskImage: "radial-gradient(circle, black, transparent)",
            }}
          >
            {renderTechStack.secondary}
          </div>
        </div>
      </div>

      <div className="relative flex flex-col p-4 min-h-[250px] border bg-black/[20%] border-white/[25%] xl:row-span-2 col-span-3">
        <CardCorners />
        <InteractiveGradientBg />

        <h1
          className={`relative ${montserrat_alternates.className} font-semibold`}
        >
          Scoreboard
        </h1>

        <DigitalScoreboard />

        <div className="relative flex items-center gap-3 mt-2">
          {socials.map(({ name, Icon, link }) => (
            <Link
              key={name}
              href={link}
              target="_blank"
              className="size-9 rounded-lg bg-black border border-white/30 flex items-center justify-center text-white hover:border-[#61cc9c] transition-colors"
            >
              <Icon className="text-[18px]" />
            </Link>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center p-4 relative min-h-[250px] border border-white/[25%] xl:row-span-2 col-span-3 xl:col-span-2 bg-black/[20%] backdrop-blur-md">
        <CardCorners />

        <span className="mb-4">
          Let&apos;s play a game of{" "}
          <b className={`text-[#61cc9c]`}>Classic Chess😎</b>
        </span>

        <div className="relative my-auto w-full flex flex-col items-center">
          <DynamicGame />
        </div>
      </div>

      <div className="flex justify-center md:hidden p-4 xl:flex flex-col relative min-h-[250px] border border-white/[25%] bg-black/[20%] backdrop-blur-md">
        <CardCorners />
        <span className="text-center mx-auto self-center">
          Freelance Software Developer{" "}
          <em className="text-[#61cc9c]">@fiverr</em>
        </span>
        <div
          className="h-[70px] my-auto"
          style={{
            backgroundImage: "url('/assets/contact/fiverr.png')",
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <FancyButtonAlt
          link="https://www.fiverr.com/users/chrysyt"
          icon={<RiChatSmile3Line />}
          title="Get in touch"
        />
      </div>

      <div className="hidden justify-center p-4 xl:flex flex-col relative min-h-[250px] border border-white/[25%] bg-black/[20%] backdrop-blur-md">
        <CardCorners />
        <h1 className="mx-auto">Download Resume</h1>
        <div
          className="flex-1 w-[65%] mt-1 mb-0 mx-auto"
          style={{
            backgroundImage: "url('/assets/res_illustration.png')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "top",
          }}
        ></div>

        <Link
          target="_blank"
          href="/resume.pdf"
          download={true}
          className="flex flex-col mt-auto"
        >
          <FancyButtonAlt icon={<PiFilePdfFill />} title="Download" />
        </Link>
      </div>
    </div>
  );
});

export default BentoGrid;
