import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { CtaBand } from "@/components/ui/CtaBand";
import { Check } from "@/components/ui/Icons";
import { caseStudies, getCaseStudy } from "@/data/content";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) return { title: "Case study not found" };
  return {
    title: cs.title,
    description: cs.summary,
    alternates: { canonical: `/case-studies/${cs.slug}` },
  };
}

const sections = [
  { key: "challenge", label: "Challenge" },
  { key: "approach", label: "Approach" },
  { key: "implementation", label: "Implementation" },
] as const;

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) notFound();

  return (
    <>
      <PageHeader eyebrow={cs.industry} title={cs.title} intro={cs.summary} />

      <section className="py-20 lg:py-28">
        <Container className="grid gap-16 lg:grid-cols-[1fr_0.7fr]">
          <div className="space-y-12">
            {sections.map((s) => (
              <Reveal key={s.key}>
                <p className="eyebrow mb-3">{s.label}</p>
                <p className="text-lg leading-relaxed text-ink">{cs[s.key]}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <div className="sticky top-28 space-y-6">
              <div className="rounded-2xl bg-ink p-8 text-cream">
                <p className="font-display text-7xl text-gold-light">{cs.metric}</p>
                <p className="mt-2 text-sm text-cream/60">{cs.metricLabel}</p>
              </div>
              <div className="rounded-2xl border border-line bg-cream-deep/40 p-8">
                <p className="eyebrow mb-5">Results</p>
                <ul className="space-y-4">
                  {cs.results.map((r) => (
                    <li key={r} className="flex gap-3">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                      <span className="text-sm text-ink">{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
