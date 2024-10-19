import { create } from "zustand";

interface Store {
  firstTilePatternIds: string[] | null;
  setFirstTilePatternIds: (patternIds: string[]) => void;
}
export const useGameLogicStore = create<Store>((set) => ({
  firstTilePatternIds: null,
  setFirstTilePatternIds: (id) => set({ firstTilePatternIds: id }),
}));
