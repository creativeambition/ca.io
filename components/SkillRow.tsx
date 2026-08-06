"use client";
import Image from "next/image";
import { memo, useEffect, useRef, useState, type CSSProperties } from "react";

const SkillRow = memo(function SkillRow({
  skills,
  reverse,
}: {
  skills: { name: string; img: string }[];
  reverse: boolean;
}) {
  const [rowWidth, setRowWidth] = useState(0);
  const [offset, setOffset] = useState(0);
  const rowRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const firstCopyRef = useRef<HTMLDivElement>(null);
  const secondCopyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = () => {
      const first = firstCopyRef.current;
      const second = secondCopyRef.current;
      setOffset(
        first && second
          ? second.getBoundingClientRect().left -
              first.getBoundingClientRect().left
          : 0
      );
      setRowWidth(rowRef.current?.clientWidth ?? 0);
    };

    const observer = new ResizeObserver(update);
    if (rowRef.current) observer.observe(rowRef.current);
    if (firstCopyRef.current) observer.observe(firstCopyRef.current);
    if (secondCopyRef.current) observer.observe(secondCopyRef.current);
    observer.observe(document.documentElement);
    update();

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const row = rowRef.current;
    if (!row) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (trackRef.current) {
          trackRef.current.style.animationPlayState = entry.isIntersecting
            ? "running"
            : "paused";
        }
      },
      { rootMargin: "100px" }
    );

    observer.observe(row);

    return () => observer.disconnect();
  }, []);

  const copies = Math.max(2, Math.ceil(rowWidth / Math.max(offset, 1)) + 1);
  const duration = Math.max(12, offset / 20);

  const trackStyle = {
    animationDuration: `${duration}s`,
    willChange: "transform",
    "--marquee-distance": offset ? `-${offset}px` : undefined,
  } as CSSProperties;

  return (
    <div
      ref={rowRef}
      className="relative w-full h-[72px] md:h-[80px] flex items-center overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_32px,black_calc(100%_-_32px),transparent)]"
    >
      <div
        ref={trackRef}
        className={`flex w-max items-center gap-4 ${
          reverse ? "animate-animateSkillsReverse" : "animate-animateSkills"
        }`}
        style={trackStyle}
      >
        {Array.from({ length: copies }, (_, copy) => (
          <div
            key={copy}
            ref={
              copy === 0
                ? firstCopyRef
                : copy === 1
                  ? secondCopyRef
                  : undefined
            }
            className="flex shrink-0 items-center gap-4"
          >
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex h-[56px] md:h-[64px] shrink-0 items-center gap-3 rounded-full border border-white/20 bg-black/70 pl-2 pr-5"
                style={{
                  boxShadow: "0 10px 30px -18px #61cc9c",
                }}
              >
                <span className="flex size-10 md:size-11 shrink-0 items-center justify-center rounded-full border border-[#61cc9c]/25 bg-[#61cc9c]/15">
                  <Image
                    src={skill.img}
                    alt={`${skill.name} logo`}
                    height={40}
                    width={40}
                    className="size-5 md:size-6 object-contain"
                    loading="eager"
                    decoding="async"
                  />
                </span>
                <span className="whitespace-nowrap text-sm md:text-base font-medium text-white/95">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
});

export default SkillRow;
