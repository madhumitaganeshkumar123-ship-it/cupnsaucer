"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/motion";

type Tag = "div" | "section" | "li" | "article";

// Subtle scroll-triggered reveal used across the site.
//
// `viewportAmount` overrides how much of the element must be visible before
// it reveals (defaults to the shared `viewportOnce.amount`, 25%). Pass a
// lower value (e.g. 0) when wrapping content that can be many viewport-
// heights tall — a percentage-of-self threshold can otherwise never be
// satisfied for very tall content, leaving it stuck at opacity 0.
export function Reveal({
  children,
  className,
  delay = 0,
  as = "div",
  viewportAmount,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: Tag;
  viewportAmount?: number;
}) {
  const common = {
    className,
    variants: fadeUp,
    initial: "hidden" as const,
    whileInView: "show" as const,
    viewport: {
      once: true,
      amount: viewportAmount ?? viewportOnce.amount,
    },
    transition: { delay },
    children,
  };

  switch (as) {
    case "section":
      return <motion.section {...(common as HTMLMotionProps<"section">)} />;
    case "li":
      return <motion.li {...(common as HTMLMotionProps<"li">)} />;
    case "article":
      return <motion.article {...(common as HTMLMotionProps<"article">)} />;
    default:
      return <motion.div {...(common as HTMLMotionProps<"div">)} />;
  }
}
