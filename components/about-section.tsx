"use client";

import { ReactNode } from "react";
import Image from "next/image";

export function AboutSection() {
  return (
    <section
      id="about"
      className="bg-background pt-24 overflow-hidden relative border-t border-border/10 scroll-mt-24"
    >
      <div className="max-w-[1250px] mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Content Area */}
          <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.05] bg-linear-to-b from-foreground from-20% to-muted-foreground sm:from-foreground sm:from-30% sm:to-muted-foreground to-100% bg-clip-text text-transparent mb-6">
              Who We Are
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Verexa is a forward-thinking digital agency committed to crafting
              exceptional experiences. We blend cutting-edge technology with
              world-class design to help businesses scale, innovate, and
              dominate their industries.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              Our team of visionary designers, expert engineers, and strategic
              thinkers work collaboratively to turn your most ambitious ideas
              into reality. We don't just build software; we build the future.
            </p>

            {/* Embedded Stats Row */}
            <div className="flex items-center justify-between gap-4 sm:gap-0 w-full mt-2">
              <div className="w-full text-center relative flex-1 min-w-0 group cursor-default p-2">
                <div className="absolute inset-0 rounded-2xl shadow-inner group-hover:bg-card/60 transition-colors"></div>
                <div className="relative z-10">
                  <h3 className="text-muted-foreground text-xs sm:text-[10px] md:text-sm font-medium mb-2 uppercase tracking-widest truncate">
                    Experience
                  </h3>
                  <div className="text-4xl lg:text-5xl tracking-tight font-medium text-white mb-2">
                    5+
                  </div>
                  <p className="text-muted-foreground/70 text-xs">
                    Years of excellence
                  </p>
                </div>
              </div>
              <div className="hidden sm:block h-16 w-px bg-white/10 mx-2"></div>
              <div className="w-full text-center relative flex-1 min-w-0 group cursor-default p-2">
                <div className="absolute inset-0 rounded-2xl shadow-inner group-hover:bg-card/60 transition-colors"></div>
                <div className="relative z-10">
                  <h3 className="text-muted-foreground text-xs sm:text-[10px] md:text-sm font-medium mb-2 uppercase tracking-widest truncate">
                    Projects
                  </h3>
                  <div className="text-4xl lg:text-5xl tracking-tight font-medium text-white mb-2">
                    10+
                  </div>
                  <p className="text-muted-foreground/70 text-xs">
                    Successfully delivered
                  </p>
                </div>
              </div>
              <div className="hidden sm:block h-16 w-px bg-white/10 mx-2"></div>
              <div className="w-full text-center relative flex-1 min-w-0 group cursor-default p-2">
                <div className="absolute inset-0 rounded-2xl shadow-inner group-hover:bg-card/60 transition-colors"></div>
                <div className="relative z-10">
                  <h3 className="text-muted-foreground text-xs sm:text-[10px] md:text-sm font-medium mb-2 uppercase tracking-widest truncate">
                    Satisfaction
                  </h3>
                  <div className="text-4xl lg:text-5xl tracking-tight font-medium text-white mb-2">
                    99%
                  </div>
                  <p className="text-muted-foreground/70 text-xs">
                    Clients Satisfied
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual Graphics - 2x2 Card Grid */}
          <div className="w-full lg:w-1/2 relative flex items-center justify-center lg:justify-end py-12 lg:py-0 min-h-[500px]">
            {/* Elegant backdrop glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="grid grid-cols-2 gap-4 sm:gap-6 relative z-20 w-full max-w-[500px]">
              {/* Column 1 - Offset Down */}
              <div className="flex flex-col gap-4 sm:gap-6 mt-12">
                {/* Card 1 */}
                <div className="relative p-7 sm:p-8 rounded-4xl overflow-hidden group hover:-translate-y-2 transition-all duration-500">
                  <div className="absolute inset-0 bg-card/60 backdrop-blur-3xl border border-white/0 rounded-4xl z-0 shadow-[inset_0_0_20px_rgba(255,255,255,0.02)] transition-colors duration-500 group-hover:border-primary/20 group-hover:bg-primary/5"></div>
                  <div className="absolute -inset-x-12 -inset-y-12 bg-linear-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500 z-0"></div>

                  <div className="relative z-10">
                    <div className="font-heading text-4xl sm:text-5xl font-light text-white/15 mb-6 group-hover:text-primary transition-colors duration-500">
                      01
                    </div>
                    <h3 className="text-white font-medium text-xl mb-3 tracking-tight group-hover:text-primary transition-colors duration-500">
                      Our Mission
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Crafting exceptional digital experiences that scale
                      effortlessly.
                    </p>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="relative p-7 sm:p-8 rounded-4xl overflow-hidden group hover:-translate-y-2 transition-all duration-500">
                  <div className="absolute inset-0 bg-card/60 backdrop-blur-3xl border border-white/0 rounded-4xl z-0 shadow-[inset_0_0_20px_rgba(255,255,255,0.02)] transition-colors duration-500 group-hover:border-accent/20 group-hover:bg-accent/5"></div>
                  <div className="absolute -inset-x-12 -inset-y-12 bg-linear-to-bl from-accent/10 to-transparent opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500 z-0"></div>

                  <div className="relative z-10">
                    <div className="font-heading text-4xl sm:text-5xl font-light text-white/15 mb-6 group-hover:text-accent transition-colors duration-500">
                      02
                    </div>
                    <h3 className="text-white font-medium text-xl mb-3 tracking-tight group-hover:text-accent transition-colors duration-500">
                      Innovation
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Embracing cutting-edge tech to keep you ahead of the
                      curve.
                    </p>
                  </div>
                </div>
              </div>

              {/* Column 2 - Offset Up */}
              <div className="flex flex-col gap-4 sm:gap-6 mb-12">
                {/* Card 3 */}
                <div className="relative p-7 sm:p-8 rounded-4xl overflow-hidden group hover:-translate-y-2 transition-all duration-500">
                  <div className="absolute inset-0 bg-card/60 backdrop-blur-3xl border border-white/0 rounded-4xl z-0 shadow-[inset_0_0_20px_rgba(255,255,255,0.02)] transition-colors duration-500 group-hover:border-accent/20 group-hover:bg-accent/5"></div>
                  <div className="absolute -inset-x-12 -inset-y-12 bg-linear-to-tr from-accent/10 to-transparent opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500 z-0"></div>

                  <div className="relative z-10">
                    <div className="font-heading text-4xl sm:text-5xl font-light text-white/15 mb-6 group-hover:text-accent transition-colors duration-500">
                      03
                    </div>
                    <h3 className="text-white font-medium text-xl mb-3 tracking-tight group-hover:text-accent transition-colors duration-500">
                      Global Reach
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      A widespread remote-first network of world-class experts.
                    </p>
                  </div>
                </div>

                {/* Card 4 */}
                <div className="relative p-7 sm:p-8 rounded-4xl overflow-hidden group hover:-translate-y-2 transition-all duration-500">
                  <div className="absolute inset-0 bg-card/60 backdrop-blur-3xl border border-white/0 rounded-4xl z-0 shadow-[inset_0_0_20px_rgba(255,255,255,0.02)] transition-colors duration-500 group-hover:border-accent/20 group-hover:bg-accent/5"></div>
                  <div className="absolute -inset-x-12 -inset-y-12 bg-linear-to-tl from-accent/10 to-transparent opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500 z-0"></div>

                  <div className="relative z-10">
                    <div className="font-heading text-4xl sm:text-5xl font-light text-white/15 mb-6 group-hover:text-accent transition-colors duration-500">
                      04
                    </div>
                    <h3 className="text-white font-medium text-xl mb-3 tracking-tight group-hover:text-accent transition-colors duration-500">
                      Partnership
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Dedicated rapid collaboration treating your business as
                      our own.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({
  value,
  label,
  icon,
}: {
  value: string;
  label: string;
  icon: ReactNode;
}) {
  return (
    <div className="flex items-center gap-4 p-4 rounded-2xl bg-card/30 backdrop-blur-sm transition-colors hover:bg-card/50 cursor-default">
      <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0 shadow-inner">
        {icon}
      </div>
      <div className="flex flex-col">
        <span className="text-2xl font-bold text-white tracking-tight">
          {value}
        </span>
        <span className="text-xs text-muted-foreground">{label}</span>
      </div>
    </div>
  );
}
