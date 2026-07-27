import type { Metadata } from "next";
import { LegalLayout } from "@/components/ui/LegalLayout";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: `Important information about the limits of the guidance provided by ${site.name}.`,
};

export default function DisclaimerPage() {
  return (
    <LegalLayout
      title="Disclaimer"
      updated="June 2026"
      intro="Important information about the nature and limits of the content on this site."
      sections={[
        { heading: "General information", body: [
          "The content on this website is provided for general informational purposes only and does not constitute professional, financial, legal, or investment advice.",
        ]},
        { heading: "No guaranteed outcomes", body: [
          "Business results depend on many factors outside our control. Case studies and examples are illustrative and do not guarantee that you will achieve similar results.",
        ]},
        { heading: "Engagements", body: [
          "Any specific advice is provided only within a formal consulting engagement governed by a written agreement. Nothing on this site creates such a relationship.",
        ]},
        { heading: "External links", body: [
          "This site may link to third-party websites. We are not responsible for the content or practices of those sites.",
        ]},
        { heading: "Contact", body: [
          `For questions about this disclaimer, email ${site.email}.`,
        ]},
      ]}
    />
  );
}
