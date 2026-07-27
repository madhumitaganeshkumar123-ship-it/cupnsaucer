import type { Metadata } from "next";
import { LegalLayout } from "@/components/ui/LegalLayout";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `The terms governing your use of the ${site.name} website and services.`,
};

export default function TermsPage() {
  return (
    <LegalLayout
      title="Terms & Conditions"
      updated="June 2026"
      intro={`The terms that govern your use of the ${site.name} website and services.`}
      sections={[
        { heading: "Acceptance of terms", body: [
          "By accessing and using this website, you agree to be bound by these terms. If you do not agree, please do not use the site.",
        ]},
        { heading: "Use of the website", body: [
          "You agree to use the site lawfully and not to misuse it, attempt to disrupt it, or access it in any way that could damage or impair its availability.",
        ]},
        { heading: "Services", body: [
          "Information about our consulting services is provided for general guidance. Specific engagements are governed by separate written agreements between you and us.",
        ]},
        { heading: "Intellectual property", body: [
          `All content on this site, including text, graphics, and the ${site.name} brand and logo, is owned by us or our licensors and may not be reproduced without permission.`,
        ]},
        { heading: "Limitation of liability", body: [
          "The website and its content are provided on an 'as is' basis. To the extent permitted by law, we are not liable for any loss arising from reliance on the information provided here.",
        ]},
        { heading: "Governing law", body: [
          "These terms are governed by the laws of India, with jurisdiction in the courts of Chennai, Tamil Nadu.",
        ]},
        { heading: "Contact", body: [
          `Questions about these terms can be sent to ${site.email}.`,
        ]},
      ]}
    />
  );
}
