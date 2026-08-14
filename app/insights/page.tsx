import { ChevronRight, Clock } from "lucide-react";
import Link from "next/link";

import { AssessmentCta } from "@/components/assessment-cta";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { Reveal } from "@/components/page-transition";
import { insights } from "@/lib/insights";

export default function InsightsPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <Navbar />
      <section className="pb-16 pt-36 text-center md:pb-24 md:pt-48">
        <Reveal priority className="mx-auto max-w-5xl px-6">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-primary">Insights</p>
          <h1 className="bg-linear-to-b from-foreground from-20% to-muted-foreground bg-clip-text text-5xl font-normal leading-[1.02] text-transparent sm:text-6xl lg:text-7xl">
            Practical thinking for
            <br />
            better business systems.
          </h1>
          <p className="mx-auto mt-7 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Clear guidance on automation, internal software, and the workflows
            behind growing GTA businesses.
          </p>
        </Reveal>
      </section>

      <section className="pb-24 md:pb-32">
        <Reveal className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-2">
          {insights.map((insight) => (
            <article
              key={insight.slug}
              className="flex min-h-[360px] flex-col rounded-[32px] border border-white/8 bg-card/30 p-7 sm:p-9"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                {insight.category}
              </p>
              <h2 className="mt-6 text-3xl font-normal leading-tight">{insight.title}</h2>
              <p className="mt-5 leading-relaxed text-muted-foreground">{insight.description}</p>
              <div className="mt-auto flex items-center justify-between gap-5 pt-8">
                <span className="inline-flex items-center gap-2 text-xs text-muted-foreground">
                  <Clock className="h-3.5 w-3.5" /> {insight.readingTime}
                </span>
                <Link
                  href={`/insights/${insight.slug}`}
                  className="inline-flex items-center gap-2 font-medium text-primary"
                >
                  Read article <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </Reveal>
      </section>
      <AssessmentCta />
      <Footer />
    </main>
  );
}
