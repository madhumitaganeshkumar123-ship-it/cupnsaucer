"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/motion";

type Tag = "div" | "section" | "li" | "article";

// Subtle scroll-triggered reveal used across the site.
export function Reveal({
  children,
  className,
  delay = 0,
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: Tag;
}) {
  const common = {
    className,
    variants: fadeUp,
    initial: "hidden" as const,
    whileInView: "show" as const,
    viewport: viewportOnce,
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
