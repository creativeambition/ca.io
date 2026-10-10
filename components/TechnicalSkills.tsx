import {
  BackEndSkills,
  FrontEndSkills,
  aiEngineeringSkills,
  dbSkills,
  mlSkills,
  otherSkills,
  testingSkills,
} from "@/lib/utils";
import { sacramento, stretch } from "@/lib/fonts";
import type { Orbit } from "./SkillOrbit";

import dynamic from "next/dynamic";

const orbits: Orbit[] = [
  {
    label: "frontend, backend & testing",
    color: "97,204,156",
    groups: [
      { category: "Frontend", skills: FrontEndSkills },
      { category: "Backend", skills: BackEndSkills },
      { category: "Testing", skills: testingSkills },
    ],
  },
  {
    label: "data, cloud & tooling",
    color: "245,163,92",
    groups: [
      { category: "Database", skills: dbSkills },
      { category: "Cloud & Tooling", skills: otherSkills },
    ],
  },
  {
    label: "AI engineering & ML",
    color: "167,139,250",
    groups: [
      { category: "Machine Learning", skills: mlSkills },
      { category: "AI Engineering", skills: aiEngineeringSkills },
    ],
  },
];

const SkillOrbit = dynamic(() => import("./SkillOrbit"), {
  ssr: true,
  loading: null,
});

function TechnicalSkills() {
  return (
    <div className="relative min-h-0 md:min-h-[100vh] w-screen flex justify-center items-center pb-4 md:pb-10">
      <div
        id="skills"
        className="grid w-full grid-cols-1 items-center gap-6 md:gap-8 px-6 md:px-[20px] lg:px-8 xl:px-12 2xl:px-24 py-4 md:py-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:grid-rows-[auto_1fr] lg:gap-x-16 lg:gap-y-10"
      >
        <div className="flex flex-col items-start text-left lg:self-start">
          <span
            className={`${sacramento.className} mb-3 md:mb-5 text-2xl md:text-4xl`}
          >
            what&apos;s in the toolbox?
          </span>
          <h2
            className={`${stretch.className} mb-4 md:mb-5 text-3xl md:text-5xl 2xl:text-6xl font-semibold md:text-nowrap`}
          >
            Tech <span className="text-[#61cc9c]">{"{stack}"}</span>
          </h2>
          <p
            className={`max-w-md text-base md:text-lg text-white/85`}
          >
            <code className="text-[#61cc9c]">Interfaces</code>,{" "}
            <code className="text-[#61cc9c]">infrastructure</code>, and the{" "}
            <code className="text-[#61cc9c]">intelligence</code> in between.
          </p>
        </div>

        <div className="justify-self-center lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:self-center">
          <SkillOrbit
            orbits={orbits}
            className="w-[88vw] max-w-[640px] lg:w-[min(52vw,720px)] lg:max-w-none"
          />
        </div>

        <div className="flex w-full flex-col gap-10 md:gap-14 lg:self-stretch">
          <ul className="flex flex-col gap-3">
            {orbits.map((orbit, index) => (
              <li
                key={orbit.label}
                className="flex items-baseline gap-3 text-sm md:text-base"
              >
                <span
                  className="w-10 shrink-0 font-semibold tabular-nums"
                  style={{ color: `rgb(${orbit.color})` }}
                >
                  # 0{index + 1}
                </span>
                <span className="text-white/80">{orbit.label}</span>
              </li>
            ))}
          </ul>

          <blockquote className="mt-4 md:mt-8 lg:mt-auto flex max-w-md flex-col gap-4">
            <span aria-hidden className="h-[3px] w-12 rounded-full bg-[#61cc9c]" />
            <p
              className={`text-xl md:text-2xl 2xl:text-3xl font-medium leading-snug text-white/95`}
            >
              The stack follows the{" "}
              <span className="text-[#61cc9c]">problem</span>, so there&apos;s
              always a <span className="text-[#61cc9c]">new tool</span> pulling
              into range.
            </p>
          </blockquote>
        </div>
      </div>
    </div>
  );
}

export default TechnicalSkills;
