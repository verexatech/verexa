import { HeroSection } from "@/components/hero-section";
import { Navbar } from "@/components/navbar";
import { ServicesSection } from "@/components/services-section";
import { AboutSection } from "@/components/about-section";
import { WorkWithUsSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

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
