"use client";

import { useGameLogicStore } from "@/store/gameLogicStore";
import React, { useCallback } from "react";

type Tile = {
  groupName: string;
  id: string;
  svg: string;
}[];

type Props = {
  tile: Tile;
};

export function Tile({ tile }: Props) {
  const { firstTilePatternIds, setFirstTilePatternIds } = useGameLogicStore();

  const handleTileClick = useCallback(() => {
    if (!firstTilePatternIds) {
      setFirstTilePatternIds(tile.map((pattern) => pattern.id));
      return;
    }

    if (firstTilePatternIds) {
    }
  }, []);

  return (
    <div className="border relative w-[81px] h-[81px] border-white">
      {tile.map((pattern, patternIndex) => (
        <div className="absolute w-full h-full" dangerouslySetInnerHTML={{ __html: pattern.svg }} key={patternIndex} />
      ))}
    </div>
  );
}
