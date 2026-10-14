import Link from "next/link";
import { doto, poppins, sacramento } from "@/lib/fonts";
import { FaArrowLeftLong } from "react-icons/fa6";

export const metadata = {
  title: "404",
};

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center gap-6 px-6 text-center bg-[#0f2018]">
      <span className={`${sacramento.className} text-3xl opacity-80`}>
        oh no, you took a wrong turn
      </span>

      <h1 className={`${doto.className} text-7xl md:text-9xl text-[#61cc9c]`}>
        404
      </h1>

      <p className="opacity-70 max-w-md">
        this page doesn&apos;t exist — but everything else does.
      </p>

      <Link
        href="/"
        className={`mt-2 inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#61cc9c]/60 text-[#61cc9c] hover:bg-[#61cc9c] hover:text-black transition-colors ${poppins.className}`}
      >
        <FaArrowLeftLong />
        back home
      </Link>
    </div>
  );
}
