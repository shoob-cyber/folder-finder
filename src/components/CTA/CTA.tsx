import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Calendar } from "lucide-react";
import { CTAForm } from "./CTAForm";

interface CTAProps {
  onOpenDemo: () => void;
}

export const CTA: React.FC<CTAProps> = ({ onOpenDemo }) => {
  return (
    <section
      id="cta"
      className="section-seam grain-overlay aurora-field relative w-full bg-[#0a0c0f] py-28 sm:py-36 overflow-hidden border-t border-[#1f302a]"
      aria-label="Call to Action Section"
    >
      {/* Animated Glowing Radial Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[42rem] h-[42rem] bg-gradient-to-tr from-[#2dd4a8]/20 via-[#73ffb8]/15 to-[#d9f99d]/15 rounded-full blur-[140px] pointer-events-none animate-pulse-slow" />
      <div className="absolute inset-0 tech-grid-bg opacity-30 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1f302a]/80 border border-[#2dd4a8]/40 text-[#2dd4a8] text-xs font-mono font-bold tracking-wider uppercase mb-6"
        >
          <Sparkles className="w-3.5 h-3.5" />
          Preclinical Precision Acceleration
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6"
        >
          Ready to Transform <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2dd4a8] via-[#73ffb8] to-[#d9f99d]">
            Biotech & Precision Medicine?
          </span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg lg:text-xl text-[#8a9a93] max-w-2xl mx-auto leading-relaxed mb-12"
        >
          Join leading research institutions and pharma innovators in leveraging AI for cellular analysis. Get started with full sandbox access in minutes.
        </motion.p>

        {/* Form Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-10"
        >
          <CTAForm />
        </motion.div>

        {/* Action Buttons Alternatives */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <button
            onClick={onOpenDemo}
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/20 hover:border-[#2dd4a8]/80 text-white font-semibold text-sm transition-all duration-200 hover:scale-[1.03] active:scale-[0.98] shadow-sm hover:shadow-[0_0_20px_rgba(45,212,168,0.25)]"
          >
            <Calendar className="w-4 h-4 text-[#2dd4a8]" />
            <span>Schedule Guided Enterprise Demo</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};
