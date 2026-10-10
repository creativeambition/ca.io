import { sacramento, stretch } from "@/lib/fonts";
import { projects } from "@/lib/utils";
import CardCorners from "@/components/ui/CardCorners";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const GITHUB = "https://github.com/creativeambition";

const TECH_NAMES: Record<string, string> = {
  astro: "Astro",
  firebase: "Firebase",
  html: "HTML",
  huggingface: "Hugging Face",
  js: "JavaScript",
  next: "Next.js",
  react: "React",
  sass: "Sass",
  solidjs: "SolidJS",
  supabase: "Supabase",
};

const techName = (src: string) => {
  const key = src.split("/").pop()?.split(".")[0] ?? "";
  return TECH_NAMES[key] ?? key;
};

function Projects() {
  return (
    <section
      id="projects"
      className="relative w-screen flex flex-col gap-10 md:gap-14 py-20 md:py-28 px-6 md:px-[20px] lg:px-8 xl:px-12 2xl:px-24"
    >
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="flex flex-col items-start">
          <span
            className={`${sacramento.className} mb-3 md:mb-5 text-2xl md:text-4xl`}
          >
            things I&apos;ve shipped
          </span>
          <h2
            className={`${stretch.className} mb-4 md:mb-5 text-3xl md:text-5xl 2xl:text-6xl font-semibold md:text-nowrap`}
          >
            Selected <span className="text-[#61cc9c]">{"{work}"}</span>
          </h2>
          <p
            className={`max-w-md text-base md:text-lg text-white/85`}
          >
            Graduated from <code className="text-[#61cc9c]">todo</code> apps
            and <code className="text-[#61cc9c]">calculators</code> to things
            people actually use.
          </p>
        </div>

        <Link
          href={GITHUB}
          target="_blank"
          className="group flex items-center gap-2 self-start md:self-end text-sm md:text-base text-white/80 hover:text-[#61cc9c] transition-colors"
        >
          More on GitHub
          <FaArrowRightLong className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, i) => (
          <Link
            key={project.title}
            href={project.link ?? GITHUB}
            target="_blank"
            className="group relative flex flex-col border border-white/[25%] bg-black/[40%] backdrop-blur-md p-3 md:p-4 hover:border-[#61cc9c]/60 transition-colors"
          >
            <CardCorners />

            <div className="relative aspect-[16/10] w-full overflow-hidden border border-white/10">
              <Image
                src={project.thumbnail}
                alt={`${project.title} preview`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>

            <div className="flex flex-1 flex-col gap-4 pt-4 md:pt-5">
              <div className="flex items-start justify-between gap-4">
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-semibold text-[#61cc9c]">
                    # {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3
                    className={`text-xl md:text-2xl font-medium`}
                  >
                    {project.title}
                  </h3>
                  <p className="text-sm md:text-base opacity-70">
                    {project.description}
                  </p>
                </div>
                <FaArrowRightLong className="mt-7 shrink-0 text-xl text-white/70 group-hover:text-[#61cc9c] group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:-rotate-[35deg] transition-transform" />
              </div>

              <ul className="mt-auto flex flex-wrap gap-2">
                {project.techs.map((tech) => (
                  <li
                    key={tech}
                    title={techName(tech)}
                    className="flex items-center gap-2 rounded-full border border-white/15 bg-black/70 py-1 pl-1 pr-3 text-xs text-white/80"
                  >
                    <span className="flex size-6 items-center justify-center rounded-full bg-white/5">
                      <Image
                        src={tech}
                        alt=""
                        width={16}
                        height={16}
                        className="size-4 object-contain"
                      />
                    </span>
                    {techName(tech)}
                  </li>
                ))}
              </ul>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Projects;
