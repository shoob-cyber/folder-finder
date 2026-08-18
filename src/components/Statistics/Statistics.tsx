import React from "react";
import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { StatCard } from "./StatCard";

export const Statistics: React.FC = () => {
  const stats = [
    {
      endValue: 2500,
      suffix: "+",
      label: "Active Researchers",
      sublabel: "Across 140+ global academic & pharma labs",
      decimals: 0,
    },
    {
      endValue: 18,
      suffix: "",
      label: "Published Studies",
      sublabel: "Featured in Nature, Cell & The Lancet",
      decimals: 0,
    },
    {
      endValue: 450,
      suffix: "M+",
      label: "Data Points Analyzed",
      sublabel: "Single-cell assays & molecular graphs",
      decimals: 0,
    },
    {
      endValue: 92,
      suffix: "%",
      label: "Success Rate",
      sublabel: "In-silico to wet lab target validation",
      decimals: 0,
    },
  ];

  return (
    <section
      id="statistics"
      className="relative w-full bg-[#0a0e27] py-24 sm:py-32 overflow-hidden border-t border-[#1a2847]"
      aria-label="Scientific Impact Statistics"
    >
      {/* Background radial gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e27] via-[#0f153a]/50 to-[#0a0e27] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[20rem] bg-[#00d4ff]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1a2847]/80 border border-[#00d4ff]/30 text-[#00d4ff] text-xs font-mono font-bold tracking-wider uppercase mb-4"
          >
            <Award className="w-3.5 h-3.5" />
            Quantifiable Scientific Impact
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6"
          >
            Validated at Global Scale
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-[#888899] leading-relaxed"
          >
            Powering clinical pipeline transformation for tier-one pharmaceutical enterprises and pioneering biotech startups worldwide.
          </motion.p>
        </div>

        {/* 4 Columns (desktop) -> 2 cols (tablet) -> 1 col (mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <StatCard
              key={stat.label}
              endValue={stat.endValue}
              suffix={stat.suffix}
              label={stat.label}
              sublabel={stat.sublabel}
              decimals={stat.decimals}
              index={idx}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
