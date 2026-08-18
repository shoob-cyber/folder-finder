import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dna, Menu, X, Sparkles } from "lucide-react";

interface NavbarProps {
  onOpenDemo: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDemo }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Innovation", href: "#innovation" },
    { name: "Technology", href: "#technology" },
    { name: "Capabilities", href: "#capabilities" },
    { name: "Impact", href: "#statistics" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0a0c0f]/85 backdrop-blur-xl border-b border-[#1f302a] shadow-lg shadow-[#0a0c0f]/50 py-3.5"
          : "bg-transparent py-5"
      }`}
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#2dd4a8] rounded-lg px-1 py-0.5"
            aria-label="Nexus Biotech Home"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#2dd4a8]/20 to-[#73ffb8]/20 border border-[#2dd4a8]/40 group-hover:border-[#2dd4a8] transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(0,212,255,0.4)]">
              <Dna className="w-5 h-5 text-[#2dd4a8] group-hover:rotate-180 transition-transform duration-700 ease-out" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#2dd4a8] rounded-full animate-ping opacity-75" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#2dd4a8] rounded-full" />
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-sm tracking-widest text-[#2dd4a8] font-bold">NEXUS</span>
              <span className="font-sans text-xs tracking-wider text-white/80 font-medium -mt-1">BIOTECH</span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8" role="navigation" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-white/75 hover:text-[#2dd4a8] transition-colors duration-200 focus:outline-none focus:text-[#2dd4a8] relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#2dd4a8] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenDemo}
              className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white/90 border border-white/20 hover:border-[#2dd4a8]/80 hover:text-[#2dd4a8] rounded-xl hover:bg-[#2dd4a8]/5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#2dd4a8]"
            >
              Schedule Demo
            </button>
            <a
              href="#cta"
              className="relative inline-flex items-center gap-2 px-5 py-2 text-xs font-bold uppercase tracking-wider text-[#0a0c0f] bg-[#2dd4a8] hover:bg-[#1fae8b] rounded-xl shadow-[0_0_20px_rgba(0,212,255,0.35)] hover:shadow-[0_0_30px_rgba(0,212,255,0.6)] transition-all duration-200 hover:scale-[1.03] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-white"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Start Building</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white/80 hover:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2dd4a8]"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="md:hidden bg-[#0a0c0f]/95 border-b border-[#1f302a] backdrop-blur-2xl px-6 py-6"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-white/90 hover:text-[#2dd4a8] transition-colors py-2 border-b border-white/5"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex flex-col gap-3 pt-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenDemo();
                  }}
                  className="w-full py-3 text-sm font-semibold uppercase tracking-wider text-white border border-[#2dd4a8]/40 hover:bg-[#2dd4a8]/10 rounded-xl"
                >
                  Schedule Demo
                </button>
                <a
                  href="#cta"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-3 text-sm font-bold uppercase tracking-wider text-center text-[#0a0c0f] bg-[#2dd4a8] rounded-xl shadow-cyan-glow"
                >
                  Start Building
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
