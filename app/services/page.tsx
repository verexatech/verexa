"use client";

import { ChevronRight, Check } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

import { AssessmentCta } from "@/components/assessment-cta";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import {
  AIGraphic,
  CloudGraphic,
  SupportGraphic,
  WebGraphic,
} from "@/components/service-graphics";
import { additionalCapabilities, services } from "@/lib/services";

const graphicMap = {
  software: <WebGraphic />,
  cloud: <CloudGraphic />,
  ai: <AIGraphic />,
  managed: <SupportGraphic />,
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <Navbar />

      <section className="relative overflow-hidden pb-16 pt-36 text-center md:pb-24 md:pt-48">
        <div className="absolute left-1/2 top-20 h-96 w-[800px] -translate-x-1/2 rounded-full bg-primary/8 blur-[140px]" />
        <div className="relative z-10 mx-auto max-w-5xl px-6">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-primary"
          >
            Services
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-linear-to-b from-foreground from-20% to-muted-foreground bg-clip-text text-5xl font-normal leading-[1.02] text-transparent sm:text-6xl lg:text-7xl"
          >
            Improve the operation,
            <br />
            then choose the technology.
          </motion.h1>
          <p className="mx-auto mt-7 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Verexa helps GTA businesses automate repetitive work, build focused
            software, and manage the systems those workflows depend on.
          </p>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="mx-auto flex max-w-7xl flex-col gap-24 px-6 md:gap-32">
          {services.map((service, index) => {
            const reverse = index % 2 !== 0;
            return (
              <motion.article
                key={service.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-70px" }}
                transition={{ duration: 0.65 }}
                className={`flex flex-col items-center gap-12 lg:gap-20 ${
                  reverse ? "lg:flex-row-reverse" : "lg:flex-row"
                }`}
              >
                <div className="flex-1">
                  <div className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                    {service.id} · {service.primary ? "Primary service" : "Supporting capability"}
                  </div>
                  <h2 className="text-4xl font-normal leading-tight sm:text-5xl">
                    {service.title}
                  </h2>
                  <p className="mt-5 text-xl text-foreground/75">{service.tagline}</p>
                  <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                    {service.features.slice(0, 4).map((feature) => (
                      <li key={feature} className="flex gap-3 text-sm text-foreground/80">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/services/${service.slug}`}
                    className="mt-8 inline-flex items-center gap-2 font-medium text-primary"
                  >
                    Explore {service.shortTitle}
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>

                <div className="w-full flex-1">
                  <div className="relative mx-auto flex h-[390px] w-full max-w-lg items-center justify-center overflow-hidden rounded-[36px] border border-white/8 bg-card/30 shadow-2xl">
                    {graphicMap[service.graphicId]}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-white/5 bg-card/10 py-14">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.65 }}
          className="mx-auto max-w-7xl px-6"
        >
          <p className="mb-5 font-medium">Additional capabilities used within projects</p>
          <div className="flex flex-wrap gap-2">
            {additionalCapabilities.map((capability) => (
              <span
                key={capability}
                className="rounded-full border border-white/10 bg-background/50 px-4 py-2 text-sm text-muted-foreground"
              >
                {capability}
              </span>
            ))}
          </div>
        </motion.div>
      </section>

      <AssessmentCta />
      <Footer />
    </main>
  );
}
