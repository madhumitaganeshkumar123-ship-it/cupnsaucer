import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { approach } from "@/data/content";

// The five-stage approach is a genuine sequence, so numbered markers earn
// their place here.
export function Approach() {
  return (
    <section className="bg-ink py-20 text-cream lg:py-28">
      <Container>
        <SectionHeading
          light
          eyebrow="Our Consulting Approach"
          title="Five stages, one outcome"
          intro="A disciplined path from understanding your business to driving results you can measure — with your team, not over their heads."
        />

        <ol className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-cream/10 bg-cream/10 md:grid-cols-3 lg:grid-cols-5">
          {approach.map((step, i) => (
            <Reveal as="li" key={step.n} delay={i * 0.06} className="bg-ink p-8">
              <span className="font-display text-4xl text-gold-light">{step.n}</span>
              <h3 className="mt-4 text-xl text-cream">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-cream/60">
                {step.description}
              </p>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
