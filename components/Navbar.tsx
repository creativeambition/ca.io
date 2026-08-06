"use client";
import { montserrat_alternates } from "@/lib/fonts";
import { navItems } from "@/lib/utils";
import { scrollToSection } from "@/lib/smoothScroll";
import { useEffect, useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { ImCross } from "react-icons/im";

function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const previousOverflow = { root: root.style.overflow, body: document.body.style.overflow };
    root.style.overflow = open ? "hidden" : "";
    document.body.style.overflow = open ? "hidden" : "";

    const preventScroll = (e: Event) => e.preventDefault();
    if (open) {
      window.addEventListener("wheel", preventScroll, { passive: false });
      window.addEventListener("touchmove", preventScroll, { passive: false });
    }

    return () => {
      root.style.overflow = previousOverflow.root;
      document.body.style.overflow = previousOverflow.body;
      window.removeEventListener("wheel", preventScroll);
      window.removeEventListener("touchmove", preventScroll);
    };
  }, [open]);

  const goTo = (link: string) => {
    setOpen(false);
    scrollToSection(link);
  };

  return (
    <>
      <div className="fixed z-50 top-4 right-4 sm:left-1/2 sm:right-auto sm:-translate-x-1/2 w-max bg-[#000000]/75 backdrop-blur-md border border-white/[0.1] p-2 sm:p-4 sm:px-8 rounded-full sm:rounded-lg flex justify-center items-center">
        <div className="hidden sm:flex flex-1 justify-around text-sm sm:gap-10">
          {navItems.map((nav: { name: string; link: string }, id) => {
            return (
              <a
                key={id}
                href={`#${nav.link}`}
                onClick={(event) => {
                  event.preventDefault();
                  scrollToSection(nav.link);
                }}
              >
                <span
                  className={`opacity-80 cursor-pointer hover:text-[#61cc9c] hover:opacity-100`}
                >
                  {nav.name}
                </span>
              </a>
            );
          })}
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="sm:hidden flex items-center justify-center size-9 rounded-full border border-white/20 text-lg cursor-pointer"
        >
          {!open ? <HiOutlineMenuAlt3 /> : <ImCross />}
        </button>
      </div>

      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-black/95 transition-opacity duration-200 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        style={{ touchAction: open ? "none" : undefined }}
      >
        {navItems.map((nav: { name: string; link: string }, id) => (
          <button
            key={id}
            onClick={() => goTo(nav.link)}
            className={`${montserrat_alternates.className} text-3xl opacity-80 hover:text-[#61cc9c] hover:opacity-100`}
          >
            {nav.name}
          </button>
        ))}
      </div>
    </>
  );
}

export default Navbar;
