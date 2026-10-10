import SplashLogo from "@/components/ui/SplashLogo";

export default function Loading() {
  return (
    <div
      className={`min-w-full min-h-[100vh] bg-black flex flex-col items-center justify-center gap-4 text-center`}
    >
      <SplashLogo />
    </div>
  );
}
