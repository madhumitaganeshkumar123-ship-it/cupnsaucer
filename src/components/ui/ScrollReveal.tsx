"use client";

import { motion } from "framer-motion";
import { viewportOnce } from "@/lib/motion";

// A content panel that unrolls open like a paper scroll: a top rod expands,
// the panel unclips top-to-bottom, then a bottom rod expands to "seal" it.
export function ScrollReveal({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const rod =
    "mx-auto h-2.5 w-full max-w-[140px] rounded-full bg-gradient-to-r from-gold/10 via-gold/60 to-gold/10 shadow-[0_2px_8px_rgba(184,146,58,0.3)]";

  return (
    <div className={className}>
      <motion.div
        initial={{ scaleX: 0.3, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={viewportOnce}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`${rod} mb-6`}
      />

      <motion.div
        initial={{ clipPath: "inset(0 0 100% 0)", opacity: 0 }}
        whileInView={{ clipPath: "inset(0 0 0% 0)", opacity: 1 }}
        viewport={viewportOnce}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
        className="rounded-2xl border border-gold/15 bg-cream-deep/40 px-6 py-10 shadow-[0_18px_50px_-30px_rgba(20,17,12,0.35)] sm:px-10"
      >
        {children}
      </motion.div>

      <motion.div
        initial={{ scaleX: 0.3, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={viewportOnce}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 1.1 }}
        className={`${rod} mt-6`}
      />
    </div>
  );
}
