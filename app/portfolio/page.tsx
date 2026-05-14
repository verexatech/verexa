"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, ExternalLink, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

const projects = [
  {
    id: "coprep",
    number: "01",
    label: "AI SaaS Platform",
    name: "CoPrep AI",
    tagline: "AI-powered interview preparation.",
    description:
      "A fully-featured AI coaching platform designed to help job seekers ace their interviews. CoPrep AI delivers real-time feedback on body language, speech clarity, and answer quality using advanced machine learning — giving candidates a competitive edge.",
    url: "https://www.coprep.ai/",
    image: "/portfolio/coprep.png",
    tags: ["AI/ML", "SaaS", "Web App", "Next.js"],
    direction: "ltr" as const,
  },
  {
    id: "typeinvoice",
    number: "02",
    label: "Productivity Tool",
    name: "TypeInvoice",
    tagline: "Beautiful invoicing, effortlessly.",
    description:
      "A sleek, typography-first invoicing platform that lets freelancers and small businesses create, send, and track professional invoices in seconds. Built for speed and clarity, TypeInvoice turns a tedious task into an elegant experience.",
    url: "https://typeinvoice.com/",
    image: "/portfolio/typeinvoice.png",
    tags: ["SaaS", "Fintech", "Web App", "React"],
    direction: "rtl" as const,
  },
  {
    id: "cryptex",
    number: "03",
    label: "Crypto Dashboard",
    name: "Cryptex",
    tagline: "Real-time crypto intelligence.",
    description:
      "A high-performance cryptocurrency portfolio tracker and market analytics dashboard. Cryptex delivers live price data, portfolio breakdowns, and visual insights with a futuristic, data-rich interface designed for serious traders.",
    url: "https://trycryptex.vercel.app/",
    image: "/portfolio/cryptex.png",
    tags: ["Crypto", "Dashboard", "Real-time", "React"],
    direction: "ltr" as const,
  },
  {
    id: "elevategrad",
    number: "04",
    label: "EdTech Platform",
    name: "ElevateGrad",
    tagline: "Mentorship meets academia.",
    description:
      "An education platform purpose-built for graduate students and early-career professionals. ElevateGrad connects learners with expert mentors, specialized courses, and career resources — all in one beautifully designed environment.",
    url: "https://elevategrad.com/",
    image: "/portfolio/elevategrad.png",
    tags: ["EdTech", "Web App", "Mentorship", "Next.js"],
    direction: "rtl" as const,
  },
];

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/30 relative overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-36 pb-12 md:pt-48 md:pb-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-normal leading-[1.05] bg-linear-to-b from-foreground from-20% to-muted-foreground sm:from-foreground sm:from-30% sm:to-muted-foreground to-100% bg-clip-text text-transparent mb-6"
          >
            What We Built
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
            className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
          >
            From AI platforms to SaaS solutions, we have helped startups and
            growing businesses across Canada build premium digital products that
            drive real results.
          </motion.p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-background relative z-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col gap-32">
          {projects.map((project) => {
            const isRtl = project.direction === "rtl";

            return (
              <div
                key={project.id}
                className={`flex flex-col ${
                  isRtl ? "md:flex-row-reverse" : "md:flex-row"
                } items-center gap-12 md:gap-20`}
              >
                {/* Text Side */}
                <motion.div
                  initial={{ opacity: 0, x: isRtl ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="flex-1 space-y-6"
                >
                  <div className="text-primary text-sm font-bold tracking-widest uppercase">
                    {project.number}. {project.label}
                  </div>
                  <h2 className="text-3xl md:text-5xl font-normal leading-tight">
                    {project.tagline}
                  </h2>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-xs font-medium border bg-primary/10 text-primary border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>

                {/* Image Side */}
                <motion.div
                  initial={{ opacity: 0, x: isRtl ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className={`flex-1 w-full flex ${
                    isRtl ? "justify-start" : "justify-end"
                  } items-center`}
                >
                  <Link
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full max-w-lg relative group block"
                    aria-label={`Visit ${project.name}`}
                  >
                    <div className="w-full rounded-xl md:rounded-4xl overflow-hidden bg-card/30 border border-white/5 group-hover:border-primary/40 shadow-2xl liquid-glass transition-all duration-500 group-hover:-translate-y-2 relative">
                      {/* Glow effect */}
                      <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl pointer-events-none rounded-xl md:rounded-4xl" />

                      {/* Top bar decoration */}
                      <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent pointer-events-none z-30" />

                      <div className="relative aspect-video w-full overflow-hidden rounded-xl md:rounded-4xl">
                        <Image
                          src={project.image}
                          alt={`${project.name} — ${project.tagline}`}
                          fill
                          className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                        {/* Overlay on hover */}
                        <div className="absolute inset-0 bg-background/0 group-hover:bg-background/10 transition-colors duration-500 flex items-center justify-center">
                          <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white/10 backdrop-blur-md rounded-full px-5 py-2.5 flex items-center gap-2 border border-white/20 text-sm font-medium text-white shadow-lg">
                            <ExternalLink className="w-4 h-4" />
                            Visit Site
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Project name badge */}
                    <div className="mt-4 flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                      <span className="text-muted-foreground text-sm font-medium">
                        {project.name}
                      </span>
                      <span className="text-muted-foreground/40 text-sm">
                        •
                      </span>
                      <span className="text-muted-foreground/60 text-xs truncate">
                        {project.url.replace("https://", "").replace(/\/$/, "")}
                      </span>
                    </div>
                  </Link>
                </motion.div>
              </div>
            );
          })}
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto mt-32 px-6"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 xl:gap-8 relative z-20 w-full">
            {[
              {
                label: "Projects",
                value: "10+",
                sub: "Successfully delivered",
              },
              { label: "Clients", value: "15+", sub: "Across Canada & GTA" },
              {
                label: "Satisfaction",
                value: "99%",
                sub: "Client success rate",
              },
              { label: "Support", value: "24/7", sub: "Always available" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.1 }}
                className="w-full text-center relative flex-1 min-w-0 group p-2"
              >
                <div className="absolute inset-0 rounded-2xl shadow-inner group-hover:bg-card/60 transition-colors" />
                <div className="relative z-10">
                  <h3 className="text-muted-foreground text-xs sm:text-[10px] md:text-sm font-medium mb-2 uppercase tracking-widest truncate">
                    {stat.label}
                  </h3>
                  <div className="text-4xl lg:text-5xl tracking-tight font-medium text-white mb-2">
                    {stat.value}
                  </div>
                  <p className="text-muted-foreground/70 text-xs">{stat.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Global CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto mt-20 px-6 text-center"
        >
          <div className="bg-card/40 border border-white/10 rounded-3xl p-12 backdrop-blur-md shadow-2xl liquid-glass relative overflow-hidden">
            <h3 className="text-3xl md:text-4xl font-normal mb-4 relative z-10">
              Ready to build your next product?
            </h3>
            <p className="text-muted-foreground text-lg mb-8 relative z-10">
              Let&apos;s craft something extraordinary together.
            </p>
            <Link
              href="/contact"
              id="portfolio-cta-contact"
              className="inline-flex items-center gap-2 liquid-glass text-foreground hover:bg-white/10 transition-all duration-300 ease-in-out px-6 py-3 rounded-xl font-medium group relative z-10"
            >
              Start a Project
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
