import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { ConsultationForm } from "@/components/forms/ConsultationForm";
import { CalendlyEmbed } from "@/components/forms/CalendlyEmbed";
import { Check } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Book a Strategy Call",
  description:
    "Book a focused strategy call with Cup N Saucer. Share a few details about your business and we'll prepare for a conversation about your growth.",
  alternates: { canonical: "/book-consultation" },
};

const expect = [
  "A focused 45-minute conversation about your business",
  "An outside, experienced perspective on your growth constraints",
  "Initial thoughts on where the highest-leverage opportunities lie",
  "No obligation — just a genuinely useful discussion",
];

export default function BookConsultationPage() {
  return (
    <>
      <PageHeader
        eyebrow="Book a Strategy Call"
        title="A conversation about where your growth comes next"
        intro="Tell us a little about your business, pick a time that works, and we'll come prepared."
      />

      <section className="py-20 lg:py-28">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="eyebrow mb-4 justify-center">What to expect</p>
            <h2 className="text-3xl font-bold text-ink sm:text-4xl">
              Here&apos;s exactly what you&apos;ll walk away with
            </h2>
          </Reveal>

          <Reveal delay={0.1} className="mt-10 grid gap-6 sm:grid-cols-2">
            {expect.map((e) => (
              <div
                key={e}
                className="flex items-start gap-4 rounded-2xl border border-line bg-cream-deep/40 p-6"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                  <Check className="h-5 w-5" />
                </span>
                <span className="pt-1 text-base font-semibold text-ink">{e}</span>
              </div>
            ))}
          </Reveal>

          <Reveal delay={0.15} className="mt-16">
            <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
              <div>
                <h2 className="text-2xl text-ink">Pick a time</h2>
                <p className="mt-2 text-sm text-taupe">Choose whatever slot works best for you.</p>
                <div className="mt-6">
                  <CalendlyEmbed />
                </div>
              </div>

              <div className="rounded-2xl border border-line bg-cream p-8 lg:p-10">
                <h2 className="text-2xl text-ink">Tell us about your business</h2>
                <p className="mt-2 text-sm text-taupe">
                  The more we know, the more useful the call.
                </p>
                <div className="mt-8">
                  <ConsultationForm />
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}