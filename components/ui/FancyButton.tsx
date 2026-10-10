"use client";
import { useState } from "react";
import { BsArrowDownShort } from "react-icons/bs";
import { scrollToSection } from "@/lib/smoothScroll";

// A real anchor so it works without JS and can be opened/copied; JS upgrades
// the jump to a smooth scroll.
export function FancyButton({
  target,
  label,
}: {
  target: string;
  label: string;
}) {
  return (
    <a
      href={`#${target}`}
      onClick={(event) => {
        event.preventDefault();
        scrollToSection(target);
      }}
      className="bg-slate-800/60 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-lg p-px text-xs font-semibold leading-6 text-white inline-block active:scale-95 transition-transform outline-none focus-visible:ring-2 focus-visible:ring-[#61cc9c] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
    >
      <span className="absolute inset-0 overflow-hidden rounded-lg">
        <span className="absolute inset-0 rounded-lg bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(97,204,156,0.6)_0%,rgba(97,204,156,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100" />
      </span>
      <span className="relative flex space-x-2 items-center z-10 rounded-lg bg-zinc-950/70 backdrop-blur-md py-4 px-6 md:px-10 ring-1 ring-white/10">
        <span className="text-base font-medium">{label}</span>
        <BsArrowDownShort className="text-2xl group-hover:translate-y-1 group-focus-visible:translate-y-1 transition-transform" />
      </span>
      <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-[#61cc9c]/0 via-[#61cc9c]/90 to-[#61cc9c]/0 transition-opacity duration-500 group-hover:opacity-40" />
    </a>
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
