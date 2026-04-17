"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { ChevronRight, Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col overflow-x-hidden">
      <Navbar />

      <section className="flex-1 flex items-center justify-center relative overflow-hidden px-4 py-24">
        {/* Ambient background glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-[200px] h-[200px] bg-accent/5 rounded-full blur-[80px] pointer-events-none" />

        {/* Subtle grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[40px_40px] mask-[linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)] pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto gap-8">
          {/* Giant 404 number */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative select-none"
          >
            {/* Outline glow layer */}
            <span
              className="absolute inset-0 font-heading text-[160px] sm:text-[220px] lg:text-[280px] font-bold leading-none text-transparent"
              style={{
                WebkitTextStroke: "1px rgba(255,255,255,0.06)",
              }}
              aria-hidden
            >
              404
            </span>
            {/* Gradient fill */}
            <span className="relative font-heading text-[160px] sm:text-[220px] lg:text-[280px] font-bold leading-none bg-linear-to-b from-foreground/60 from-0% via-foreground/20 to-transparent to-100% bg-clip-text text-transparent">
              404
            </span>

            {/* Glowing primary overlay */}
            <motion.span
              animate={{ opacity: [0.15, 0.35, 0.15] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 font-heading text-[160px] sm:text-[220px] lg:text-[280px] font-bold leading-none text-primary/20 blur-[2px]"
              aria-hidden
            >
              404
            </motion.span>
          </motion.div>

          {/* Glass card with message */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
            className="w-full max-w-2xl"
          >
            <div className="liquid-glass rounded-3xl px-8 py-10 sm:px-12 sm:py-12 relative overflow-hidden">
              {/* Top border highlight */}
              <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-white/25 to-transparent pointer-events-none" />

              {/* Inner ambient glow */}
              <div className="absolute -inset-x-8 -inset-y-8 bg-linear-to-b from-primary/8 to-transparent blur-2xl opacity-60 pointer-events-none" />

              <div className="relative z-10 flex flex-col items-center gap-6">
                {/* Status badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium tracking-widest uppercase"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  Page Not Found
                </motion.div>

                <div>
                  <h1 className="text-3xl sm:text-4xl font-normal leading-tight bg-linear-to-b from-foreground from-20% to-muted-foreground to-100% bg-clip-text text-transparent mb-4 tracking-tight">
                    Lost in the digital void
                  </h1>
                  <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-md mx-auto">
                    The page you&apos;re looking for doesn&apos;t exist or has
                    been moved. Let&apos;s get you back on track.
                  </p>
                </div>

                {/* Action buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-3 mt-2 w-full sm:w-auto">
                  <Link
                    href="/"
                    className="inline-flex items-center gap-2 liquid-glass text-foreground hover:bg-white/10 transition-all duration-300 ease-in-out px-6 py-3 rounded-xl font-medium group relative z-10"
                  >
                    <Home className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    Back to Home
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 liquid-glass text-foreground hover:bg-white/10 transition-all duration-300 ease-in-out px-6 py-3 rounded-xl font-medium group relative z-10"
                  >
                    Contact Us
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quick nav links */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.35 }}
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2"
          >
            <span className="text-muted-foreground/50 text-xs uppercase tracking-widest">
              Or explore
            </span>
            {[
              { href: "/services", label: "Services" },
              { href: "/industries", label: "Industries" },
              { href: "/about", label: "About" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 relative group"
              >
                {label}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300 rounded-full" />
              </Link>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
