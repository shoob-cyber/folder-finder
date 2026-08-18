import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * Telemetry crosshair cursor. Desktop / fine-pointer only.
 */
export const TargetCursor: React.FC = () => {
  const [enabled, setEnabled] = useState(false);
  const [active, setActive] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 700, damping: 40, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 700, damping: 40, mass: 0.4 });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!fine) return;
    setEnabled(true);
    document.documentElement.classList.add("cursor-none");

    let frame = 0;
    const onMove = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      if (!frame) {
        frame = requestAnimationFrame(() => {
          frame = 0;
          setCoords({ x: Math.round(e.clientX), y: Math.round(e.clientY) });
        });
      }
      const el = e.target as HTMLElement | null;
      setActive(
        !!el?.closest(
          'a, button, [role="button"], input, textarea, select, .interactive-card',
        ),
      );
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      if (frame) cancelAnimationFrame(frame);
      document.documentElement.classList.remove("cursor-none");
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[9999] hidden md:block">
      {/* Outer target ring */}
      <motion.div
        style={{ x: sx, y: sy }}
        className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2"
      >
        <motion.div
          animate={{
            width: active ? 52 : 30,
            height: active ? 52 : 30,
            backgroundColor: active ? "rgba(0,245,160,0.16)" : "rgba(0,245,160,0)",
            borderColor: active ? "rgba(0,245,160,0.9)" : "rgba(0,245,160,0.55)",
            rotate: active ? 45 : 0,
          }}
          transition={{ type: "spring", stiffness: 400, damping: 28 }}
          className="rounded-full border -translate-x-1/2 -translate-y-1/2 backdrop-blur-[1px]"
        />
        {/* crosshair ticks */}
        <div className="absolute -translate-x-1/2 -translate-y-1/2 w-[26px] h-px bg-[#00f5a0]/40" />
        <div className="absolute -translate-x-1/2 -translate-y-1/2 h-[26px] w-px bg-[#00f5a0]/40" />
      </motion.div>

      {/* Precise dot */}
      <motion.div
        style={{ x, y }}
        className="absolute top-0 left-0 w-1 h-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00f5a0] shadow-[0_0_10px_#00f5a0]"
      />

      {/* Telemetry readout */}
      <motion.div
        style={{ x: sx, y: sy }}
        className="absolute top-0 left-0 translate-x-5 translate-y-4 font-mono text-[10px] tracking-widest text-[#00f5a0]/80 whitespace-nowrap"
      >
        X: {coords.x} Y: {coords.y}
      </motion.div>
    </div>
  );
};
