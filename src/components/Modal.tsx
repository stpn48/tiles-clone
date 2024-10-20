import { motion } from "framer-motion";
import React from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  className?: string;
  closeModal: () => void;
  children: React.ReactNode;
  XMark?: boolean;
};

export function Modal({ className, closeModal, children, XMark }: Props) {
  return (
    <motion.div
      initial={{ y: 10 }}
      animate={{ y: 0 }}
      exit={{ y: 10, opacity: 0 }}
      onClick={closeModal}
      className="fixed inset-0 flex h-screen w-screen items-center justify-center bg-white bg-opacity-50"
    >
      <div
        onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking on the modal itself
        className={twMerge("shadow-spread relative h-[80%] w-[70%] rounded-sm bg-white", className)}
      >
        {XMark && (
          <button onClick={closeModal} className="absolute right-4 top-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-5 text-black"
            >
              <path
                fillRule="evenodd"
                d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        )}
        {children}
      </div>
    </motion.div>
  );
}
