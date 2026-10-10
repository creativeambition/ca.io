"use client";
import { sacramento } from "@/lib/fonts";
import { navItems, socials } from "@/lib/utils";
import { scrollToSection } from "@/lib/smoothScroll";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";

const EMAIL = "chrysayita@gmail.com";

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      // A section counts as current once it crosses the middle of the viewport.
      { rootMargin: "-45% 0px -50% 0px" }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [ids]);

  return active;
}

const sectionIds = navItems.map((nav) => nav.link);

function Navbar() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(sectionIds);

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

    const onKeyDown = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKeyDown);

    return () => {
      root.style.overflow = previousOverflow.root;
      document.body.style.overflow = previousOverflow.body;
      window.removeEventListener("wheel", preventScroll);
      window.removeEventListener("touchmove", preventScroll);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const goTo = (link: string) => {
    setOpen(false);
    scrollToSection(link);
  };

  return (
    <>
      <div className="fixed z-50 top-4 right-4 sm:left-1/2 sm:right-auto sm:-translate-x-1/2 w-max sm:bg-[#000000]/75 sm:backdrop-blur-md sm:border sm:border-white/[0.1] sm:p-4 sm:px-8 sm:rounded-lg flex justify-center items-center">
        <div className="hidden sm:flex flex-1 justify-around text-sm sm:gap-10">
          {navItems.map((nav: { name: string; link: string }, id) => {
            return (
              <a
                key={id}
                href={`#${nav.link}`}
                aria-current={active === nav.link ? "true" : undefined}
                onClick={(event) => {
                  event.preventDefault();
                  scrollToSection(nav.link);
                }}
              >
                <span
                  className={`cursor-pointer transition-colors hover:text-[#61cc9c] hover:opacity-100 ${
                    active === nav.link ? "text-[#61cc9c] opacity-100" : "opacity-80"
                  }`}
                >
                  {nav.name}
                </span>
              </a>
            );
          })}
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className={`sm:hidden relative flex items-center justify-center size-11 rounded-full border bg-black/75 backdrop-blur-md cursor-pointer transition-colors active:scale-95 ${
            open ? "border-[#61cc9c]/70" : "border-white/15"
          }`}
        >
          {/* Three bars (the last one shorter) that fold into an X. */}
          {[
            open ? "left-3 w-5 rotate-45" : "left-3 w-5 -translate-y-[6px]",
            open ? "left-[22px] w-0 opacity-0" : "left-3 w-5",
            open ? "left-3 w-5 -rotate-45" : "left-5 w-3 translate-y-[6px]",
          ].map((position, bar) => (
            <span
              key={bar}
              aria-hidden
              className={`absolute top-1/2 -mt-px h-[2px] rounded-full transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                open ? "bg-[#61cc9c]" : "bg-white"
              } ${position}`}
            />
          ))}
        </button>
      </div>

      {/* Sits left of the menu button on mobile, in the corner on larger screens. */}
      <a
        href={`mailto:${EMAIL}`}
        aria-label={`Email ${EMAIL}`}
        title={EMAIL}
        className="fixed z-50 top-4 right-[72px] sm:right-6 flex size-11 items-center justify-center rounded-full border border-white/15 bg-black/75 backdrop-blur-md text-xl text-white/85 transition-colors hover:border-[#61cc9c]/60 hover:text-[#61cc9c] outline-none focus-visible:ring-2 focus-visible:ring-[#61cc9c]"
      >
        <HiOutlineMail />
      </a>

      <nav
        id="mobile-menu"
        aria-hidden={!open}
        className={`sm:hidden fixed inset-0 z-40 flex flex-col bg-black/95 backdrop-blur-xl px-6 pt-24 pb-8 transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        style={{ touchAction: open ? "none" : undefined }}
      >
        <span className={`${sacramento.className} text-3xl text-white/80`}>
          where to?
        </span>

        <ul className="mt-6 flex flex-col">
          {navItems.map((nav: { name: string; link: string }, id) => {
            const isActive = active === nav.link;
            return (
              <li
                key={id}
                className={`border-b border-white/10 transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: open ? `${100 + id * 60}ms` : "0ms" }}
              >
                <button
                  tabIndex={open ? 0 : -1}
                  aria-current={isActive ? "true" : undefined}
                  onClick={() => goTo(nav.link)}
                  className="group flex w-full items-center gap-4 py-4 text-left"
                >
                  <span
                    className={`w-8 text-sm font-semibold tabular-nums ${
                      isActive ? "text-[#61cc9c]" : "text-white/40"
                    }`}
                  >
                    0{id + 1}
                  </span>
                  <span
                    className={`flex-1 text-3xl font-medium transition-colors ${
                      isActive ? "text-[#61cc9c]" : "text-white/90 group-active:text-[#61cc9c]"
                    }`}
                  >
                    {nav.name}
                  </span>
                  <FaArrowRightLong
                    className={`text-lg transition-transform ${
                      isActive ? "text-[#61cc9c] -rotate-[35deg]" : "text-white/30"
                    }`}
                  />
                </button>
              </li>
            );
          })}
        </ul>

        <div
          className={`mt-auto flex flex-col gap-4 transition-opacity duration-500 ${
            open ? "opacity-100 delay-500" : "opacity-0"
          }`}
        >
          <Link
            href={`mailto:${EMAIL}`}
            tabIndex={open ? 0 : -1}
            className="text-sm text-white/60"
          >
            {EMAIL}
          </Link>
          <div className="flex items-center gap-3">
            {socials.map(({ name, Icon, link }) => (
              <Link
                key={name}
                href={link}
                target="_blank"
                aria-label={name}
                tabIndex={open ? 0 : -1}
                className="size-10 rounded-lg bg-black border border-white/30 flex items-center justify-center text-white active:border-[#61cc9c] active:text-[#61cc9c] transition-colors"
              >
                <Icon className="text-[18px]" />
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
