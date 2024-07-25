"use client";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

function SkillRow({
  skills,
  reverse,
}: {
  skills: { name: string; img: string }[];
  reverse: boolean;
}) {
  const [mdBreakPoint, setMdBreakPoint] = useState(false);

  const skillsRef = useRef(null);
  const skillCardsRef = useRef([]);

  const animationPlayState = useCallback(() => {
    if (!skillsRef.current) return;

    const skills = skillsRef.current.getBoundingClientRect();
    const isOutOfViewport =
      skills.top > window.innerHeight || skills.bottom < 0;
    const newPlayState = isOutOfViewport ? "paused" : "running";

    skillCardsRef.current.forEach((card) => {
      if (card) card.style.animationPlayState = newPlayState;
    });
  }, []);

  useEffect(() => {
    skillsRef.current = document.querySelector("#skills");
    skillCardsRef.current = Array.from(
      document.querySelectorAll("#skill-element")
    );

    let animationFrameId: number;
    const animationFrame = () => {
      animationPlayState();
      animationFrameId = requestAnimationFrame(animationFrame);
    };
    requestAnimationFrame(animationFrame);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [animationPlayState]);

  function checkBreakpoint() {
    if (window.innerWidth > 768) {
      setMdBreakPoint(true);
    } else {
      setMdBreakPoint(false);
    }
  }

  useEffect(() => {
    checkBreakpoint();
  });

  let width = mdBreakPoint
    ? `${skills.length * 250}px`
    : `${skills.length * 150}px`;

  return (
    <div
      className={`relative h-[100px] flex items-center overflow-hidden`}
      style={{
        width: `${width}`,
        maskImage: "radial-gradient(circle, black, transparent)",
      }}
    >
      {skills.map((skill: { name: string; img: string }, index: number) => (
        <div
          key={index}
          id="skill-element"
          className={`absolute ${
            reverse
              ? "right-[100%] animate-animateSkillsReverse"
              : "left-[100%] animate-animateSkills"
          } h-[80px] md:h-[100px] w-[150px] md:w-[250px] bg-black rounded-lg border border-white/[20%] flex items-center justify-center transition-all`}
          style={{
            boxShadow: "0 10px 24px -20px #61cc9c",
            animationDelay: `${(index * 60) / skills.length}s`,
          }}
        >
          <h1 className="z-10">{skill.name}</h1>
          <Image
            src={skill.img}
            alt="skill-logo"
            height={100}
            width={100}
            className="absolute left-2 h-[80%] w-auto object-contain opacity-60"
          />
        </div>
      ))}
    </div>
  );
}

export default SkillRow;
