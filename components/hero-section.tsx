"use client";

import { ChevronRight, MapPin } from "lucide-react";
import Link from "next/link";

import { Reveal } from "@/components/page-transition";
import { Button } from "@/components/ui/button";
import { assessmentHref } from "@/lib/site";

export function HeroSection() {
  return (
    <section className="relative min-h-[820px] overflow-hidden bg-background">
      <div className="absolute inset-x-0 top-0 z-10 h-40 bg-linear-to-b from-background to-transparent" />
      <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_50%_35%,transparent_0%,hsl(var(--background)/0.16)_42%,hsl(var(--background))_82%)]" />

      <video
        autoPlay
        loop
        muted
        playsInline
        preload="none"
        poster="/hero-poster.webp"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-center opacity-55"
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>

      <Reveal
        priority
        className="relative z-20 mx-auto flex min-h-[820px] max-w-7xl flex-col items-center justify-center px-6 pb-20 pt-36 text-center"
      >
        <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-background/50 px-4 py-2 text-sm text-foreground/80 backdrop-blur-xl">
          <MapPin className="h-4 w-4 text-primary" />
          Serving businesses across the GTA
        </div>

        <h1 className="max-w-6xl bg-linear-to-b from-foreground from-20% to-muted-foreground bg-clip-text pb-5 text-5xl font-normal leading-[0.98] tracking-tight text-transparent sm:text-6xl lg:text-[84px]">
          AI Automation &amp;
          <br />
          Managed Technology
          <span className="mt-3 block text-3xl sm:text-4xl lg:text-5xl">
            for GTA businesses
          </span>
        </h1>

        <p className="max-w-3xl text-lg leading-8 text-foreground/75 sm:text-xl">
          Automate repetitive work, build better internal systems, and keep the
          technology behind your business running.
        </p>

        <div className="mt-9 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
          <Link
            href={assessmentHref}
            data-cta="hero-assessment"
            className="w-full sm:w-auto"
          >
            <Button variant="hero" className="h-14 w-full rounded-full px-7! text-base font-semibold sm:w-auto">
              Book a Technology Assessment
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link href="#problems" data-cta="hero-automation" className="w-full sm:w-auto">
            <Button
              variant="heroSecondary"
              className="h-14 w-full rounded-full px-7 text-base font-semibold sm:w-auto"
            >
              See What We Automate
            </Button>
          </Link>
        </div>

        <p className="mt-5 text-sm text-muted-foreground">
          Bring us one workflow that takes too much time. We’ll help you decide
          what is worth fixing first.
        </p>
      </Reveal>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-56 bg-linear-to-b from-transparent to-background" />
    </section>
  );
}
