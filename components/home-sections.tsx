"use client";

import {
  ChevronRight,
  FileStack,
  Inbox,
  Link2Off,
  MessagesSquare,
  Sheet,
} from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

import { featuredCaseStudies } from "@/lib/case-studies";
import { company } from "@/lib/company";
import { featuredIndustries } from "@/lib/industries";
import { assessmentHref, deliverySteps } from "@/lib/site";

const problemIcons = [Inbox, Link2Off, Sheet, MessagesSquare, FileStack];

const problems = [
  {
    title: "Manual admin keeps growing",
    description:
      "Information is copied between inboxes, forms, documents, and business systems.",
  },
  {
    title: "Systems do not talk",
    description:
      "Useful tools are in place, but every handoff still depends on a person.",
  },
  {
    title: "Spreadsheets became the operation",
    description:
      "Critical work is hard to track, share, validate, and manage as the team grows.",
  },
  {
    title: "The same questions repeat",
    description:
      "Customers and employees wait for answers that already exist somewhere in the business.",
  },
  {
    title: "Technology lacks an owner",
    description:
      "Applications and automations matter to the business, but nobody is responsible for keeping them healthy.",
  },
];

export function ProblemsSection() {
  return (
    <section id="problems" className="scroll-mt-28 border-t border-white/5 bg-card/10 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.35fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-70px" }}
            transition={{ duration: 0.65 }}
            className="lg:sticky lg:top-32"
          >
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Problems we solve
            </p>
            <h2 className="text-4xl font-normal leading-tight sm:text-5xl">
              When the business outgrows the way work gets done.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              You do not need an “AI project.” You need a process that takes less
              time, loses less information, and is easier to manage.
            </p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {problems.map((problem, index) => {
              const Icon = problemIcons[index];
              return (
                <motion.article
                  key={problem.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-70px" }}
                  transition={{ duration: 0.65, delay: index * 0.08 }}
                  className={`rounded-3xl border border-white/8 bg-background/45 p-6 ${index === problems.length - 1 ? "sm:col-span-2" : ""}`}
                >
                  <Icon className="mb-6 h-6 w-6 text-primary" />
                  <h3 className="mb-3 text-xl font-medium">{problem.title}</h3>
                  <p className="leading-relaxed text-muted-foreground">
                    {problem.description}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export function IndustryExamplesSection() {
  return (
    <section className="border-t border-white/5 bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.65 }}
          className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Where we focus
            </p>
            <h2 className="text-4xl font-normal leading-tight sm:text-5xl lg:text-6xl">
              Workflows with real operating context.
            </h2>
          </div>
          <Link
            href="/industries"
            className="inline-flex items-center gap-2 font-medium text-primary"
          >
            View all industries <ChevronRight className="h-4 w-4" />
          </Link>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          {featuredIndustries.map((industry, index) => (
            <motion.article
              key={industry.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-70px" }}
              transition={{ duration: 0.65, delay: index * 0.08 }}
              className="group rounded-[32px] border border-white/8 bg-card/30 p-7 transition-colors hover:border-primary/30 sm:p-8"
            >
              <div className="mb-7 text-sm font-semibold tracking-widest text-primary">
                {industry.id}
              </div>
              <h3 className="mb-4 text-2xl font-medium">{industry.shortTitle}</h3>
              <p className="mb-7 leading-relaxed text-muted-foreground">
                {industry.description}
              </p>
              <div className="mb-8 space-y-4">
                {industry.examples.slice(0, 3).map((example) => (
                  <div key={example.title} className="border-l border-primary/40 pl-4">
                    <p className="font-medium text-foreground/90">{example.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {example.description}
                    </p>
                  </div>
                ))}
              </div>
              <Link
                href={`/industries/${industry.slug}`}
                className="inline-flex items-center gap-2 font-medium text-primary"
              >
                Explore solutions
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FeaturedWorkSection() {
  return (
    <section className="border-t border-white/5 bg-card/10 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.65 }}
          className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Selected work
            </p>
            <h2 className="text-4xl font-normal leading-tight sm:text-5xl lg:text-6xl">
              Products built around a clear job.
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 font-medium text-primary"
          >
            See all work <ChevronRight className="h-4 w-4" />
          </Link>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          {featuredCaseStudies.map((study, index) => (
            <motion.article
              key={study.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-70px" }}
              transition={{ duration: 0.65, delay: index * 0.08 }}
              className="group overflow-hidden rounded-[32px] border border-white/8 bg-background/55"
            >
              <Link href={`/portfolio/${study.slug}`} className="block">
                <div className="relative aspect-video overflow-hidden border-b border-white/5">
                  <Image
                    src={study.image}
                    alt={`${study.name} product interface`}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>
                <div className="p-7">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                    {study.label}
                  </p>
                  <h3 className="mb-3 text-2xl font-medium">{study.name}</h3>
                  <p className="mb-6 leading-relaxed text-muted-foreground">
                    {study.summary}
                  </p>
                  <span className="inline-flex items-center gap-2 font-medium text-primary">
                    Read case study
                    <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProcessSection() {
  return (
    <section className="border-t border-white/5 bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.65 }}
          className="mb-14 max-w-3xl"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            How Verexa works
          </p>
          <h2 className="text-4xl font-normal leading-tight sm:text-5xl lg:text-6xl">
            From one useful improvement to a system you can depend on.
          </h2>
        </motion.div>
        <div className="grid gap-px overflow-hidden rounded-[32px] border border-white/8 bg-white/8 md:grid-cols-4">
          {deliverySteps.map((step, index) => (
            <motion.article
              key={step.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-70px" }}
              transition={{ duration: 0.65, delay: index * 0.08 }}
              className="min-h-64 bg-card p-7 sm:p-8"
            >
              <p className="mb-10 text-sm font-semibold tracking-widest text-primary">
                {step.id}
              </p>
              <h3 className="mb-4 text-2xl font-medium">{step.title}</h3>
              <p className="leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhyVerexaSection() {
  return (
    <section className="border-t border-white/5 bg-card/10 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.65 }}
          className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-start"
        >
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Why Verexa
            </p>
            <h2 className="text-4xl font-normal leading-tight sm:text-5xl">
              A local technology partner that stays close to the operation.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              {company.shortDescription}
            </p>
            <Link
              href={assessmentHref}
              data-cta="why-assessment"
              className="mt-8 inline-flex items-center gap-2 font-medium text-primary"
            >
              Discuss your workflow <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {company.reasons.map((reason) => (
              <article
                key={reason.title}
                className="rounded-3xl border border-white/8 bg-background/45 p-6"
              >
                <h3 className="mb-3 text-xl font-medium">{reason.title}</h3>
                <p className="leading-relaxed text-muted-foreground">
                  {reason.description}
                </p>
              </article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
