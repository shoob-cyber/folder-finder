import React, { useEffect, useRef } from "react";
import { Microscope, Rocket, Network } from "lucide-react";
import { PillarCard } from "./PillarCard";

const pillars = [
  {
    id: "precision",
    index: "01",
    icon: Microscope,
    title: "Precision Analysis",
    body: "Sub-micron phenotypic segmentation across 1,240 morphological features per single cell, resolved in real time.",
    metricValue: 0.085,
    metricSuffix: " μm",
    metricDecimals: 3,
    metricLabel: "Optical Resolution",
    progress: 92,
    specs: ["Multi-spectral segmentation", "1,240+ features / cell", "False positives < 0.01%"],
  },
  {
    id: "rapid",
    index: "02",
    icon: Rocket,
    title: "Rapid Deployment",
    body: "In-silico ADMET and docking pipelines compress discovery cycles from quarters to days on distributed GPU fabric.",
    metricValue: 14.8,
    metricSuffix: "x",
    metricDecimals: 1,
    metricLabel: "Accelerated Throughput",
    progress: 86,
    specs: ["TensorRT inference mesh", "250K docking sims / min", "4.2ms per embedding"],
  },
  {
    id: "scalable",
    index: "03",
    icon: Network,
    title: "Scalable Platform",
    body: "Sovereign HIPAA enclaves, multi-AZ autoscaling and audited data lineage from bench instrument to clinical report.",
    metricValue: 99.999,
    metricSuffix: "%",
    metricDecimals: 3,
    metricLabel: "Availability SLA",
    progress: 99,
    specs: ["AWS Nitro Enclaves", "Immutable audit lineage", "SOC 2 Type II + HIPAA"],
  },
];

export const Pillars: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(max-width: 1023px)").matches) return;

    let cleanup = () => {};
    let cancelled = false;

    void Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(
      ([{ default: gsap }, { ScrollTrigger }]) => {
        if (cancelled) return;
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
          const distance = () => track.scrollWidth - window.innerWidth + 96;
          const tween = gsap.to(track, {
            x: () => -distance(),
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: () => `+=${distance() + window.innerHeight * 0.4}`,
              pin: true,
              scrub: 0.8,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          });
          const refresh = () => ScrollTrigger.refresh();
          const t1 = window.setTimeout(refresh, 600);
          const t2 = window.setTimeout(refresh, 2000);
          window.addEventListener("load", refresh);

          cleanup = () => {
            window.clearTimeout(t1);
            window.clearTimeout(t2);
            window.removeEventListener("load", refresh);
            tween.scrollTrigger?.kill();
            tween.kill();
          };
        }, section);

        const prev = cleanup;
        cleanup = () => {
          prev();
          ctx.revert();
        };
      },
    );

    return () => {
      cancelled = true;
      cleanup();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="pillars"
      className="grain-overlay relative w-full bg-[#070b09] border-t border-[#164034] overflow-hidden lg:h-screen"
      aria-label="Three pillars of innovation"
    >
      <div className="absolute inset-0 tech-grid-bg opacity-[0.18] pointer-events-none" />
      <div className="absolute -top-32 left-1/3 w-[520px] h-[520px] rounded-full bg-[#00f5a0]/[0.07] blur-3xl pointer-events-none" />

      <div className="relative z-10 h-full flex flex-col justify-center py-20 lg:py-0">
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 mb-10 lg:mb-14">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00f5a0]/10 border border-[#00f5a0]/20 text-[#00f5a0] text-[11px] font-mono font-bold tracking-widest uppercase">
            Three pillars of innovation
          </span>
          <h2 className="font-display mt-5 text-[2.1rem] sm:text-[2.75rem] lg:text-[3.2rem] font-extrabold text-white tracking-tight max-w-3xl">
            A platform engineered around
            <span className="text-[#00f5a0]"> resolution, speed and scale.</span>
          </h2>
          <p className="mt-4 max-w-2xl text-[#8a9a93] text-base sm:text-lg leading-relaxed">
            Scroll to traverse the operating pillars behind every Nexus deployment.
          </p>
        </div>

        <div className="overflow-hidden">
          <div
            ref={trackRef}
            data-pillars-track
            className="flex flex-col lg:flex-row gap-6 lg:gap-10 px-4 sm:px-6 lg:px-8 lg:w-max lg:will-change-transform"
          >
            {pillars.map((p, i) => (
              <PillarCard key={p.id} {...p} order={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
