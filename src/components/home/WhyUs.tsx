import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { whyChooseUs } from "@/data/content";

export function WhyUs() {
  return (
    <section className="border-y border-line bg-cream-deep/40 py-20 lg:py-28">
      <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="An advisor that stays for the results"
          intro="We measure ourselves by the outcomes you achieve — and we build capability inside your team so it lasts."
        />

        <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
          {whyChooseUs.map((point, i) => (
            <Reveal key={point.title} delay={i * 0.05} className="bg-cream p-7">
              <span className="font-display text-2xl text-gold">0{i + 1}</span>
              <h3 className="mt-3 text-lg text-ink">{point.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-taupe">
                {point.description}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
