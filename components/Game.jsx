"use client";
import { doto } from "@/lib/fonts";
import clsx from "clsx";
import { createContext, useContext, useEffect, useState } from "react";
import { bestMove, computeWinner } from "@/lib/gameUtils";

const GameState = createContext(null);

const initialGameData = {
  moves: Array.from({ length: 9 }).fill(null),
  moveCount: 0,
  playerTurn: "X",
  gameOver: false,
  winner: null,
  scores: { X: 0, O: 0 },
  winningCombination: null,
  numberOfGames: 0,
};

// The game is client-only (loaded with ssr: false), so saved progress can be
// read while creating state, before the save effect below can overwrite it.
function loadGameData() {
  try {
    const saved = JSON.parse(localStorage.getItem("GameData"));
    if (saved?.scores) return { ...initialGameData, ...saved };
  } catch {
    // unreadable or unavailable storage: start fresh
  }
  return initialGameData;
}

function Game() {
  const [gameData, setGameData] = useState(loadGameData);

  useEffect(() => {
    try {
      localStorage.setItem("GameData", JSON.stringify(gameData));
      window.dispatchEvent(new Event("gamedata"));
    } catch {
      // ignore storage failures (e.g. private mode)
    }
  }, [gameData]);

  const gameOverClass = gameData.gameOver && "opacity-0 transition";

  const isPlayerTurn = gameData.playerTurn == "X" && !gameData.gameOver;

  return (
    <>
      <div
        className="my-auto w-[300px] aspect-square rounded-2xl border border-[#61cc9c]/25 bg-white/[0.02] shadow-[0_0_40px_rgba(97,204,156,0.08)] backdrop-blur-sm overflow-hidden"
      >
        <GameState.Provider
          value={{
            gameData,
            setGameData,
            computeWinner,
            bestMove,
          }}
        >
          <Board />
        </GameState.Provider>
      </div>

      <div
        className={`${gameOverClass} mt-4 grid w-full grid-cols-[1fr_auto_1fr] items-stretch gap-2 transition-opacity`}
      >
        <PlayerPanel
          mark="X"
          name="You"
          score={gameData.scores.X}
          active={isPlayerTurn}
        />

        <div className="flex flex-col items-center justify-center gap-1 px-1">
          <span className="text-[10px] uppercase tracking-[0.2em] text-white/35">
            vs
          </span>
          {isPlayerTurn ? (
            <span className="text-[11px] text-[#61cc9c]">your move</span>
          ) : (
            <span className="flex h-[16px] items-center gap-0.5" aria-label="thinking">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="size-1 rounded-full bg-white/60 animate-bounce"
                  style={{ animationDelay: `${i * 150}ms` }}
                />
              ))}
            </span>
          )}
        </div>

        <PlayerPanel
          mark="O"
          name="ca.io"
          score={gameData.scores.O}
          active={!isPlayerTurn && !gameData.gameOver}
          mirrored
        />
      </div>
    </>
  );
}

export default Game;

const pad = (n) => String(Math.max(0, Math.min(99, n || 0))).padStart(2, "0");

// One side of the score bar; the player whose turn it is lights up.
function PlayerPanel({ mark, name, score, active, mirrored = false }) {
  return (
    <div
      className={clsx(
        "flex min-w-0 items-center justify-between gap-2 rounded-lg border px-3 py-2 transition-all duration-300",
        mirrored && "flex-row-reverse",
        active
          ? "border-[#61cc9c]/60 bg-[#61cc9c]/10 shadow-[0_0_18px_rgba(97,204,156,0.18)]"
          : "border-white/10 bg-black/40 opacity-70"
      )}
    >
      <span className={clsx("flex min-w-0 items-center gap-2", mirrored && "flex-row-reverse")}>
        <span
          className={clsx(
            doto.className,
            "flex size-6 shrink-0 items-center justify-center rounded-md border text-sm",
            mark === "X"
              ? "border-[#61cc9c]/30 bg-[#61cc9c]/10 text-[#61cc9c]"
              : "border-white/15 bg-white/5 text-white/80"
          )}
        >
          {mark}
        </span>
        <span className="truncate text-sm text-white/80">{name}</span>
      </span>
      <span
        className={clsx(
          doto.className,
          "text-2xl leading-none tabular-nums",
          mark === "X" ? "text-[#61cc9c]" : "text-white/90"
        )}
      >
        {pad(score)}
      </span>
    </div>
  );
}

function Board() {
  const { gameData, setGameData, bestMove } = useContext(GameState);

  const resetBoard = () => {
    setGameData((prev) => ({
      ...prev,
      gameOver: false,
      playerTurn: "X",
      moves: Array.from({ length: 9 }).fill(null),
      moveCount: 0,
      winningCombination: null,
    }));
  };

  useEffect(() => {
    if (gameData.playerTurn !== "O" || gameData.gameOver) return;

    const timeoutId = setTimeout(() => {
      setGameData((prev) => {
        if (prev.playerTurn !== "O" || prev.gameOver) return prev;

        const aiMove = bestMove(prev.moves);
        const moves = [...prev.moves];
        moves[aiMove] = "O";

        const candidate = {
          ...prev,
          moves,
          moveCount: prev.moveCount + 1,
          playerTurn: "X",
        };

        const winner = computeWinner("O", candidate);

        if (winner) {
          return {
            ...candidate,
            gameOver: true,
            winningCombination: winner,
            winner: "O",
            scores: { ...prev.scores, O: prev.scores.O + 1 },
            numberOfGames: prev.numberOfGames + 1,
          };
        }

        if (winner === false) {
          return {
            ...candidate,
            gameOver: true,
            winner: "TIE!",
            numberOfGames: prev.numberOfGames + 1,
          };
        }

        return candidate;
      });
    }, 2500);

    return () => clearTimeout(timeoutId);
  }, [
    bestMove,
    gameData.playerTurn,
    gameData.gameOver,
    gameData.moveCount,
    gameData.moves,
    setGameData,
  ]);

  const gameOverClass =
    gameData.gameOver &&
    "opacity-100 pointer-events-auto transition-opacity duration-300 delay-[600ms]";

  return (
    <div className="relative flex flex-col w-full h-full justify-center items-center">
      <div
        className={`opacity-0 pointer-events-none absolute w-full h-full bg-black/[0.85] backdrop-blur-md z-10 flex flex-col items-center justify-center gap-2 cursor-default ${gameOverClass}`}
      >
        <div className="flex flex-col items-center gap-3 px-6 text-center">
          <span className="text-xs uppercase tracking-[0.25em] text-white/50">
            Match result
          </span>
          <span
            className={`${doto.className} text-3xl md:text-4xl font-bold text-[#61cc9c]`}
          >
            {gameData.winner == "X" ? (
              <>You won! 🎉</>
            ) : gameData.winner == "O" ? (
              <>Hehe, I win</>
            ) : (
              <>
                It&apos;s a <b className="text-[#61cc9c]">Tie!</b>
              </>
            )}
          </span>

          <div className="mt-3 flex items-center justify-center gap-4 rounded-xl border border-white/10 bg-white/5 px-5 py-2 text-sm">
            <span className="inline-flex items-center gap-1.5">
              <b className="text-[#61cc9c]">{gameData.scores.X}</b>
              <span className="opacity-75">You</span>
            </span>
            <span className="font-bold text-white/25">vs</span>
            <span className="inline-flex items-center gap-1.5">
              <span className="opacity-75">ca.io</span>
              <b className="text-[#61cc9c]">{gameData.scores.O}</b>
            </span>
          </div>
        </div>

        <button
          onClick={resetBoard}
          className="mt-4 rounded-full bg-[#61cc9c] px-8 py-2.5 text-black font-semibold text-sm transition-transform hover:scale-105 active:scale-95 hover:shadow-[0_0_25px_rgba(97,204,156,0.5)]"
        >
          Play Again
        </button>
      </div>

      <div className="flex">
        <Square id={0} />
        <Square id={1} />
        <Square id={2} />
      </div>
      <>
        <hr
          className="pointer-events-none absolute left-[100px] translate-x-[-50%] h-[85%] border-none w-[1.5px]"
          style={{
            backgroundImage: "linear-gradient(#61cc9c, transparent, #61cc9c)",
          }}
        />
        <hr
          className="pointer-events-none absolute left-[200px] translate-x-[-50%] h-[85%] border-none w-[1.5px]"
          style={{
            backgroundImage: "linear-gradient(#61cc9c, transparent, #61cc9c)",
          }}
        />
        <hr
          className="pointer-events-none absolute top-[100px] translate-y-[-50%] w-[85%] border-none h-[1.5px]"
          style={{
            backgroundImage:
              "linear-gradient(90deg, transparent, #61cc9c, transparent)",
          }}
        />
        <hr
          className="pointer-events-none absolute top-[200px] translate-y-[-50%] w-[85%] border-none h-[1.5px]"
          style={{
            backgroundImage:
              "linear-gradient(90deg, transparent, #61cc9c, transparent)",
          }}
        />
      </>
      <div className="flex">
        <Square id={3} />
        <Square id={4} />
        <Square id={5} />
      </div>
      <div className="flex">
        <Square id={6} />
        <Square id={7} />
        <Square id={8} />
      </div>
    </div>
  );
}

function Square({ id }) {
  const { gameData, setGameData } = useContext(GameState);

  function handleMove() {
    if (gameData.moves[id] || gameData.gameOver) return;
    if (gameData.playerTurn !== "X") return;

    setGameData((prev) => {
      const moves = [...prev.moves];
      moves[id] = "X";

      const candidate = {
        ...prev,
        moves,
        moveCount: prev.moveCount + 1,
      };

      const winner = computeWinner("X", candidate);

      if (winner) {
        return {
          ...candidate,
          gameOver: true,
          winningCombination: winner,
          winner: "X",
          scores: { ...prev.scores, X: prev.scores.X + 1 },
          numberOfGames: prev.numberOfGames + 1,
        };
      }

      if (winner === false) {
        return {
          ...candidate,
          gameOver: true,
          winner: "TIE!",
          numberOfGames: prev.numberOfGames + 1,
        };
      }

      return { ...candidate, playerTurn: "O" };
    });
  }

  const winning = gameData.winningCombination?.includes(id);
  const value = gameData.moves[id];
  const playable = !gameData.gameOver && gameData.playerTurn == "X" && !value;

  return (
    <div
      className={clsx(
        "size-[100px] flex items-center justify-center rounded-lg transition-all duration-150",
        playable &&
          "cursor-pointer hover:bg-[#61cc9c]/10 active:scale-90",
        !playable &&
          "cursor-default",
        winning && "bg-[#61cc9c]"
      )}
      onClick={handleMove}
    >
      {value && (
        <span
          className={clsx(
            "text-4xl font-bold animate-[pop_0.25s_ease-out]",
            value == "X"
              ? "text-[#61cc9c] drop-shadow-[0_0_8px_rgba(97,204,156,0.6)]"
              : "text-white/85",
            winning && "text-black drop-shadow-none"
          )}
        >
          {value}
        </span>
      )}
    </div>
  );
}
