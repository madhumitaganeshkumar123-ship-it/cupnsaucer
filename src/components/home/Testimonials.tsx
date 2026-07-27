"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { ArrowRight } from "@/components/ui/Icons";
import { testimonials } from "@/data/content";
import { cn } from "@/lib/utils";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const t = testimonials[index];
  const go = (dir: number) =>
    setIndex((i) => (i + dir + testimonials.length) % testimonials.length);

  return (
    <section className="bg-ink py-20 text-cream lg:py-28">
      <Container>
        <p className="eyebrow mb-10 text-gold-light">Client Testimonials</p>

        <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={index}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="font-display text-2xl leading-snug text-cream sm:text-3xl lg:text-4xl">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer className="mt-8 text-sm text-cream/60">
                <span className="text-gold-light">{t.role}</span> — {t.company}
              </footer>
            </motion.blockquote>
          </AnimatePresence>

          <div className="flex gap-3 lg:flex-col">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous testimonial"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-cream/20 text-cream transition-colors hover:border-gold-light hover:text-gold-light"
            >
              <ArrowRight className="h-5 w-5 rotate-180" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next testimonial"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-cream/20 text-cream transition-colors hover:border-gold-light hover:text-gold-light"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="mt-12 flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to testimonial ${i + 1}`}
              onClick={() => setIndex(i)}
              className={cn(
                "h-1 rounded-full transition-all duration-300",
                i === index ? "w-10 bg-gold-light" : "w-5 bg-cream/20",
              )}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
