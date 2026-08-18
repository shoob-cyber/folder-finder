import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play, Loader2, Dna } from "lucide-react";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose }) => {
  const [selectedFocus, setSelectedFocus] = useState("oncology");
  const [isSimulating, setIsSimulating] = useState(false);
  const [simComplete, setSimComplete] = useState(false);
  const [progress, setProgress] = useState(0);

  // Close on Esc key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  const handleStartSim = () => {
    setIsSimulating(true);
    setSimComplete(false);
    setProgress(10);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsSimulating(false);
          setSimComplete(true);
          try {
            void import("canvas-confetti").then(({ default: confetti }) => confetti({
              particleCount: 50,
              spread: 60,
              origin: { y: 0.6 },
              colors: ["#00d4ff", "#9d4edd", "#ff6b35"],
            });
          } catch (e) {}
          return 100;
        }
        return prev + 18;
      });
    }, 180);
  };

  const focusOptions = [
    {
      id: "oncology",
      name: "Oncology Phenotyping",
      target: "HER2 / EGFR Tyrosine Kinase",
      cells: "1.8M Organoids",
    },
    {
      id: "neuro",
      name: "Neurodegenerative",
      target: "Tau / Alpha-Synuclein Fibrils",
      cells: "850K Neurons",
    },
    {
      id: "immunology",
      name: "Immunotherapy",
      target: "PD-1 / T-Cell Exhaustion",
      cells: "3.2M Lymphocytes",
    },
    {
      id: "rare",
      name: "Rare Mendelian Targets",
      target: "CFTR Splicing Variants",
      cells: "500K Primary Cells",
    },
  ];

  const currentOption = focusOptions.find((f) => f.id === selectedFocus) || focusOptions[0];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#0a0e27]/85 backdrop-blur-xl transition-opacity"
            aria-hidden="true"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative w-full max-w-2xl bg-[#0f153a] border border-[#1a2847] shadow-[0_0_50px_rgba(0,212,255,0.25)] rounded-2xl p-6 sm:p-8 overflow-hidden z-10 text-white"
            role="dialog"
            aria-modal="true"
            aria-labelledby="demo-modal-title"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-[#1a2847] pb-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-[#00d4ff]/10 text-[#00d4ff]">
                  <Dna className="w-6 h-6" />
                </div>
                <div>
                  <h3 id="demo-modal-title" className="text-xl font-bold text-white">
                    Interactive In-Silico Sandbox
                  </h3>
                  <p className="text-xs font-mono text-[#888899]">
                    Simulate real-time cellular response with Nexus Neural Core
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-lg text-[#888899] hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-[#00d4ff]"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Step 1: Research Domain Select */}
            <div className="mb-6">
              <label className="block text-xs font-mono uppercase text-[#888899] mb-3">
                1. Select Research Domain
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {focusOptions.map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => {
                      setSelectedFocus(opt.id);
                      setSimComplete(false);
                    }}
                    className={`p-3 rounded-xl border text-left transition-all duration-200 ${
                      selectedFocus === opt.id
                        ? "bg-[#141c4d] border-[#00d4ff] text-white shadow-[0_0_15px_rgba(0,212,255,0.25)]"
                        : "bg-[#0a0e27]/60 border-[#1a2847] text-[#888899] hover:border-white/20 hover:text-white"
                    }`}
                  >
                    <div className="font-bold text-sm text-white mb-0.5">{opt.name}</div>
                    <div className="text-[11px] font-mono text-[#00d4ff]">{opt.target}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Simulation Terminal */}
            <div className="p-4 rounded-xl bg-[#0a0e27] border border-[#1a2847] mb-6">
              <div className="flex items-center justify-between mb-3 text-xs font-mono">
                <span className="text-[#888899]">SIMULATION PIPELINE TARGET</span>
                <span className="text-[#00d4ff] font-bold">{currentOption.target}</span>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-[#1a2847] h-2.5 rounded-full overflow-hidden mb-3">
                <motion.div
                  className="bg-gradient-to-r from-[#00d4ff] via-[#9d4edd] to-[#ff6b35] h-full"
                  style={{ width: `${progress}%` }}
                />
              </div>

              {/* Results metrics */}
              {simComplete ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="grid grid-cols-3 gap-2 pt-2 border-t border-[#1a2847] text-center"
                >
                  <div className="p-2 rounded bg-[#0f153a]">
                    <span className="text-[10px] text-[#888899] block font-mono">BINDING AFFINITY</span>
                    <span className="text-sm font-bold text-[#00d4ff] font-mono">0.34 nM (High)</span>
                  </div>
                  <div className="p-2 rounded bg-[#0f153a]">
                    <span className="text-[10px] text-[#888899] block font-mono">SELECTIVITY</span>
                    <span className="text-sm font-bold text-emerald-400 font-mono">99.8%</span>
                  </div>
                  <div className="p-2 rounded bg-[#0f153a]">
                    <span className="text-[10px] text-[#888899] block font-mono">SAFETY SCORE</span>
                    <span className="text-sm font-bold text-[#9d4edd] font-mono">Grade 1 (Safe)</span>
                  </div>
                </motion.div>
              ) : (
                <div className="flex items-center justify-between text-xs text-[#888899] font-mono">
                  <span>Assay Scale: {currentOption.cells}</span>
                  <span>{isSimulating ? `Processing... ${progress}%` : "Ready to Execute"}</span>
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
              <button
                onClick={handleStartSim}
                disabled={isSimulating}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#00d4ff] hover:bg-[#00b4d8] text-[#0a0e27] font-bold text-sm flex items-center justify-center gap-2 shadow-cyan-glow transition-all duration-200 disabled:opacity-50"
              >
                {isSimulating ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Computing Tensor Nodes...</span>
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 fill-[#0a0e27]" />
                    <span>Run Instant In-Silico Assay</span>
                  </>
                )}
              </button>

              <button
                onClick={onClose}
                className="w-full sm:w-auto px-5 py-3 rounded-xl border border-white/20 hover:border-white/40 text-xs font-semibold uppercase tracking-wider text-white/80 transition-colors"
              >
                Done / Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
