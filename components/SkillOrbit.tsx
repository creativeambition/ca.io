"use client";
import Image from "next/image";
import { useEffect, useRef, useState, type CSSProperties } from "react";

type Skill = { name: string; img: string };
export type SkillGroup = { category: string; skills: Skill[] };
// `color` is an "r,g,b" triplet so it can be used at any alpha.
export type Orbit = { label: string; color: string; groups: SkillGroup[] };
type OrbitSkill = Skill & { category: string; color: string };

// Radii, orb and hub sizes are in container-width units so the orbit scales with its box.
const ORB_SIZE = 10.5;
// The "build → ship" core is a diamond whose points sit 13cqw from the
// center, clear of the inner ring (one planet sits at 0°).
const HUB_SIZE = 26;
const HUB_TEXT = 2.6;
const HUB_POINTS = [
  "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2",
  "top-1/2 right-0 translate-x-1/2 -translate-y-1/2",
  "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2",
  "top-1/2 left-0 -translate-x-1/2 -translate-y-1/2",
];
// Ring radii, innermost first; supports up to three orbits.
const RADII = [20, 31, 42];

const flatten = ({ color, groups }: Orbit): OrbitSkill[] =>
  groups.flatMap(({ category, skills }) =>
    skills.map((skill) => ({ ...skill, category, color }))
  );

// Lit from the top-left with a shadowed terminator, tinted per orbit.
const planetStyle = (color: string, active: boolean): CSSProperties => ({
  background: `radial-gradient(circle at 30% 28%, rgba(${color},0.45), rgba(${color},0.12) 45%, rgba(0,0,0,0.88) 75%)`,
  borderColor: `rgba(${color},${active ? 0.85 : 0.3})`,
  boxShadow: active
    ? `inset -6px -8px 14px rgba(0,0,0,0.55), 0 0 28px rgba(${color},0.45)`
    : `inset -6px -8px 14px rgba(0,0,0,0.55), 4px 4px 0 rgba(${color},0.28)`,
});

function OrbitRing({
  skills,
  radius,
  reverse,
  revealed,
  running,
  active,
  onActivate,
  onRelease,
  delayOffset = 0,
}: {
  skills: OrbitSkill[];
  radius: number;
  reverse: boolean;
  revealed: boolean;
  running: boolean;
  active: OrbitSkill | null;
  onActivate: (skill: OrbitSkill, pause: boolean) => void;
  onRelease: () => void;
  delayOffset?: number;
}) {
  const spin = (counter: boolean) =>
    `orbit-spin ${reverse !== counter ? "orbit-spin-reverse" : ""}`;
  const playState: CSSProperties = {
    animationPlayState: running ? "running" : "paused",
  };

  return (
    <div
      className={`pointer-events-none absolute inset-0 flex items-center justify-center ${spin(false)}`}
      style={playState}
    >
      {skills.map((skill, index) => {
        const angle = (360 / skills.length) * index;
        const isActive = active?.name === skill.name;
        return (
          <div
            key={skill.name}
            className="absolute flex items-center justify-center transition-[transform,opacity] duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{
              width: `${ORB_SIZE}cqw`,
              height: `${ORB_SIZE}cqw`,
              opacity: revealed ? 1 : 0,
              transform: revealed
                ? `rotate(${angle}deg) translateX(${radius}cqw)`
                : `rotate(${angle}deg) translateX(0) scale(0.4)`,
              transitionDelay: `${(delayOffset + index) * 60}ms`,
            }}
          >
            {/* Undo the placement angle, then counter-spin so logos stay upright. */}
            <div
              className="size-full"
              style={{ transform: `rotate(${-angle}deg)` }}
            >
              <div className={`size-full ${spin(true)}`} style={playState}>
                <button
                  type="button"
                  aria-label={`${skill.name} (${skill.category})`}
                  tabIndex={revealed ? 0 : -1}
                  onPointerEnter={(e) =>
                    e.pointerType === "mouse" && onActivate(skill, true)
                  }
                  onPointerLeave={(e) => e.pointerType === "mouse" && onRelease()}
                  onFocus={() => onActivate(skill, true)}
                  onBlur={onRelease}
                  onClick={() => onActivate(skill, false)}
                  className={`pointer-events-auto flex size-full items-center justify-center rounded-full border transition-[transform,border-color,box-shadow] duration-300 outline-none focus-visible:ring-2 focus-visible:ring-white/70 ${
                    isActive ? "scale-110" : ""
                  }`}
                  style={planetStyle(skill.color, isActive)}
                >
                  <Image
                    src={skill.img}
                    alt=""
                    height={48}
                    width={48}
                    className="w-[46%] h-auto object-contain drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]"
                  />
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function SkillOrbit({
  orbits,
  className = "w-[92vw] max-w-[760px]",
}: {
  orbits: Orbit[];
  className?: string;
}) {
  const [inView, setInView] = useState(false);
  const [active, setActive] = useState<OrbitSkill | null>(null);
  const [paused, setPaused] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  const rings = orbits.map((orbit, index) => ({
    orbit,
    skills: flatten(orbit),
    radius: RADII[index],
    delayOffset: orbits
      .slice(0, index)
      .reduce((total, prev) => total + flatten(prev).length, 0),
  }));

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.35 }
    );

    observer.observe(root);
    return () => observer.disconnect();
  }, []);

  const activate = (skill: OrbitSkill, pause: boolean) => {
    setActive(skill);
    setPaused(pause);
  };
  const release = () => {
    setActive(null);
    setPaused(false);
  };

  const ringProps = {
    revealed: inView,
    running: inView && !paused,
    active,
    onActivate: activate,
    onRelease: release,
  };

  return (
    <div
      ref={rootRef}
      className={`relative aspect-square [container-type:inline-size] ${className}`}
    >
      {rings.map(({ orbit, radius }, index) => (
        <div
          key={orbit.label}
          className={`absolute rounded-full transition-opacity duration-1000 ${
            index === 0 ? "border border-dashed" : "border-y-2"
          }`}
          style={{
            inset: `${50 - radius}%`,
            opacity: inView ? 1 : 0,
            borderColor: `rgba(${orbit.color},0.25)`,
            background: `radial-gradient(circle, transparent 60%, rgba(${orbit.color},0.05))`,
          }}
        />
      ))}

      {rings.map(({ orbit, skills, radius, delayOffset }, index) => (
        <OrbitRing
          key={orbit.label}
          skills={skills}
          radius={radius}
          reverse={index % 2 === 1}
          delayOffset={delayOffset}
          {...ringProps}
        />
      ))}

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div
          aria-live="polite"
          className="relative isolate flex flex-col items-center justify-center px-[0.6em] text-center"
          style={{
            width: `${HUB_SIZE}cqw`,
            height: `${HUB_SIZE}cqw`,
            fontSize: `${HUB_TEXT}cqw`,
          }}
        >
          <svg
            aria-hidden
            viewBox="0 0 100 100"
            className="absolute inset-0 -z-10 size-full"
          >
            <polygon
              points="50,1 99,50 50,99 1,50"
              fill="rgba(0,0,0,0.8)"
              stroke="rgba(97,204,156,0.4)"
              strokeWidth="2"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
          {HUB_POINTS.map((position) => (
            <span
              key={position}
              aria-hidden
              className={`absolute ${position} text-[0.8em] leading-none text-[#61cc9c]/70`}
            >
              +
            </span>
          ))}
          {active ? (
            <>
              <span
                className="text-[0.56em] uppercase tracking-[0.18em]"
                style={{ color: `rgb(${active.color})` }}
              >
                {active.category}
              </span>
              <span className="mt-[0.3em] text-[1.06em] font-medium leading-tight text-white">
                {active.name}
              </span>
            </>
          ) : (
            <>
              <span className="whitespace-nowrap text-[1em] font-medium leading-tight text-white">
                build <span className="text-[#61cc9c]">→</span> ship
              </span>
              <span className="mt-[0.3em] text-[0.56em] uppercase tracking-[0.18em] text-white/55">
                <span className="[@media(hover:hover)]:hidden">tap</span>
                <span className="hidden [@media(hover:hover)]:inline">hover</span>{" "}
                a logo
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default SkillOrbit;
