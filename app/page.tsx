import { HeroSection } from "@/components/hero-section";
import { Navbar } from "@/components/navbar";
import dynamic from "next/dynamic";

// Lazy-load below-fold sections to reduce initial bundle and main-thread blocking
const ServicesSection = dynamic(
  () => import("@/components/services-section").then((m) => ({ default: m.ServicesSection })),
  { ssr: true }
);
const ProblemsSection = dynamic(() =>
  import("@/components/home-sections").then((m) => ({
    default: m.ProblemsSection,
  })),
);
const IndustryExamplesSection = dynamic(() =>
  import("@/components/home-sections").then((m) => ({
    default: m.IndustryExamplesSection,
  })),
);
const FeaturedWorkSection = dynamic(() =>
  import("@/components/home-sections").then((m) => ({
    default: m.FeaturedWorkSection,
  })),
);
const ProcessSection = dynamic(() =>
  import("@/components/home-sections").then((m) => ({
    default: m.ProcessSection,
  })),
);
const WhyVerexaSection = dynamic(() =>
  import("@/components/home-sections").then((m) => ({
    default: m.WhyVerexaSection,
  })),
);
const AssessmentCta = dynamic(() =>
  import("@/components/assessment-cta").then((m) => ({
    default: m.AssessmentCta,
  })),
);
const Footer = dynamic(
  () => import("@/components/footer").then((m) => ({ default: m.Footer })),
  { ssr: true }
);

export default function Home() {
  return (
    <main className="flex min-h-dvh flex-col bg-background overflow-x-clip">
      <Navbar />
      <HeroSection />
      <ProblemsSection />
      <ServicesSection />
      <IndustryExamplesSection />
      <FeaturedWorkSection />
      <ProcessSection />
      <WhyVerexaSection />
      <AssessmentCta />
      <Footer />
    </main>
  );
}
