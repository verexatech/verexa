import { ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

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
import { Reveal } from "@/components/page-transition";
import { industries } from "@/lib/industries";
import { assessmentHref } from "@/lib/site";

const graphicMap = {
  "real-estate": <RealEstateGraphic />,
  healthcare: <HealthcareGraphic />,
  legal: <LegalGraphic />,
  construction: <ConstructionGraphic />,
  "food-retail": <FoodRetailGraphic />,
};

export function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = industries.find((item) => item.slug === slug);

  if (!industry) notFound();

  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <Navbar />

      <section className="relative overflow-hidden pb-16 pt-36 md:pb-24 md:pt-44">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-size-[64px_64px]" />
        <Reveal priority className="relative z-10 mx-auto max-w-7xl px-6">
          <Link
            href="/industries"
            className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary"
          >
            <ChevronLeft className="h-4 w-4" /> Back to industry solutions
          </Link>
          <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-24">
            <div className="flex-1">
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                {industry.featured ? "Focus industry" : "Additional industry"}
              </p>
              <h1 className="bg-linear-to-b from-foreground from-20% to-muted-foreground bg-clip-text text-5xl font-normal leading-[1.02] text-transparent sm:text-6xl lg:text-7xl">
                {industry.title}
              </h1>
              <p className="mt-6 max-w-2xl text-xl leading-relaxed text-muted-foreground md:text-2xl">
                {industry.tagline}
              </p>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-foreground/72">
                {industry.description}
              </p>
              <Link
                href={assessmentHref}
                data-cta={`industry-${industry.slug}-assessment`}
                className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-full bg-primary px-6 font-semibold text-primary-foreground"
              >
                Discuss your workflow <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="w-full flex-1">
              <div className="relative mx-auto flex h-[430px] w-full max-w-lg items-center justify-center overflow-hidden rounded-[40px] border border-white/8 bg-card/25 shadow-2xl">
                {graphicMap[industry.graphicId]}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="border-t border-white/5 py-20 md:py-28">
        <Reveal className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Operating context
            </p>
            {industry.detailedDescription.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="rounded-[32px] border border-white/8 bg-card/30 p-7 sm:p-8">
            <h2 className="text-2xl font-medium">Common opportunities</h2>
            <ul className="mt-7 space-y-4">
              {industry.features.map((feature) => (
                <li key={feature} className="flex gap-3 text-foreground/85">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>

      <section className="border-y border-white/5 bg-card/10 py-20 md:py-28">
        <Reveal className="mx-auto max-w-7xl px-6">
          <div className="mb-12 max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Example workflows
            </p>
            <h2 className="text-4xl font-normal sm:text-5xl">
              Concrete places to start.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {industry.examples.map((example) => (
              <article
                key={example.title}
                className="rounded-[30px] border border-white/8 bg-background/55 p-7"
              >
                <h3 className="text-xl font-medium">{example.title}</h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  {example.description}
                </p>
              </article>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="py-20 md:py-28">
        <Reveal className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Approach
            </p>
            <h2 className="mb-10 text-4xl font-normal">Follow the work before changing the tools.</h2>
            <div className="space-y-3">
              {industry.process.map((step) => (
                <article
                  key={step.step}
                  className="grid grid-cols-[auto_1fr] gap-5 rounded-2xl border border-white/8 bg-card/20 p-5"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/12 text-sm font-semibold text-primary">
                    {step.step}
                  </span>
                  <div>
                    <h3 className="text-lg font-medium">{step.title}</h3>
                    <p className="mt-1 leading-relaxed text-muted-foreground">{step.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <aside className="space-y-5 lg:pt-16">
            <div className="rounded-[32px] border border-white/8 bg-card/30 p-7 sm:p-8">
              <h2 className="text-2xl font-medium">What better can look like</h2>
              <div className="mt-8 space-y-7">
                {industry.benefits.map((benefit) => (
                  <div key={benefit.title}>
                    <h3 className="font-medium">{benefit.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[32px] border border-white/8 bg-background p-7 sm:p-8">
              <h2 className="text-lg font-medium">Systems often involved</h2>
              <div className="mt-5 flex flex-wrap gap-2">
                {industry.integrations.map((integration) => (
                  <span
                    key={integration}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-muted-foreground"
                  >
                    {integration}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </Reveal>
      </section>

      <AssessmentCta compact />
      <Footer />
    </main>
  );
}
