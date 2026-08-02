import type { Metadata } from "next";
import { LegalLayout } from "@/components/ui/LegalLayout";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.name} collects, uses, and protects your personal information.`,
  alternates: { canonical: "/legal/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      updated="June 2026"
      intro={`How ${site.name} collects, uses, and protects the information you share with us.`}
      sections={[
        { heading: "Information we collect", body: [
          "We collect information you provide directly — such as your name, email, phone number, company, and the details you share through our contact, consultation, and resource forms.",
          "We also collect limited technical information automatically, such as your browser type and pages visited, to understand how the site is used and improve it.",
        ]},
        { heading: "How we use your information", body: [
          "We use your information to respond to enquiries, deliver requested resources, schedule consultations, send insights you have opted into, and improve our services.",
          "We do not sell your personal information to third parties.",
        ]},
        { heading: "Cookies and analytics", body: [
          "We may use cookies and analytics tools to understand site usage. You can control cookies through your browser settings. See our Cookie Policy for more detail.",
        ]},
        { heading: "Data retention and security", body: [
          "We retain personal information only as long as necessary for the purposes described here, and apply reasonable measures to protect it from unauthorized access.",
        ]},
        { heading: "Your rights", body: [
          `You may request access to, correction of, or deletion of your personal information by contacting us at ${site.email}.`,
        ]},
        { heading: "Contact", body: [
          `For any privacy questions, email ${site.email}.`,
        ]},
      ]}
    />
  );
}
