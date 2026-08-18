import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CtaBand } from "@/components/ui/CtaBand";
import { Accordion } from "@/components/ui/Accordion";
import { ArrowRight, ArrowUpRight } from "@/components/ui/Icons";
import { insights, getInsight, getRelatedInsights } from "@/data/content";
import { articleSchema, faqSchema, jsonLd } from "@/lib/schema";

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
    title: post.metaTitle ?? post.title,
    description: post.excerpt,
    alternates: { canonical: `/insights/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.metaTitle ?? post.title,
      description: post.excerpt,
      ...(post.image ? { images: [{ url: post.image, width: 1536, height: 1024 }] } : {}),
    },
  };
}

// Body paragraphs are plain text by default. A paragraph can start with
// "## " for an H2 or "### " for an H3 to render as a real subheading
// instead — this keeps the `body: string[]` shape unchanged for every
// existing shorter post while letting longer, more structured insights
// have real section headings.
function renderBody(body: string[]) {
  let leadUsed = false;
  return body.map((raw, i) => {
    if (raw.startsWith("### ")) {
      return (
        <h3 key={i} className="mt-2 text-xl leading-snug text-ink">
          {raw.slice(4)}
        </h3>
      );
    }
    if (raw.startsWith("## ")) {
      return (
        <h2 key={i} className="mt-6 font-display text-2xl leading-snug text-ink lg:text-3xl">
          {raw.slice(3)}
        </h2>
      );
    }
    const isLead = !leadUsed;
    leadUsed = true;
    return (
      <p
        key={i}
        className={
          isLead
            ? "text-xl leading-relaxed text-ink"
            : "text-lg leading-relaxed text-taupe"
        }
      >
        {raw}
      </p>
    );
  });
}

export default async function InsightDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getInsight(slug);
  if (!post) notFound();

  const related = getRelatedInsights(slug);

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

      {post.faqs && post.faqs.length > 0 && (
        <Script
          id={`insight-faq-schema-${post.slug}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLd(faqSchema(post.faqs))}
        />
      )}

      <article className="pt-36 pb-20 lg:pt-44 lg:pb-28">
        <Container className="max-w-3xl">
          <Reveal>
            <Link href="/insights" className="link-underline text-sm text-gold">
              ← All articles
            </Link>
            <div className="mt-8 flex items-center gap-3 text-xs">
              <span className="eyebrow">{post.category}</span>
              <span className="text-taupe-light">{post.readMinutes} min read</span>
            </div>
            <h1 className="mt-4 text-display-lg">{post.title}</h1>
          </Reveal>

          {post.image && (
            <Reveal delay={0.03} className="mt-10">
              <div className="relative aspect-[3/2] w-full overflow-hidden rounded-2xl">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  priority
                  sizes="(min-width: 1024px) 768px, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          )}

          {post.scrollReveal ? (
            <ScrollReveal className="mt-10">
              <div className="space-y-6">{renderBody(post.body)}</div>
            </ScrollReveal>
          ) : (
            <Reveal delay={0.05} className="mt-10" viewportAmount={0}>
              <div className="saucer-rule" />
              <div className="mt-10 space-y-6">{renderBody(post.body)}</div>
            </Reveal>
          )}

          {post.faqs && post.faqs.length > 0 && (
            <Reveal delay={0.05} className="mt-14">
              <div className="saucer-rule" />
              <p className="eyebrow mt-10 mb-3">FAQ</p>
              <h2 className="text-display-md text-3xl">Common questions</h2>
              <div className="mt-10">
                <Accordion items={post.faqs} />
              </div>
            </Reveal>
          )}

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

      {related.length > 0 && (
        <section className="border-t border-line py-16 lg:py-20">
          <Container>
            <Reveal>
              <p className="eyebrow mb-3">Related Articles</p>
              <h2 className="text-display-md text-3xl">Keep reading</h2>
            </Reveal>
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {related.map((p, i) => (
                <Reveal as="article" key={p.slug} delay={i * 0.05}>
                  <Link
                    href={`/insights/${p.slug}`}
                    className="group flex h-full flex-col rounded-2xl border border-line bg-cream p-8 transition-all duration-300 ease-smooth hover:border-gold/40 hover:shadow-[0_18px_50px_-30px_rgba(20,17,12,0.35)]"
                  >
                    <div className="flex items-center justify-between">
                      <span className="eyebrow">{p.category}</span>
                      <span className="text-xs text-taupe-light">{p.readMinutes} min</span>
                    </div>
                    <h3 className="mt-5 text-xl leading-snug text-ink">{p.title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-taupe">{p.excerpt}</p>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-gold">
                      Read insight
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
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
