import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const cup = ["Vision", "Ambition", "Ideas", "Opportunities"];
const saucer = ["Stability", "Structure", "Support", "Sustainability"];

// Section 2 — the Cup & Saucer philosophy as an elegant split.
export function Philosophy() {
  return (
    <section className="border-y border-line bg-cream-deep/40">
      <Container className="py-20 lg:py-28">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow mb-4">Why Cup N Saucer</p>
          <h2 className="text-display-md">
            Balance is the whole point
          </h2>
          <p className="mt-5 text-taupe sm:text-lg">
            We are not a marketing agency. We are a growth consultancy — and our
            name is our method.
          </p>
        </Reveal>

        <div className="relative mt-16 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-2">
          <Reveal className="bg-cream p-10 lg:p-14">
            <p className="font-display text-sm uppercase tracking-eyebrow text-gold">
              The Cup
            </p>
            <h3 className="mt-3 text-2xl text-ink lg:text-3xl">Vision rises</h3>
            <p className="mt-3 text-sm text-taupe">
              The cup holds what you aspire to — the ideas and ambition that pull
              the business forward.
            </p>
            <ul className="mt-7 space-y-3">
              {cup.map((item) => (
                <li key={item} className="flex items-center gap-3 font-display text-xl text-ink">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1} className="bg-ink p-10 text-cream lg:p-14">
            <p className="font-display text-sm uppercase tracking-eyebrow text-gold-light">
              The Saucer
            </p>
            <h3 className="mt-3 text-2xl lg:text-3xl">Structure holds</h3>
            <p className="mt-3 text-sm text-cream/60">
              The saucer is what keeps it standing — the systems and discipline
              that make growth last.
            </p>
            <ul className="mt-7 space-y-3">
              {saucer.map((item) => (
                <li key={item} className="flex items-center gap-3 font-display text-xl">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold-light" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal className="mx-auto mt-10 max-w-xl text-center text-taupe">
          Together they create balance. Our consultancy helps businesses achieve
          that balance through strategy and execution.
        </Reveal>
      </Container>
    </section>
  );
}
