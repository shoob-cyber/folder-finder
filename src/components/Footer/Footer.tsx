import React from "react";
import { Dna, ArrowUpRight } from "lucide-react";

const columns: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Platform",
    links: [
      { label: "Precision Analysis", href: "#innovation" },
      { label: "Enterprise Tech Stack", href: "#technology" },
      { label: "Workflow Pipeline", href: "#capabilities" },
      { label: "Clinical Benchmarks", href: "#statistics" },
      { label: "Developer Sandbox", href: "#cta" },
    ],
  },
  {
    title: "Science & Research",
    links: [
      { label: "Published Papers (18)", href: "#capabilities" },
      { label: "Preclinical Datasets", href: "#capabilities" },
      { label: "Validation Protocols", href: "#capabilities" },
      { label: "Single-Cell Atlas", href: "#capabilities" },
      { label: "Case Studies", href: "#capabilities" },
    ],
  },
  {
    title: "Security & Trust",
    links: [
      { label: "HIPAA Compliance", href: "#technology" },
      { label: "SOC 2 Type II Report", href: "#technology" },
      { label: "FDA 21 CFR Part 11", href: "#technology" },
      { label: "Privacy Governance", href: "#technology" },
      { label: "Terms of Service", href: "#technology" },
    ],
  },
];

const telemetry = [
  { label: "API Latency", value: "14 ms" },
  { label: "Uptime · 90d", value: "99.999%" },
  { label: "Regions", value: "07" },
  { label: "Model Build", value: "4.2.118" },
];

export const Footer: React.FC = () => {
  return (
    <footer
      className="grain-overlay relative w-full bg-[#070b09] border-t border-[#164034] pt-20 pb-10 overflow-hidden text-white"
      role="contentinfo"
      aria-label="Footer"
    >
      {/* Ambient grid + horizon glow */}
      <div className="absolute inset-0 tech-grid-bg opacity-[0.14] pointer-events-none [mask-image:radial-gradient(80%_70%_at_50%_0%,#000,transparent)]" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[70rem] h-72 bg-[#00f5a0]/[0.07] blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#00f5a0]/50 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-[#164034]/70">
          {/* Brand Col */}
          <div className="lg:col-span-2 flex flex-col justify-between gap-8">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#00f5a0]/10 border border-[#00f5a0]/35 text-[#00f5a0] shadow-[0_0_24px_rgba(0,245,160,0.18)]">
                  <Dna className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-sm tracking-[0.28em] text-[#00f5a0] font-bold">
                    NEXUS
                  </span>
                  <span className="font-sans text-[11px] tracking-[0.22em] text-white/70 font-medium -mt-0.5">
                    BIOTECH
                  </span>
                </div>
              </div>
              <p className="text-sm text-[#8a9a93] max-w-sm leading-relaxed">
                Accelerating the translation of preclinical cellular discoveries
                into targeted clinical breakthroughs through high-fidelity AI
                models.
              </p>
            </div>

            {/* Live Operational Status */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-[#0d1410]/80 border border-[#164034] backdrop-blur-md w-fit text-[11px] font-mono uppercase tracking-[0.14em] text-white/75">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00f5a0] opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#00f5a0]" />
              </span>
              <span>All systems operational</span>
            </div>
          </div>

          {/* Link Columns */}
          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h4 className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-[#00f5a0] mb-5">
                {col.title}
              </h4>
              <ul className="space-y-3 text-sm text-[#8a9a93]">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="group inline-flex items-center gap-1.5 hover:text-white transition-colors duration-200"
                    >
                      <span className="relative">
                        {link.label}
                        <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-[#00f5a0] group-hover:w-full transition-all duration-300" />
                      </span>
                      <ArrowUpRight className="w-3 h-3 text-[#00f5a0] opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Telemetry strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px mt-10 rounded-2xl overflow-hidden border border-[#164034] bg-[#164034]/60">
          {telemetry.map((item) => (
            <div
              key={item.label}
              className="bg-[#0d1410]/90 px-5 py-4 backdrop-blur-md"
            >
              <div className="font-mono text-lg font-bold text-[#00f5a0] drop-shadow-[0_0_12px_rgba(0,245,160,0.35)]">
                {item.value}
              </div>
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#8a9a93] mt-1">
                {item.label}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 mt-8 border-t border-[#164034]/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono uppercase tracking-[0.14em] text-[#8a9a93]">
          <p>
            © {new Date().getFullYear()} Nexus Biotech Intelligence Inc.
          </p>
          <p className="text-center sm:text-right text-white/40">
            Engineered with precision for life science breakthroughs
          </p>
        </div>
      </div>

      {/* Oversized watermark wordmark */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute -bottom-6 sm:-bottom-10 inset-x-0 text-center font-display font-extrabold tracking-[-0.05em] text-[18vw] leading-none text-white/[0.025]"
      >
        NEXUS
      </div>
    </footer>
  );
};
