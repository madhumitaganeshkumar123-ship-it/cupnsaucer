import { site } from "./site";

// JSON-LD helpers for rich results.
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.name,
    legalName: site.legalName,
    description: site.description,
    url: site.url,
    email: site.email,
    telephone: site.phone,
    image: `${site.url}/images/og-default.jpg`,
    logo: `${site.url}/logo-mark.svg`,
    areaServed: "IN",
    sameAs: [site.social.linkedin, site.social.instagram, site.social.youtube],
  };
}

export function breadcrumbSchema(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${site.url}${item.path}`,
    })),
  };
}

export function faqSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export function serviceSchema(name: string, description: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${site.url}${path}`,
    provider: { "@type": "Organization", name: site.name, url: site.url },
    areaServed: "IN",
  };
}

export function articleSchema(opts: {
  title: string;
  description: string;
  path: string;
  category: string;
  date: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.title,
    description: opts.description,
    articleSection: opts.category,
    datePublished: opts.date,
    mainEntityOfPage: `${site.url}${opts.path}`,
    publisher: { "@type": "Organization", name: site.name, url: site.url },
  };
}

// Tiny helper component data — stringify for a <script type="application/ld+json">.
export function jsonLd(data: unknown) {
  return { __html: JSON.stringify(data) };
}
