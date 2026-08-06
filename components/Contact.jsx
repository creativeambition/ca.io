import { poiret_one } from "@/lib/fonts";
import PlaceholderTextAnimation from "./ui/PlaceholderTextAnimation";
import { contacts } from "@/lib/utils";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";

function Contact() {
  return (
    <div
      id="contact"
      className="relative min-h-[100vh] flex flex-col items-center px-4 py-10 pb-4"
    >
      <span
        className={`${poiret_one.className} mt-[80px] text-2xl text-gray-300`}
      >
        infinity studios
      </span>

      <div className="flex flex-col items-center justify-center gap-12 md:px-20 lg:px-[200px] mt-[30px] md:tracking-wide">
        <div className="flex flex-col gap-2 md:gap-3 items-center text-center text-3xl md:text-5xl lg:text-5xl font-medium">
          Ready to make your
          <div className="flex items-center">
            <PlaceholderTextAnimation
              texts={["brand", "service", "business", "product"]}
            />
            <span className="flex whitespace-nowrap">
              &nbsp;appearance&nbsp;
              <span className="hidden md:flex">in the</span>
            </span>
          </div>
          <div>
            <span className="md:hidden">in the&nbsp;</span>
            <span className="relative mt-3 before:absolute before:h-[20px] before:w-full before:border-t before:top-[120%] before:rotate-[-8deg] before:rounded-[100%]">
              digital world?
            </span>
          </div>
        </div>
      </div>

      <div className="w-screen mt-auto flex flex-col items-center justify-around">
        <div className="flex flex-wrap gap-5 md:gap-8 justify-around content-center">
          {contacts.map((contact) => {
            let cn =
              contact.name == "Mail" || contact.name == "Fiverr"
                ? "hidden md:flex"
                : "flex";
            return (
              <Link
                key={contact.name}
                href={contact.link}
                target="_blank"
                className={`group ${cn} items-center cursor-pointer opacity-40 hover:opacity-100`}
              >
                <span className="">{contact.name}</span>
                <BsArrowRight className="opacity-0 group-hover:opacity-100 group-hover:translate-x-2 group-hover:-translate-y-1 group-hover:-rotate-[35deg] transition-all" />
              </Link>
            );
          })}
        </div>
      </div>

      <footer
        className={`${poiret_one.className} mt-auto w-full flex justify-center gap-2 opacity-[70%]`}
      >
        &copy;<span>infinity studios, 2026</span>
      </footer>
    </div>
  );
}

export default Contact;
