"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import {
  WebGraphic,
  MobileGraphic,
  CloudGraphic,
  SupportGraphic,
  DesignGraphic,
} from "@/components/service-graphics";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/30 relative overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-36 pb-12 md:pt-48 md:pb-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.05] bg-linear-to-b from-foreground from-20% to-muted-foreground sm:from-foreground sm:from-30% sm:to-muted-foreground to-100% bg-clip-text text-transparent mb-6"
          >
            What We Do
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
            className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
          >
            From captivating web designs to robust cloud infrastructures, our
            GTA-based team engineers end-to-end digital solutions that scale
            with your ambitions.
          </motion.p>
        </div>
      </section>

      {/* Services List Section */}
      <section className="py-20 bg-background relative z-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col gap-32">
          {/* Service 1: Web */}
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="flex-1 space-y-6"
            >
              <div className="text-primary text-sm font-bold tracking-widest uppercase">
                01. Web Design &amp; Development
              </div>
              <h2 className="text-3xl md:text-5xl font-normal leading-tight">
                Digital experiences that convert.
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Crafting stunning, highly performant web applications tailored
                to your brand. We build fast, accessible, and scalable websites
                that look great on every device and drive measurable results.
              </p>
              <ul className="space-y-3 mt-6 text-muted-foreground">
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Custom UI/UX Design &amp; Branding
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Scalable Single Page Applications (React/Next.js)
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  E-commerce Platforms &amp; Integrations
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Performance &amp; SEO Optimization
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="flex-1 w-full flex justify-end items-center"
            >
              <div className="w-full max-w-md h-[390px] relative rounded-[32px] overflow-hidden bg-card/30 border border-white/5 shadow-2xl flex items-center justify-center liquid-glass group">
                <WebGraphic />
              </div>
            </motion.div>
          </div>

          {/* Service 2: Mobile */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-20">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="flex-1 space-y-6"
            >
              <div className="text-primary text-sm font-bold tracking-widest uppercase">
                02. Mobile App Development
              </div>
              <h2 className="text-3xl md:text-5xl font-normal leading-tight">
                Your business, in their pocket.
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Native and cross-platform mobile experiences that engage users
                on the go. We design intuitive apps that leverage device
                capabilities to offer smooth, app-store ready experiences.
              </p>
              <ul className="space-y-3 mt-6 text-muted-foreground">
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  iOS &amp; Android Native Development
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Cross-Platform Solutions (React Native)
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Intuitive Mobile UI/UX Design
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Seamless Backend API Integrations
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="flex-1 w-full flex justify-start items-center"
            >
              <div className="w-full max-w-md h-[390px] relative rounded-[32px] overflow-hidden bg-card/30 border border-white/5 shadow-2xl flex items-center justify-center liquid-glass group">
                <MobileGraphic />
              </div>
            </motion.div>
          </div>

          {/* Service 3: Cloud */}
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="flex-1 space-y-6"
            >
              <div className="text-primary text-sm font-bold tracking-widest uppercase">
                03. Cloud Infrastructure
              </div>
              <h2 className="text-3xl md:text-5xl font-normal leading-tight">
                Scale without limits.
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Scalable, secure, and robust cloud architectures for your
                enterprise. We engineer resilient backend systems to handle high
                traffic and ensure data security around the clock.
              </p>
              <ul className="space-y-3 mt-6 text-muted-foreground">
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  AWS, GCP &amp; Azure Architecture
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Microservices &amp; Auto-scaling Deployments
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  DevOps Pipelines (CI/CD)
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Database Optimization &amp; Migration
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="flex-1 w-full flex justify-end items-center"
            >
              <div className="w-full max-w-md h-[390px] relative rounded-[32px] overflow-hidden bg-card/30 border border-white/5 shadow-2xl flex items-center justify-center liquid-glass group">
                <CloudGraphic />
              </div>
            </motion.div>
          </div>

          {/* Service 4: IT */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-20">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="flex-1 space-y-6"
            >
              <div className="text-primary text-sm font-bold tracking-widest uppercase">
                04. IT &amp; Tech Support
              </div>
              <h2 className="text-3xl md:text-5xl font-normal leading-tight">
                Flawless operations, 24/7.
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Reliable technical assistance to keep your Canadian operations
                running flawlessly. Our proactive support prevents downtime and
                bridges the gap between technology and your workflow.
              </p>
              <ul className="space-y-3 mt-6 text-muted-foreground">
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  24/7 Helpdesk &amp; Rapid Response SLAs
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Cybersecurity Audits &amp; Monitoring
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Network Management &amp; Provisioning
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Software Maintenance &amp; Updates
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="flex-1 w-full flex justify-start items-center"
            >
              <div className="w-full max-w-md h-[390px] relative rounded-[32px] pt-12 overflow-hidden bg-card/30 border border-white/5 shadow-2xl flex items-center justify-center liquid-glass group">
                <SupportGraphic />
              </div>
            </motion.div>
          </div>

          {/* Service 5: Design */}
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="flex-1 space-y-6"
            >
              <div className="text-primary text-sm font-bold tracking-widest uppercase">
                05. Graphic Designing
              </div>
              <h2 className="text-3xl md:text-5xl font-normal leading-tight">
                Visuals that captivate.
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Captivating visual identities, branding, and striking UI/UX
                designs. We transform complex ideas into intuitive, beautiful,
                and engaging digital art that resonates with your audience.
              </p>
              <ul className="space-y-3 mt-6 text-muted-foreground">
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Brand Identity &amp; Logo Design
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Wireframing &amp; Interactive Prototyping
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Marketing Collateral &amp; Digital Assets
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  User Research &amp; Usability Testing
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="flex-1 w-full flex justify-end items-center"
            >
              <div className="w-full max-w-md h-[390px] relative rounded-[32px] pt-12 overflow-hidden bg-card/30 border border-white/5 shadow-2xl flex items-center justify-center liquid-glass group">
                <DesignGraphic />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Global CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-4xl mx-auto mt-32 px-6 text-center"
        >
          <div className="bg-card/40 border border-white/10 rounded-3xl p-12 backdrop-blur-md shadow-2xl liquid-glass relative overflow-hidden">
            <h3 className="text-3xl md:text-4xl font-normal mb-4 relative z-10">
              Start your next project with us.
            </h3>
            <p className="text-muted-foreground text-lg mb-8 relative z-10">
              Let&apos;s build something extraordinary together.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 liquid-glass text-foreground hover:bg-white/10 transition-all duration-300 ease-in-out px-8 py-4 rounded-xl font-medium group relative z-10"
            >
              Get in Touch
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
