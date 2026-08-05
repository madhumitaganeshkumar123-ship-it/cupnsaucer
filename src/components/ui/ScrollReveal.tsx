"use client";

import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/motion";

// A content panel styled and revealed like a paper scroll: decorative rods at
// the top and bottom expand outward, and the panel itself rises into place.
//
// Note: the panel deliberately uses the same fade/rise variants as the rest of
// the site rather than a clip-path "unroll". A clip-path reveal leaves the text
// fully hidden if the in-view animation ever fails to fire, which would make
// the article unreadable for visitors and crawlers. The rods carry the scroll
// motion instead — they are purely decorative, so they are safe to animate.
export function ScrollReveal({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const rod =
    "mx-auto h-2.5 w-full max-w-[160px] rounded-full bg-gradient-to-r from-gold/10 via-gold/60 to-gold/10 shadow-[0_2px_8px_rgba(184,146,58,0.3)]";

  return (
    <div className={className}>
      <motion.div
        initial={{ scaleX: 0.25, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={viewportOnce}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`${rod} mb-6`}
      />

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        transition={{ delay: 0.15 }}
        className="rounded-2xl border border-gold/15 bg-cream-deep/40 px-6 py-10 shadow-[0_18px_50px_-30px_rgba(20,17,12,0.35)] sm:px-10"
      >
        {children}
      </motion.div>

      <motion.div
        initial={{ scaleX: 0.25, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={viewportOnce}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
        className={`${rod} mt-6`}
      />
    </div>
  );
}
