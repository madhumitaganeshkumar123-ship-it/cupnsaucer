import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { CtaBand } from "@/components/ui/CtaBand";
import { Check } from "@/components/ui/Icons";
import { industries, businessTypes } from "@/data/content";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "We work with startups, SMEs, family businesses, educational institutions, retail, and manufacturing — adapting our growth methods to each.",
  alternates: { canonical: "/industries" },
};

export default function IndustriesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Industries"
        title="The same discipline, tuned to your world"
        intro="Growth principles travel across sectors; the details don't. Here's how we adapt for the businesses we serve most."
      />

      {industries.map((ind, i) => (
        <section
          key={ind.slug}
          id={ind.slug}
          className="scroll-mt-24 border-b border-line py-16 lg:py-20"
        >
          <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <span className="font-display text-5xl text-gold/30">0{i + 1}</span>
              <h2 className="mt-3 text-display-md text-3xl">{ind.title}</h2>
              <p className="mt-4 max-w-md text-taupe">{ind.blurb}</p>
            </Reveal>
            <Reveal delay={0.1} className="rounded-2xl border border-line bg-cream-deep/40 p-8">
              <p className="eyebrow mb-5">Where we focus</p>
              <ul className="space-y-4">
                {ind.challenges.map((c) => (
                  <li key={c} className="flex gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                    <span className="text-ink">{c}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </Container>
        
        </section>
      ))}

            <section className="border-t border-line py-16 lg:py-20">
                    <Container>
                              <p className="eyebrow mb-4">Business Types We Support</p>
                              <p className="max-w-2xl text-taupe">{businessTypes.map((bt) => bt.title).join(" · ")}</p>
                    </Container>
            </section>
    
    <CtaBand />
    </>
  );
}
