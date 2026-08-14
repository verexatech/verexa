import { ChevronRight, CheckCircle2, MapPin } from "lucide-react";
import Link from "next/link";

import { AssessmentCta } from "@/components/assessment-cta";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { Reveal } from "@/components/page-transition";
import { company } from "@/lib/company";
import { assessmentHref, deliverySteps } from "@/lib/site";

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-x-clip bg-background text-foreground">
      <Navbar />

      <section className="relative overflow-hidden pb-20 pt-36 md:pb-28 md:pt-48">
        <div className="absolute left-1/2 top-20 h-96 w-[800px] -translate-x-1/2 rounded-full bg-primary/8 blur-[140px]" />
        <Reveal priority className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="max-w-5xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Why Verexa exists
            </p>
            <h1 className="bg-linear-to-b from-foreground from-20% to-muted-foreground bg-clip-text text-5xl font-normal leading-[1.02] text-transparent sm:text-6xl lg:text-7xl">
              Modernize operations without building a large internal technology team.
            </h1>
            <p className="mt-8 max-w-3xl text-xl leading-relaxed text-muted-foreground md:text-2xl">
              Verexa helps growing GTA businesses automate repetitive work,
              build software that fits, and take ownership of the technology
              behind the operation.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <Link
                href={assessmentHref}
                data-cta="about-assessment"
                className="inline-flex min-h-12 items-center gap-2 rounded-full bg-primary px-6 font-semibold text-primary-foreground"
              >
                Book a Technology Assessment <ChevronRight className="h-4 w-4" />
              </Link>
              <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" /> {company.contact.location}
              </span>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="border-y border-white/5 bg-card/10 py-20 md:py-28">
        <Reveal className="mx-auto max-w-7xl px-6">
          <div className="mb-12 max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Our point of view
            </p>
            <h2 className="text-4xl font-normal leading-tight sm:text-5xl">
              Technology is useful when the work becomes better.
            </h2>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {company.principles.map((principle) => (
              <article
                key={principle.id}
                className="rounded-[30px] border border-white/8 bg-background/55 p-7 sm:p-8"
              >
                <p className="mb-8 text-sm font-semibold tracking-widest text-primary">
                  {principle.id}
                </p>
                <h3 className="text-2xl font-medium leading-tight">{principle.title}</h3>
                <p className="mt-5 leading-relaxed text-muted-foreground">
                  {principle.description}
                </p>
              </article>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="py-20 md:py-28">
        <Reveal className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              What partnership means
            </p>
            <h2 className="text-4xl font-normal leading-tight sm:text-5xl">
              Clear scope before ambitious promises.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Every engagement should make the expected result, responsibilities,
              assumptions, support coverage, and decisions easy to understand.
              If a specialist is required, that should be explicit too.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {company.reasons.map((reason) => (
              <article
                key={reason.title}
                className="rounded-3xl border border-white/8 bg-card/25 p-6"
              >
                <CheckCircle2 className="mb-5 h-5 w-5 text-primary" />
                <h3 className="text-xl font-medium">{reason.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  {reason.description}
                </p>
              </article>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="border-y border-white/5 bg-card/10 py-20 md:py-28">
        <Reveal className="mx-auto max-w-7xl px-6">
          <div className="mb-12 max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              How we work
            </p>
            <h2 className="text-4xl font-normal sm:text-5xl">
              One partner from discovery through management.
            </h2>
          </div>
          <div className="grid gap-px overflow-hidden rounded-[32px] border border-white/8 bg-white/8 md:grid-cols-4">
            {deliverySteps.map((step) => (
              <article key={step.id} className="min-h-64 bg-background p-7 sm:p-8">
                <p className="mb-9 text-sm font-semibold tracking-widest text-primary">{step.id}</p>
                <h3 className="text-2xl font-medium">{step.title}</h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">{step.description}</p>
              </article>
            ))}
          </div>
        </Reveal>
      </section>

      <AssessmentCta />
      <Footer />
    </main>
  );
}
