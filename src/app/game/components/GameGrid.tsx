import tiles from "@/assets/testTileSet.json";
import React from "react";
import { GridRow } from "./GridRow";

type Props = {};

export function GameGrid({}: Props) {
  return (
    <div className="flex flex-col">
      {tiles.map((row, rowIndex) => (
        <GridRow key={rowIndex} row={row} />
      ))}
    </div>
  );
}
