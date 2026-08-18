import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import { Navbar } from "@/components/Navigation/Navbar";
import { Hero } from "@/components/Hero/Hero";
import { TrustBar } from "@/components/Trust/TrustBar";
import { ScrollProgress } from "@/components/Chrome/ScrollProgress";
import { TargetCursor } from "@/components/Chrome/TargetCursor";
import { Pillars } from "@/components/Pillars/Pillars";
import { Toaster } from "@/components/ui/sonner";
import { Innovation } from "@/components/Innovation/Innovation";
import { Technology } from "@/components/Technology/Technology";
import { Capabilities } from "@/components/Capabilities/Capabilities";
import { Statistics } from "@/components/Statistics/Statistics";
import { CTA } from "@/components/CTA/CTA";
import { Footer } from "@/components/Footer/Footer";
import { DemoModal } from "@/components/Modal/DemoModal";

const title = "Nexus Biotech | AI-Driven Precision Medicine & Cellular Intelligence";
const description =
  "Precision medicine platform powered by AI-driven cellular analysis. Accelerate discovery to clinical breakthroughs.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  // Lenis smooth scroll (browser only)
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let animationFrameId = 0;
    let destroy = () => {};
    let cancelled = false;

    void import("lenis").then(({ default: Lenis }) => {
      if (cancelled) return;
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      });

      const raf = (time: number) => {
        lenis.raf(time);
        animationFrameId = requestAnimationFrame(raf);
      };
      animationFrameId = requestAnimationFrame(raf);
      destroy = () => lenis.destroy();
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(animationFrameId);
      destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#070b09] text-white flex flex-col selection:bg-[#00f5a0] selection:text-[#070b09]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-[#00f5a0] text-[#070b09] font-bold rounded-lg shadow-lg focus:outline-none"
      >
        Skip to main content
      </a>

      <ScrollProgress />
      <TargetCursor />
      <Navbar onOpenDemo={() => setIsDemoOpen(true)} />

      <main id="main-content" className="flex-1">
        <Hero onOpenDemo={() => setIsDemoOpen(true)} />
        <TrustBar />
        <Innovation />
        <Pillars />
        <Technology />
        <Capabilities />
        <Statistics />
        <CTA onOpenDemo={() => setIsDemoOpen(true)} />
      </main>

      <Footer />

      <Toaster />
      <DemoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
    </div>
  );
}
