"use client";

import { useEffect, useRef } from "react";

export const useBodyScrollLock = (isLocked: boolean) => {
  const originalOverflow = useRef<string | undefined>(undefined);

  useEffect(() => {
    if (isLocked) {
      // Store the original overflow value only the first time we lock
      if (originalOverflow.current === undefined) {
        originalOverflow.current = document.body.style.overflow;
      }
      document.body.style.overflow = "hidden";
    } else {
      // Restore the original overflow value
      if (originalOverflow.current !== undefined) {
        document.body.style.overflow = originalOverflow.current;
        originalOverflow.current = undefined;
      }
    }
    return () => {
      // Restore the original overflow value on cleanup
      if (originalOverflow.current !== undefined) {
        document.body.style.overflow = originalOverflow.current;
        originalOverflow.current = undefined;
      }
    };
  }, [isLocked]);
};
