import React, { useRef, lazy, Suspense } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ClientOnly } from "@tanstack/react-router";
import { HeroText } from "./HeroText";

// three.js touches browser/WebGL APIs at import time — keep it out of SSR.
const HeroVisual = lazy(() =>
  import("./HeroVisual").then((m) => ({ default: m.HeroVisual })),
);

function HeroVisualFallback() {
  return (
    <div className="relative w-full h-[450px] sm:h-[550px] lg:h-[650px] flex items-center justify-center">
      <div className="w-64 h-64 rounded-full bg-[#2dd4a8]/10 blur-3xl animate-pulse" />
    </div>
  );
}


interface HeroProps {
  onOpenDemo: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDemo }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Opacity shift as user scrolls down (fades out at 50vh as specified)
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0.15]);
  const y = useTransform(scrollYProgress, [0, 0.6], [0, 60]);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen w-full bg-[#0a0c0f] pt-24 pb-16 md:pt-32 md:pb-24 flex items-center overflow-hidden"
      aria-label="Hero Section"
    >
      {/* Background Tech Grid & Atmosphere Glows */}
      <div className="absolute inset-0 tech-grid-bg opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#2dd4a8]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[30rem] h-[30rem] bg-[#73ffb8]/10 rounded-full blur-[140px] pointer-events-none" />

      <motion.div
        style={{ opacity, y }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column (60% on desktop = 7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <HeroText onOpenDemo={onOpenDemo} />
          </div>

          {/* Right Column (40% on desktop = 5 cols) */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <ClientOnly fallback={<HeroVisualFallback />}>
              <Suspense fallback={<HeroVisualFallback />}>
                <HeroVisual />
              </Suspense>
            </ClientOnly>

          </div>
        </div>
      </motion.div>

      {/* Downward Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none">
        <span className="text-[11px] font-mono tracking-widest text-[#8a9a93]/70 uppercase">Explore Platform</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-4 h-7 rounded-full border border-white/20 flex justify-center pt-1"
        >
          <div className="w-1 h-1.5 rounded-full bg-[#2dd4a8]" />
        </motion.div>
      </div>
    </section>
  );
};
