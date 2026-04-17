"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { motion } from "motion/react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/30 relative">
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
            Who We Are
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
            className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-justify"
          >
            Verexa Technologies Inc. is a GTA-based technology company committed
            to crafting exceptional experiences for businesses in GTA. From
            ambitious startups to established enterprises, we partner with
            organizations across GTA to build digital products that are
            beautiful, performant, and built to last.
          </motion.p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-20 bg-background relative z-10">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-normal leading-[1.05] bg-linear-to-b from-foreground from-20% to-muted-foreground sm:from-foreground sm:from-30% sm:to-muted-foreground to-100% bg-clip-text text-transparent mb-6"
          >
            Our Story
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="text-muted-foreground text-lg leading-relaxed mb-6 text-justify"
          >
            We blend cutting-edge technology with world-class design to help
            companies across GTA scale, innovate, and lead their industries.
            What started as a small team with a big vision has grown into a
            full-service digital studio trusted by clients across GTA.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-muted-foreground text-lg leading-relaxed mb-6 text-justify"
          >
            Our team of visionary designers, expert engineers, and strategic
            thinkers work collaboratively to turn your most ambitious ideas into
            reality. Proudly built in Canada, for Canada.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="text-muted-foreground text-lg leading-relaxed mb-16 text-justify"
          >
            We believe technology should empower people, not overwhelm them.
            Every solution we deliver is grounded in clarity, craftsmanship, and
            a deep commitment to your long-term success.
          </motion.p>

          {/* Embedded Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 xl:gap-8 relative z-20 w-full">
            {[
              { label: "Experience", value: "5+", sub: "Years of excellence" },
              {
                label: "Projects",
                value: "10+",
                sub: "Successfully delivered",
              },
              {
                label: "Satisfaction",
                value: "99%",
                sub: "Clients Success Rate",
              },
              { label: "Support", value: "24/7", sub: "Available for you" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.1 }}
                className="w-full text-center relative flex-1 min-w-0 group p-2"
              >
                <div className="absolute inset-0 rounded-2xl shadow-inner group-hover:bg-card/60 transition-colors"></div>
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
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 md:py-20 bg-background relative z-10">
        <div className="max-w-[1250px] mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-16 relative"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.05] bg-linear-to-b from-foreground from-20% to-muted-foreground sm:from-foreground sm:from-30% sm:to-muted-foreground to-100% bg-clip-text text-transparent mb-6">
              Our Values
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              The core principles driving everything we do at Verexa
              Technologies.
            </p>
          </motion.div>

          <div className="relative flex items-center justify-center pt-8">
            {/* Elegant backdrop glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8 relative z-20 w-full mb-12">
              {/* Card 1 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative p-8 rounded-4xl overflow-hidden group hover:-translate-y-2 transition-all duration-500 bg-card/30 border border-white/5 text-left h-full"
              >
                <div className="absolute inset-0 bg-card/60 backdrop-blur-3xl z-0 transition-colors duration-500 group-hover:bg-primary/5"></div>
                <div className="absolute -inset-x-12 -inset-y-12 bg-linear-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500 z-0"></div>
                <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent pointer-events-none z-30"></div>
                <div className="relative z-10">
                  <div className="font-heading text-4xl sm:text-5xl font-light text-white/15 mb-6 group-hover:text-primary transition-colors duration-500">
                    01
                  </div>
                  <h3 className="text-white font-medium text-xl mb-3 tracking-tight group-hover:text-primary transition-colors duration-500">
                    Excellence by Design
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    We engineer premium digital experiences where world-class
                    aesthetics meet uncompromising technical precision.
                  </p>
                </div>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative p-8 rounded-4xl overflow-hidden group hover:-translate-y-2 md:hover:translate-y-6 lg:hover:translate-y-10 transition-all duration-500 bg-card/30 border border-white/5 text-left md:translate-y-8 lg:translate-y-12 h-full"
              >
                <div className="absolute inset-0 bg-card/60 backdrop-blur-3xl z-0 transition-colors duration-500 group-hover:bg-accent/5"></div>
                <div className="absolute -inset-x-12 -inset-y-12 bg-linear-to-bl from-accent/10 to-transparent opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500 z-0"></div>
                <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent pointer-events-none z-30"></div>
                <div className="relative z-10">
                  <div className="font-heading text-4xl sm:text-5xl font-light text-white/15 mb-6 group-hover:text-accent transition-colors duration-500">
                    02
                  </div>
                  <h3 className="text-white font-medium text-xl mb-3 tracking-tight group-hover:text-accent transition-colors duration-500">
                    Relentless Innovation
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Pushing the boundaries of modern technology to future-proof
                    your business in a rapidly evolving digital landscape.
                  </p>
                </div>
              </motion.div>

              {/* Card 3 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="relative p-8 rounded-4xl overflow-hidden group hover:-translate-y-2 transition-all duration-500 bg-card/30 border border-white/5 text-left h-full"
              >
                <div className="absolute inset-0 bg-card/60 backdrop-blur-3xl z-0 transition-colors duration-500 group-hover:bg-accent/5"></div>
                <div className="absolute -inset-x-12 -inset-y-12 bg-linear-to-tr from-accent/10 to-transparent opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500 z-0"></div>
                <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent pointer-events-none z-30"></div>
                <div className="relative z-10">
                  <div className="font-heading text-4xl sm:text-5xl font-light text-white/15 mb-6 group-hover:text-accent transition-colors duration-500">
                    03
                  </div>
                  <h3 className="text-white font-medium text-xl mb-3 tracking-tight group-hover:text-accent transition-colors duration-500">
                    Unwavering Integrity
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Rooted in Canadian values, we believe in radical
                    transparency, honest communication, and doing what&apos;s
                    right for your business.
                  </p>
                </div>
              </motion.div>

              {/* Card 4 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="relative p-8 rounded-4xl overflow-hidden group hover:-translate-y-2 md:hover:translate-y-6 lg:hover:translate-y-10 transition-all duration-500 bg-card/30 border border-white/5 text-left md:translate-y-8 lg:translate-y-12 h-full"
              >
                <div className="absolute inset-0 bg-card/60 backdrop-blur-3xl z-0 transition-colors duration-500 group-hover:bg-accent/5"></div>
                <div className="absolute -inset-x-12 -inset-y-12 bg-linear-to-tl from-accent/10 to-transparent opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500 z-0"></div>
                <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent pointer-events-none z-30"></div>
                <div className="relative z-10">
                  <div className="font-heading text-4xl sm:text-5xl font-light text-white/15 mb-6 group-hover:text-accent transition-colors duration-500">
                    04
                  </div>
                  <h3 className="text-white font-medium text-xl mb-3 tracking-tight group-hover:text-accent transition-colors duration-500">
                    True Partnership
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    We operate not just as an agency, but as a dedicated
                    extension of your team invested in your long-term success.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Global CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto mt-20 md:mt-40 px-6 text-center"
        >
          <div className="bg-card/40 border border-white/10 rounded-3xl p-12 backdrop-blur-md shadow-2xl liquid-glass relative overflow-hidden">
            <h3 className="text-3xl md:text-4xl font-normal mb-4 relative z-10">
              Start your next project with us
            </h3>
            <p className="text-muted-foreground text-lg mb-8 relative z-10">
              Let&apos;s build something extraordinary together.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 liquid-glass text-foreground hover:bg-white/10 transition-all duration-300 ease-in-out px-6 py-3 rounded-xl font-medium group relative z-10"
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
