import type { Metadata } from "next";
import { ChevronLeft, Clock } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

import { AssessmentCta } from "@/components/assessment-cta";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { Reveal } from "@/components/page-transition";
import { insights } from "@/lib/insights";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return insights.map((insight) => ({ slug: insight.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const insight = insights.find((item) => item.slug === slug);
  if (!insight) return { title: "Insight Not Found" };
  return {
    title: { absolute: `${insight.title} | Verexa Technologies` },
    description: insight.description,
    alternates: { canonical: `/insights/${insight.slug}` },
    openGraph: {
      title: `${insight.title} | Verexa Technologies`,
      description: insight.description,
      url: `/insights/${insight.slug}`,
      type: "article",
    },
  };
}

export default async function InsightPage({ params }: Props) {
  const { slug } = await params;
  const insight = insights.find((item) => item.slug === slug);
  if (!insight) notFound();

  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <Navbar />
      <article>
        <header className="pb-16 pt-36 md:pb-20 md:pt-44">
          <Reveal priority className="mx-auto max-w-4xl px-6">
            <Link href="/insights" className="mb-10 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
              <ChevronLeft className="h-4 w-4" /> Back to insights
            </Link>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">{insight.category}</p>
            <h1 className="mt-5 bg-linear-to-b from-foreground from-20% to-muted-foreground bg-clip-text text-5xl font-normal leading-[1.04] text-transparent sm:text-6xl">
              {insight.title}
            </h1>
            <p className="mt-7 text-xl leading-relaxed text-muted-foreground">{insight.description}</p>
            <div className="mt-7 flex items-center gap-4 text-sm text-muted-foreground">
              <span>{insight.published}</span>
              <span>·</span>
              <span className="inline-flex items-center gap-2"><Clock className="h-4 w-4" /> {insight.readingTime}</span>
            </div>
          </Reveal>
        </header>

        <div className="border-y border-white/5 bg-card/10 py-16 md:py-20">
          <div className="mx-auto max-w-3xl space-y-14 px-6">
            {insight.sections.map((section, index) => (
              <Reveal key={section.heading} delay={index * 0.04}>
                <section>
                <h2 className="text-3xl font-normal leading-tight">{section.heading}</h2>
                <div className="mt-6 space-y-5 text-lg leading-8 text-muted-foreground">
                  {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
                {section.bullets && (
                  <ul className="mt-7 space-y-3">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3 leading-relaxed text-foreground/82">
                        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}
                </section>
              </Reveal>
            ))}
          </div>
        </div>
      </article>
      <AssessmentCta />
      <Footer />
    </main>
  );
}
