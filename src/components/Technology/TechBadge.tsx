import React from "react";
import { motion } from "framer-motion";
import { type LucideIcon, CheckCircle2 } from "lucide-react";
import { useSpotlight } from "../../hooks/useSpotlight";

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
  badgeColor = "#00f5a0",
  index,
  isActive,
  onSelect,
}) => {
  const onSpotlight = useSpotlight();

  return (
    <motion.button
      type="button"
      onClick={onSelect}
      onMouseMove={onSpotlight}
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
      className={`interactive-card spotlight-card relative text-left w-full p-5 rounded-xl border transition-all duration-300 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-[#00f5a0] ${
        isActive
          ? "bg-[#12201a] border-[#00f5a0] shadow-[0_0_25px_rgba(0, 245, 160,0.35)]"
          : "bg-[#0d1410]/80 border-[#164034] hover:border-[#00f5a0]/50 hover:bg-[#12201a]/80 hover:shadow-[0_0_20px_rgba(0, 245, 160,0.2)]"
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
          {isActive && <CheckCircle2 className="w-4 h-4 text-[#00f5a0]" />}
        </span>
        <span className="text-xs text-[#8a9a93] font-mono leading-relaxed">{spec}</span>
      </div>

      {/* Interactive Active Glow Bar */}
      {isActive && (
        <motion.div
          layoutId="activeTechIndicator"
          className="absolute -bottom-[1px] left-4 right-4 h-[2px] bg-gradient-to-r from-transparent via-[#00f5a0] to-transparent"
        />
      )}
    </motion.button>
  );
};
