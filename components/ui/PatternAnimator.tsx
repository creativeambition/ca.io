"use client";
import { useEffect } from "react";
function PatternAnimator() {
  const fillPath = (paths: NodeListOf<SVGPathElement>) => {
    const selectedIndices = new Set<number>();

    while (selectedIndices.size < 5) {
      const pathIndex = Math.floor(Math.random() * paths.length);
      selectedIndices.add(pathIndex);
    }

    selectedIndices.forEach((pathIndex) => {
      const path = paths[pathIndex];
      path.classList.add("animate-animateSVG");

      const handleAnimationEnd = () => {
        path.classList.remove("animate-animateSVG");
        path.removeEventListener("animationend", handleAnimationEnd);
      };

      path.addEventListener("animationend", handleAnimationEnd);
    });
  };

  useEffect(() => {
    const paths = document.querySelectorAll(
      "#pattern-bg path"
    ) as NodeListOf<SVGPathElement>;
    if (!paths.length) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let intervalId;

    const tick = () => {
      if (document.hidden || reduceMotion) return;
      fillPath(paths);
    };

    const onVisibilityChange = () => {
      clearInterval(intervalId);
      if (!document.hidden) {
        intervalId = setInterval(tick, 6000);
      }
    };

    onVisibilityChange();
    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      clearInterval(intervalId);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, []);

  return null;
}

export default PatternAnimator;
