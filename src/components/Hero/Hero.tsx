import React, { useRef, lazy, Suspense } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ClientOnly } from "@tanstack/react-router";
import { HeroText } from "./HeroText";

// R3F/Three access WebGL at import time, so we lazy-load it and only render on the client.
const HeroVisual = lazy(() =>
  import("./HeroVisual").then((m) => ({ default: m.HeroVisual })),
);

function HeroVisualFallback() {
  return (
    <div className="relative w-full h-[450px] sm:h-[550px] lg:h-[650px] flex items-center justify-center">
      <div className="w-64 h-64 rounded-full bg-[#00f5a0]/10 blur-3xl animate-pulse" />
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
      className="aurora-field grain-overlay scan-sweep relative min-h-screen w-full bg-[#070b09] pt-24 pb-16 md:pt-32 md:pb-24 flex items-center overflow-hidden"
      aria-label="Hero Section"
    >
      {/* Background Tech Grid & Atmosphere Glows */}
      <div className="absolute inset-0 tech-grid-bg opacity-30 pointer-events-none [mask-image:radial-gradient(70%_60%_at_50%_40%,#000,transparent)]" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#070b09] to-transparent pointer-events-none" />

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
          <div className="w-1 h-1.5 rounded-full bg-[#00f5a0]" />
        </motion.div>
      </div>
    </section>
  );
};
