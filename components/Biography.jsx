import { plaster } from "@/lib/fonts";
import BentoGrid from "@/components/ui/BentoGrid";
import Image from 'next/image';

function Biography() {
  return (
    <div id="profile" className="relative mt-20 min-h-[100vh] w-screen md:mt-[150px] py-[50px] lg:py-[100px] flex flex-col items-center px-2 md:px-[20px] lg:px-8 xl:px-12 2xl:px-24">
      <div
        className={`${plaster.className} max-[379px]:hidden flex items-center justify-center w-full gap-1 sm:gap-2 text-[40px] md:text-[80px] lg:text-[100px] xl:text-9xl`}
      >
        <h1
          className="text-transparent"
          style={{
            WebkitTextStroke: "1px white",
          }}
        >
          CHRYS
        </h1>
        <div className="size-[65px] md:size-[100px] md:min-w-[100px] lg:size-[150px] lg:min-w-[150px] rounded-full border-2 border-[#61cc9c] p-[3px] sm:p-[5px]">
      <div className="relative h-full w-full rounded-full border border-white/[40%] overflow-hidden">
        <Image
          src="/assets/profile.jpg"
          alt="Profile picture"
          fill
          sizes="(max-width: 768px) 65px, (max-width: 1024px) 100px, 150px"
          className="object-cover"
          priority={true}
        />
      </div>
    </div>
        <h1
          className="text-transparent"
          style={{
            WebkitTextStroke: "0.8px white",
          }}
        >
          PRASE
        </h1>
      </div>

      <div className="flex w-full mt-8 md:mt-16">
        <BentoGrid />
      </div>
    </div>
  );
}

export default Biography;
