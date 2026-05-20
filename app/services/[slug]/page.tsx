import { notFound } from "next/navigation";
import { services } from "@/lib/services";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { ChevronRight, ArrowLeft, CheckCircle2 } from "lucide-react";
import {
  WebGraphic,
  MobileGraphic,
  CloudGraphic,
  SupportGraphic,
  DesignGraphic,
  AIGraphic,
  PerformanceGraphic,
} from "@/components/service-graphics";

const graphicMap = {
  web: <WebGraphic />,
  mobile: <MobileGraphic />,
  cloud: <CloudGraphic />,
  ai: <AIGraphic />,
  support: <SupportGraphic />,
  design: <DesignGraphic />,
  performance: <PerformanceGraphic />,
};

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/30 relative overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-36 pb-12 md:pt-40 md:pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-size-[64px_64px] pointer-events-none mask-radial-fade"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Link href="/services" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-10 text-sm font-medium">
             <ArrowLeft className="w-4 h-4" />
             Back to All Services
          </Link>
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
             <div className="flex-1 space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-normal leading-[1.05] bg-linear-to-b from-foreground from-20% to-muted-foreground sm:from-foreground sm:from-30% sm:to-muted-foreground to-100% bg-clip-text text-transparent">
                  {service.title}
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl font-light">
                  {service.tagline}
                </p>
                <div className="flex flex-wrap gap-2 pt-4">
                  {service.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-muted-foreground">
                      {tech}
                    </span>
                  ))}
                </div>
             </div>
             <div className="flex-1 w-full flex justify-end items-center">
                <div className="w-full max-w-lg h-[450px] relative rounded-[40px] overflow-hidden bg-card/20 border border-white/5 shadow-2xl flex items-center justify-center liquid-glass group">
                   {graphicMap[service.graphicId as keyof typeof graphicMap]}
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="py-24 bg-background relative z-10">
         <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              
              {/* Left Column: Details & Process */}
              <div className="lg:col-span-8 space-y-20">
                
                {/* Description */}
                <div>
                  <h2 className="text-3xl font-normal mb-8">Overview</h2>
                  <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                    {service.detailedDescription.map((paragraph, idx) => (
                      <p key={idx}>{paragraph}</p>
                    ))}
                  </div>
                </div>

                {/* Core Offerings / Features */}
                <div>
                  <h2 className="text-3xl font-normal mb-8">Core Capabilities</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-5 rounded-2xl bg-card/30 border border-white/5 shadow-sm transition-colors hover:bg-white/5">
                        <CheckCircle2 className="w-5 h-5 mt-0.5 text-primary shrink-0" />
                        <span className="text-foreground/90 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Our Process */}
                <div>
                  <h2 className="text-3xl font-normal mb-8">Our Process</h2>
                  <div className="space-y-6">
                    {service.process.map((step, idx) => (
                      <div key={idx} className="flex gap-6 group">
                        <div className="flex flex-col items-center">
                          <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm border border-primary/20 shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                            {step.step}
                          </div>
                          {idx !== service.process.length - 1 && (
                            <div className="w-px h-full bg-border mt-4 group-hover:bg-primary/50 transition-colors" />
                          )}
                        </div>
                        <div className="pb-8 pt-2">
                          <h3 className="text-xl font-medium mb-2">{step.title}</h3>
                          <p className="text-muted-foreground">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Right Column: Benefits sidebar */}
              <div className="lg:col-span-4">
                <div className="sticky top-32 space-y-8">
                  <div className="p-8 rounded-3xl bg-card/30 border border-white/10 shadow-xl liquid-glass">
                    <h3 className="text-2xl font-normal mb-8">Key Benefits</h3>
                    <div className="space-y-8">
                      {service.benefits.map((benefit, idx) => (
                        <div key={idx}>
                          <h4 className="text-lg font-medium text-foreground mb-2 flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            {benefit.title}
                          </h4>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {benefit.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="p-8 rounded-3xl bg-primary text-primary-foreground shadow-xl">
                    <h3 className="text-2xl font-normal mb-4">Start Your Project</h3>
                    <p className="mb-6 opacity-90 text-sm leading-relaxed">
                      Ready to leverage our {service.title} expertise? Let's discuss your requirements and build something extraordinary.
                    </p>
                    <Link
                      href="/contact"
                      className="inline-flex w-full items-center justify-center gap-2 bg-background text-foreground hover:bg-background/90 transition-all duration-300 ease-in-out px-6 py-3.5 rounded-xl font-medium group"
                    >
                      Talk to our Experts
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>

            </div>
         </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-card/40 border border-white/10 rounded-3xl p-12 backdrop-blur-md shadow-2xl liquid-glass relative overflow-hidden">
            <h3 className="text-3xl md:text-5xl font-normal mb-6 relative z-10">
              Transform your digital presence
            </h3>
            <p className="text-muted-foreground text-xl mb-10 relative z-10 max-w-2xl mx-auto">
              Partner with Verexa to build resilient, scalable, and beautifully designed digital solutions.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 liquid-glass text-foreground hover:bg-white/10 transition-all duration-300 ease-in-out px-8 py-4 rounded-xl font-medium group relative z-10 text-lg"
            >
              Get Started
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
