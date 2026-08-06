import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";
import type { Config, PluginAPI } from "tailwindcss/types/config";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        spotlight: "spotlight 2s ease 1 forwards",
        animateSVG: "animateSVG 5s ease-in-out 1s",
        first: "moveVertical 30s ease infinite",
        second: "moveInCircle 20s reverse infinite",
        third: "moveInCircle 40s linear infinite",
        fourth: "moveHorizontal 40s ease infinite",
        fifth: "moveInCircle 20s ease infinite",
        animateSkills: "animateSkills 30s linear infinite",
        animateSkillsReverse: "animateSkillsReverse 30s linear infinite",
        strokeFill: "strokeFill 3s ease-in-out infinite"
      },
      keyframes: {
        spotlight: {
          "0%": {
            opacity: "0",
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: "1",
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
        animateSVG: {
          "0%": {
            strokeDashoffset: "1100",
          },
          "50%": {
            strokeDashoffset: "0",
          },
          "100%": {
            strokeDashoffset: "1100",
          },
        },
        moveHorizontal: {
          "0%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
          "50%": {
            transform: "translateX(50%) translateY(10%)",
          },
          "100%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
        },
        moveInCircle: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "50%": {
            transform: "rotate(180deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        moveVertical: {
          "0%": {
            transform: "translateY(-50%)",
          },
          "50%": {
            transform: "translateY(50%)",
          },
          "100%": {
            transform: "translateY(-50%)",
          },
        },
        animateSkills: {
          "0%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateX(var(--marquee-distance, 0px))",
          },
        },
        animateSkillsReverse: {
          "0%": {
            transform: "translateX(var(--marquee-distance, 0px))",
          },
          "100%": {
            transform: "translateX(0)",
          },
        },
        strokeFill: {
          '0%': {
            fill: "transparent",
            strokeDasharray: '0 100',
          },
          '50%': {
            fill: "transparent",
            strokeDasharray: '100 0',
          },
          '100%': {
            fill: "white",
            strokeDasharray: '100 0',
          },
        },
      },
    },
  },
  plugins: [addVariablesForColors],
};

export default config;

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: PluginAPI) {
  const allColors = flattenColorPalette(theme("colors")) as Record<
    string,
    string
  >;
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
