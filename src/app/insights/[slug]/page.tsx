import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Script from "next/script";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { CtaBand } from "@/components/ui/CtaBand";
import { ArrowRight } from "@/components/ui/Icons";
import { insights, getInsight } from "@/data/content";
import { articleSchema, jsonLd } from "@/lib/schema";

export function generateStaticParams() {
  return insights.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getInsight(slug);
  if (!post) return { title: "Insight not found" };
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/insights/${post.slug}` },
    openGraph: { type: "article", title: post.title, description: post.excerpt },
  };
}

export default async function InsightDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getInsight(slug);
  if (!post) notFound();

  return (
    <>
      <Script
        id={`article-schema-${post.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          articleSchema({
            title: post.title,
            description: post.excerpt,
            path: `/insights/${post.slug}`,
            category: post.category,
            date: post.date,
          }),
        )}
      />

      <article className="pt-36 pb-20 lg:pt-44 lg:pb-28">
        <Container className="max-w-3xl">
          <Reveal>
            <Link href="/insights" className="link-underline text-sm text-gold">
              ← All insights
            </Link>
            <div className="mt-8 flex items-center gap-3 text-xs">
              <span className="eyebrow">{post.category}</span>
              <span className="text-taupe-light">{post.readMinutes} min read</span>
            </div>
            <h1 className="mt-4 text-display-lg">{post.title}</h1>
          </Reveal>

          <Reveal delay={0.05} className="mt-10">
            <div className="saucer-rule" />
            <div className="mt-10 space-y-6">
              {post.body.map((para, i) => (
                <p
                  key={i}
                  className={
                    i === 0
                      ? "text-xl leading-relaxed text-ink"
                      : "text-lg leading-relaxed text-taupe"
                  }
                >
                  {para}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal className="mt-12 rounded-2xl border border-gold/20 bg-cream-deep/40 p-8">
            <p className="font-display text-xl text-ink">
              Want to apply this to your business?
            </p>
            <Link
              href="/book-consultation"
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-gold"
            >
              Book a strategy call <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </Container>
      </article>

      <CtaBand />
    </>
  );
}
