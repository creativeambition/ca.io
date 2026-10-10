"use client";
import CardCorners from "./CardCorners";
import Image from "next/image";
import { InteractiveGradientBg } from "@/components/ui/InteractiveGradientBg";
import { FancyButtonAlt } from "./FancyButton";
import { PiFilePdfFill } from "react-icons/pi";
import { HiOutlineAcademicCap, HiOutlineLocationMarker } from "react-icons/hi";
import { useEffect, useState, useSyncExternalStore } from "react";
import { DynamicGame } from "@/lib/dynamic-imports";
import DigitalScoreboard from "./DigitalScoreboard";

const DESKTOP_QUERY = "(min-width: 768px)";

// False on the server and on phones, so desktop-only cards (and their JS) are
// never mounted on mobile.
function useIsDesktop() {
  return useSyncExternalStore(
    (onChange) => {
      const mql = window.matchMedia(DESKTOP_QUERY);
      mql.addEventListener("change", onChange);
      return () => mql.removeEventListener("change", onChange);
    },
    () => window.matchMedia(DESKTOP_QUERY).matches,
    () => false
  );
}

// Kept in step with the Tech Stack orbit (lib/utils.ts).
const techStack = {
  primary: ["Next", "TypeScript", "Node", "Python", "Strapi"],
  secondary: ["Postgres", "MongoDB", "Redis", "Docker"],
  tertiary: ["GitHub", "Playwright", "Linux / Shell", "AWS", "Google Cloud", "Blender"],
};

function TechRow({ items, className = "" }) {
  return (
    <div
      className={`flex justify-between gap-2 ${className}`}
      style={{ maskImage: "radial-gradient(circle, black, transparent)" }}
    >
      {items.map((item) => (
        <div key={item} className="bg-black rounded-lg p-4 py-2 text-sm">
          {item}
        </div>
      ))}
    </div>
  );
}

function Card({ className = "", children, illustration }) {
  return (
    <div
      className={`relative flex flex-col p-4 border border-white/[25%] bg-black/[45%] ${className}`}
    >
      <CardCorners />
      {illustration && (
        <Image
          src={illustration}
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          quality={40}
          className="opacity-10 object-cover"
        />
      )}
      {children}
    </div>
  );
}

function CardTitle({ children, className = "" }) {
  return (
    <h2
      className={`relative font-semibold ${className}`}
    >
      {children}
    </h2>
  );
}

function InfoRow({ icon, label, title, detail }) {
  return (
    <div className="flex items-center gap-4">
      <span className="flex size-11 shrink-0 items-center justify-center rounded-lg border border-white/15 bg-black/60 text-xl text-[#61cc9c]">
        {icon}
      </span>
      <div className="flex min-w-0 flex-col">
        <p className="text-[11px] uppercase tracking-[0.2em] text-white/45">
          {label}
        </p>
        <p className="text-base md:text-lg font-semibold leading-snug">
          {title}
        </p>
        <p className="text-xs md:text-sm text-gray-400">{detail}</p>
      </div>
    </div>
  );
}

const accraTime = new Intl.DateTimeFormat("en-GB", {
  hour: "2-digit",
  minute: "2-digit",
  timeZone: "Africa/Accra",
});

// Rendered after mount so the server and client markup match.
function AccraTime() {
  const [time, setTime] = useState(null);

  useEffect(() => {
    const tick = () => setTime(accraTime.format(new Date()));
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);

  return <span className="tabular-nums">{time ?? "--:--"}</span>;
}

// Keeps a grid cell empty in the desktop (xl) layout so it holds its shape.
function BlankCell({ className = "" }) {
  return <div aria-hidden className={`hidden xl:block min-h-[250px] ${className}`} />;
}

function BentoGrid() {
  const isDesktop = useIsDesktop();

  return (
    <div className="grid w-full flex-1 grid-cols-2 gap-3 md:grid-cols-6 md:gap-4">
      <Card
        illustration="/assets/illustration-alt.png"
        className="col-span-2 gap-5 min-h-[260px] md:col-span-3 md:order-1 xl:order-none xl:col-span-2"
      >
        <div className="relative my-auto flex flex-col gap-4">
          <InfoRow
            icon={<HiOutlineLocationMarker />}
            label="Based in"
            title="Accra, Ghana"
            detail="West Africa · GMT"
          />
          <hr className="border-dashed border-white/15" />
          <InfoRow
            icon={<HiOutlineAcademicCap />}
            label="Education"
            title="BSc. Computer Science"
            detail="Ghana Communication Technology University"
          />
        </div>

        <div className="relative flex items-center justify-between border-t border-white/10 pt-3 text-xs text-white/50">
          <span>Local time in Accra</span>
          <span className="font-medium text-white/85">
            <AccraTime /> GMT
          </span>
        </div>
      </Card>

      <BlankCell className="xl:col-span-2" />

      {isDesktop && (
        <Card className="justify-start items-start gap-8 min-h-[250px] md:col-span-6 md:order-3 xl:order-none xl:col-span-2">
          <InteractiveGradientBg />
          <CardTitle className="whitespace-nowrap">Tech Stack</CardTitle>
          <p className="relative text-base">
            a result of <i>half-a-decade</i> of continuous learning and
            self-improvements
          </p>
          <div className="relative flex flex-col gap-2 mt-auto w-full">
            <TechRow items={techStack.primary} />
            <TechRow
              items={techStack.secondary}
              className="items-start whitespace-nowrap"
            />
            <TechRow
              items={techStack.tertiary}
              className="items-start whitespace-nowrap"
            />
          </div>
        </Card>
      )}

      <BlankCell className="xl:col-span-1" />

      {isDesktop && (
        <Card className="min-h-[250px] md:col-span-3 md:order-4 xl:order-none xl:row-span-2">
          <InteractiveGradientBg />
          <CardTitle className="text-center">Scoreboard</CardTitle>
          <DigitalScoreboard />
        </Card>
      )}

      <Card className="col-span-2 items-center min-h-[250px] md:col-span-3 md:order-5 xl:order-none xl:col-span-2 xl:row-span-2">
        <div className="relative mb-5 flex w-full flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
          <CardTitle>
            Fancy a round of{" "}
            <span className="text-[#61cc9c]">Tic-Tac-Toe?</span>
          </CardTitle>
          <span className="shrink-0 text-xs text-white/50">
            you <b className="text-[#61cc9c]">X</b> · ca.io{" "}
            <b className="text-white/80">O</b>
          </span>
        </div>
        <div className="relative my-auto flex w-full flex-col items-center">
          <DynamicGame />
        </div>
      </Card>

      {isDesktop && (
        <Card className="items-center justify-center gap-3 min-h-[260px] md:col-span-3 md:order-2 xl:order-none xl:col-span-1">
          <CardTitle>Résumé</CardTitle>
          <div className="relative w-[55%] flex-1 min-h-[120px] overflow-hidden">
            <Image
              src="/assets/res_illustration.png"
              alt=""
              fill
              sizes="(max-width: 1280px) 25vw, 10vw"
              className="object-cover object-top"
            />
          </div>
          <FancyButtonAlt
            link="/resume.pdf"
            icon={<PiFilePdfFill />}
            title="Download"
          />
        </Card>
      )}
    </div>
  );
}

export default BentoGrid;
