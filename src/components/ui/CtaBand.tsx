import { Container } from "./Container";
import { Button } from "./Button";
import { ArrowRight } from "./Icons";

export function CtaBand({
  title = "Let's talk about your growth",
  text = "Book a strategy call and we'll show you where your next stage of growth can come from.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="bg-ink py-20 text-cream lg:py-24">
      <Container className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
        <div className="max-w-xl">
          <h2 className="text-display-md text-cream">{title}</h2>
          <p className="mt-4 text-cream/60">{text}</p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Button href="/book-consultation">
            Book a Strategy Call <ArrowRight className="h-4 w-4" />
          </Button>
          <Button href="/contact" variant="light">
            Contact Us
          </Button>
        </div>
      </Container>
    </section>
  );
}
