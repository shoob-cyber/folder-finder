import React from "react";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, ShieldCheck, Zap, Sparkles, Play } from "lucide-react";

interface HeroTextProps {
  onOpenDemo: () => void;
}

export const HeroText: React.FC<HeroTextProps> = ({ onOpenDemo }) => {
  const headlineLine1 = "Precision biology,";
  const headlineLine2 = "engineered for the clinic.";

  // Letter reveal animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.025,
        delayChildren: 0.2,
      },
    },
  };

  const letterVariants: Variants = {
    hidden: { opacity: 0, y: 28, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <div className="flex flex-col justify-center max-w-2xl z-10">
      {/* Live Technology Status Badge */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#1f302a]/60 border border-[#2dd4a8]/30 backdrop-blur-md w-fit mb-6 shadow-[0_0_15px_rgba(45,212,168,0.15)]"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2dd4a8] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2dd4a8]"></span>
        </span>
        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#2dd4a8] font-semibold">
          Cellular Intelligence Platform · Release 4.2
        </span>
      </motion.div>

      {/* Staggered Animated Headline */}
      <motion.h1
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="font-display text-[2.75rem] sm:text-6xl lg:text-[4.25rem] font-extrabold tracking-[-0.035em] text-white leading-[1.03] mb-6"
      >
        <span className="block">
          {headlineLine1.split(" ").map((word, index) => (
            <motion.span
              key={`line1-${index}`}
              variants={letterVariants}
              className="inline-block mr-[0.28em]"
            >
              {word}
            </motion.span>
          ))}
        </span>
        <span className="block mt-1">
          {headlineLine2.split(" ").map((word, index) => (
            <motion.span
              key={`line2-${index}`}
              variants={letterVariants}
              className="inline-block mr-[0.28em] text-gradient-bio"
            >
              {word}
            </motion.span>
          ))}
        </span>
      </motion.h1>

      {/* Subheading */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="text-base sm:text-lg text-[#9bb0a7] font-normal leading-relaxed mb-9 max-w-xl"
      >
        Nexus Biotech unifies high-resolution cellular imaging, multi-omics and
        predictive modelling in one validated environment — so translational teams
        move from discovery to clinical evidence with fewer dead ends.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="flex flex-wrap items-center gap-4 mb-10"
      >
        <a
          href="#cta"
          className="btn-bio inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-white/70"
        >
          <span>Request Platform Access</span>
          <ArrowRight className="w-4 h-4" />
        </a>

        <button
          onClick={onOpenDemo}
          className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-white/90 bg-white/5 hover:bg-white/10 border border-white/15 hover:border-[#2dd4a8]/60 hover:text-[#2dd4a8] backdrop-blur-md transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#2dd4a8]"
        >
          <Play className="w-4 h-4 text-[#2dd4a8] fill-[#2dd4a8]/20" />
          <span>Watch the Platform Tour</span>
        </button>
      </motion.div>

      {/* Trust & Spec Indicators */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.0 }}
        className="pt-6 border-t border-[#1f302a] grid grid-cols-1 sm:grid-cols-3 gap-4"
      >
        <div className="flex items-center gap-2.5">
          <div className="p-1.5 rounded-lg bg-[#2dd4a8]/10 text-[#2dd4a8]">
            <Zap className="w-4 h-4" />
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-semibold text-white/90">&lt;0.08µm</span>
            <span className="text-[11px] text-[#8a9a93]">Sub-micron Imaging</span>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          <div className="p-1.5 rounded-lg bg-[#73ffb8]/10 text-[#73ffb8]">
            <Sparkles className="w-4 h-4" />
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-semibold text-white/90">99.98%</span>
            <span className="text-[11px] text-[#8a9a93]">Model Fidelity</span>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          <div className="p-1.5 rounded-lg bg-[#d9f99d]/10 text-[#d9f99d]">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-semibold text-white/90">HIPAA & SOC2</span>
            <span className="text-[11px] text-[#8a9a93]">FDA Part 11 Ready</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
