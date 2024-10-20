"use client";

import { useMessage } from "@/hooks/useMessage";
import { useGameLogicStore } from "@/store/gameLogicStore";
import { Pattern as PatternType } from "@/types/types";
import { AnimatePresence, motion } from "framer-motion";
import React, { useCallback } from "react";
import { twMerge } from "tailwind-merge";
import { MessagePopup } from "./MessagePopup";
import { Pattern } from "./Pattern";

type Props = {
  cell: PatternType[];
  cellIndex: number;
};

export function Cell({ cell, cellIndex }: Props) {
  const {
    firstCellIndex,
    setFirstCellIndex,
    grid,
    setGrid,
    setCombo,
    gameFinished,
    setPerfectCombo,
  } = useGameLogicStore();

  const { message, setMessage } = useMessage();

  const handleCellClick = useCallback(() => {
    // if cell is empty, do nothing
    if (grid[cellIndex].length === 0) {
      return;
    }

    // if the first cell index is null, user is selecting the first cell
    if (firstCellIndex === null) {
      setFirstCellIndex(cellIndex);
      return;
    }

    // if the user is clicking on the same cell, do nothing
    if (firstCellIndex === cellIndex) {
      return;
    }

    // if the user is clicking on a different cell, check if there is a match
    if (firstCellIndex !== cellIndex) {
      const firstCell = grid[firstCellIndex];
      const secondCell = grid[cellIndex];

      const updatedFirstCell = firstCell.filter(
        (pattern) => !secondCell.some((secondPattern) => secondPattern.id === pattern.id),
      );

      const updatedSecondCell = secondCell.filter(
        (pattern) => !firstCell.some((firstPattern) => firstPattern.id === pattern.id),
      );

      // if the lengths of the updated cells are hasn't changed, there is no match
      if (
        updatedFirstCell.length === firstCell.length &&
        updatedSecondCell.length === secondCell.length
      ) {
        setMessage("No match");
        setPerfectCombo(false);
        setCombo(0);
        setFirstCellIndex(null);
        return;
      }

      // There was a match, calculate the combo and update grid
      const combo = firstCell.length - updatedFirstCell.length;
      setCombo((prev) => prev + combo);
      setMessage(combo.toString());

      setGrid((prevGrid) => {
        const updatedGrid = [...prevGrid];
        updatedGrid[firstCellIndex] = updatedFirstCell;
        updatedGrid[cellIndex] = updatedSecondCell;
        return updatedGrid;
      });

      // if the updated second cell is empty, there user can go anywhere
      if (updatedSecondCell.length === 0) {
        setMessage("Go anywhere");
        setFirstCellIndex(null);
        return;
      }

      // if match and the second cell is not empty, set the current selected cell to that second one
      setFirstCellIndex(cellIndex);
    }
  }, [firstCellIndex, setFirstCellIndex, cellIndex, grid, setGrid, setCombo, setMessage]);

  return (
    <motion.div
      animate={{
        rotate: gameFinished ? 0 : "360deg",
        scale: gameFinished ? 0 : 1,
        transition: { duration: gameFinished ? 0.5 : 0, delay: cellIndex * 0.1 },
      }}
      onClick={handleCellClick}
      className={twMerge(
        "relative flex h-[81px] w-[81px] items-center justify-center overflow-visible border-4 border-transparent font-geistSans text-sm font-medium",
        firstCellIndex === cellIndex && "border-green-500",
        cellIndex % 2 === 0 && "bg-[#e8f3ff]",
      )}
    >
      <AnimatePresence>
        {cell.map((pattern, patternIndex) => (
          <Pattern key={patternIndex} pattern={pattern} />
        ))}
      </AnimatePresence>

      <AnimatePresence>{message && <MessagePopup message={message} />}</AnimatePresence>
    </motion.div>
  );
}
