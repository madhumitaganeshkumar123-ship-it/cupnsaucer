import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { iconMap, ArrowRight } from "@/components/ui/Icons";
import { pillars } from "@/data/services";

export function Services() {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="What We Do"
          title="Six pillars of sustainable growth"
          intro="Strategy, systems, people, processes, and performance — the full set of capabilities a business needs to scale with confidence."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p, i) => {
            const Icon = iconMap[p.icon];
            return (
              <Reveal as="article" key={p.slug} delay={i * 0.05}>
                <Link
                  href={`/services/${p.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-line bg-cream p-8 transition-all duration-300 ease-smooth hover:border-gold/40 hover:shadow-[0_18px_50px_-30px_rgba(20,17,12,0.35)]"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold transition-colors group-hover:bg-gold group-hover:text-cream">
                    <Icon />
                  </span>
                  <h3 className="mt-6 text-xl text-ink">{p.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-taupe">
                    {p.short}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-gold">
                    Learn more
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
