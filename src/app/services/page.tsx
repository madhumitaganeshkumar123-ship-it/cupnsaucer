import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { CtaBand } from "@/components/ui/CtaBand";
import { ArrowUpRight } from "@/components/ui/Icons";
import { services, serviceCategories } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Strategy, sales and distribution, organizational development, marketing, operational excellence, and AI & digital transformation from Madurai's best marketing consultancy — explore the full Cup N Saucer service catalogue.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="The capabilities that turn vision into growth"
        intro="Explore our full catalogue. Each service is designed to be implemented — practical, tailored, and measured by outcomes."
      />

      {serviceCategories.map((cat) => (
        <section key={cat} className="border-b border-line py-16 lg:py-20">
          <Container>
            <Reveal>
              <h2 className="text-display-md text-3xl">{cat}</h2>
            </Reveal>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {services
                .filter((s) => s.category === cat)
                .map((s, i) => (
                  <Reveal as="article" key={s.slug} delay={i * 0.04}>
                    <Link
                      href={`/services/${s.slug}`}
                      className="group flex h-full flex-col justify-between rounded-2xl border border-line bg-cream p-7 transition-all duration-300 ease-smooth hover:border-gold/40 hover:shadow-[0_18px_50px_-30px_rgba(20,17,12,0.35)]"
                    >
                      <div>
                        <h3 className="text-lg text-ink">{s.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-taupe">{s.summary}</p>
                      </div>
                      <ArrowUpRight className="mt-6 h-5 w-5 text-gold transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </Link>
                  </Reveal>
                ))}
            </div>
          </Container>
        </section>
      ))}

      <CtaBand title="Not sure where to start?" text="Book a strategy call and we'll help you identify the highest-leverage place to begin." />
    </>
  );
}
