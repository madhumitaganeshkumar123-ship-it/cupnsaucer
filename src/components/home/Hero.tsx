"use client";

import { motion } from "framer-motion";
import { AnimatedLogoMark } from "@/components/home/AnimatedLogoMark";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "@/components/ui/Icons";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 lg:pt-44 lg:pb-28">
      {/* ambient warm wash */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-32 -top-24 h-[36rem] w-[36rem] rounded-full bg-gold/5 blur-3xl" />
        <div className="absolute -left-24 bottom-0 h-96 w-96 rounded-full bg-gold/[0.04] blur-3xl" />
      </div>

      <Container className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="eyebrow mb-6"
          >
            Business Growth Consultancy
          </motion.p>

          <h1 className="leading-[1.08] tracking-[-0.01em] text-[clamp(1.5rem,2.3vw,2.5rem)]">
            {["Business Solutions Today,", "Business Development for Tomorrow."].map(
              (line, i) => (
                <span key={line} className="block overflow-hidden">
                  <motion.span
                    className="block"
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.9, ease, delay: 0.1 + i * 0.12 }}
                  >
                    {i === 1 ? (
                      <>
                        Business Development for{" "}
                        <span className="italic text-gold">Tomorrow.</span>
                      </>
                    ) : (
                      <>
                        Business Solutions{" "}
                        <span className="italic text-gold">Today,</span>
                      </>
                    )}
                  </motion.span>
                </span>
              ),
            )}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.5 }}
            className="mt-7 max-w-xl text-base leading-relaxed text-taupe sm:text-lg"
          >
            Serving businesses in Madurai, Chennai, and other cities — across
            Tamil Nadu and beyond.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.65 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Button href="/book-consultation">
              Book a Strategy Call <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="/services" variant="outline">
              Explore Services
            </Button>
          </motion.div>
        </div>

        <div className="relative mx-auto hidden aspect-square w-full lg:block lg:max-w-none lg:translate-x-10 xl:translate-x-16">
          <AnimatedLogoMark />
        </div>
      </Container>
    </section>
  );
}
