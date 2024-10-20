import { useEffect, useState } from "react";

export function useShowFinishedModal(gameFinished: boolean) {
  const [showFinishedModal, setShowFinishedModal] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (gameFinished) {
      timeoutId = setTimeout(() => {
        setShowFinishedModal(true);
      }, 3000);
    }

    return () => clearTimeout(timeoutId);
  }, [gameFinished]);

  return { showFinishedModal, setShowFinishedModal };
}
