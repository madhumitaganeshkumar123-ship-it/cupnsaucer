"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

// The four "growth bars" double as steam rising off the cup. Each one draws
// upward from the rim, drifts, and dissolves — then repeats, staggered, so the
// mark reads as a live cup of coffee rather than a static logo.
const WISPS = [
  { x: 84, top: 96, delay: 0.0, sway: 3 },
  { x: 100, top: 80, delay: 0.45, sway: -4 },
  { x: 116, top: 62, delay: 0.9, sway: 4 },
  { x: 132, top: 44, delay: 1.35, sway: -3 },
];

export function AnimatedLogoMark() {
  const reduce = useReducedMotion();
  const wrapRef = useRef<HTMLDivElement>(null);

  // Pointer-driven tilt gives the mark real perspective without a 3D engine.
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const sx = useSpring(px, { stiffness: 120, damping: 18, mass: 0.6 });
  const sy = useSpring(py, { stiffness: 120, damping: 18, mass: 0.6 });
  const rotateY = useTransform(sx, [-0.5, 0.5], [-14, 14]);
  const rotateX = useTransform(sy, [-0.5, 0.5], [10, -10]);

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
      style={{ perspective: 900 }}
    >
      <motion.div
        className="relative h-full w-full"
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        initial={{ opacity: 0, scale: 0.94, y: 14 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, ease, delay: 0.15 }}
      >
        {/* soft grounding glow, sits behind the cup for depth */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-[62%] h-24 w-2/3 -translate-x-1/2 rounded-[50%] bg-gold/20 blur-2xl"
          style={{ transform: "translateX(-50%) translateZ(-60px)" }}
        />

        <svg
          viewBox="0 0 200 200"
          className="relative h-full w-full text-gold"
          role="img"
          aria-label="Cup N Saucer"
        >
          <defs>
            <linearGradient id="cupSheen" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="currentColor" stopOpacity="1" />
              <stop offset="100%" stopColor="currentColor" stopOpacity="0.72" />
            </linearGradient>
            <linearGradient
              id="wispFade"
              gradientUnits="userSpaceOnUse"
              x1="0"
              y1="122"
              x2="0"
              y2="34"
            >
              <stop offset="0%" stopColor="currentColor" stopOpacity="1" />
              <stop offset="55%" stopColor="currentColor" stopOpacity="0.75" />
              <stop offset="100%" stopColor="currentColor" stopOpacity="0.05" />
            </linearGradient>
          </defs>

          <g fill="none" strokeLinecap="round" strokeLinejoin="round">
            {/* faint offset copy of the cup body = fake thickness / depth */}
            <path
              d="M52 112 C 56 150, 92 168, 120 150 C 138 139, 144 124, 145 112"
              stroke="currentColor"
              strokeWidth="8"
              opacity="0.18"
              transform="translate(3.5 3.5)"
            />

            {/* steam — the growth bars, alive */}
            <g stroke="url(#wispFade)" strokeWidth="7">
              {WISPS.map((w, i) =>
                reduce ? (
                  <line
                    key={w.x}
                    x1={w.x}
                    y1={118}
                    x2={w.x}
                    y2={w.top}
                    stroke="currentColor"
                  />
                ) : (
                  <motion.line
                    key={w.x}
                    x1={w.x}
                    y1={118}
                    x2={w.x}
                    y2={w.top}
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{
                      pathLength: [0, 1, 1],
                      opacity: [0, 1, 0],
                      y: [6, 0, -26],
                      x: [0, w.sway * 0.4, w.sway],
                    }}
                    transition={{
                      duration: 3.6,
                      times: [0, 0.42, 1],
                      repeat: Infinity,
                      repeatDelay: 0.15,
                      delay: 0.5 + w.delay,
                      ease: "easeOut",
                    }}
                  />
                ),
              )}
            </g>

            {/* cup body sweep */}
            <path
              d="M52 112 C 56 150, 92 168, 120 150 C 138 139, 144 124, 145 112"
              stroke="url(#cupSheen)"
              strokeWidth="8"
            />
            {/* rim / coffee surface */}
            <path
              d="M50 112 C 78 100, 120 100, 148 112"
              stroke="currentColor"
              strokeWidth="7"
            />
            {/* handle */}
            <path
              d="M148 112 C 172 108, 176 134, 152 138"
              stroke="currentColor"
              strokeWidth="7"
            />
            {/* ambient swoop, drifting gently */}
            {reduce ? (
              <path
                d="M40 96 C 30 78, 44 66, 64 70"
                stroke="currentColor"
                strokeWidth="6"
                opacity="0.85"
              />
            ) : (
              <motion.path
                d="M40 96 C 30 78, 44 66, 64 70"
                stroke="currentColor"
                strokeWidth="6"
                animate={{ opacity: [0.5, 0.9, 0.5], y: [0, -4, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />
            )}
            {/* saucer */}
            <path
              d="M44 158 C 80 170, 124 170, 160 158"
              stroke="currentColor"
              strokeWidth="5"
              opacity="0.55"
            />
          </g>
        </svg>
      </motion.div>
    </div>
  );
}
