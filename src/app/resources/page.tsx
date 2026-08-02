import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { CtaBand } from "@/components/ui/CtaBand";
import { LeadCaptureForm } from "@/components/forms/LeadCaptureForm";
import { resources } from "@/data/resources";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Free business growth resources from Cup N Saucer — checklists, frameworks, and assessments to help you grow with structure. Download with your email.",
  alternates: { canonical: "/resources" },
};

export default function ResourcesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Resources"
        title="Tools to grow with structure"
        intro="Practical checklists, frameworks, and assessments drawn from our consulting work. Enter your email and we'll send each one straight to your inbox."
      />

      <section className="py-20 lg:py-28">
        <Container className="grid gap-6 lg:grid-cols-2">
          {resources.map((r, i) => (
            <Reveal as="article" key={r.slug} delay={i * 0.05}>
              <div className="flex h-full flex-col rounded-2xl border border-line bg-cream p-8 lg:p-10">
                <span className="eyebrow">{r.format}</span>
                <h2 className="mt-4 text-2xl text-ink">{r.title}</h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-taupe">
                  {r.description}
                </p>
                <div className="mt-7">
                  <LeadCaptureForm resourceTitle={r.title} resourceSlug={r.slug} />
                </div>
              </div>
            </Reveal>
          ))}
        </Container>
      </section>

      <CtaBand
        title="Want the full company profile?"
        text="Book a strategy call and we'll share our complete company profile along with how we'd approach your growth."
      />
    </>
  );
}
