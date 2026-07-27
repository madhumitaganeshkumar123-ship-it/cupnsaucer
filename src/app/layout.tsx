import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingSidebar } from "@/components/layout/FloatingSidebar";
import { organizationSchema, jsonLd } from "@/lib/schema";
import { site } from "@/lib/site";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Business Growth Consultancy`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  keywords: [
    "business consultancy",
    "growth consulting",
    "sales excellence",
    "distribution strategy",
    "operational excellence",
    "digital transformation",
    "Chennai",
    "Tamil Nadu",
  ],
  openGraph: {
    type: "website",
    title: `${site.name} — Where Vision Meets Structure`,
    description: site.description,
    url: site.url,
    siteName: site.name,
    images: [{ url: "/images/og-default.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Where Vision Meets Structure`,
    description: site.description,
  },
  alternates: { canonical: site.url },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body>
        <Script id="org-schema" type="application/ld+json" dangerouslySetInnerHTML={jsonLd(organizationSchema())} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-5 focus:py-2 focus:text-cream"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <FloatingSidebar />
      </body>
    </html>
  );
}
