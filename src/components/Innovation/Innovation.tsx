import React from "react";
import { motion } from "framer-motion";
import { Microscope, Zap, Network, Sparkles } from "lucide-react";
import { InnovationCard } from "./InnovationCard";

export const Innovation: React.FC = () => {
  const pillars = [
    {
      icon: Microscope,
      title: "Precision Analysis",
      description: "AI-powered cellular imaging with sub-micron accuracy that isolates subtle phenotypic variations invisible to standard microscopy.",
      tag: "Deep Vision",
      metric: "< 0.08 µm",
      metricLabel: "Optical Fidelity",
      interactiveType: "slider" as const,
    },
    {
      icon: Zap,
      title: "Rapid Deployment",
      description: "From discovery to validation in weeks, not months. Accelerate your therapeutic candidate screening with predictive in-silico testing.",
      tag: "Pipeline Velocity",
      metric: "14.8x Speed",
      metricLabel: "Cycle Acceleration",
      interactiveType: "speed" as const,
    },
    {
      icon: Network,
      title: "Scalable Platform",
      description: "Enterprise-grade infrastructure for biotech teams. Process petabytes of genomic and high-content imaging data effortlessly.",
      tag: "Cloud Native",
      metric: "450M+ Cells",
      metricLabel: "Ingestion Capacity",
      interactiveType: "nodes" as const,
    },
  ];

  return (
    <section
      id="innovation"
      className="relative w-full bg-[#0b100e] py-24 sm:py-32 overflow-hidden"
      aria-label="Innovation Pillars Section"
    >
      {/* Decorative subtle background accents */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#0a0c0f]/10 to-transparent" />
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#2dd4a8]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#73ffb8]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1f302a] text-[#0a0c0f] text-xs font-mono font-bold tracking-wider uppercase mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#2dd4a8]" />
            Core Capabilities
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#ffffff] tracking-tight mb-6"
          >
            Three Pillars of Innovation
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-[#9bb0a7] leading-relaxed"
          >
            Designed by computational biologists and AI researchers to remove bottlenecks at every tier of preclinical exploration.
          </motion.p>
        </div>

        {/* 3-Column Card Grid (desktop) -> 2-col (tablet) -> 1-col (mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <InnovationCard
              key={pillar.title}
              icon={pillar.icon}
              title={pillar.title}
              description={pillar.description}
              tag={pillar.tag}
              metric={pillar.metric}
              metricLabel={pillar.metricLabel}
              interactiveType={pillar.interactiveType}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
