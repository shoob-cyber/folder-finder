import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Cpu,
  Database,
  Cloud,
  Layers,
  CreditCard,
  ShieldCheck,
  Lock,
  FileCheck,
  Server,
  Sparkles,
  Terminal,
} from "lucide-react";
import { TechBadge } from "./TechBadge";

export const Technology: React.FC = () => {
  const [selectedTechIndex, setSelectedTechIndex] = useState(0);

  const techItems = [
    {
      icon: Code2,
      name: "React 18 / TypeScript",
      category: "Frontend UI",
      spec: "Zero-latency 60fps high-throughput analytics engine",
      badgeColor: "#2dd4a8",
      details: {
        architecture: "Client-side WebGL & WebGPU Accelerated",
        latency: "< 16ms render loop",
        integration: "Micro-frontend component modules",
        security: "CSP Level 3 + Strict Context Isolation",
      },
    },
    {
      icon: Cpu,
      name: "Python (scikit / PyTorch)",
      category: "AI & Inference",
      spec: "Transformer models trained on 450M+ cellular assays",
      badgeColor: "#73ffb8",
      details: {
        architecture: "Distributed TensorRT GPU inference pipelines",
        latency: "4.2ms per molecular SMILES embedding",
        integration: "PyTorch Lightning & ONNX runtime",
        security: "Model parameter isolation with hardware enclaves",
      },
    },
    {
      icon: Database,
      name: "PostgreSQL & Vector DB",
      category: "Clinical Data",
      spec: "High-dimensional vector index for genomic fingerprints",
      badgeColor: "#d9f99d",
      details: {
        architecture: "pgvector + timescale partition clustering",
        latency: "Sub-5ms ANN similarity searches across 100M vectors",
        integration: "ACID transactions with automated replication",
        security: "AES-256 at-rest & TLS 1.3 in-transit encryption",
      },
    },
    {
      icon: Cloud,
      name: "AWS HIPAA Enclaves",
      category: "Infrastructure",
      spec: "Sovereign compute nodes with dedicated cryptographic isolation",
      badgeColor: "#2dd4a8",
      details: {
        architecture: "AWS Nitro Enclaves & multi-AZ auto-scaling",
        latency: "99.999% uptime availability SLA",
        integration: "Terraform automated infrastructure-as-code",
        security: "BAA signed, HIPAA Title II & GovCloud compliant",
      },
    },
    {
      icon: Layers,
      name: "GraphQL & REST LIMS",
      category: "Lab Integration",
      spec: "Universal adapters for Thermo Fisher, Illumina, and Tecan",
      badgeColor: "#73ffb8",
      details: {
        architecture: "Federated GraphQL gateway + WebSocket streams",
        latency: "Real-time bidirectional event streaming",
        integration: "Direct LIMS / ELN / CDS bi-directional sync",
        security: "mTLS + OAuth 2.0 with Granular Token Scopes",
      },
    },
    {
      icon: CreditCard,
      name: "Stripe & SAML SSO",
      category: "Enterprise IAM",
      spec: "Okta, Azure AD, and automated usage metering",
      badgeColor: "#d9f99d",
      details: {
        architecture: "SAML 2.0 / OIDC enterprise federation",
        latency: "Single-click role-based provisioning (SCIM)",
        integration: "Stripe usage-based preclinical quota billing",
        security: "Zero-Trust RBAC with session anomaly detection",
      },
    },
  ];

  const activeTech = techItems[selectedTechIndex]!;

  return (
    <section
      id="technology"
      className="section-seam grain-overlay scan-sweep relative w-full bg-[#0a0c0f] py-24 sm:py-32 overflow-hidden tech-grid-subtle border-t border-[#1f302a]"
      aria-label="Technology Stack Section"
    >
      {/* Glow Orbs */}
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-[#2dd4a8]/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 -left-32 w-96 h-96 bg-[#73ffb8]/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column (50% on desktop = 6 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1f302a]/80 border border-[#2dd4a8]/30 text-[#2dd4a8] text-xs font-mono font-bold tracking-wider uppercase mb-4 w-fit"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Enterprise Architecture
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6 leading-tight"
            >
              Built on Enterprise Foundation
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-[#8a9a93] leading-relaxed mb-8"
            >
              Our platform integrates cutting-edge biotech APIs, distributed machine learning pipelines, and clinical-grade sovereign security designed for rigorous bio-pharma standards.
            </motion.p>

            {/* Compliance & Security Badges */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#0f1613]/80 border border-[#1f302a]">
                <ShieldCheck className="w-5 h-5 text-[#2dd4a8] shrink-0" />
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-white">HIPAA Compliant</span>
                  <span className="text-[10px] font-mono text-[#8a9a93]">Signed BAA Protocol</span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#0f1613]/80 border border-[#1f302a]">
                <Lock className="w-5 h-5 text-[#73ffb8] shrink-0" />
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-white">SOC 2 Type II</span>
                  <span className="text-[10px] font-mono text-[#8a9a93]">Annual Audit Certified</span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#0f1613]/80 border border-[#1f302a]">
                <FileCheck className="w-5 h-5 text-[#d9f99d] shrink-0" />
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-white">FDA 21 CFR Part 11</span>
                  <span className="text-[10px] font-mono text-[#8a9a93]">Audit Trail Integrity</span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#0f1613]/80 border border-[#1f302a]">
                <Server className="w-5 h-5 text-[#2dd4a8] shrink-0" />
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-white">ISO 27001</span>
                  <span className="text-[10px] font-mono text-[#8a9a93]">Global Cloud Enclaves</span>
                </div>
              </div>
            </div>

            {/* Live Interactive Spec Card based on Selected Tech */}
            <div className="p-5 rounded-xl bg-[#0f1613]/90 border border-[#2dd4a8]/30 shadow-[0_0_25px_rgba(45,212,168,0.15)] relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-[#1f302a] pb-3 mb-3">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-[#2dd4a8]" />
                  <span className="text-xs font-mono font-bold text-white uppercase">
                    Telemetric Spec: {activeTech.name.split(" ")[0]}
                  </span>
                </div>
                <span className="w-2 h-2 rounded-full bg-[#2dd4a8] animate-ping" />
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                <div>
                  <span className="text-[#8a9a93] block text-[10px]">ARCHITECTURE</span>
                  <span className="text-white font-medium">{activeTech.details.architecture}</span>
                </div>
                <div>
                  <span className="text-[#8a9a93] block text-[10px]">LATENCY BENCHMARK</span>
                  <span className="text-[#2dd4a8] font-bold">{activeTech.details.latency}</span>
                </div>
                <div>
                  <span className="text-[#8a9a93] block text-[10px]">INTEGRATION PROTOCOL</span>
                  <span className="text-white font-medium">{activeTech.details.integration}</span>
                </div>
                <div>
                  <span className="text-[#8a9a93] block text-[10px]">SECURITY ENCLAVE</span>
                  <span className="text-[#73ffb8] font-semibold">{activeTech.details.security}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (50% on desktop = 7 cols) - Interactive Tech Badges */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
              {techItems.map((item, index) => (
                <TechBadge
                  key={item.name}
                  icon={item.icon}
                  name={item.name}
                  category={item.category}
                  spec={item.spec}
                  badgeColor={item.badgeColor}
                  index={index}
                  isActive={selectedTechIndex === index}
                  onSelect={() => setSelectedTechIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
