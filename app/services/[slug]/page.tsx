import { ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

import { AssessmentCta } from "@/components/assessment-cta";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { Reveal } from "@/components/page-transition";
import {
  AIGraphic,
  CloudGraphic,
  SupportGraphic,
  WebGraphic,
} from "@/components/service-graphics";
import { services } from "@/lib/services";
import { assessmentHref } from "@/lib/site";

const graphicMap = {
  software: <WebGraphic />,
  cloud: <CloudGraphic />,
  ai: <AIGraphic />,
  managed: <SupportGraphic />,
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) notFound();

  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <Navbar />

      <section className="relative overflow-hidden pb-16 pt-36 md:pb-24 md:pt-44">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-size-[64px_64px]" />
        <Reveal priority className="relative z-10 mx-auto max-w-7xl px-6">
          <Link
            href="/services"
            className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            <ChevronLeft className="h-4 w-4" /> Back to services
          </Link>
          <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-24">
            <div className="flex-1">
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                {service.primary ? "Primary service" : "Supporting capability"}
              </p>
              <h1 className="bg-linear-to-b from-foreground from-20% to-muted-foreground bg-clip-text text-5xl font-normal leading-[1.02] text-transparent sm:text-6xl lg:text-7xl">
                {service.title}
              </h1>
              <p className="mt-6 max-w-2xl text-xl leading-relaxed text-muted-foreground md:text-2xl">
                {service.tagline}
              </p>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-foreground/72">
                {service.description}
              </p>
              <Link
                href={assessmentHref}
                data-cta={`service-${service.slug}-assessment`}
                className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-full bg-primary px-6 font-semibold text-primary-foreground"
              >
                Book a Technology Assessment
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="w-full flex-1">
              <div className="relative mx-auto flex h-[430px] w-full max-w-lg items-center justify-center overflow-hidden rounded-[40px] border border-white/8 bg-card/25 shadow-2xl">
                {graphicMap[service.graphicId]}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {service.slug === "custom-business-software" && (
        <div className="relative scroll-mt-32" aria-hidden="true">
          <span id="web-applications" className="absolute scroll-mt-32" />
          <span id="mobile-applications" className="absolute scroll-mt-32" />
          <span id="product-design" className="absolute scroll-mt-32" />
        </div>
      )}

      <section className="border-t border-white/5 py-20 md:py-28">
        <Reveal className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              What this service is for
            </p>
            {service.detailedDescription.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="rounded-[32px] border border-white/8 bg-card/30 p-7 sm:p-8">
            <h2 className="text-2xl font-medium">Capabilities</h2>
            <ul className="mt-7 space-y-4">
              {service.features.map((feature) => (
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
              Practical examples
            </p>
            <h2 className="text-4xl font-normal sm:text-5xl">
              Start with a workflow people recognize.
            </h2>
          </div>
          <div className="grid gap-5 lg:grid-cols-2">
            {service.examples.map((example) => (
              <article
                key={example.title}
                className="rounded-[30px] border border-white/8 bg-background/55 p-7 sm:p-8"
              >
                <h3 className="text-2xl font-medium">{example.title}</h3>
                <div className="mt-6 space-y-5 text-sm leading-relaxed">
                  <div>
                    <p className="mb-1 font-semibold uppercase tracking-wider text-primary">Problem</p>
                    <p className="text-muted-foreground">{example.problem}</p>
                  </div>
                  <div>
                    <p className="mb-1 font-semibold uppercase tracking-wider text-primary">Workflow</p>
                    <p className="text-foreground/82">{example.workflow}</p>
                  </div>
                  <div>
                    <p className="mb-1 font-semibold uppercase tracking-wider text-primary">Result</p>
                    <p className="text-muted-foreground">{example.outcome}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="py-20 md:py-28">
        <Reveal className="mx-auto max-w-7xl px-6">
          <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Delivery
              </p>
              <h2 className="mb-10 text-4xl font-normal">A clear path from problem to ownership.</h2>
              <div className="space-y-3">
                {service.process.map((step) => (
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
            <aside className="lg:pt-16">
              <div className="rounded-[32px] border border-white/8 bg-card/30 p-7 sm:p-8">
                <h2 className="text-2xl font-medium">What you gain</h2>
                <div className="mt-8 space-y-7">
                  {service.benefits.map((benefit) => (
                    <div key={benefit.title}>
                      <h3 className="font-medium text-foreground">{benefit.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {benefit.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-5 rounded-[32px] border border-white/8 bg-background p-7 sm:p-8">
                <h2 className="text-lg font-medium">Common systems and integrations</h2>
                <div className="mt-5 flex flex-wrap gap-2">
                  {service.integrations.map((integration) => (
                    <span
                      key={integration}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-muted-foreground"
                    >
                      {integration}
                    </span>
                  ))}
                </div>
                <p className="mt-5 text-xs leading-relaxed text-muted-foreground">
                  Final platform choices follow discovery and depend on the systems,
                  access, risk, and support model in scope.
                </p>
              </div>
            </aside>
          </div>
        </Reveal>
      </section>

      <AssessmentCta compact />
      <Footer />
    </main>
  );
}
