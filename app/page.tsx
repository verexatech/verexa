import { HeroSection } from "@/components/hero-section";
import { Navbar } from "@/components/navbar";
import dynamic from "next/dynamic";

// Lazy-load below-fold sections to reduce initial bundle and main-thread blocking
const ServicesSection = dynamic(
  () => import("@/components/services-section").then((m) => ({ default: m.ServicesSection })),
  { ssr: true }
);
const AboutSection = dynamic(
  () => import("@/components/about-section").then((m) => ({ default: m.AboutSection })),
  { ssr: true }
);
const WorkWithUsSection = dynamic(
  () => import("@/components/contact-section").then((m) => ({ default: m.WorkWithUsSection })),
  { ssr: true }
);
const Footer = dynamic(
  () => import("@/components/footer").then((m) => ({ default: m.Footer })),
  { ssr: true }
);

export default function Home() {
  return (
    <main className="flex min-h-dvh flex-col bg-background overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <WorkWithUsSection />
      <Footer />
    </main>
  );
}

