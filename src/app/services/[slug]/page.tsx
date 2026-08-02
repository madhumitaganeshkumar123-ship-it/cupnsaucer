import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Script from "next/script";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { CtaBand } from "@/components/ui/CtaBand";
import { Check, ArrowRight, ArrowUpRight } from "@/components/ui/Icons";
import { services, getService, getRelatedServices } from "@/data/services";
import { serviceSchema, jsonLd } from "@/lib/schema";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Service not found" };
  return {
    title: service.title,
    description: service.summary,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const path = `/services/${service.slug}`;
  const related = getRelatedServices(slug);

  return (
    <>
      <Script
        id={`service-schema-${service.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(serviceSchema(service.title, service.summary, path))}
      />
      <PageHeader eyebrow={service.category} title={service.title} intro={service.summary} />

      <section className="py-20 lg:py-28">
        <Container className="grid gap-16 lg:grid-cols-[1fr_0.8fr]">
          <div className="space-y-14">
            <Reveal>
              <p className="eyebrow mb-3">The Problem</p>
              <p className="text-lg leading-relaxed text-ink">{service.problem}</p>
            </Reveal>
            <Reveal>
              <p className="eyebrow mb-3">Our Solution</p>
              <p className="text-lg leading-relaxed text-ink">{service.solution}</p>
            </Reveal>
            <Reveal>
              <p className="eyebrow mb-5">Methodology</p>
              <ol className="space-y-4">
                {service.methodology.map((step, i) => (
                  <li key={step} className="flex gap-4">
                    <span className="font-display text-2xl text-gold">0{i + 1}</span>
                    <span className="pt-1 text-taupe">{step}</span>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="sticky top-28 rounded-2xl border border-line bg-cream-deep/40 p-8">
              <p className="eyebrow mb-5">Expected Outcomes</p>
              <ul className="space-y-4">
                {service.outcomes.map((o) => (
                  <li key={o} className="flex gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                    <span className="text-sm text-ink">{o}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/book-consultation"
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-medium text-cream transition-colors hover:bg-gold-dark"
              >
                Book a Strategy Call <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>

      {related.length > 0 && (
        <section className="border-t border-line py-16 lg:py-20">
          <Container>
            <Reveal>
              <p className="eyebrow mb-3">Related Services</p>
              <h2 className="text-display-md text-3xl">Explore related capabilities</h2>
            </Reveal>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((s, i) => (
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
      )}

      <CtaBand />
    </>
  );
}
