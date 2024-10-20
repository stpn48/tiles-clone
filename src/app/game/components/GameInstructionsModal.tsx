import { Modal } from "@/components/Modal";
import { li } from "framer-motion/client";
import Image from "next/image";
import React from "react";

const list1Elements = [
  "Find combos: Same-colored shapes or backgrounds shared by 2 tiles. Each tile has multiple visual elements.",
  "Tap tiles to remove the matches you find. Tiles don&apos;t have to be adjacent",
  "To create a long combo, match the second tile you tap to a new one.",
  "Continue matching until the board is cleared. You won&apos;t lose your long combo if you end on an empty tile.",
];

type Props = {
  closeModal: () => void;
};

export function GameInstructionsModal({ closeModal }: Props) {
  return (
    <Modal className="h-fit w-fit p-12" XMark closeModal={closeModal}>
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">How to play Tiles</h1>
        <p>Match identical shapes or backgrounds in every tile.</p>
      </div>
      <div className="mt-10 flex w-full items-center justify-center gap-2">
        <p>Example:</p>
        <Image width={31} height={31} alt="tls-example-0" src={"/tls-example-0.svg"} /> <p>and</p>
        <Image width={31} height={31} alt="tls-example-1" src={"/tls-example-1.svg"} /> <p>share</p>
        <Image width={31} height={31} alt="tls-example-2" src={"/tls-example-2.svg"} />
      </div>
      <ul className="mt-10 list-disc font-geistSans">
        {list1Elements.map((element) => (
          <li className="mb-2">{element}</li>
        ))}
      </ul>
    </Modal>
  );
}
