"use client";
import { doto } from "@/lib/fonts";
import { useEffect, useState } from "react";

const readGameData = () => {
  try {
    const raw = localStorage.getItem("GameData");
    if (!raw) return null;
    const data = JSON.parse(raw);
    return {
      scoreX: data?.scores?.X ?? 0,
      scoreO: data?.scores?.O ?? 0,
      games: data?.numberOfGames ?? 0,
      lastWinner: data?.winner || "-",
    };
  } catch {
    return null;
  }
};

const defaultGameData = {
  scoreX: 0,
  scoreO: 0,
  games: 0,
  lastWinner: "-",
};

export default function DigitalScoreboard() {
  const [data, setData] = useState(defaultGameData);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const refresh = () => {
      setData(readGameData() ?? defaultGameData);
      setReady(true);
    };

    // "storage" covers other tabs; Game dispatches "gamedata" for this one.
    refresh();
    window.addEventListener("storage", refresh);
    window.addEventListener("gamedata", refresh);
    return () => {
      window.removeEventListener("storage", refresh);
      window.removeEventListener("gamedata", refresh);
    };
  }, []);

  const pad = (n) => String(Math.max(0, Math.min(99, n))).padStart(2, "0");

  return (
    <div className="relative w-full my-auto flex flex-col items-center gap-4 py-4">
      <span
        className={`${doto.className} text-sm tracking-[0.35em] text-[#61cc9c] uppercase`}
      >
        {ready ? "You" : "Syncing"} vs ca.io
      </span>

      <div className="flex items-end justify-center gap-8">
        <div className="flex flex-col items-center gap-1">
<span className={`${doto.className} text-8xl md:text-9xl text-[#61cc9c]`}>
            {ready ? pad(data.scoreX) : "--"}
          </span>
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/50">
            You
          </span>
        </div>

        <span className={`${doto.className} text-6xl md:text-7xl text-white/30 pb-4`}>:</span>

        <div className="flex flex-col items-center gap-1">
          <span className={`${doto.className} text-8xl md:text-9xl text-[#61cc9c]`}>
            {ready ? pad(data.scoreO) : "--"}
          </span>
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/50">
            ca.io
          </span>
        </div>
      </div>

      <div className="flex items-center gap-3 text-[11px] tracking-wider text-white/50 uppercase">
        <span>
          Games <b className="text-[#61cc9c]">{data.games}</b>
        </span>
        <span className="mx-1">•</span>
        <span>
          Last <b className="text-[#61cc9c]">{data.lastWinner}</b>
        </span>
      </div>
    </div>
  );
}