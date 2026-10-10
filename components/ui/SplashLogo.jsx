import { stretch } from "@/lib/fonts";

// Stroke-drawn "ca.io" mark shared by the route loader and the first-visit splash.
function SplashLogo() {
  return (
    <svg
      className="w-50 h-48 animate-strokeFill motion-reduce:animate-none"
      viewBox="0 0 180 100"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dy=".35em"
        className={`${stretch.className} text-3xl md:text-5xl`}
        fill="transparent"
        stroke="#61cc9c"
        strokeWidth="1"
      >
        ca.io
      </text>
    </svg>
  );
}

export default SplashLogo;
