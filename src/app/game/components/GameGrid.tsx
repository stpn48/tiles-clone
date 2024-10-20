"use client";

import { useShowFinishedModal } from "@/hooks/useShowFinishedModal";
import { useGameLogicStore } from "@/store/gameLogicStore";
import { generateGrid } from "@/utils/generateGrid";
import { AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Cell } from "./Cell";
import { FinishModal } from "./FinishModal";
import { GameInstructionsModal } from "./GameInstructionsModal";
import { QuestionMarkCircleButton } from "./QuestionMarkCircleButton";

export function GameGrid() {
  const { grid, setGrid, gameFinished } = useGameLogicStore();

  const { showFinishedModal } = useShowFinishedModal(gameFinished);

  const [showGameInstructionsModal, setShowGameInstructionsModal] = useState(true);

  useEffect(() => {
    const grid = generateGrid();
    setGrid(grid);
  }, [setGrid]);

  return (
    <div className="flex">
      <div className="w grid h-[486px] w-[405px] grid-cols-5 grid-rows-6">
        {grid.map((cell, cellIndex) => (
          <Cell cellIndex={cellIndex} key={cellIndex} cell={cell} />
        ))}
        <QuestionMarkCircleButton setShowGameInstructionsModal={setShowGameInstructionsModal} />

        {showFinishedModal && <FinishModal closeModal={() => {}} />}

        <AnimatePresence>
          {showGameInstructionsModal && (
            <GameInstructionsModal closeModal={() => setShowGameInstructionsModal(false)} />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
