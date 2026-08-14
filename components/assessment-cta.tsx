"use client";

import { ChevronRight, ClipboardCheck } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

import { assessmentHref } from "@/lib/site";

export function AssessmentCta({
  compact = false,
}: {
  compact?: boolean;
}) {
  return (
    <section className={compact ? "py-16" : "border-t border-white/5 py-24 md:py-32"}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-70px" }}
        transition={{ duration: 0.65 }}
        className="mx-auto max-w-5xl px-6"
      >
        <div className="relative overflow-hidden rounded-[36px] border border-primary/25 bg-card/55 p-8 text-center shadow-2xl sm:p-12 md:p-16">
          <div className="absolute left-1/2 top-0 h-64 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[110px]" />
          <ClipboardCheck className="relative z-10 mx-auto mb-6 h-8 w-8 text-primary" />
          <h2 className="relative z-10 mx-auto max-w-3xl text-3xl font-normal leading-tight sm:text-4xl md:text-5xl">
            Find the first technology improvement worth making.
          </h2>
          <p className="relative z-10 mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Show us the workflow, system, or recurring problem. We’ll help you
            identify practical next steps and where automation can save time.
          </p>
          <div className="relative z-10 mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href={assessmentHref}
              data-cta="assessment-banner"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Book a Technology Assessment
              <ChevronRight className="h-4 w-4" />
            </Link>
            <Link
              href="/resources/automation-assessment"
              data-cta="assessment-checklist"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 font-medium text-foreground transition-colors hover:bg-white/10"
            >
              Use the Self-Assessment
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
