import { ChevronRight } from "lucide-react";
import Link from "next/link";

export function WorkWithUsSection() {
  return (
    <section
      id="contact"
      className="bg-background pt-24 overflow-hidden relative border-t border-border/10 scroll-mt-24"
    >
      <div className="max-w-[1250px] mx-auto px-4 sm:px-6 relative z-10 text-center mb-8 md:mb-16">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.05] bg-linear-to-b from-foreground from-20% to-muted-foreground sm:from-foreground sm:from-30% sm:to-muted-foreground to-100% bg-clip-text text-transparent mb-6">
          Contact Us
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
          Based in the GTA, Ontario — serving businesses across Canada with
          premium digital solutions.
        </p>
      </div>

      <div className="relative mx-auto max-w-7xl z-20 w-full md:h-[600px] flex items-center justify-center">
        {/* Map Background */}
        <div className="absolute inset-0 w-full h-full opacity-60 pointer-events-none flex justify-center items-center">
          <img
            src="/world-map.svg"
            className="hidden md:block w-full h-auto object-cover opacity-90 brightness-150 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
            alt="world map"
          />
        </div>

        {/* Floating CTA Form Card */}
        <div className="relative z-30 bg-card/60 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-8 w-full max-w-xl mx-4 sm:mx-auto">
          <h3 className="text-2xl md:text-3xl text-center font-normal text-foreground mb-3">
            Have any questions?
          </h3>
          <p className="text-muted-foreground text-base text-center mb-6">
            Send us a message and we'll get back to you as soon as possible.
          </p>
          <div className="mt-10 flex justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 liquid-glass text-foreground hover:bg-white/10 transition-all duration-300 ease-in-out px-8 py-4 rounded-xl font-medium group relative z-10"
            >
              Get in Touch
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>

        {/* Bottom Giant Brand Text Graphic */}
      </div>

      <div className="pointer-events-none z-0 pt-10">
        <svg
          width="100%"
          height="180"
          viewBox="0 0 800 200"
          className="w-full opacity-60"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <radialGradient
              id="revealMask"
              gradientUnits="userSpaceOnUse"
              r="30%"
              cx="50%"
              cy="50%"
            >
              <stop offset="0%" stopColor="white"></stop>
              <stop offset="100%" stopColor="transparent"></stop>
            </radialGradient>
            <mask id="textMask">
              <rect
                x="0"
                y="0"
                width="100%"
                height="100%"
                fill="url(#revealMask)"
              ></rect>
            </mask>
          </defs>
          {/* Outline Text */}
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            className="font-heading fill-background stroke-white/20 font-bold uppercase tracking-wide text-[220px]"
            style={{ paintOrder: "stroke fill", strokeWidth: "3px" }}
          >
            Verexa
          </text>
          {/* Center Glowing Masked Text */}
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            className="font-heading fill-background stroke-primary font-bold uppercase tracking-wide text-[220px]"
            mask="url(#textMask)"
            style={{ paintOrder: "stroke fill", strokeWidth: "3px" }}
          >
            Verexa
          </text>
        </svg>
      </div>
    </section>
  );
}
