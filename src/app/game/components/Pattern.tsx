import { Pattern as PatterType } from "@/types/types";
import { motion } from "framer-motion";
import React from "react";

type Props = {
  pattern: PatterType;
};

export function Pattern({ pattern }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, rotate: "15deg" }}
      animate={{ opacity: 1, scale: [0.5, 1.1, 1], rotate: "0deg" }}
      exit={{
        scale: [1.1, 1.2, 0],
        rotate: "30deg",
        transition: { duration: 0.5 },
      }}
      transition={{ duration: 0.3 }}
      className="absolute h-full w-full"
      dangerouslySetInnerHTML={{ __html: pattern.svg }}
    />
  );
}
