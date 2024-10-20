"use client";

import { useGameLogicStore } from "@/store/gameLogicStore";
import React, { useEffect } from "react";

export function Score() {
  const { combo, setMaxCombo, maxCombo, setTotalCombo, totalCombo, setGameFinished } =
    useGameLogicStore();

  useEffect(() => {
    setMaxCombo((prev) => Math.max(prev, combo));

    setTotalCombo((prev) => {
      return prev + 1;
    });
  }, [combo, setMaxCombo, setTotalCombo]);

  useEffect(() => {
    if (totalCombo === 44) {
      setGameFinished(true);
    }
  }, [totalCombo, setGameFinished]);

  return (
    <div className="flex h-full flex-col justify-start gap-10 font-geistSans font-medium">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-sm">Current Combo</h1>
        <p className="text-3xl">{combo}</p>
      </div>
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-sm">Maximum Combo</h1>
        <p className="text-3xl">{maxCombo}</p>
      </div>
    </div>
  );
}
