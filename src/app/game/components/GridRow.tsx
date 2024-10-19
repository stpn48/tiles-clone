import React from "react";
import { Tile } from "./Tile";

type Props = {
  row: {
    groupName: string;
    id: string;
    svg: string;
  }[][];
};

export function GridRow({ row }: Props) {
  return (
    <div className="flex flex-row gap-2">
      {row.map((tile, tileIndex) => (
        <Tile tile={tile} key={tileIndex} />
      ))}
    </div>
  );
}
