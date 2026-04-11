"use client";

import { ReactNode, useState, useRef, MouseEvent } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import {
  WebGraphic,
  MobileGraphic,
  CloudGraphic,
  SupportGraphic,
  DesignGraphic,
} from "@/components/service-graphics";

export function ServicesSection() {
  return (
    <section
      id="services"
      className="bg-background overflow-hidden relative border-t border-border/10 scroll-mt-24 pt-24"
    >
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes slowScroll {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @keyframes dashMove {
          to { stroke-dashoffset: -24; }
        }
        @keyframes drawPath {
          0% { stroke-dashoffset: 300; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes shapeMorph {
          0%, 100% { border-radius: 20%; transform: rotate(0deg) scale(1); }
          50% { border-radius: 50%; transform: rotate(180deg) scale(1.05); }
        }
        @keyframes shimmerLine {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `,
        }}
      />
      <div className="max-w-[1250px] mx-auto px-4 sm:px-6 relative z-10 sm:pt-0 object-contain">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16 relative"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.05] bg-linear-to-b from-foreground from-20% to-muted-foreground sm:from-foreground sm:from-30% sm:to-muted-foreground to-100% bg-clip-text text-transparent mb-6">
            Our Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Explore the comprehensive services that set Verexa apart in
            delivering digital excellence to Canadian businesses.
          </p>
        </motion.div>

        {/* Top Row: 2 Cards */}
        <div className="flex flex-col md:flex-row justify-between gap-6 mb-6">
          <FeatureCard
            title="Web Design & Development"
            desc="Crafting stunning, highly performant web applications tailored to your brand."
            className="w-full md:w-[49%]"
            delay={0.1}
          >
            <WebGraphic />
          </FeatureCard>

          <FeatureCard
            title="Mobile App Development"
            desc="Native and cross-platform mobile experiences that engage users on the go."
            className="w-full md:w-[49%]"
            delay={0.2}
          >
            <MobileGraphic />
          </FeatureCard>
        </div>

        {/* Bottom Row: 3 Cards */}
        <div className="flex flex-col md:flex-row justify-between gap-6">
          <FeatureCard
            title="Cloud Infrastructure"
            desc="Scalable, secure, and robust cloud architectures for your enterprise."
            className="w-full md:w-[32%]"
            delay={0.1}
          >
            <CloudGraphic />
          </FeatureCard>

          <FeatureCard
            title="IT & Tech Support"
            desc="24/7 reliable technical assistance to keep your Canadian operations running flawlessly."
            className="w-full md:w-[32%]"
            delay={0.2}
          >
            <SupportGraphic />
          </FeatureCard>

          <FeatureCard
            title="Graphic Designing"
            desc="Captivating visual identities, branding, and striking UI/UX designs."
            className="w-full md:w-[32%]"
            delay={0.3}
          >
            <DesignGraphic />
          </FeatureCard>
        </div>

        <div className="mt-8 md:mt-16 flex justify-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 liquid-glass text-foreground hover:bg-white/10 transition-all duration-300 ease-in-out px-8 py-4 rounded-xl font-medium group relative z-10"
          >
            Explore All Services
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* Feature Card Wrapper */
function FeatureCard({
  title,
  desc,
  className,
  children,
  delay = 0,
}: {
  title: string;
  desc: string;
  className?: string;
  children?: ReactNode;
  delay?: number;
}) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`h-[380px] shrink-0 rounded-[20px] relative overflow-hidden bg-card/40 border border-white/5 transition-colors duration-500 hover:bg-card/60 ${className}`}
    >
      {/* Background Grid Layer */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-size-[24px_24px] mask-[linear-gradient(to_bottom,black_40%,transparent_90%)] z-0 pointer-events-none opacity-50"></div>

      {/* Accent Glow */}
      <div
        className={`absolute w-[300px] h-[300px] bg-primary/40 blur-[80px] rounded-full pointer-events-none z-0 transition-opacity duration-500 ${isHovered ? "opacity-100" : "opacity-0"}`}
        style={{
          left: mousePosition.x - 200,
          top: mousePosition.y - 200,
        }}
      ></div>

      {/* Main Content Area */}
      <div className="absolute inset-0 z-10 flex justify-center items-center">
        {children}
      </div>

      {/* Bottom Fade Gradient Overlay */}
      <div className="absolute bottom-0 inset-x-0 h-[60%] bg-linear-to-b from-transparent via-background/80 to-background pointer-events-none z-20"></div>

      {/* Top Border Highlight */}
      <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent pointer-events-none z-30"></div>

      {/* Label Text Area */}
      <div className="absolute bottom-0 inset-x-0 p-8 pt-0 z-30 flex flex-col items-center">
        <h3 className="text-xl font-medium mb-2 text-white">{title}</h3>
        <p className="text-muted-foreground text-center text-sm leading-relaxed">
          {desc}
        </p>
      </div>
    </motion.div>
  );
}
