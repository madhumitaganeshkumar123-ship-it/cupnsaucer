import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowUpRight } from "@/components/ui/Icons";
import { industries } from "@/data/content";

export function Industries() {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="Industries We Serve"
          title="Built for the businesses that build India"
          intro="From first-generation startups to multi-decade family enterprises — we adapt our methods to your model, market, and ambition."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind, i) => (
            <Reveal as="article" key={ind.slug} delay={i * 0.05}>
              <Link
                href={`/industries#${ind.slug}`}
                className="group flex h-full flex-col justify-between rounded-2xl border border-line bg-cream-deep/30 p-8 transition-all duration-300 ease-smooth hover:border-gold/40 hover:bg-cream"
              >
                <div>
                  <h3 className="text-xl text-ink">{ind.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-taupe">{ind.blurb}</p>
                </div>
                <ArrowUpRight className="mt-8 h-5 w-5 text-gold transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
