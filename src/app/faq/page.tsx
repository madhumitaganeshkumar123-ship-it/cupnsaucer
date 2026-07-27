import type { Metadata } from "next";
import Script from "next/script";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { CtaBand } from "@/components/ui/CtaBand";
import { Accordion } from "@/components/ui/Accordion";
import { faqs } from "@/data/faq";
import { faqSchema, jsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to common questions about working with Cup N Saucer — industries, implementation support, sales, distribution, startups, AI consulting, and how engagements work.",
};

export default function FaqPage() {
  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(faqSchema(faqs))}
      />
      <PageHeader
        eyebrow="FAQ"
        title="Questions, answered"
        intro="The things business owners most often ask before working with us. Don't see yours? Get in touch."
      />

      <section className="py-20 lg:py-28">
        <Container className="max-w-3xl">
          <Reveal>
            <Accordion items={faqs} />
          </Reveal>
        </Container>
      </section>

      <CtaBand title="Still have questions?" text="Book a strategy call or send us a message — we're happy to help." />
    </>
  );
}
