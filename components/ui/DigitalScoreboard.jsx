"use client";
import { useEffect, useState } from "react";

const readGameData = () => {
  try {
    const raw = localStorage.getItem("GameData");
    if (!raw) return null;
    const data = JSON.parse(raw);
    return {
      playerName: data?.playerName || "Guest",
      scoreX: data?.scores?.X ?? 0,
      scoreO: data?.scores?.O ?? 0,
      games: data?.numberOfGames ?? 0,
      lastWinner: data?.winner || "-",
    };
  } catch {
    return null;
  }
};

const DIGITS = {
  0: "1111110",
  1: "0110000",
  2: "1101101",
  3: "1111001",
  4: "0110011",
  5: "1011011",
  6: "1011111",
  7: "1110000",
  8: "1111111",
  9: "1111011",
};

function SegmentDigit({ value }) {
  const mask = DIGITS[value] ?? "0000000";
  const segments = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
  ].map((_, i) => mask[i] === "1");

  const segClass = (on) =>
    on ? "bg-[#61cc9c] shadow-[0_0_6px_#61cc9c]" : "bg-[#61cc9c]/15";

  return (
    <span className="relative inline-flex flex-col items-center leading-none">
      <span
        className={`${segClass(segments[0])} h-[6px] w-[70%] rounded-t-sm mx-auto`}
      />
      <span className="flex justify-between w-full mt-[3px]">
        <span className={`${segClass(segments[5])} h-[34px] w-[6px] rounded-l-sm`} />
        <span className={`${segClass(segments[1])} h-[34px] w-[6px] rounded-r-sm`} />
      </span>
      <span
        className={`${segClass(segments[6])} h-[2px] w-[70%] rounded-sm mx-auto mt-[3px]`}
      />
      <span className="flex justify-between w-full mt-[3px]">
        <span className={`${segClass(segments[4])} h-[34px] w-[6px] rounded-l-sm`} />
        <span className={`${segClass(segments[3])} h-[34px] w-[6px] rounded-r-sm`} />
      </span>
      <span
        className={`${segClass(segments[2])} h-[2px] w-[70%] rounded-b-sm mx-auto mt-[3px]`}
      />
    </span>
  );
}

function DigitalNumber({ value }) {
  const digits = String(Math.max(0, Math.min(99, value)))
    .padStart(2, "0")
    .split("");
  return (
    <div className="inline-flex items-start gap-1">
      {digits.map((d, i) => (
        <SegmentDigit key={i} value={Number(d)} />
      ))}
    </div>
  );
}

export default function DigitalScoreboard() {
  const [data, setData] = useState({
    playerName: "Guest",
    scoreX: 0,
    scoreO: 0,
    games: 0,
    lastWinner: "-",
  });
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const refresh = () => {
      setData(readGameData());
      setReady(true);
    };

    refresh();
    window.addEventListener("storage", refresh);
    const id = window.setInterval(refresh, 1500);
    return () => {
      window.removeEventListener("storage", refresh);
      window.clearInterval(id);
    };
  }, []);

  return (
    <div className="relative w-full my-auto flex flex-col items-center gap-3 py-4">
      <span className="text-[11px] tracking-[0.35em] text-[#61cc9c] uppercase">
        {ready ? data.playerName : "Syncing"} vs ca.io
      </span>

      <div className="flex items-end gap-6 border border-white/15 rounded-lg bg-black/40 px-5 py-4">
        {!ready ? (
          <div className="h-[90px] w-[150px] animate-pulse bg-white/5" />
        ) : (
          <>
            <div className="flex flex-col items-center gap-2">
              <DigitalNumber value={data.scoreX} />
              <span className="text-xs text-[#61cc9c]">You</span>
            </div>

            <div className="flex flex-col items-center gap-2 text-[#61ccff]">
              <span className="text-3xl font-bold">:</span>
              <span className="text-[11px] tracking-widest">SCORE</span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <DigitalNumber value={data.scoreO} />
              <span className="text-xs text-[#61cc9c]">ca.io</span>
            </div>
          </>
        )}
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