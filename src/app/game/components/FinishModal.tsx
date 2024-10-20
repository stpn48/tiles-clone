"use client ";

import { Modal } from "@/components/Modal";
import { useGameLogicStore } from "@/store/gameLogicStore";
import React from "react";

type Props = {
  closeModal: () => void;
};

export function FinishModal({ closeModal }: Props) {
  const { maxCombo, perfectCombo } = useGameLogicStore();

  return (
    <Modal className="flex h-fit w-fit flex-col items-center gap-8 p-12" closeModal={closeModal}>
      <h1 className="flex w-full justify-center text-3xl font-bold">
        {perfectCombo ? "Perfect!" : "Congratulations!"}
      </h1>
      {perfectCombo && <p>You have not made a single mistake.</p>}
      {perfectCombo && (
        <p>
          Your combo was <strong>{maxCombo} moves</strong>
        </p>
      )}
      {!perfectCombo && <p>You have completed the game!</p>}
      {!perfectCombo && (
        <p>
          Your highest combos was <strong>{maxCombo} moves</strong>
        </p>
      )}

      <button
        className="rounded-full bg-black px-4 py-2 text-white"
        onClick={() => window.location.reload()}
      >
        Play again
      </button>
    </Modal>
  );
}
