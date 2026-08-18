import React from "react";
import { type LucideIcon, CheckCircle2 } from "lucide-react";

interface TimelineStepProps {
  stepNumber: number;
  title: string;
  description: string;
  detail: string;
  icon: LucideIcon;
  isActive: boolean;
  onSelect: () => void;
}

export const TimelineStep: React.FC<TimelineStepProps> = ({
  stepNumber,
  title,
  description,
  detail,
  icon: Icon,
  isActive,
  onSelect,
}) => {
  return (
    <div className="relative flex flex-col items-start lg:items-center text-left lg:text-center group">
      {/* Step Number & Icon Node */}
      <button
        type="button"
        onClick={onSelect}
        className={`relative z-10 flex items-center justify-center w-16 h-16 rounded-2xl border-2 transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-[#2dd4a8] ${
          isActive
            ? "bg-[#0a0c0f] border-[#2dd4a8] text-[#2dd4a8] shadow-[0_0_25px_rgba(0,212,255,0.4)] scale-110"
            : "bg-[#0f1613] border-[#1f302a] text-[#ffffff] group-hover:border-[#2dd4a8]/60 group-hover:shadow-[0_8px_20px_rgba(45,212,168,0.12)] group-hover:scale-105"
        }`}
        aria-label={`Step ${stepNumber}: ${title}`}
      >
        <Icon className={`w-7 h-7 transition-transform duration-500 ${isActive ? "rotate-12 scale-110" : ""}`} />
        
        {/* Step number badge */}
        <span
          className={`absolute -top-2 -right-2 w-6 h-6 rounded-full text-[11px] font-mono font-bold flex items-center justify-center border ${
            isActive
              ? "bg-[#2dd4a8] text-[#0a0c0f] border-white"
              : "bg-[#0a0c0f] text-white border-[#1f302a]"
          }`}
        >
          0{stepNumber}
        </span>
      </button>

      {/* Step Title & Description */}
      <div
        onClick={onSelect}
        className={`mt-6 p-4 rounded-xl transition-all duration-300 cursor-pointer w-full ${
          isActive ? "bg-[#0f1613] shadow-[0_8px_24px_rgba(45,212,168,0.12)] border border-[#2dd4a8]/40" : "hover:bg-white/60"
        }`}
      >
        <h3 className="text-lg sm:text-xl font-bold text-[#ffffff] mb-2 group-hover:text-[#2dd4a8] transition-colors">
          {title}
        </h3>
        <p className="text-sm text-[#9bb0a7] leading-relaxed mb-3">
          {description}
        </p>

        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#f0f3fa] text-[11px] font-mono text-[#0a0c0f] font-semibold">
          <CheckCircle2 className="w-3.5 h-3.5 text-[#2dd4a8]" />
          <span>{detail}</span>
        </div>
      </div>
    </div>
  );
};
