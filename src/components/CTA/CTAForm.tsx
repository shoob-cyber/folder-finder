import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

export const CTAForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@") || !email.includes(".")) {
      setErrorMessage("Please provide a valid institutional email address.");
      return;
    }

    setErrorMessage("");
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      try {
        void import("canvas-confetti").then(({ default: confetti }) => confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.7 },
          colors: ["#00d4ff", "#9d4edd", "#ff6b35"],
        });
      } catch (err) {
        // Fallback gracefully
      }
    }, 900);
  };

  return (
    <div className="w-full max-w-xl mx-auto">
      {isSuccess ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="p-6 rounded-2xl bg-[#0f153a] border border-[#00d4ff]/50 text-center shadow-[0_0_30px_rgba(0,212,255,0.3)]"
        >
          <div className="w-12 h-12 rounded-full bg-[#00d4ff]/10 text-[#00d4ff] flex items-center justify-center mx-auto mb-3">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <h4 className="text-xl font-bold text-white mb-2">Access Request Received</h4>
          <p className="text-sm text-[#888899] mb-4">
            Our computational biology onboarding team has sent an enterprise sandbox key to <span className="text-[#00d4ff] font-mono">{email}</span>.
          </p>
          <button
            onClick={() => {
              setIsSuccess(false);
              setEmail("");
            }}
            className="text-xs text-[#00d4ff] hover:underline font-mono"
          >
            Register another institutional address →
          </button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="relative flex flex-col gap-3">
          <div className="relative flex items-center">
            <div className="absolute left-4 text-[#888899] pointer-events-none">
              <Mail className="w-5 h-5" />
            </div>
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (errorMessage) setErrorMessage("");
              }}
              placeholder="Enter institutional or work email (e.g. name@pharma.com)"
              className="w-full pl-12 pr-36 py-4 rounded-xl bg-[#0f153a]/90 border border-[#1a2847] text-white placeholder-[#888899] text-sm sm:text-base focus:outline-none focus:border-[#00d4ff] focus:ring-2 focus:ring-[#00d4ff]/40 shadow-inner transition-all duration-200"
              aria-label="Institutional email address"
              required
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="absolute right-2 top-2 bottom-2 px-5 rounded-lg bg-[#00d4ff] hover:bg-[#00b4d8] text-[#0a0e27] font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2 shadow-[0_0_15px_rgba(0,212,255,0.4)] hover:shadow-[0_0_25px_rgba(0,212,255,0.6)] transition-all duration-200 disabled:opacity-70 focus:outline-none focus:ring-2 focus:ring-white"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Verifying</span>
                </>
              ) : (
                <>
                  <span>Request Key</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>

          {errorMessage && (
            <span className="text-xs text-[#ff6b35] font-medium text-left px-2">
              {errorMessage}
            </span>
          )}

          <div className="flex items-center justify-center gap-6 text-[11px] font-mono text-[#888899] pt-2">
            <span>✓ Instant sandbox API key</span>
            <span>✓ HIPAA compliant SLA</span>
            <span>✓ No credit card required</span>
          </div>
        </form>
      )}
    </div>
  );
};
