import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { services } from "@/data/services";
import { caseStudies, insights } from "@/data/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPaths = [
    "",
    "/about",
    "/services",
    "/industries",
    "/case-studies",
    "/insights",
    "/resources",
    "/faq",
    "/contact",
    "/book-consultation",
    "/legal/privacy-policy",
    "/legal/terms",
    "/legal/cookie-policy",
    "/legal/disclaimer",
  ];

  const dynamicPaths = [
    ...services.map((s) => `/services/${s.slug}`),
    ...caseStudies.map((c) => `/case-studies/${c.slug}`),
    ...insights.map((i) => `/insights/${i.slug}`),
  ];

  return [...staticPaths, ...dynamicPaths].map((path) => ({
    url: path === "" ? `${site.url}/` : `${site.url}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path.split("/").length > 2 ? 0.6 : 0.8,
  }));
}
