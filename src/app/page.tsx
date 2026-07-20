import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import VideoSection from "@/components/sections/VideoSection";
import WhyUs from "@/components/sections/WhyUs";
import ServicesOverview from "@/components/sections/ServicesOverview";
import Industries from "@/components/sections/Industries";
import HowWeWork from "@/components/sections/HowWeWork";
import DataSecurity from "@/components/sections/DataSecurity";
import CaseStudy from "@/components/sections/CaseStudy";
import Testimonials from "@/components/sections/Testimonials";
import Faq from "@/components/sections/Faq";
import CtaBand from "@/components/sections/CtaBand";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <VideoSection />
      <WhyUs />
      <ServicesOverview />
      <Industries />
      <HowWeWork />
      <DataSecurity />
      <CaseStudy />
      <Testimonials />
      <Faq />
      <CtaBand />
    </>
  );
}
