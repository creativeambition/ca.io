"use client";
import { useState } from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { scrollToSection } from "@/lib/smoothScroll";

export function FancyButton({ target }: { target: string }) {
  return (
    <button
      onClick={() => scrollToSection(target)}
      className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-lg p-px text-xs font-semibold leading-6 text-white inline-block mt-12 md:mt-16 active:scale-95 transition-transform"
    >
      <span className="absolute inset-0 overflow-hidden rounded-lg active:scale-90 transition-transform">
        <span className="absolute inset-0 rounded-lg bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </span>
      <div className="relative flex space-x-2 items-center z-10 rounded-lg bg-zinc-950 py-4 px-6 md:px-10 ring-1 ring-white/10 ">
        <span className={`text-base font-medium`}>🚀 Projects</span>
        <div className="text-2xl group-hover:translate-x-2 group-hover:translate-y-1 group-hover:rotate-45 transition-transform">
          <BsArrowRightShort />
        </div>
      </div>
      <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
    </button>
  );
}

export function FancyButtonAlt({
  title,
  icon,
  link,
}: {
  title: string;
  icon?: JSX.Element;
  link?: string;
}) {
  const [emailCopied, setEmailCopied] = useState(false);

  function handleClick() {
    if (link) {
      window.open(link, "_blank");
    }

    if (title == "Copy Email") {
      if (navigator.clipboard) {
        navigator.clipboard.writeText("chrysayita@gmail.com");
        setEmailCopied(true);
      } else {
        alert("Cannot perform operation on this system");
      }
    }
  }

  return (
    <button
      onClick={handleClick}
      className="relative mx-auto inline-flex h-12 overflow-hidden rounded-lg p-[2px] focus:outline-none active:scale-95 transition-transform"
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#61cc9c_0%,#393BB2_50%,#61cc9c_100%)]" />

      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 py-4 text-sm font-medium text-white backdrop-blur-3xl gap-2">
        {icon && <div className="fill-white text-xl">{icon}</div>}
        {emailCopied ? "Email Copied" : title}
      </span>
    </button>
  );
}
