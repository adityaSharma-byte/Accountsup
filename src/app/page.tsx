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
import Reveal from "@/components/ui/Reveal";

export default function Home() {
  return (
    <>
      <Hero />
      <Reveal><Stats /></Reveal>
      <VideoSection />
      <Reveal><WhyUs /></Reveal>
      <Reveal><ServicesOverview /></Reveal>
      <Reveal><Industries /></Reveal>
      <Reveal><HowWeWork /></Reveal>
      <Reveal><DataSecurity /></Reveal>
      <Reveal><CaseStudy /></Reveal>
      <Reveal><Testimonials /></Reveal>
      <Reveal><Faq /></Reveal>
      <Reveal><CtaBand /></Reveal>
    </>
  );
}
