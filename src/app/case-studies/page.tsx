import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { CtaBand } from "@/components/ui/CtaBand";
import { ArrowRight } from "@/components/ui/Icons";
import { caseStudies } from "@/data/content";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Representative engagements from Cup N Saucer — the challenge, our approach, implementation, and the results that followed.",
  alternates: { canonical: "/case-studies" },
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Case Studies"
        title="Structure, applied — and the results that followed"
        intro="Representative engagements. Details are anonymized to respect client confidentiality; the patterns are real."
      />

      <section className="py-20 lg:py-28">
        <Container className="space-y-6">
          {caseStudies.map((cs, i) => (
            <Reveal as="article" key={cs.slug} delay={i * 0.05}>
              <Link
                href={`/case-studies/${cs.slug}`}
                className="group grid gap-8 rounded-3xl border border-line bg-cream p-8 transition-all duration-300 ease-smooth hover:border-gold/40 hover:shadow-[0_24px_60px_-40px_rgba(20,17,12,0.4)] lg:grid-cols-[auto_1fr_auto] lg:items-center lg:p-12"
              >
                <div className="lg:w-48">
                  <p className="eyebrow">{cs.industry}</p>
                  <p className="mt-4 font-display text-6xl text-gold">{cs.metric}</p>
                  <p className="mt-1 text-xs text-taupe">{cs.metricLabel}</p>
                </div>
                <div>
                  <h2 className="text-2xl text-ink lg:text-3xl">{cs.title}</h2>
                  <p className="mt-3 max-w-2xl text-taupe">{cs.summary}</p>
                </div>
                <ArrowRight className="hidden h-6 w-6 text-gold transition-transform group-hover:translate-x-1 lg:block" />
              </Link>
            </Reveal>
          ))}
        </Container>
      </section>

      <CtaBand title="Want results like these?" />
    </>
  );
}
