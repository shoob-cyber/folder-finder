import React from "react";
import { motion } from "framer-motion";
import { useCountUp } from "../../hooks/useCountUp";

interface StatCardProps {
  endValue: number;
  prefix?: string;
  suffix?: string;
  label: string;
  sublabel: string;
  decimals?: number;
  index: number;
}

export const StatCard: React.FC<StatCardProps> = ({
  endValue,
  prefix = "",
  suffix = "",
  label,
  sublabel,
  decimals = 0,
  index,
}) => {
  const { displayValue, elementRef } = useCountUp({
    endValue,
    duration: 2.2,
    prefix,
    suffix,
    decimals,
  });

  return (
    <motion.div
      ref={elementRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.6,
        delay: index * 0.12,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{ scale: 1.04 }}
      className="group relative flex flex-col items-center sm:items-start text-center sm:text-left p-6 sm:p-8 rounded-2xl bg-[#0f153a]/40 border border-[#1a2847]/80 hover:border-[#00d4ff]/40 hover:bg-[#141c4d]/60 backdrop-blur-md transition-all duration-300"
    >
      {/* Glow highlight on hover */}
      <div className="absolute inset-0 rounded-2xl bg-radial-gradient from-[#00d4ff]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Large Glowing Number */}
      <div className="text-4xl sm:text-5xl lg:text-6xl font-black font-mono text-[#00d4ff] tracking-tight mb-2 drop-shadow-[0_0_15px_rgba(0,212,255,0.4)] group-hover:drop-shadow-[0_0_25px_rgba(0,212,255,0.7)] transition-all duration-300">
        {displayValue}
      </div>

      {/* Label */}
      <div className="text-base sm:text-lg font-bold text-white mb-1 tracking-wide">
        {label}
      </div>

      {/* Sublabel */}
      <div className="text-xs sm:text-sm text-[#888899] font-medium leading-relaxed">
        {sublabel}
      </div>

      {/* Bottom Accent line */}
      <div className="w-8 h-[2px] bg-[#1a2847] group-hover:w-full group-hover:bg-gradient-to-r group-hover:from-[#00d4ff] group-hover:to-[#9d4edd] mt-4 transition-all duration-500" />
    </motion.div>
  );
};
