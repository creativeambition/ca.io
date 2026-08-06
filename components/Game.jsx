"use client";
import { montserrat_alternates } from "@/lib/fonts";
import clsx from "clsx";
import { createContext, useContext, useEffect, useState } from "react";
import { bestMove, computeWinner } from "@/lib/gameUtils";

const GameState = createContext(null);

function Game() {
  const [gameData, setGameData] = useState({
    playerName: "",
    moves: Array.from({ length: 9 }).fill(null),
    moveCount: 0,
    playerTurn: "X",
    gameOver: false,
    winner: null,
    scores: { X: 0, O: 0 },
    winningCombination: null,
    numberOfGames: 0,
  });

  useEffect(() => {
    let prevSessionData = null;
    try {
      prevSessionData = JSON.parse(localStorage.getItem("GameData"));
    } catch {
      prevSessionData = null;
    }

    if (prevSessionData?.playerName) {
      queueMicrotask(() => setGameData(prevSessionData));
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("GameData", JSON.stringify(gameData));
    } catch {
      // ignore storage failures (e.g. private mode)
    }
  }, [gameData]);

  function startGame() {
    let prevSessionData = null;
    try {
      prevSessionData = JSON.parse(localStorage.getItem("GameData"));
    } catch {
      prevSessionData = null;
    }

    if (prevSessionData?.playerName) return;

    let userInput = prompt(
      "Enter your preferred player name, or cancel to use default -> Guest"
    );
    if (userInput) {
      setGameData((prev) => ({
        ...prev,
        playerName: userInput,
      }));
    } else {
      setGameData((prev) => ({
        ...prev,
        playerName: "Guest",
      }));
    }
  }

  const gameOverClass = gameData.gameOver && "opacity-0 transition";

  return (
    <>
      <div
        className="w-[300px] aspect-square border border-[#61cc9c]/[.2] rounded-md mx-auto overflow-hidden"
        onClick={startGame}
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
        className={`${gameOverClass} w-full mt-2 flex flex-col items-center text-base transition-opacity`}
      >
        <span>
          {gameData.playerTurn == "X" ? "🔥It's Your turn" : "🤔Thinking..."}
        </span>
        <div
          className={`${montserrat_alternates.className} w-full flex justify-between`}
        >
          <span>
            🧠{gameData.playerName || "Guest"} {"{"} X {"}"}:{" "}
            {gameData.scores.X || "_"}
          </span>
          <span>
            🤖 {"{"} O {"}"}: {gameData.scores.O || "_"}
          </span>
        </div>
      </div>
    </>
  );
}

export default Game;

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
    "opacity-100 pointer-events-auto transition-[2s] delay-[2000ms]";

  return (
    <div className="relative flex flex-col w-full h-full justify-center items-center">
      <div
        className={`opacity-0 pointer-events-none absolute w-full h-full bg-black/[0.9] z-10 flex flex-col items-center justify-center cursor-default ${gameOverClass}`}
      >
        <span className="mt-8">Game Over!</span>
        {gameData.winner == "X" || gameData.winner == "O" ? (
          gameData.winner == "X" ? (
            <span>You won! 😃🥳</span>
          ) : (
            <span className={`text-lg mt-auto`}>
              🤖 <b className="text-[#61cc9c]">{gameData.winner}</b> wins!
            </span>
          )
        ) : (
          <b className="text-[#61cc9c] mt-auto">{gameData.winner}</b>
        )}

        <button
          onClick={resetBoard}
          className="mt-4 bg-[#61cc9c] px-6 py-2 rounded-md"
        >
          <span className="text-black font-medium active:scale-75 transition-transform">
            Play Again
          </span>
        </button>

        <div className="mt-auto mb-12 flex flex-col gap-2 items-center">
          <span>
            {gameData.playerName} {"{ "}X{" }"}: {gameData.scores.X}
            <span className="text-lg mx-4">vs</span> ca.io {"{ "}O{" }"}:{" "}
            {gameData.scores.O}
          </span>
        </div>
      </div>

      <div className="flex">
        <Square id={0} />
        <Square id={1} />
        <Square id={2} />
      </div>
      <>
        <hr
          className="pointer-events-none absolute left-[100px] translate-x-[-50%] h-[90%] border-none w-[1.5px]"
          style={{
            backgroundImage: "linear-gradient(#61cc9c, transparent, #61cc9c)",
          }}
        />
        <hr
          className="pointer-events-none absolute left-[200px] translate-x-[-50%] h-[90%] border-none w-[1.5px]"
          style={{
            backgroundImage: "linear-gradient(#61cc9c, transparent, #61cc9c)",
          }}
        />
        <hr
          className="pointer-events-none absolute top-[100px] translate-y-[-50%] w-[90%] border-none h-[1.5px]"
          style={{
            backgroundImage:
              "linear-gradient(90deg, transparent, #61cc9c, transparent)",
          }}
        />
        <hr
          className="pointer-events-none absolute top-[200px] translate-y-[-50%] w-[90%] border-none h-[1.5px]"
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

  const winningCombinationClassName =
    gameData.winningCombination?.includes(id)
      ? "bg-[#61cc9c] text-black font-bold border-2 border-black"
      : "";

  return (
    <div
      className={clsx(
        `${winningCombinationClassName} size-[100px] flex items-center justify-center cursor-grab active:cursor-grabbing transition-colors rounded-lg`,
        gameData.playerTurn == "O" && `pointer-events-none cursor-no-drop`
      )}
      onClick={handleMove}
    >
      <span className={`text-4xl`}>{gameData.moves[id]}</span>
    </div>
  );
}
