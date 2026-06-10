"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import {
  WebGraphic,
  MobileGraphic,
  CloudGraphic,
  SupportGraphic,
  DesignGraphic,
  AIGraphic,
} from "@/components/service-graphics";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import { services } from "@/lib/services";

const graphicMap = {
  web: <WebGraphic />,
  mobile: <MobileGraphic />,
  cloud: <CloudGraphic />,
  ai: <AIGraphic />,
  support: <SupportGraphic />,
  design: <DesignGraphic />
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/30 relative overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-36 pb-12 md:pt-48 md:pb-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-normal leading-[1.05] bg-linear-to-b from-foreground from-20% to-muted-foreground sm:from-foreground sm:from-30% sm:to-muted-foreground to-100% bg-clip-text text-transparent mb-6"
          >
            What We Do
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
            className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
          >
            From captivating web designs to robust cloud infrastructures, our
            GTA-based team engineers end-to-end digital solutions that scale
            with your ambitions.
          </motion.p>
        </div>
      </section>

      {/* Services List Section */}
      <section className="py-20 bg-background relative z-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col gap-32">
          {services.map((service, index) => {
            const isEven = index % 2 !== 0;

            return (
              <div
                key={service.id}
                className={`flex flex-col ${
                  isEven ? "md:flex-row-reverse" : "md:flex-row"
                } items-center gap-12 md:gap-20`}
              >
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="flex-1 space-y-6"
                >
                  <div className="text-primary text-sm font-bold tracking-widest uppercase">
                    {service.id}. {service.title}
                  </div>
                  <h2 className="text-3xl md:text-5xl font-normal leading-tight">
                    {service.tagline}
                  </h2>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mt-6 text-muted-foreground">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4">
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium group"
                    >
                      Learn more about {service.title}
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className={`flex-1 w-full flex ${
                    isEven ? "justify-start" : "justify-end"
                  } items-center`}
                >
                  <div className="w-full max-w-md h-[390px] relative rounded-[32px] overflow-hidden bg-card/30 border border-white/5 shadow-2xl flex items-center justify-center liquid-glass group">
                    {graphicMap[service.graphicId]}
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>

        {/* Global CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-4xl mx-auto mt-32 px-6 text-center"
        >
          <div className="bg-card/40 border border-white/10 rounded-3xl p-12 backdrop-blur-md shadow-2xl liquid-glass relative overflow-hidden">
            <h3 className="text-3xl md:text-4xl font-normal mb-4 relative z-10">
              Start your next project with us
            </h3>
            <p className="text-muted-foreground text-lg mb-8 relative z-10">
              Let&apos;s build something extraordinary together.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 liquid-glass text-foreground hover:bg-white/10 transition-all duration-300 ease-in-out px-6 py-3 rounded-xl font-medium group relative z-10"
            >
              Get in Touch
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
