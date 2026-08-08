"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

// The real brand mark, given depth: it tilts toward the cursor on a spring,
// breathes with a slow float, and sits on a soft grounding glow. The artwork
// itself is untouched — only its presentation is animated.
export function AnimatedLogoMark() {
  const reduce = useReducedMotion();
  const wrapRef = useRef<HTMLDivElement>(null);

  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const sx = useSpring(px, { stiffness: 110, damping: 18, mass: 0.6 });
  const sy = useSpring(py, { stiffness: 110, damping: 18, mass: 0.6 });
  const rotateY = useTransform(sx, [-0.5, 0.5], [-16, 16]);
  const rotateX = useTransform(sy, [-0.5, 0.5], [12, -12]);
  // highlight sweeps across the mark as it tilts
  const sheenX = useTransform(sx, [-0.5, 0.5], ["120%", "-20%"]);

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    if (reduce) return;
    const el = wrapRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width - 0.5);
    py.set((e.clientY - r.top) / r.height - 0.5);
  }

  function onLeave() {
    px.set(0);
    py.set(0);
  }

  return (
    <div
      ref={wrapRef}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="relative h-full w-full"
      style={{ perspective: 1000 }}
    >
      <motion.div
        className="relative h-full w-full"
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        initial={{ opacity: 0, scale: 0.94, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, ease, delay: 0.15 }}
      >
        {/* grounding glow, pushed back in Z for real depth */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-[58%] h-28 w-2/3 rounded-[50%] bg-gold/20 blur-3xl"
          style={{ transform: "translateX(-50%) translateZ(-80px)" }}
        />

        {/* slow breathing float, layered above the glow */}
        <motion.div
          className="relative h-full w-full"
          animate={reduce ? undefined : { y: [0, -10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          style={{ transform: "translateZ(30px)" }}
        >
          <Image
            src="/images/logo-mark.png"
            alt="Cup N Saucer"
            fill
            className="object-contain"
            priority
          />

          {/* soft sheen that travels with the tilt */}
          {!reduce && (
            <motion.div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-40 mix-blend-overlay"
              style={{
                backgroundImage:
                  "linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.75) 50%, transparent 65%)",
                backgroundSize: "220% 100%",
                backgroundPositionX: sheenX,
              }}
            />
          )}
        </motion.div>
      </motion.div>
    </div>
  );
}
