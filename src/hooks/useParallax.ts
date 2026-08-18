import { useState, useEffect } from "react";

export function useParallax(intensity = 0.05) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Only apply on non-touch desktop devices
    if (typeof window === "undefined" || window.innerWidth < 1024) return;

    const handleMouseMove = (e: MouseEvent) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const moveX = (e.clientX - centerX) * intensity;
      const moveY = (e.clientY - centerY) * intensity;
      setOffset({ x: moveX, y: moveY });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [intensity]);

  return offset;
}
