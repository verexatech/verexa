"use client";

import { ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

import { AssessmentCta } from "@/components/assessment-cta";
import { Footer } from "@/components/footer";
import {
  ConstructionGraphic,
  FoodRetailGraphic,
  HealthcareGraphic,
  LegalGraphic,
  RealEstateGraphic,
} from "@/components/industry-graphics";
import { Navbar } from "@/components/navbar";
import { featuredIndustries, industries } from "@/lib/industries";

const graphics = {
  "real-estate": <RealEstateGraphic />,
  healthcare: <HealthcareGraphic />,
  legal: <LegalGraphic />,
  construction: <ConstructionGraphic />,
  "food-retail": <FoodRetailGraphic />,
};

const additionalIndustries = industries.filter((industry) => !industry.featured);

export default function IndustriesPage() {
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
            Industry solutions
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-linear-to-b from-foreground from-20% to-muted-foreground bg-clip-text text-5xl font-normal leading-[1.02] text-transparent sm:text-6xl lg:text-7xl"
          >
            Automation works better
            <br />
            with operating context.
          </motion.h1>
          <p className="mx-auto mt-7 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            We concentrate our sales and solution work where documents,
            coordination, client service, and disconnected systems create clear
            opportunities to improve.
          </p>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Primary focus
              </p>
              <h2 className="text-3xl font-normal sm:text-4xl">Three industries, deeper workflows.</h2>
            </div>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {featuredIndustries.map((industry, index) => (
              <motion.article
                key={industry.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-70px" }}
                transition={{ duration: 0.65, delay: index * 0.08 }}
                className="group flex flex-col overflow-hidden rounded-[32px] border border-white/8 bg-card/30"
              >
                <div className="relative flex h-60 items-center justify-center overflow-hidden border-b border-white/5 bg-background/40">
                  <div className="scale-90">{graphics[industry.graphicId]}</div>
                </div>
                <div className="flex flex-1 flex-col p-7 sm:p-8">
                  <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                    Focus industry {industry.id}
                  </p>
                  <h2 className="text-2xl font-medium">{industry.shortTitle}</h2>
                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    {industry.description}
                  </p>
                  <ul className="my-7 space-y-3 text-sm text-foreground/78">
                    {industry.features.slice(0, 4).map((feature) => (
                      <li key={feature} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/industries/${industry.slug}`}
                    className="mt-auto inline-flex items-center gap-2 font-medium text-primary"
                  >
                    Explore {industry.shortTitle}
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/5 bg-card/10 py-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.65 }}
          className="mx-auto max-w-7xl px-6"
        >
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Additional experience
            </p>
            <h2 className="text-3xl font-normal sm:text-4xl">
              Available where the scope and responsibilities are clear.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {additionalIndustries.map((industry) => (
              <article
                key={industry.slug}
                className="rounded-[30px] border border-white/8 bg-background/50 p-7 sm:p-8"
              >
                <h3 className="text-2xl font-medium">{industry.title}</h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  {industry.description}
                </p>
                <Link
                  href={`/industries/${industry.slug}`}
                  className="mt-6 inline-flex items-center gap-2 font-medium text-primary"
                >
                  View industry solutions <ChevronRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </motion.div>
      </section>

      <AssessmentCta />
      <Footer />
    </main>
  );
}
