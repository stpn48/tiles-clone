import { motion } from "framer-motion";
import React from "react";

type Props = {
  message: string;
};

export function MessagePopup({ message }: Props) {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className="z-50 whitespace-nowrap rounded-full bg-black bg-opacity-90 px-4 py-2 text-xs text-white">
        {message}
      </div>
    </motion.div>
  );
}
