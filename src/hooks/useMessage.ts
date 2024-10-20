import { useEffect, useState } from "react";

export function useMessage() {
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (message) {
      timeoutId = setTimeout(() => {
        setMessage("");
      }, 800);
    }

    return () => clearTimeout(timeoutId);
  }, [message]);

  return { message, setMessage };
}
