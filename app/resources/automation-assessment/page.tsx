"use client";

import { ChevronRight, Check, Download, RotateCcw } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { Reveal } from "@/components/page-transition";
import { assessmentHref } from "@/lib/site";

const groups = [
  {
    title: "Repetition",
    questions: [
      "The same information is entered into more than one system.",
      "A recurring process starts with a predictable email, form, or document.",
      "Staff repeatedly sort, rename, copy, or summarize information.",
    ],
  },
  {
    title: "Delay and visibility",
    questions: [
      "Work waits because the next person does not know it is ready.",
      "Customers or employees regularly ask for status updates.",
      "Managers need manual exports or spreadsheet consolidation to understand what is happening.",
    ],
  },
  {
    title: "Rules and exceptions",
    questions: [
      "Most items follow a known set of steps or validation rules.",
      "A smaller number of exceptions still need human judgement.",
      "The team can explain what a correct result should look like.",
    ],
  },
  {
    title: "Readiness",
    questions: [
      "The process has a clear business owner.",
      "The source information is available in a consistent place or format.",
      "The team is willing to test a smaller first version before expanding it.",
    ],
  },
];

const questions = groups.flatMap((group) => group.questions);

export default function AutomationAssessmentPage() {
  const [checked, setChecked] = useState<string[]>([]);

  const toggle = (question: string) => {
    setChecked((current) =>
      current.includes(question)
        ? current.filter((item) => item !== question)
        : [...current, question],
    );
  };

  const score = checked.length;
  const result =
    score >= 9
      ? "You likely have a strong candidate. Choose one workflow, document its exceptions, and estimate the weekly volume before discussing implementation."
      : score >= 5
        ? "There may be a useful opportunity, but clarify ownership, inputs, and exception handling before building."
        : "Keep observing the process. A clearer, more repetitive workflow may be a better first automation target.";

  return (
    <main className="min-h-screen bg-background text-foreground print:bg-white print:text-black">
      <div className="print:hidden"><Navbar /></div>
      <section className="pb-14 pt-36 md:pb-20 md:pt-44 print:pb-8 print:pt-8">
        <Reveal priority className="mx-auto max-w-5xl px-6">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-primary print:text-black">Self-assessment</p>
          <h1 className="text-5xl font-normal leading-[1.04] sm:text-6xl print:text-4xl">
            Is this workflow worth automating?
          </h1>
          <p className="mt-7 max-w-3xl text-xl leading-relaxed text-muted-foreground print:text-gray-700">
            Choose one real workflow and check every statement that applies.
            The result is a conversation starter, not a business case by itself.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 print:hidden">
            <button
              type="button"
              onClick={() => window.print()}
              data-cta="assessment-download"
              className="inline-flex min-h-12 items-center gap-2 rounded-full bg-primary px-6 font-semibold text-primary-foreground"
            >
              <Download className="h-4 w-4" /> Print or Save as PDF
            </button>
            <button
              type="button"
              onClick={() => setChecked([])}
              className="inline-flex min-h-12 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 font-medium"
            >
              <RotateCcw className="h-4 w-4" /> Reset checklist
            </button>
          </div>
        </Reveal>
      </section>

      <section className="border-y border-white/5 bg-card/10 py-16 print:border-y print:border-gray-300 print:bg-white print:py-6">
        <Reveal className="mx-auto grid max-w-5xl gap-6 px-6 md:grid-cols-2 print:grid-cols-2">
          {groups.map((group) => (
            <article key={group.title} className="rounded-[28px] border border-white/8 bg-background/55 p-6 print:break-inside-avoid print:border-gray-300 print:bg-white">
              <h2 className="text-2xl font-medium">{group.title}</h2>
              <div className="mt-6 space-y-4">
                {group.questions.map((question) => {
                  const selected = checked.includes(question);
                  return (
                    <label key={question} className="flex cursor-pointer gap-3 leading-relaxed text-muted-foreground print:text-gray-800">
                      <input
                        type="checkbox"
                        checked={selected}
                        onChange={() => toggle(question)}
                        className="sr-only"
                      />
                      <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border ${selected ? "border-primary bg-primary text-primary-foreground" : "border-white/20 bg-white/5 print:border-gray-500"}`}>
                        {selected && <Check className="h-3.5 w-3.5" />}
                      </span>
                      {question}
                    </label>
                  );
                })}
              </div>
            </article>
          ))}
        </Reveal>
      </section>

      <section className="py-16 print:py-8">
        <Reveal className="mx-auto max-w-5xl px-6">
          <div className="rounded-[30px] border border-primary/25 bg-primary/8 p-7 sm:p-9 print:border-gray-400 print:bg-gray-50">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary print:text-black">Your result</p>
            <div className="mt-4 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-5xl font-medium">{score}<span className="text-2xl text-muted-foreground print:text-gray-500">/{questions.length}</span></p>
                <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground print:text-gray-700">{result}</p>
              </div>
              <Link
                href={assessmentHref}
                data-cta="self-assessment-contact"
                className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-primary px-6 font-semibold text-primary-foreground print:hidden"
              >
                Discuss the workflow <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-3 print:grid-cols-3">
            {[
              ["Volume", "How often does this workflow happen each week or month?"],
              ["Time", "How much staff time does one item require today?"],
              ["Exceptions", "Which decisions still require a responsible person?"],
            ].map(([title, description]) => (
              <div key={title} className="rounded-2xl border border-white/8 p-5 print:border-gray-300">
                <h2 className="font-medium">{title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground print:text-gray-700">{description}</p>
                <div className="mt-8 border-b border-white/15 print:border-gray-400" />
                <div className="mt-8 border-b border-white/15 print:border-gray-400" />
              </div>
            ))}
          </div>
        </Reveal>
      </section>
      <div className="print:hidden"><Footer /></div>
    </main>
  );
}
