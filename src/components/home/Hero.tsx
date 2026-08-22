"use client";

import { motion } from "framer-motion";
import { AnimatedLogoMark } from "@/components/home/AnimatedLogoMark";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "@/components/ui/Icons";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section className="relative h-screen min-h-[620px] w-full overflow-hidden">
      {/* full-bleed brand photography */}
      <div
        aria-hidden
        className="absolute inset-0 bg-cover"
        style={{
          backgroundImage: "url(/images/hero-strategy.jpg)",
          backgroundPosition: "center 32%",
        }}
      />

      {/* soften the seams so the photo melts into the page */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-cream to-transparent" />
      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-[34%] bg-gradient-to-t from-cream via-cream/90 to-transparent" />

      {/* the animated mark, resting on the floor of the scene */}
      <div className="absolute left-1/2 top-[46%] h-36 w-36 -translate-x-1/2 -translate-y-1/2 sm:h-44 sm:w-44 lg:h-52 lg:w-52">
        <AnimatedLogoMark />
      </div>

      <div className="absolute inset-x-0 top-[64%] z-10 px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="eyebrow mb-4"
        >
          Business Growth Consultancy
        </motion.p>

        <h1 className="mx-auto max-w-5xl font-bold leading-[1.06] tracking-[-0.01em] text-[clamp(1.9rem,4.4vw,3.4rem)]">
          <span className="block overflow-hidden">
            <motion.span
              className="block"
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, ease, delay: 0.1 }}
            >
              The Best Business <span className="italic text-gold">Consultancy</span>{" "}
              in <span className="italic text-gold">Madurai.</span>
            </motion.span>
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.45 }}
          className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-taupe sm:text-base"
        >
          Serving businesses in Madurai, Chennai, and other cities — across Tamil
          Nadu and beyond.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.6 }}
          className="mt-7 flex flex-wrap items-center justify-center gap-4"
        >
          <Button href="/book-consultation">
            Book a Strategy Call <ArrowRight className="h-4 w-4" />
          </Button>
          <Button href="/services" variant="outline">
            Explore Services
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
