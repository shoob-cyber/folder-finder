import React from "react";
import { motion } from "framer-motion";
import { type LucideIcon, CheckCircle2 } from "lucide-react";

interface TechBadgeProps {
  icon: LucideIcon;
  name: string;
  category: string;
  spec: string;
  badgeColor?: string;
  index: number;
  isActive: boolean;
  onSelect: () => void;
}

export const TechBadge: React.FC<TechBadgeProps> = ({
  icon: Icon,
  name,
  category,
  spec,
  badgeColor = "#00d4ff",
  index,
  isActive,
  onSelect,
}) => {
  return (
    <motion.button
      type="button"
      onClick={onSelect}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={`relative text-left w-full p-5 rounded-xl border transition-all duration-300 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-[#00d4ff] ${
        isActive
          ? "bg-[#141c4d] border-[#00d4ff] shadow-[0_0_25px_rgba(0,212,255,0.35)]"
          : "bg-[#0f153a]/80 border-[#1a2847] hover:border-[#00d4ff]/50 hover:bg-[#141c4d]/80 hover:shadow-[0_0_20px_rgba(0,212,255,0.2)]"
      }`}
      aria-pressed={isActive}
    >
      <div className="flex items-start justify-between mb-3">
        <div
          className="p-2.5 rounded-lg border flex items-center justify-center"
          style={{
            backgroundColor: `${badgeColor}15`,
            borderColor: `${badgeColor}35`,
            color: badgeColor,
          }}
        >
          <Icon className="w-5 h-5" />
        </div>
        <span className="font-mono text-[10px] uppercase tracking-wider text-white/50 px-2 py-0.5 rounded bg-white/5 border border-white/10">
          {category}
        </span>
      </div>

      <div className="flex flex-col">
        <span className="text-base font-bold text-white tracking-wide mb-1 flex items-center justify-between">
          <span>{name}</span>
          {isActive && <CheckCircle2 className="w-4 h-4 text-[#00d4ff]" />}
        </span>
        <span className="text-xs text-[#888899] font-mono leading-relaxed">{spec}</span>
      </div>

      {/* Interactive Active Glow Bar */}
      {isActive && (
        <motion.div
          layoutId="activeTechIndicator"
          className="absolute -bottom-[1px] left-4 right-4 h-[2px] bg-gradient-to-r from-transparent via-[#00d4ff] to-transparent"
        />
      )}
    </motion.button>
  );
};
