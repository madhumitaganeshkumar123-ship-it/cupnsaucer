import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "@/components/ui/Icons";

export function FinalCta() {
  return (
    <section className="py-24 lg:py-32">
      <Container>
        <Reveal className="relative overflow-hidden rounded-3xl border border-gold/20 bg-cream-deep/50 px-8 py-16 text-center lg:px-20 lg:py-24">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />
          <p className="eyebrow mb-5">Let&apos;s Begin</p>
          <h2 className="mx-auto max-w-3xl text-display-md">
            Ready to build sustainable growth?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-taupe sm:text-lg">
            Start with a focused strategy call. We&apos;ll understand your
            business and show you where the next stage of growth can come from.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Button href="/book-consultation">
              Book Consultation <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="/contact" variant="outline">
              Contact Us
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
