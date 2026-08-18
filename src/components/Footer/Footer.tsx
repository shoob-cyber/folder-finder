import React from "react";
import { Dna } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer
      className="relative w-full bg-[#070a1e] border-t border-[#164034] pt-16 pb-12 overflow-hidden text-white"
      role="contentinfo"
      aria-label="Footer"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-[#164034]/70">
          {/* Brand Col */}
          <div className="lg:col-span-2 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-[#00f5a0]/15 border border-[#00f5a0]/40 text-[#00f5a0]">
                  <Dna className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-sm tracking-widest text-[#00f5a0] font-bold">NEXUS</span>
                  <span className="font-sans text-[11px] tracking-wider text-white/80 font-medium -mt-1">BIOTECH</span>
                </div>
              </div>
              <p className="text-sm text-[#8a9a93] max-w-sm leading-relaxed mb-6">
                Accelerating the translation of preclinical cellular discoveries into targeted clinical breakthroughs through high-fidelity AI models.
              </p>
            </div>

            {/* Live Operational Status */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0d1410] border border-[#164034] w-fit text-xs font-mono text-white/80">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>All Systems Operational (14ms API Latency)</span>
            </div>
          </div>

          {/* Links Col 1 */}
          <div>
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#00f5a0] mb-4">
              Platform
            </h4>
            <ul className="space-y-2.5 text-sm text-[#8a9a93]">
              <li><a href="#innovation" className="hover:text-white transition-colors">Precision Analysis</a></li>
              <li><a href="#technology" className="hover:text-white transition-colors">Enterprise Tech Stack</a></li>
              <li><a href="#capabilities" className="hover:text-white transition-colors">Workflow Pipeline</a></li>
              <li><a href="#statistics" className="hover:text-white transition-colors">Clinical Benchmarks</a></li>
              <li><a href="#cta" className="hover:text-white transition-colors">Developer Sandbox</a></li>
            </ul>
          </div>

          {/* Links Col 2 */}
          <div>
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#00f5a0] mb-4">
              Science & Research
            </h4>
            <ul className="space-y-2.5 text-sm text-[#8a9a93]">
              <li><a href="#capabilities" className="hover:text-white transition-colors">Published Papers (18)</a></li>
              <li><a href="#capabilities" className="hover:text-white transition-colors">Preclinical Datasets</a></li>
              <li><a href="#capabilities" className="hover:text-white transition-colors">Validation Protocols</a></li>
              <li><a href="#capabilities" className="hover:text-white transition-colors">Single-Cell Atlas</a></li>
              <li><a href="#capabilities" className="hover:text-white transition-colors">Case Studies</a></li>
            </ul>
          </div>

          {/* Links Col 3 */}
          <div>
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#00f5a0] mb-4">
              Security & Trust
            </h4>
            <ul className="space-y-2.5 text-sm text-[#8a9a93]">
              <li><a href="#technology" className="hover:text-white transition-colors">HIPAA Compliance</a></li>
              <li><a href="#technology" className="hover:text-white transition-colors">SOC 2 Type II Report</a></li>
              <li><a href="#technology" className="hover:text-white transition-colors">FDA 21 CFR Part 11</a></li>
              <li><a href="#technology" className="hover:text-white transition-colors">Privacy Governance</a></li>
              <li><a href="#technology" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8a9a93]">
          <p>© {new Date().getFullYear()} Nexus Biotech Intelligence Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1">
              Engineered with precision for life science breakthroughs
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
