import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { CtaBand } from "@/components/ui/CtaBand";

export const metadata: Metadata = {
  title: "About",
  description:
    "Cup N Saucer is the best business consultancy in Madurai, built on a simple idea: vision needs structure. Learn our story, philosophy, vision, mission, and values.",
  alternates: { canonical: "/about" },
};

const values = [
  { title: "Clarity", text: "We make the complex simple and the implicit explicit, so leaders can decide with confidence." },
  { title: "Partnership", text: "We work alongside your team, building capability rather than dependence." },
  { title: "Pragmatism", text: "We design for the real world — what your people can actually run, today." },
  { title: "Integrity", text: "We tell you what you need to hear, not what's easiest to say." },
  { title: "Outcomes", text: "We hold ourselves to the results you achieve, not the slides we deliver." },
  { title: "Sustainability", text: "We build growth that lasts beyond the engagement." },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Vision needs structure. We provide both."
        intro="Cup N Saucer is the best business consultancy in Madurai, helping companies build strategy, systems, people, processes, and performance."
      />

      <section className="py-20 lg:py-28">
        <Container className="grid gap-14 lg:grid-cols-2">
          <Reveal>
            <h2 className="text-display-md text-3xl">Our story</h2>
            <div className="mt-5 space-y-4 text-taupe">
              <p>
                Cup N Saucer began with a frustration: too many capable businesses
                were stuck — full of ambition, short on structure. They had vision,
                but no system to carry it. They had energy, but it leaked away in
                firefighting and false starts.
              </p>
              <p>
                We built a consultancy to fix exactly that. Not just another
                marketing agency, not a slide factory — a growth partner based
                in Madurai that works on strategy, sales, distribution,
                operations, people, and digital together, because real growth
                needs all of them moving in concert.
              </p>
              <p>
                Our name says it plainly. The cup is your vision; the saucer is the
                structure that holds it. Balance the two and growth becomes
                sustainable instead of sporadic.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="space-y-5">
            <div className="rounded-2xl border border-line bg-cream-deep/40 p-8">
              <p className="eyebrow mb-3">Why we exist</p>
              <p className="font-display text-2xl text-ink">
                To help businesses turn ambition into structured, sustainable
                growth — and to build the systems that keep them growing.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="rounded-2xl border border-line bg-cream p-8">
                <p className="eyebrow mb-3">Vision</p>
                <p className="text-sm text-taupe">
                  To be the most trusted growth partner for ambitious businesses
                  across India.
                </p>
              </div>
              <div className="rounded-2xl border border-line bg-cream p-8">
                <p className="eyebrow mb-3">Mission</p>
                <p className="text-sm text-taupe">
                  To help businesses scale through strategy, sales excellence,
                  systems, and people — with execution that delivers.
                </p>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="border-y border-line bg-cream-deep/40 py-20 lg:py-28">
        <Container>
          <Reveal className="max-w-2xl">
            <p className="eyebrow mb-4">Core Values</p>
            <h2 className="text-display-md">What we hold ourselves to</h2>
          </Reveal>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.04} className="bg-cream p-8">
                <h3 className="text-xl text-ink">{v.title}</h3>
                <p className="mt-2 text-sm text-taupe">{v.text}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 lg:py-28">
        <Container>
          <Reveal className="mx-auto max-w-3xl rounded-3xl border border-gold/20 bg-cream p-10 lg:p-14">
            <p className="eyebrow mb-4">Founder&apos;s Message</p>
            <p className="font-display text-2xl leading-snug text-ink lg:text-3xl">
              &ldquo;Most businesses don&apos;t fail for lack of ideas. They stall
              for lack of structure. Our job is to give your ambition something
              solid to stand on — and then help you build on it.&rdquo;
            </p>
            <p className="mt-6 text-sm text-taupe">— Founder, Cup N Saucer</p>
          </Reveal>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
