import type { Metadata } from "next";
import { LegalLayout } from "@/components/ui/LegalLayout";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: `How ${site.name} uses cookies and similar technologies on this website.`,
};

export default function CookiePolicyPage() {
  return (
    <LegalLayout
      title="Cookie Policy"
      updated="June 2026"
      intro="How we use cookies and similar technologies, and how you can control them."
      sections={[
        { heading: "What cookies are", body: [
          "Cookies are small text files placed on your device when you visit a website. They help the site function and provide information to the site owners.",
        ]},
        { heading: "How we use cookies", body: [
          "We use essential cookies needed for the site to work, and may use analytics cookies to understand how visitors use the site so we can improve it.",
        ]},
        { heading: "Managing cookies", body: [
          "You can control and delete cookies through your browser settings. Disabling some cookies may affect how the site functions.",
        ]},
        { heading: "Contact", body: [
          `For questions about our use of cookies, email ${site.email}.`,
        ]},
      ]}
    />
  );
}
