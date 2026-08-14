"use client";

import { ChevronRight, ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

import { AssessmentCta } from "@/components/assessment-cta";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { caseStudies } from "@/lib/case-studies";

export default function PortfolioPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <Navbar />

      <section className="relative overflow-hidden pb-16 pt-36 text-center md:pb-24 md:pt-48">
        <div className="absolute left-1/2 top-20 h-96 w-[800px] -translate-x-1/2 rounded-full bg-primary/8 blur-[140px]" />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0 }}
          className="relative z-10 mx-auto max-w-5xl px-6"
        >
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Selected work
          </p>
          <h1 className="bg-linear-to-b from-foreground from-20% to-muted-foreground bg-clip-text text-5xl font-normal leading-[1.02] text-transparent sm:text-6xl lg:text-7xl">
            Problems, products,
            <br />
            and the work between.
          </h1>
          <p className="mx-auto mt-7 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            These case studies explain what each product needed to do, how the
            solution was shaped, and what the live product now enables.
          </p>
        </motion.div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="mx-auto flex max-w-7xl flex-col gap-24 px-6 md:gap-32">
          {caseStudies.map((study, index) => {
            const reverse = index % 2 !== 0;
            return (
              <motion.article
                key={study.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-70px" }}
                transition={{ duration: 0.65, delay: 0 }}
                className={`flex flex-col items-center gap-10 lg:gap-20 ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"}`}
              >
                <div className="flex-1">
                  <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                    {study.number} · {study.label}
                  </p>
                  <h2 className="text-4xl font-normal sm:text-5xl">{study.name}</h2>
                  <p className="mt-4 text-xl text-foreground/78">{study.tagline}</p>
                  <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                    {study.summary}
                  </p>
                  <div className="mt-7 flex flex-wrap gap-2">
                    {study.services.map((service) => (
                      <span
                        key={service}
                        className="rounded-full border border-primary/20 bg-primary/8 px-3 py-1.5 text-xs text-primary"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                  <div className="mt-8 flex flex-wrap gap-5">
                    <Link
                      href={`/portfolio/${study.slug}`}
                      className="inline-flex items-center gap-2 font-medium text-primary"
                    >
                      Read case study <ChevronRight className="h-4 w-4" />
                    </Link>
                    <Link
                      href={study.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-medium text-muted-foreground hover:text-foreground"
                    >
                      Visit product <ExternalLink className="h-4 w-4" />
                    </Link>
                  </div>
                </div>

                <div className="w-full flex-1">
                  <Link
                    href={`/portfolio/${study.slug}`}
                    className="group block overflow-hidden rounded-[32px] border border-white/8 bg-card/30 shadow-2xl"
                  >
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={study.image}
                        alt={`${study.name} product interface`}
                        fill
                        className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-background/0 transition-colors group-hover:bg-background/20">
                        <span className="flex translate-y-2 items-center gap-2 rounded-full border border-white/15 bg-background/70 px-4 py-2 text-sm font-medium opacity-0 backdrop-blur-xl transition-all group-hover:translate-y-0 group-hover:opacity-100">
                          View case study <ChevronRight className="h-4 w-4" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-white/5 bg-card/10 py-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.65, delay: 0 }}
          className="mx-auto max-w-4xl px-6 text-center"
        >
          <h2 className="text-3xl font-normal sm:text-4xl">Evidence over inflated numbers.</h2>
          <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-muted-foreground">
            We describe the products and capabilities that can be verified. As
            measured business outcomes become available, they can be added with
            their scope and source.
          </p>
        </motion.div>
      </section>

      <AssessmentCta />
      <Footer />
    </main>
  );
}
