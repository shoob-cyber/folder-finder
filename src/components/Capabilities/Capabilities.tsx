import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Scan,
  Compass,
  TestTubes,
  Send,
  Sparkles,
  ArrowRight,
  Activity,
} from "lucide-react";
import { TimelineStep } from "./TimelineStep";

export const Capabilities: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const pathLength = useTransform(scrollYProgress, [0, 0.8], [0, 1]);

  const steps = [
    {
      stepNumber: 1,
      title: "Cellular Profiling",
      description: "Comprehensive AI-driven analysis of target cells with multi-spectral fluorescent segmentation.",
      detail: "10M+ Cells / Hour",
      icon: Scan,
      insights: {
        headline: "High-Content Phenotypic Screening",
        summary: "Extracts 1,200+ morphological and transcriptomic features per single cell, identifying subtle sub-population anomalies.",
        metrics: [
          { label: "Organelle Resolution", val: "0.06 µm" },
          { label: "Morphological Features", val: "1,240+" },
          { label: "False Positive Rate", val: "< 0.01%" },
        ],
      },
    },
    {
      stepNumber: 2,
      title: "Mechanism Insight",
      description: "Understand how candidate therapies interact at the atomic and molecular binding pocket level.",
      detail: "Molecular Docking AI",
      icon: Compass,
      insights: {
        headline: "Atomic-Precision Binding Kinetics",
        summary: "Neural molecular dynamics simulate ligand conformational changes and off-target cross-reactivity in seconds.",
        metrics: [
          { label: "Binding Affinity (Kd)", val: "0.42 nM" },
          { label: "Off-Target Selectivity", val: "99.4%" },
          { label: "Docking Simulations", val: "250K / min" },
        ],
      },
    },
    {
      stepNumber: 3,
      title: "Validation Testing",
      description: "Simulate clinical efficacy and ADMET toxicity outcomes in-silico before conducting expensive wet lab work.",
      detail: "In-Silico ADMET",
      icon: TestTubes,
      insights: {
        headline: "Predictive Pharmacokinetics & Safety",
        summary: "Pre-trained on historical clinical trial outcomes to forecast liver clearance, cardiotoxicity, and bioavailability.",
        metrics: [
          { label: "Toxicity Prediction", val: "94.6% Acc" },
          { label: "Metabolic Stability", val: "T½ 18.4 hrs" },
          { label: "Preclinical Cost Saved", val: "72% Reduction" },
        ],
      },
    },
    {
      stepNumber: 4,
      title: "Clinical Deployment",
      description: "Accelerate phase I/II trials with precision patient stratification and biomarker matching protocols.",
      detail: "Trial Cohort Optimization",
      icon: Send,
      insights: {
        headline: "Biomarker-Guided Trial Stratification",
        summary: "Generates optimal patient responder cohorts, reducing Phase II cohort size requirements while maximizing statistical power.",
        metrics: [
          { label: "Trial Approval Rate", val: "3.2x Higher" },
          { label: "Patient Match Fidelity", val: "98.1%" },
          { label: "Time to First Patient In", val: "3 Weeks" },
        ],
      },
    },
  ];

  const currentInsight = steps[activeStep]!.insights;

  return (
    <section
      ref={containerRef}
      id="capabilities"
      className="relative w-full bg-[#f8f9fa] py-24 sm:py-32 overflow-hidden border-t border-[#e8ecff]"
      aria-label="Capabilities Workflow Section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#e8ecff] text-[#0a0c0f] text-xs font-mono font-bold tracking-wider uppercase mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#2dd4a8]" />
            Preclinical to Clinic
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1a1a2e] tracking-tight mb-6"
          >
            Your Path to Breakthrough
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-[#6b7280] leading-relaxed"
          >
            A cohesive 4-step pipeline that transitions computational biology hypotheses into validated clinical candidates with unparalleled fidelity.
          </motion.p>
        </div>

        {/* 4-Step Process Timeline */}
        <div className="relative mb-16">
          {/* Desktop Connecting Line */}
          <div className="hidden lg:block absolute top-8 left-[10%] right-[10%] h-[2px] bg-[#e8ecff] z-0">
            <motion.div
              style={{ scaleX: pathLength, transformOrigin: "left" }}
              className="h-full bg-gradient-to-r from-[#2dd4a8] via-[#73ffb8] to-[#d9f99d]"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, idx) => (
              <TimelineStep
                key={step.title}
                stepNumber={step.stepNumber}
                title={step.title}
                description={step.description}
                detail={step.detail}
                icon={step.icon}
                isActive={activeStep === idx}
                onSelect={() => setActiveStep(idx)}
              />
            ))}
          </div>
        </div>

        {/* Step Deep-Dive Interactive Inspection Panel */}
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-2xl p-6 sm:p-10 border border-[#e8ecff] shadow-[0_12px_36px_rgba(0,0,0,0.06)]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 mb-2 text-xs font-mono font-bold text-[#2dd4a8] uppercase tracking-wider">
                <Activity className="w-4 h-4" />
                <span>Phase 0{steps[activeStep]!.stepNumber} Telemetry</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1a1a2e] mb-4">
                {currentInsight.headline}
              </h3>
              <p className="text-[#6b7280] text-base leading-relaxed mb-6">
                {currentInsight.summary}
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => setActiveStep((prev) => (prev + 1) % steps.length)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0a0c0f] hover:bg-[#16211c] text-white text-xs font-bold font-mono tracking-wider transition-all duration-200"
                >
                  <span>Next Pipeline Stage</span>
                  <ArrowRight className="w-4 h-4 text-[#2dd4a8]" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3">
              {currentInsight.metrics.map((m, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#f8f9fa] border border-[#e8ecff] flex items-center justify-between"
                >
                  <span className="text-xs font-medium text-[#6b7280]">{m.label}</span>
                  <span className="text-base font-extrabold font-mono text-[#0a0c0f]">{m.val}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
