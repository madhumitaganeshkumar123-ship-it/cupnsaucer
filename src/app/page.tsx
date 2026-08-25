import { Hero } from "@/components/home/Hero";
import { GrowthFramework } from "@/components/home/GrowthFramework";
import { Approach } from "@/components/home/Approach";
import { Industries } from "@/components/home/Industries";
import { WhyUs } from "@/components/home/WhyUs";
import { CaseStudiesPreview } from "@/components/home/CaseStudiesPreview";
import { Testimonials } from "@/components/home/Testimonials";
import { FinalCta } from "@/components/home/FinalCta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <GrowthFramework />
      <Approach />
      <Industries />
      <WhyUs />
      <CaseStudiesPreview />
      <Testimonials />
      <FinalCta />
    </>
  );
}
