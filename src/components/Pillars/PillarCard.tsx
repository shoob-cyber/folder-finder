import React from "react";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { useSpotlight } from "../../hooks/useSpotlight";
import { useCountUp } from "../../hooks/useCountUp";

interface PillarCardProps {
  index: string;
  icon: LucideIcon;
  title: string;
  body: string;
  metricValue: number;
  metricSuffix: string;
  metricDecimals: number;
  metricLabel: string;
  progress: number;
  specs: string[];
  order: number;
}

export const PillarCard: React.FC<PillarCardProps> = ({
  index,
  icon: Icon,
  title,
  body,
  metricValue,
  metricSuffix,
  metricDecimals,
  metricLabel,
  progress,
  specs,
  order,
}) => {
  const onSpotlight = useSpotlight();
  const { displayValue, elementRef } = useCountUp({
    endValue: metricValue,
    duration: 2,
    suffix: metricSuffix,
    decimals: metricDecimals,
  });

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: order * 0.08 }}
      onMouseMove={onSpotlight}
      className="interactive-card spotlight-card group relative w-full lg:w-[560px] xl:w-[660px] shrink-0 rounded-2xl border border-[#164034] bg-[#0d1410]/70 backdrop-blur-xl p-7 sm:p-9 hover:border-[#00f5a0]/40 transition-colors duration-300"
    >
      <div className="flex items-start justify-between mb-6">
        <div className="p-3 rounded-xl bg-[#00f5a0]/10 border border-[#00f5a0]/25 text-[#00f5a0]">
          <Icon className="w-6 h-6" aria-hidden />
        </div>
        <span className="font-mono text-xs tracking-widest text-[#00f5a0]/60">
          PILLAR {index}
        </span>
      </div>

      <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
        {title}
      </h3>
      <p className="text-[#8a9a93] text-sm sm:text-base leading-relaxed mb-8">{body}</p>

      {/* Animated metric */}
      <div ref={elementRef} className="mb-6">
        <div className="font-mono text-4xl sm:text-5xl font-black text-[#00f5a0] drop-shadow-[0_0_18px_rgba(0,245,160,0.35)]">
          {displayValue}
        </div>
        <div className="mt-1 font-mono text-[11px] uppercase tracking-widest text-[#8a9a93]">
          {metricLabel}
        </div>
        <div className="mt-4 h-[3px] w-full rounded-full bg-[#164034] overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${progress}%` }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="h-full rounded-full bg-gradient-to-r from-[#00f5a0] to-[#00d2ff]"
          />
        </div>
      </div>

      <ul className="space-y-2 border-t border-[#164034] pt-5">
        {specs.map((s) => (
          <li key={s} className="flex items-center gap-2 font-mono text-[12px] text-[#9bb0a7]">
            <span className="w-1 h-1 rounded-full bg-[#00d2ff]" aria-hidden />
            {s}
          </li>
        ))}
      </ul>
    </motion.article>
  );
};
