"use client";

import { ArrowDown, CalendarDays, CheckCircle2, Mail, Phone } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { Reveal } from "@/components/page-transition";
import { Button } from "@/components/ui/button";
import { company } from "@/lib/company";

type FormData = {
  name: string;
  workEmail: string;
  phone: string;
  company: string;
  employeeCount: string;
  interest: string;
  currentProcess: string;
  budget: string;
  website: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const initialForm: FormData = {
  name: "",
  workEmail: "",
  phone: "",
  company: "",
  employeeCount: "",
  interest: "technology-assessment",
  currentProcess: "",
  budget: "",
  website: "",
};

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (data.name.trim().length < 2) errors.name = "Enter your full name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.workEmail)) {
    errors.workEmail = "Enter a valid work email.";
  }
  if (!data.company.trim()) errors.company = "Enter your company name.";
  if (!data.interest) errors.interest = "Choose an area of interest.";
  if (data.currentProcess.trim().length < 20) {
    errors.currentProcess = "Please share at least a few details about the current process.";
  }
  if (data.phone && !/^[\d\s\-+()]{7,20}$/.test(data.phone)) {
    errors.phone = "Enter a valid phone number.";
  }
  return errors;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const processRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const requestedInterest = new URLSearchParams(window.location.search).get("interest");
    const allowed = [
      "technology-assessment",
      "ai-automation",
      "business-software",
      "managed-technology",
      "cloud-infrastructure",
      "website-application",
    ];
    if (requestedInterest && allowed.includes(requestedInterest)) {
      const timer = window.setTimeout(() => {
        setFormData((current) => ({ ...current, interest: requestedInterest }));
      }, 0);
      return () => window.clearTimeout(timer);
    }
  }, []);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus("loading");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error("Request failed");
      setFormData(initialForm);
      setErrors({});
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const requestCall = () => {
    setFormData((current) => ({
      ...current,
      interest: "technology-assessment",
      currentProcess:
        current.currentProcess || "I would like to request a 30-minute call to discuss ",
    }));
    document.getElementById("assessment-form")?.scrollIntoView({ behavior: "smooth" });
    window.setTimeout(() => processRef.current?.focus(), 500);
  };

  return (
    <main className="min-h-screen overflow-x-clip bg-background text-foreground">
      <Navbar />

      <section className="relative overflow-hidden pb-16 pt-36 md:pb-24 md:pt-48">
        <div className="absolute left-1/2 top-20 h-96 w-[800px] -translate-x-1/2 rounded-full bg-primary/8 blur-[140px]" />
        <Reveal priority className="relative z-10 mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[1fr_0.85fr] lg:items-end">
          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Technology assessment
            </p>
            <h1 className="bg-linear-to-b from-foreground from-20% to-muted-foreground bg-clip-text text-5xl font-normal leading-[1.02] text-transparent sm:text-6xl lg:text-7xl">
              Show us where the work gets stuck.
            </h1>
            <p className="mt-7 max-w-3xl text-xl leading-relaxed text-muted-foreground">
              Tell us about one process, system, or recurring technology problem.
              We’ll use that context to identify a practical first step.
            </p>
          </div>
          <div className="rounded-[30px] border border-white/8 bg-card/35 p-7">
            <CalendarDays className="h-6 w-6 text-primary" />
            <h2 className="mt-5 text-2xl font-medium">Prefer a conversation?</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Request a 30-minute introductory call. We’ll confirm a time after
              reviewing the workflow details below.
            </p>
            <button
              type="button"
              onClick={requestCall}
              data-cta="contact-request-call"
              className="mt-6 inline-flex items-center gap-2 font-medium text-primary"
            >
              Request a 30-minute call <ArrowDown className="h-4 w-4" />
            </button>
          </div>
        </Reveal>
      </section>

      <section id="assessment-form" className="scroll-mt-28 border-t border-white/5 pb-24 pt-20 md:pb-32 md:pt-28">
        <Reveal className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[0.72fr_1.28fr]">
          <aside className="lg:sticky lg:top-32 lg:self-start">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">What happens next</p>
            <h2 className="mt-4 text-3xl font-normal sm:text-4xl">A useful first conversation, not a generic sales pitch.</h2>
            <div className="mt-8 space-y-6">
              {[
                "We review the workflow and the systems involved.",
                "We clarify the desired result, constraints, and ownership.",
                "We recommend a practical next step or tell you when a different specialist is a better fit.",
              ].map((item) => (
                <div key={item} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <p className="leading-relaxed text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 space-y-3 border-t border-white/8 pt-7 text-sm">
              <a href={`mailto:${company.contact.email}`} className="flex items-center gap-3 text-muted-foreground hover:text-primary">
                <Mail className="h-4 w-4" /> {company.contact.email}
              </a>
              <a href={`tel:${company.contact.phone.replace(/[^0-9+]/g, "")}`} className="flex items-center gap-3 text-muted-foreground hover:text-primary">
                <Phone className="h-4 w-4" /> {company.contact.phone}
              </a>
            </div>
          </aside>

          <div className="rounded-[36px] border border-white/10 bg-card/45 p-6 shadow-2xl sm:p-9 md:p-10">
            {status === "success" ? (
              <div role="status" className="flex min-h-[520px] flex-col items-center justify-center text-center">
                <CheckCircle2 className="h-12 w-12 text-primary" />
                <h2 className="mt-6 text-3xl font-medium">Assessment request received.</h2>
                <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">
                  Thank you. Verexa will review the details and follow up using
                  the contact information you provided.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-7 font-medium text-primary"
                >
                  Send another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div>
                  <h2 className="text-2xl font-medium sm:text-3xl">Tell us about the current process</h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Required fields are marked with an asterisk.
                  </p>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Name *" error={errors.name}>
                    <input name="name" value={formData.name} onChange={handleChange} autoComplete="name" className={inputClass} />
                  </Field>
                  <Field label="Work email *" error={errors.workEmail}>
                    <input name="workEmail" type="email" value={formData.workEmail} onChange={handleChange} autoComplete="email" className={inputClass} />
                  </Field>
                  <Field label="Company *" error={errors.company}>
                    <input name="company" value={formData.company} onChange={handleChange} autoComplete="organization" className={inputClass} />
                  </Field>
                  <Field label="Phone">
                    <input name="phone" type="tel" value={formData.phone} onChange={handleChange} autoComplete="tel" className={inputClass} />
                  </Field>
                  <Field label="Company size">
                    <select name="employeeCount" value={formData.employeeCount} onChange={handleChange} className={inputClass}>
                      <option value="">Select a range</option>
                      <option value="1-5">1–5 employees</option>
                      <option value="6-20">6–20 employees</option>
                      <option value="21-50">21–50 employees</option>
                      <option value="51-200">51–200 employees</option>
                      <option value="201+">201+ employees</option>
                    </select>
                  </Field>
                  <Field label="Area of interest *" error={errors.interest}>
                    <select name="interest" value={formData.interest} onChange={handleChange} className={inputClass}>
                      <option value="technology-assessment">Technology assessment</option>
                      <option value="ai-automation">AI & workflow automation</option>
                      <option value="business-software">Custom business software</option>
                      <option value="managed-technology">Managed technology</option>
                      <option value="cloud-infrastructure">Cloud & infrastructure</option>
                      <option value="website-application">Website or application</option>
                    </select>
                  </Field>
                </div>

                <Field label="What are you trying to improve? *" error={errors.currentProcess}>
                  <textarea
                    ref={processRef}
                    name="currentProcess"
                    value={formData.currentProcess}
                    onChange={handleChange}
                    rows={6}
                    placeholder="Describe the current steps, tools involved, and where the work slows down."
                    className={`${inputClass} min-h-40 resize-y py-3`}
                  />
                </Field>

                <Field label="Optional budget range">
                  <select name="budget" value={formData.budget} onChange={handleChange} className={inputClass}>
                    <option value="">Not decided yet</option>
                    <option value="under-5k">Under $5,000</option>
                    <option value="5k-15k">$5,000–$15,000</option>
                    <option value="15k-40k">$15,000–$40,000</option>
                    <option value="40k-plus">$40,000+</option>
                  </select>
                </Field>

                <div className="hidden" aria-hidden="true">
                  <label>
                    Website
                    <input name="website" value={formData.website} onChange={handleChange} tabIndex={-1} autoComplete="off" />
                  </label>
                </div>

                {status === "error" && (
                  <p role="alert" className="rounded-xl border border-red-500/20 bg-red-500/10 p-4 text-sm text-red-300">
                    The request could not be sent. Please try again or email {company.contact.email}.
                  </p>
                )}

                <Button
                  type="submit"
                  variant="hero"
                  disabled={status === "loading"}
                  data-cta="assessment-form-submit"
                  className="h-13 w-full rounded-full text-base font-semibold"
                >
                  {status === "loading" ? "Sending assessment request…" : "Book a Technology Assessment"}
                </Button>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  By submitting this form, you agree that Verexa may contact you
                  about this request. Do not include passwords or highly sensitive information.
                </p>
              </form>
            )}
          </div>
        </Reveal>
      </section>

      <Footer />
    </main>
  );
}

const inputClass =
  "mt-2 h-12 w-full rounded-xl border border-white/10 bg-black/30 px-4 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary/60 focus:ring-1 focus:ring-primary/30";

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block text-sm font-medium text-foreground/85">
      {label}
      {children}
      {error && <span className="mt-2 block text-xs text-red-400">{error}</span>}
    </label>
  );
}
