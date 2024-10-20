import React from "react";
import { GameGrid } from "./components/GameGrid";
import { Score } from "./components/Score";

export default function GamePage() {
  return (
    <div className="flex h-screen w-screen items-center justify-center gap-10">
      <div className="flex gap-[100px]">
        <GameGrid />
        <Score />
      </div>
    </div>
  );
}
