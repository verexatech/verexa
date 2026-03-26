"use client";

import { ReactNode, useState, useRef, MouseEvent, useEffect } from "react";
import { Cloud, PenTool, Server } from "lucide-react";

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
        <div className="text-center mb-16 relative">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.05] bg-linear-to-b from-foreground from-20% to-muted-foreground sm:from-foreground sm:from-30% sm:to-muted-foreground to-100% bg-clip-text text-transparent mb-6">
            What We Do
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Explore the comprehensive services that set Verexa apart in
            delivering digital excellence to Canadian businesses.
          </p>
        </div>

        {/* Top Row: 2 Cards */}
        <div className="flex flex-col md:flex-row justify-between gap-6 mb-6">
          <FeatureCard
            title="Web Design & Development"
            desc="Crafting stunning, highly performant web applications tailored to your brand."
            className="w-full md:w-[49%]"
          >
            <WebGraphic />
          </FeatureCard>

          <FeatureCard
            title="Mobile App Development"
            desc="Native and cross-platform mobile experiences that engage users on the go."
            className="w-full md:w-[49%]"
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
          >
            <CloudGraphic />
          </FeatureCard>

          <FeatureCard
            title="IT & Tech Support"
            desc="24/7 reliable technical assistance to keep your Canadian operations running flawlessly."
            className="w-full md:w-[32%]"
          >
            <SupportGraphic />
          </FeatureCard>

          <FeatureCard
            title="Graphic Designing"
            desc="Captivating visual identities, branding, and striking UI/UX designs."
            className="w-full md:w-[32%]"
          >
            <DesignGraphic />
          </FeatureCard>
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
}: {
  title: string;
  desc: string;
  className?: string;
  children?: ReactNode;
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
    <div
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
      <div className="absolute inset-0 z-10 flex justify-center">
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
    </div>
  );
}

/* =========================================
   Service Specific Graphics 
   ========================================= */

function WebGraphic() {
  return (
    <div className="w-full max-w-[340px] pt-12 px-4 z-10 group">
      <div className="w-full h-[220px] rounded-t-xl bg-card/60 backdrop-blur-sm border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)] flex flex-col overflow-hidden relative">
        {/* Mac OS Title Bar */}
        <div className="h-8 border-b border-white/5 bg-white/5 flex items-center px-4 gap-2 shrink-0 z-20 backdrop-blur-xl relative">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
        </div>
        {/* Wireframe Web UI */}
        <div className="p-4 flex flex-col gap-3 flex-1 relative overflow-hidden">
          <div
            className="flex flex-col gap-3 w-full"
            style={{ animation: "slowScroll 12s linear infinite" }}
          >
            {[1, 2].map((group) => (
              <div key={group} className="flex flex-col gap-3 w-full shrink-0">
                <div className="w-1/3 h-3 rounded-full bg-primary/30"></div>
                <div className="w-full h-24 rounded-lg bg-white/5 flex gap-3 p-3 mt-2 border border-white/5">
                  <div className="w-1/3 h-full rounded bg-white/5"></div>
                  <div className="w-2/3 flex flex-col gap-2">
                    <div className="w-full h-8 rounded bg-primary/20"></div>
                    <div className="w-2/3 h-3 rounded bg-white/10"></div>
                    <div className="w-1/2 h-3 rounded bg-white/10"></div>
                  </div>
                </div>
                <div className="flex gap-2 w-full mt-2">
                  <div className="w-1/2 h-16 rounded-lg bg-white/5 border border-white/5"></div>
                  <div className="w-1/2 h-16 rounded-lg bg-white/5 border border-white/5"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileGraphic() {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % 3);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full pt-10 flex justify-center z-10">
      <div className="w-[180px] h-[340px] rounded-[32px] border-8 border-white/10 bg-card/60 backdrop-blur-sm shadow-2xl relative flex flex-col items-center pt-3 overflow-hidden">
        {/* Phone Notch */}
        <div className="w-16 h-4 rounded-full bg-white/10 mb-4 z-20"></div>
        {/* Phone App Content */}
        <div className="w-full px-4 flex flex-col gap-3 mt-2 h-full relative">
          <div
            className={`w-full h-24 rounded-xl bg-linear-to-br from-primary/40 to-primary/10 border border-primary/20 transition-all duration-700 absolute top-0 left-0 right-0 ${activeTab === 0 ? "translate-y-0 opacity-100 scale-100 relative" : "translate-y-[-20px] opacity-0 scale-95 pointer-events-none"}`}
          ></div>

          <div
            className={`w-full flex gap-2 transition-all duration-700 absolute top-0 left-0 right-0 ${activeTab === 1 ? "translate-y-0 opacity-100 scale-100 relative" : "translate-y-[20px] opacity-0 scale-95 pointer-events-none"}`}
          >
            <div className="w-1/2 h-32 rounded-xl bg-white/5 border border-white/5 flex flex-col gap-2 p-2">
              <div className="w-full h-8 rounded bg-primary/20"></div>
              <div className="w-full h-2 rounded-full bg-white/20"></div>
            </div>
            <div className="w-1/2 h-32 rounded-xl bg-white/5 border border-white/5 flex flex-col gap-2 p-2">
              <div className="w-full h-12 rounded bg-primary/20"></div>
              <div className="w-full h-2 rounded-full bg-white/20"></div>
            </div>
          </div>

          <div
            className={`w-full flex gap-2 transition-all duration-700 absolute top-0 left-0 right-0 flex-col ${activeTab === 2 ? "translate-y-0 opacity-100 scale-100 relative" : "translate-y-[40px] opacity-0 scale-95 pointer-events-none"}`}
          >
            <div className="w-full h-12 rounded-xl bg-primary/20 border border-primary/10"></div>
            <div className="w-full h-12 rounded-xl bg-white/5 border border-white/5 mt-2"></div>
            <div className="w-full h-12 rounded-xl bg-white/5 border border-white/5"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DesignGraphic() {
  return (
    <div className="w-full h-full pt-16 flex justify-center items-start z-10 group">
      <div className="relative w-40 h-40">
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible"
          viewBox="0 0 160 160"
        >
          <path
            d="M 20 140 C 20 60, 100 20, 140 80 C 160 110, 140 150, 90 140"
            stroke="hsl(var(--primary))"
            fill="none"
            strokeWidth="2"
            strokeDasharray="300"
            strokeDashoffset="300"
            style={{ animation: "drawPath 3s ease-in-out infinite alternate" }}
          />
        </svg>
        {/* Floating Abstract Design Elements */}
        <div
          className="absolute top-4 left-4 w-16 h-16 bg-linear-to-br from-primary/30 to-transparent rounded-full backdrop-blur-md border border-white/10"
          style={{ animation: "float 6s ease-in-out infinite" }}
        />
        <div
          className="absolute bottom-6 right-4 w-20 h-10 bg-linear-to-tl from-accent/20 to-transparent rounded-xl backdrop-blur-md border border-white/10"
          style={{ animation: "float 5s ease-in-out infinite reverse" }}
        />

        {/* Vector Anchor Points */}
        <div className="absolute top-2 left-2 w-2 h-2 bg-white shadow-[0_0_10px_white] z-10 rounded-full animate-pulse"></div>
        <div
          className="absolute bottom-2 right-2 w-2 h-2 bg-white shadow-[0_0_10px_white] z-10 rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div className="absolute top-2 right-2 w-2 h-2 bg-primary shadow-[0_0_10px_hsl(var(--primary))] z-10 rounded-full animate-ping"></div>

        {/* Center Glass Panel */}
        <div className="relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-xl bg-black/40 backdrop-blur-xl border border-white/20 flex items-center justify-center shadow-2xl z-20 group-hover:scale-110 transition-all duration-500 hover:border-primary/50 hover:shadow-[0_0_30px_hsl(var(--primary))]">
          <PenTool className="w-8 h-8 text-white drop-shadow-md group-hover:text-primary transition-colors" />
        </div>
      </div>
    </div>
  );
}

function CloudGraphic() {
  const [activeServer, setActiveServer] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveServer((prev) => (prev + 1) % 3);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full pt-16 flex justify-center items-start z-10 relative group">
      {/* Decorative Connectivity Lines */}
      <svg
        viewBox="0 0 200 120"
        className="w-[120%] absolute top-12 opacity-40 pointer-events-none group-hover:opacity-70 transition-opacity duration-500"
      >
        <path
          d="M 20 100 C 20 50, 80 30, 100 50 C 120 30, 180 50, 180 100"
          fill="none"
          stroke="hsl(var(--primary))"
          strokeWidth="2"
          strokeDasharray="6 6"
          style={{ animation: "dashMove 1s linear infinite" }}
        />
      </svg>
      <div className="relative flex flex-col items-center gap-6 mt-4">
        {/* Main Cloud Node */}
        <div className="w-16 h-16 rounded-2xl bg-primary/20 border border-primary/40 flex items-center justify-center shadow-[0_0_30px_hsl(var(--primary)/0.5)] z-10 relative group-hover:scale-110 transition-all duration-500 hover:border-primary/50 hover:shadow-[0_0_40px_hsl(var(--primary))]">
          <div className="absolute inset-0 rounded-2xl bg-primary/30 animate-ping opacity-20 group-hover:opacity-30 transition-opacity"></div>
          <Cloud className="w-8 h-8 text-white drop-shadow-md group-hover:text-accent transition-colors" />
        </div>
        {/* Connected Server Nodes */}
        <div className="flex gap-4">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-lg backdrop-blur-sm relative transition-all duration-500 overflow-hidden ${activeServer === i ? "bg-primary/20 border-primary shadow-[0_0_20px_hsl(var(--primary)/0.4)]" : "bg-card/80 border-white/10"}`}
            >
              <div
                className={`absolute -top-4 w-px h-4 transition-colors duration-500 ${activeServer === i ? "bg-primary shadow-[0_0_10px_hsl(var(--primary))]" : "bg-primary/20"}`}
              ></div>
              <div
                className={`absolute inset-0 bg-linear-to-b from-primary/30 to-transparent transition-opacity duration-500 ${activeServer === i ? "opacity-100" : "opacity-0"}`}
              ></div>
              <Server
                className={`w-5 h-5 transition-colors duration-500 z-10 ${activeServer === i ? "text-primary" : "text-muted-foreground"}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SupportGraphic() {
  const [widths, setWidths] = useState([85, 100, 60]);

  useEffect(() => {
    const interval = setInterval(() => {
      setWidths([
        60 + Math.random() * 40,
        80 + Math.random() * 20,
        40 + Math.random() * 50,
      ]);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full pt-16 flex justify-center items-start z-10">
      <div className="flex flex-col gap-3 w-[85%]">
        {/* Dashboard Status Bars */}
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="w-full h-14 rounded-xl bg-white/5 border border-white/5 p-3 flex items-center gap-4 backdrop-blur-sm shadow-lg overflow-hidden relative"
          >
            {/* Shimmer sweep effect */}
            <div
              className="absolute inset-0 -translate-x-full bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.05),transparent)]"
              style={{ animation: "shimmerLine 3s infinite" }}
            ></div>

            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20 relative z-10">
              {/* Pulsing Status Dot */}
              <div
                className={`w-2 h-2 rounded-full transition-colors duration-1000 ${
                  widths[i] > 80
                    ? "bg-green-400 shadow-[0_0_10px_#4ade80]"
                    : widths[i] > 50
                      ? "bg-yellow-400 shadow-[0_0_10px_#facc15]"
                      : "bg-primary shadow-[0_0_10px_hsl(var(--primary))]"
                }`}
              ></div>
            </div>
            <div className="flex-1 flex flex-col gap-2 relative z-10">
              <div className="w-1/3 h-1.5 rounded-full bg-white/20"></div>
              <div className="h-2 rounded-full bg-white/5 w-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-1000 ease-out ${widths[i] > 80 ? "bg-green-400/80" : widths[i] > 50 ? "bg-yellow-400/80" : "bg-primary"}`}
                  style={{ width: `${widths[i]}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
