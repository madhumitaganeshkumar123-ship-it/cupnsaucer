import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowUpRight } from "@/components/ui/Icons";
import { insights, insightCategories } from "@/data/content";

export const metadata: Metadata = {
  title: "Business Growth Blog for Founders & SMEs",
  description:
    "Business growth insights from Cup N Saucer — on strategy, sales, distribution, marketing, branding, leadership, AI, and operations.",
  alternates: { canonical: "/insights" },
};

export default function InsightsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Blog"
        title="Ideas worth building on"
        intro="Practical thinking on growth, sales, distribution, marketing, leadership, AI, and operations — for leaders who want substance over buzzwords."
      />

      <section className="py-12 lg:py-16">
        <Container>
          <div className="flex flex-wrap gap-2">
            {insightCategories.map((c) => (
              <span
                key={c}
                className="rounded-full border border-line bg-cream px-4 py-1.5 text-xs font-medium text-taupe"
              >
                {c}
              </span>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-24 lg:pb-32">
        <Container className="grid items-start gap-6 md:grid-cols-2 lg:grid-cols-3">
          {insights.map((post, i) => (
            <Reveal as="article" key={post.slug} delay={i * 0.05}>
              <Link
                href={`/insights/${post.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-cream transition-all duration-300 ease-smooth hover:border-gold/40 hover:shadow-[0_18px_50px_-30px_rgba(20,17,12,0.35)]"
              >
                {post.image && (
                  <div className="relative aspect-[3/2] w-full overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 ease-smooth group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="flex h-full flex-col p-8">
                <div className="flex items-center justify-between">
                  <span className="eyebrow">{post.category}</span>
                  <span className="text-xs text-taupe-light">{post.readMinutes} min</span>
                </div>
                <h2 className="mt-5 text-xl leading-snug text-ink">{post.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-taupe">{post.excerpt}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-gold">
                  Read insight
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </Container>
      </section>
    </>
  );
}
