import React, { useState } from "react";
import { motion } from "framer-motion";
import { type LucideIcon, ArrowUpRight } from "lucide-react";

interface InnovationCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  tag: string;
  metric: string;
  metricLabel: string;
  interactiveType: "slider" | "speed" | "nodes";
  index: number;
}

export const InnovationCard: React.FC<InnovationCardProps> = ({
  icon: Icon,
  title,
  description,
  tag,
  metric,
  metricLabel,
  interactiveType,
  index,
}) => {
  const [sliderVal, setSliderVal] = useState(85);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: 0.7,
        delay: index * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex flex-col justify-between bg-white rounded-2xl p-6 sm:p-8 border border-[#e8ecff] shadow-[0_4px_16px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.12)] hover:border-[#2dd4a8]/40 transition-all duration-300 transform hover:-translate-y-1.5"
    >
      {/* Top Header & Tag */}
      <div>
        <div className="flex items-center justify-between mb-6">
          {/* Icon with 360 rotation on hover */}
          <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-[#f0f4ff] border border-[#e0e7ff] text-[#0a0c0f] group-hover:bg-[#0a0c0f] group-hover:text-[#2dd4a8] transition-all duration-500 shadow-sm">
            <Icon
              className="w-7 h-7 transition-transform duration-700 ease-out group-hover:rotate-[360deg]"
            />
          </div>
          <span className="px-3 py-1 text-xs font-mono font-semibold uppercase tracking-wider text-[#0a0c0f]/80 bg-[#f0f4ff] rounded-full border border-[#e0e7ff]">
            {tag}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-[#1a1a2e] group-hover:text-[#2dd4a8] transition-colors duration-200 mb-3 flex items-center justify-between">
          <span>{title}</span>
          <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 text-[#2dd4a8]" />
        </h3>

        {/* Description */}
        <p className="text-sm sm:text-base text-[#6b7280] group-hover:text-[#374151] leading-relaxed mb-6 transition-colors duration-200">
          {description}
        </p>
      </div>

      {/* Interactive Micro-Widget */}
      <div className="mt-4 pt-5 border-t border-[#f0f3fa]">
        {interactiveType === "slider" && (
          <div className="flex flex-col gap-2">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-[#8a9a93]">Optical Zoom / Res</span>
              <span className="font-bold text-[#1a1a2e]">{(sliderVal * 0.001).toFixed(3)} µm</span>
            </div>
            <input
              type="range"
              min="20"
              max="100"
              value={sliderVal}
              onChange={(e) => setSliderVal(Number(e.target.value))}
              className="w-full h-1.5 bg-[#e8ecff] rounded-lg appearance-none cursor-pointer accent-[#2dd4a8]"
              aria-label="Resolution scale slider"
            />
            <div className="flex justify-between text-[11px] text-[#8a9a93]">
              <span>Confocal Standard</span>
              <span className="text-[#0a0c0f] font-semibold">Nexus Nano-AI</span>
            </div>
          </div>
        )}

        {interactiveType === "speed" && (
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-[#8a9a93]">Trial Simulation Lead</span>
              <span className="font-bold text-[#1a1a2e]">2.4 Weeks vs 18 Mos</span>
            </div>
            <div className="w-full bg-[#e8ecff] h-2 rounded-full overflow-hidden flex">
              <motion.div
                initial={{ width: "20%" }}
                animate={{ width: isHovered ? "92%" : "75%" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="bg-gradient-to-r from-[#2dd4a8] to-[#73ffb8] h-full rounded-full"
              />
            </div>
            <div className="flex justify-between text-[11px] text-[#8a9a93]">
              <span>Legacy Wet Lab</span>
              <span className="text-[#0a0c0f] font-semibold">14.8x Accelerated</span>
            </div>
          </div>
        )}

        {interactiveType === "nodes" && (
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-1.5">
                <span className="w-5 h-5 rounded-full bg-[#2dd4a8] border-2 border-white flex items-center justify-center text-[8px] font-bold text-white">AWS</span>
                <span className="w-5 h-5 rounded-full bg-[#73ffb8] border-2 border-white flex items-center justify-center text-[8px] font-bold text-white">GCP</span>
                <span className="w-5 h-5 rounded-full bg-[#d9f99d] border-2 border-white flex items-center justify-center text-[8px] font-bold text-white">AZ</span>
              </div>
              <span className="text-xs font-mono text-[#6b7280]">Multi-Node Cluster</span>
            </div>
            <span className="inline-flex items-center gap-1 text-xs font-bold text-[#0a0c0f] font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              99.999% SLA
            </span>
          </div>
        )}

        {/* Metric display */}
        <div className="mt-4 flex items-baseline justify-between pt-3 border-t border-dashed border-[#e8ecff]">
          <span className="text-xs text-[#8a9a93] uppercase tracking-wider">{metricLabel}</span>
          <span className="text-lg font-extrabold text-[#1a1a2e] font-mono">{metric}</span>
        </div>
      </div>
    </motion.div>
  );
};
