import { Hero } from "@/components/home/Hero";
import { Philosophy } from "@/components/home/Philosophy";
import { Services } from "@/components/home/Services";
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
      <Philosophy />
      <Services />
      <Approach />
      <Industries />
      <WhyUs />
      <CaseStudiesPreview />
      <Testimonials />
      <FinalCta />
    </>
  );
}
