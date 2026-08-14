"use client";

import { ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

import {
  AIGraphic,
  SupportGraphic,
  WebGraphic,
} from "@/components/service-graphics";
import { additionalCapabilities, primaryServices } from "@/lib/services";

const graphics = [<AIGraphic key="ai" />, <WebGraphic key="software" />, <SupportGraphic key="managed" />];

export function ServicesSection() {
  return (
    <section
      id="solutions"
      className="relative overflow-hidden border-t border-border/10 bg-background py-24 scroll-mt-24 md:py-32"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.65 }}
          className="mb-14 max-w-3xl"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Three ways we help
          </p>
          <h2 className="mb-6 bg-linear-to-b from-foreground from-20% to-muted-foreground bg-clip-text text-4xl font-normal leading-[1.05] text-transparent sm:text-5xl lg:text-6xl">
            Technology tied to the work your business does.
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Start with the operating problem. Then choose the right mix of
            automation, custom software, and ongoing management.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          {primaryServices.map((service, index) => (
            <motion.article
              key={service.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-70px" }}
              transition={{ duration: 0.65, delay: index * 0.08 }}
              className="group flex min-h-[620px] flex-col overflow-hidden rounded-[32px] border border-white/8 bg-card/35 shadow-2xl transition-colors hover:border-primary/30"
            >
              <div className="relative h-64 overflow-hidden border-b border-white/5 bg-background/40">
                <div className="absolute inset-0 flex scale-90 items-center justify-center">
                  {graphics[index]}
                </div>
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-linear-to-b from-transparent to-card/70" />
              </div>
              <div className="flex flex-1 flex-col p-7 sm:p-8">
                <div className="mb-5 text-sm font-semibold tracking-widest text-primary">
                  {service.id}
                </div>
                <h3 className="mb-4 text-2xl font-medium text-foreground">
                  {service.title}
                </h3>
                <p className="mb-7 leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <ul className="mb-8 space-y-3 text-sm text-foreground/78">
                  {service.features.slice(0, 4).map((feature) => (
                    <li key={feature} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/services/${service.slug}`}
                  className="mt-auto inline-flex items-center gap-2 font-medium text-primary transition-colors hover:text-primary/75"
                >
                  Explore {service.shortTitle}
                  <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-10 rounded-3xl border border-white/8 bg-card/20 px-6 py-6 sm:px-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="font-medium text-foreground">Additional capabilities</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Used where they support the larger business solution.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {additionalCapabilities.map((capability) => (
                <span
                  key={capability}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-foreground/75"
                >
                  {capability}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
