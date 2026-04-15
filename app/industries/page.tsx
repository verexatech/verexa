"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import {
  RealEstateGraphic,
  HealthcareGraphic,
  LegalGraphic,
} from "@/components/industry-graphics";
import Link from "next/link";
import { ChevronRight, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function IndustriesPage() {
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
            Who We Serve
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
          >
            Verexa Technologies provides high-impact digital infrastructure for
            the GTA&apos;s most critical sectors. We build the trust and
            reliability your business depends on.
          </motion.p>
        </div>

        {/* Background Ambient Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
      </section>

      {/* Industry Sections */}
      <section className="py-20 bg-background relative z-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col gap-32">
          {/* Industry 1: Real Estate */}
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="flex-1 space-y-6"
            >
              <div className="text-primary text-sm font-bold tracking-widest uppercase">
                01. Real Estate &amp; Property Management
              </div>
              <h2 className="text-3xl md:text-5xl font-normal leading-tight">
                Responsive systems for GTA&apos;s housing demand.
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                With immigration driving relentless demand in the GTA, real
                estate professionals need digital tools that can keep up. We
                transform outdated infrastructure into modern, scalable
                platforms.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                {[
                  "Listing & Search App",
                  "Tenant / Client Portal",
                  "Brand Identity Package",
                  "Cloud Document System",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 text-muted-foreground"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="flex-1 w-full flex justify-end items-center"
            >
              <div className="w-full max-w-md h-[400px] relative rounded-[32px] overflow-hidden bg-card/30 border border-white/5 shadow-2xl flex items-center justify-center liquid-glass group">
                <RealEstateGraphic />
              </div>
            </motion.div>
          </div>

          {/* Industry 2: Healthcare */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-20">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="flex-1 space-y-6"
            >
              <div className="text-primary text-sm font-bold tracking-widest uppercase">
                02. Healthcare, Dental &amp; Wellness
              </div>
              <h2 className="text-3xl md:text-5xl font-normal leading-tight">
                Mission-critical tech for patient trust.
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                In healthcare, downtime isn&apos;t just an inconvenience; it
                disrupts care. We provide secure, cloud infrastructure and 24/7
                IT support to keep your practice resilient.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                {[
                  "Online Booking System",
                  "PHI Data Privacy Audits",
                  "Clinic Branding & Signage",
                  "Health Monitoring Integrations",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 text-muted-foreground"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="flex-1 w-full flex justify-start items-center"
            >
              <div className="w-full max-w-md h-[400px] relative rounded-[32px] overflow-hidden bg-card/30 border border-white/5 shadow-2xl flex items-center justify-center liquid-glass group">
                <HealthcareGraphic />
              </div>
            </motion.div>
          </div>

          {/* Industry 3: Professional Services */}
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="flex-1 space-y-6"
            >
              <div className="text-primary text-sm font-bold tracking-widest uppercase">
                03. Professional &amp; Legal Services
              </div>
              <h2 className="text-3xl md:text-5xl font-normal leading-tight">
                Digital scale for fast-growing firms.
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Law firms, accounting practices, and advisory firms are the
                backbone of Toronto&apos;s volume of small businesses. We bridge
                the digital divide for firms that are outgrowing their current
                tech.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                {[
                  "Secure Client Portal",
                  "Cloud Workspace Setup",
                  "Professional Brand Package",
                  "Clio Integration",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 text-muted-foreground"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="flex-1 w-full flex justify-end items-center"
            >
              <div className="w-full max-w-md h-[400px] relative rounded-[32px] overflow-hidden bg-card/30 border border-white/5 shadow-2xl flex items-center justify-center liquid-glass group">
                <LegalGraphic />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Market Insights / Cross-cutting stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-7xl mx-auto mt-40 px-6"
        >
          <div className="bg-card/40 border border-white/10 rounded-[40px] p-8 md:p-16 backdrop-blur-md shadow-2xl liquid-glass relative overflow-hidden">
            <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
              <div>
                <h3 className="text-3xl md:text-4xl font-normal mb-6">
                  Modernize or get left behind.
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  GTA businesses that embrace digital transformation grow three
                  times faster than those that don&apos;t. With 35% of budgets
                  now shifting toward tech services, the time to scale is now.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 liquid-glass text-foreground hover:bg-white/10 transition-all duration-300 ease-in-out px-8 py-4 rounded-xl font-medium group"
                >
                  Get Strategy Session
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                {[
                  { val: "3.5x", label: "Faster Growth" },
                  { val: "35%", label: "Budget Shift" },
                  { val: "1.9%", label: "Toronto GDP Growth" },
                  { val: "#1", label: "Canadian Tech Market" },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="relative p-8 rounded-4xl overflow-hidden group hover:-translate-y-2 transition-all duration-500 bg-card/30 border border-white/5 text-left h-full"
                  >
                    <div className="absolute inset-0 bg-card/60 backdrop-blur-3xl z-0 transition-colors duration-500 group-hover:bg-primary/5 rounded-4xl"></div>
                    <div className="absolute -inset-x-12 -inset-y-12 bg-linear-to-bl from-primary/10 to-transparent opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500 z-0"></div>
                    <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent pointer-events-none z-30"></div>

                    <div className="relative z-10">
                      <div className="font-heading text-4xl sm:text-5xl font-light text-white/15 mb-4 group-hover:text-primary transition-colors duration-500">
                        {stat.val}
                      </div>
                      <h4 className="text-white font-medium text-base sm:text-lg mb-1 tracking-tight group-hover:text-primary transition-colors duration-500">
                        {stat.label}
                      </h4>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Background Decorative Mesh */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-[100px] -z-10"></div>
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-4xl mx-auto mt-40 px-6 text-center"
        >
          <h3 className="text-3xl md:text-5xl font-normal mb-8 leading-tight">
            Ready to lead your industry?
          </h3>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 liquid-glass text-foreground hover:bg-white/10 transition-all duration-300 ease-in-out px-10 py-5 rounded-2xl text-lg font-medium group"
          >
            Start Your Journey
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
