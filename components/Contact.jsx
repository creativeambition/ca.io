import { sacramento, stretch } from "@/lib/fonts";
import { socials } from "@/lib/utils";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import { PiFilePdfFill } from "react-icons/pi";

const EMAIL = "chrysayita@gmail.com";

function Contact() {
  return (
    <section
      id="contact"
      className="relative min-h-[90vh] w-screen flex flex-col px-6 md:px-[20px] lg:px-8 xl:px-12 2xl:px-24 pt-24 md:pt-32 pb-6"
    >
      <div className="flex flex-1 flex-col items-center justify-center text-center">
        <span
          className={`${sacramento.className} mb-3 md:mb-5 text-2xl md:text-4xl`}
        >
          got something in mind?
        </span>
        <h2
          className={`${stretch.className} mb-5 md:mb-6 text-4xl md:text-6xl 2xl:text-7xl font-semibold`}
        >
          Let&apos;s <span className="text-[#61cc9c]">{"{build}"}</span> it
        </h2>
        <p
          className={`max-w-xl text-base md:text-lg text-white/85`}
        >
          Open to <code className="text-[#61cc9c]">full-time</code> roles,{" "}
          <code className="text-[#61cc9c]">freelance</code> projects and{" "}
          <code className="text-[#61cc9c]">collabs</code>. Based in Accra, happy
          to work remote.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href={`mailto:${EMAIL}`}
            className="group flex items-center gap-3 bg-[#61cc9c] px-6 py-3 font-medium text-black hover:bg-[#61cc9c]/85 transition-colors"
          >
            Say hello
            <FaArrowRightLong className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/resume.pdf"
            target="_blank"
            download
            className="flex items-center gap-3 border border-white/[25%] px-6 py-3 font-medium hover:border-[#61cc9c] hover:text-[#61cc9c] transition-colors"
          >
            <PiFilePdfFill className="text-xl" />
            Résumé
          </Link>
        </div>

        <Link
          href={`mailto:${EMAIL}`}
          className="mt-4 text-sm text-white/60 hover:text-[#61cc9c] transition-colors"
        >
          {EMAIL}
        </Link>

        <div className="mt-10 flex items-center gap-3">
          {socials.map(({ name, Icon, link }) => (
            <Link
              key={name}
              href={link}
              target="_blank"
              aria-label={name}
              className="size-10 rounded-lg bg-black border border-white/30 flex items-center justify-center text-white hover:border-[#61cc9c] hover:text-[#61cc9c] transition-colors"
            >
              <Icon className="text-[18px]" />
            </Link>
          ))}
        </div>
      </div>

      <footer className="mt-16 flex justify-center border-t border-white/10 pt-6 text-sm text-white/60">
        &copy; {new Date().getFullYear()} Chrys {"{ca.io}"}
      </footer>
    </section>
  );
}

export default Contact;
