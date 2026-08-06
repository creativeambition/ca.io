import {
  BackEndSkills,
  FrontEndSkills,
  dbSkills,
  otherSkills,
} from "@/lib/utils";

import dynamic from "next/dynamic";

const SkillRow = dynamic(() => import("./SkillRow"), {
  ssr: true,
  loading: null,
});

function TechnicalSkills() {
  return (
    <div className="relative min-h-0 md:min-h-[100vh] w-screen flex justify-center items-center pb-4 md:pb-10">
      <div
        id="skills"
        className="flex flex-col w-full items-center gap-4 md:gap-8 skew-y-12 py-4 md:py-6"
      >
        <div className="flex w-full justify-end px-6 md:px-12">
          <div className="flex flex-col items-end gap-1 text-right">
            <h2 className="text-4xl md:text-5xl font-medium">
              Tech <span className="text-[#61cc9c]">Stack</span>
            </h2>
            <span className="text-sm md:text-base opacity-70">
              the tools I use to bring ideas to life
            </span>
          </div>
        </div>

        <div className="flex flex-col w-full md:gap-8 items-center">
          <SkillRow skills={FrontEndSkills} reverse={false}></SkillRow>
          <SkillRow skills={BackEndSkills} reverse={true}></SkillRow>
          <SkillRow skills={dbSkills} reverse={false}></SkillRow>
          <SkillRow skills={otherSkills} reverse={true}></SkillRow>
        </div>

        <div className="flex w-full justify-start px-6 md:px-12">
          <div className="flex flex-col items-start gap-1 text-left">
            <h2 className="text-4xl md:text-5xl font-medium">
              plus <span className="text-[#61cc9c]">everything else</span>
            </h2>
            <span className="text-sm md:text-base opacity-70">
              always picking up something new
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechnicalSkills;
