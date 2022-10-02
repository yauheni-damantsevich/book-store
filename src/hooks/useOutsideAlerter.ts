import React, { useEffect } from "react";

export const useOutsideAlerter = (
  ref: any,
  state: any,
  setState: (state: any) => typeof state,
  unlockScroll: () => void
) => {
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        setState(false);
        unlockScroll();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
};
