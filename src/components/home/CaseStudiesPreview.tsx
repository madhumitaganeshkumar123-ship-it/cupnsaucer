import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "@/components/ui/Icons";
import { caseStudies } from "@/data/content";

export function CaseStudiesPreview() {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Case Studies"
            title="Outcomes, not slideware"
            intro="Representative engagements showing how structure turns ambition into measurable results."
          />
          <Button href="/case-studies" variant="ghost" className="px-0">
            All case studies <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {caseStudies.map((cs, i) => (
            <Reveal as="article" key={cs.slug} delay={i * 0.06}>
              <Link
                href={`/case-studies/${cs.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-line bg-cream p-8 transition-all duration-300 ease-smooth hover:border-gold/40 hover:shadow-[0_18px_50px_-30px_rgba(20,17,12,0.35)]"
              >
                <p className="eyebrow">{cs.industry}</p>
                <div className="mt-6 flex items-baseline gap-2">
                  <span className="font-display text-5xl text-gold">{cs.metric}</span>
                </div>
                <p className="mt-1 text-sm text-taupe">{cs.metricLabel}</p>
                <h3 className="mt-6 text-lg leading-snug text-ink">{cs.title}</h3>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-gold">
                  Read the story
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
