import React from "react";
import { motion } from "framer-motion";

const partners = [
  "Mayo Translational Institute",
  "EMBL Heidelberg",
  "Genentech Discovery",
  "Karolinska CellLab",
  "Broad Institute",
  "AstraZeneca R&D",
  "RIKEN Bioimaging",
  "Wellcome Sanger",
];

export const TrustBar: React.FC = () => {
  return (
    <section
      aria-label="Research partners"
      className="section-seam relative w-full bg-[#070b09] py-10 overflow-hidden"
    >
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6 }}
        className="text-center font-mono text-[10px] uppercase tracking-[0.32em] text-[#8a9a93] mb-6"
      >
        Deployed across regulated research programmes worldwide
      </motion.p>

      <div className="edge-fade-x">
        <div className="marquee-track gap-14 items-center">
          {[...partners, ...partners].map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="whitespace-nowrap font-display text-sm sm:text-base font-semibold tracking-tight text-white/35 hover:text-[#00f5a0] transition-colors duration-300"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
