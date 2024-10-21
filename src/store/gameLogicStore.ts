import { Pattern } from "@/types/types";
import { create } from "zustand";

interface Store {
  grid: Pattern[][];
  setGrid: (grid: Pattern[][] | ((prev: Pattern[][]) => Pattern[][])) => void;

  firstCellIndex: number | null;
  setFirstCellIndex: (index: number | null) => void;

  combo: number;
  setCombo: (combo: number | ((prev: number) => number)) => void;

  maxCombo: number;
  setMaxCombo: (maxCombo: number | ((prev: number) => number)) => void;

  perfectCombo: boolean;
  setPerfectCombo: (perfectCombo: boolean) => void;

  gameFinished: boolean;
  setGameFinished: (finished: boolean) => void;

  totalCombo: number;
  setTotalCombo: (totalCombo: number | ((prev: number) => number)) => void;
}
export const useGameLogicStore = create<Store>((set) => ({
  grid: [],
  setGrid: (grid) =>
    set((state) => ({ grid: typeof grid === "function" ? grid(state.grid) : grid })),

  firstCellIndex: null,
  setFirstCellIndex: (index) => set({ firstCellIndex: index }),

  combo: 0,
  setCombo: (combo) =>
    set((state) => ({ combo: typeof combo === "function" ? combo(state.combo) : combo })),

  maxCombo: 0,
  setMaxCombo: (maxCombo) =>
    set((state) => ({
      maxCombo: typeof maxCombo === "function" ? maxCombo(state.maxCombo) : maxCombo,
    })),

  perfectCombo: true,
  setPerfectCombo: (perfectCombo) => set({ perfectCombo }),

  gameFinished: false,
  setGameFinished: (finished) => set({ gameFinished: finished }),

  totalCombo: 0,
  setTotalCombo: (totalCombo) =>
    set((state) => ({
      totalCombo: typeof totalCombo === "function" ? totalCombo(state.totalCombo) : totalCombo,
    })),
}));
