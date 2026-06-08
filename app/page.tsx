import { Hero } from "@/components/home/Hero";
import { Reassurance } from "@/components/home/Reassurance";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { WhyUs } from "@/components/home/WhyUs";
import { RealisationsPreview } from "@/components/home/RealisationsPreview";
import { Steps } from "@/components/home/Steps";
import { ZoneSection } from "@/components/home/ZoneSection";
import { CTABand } from "@/components/shared/CTABand";
import { JsonLd } from "@/components/seo/JsonLd";
import { localBusinessJsonLd } from "@/lib/structured-data";

export default function HomePage() {
  return (
    <>
      <JsonLd data={localBusinessJsonLd()} />
      <Hero />
      <Reassurance />
      <ServicesGrid />
      <WhyUs />
      <RealisationsPreview />
      <Steps />
      <ZoneSection />
      <CTABand />
    </>
  );
}
