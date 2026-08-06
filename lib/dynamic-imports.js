"use client";
import dynamic from "next/dynamic";

export const DynamicGame = dynamic(() => import("../components/Game"), {
  ssr: false,
  loading: () => <div className="w-full h-[300px] animate-pulse bg-black/20" />,
});
