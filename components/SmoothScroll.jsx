"use client";
import { useEffect } from "react";
import { startSmoothScroll } from "@/lib/smoothScroll";

const SmoothScroll = () => {
  useEffect(() => startSmoothScroll(), []);

  return <></>;
};

export default SmoothScroll;
