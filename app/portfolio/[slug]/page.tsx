import type { Metadata } from "next";
import { ChevronLeft, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { AssessmentCta } from "@/components/assessment-cta";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { Reveal } from "@/components/page-transition";
import { caseStudies } from "@/lib/case-studies";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((item) => item.slug === slug);
  if (!study) return { title: "Case Study Not Found" };

  return {
    title: { absolute: `${study.name} Case Study | Verexa Technologies` },
    description: study.summary,
    alternates: { canonical: `/portfolio/${study.slug}` },
    openGraph: {
      title: `${study.name} Case Study | Verexa Technologies`,
      description: study.summary,
      images: [{ url: study.image, alt: `${study.name} product interface` }],
      type: "article",
    },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = caseStudies.find((item) => item.slug === slug);
  if (!study) notFound();

  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <Navbar />

      <section className="pb-14 pt-36 md:pb-20 md:pt-44">
        <Reveal priority className="mx-auto max-w-7xl px-6">
          <Link
            href="/portfolio"
            className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary"
          >
            <ChevronLeft className="h-4 w-4" /> Back to all work
          </Link>
          <div className="max-w-4xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              {study.label} · Case study
            </p>
            <h1 className="bg-linear-to-b from-foreground from-20% to-muted-foreground bg-clip-text text-5xl font-normal leading-[1.02] text-transparent sm:text-6xl lg:text-7xl">
              {study.name}
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-muted-foreground md:text-2xl">
              {study.tagline}
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {study.services.map((service) => (
                <span
                  key={service}
                  className="rounded-full border border-primary/20 bg-primary/8 px-3 py-1.5 text-xs text-primary"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="pb-20">
        <Reveal className="mx-auto max-w-7xl px-6">
          <div className="relative aspect-video overflow-hidden rounded-[36px] border border-white/8 bg-card/30 shadow-2xl">
            <Image
              src={study.image}
              alt={`${study.name} product interface`}
              fill
              priority
              className="object-cover object-top"
              sizes="100vw"
            />
          </div>
        </Reveal>
      </section>

      <section className="border-y border-white/5 bg-card/10 py-20 md:py-28">
        <Reveal className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Problem</p>
            <h2 className="mt-4 text-3xl font-normal sm:text-4xl">The job the product needed to do.</h2>
          </div>
          <p className="text-xl leading-relaxed text-muted-foreground">{study.problem}</p>
        </Reveal>
      </section>

      <section className="py-20 md:py-28">
        <Reveal className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2">
          <CaseStudyBlock title="Solution" items={study.solution} />
          <CaseStudyBlock title="Engineering focus" items={study.engineering} />
        </Reveal>
      </section>

      <section className="border-y border-white/5 bg-card/10 py-20 md:py-28">
        <Reveal className="mx-auto max-w-7xl px-6">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Outcome</p>
              <h2 className="mt-4 text-3xl font-normal sm:text-4xl">What the live product enables.</h2>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
                These are demonstrated product capabilities, not unsupported
                revenue, adoption, or time-saving estimates.
              </p>
            </div>
            <ul className="space-y-4">
              {study.outcomes.map((outcome) => (
                <li
                  key={outcome}
                  className="rounded-2xl border border-white/8 bg-background/55 p-5 leading-relaxed text-foreground/85"
                >
                  {outcome}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-12">
            <Link
              href={study.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 font-medium hover:bg-white/10"
            >
              Visit {study.name} <ExternalLink className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </section>

      <AssessmentCta />
      <Footer />
    </main>
  );
}

function CaseStudyBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <p className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-primary">{title}</p>
      <div className="space-y-4">
        {items.map((item) => (
          <p
            key={item}
            className="rounded-2xl border border-white/8 bg-card/25 p-5 leading-relaxed text-muted-foreground"
          >
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}
