import { useCallback } from "react";

/**
 * Returns an onMouseMove handler that feeds --mx/--my CSS vars for the
 * `spotlight-card` radial border effect.
 */
export function useSpotlight() {
  return useCallback((e: React.MouseEvent<HTMLElement>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  }, []);
}
