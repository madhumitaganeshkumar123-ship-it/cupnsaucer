import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { CtaBand } from "@/components/ui/CtaBand";
import { ServiceExplorer } from "@/components/services/ServiceExplorer";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Strategy, sales and distribution, organizational development, marketing, operational excellence, and AI & digital transformation from Madurai's best business consultancy — explore the full Cup N Saucer service catalogue.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="The capabilities that turn vision into growth"
        intro="Explore our full catalogue. Each service is designed to be implemented — practical, tailored, and measured by outcomes."
      />

      <ServiceExplorer />

      <CtaBand title="Not sure where to start?" text="Book a strategy call and we'll help you identify the highest-leverage place to begin." />
    </>
  );
}
