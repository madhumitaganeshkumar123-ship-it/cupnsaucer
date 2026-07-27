import { Container } from "./Container";
import { Reveal } from "./Reveal";

export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-line pt-36 pb-16 lg:pt-44 lg:pb-20">
      <div className="pointer-events-none absolute -right-24 -top-20 -z-10 h-96 w-96 rounded-full bg-gold/5 blur-3xl" />
      <Container>
        <Reveal>
          <p className="eyebrow mb-5">{eyebrow}</p>
          <h1 className="max-w-4xl text-display-lg">{title}</h1>
          {intro && (
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-taupe sm:text-lg">
              {intro}
            </p>
          )}
        </Reveal>
      </Container>
    </section>
  );
}
