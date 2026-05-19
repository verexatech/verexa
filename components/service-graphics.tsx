"use client";

import { useState, useEffect } from "react";
import {
  Cloud,
  PenTool,
  Server,
  Bot,
  Database,
  Workflow,
  Zap,
  FileEdit,
  GitMerge,
  MessageSquare,
  Box,
  BrainCircuit,
  Plus,
  Palette,
  Layers,
  Type,
  MousePointer2,
  Square,
  Circle,
  ShieldCheck,
  Laptop,
  CheckCircle2,
  Lock,
  Terminal,
  Code2,
  Smartphone,
  Bell,
  Globe,
  Rocket,
  TrendingUp,
  BarChart3,
  Target,
  Megaphone,
  MousePointerClick,
} from "lucide-react";

export function WebGraphic() {
  return (
    <div className="w-full h-full flex items-center justify-center relative p-4 group perspective-[1000px]">
      <style>{`
        @keyframes webFloat {
          0%, 100% { transform: rotateX(15deg) rotateY(-15deg) translateY(0); }
          50% { transform: rotateX(18deg) rotateY(-12deg) translateY(-10px); }
        }
        @keyframes webLayer1 {
          0%, 100% { transform: translateZ(30px) translateY(0); }
          50% { transform: translateZ(30px) translateY(-5px); }
        }
        @keyframes webLayer2 {
          0%, 100% { transform: translateZ(60px) translateY(0); }
          50% { transform: translateZ(60px) translateY(-10px); }
        }
        @keyframes codeScroll {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @keyframes cursorMove {
          0%, 100% { transform: translateZ(80px) translate(0px, 0px) scale(1); }
          33% { transform: translateZ(80px) translate(60px, -40px) scale(1); }
          38% { transform: translateZ(80px) translate(60px, -40px) scale(0.8); }
          43% { transform: translateZ(80px) translate(60px, -40px) scale(1); }
          66% { transform: translateZ(80px) translate(80px, 20px) scale(1); }
        }
      `}</style>

      <div className="absolute inset-0 bg-primary/10 blur-[80px] rounded-full group-hover:bg-primary/20 transition-colors duration-500"></div>

      <div
        className="relative w-full max-w-[340px] aspect-4/3 z-10 transition-transform duration-700"
        style={{
          transformStyle: "preserve-3d",
          animation: "webFloat 8s ease-in-out infinite",
        }}
      >
        {/* Main Browser Window */}
        <div className="absolute inset-0 bg-card/60 backdrop-blur-xl border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.5)] rounded-2xl overflow-hidden flex flex-col">
          <div className="h-8 border-b border-white/10 bg-white/5 flex items-center px-4 gap-2 shrink-0">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
            <div className="mx-auto w-1/3 h-4 rounded-md bg-white/10"></div>
          </div>

          <div className="flex-1 p-4 flex gap-4">
            <div className="w-1/4 h-full rounded-lg bg-white/5 border border-white/5 flex flex-col gap-2 p-2">
              <div className="w-full h-3 rounded-sm bg-white/10"></div>
              <div className="w-2/3 h-2 rounded-sm bg-white/5 mt-2"></div>
              <div className="w-3/4 h-2 rounded-sm bg-white/5"></div>
              <div className="w-1/2 h-2 rounded-sm bg-white/5"></div>
            </div>
            <div className="flex-1 h-full flex flex-col gap-3">
              <div className="w-full h-24 rounded-lg bg-primary/20 border border-primary/20 overflow-hidden relative">
                <div
                  className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%)] bg-size-[200%_200%]"
                  style={{ animation: "shimmerLine 3s infinite" }}
                ></div>
              </div>
              <div className="flex gap-2">
                <div className="flex-1 h-16 rounded-lg bg-white/5 border border-white/5"></div>
                <div className="flex-1 h-16 rounded-lg bg-white/5 border border-white/5"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Code Panel */}
        <div
          className="absolute top-10 -left-8 w-32 h-24 rounded-xl bg-black/80 backdrop-blur-2xl border border-white/10 shadow-2xl p-2.5 flex flex-col gap-1.5 z-20 overflow-hidden"
          style={{ animation: "webLayer1 6s ease-in-out infinite alternate" }}
        >
          <div className="flex items-center gap-1.5 text-muted-foreground text-[9px] font-mono relative z-10 bg-[#0f0f0f] -mx-2.5 -mt-2.5 px-2.5 pt-2.5 pb-1.5">
            <Code2 className="w-3 h-3 text-primary" /> React.tsx
          </div>
          <div
            className="font-mono text-[6px] text-white/50 whitespace-pre"
            style={{ animation: "codeScroll 10s linear infinite" }}
          >
            <span className="text-pink-400">import</span> React{" "}
            <span className="text-pink-400">from</span> 'react';{"\n"}
            <span className="text-pink-400">export function</span> App() {"{"}
            {"\n"}
            {"  "}
            <span className="text-pink-400">return</span> ({"\n"}
            {"    "}&lt;<span className="text-blue-400">div</span> className=
            <span className="text-green-400">"app"</span>&gt;{"\n"}
            {"      "}&lt;<span className="text-blue-400">Header</span> /&gt;
            {"\n"}
            {"      "}&lt;<span className="text-blue-400">Hero</span> /&gt;
            {"\n"}
            {"    "}&lt;/<span className="text-blue-400">div</span>&gt;{"\n"}
            {"  "});{"\n"}
            {"}"}
          </div>
        </div>

        {/* Floating Deployment Badge */}
        <div
          className="absolute -bottom-4 right-4 py-2 px-4 rounded-xl bg-primary/20 backdrop-blur-2xl border border-primary/30 shadow-2xl flex items-center gap-2 z-20"
          style={{
            animation: "webLayer2 7s ease-in-out infinite alternate-reverse",
          }}
        >
          <Rocket className="w-4 h-4 text-primary" />
          <span className="text-white text-[10px] font-bold tracking-wider">
            DEPLOYED
          </span>
        </div>

        {/* Floating Cursor */}
        <div
          className="absolute top-1/2 left-1/3 z-30 pointer-events-none drop-shadow-2xl"
          style={{
            animation: "cursorMove 5s ease-in-out infinite",
            transformStyle: "preserve-3d",
          }}
        >
          <MousePointer2 className="w-5 h-5 text-white fill-primary rotate-[-15deg]" />
        </div>
      </div>
    </div>
  );
}

export function MobileGraphic() {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    // Defer the interval start so it doesn't block initial render
    let interval: ReturnType<typeof setInterval>;
    const start = () => {
      interval = setInterval(() => {
        setActiveTab((prev) => (prev + 1) % 3);
      }, 2500);
    };

    if (typeof window !== "undefined" && "requestIdleCallback" in window) {
      (
        window as Window & {
          requestIdleCallback: (cb: () => void, opts?: object) => void;
        }
      ).requestIdleCallback(start, { timeout: 2000 });
    } else {
      const t = setTimeout(start, 2000);
      return () => clearTimeout(t);
    }

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center relative p-4 group perspective-[1000px]">
      <style>{`
        @keyframes mobileFloat {
          0%, 100% { transform: rotateX(15deg) rotateY(15deg) translateY(0); }
          50% { transform: rotateX(18deg) rotateY(12deg) translateY(-10px); }
        }
        @keyframes mobileLayer1 {
          0%, 100% { transform: translateZ(40px) translateY(0); }
          50% { transform: translateZ(40px) translateY(-5px); }
        }
        @keyframes mobileLayer2 {
          0%, 100% { transform: translateZ(70px) translateY(0); }
          50% { transform: translateZ(70px) translateY(-8px); }
        }
      `}</style>

      <div className="absolute inset-0 bg-primary/10 blur-[80px] rounded-full group-hover:bg-primary/20 transition-colors duration-500"></div>

      <div
        className="relative w-[180px] h-[360px] z-10 transition-transform duration-700"
        style={{
          transformStyle: "preserve-3d",
          animation: "mobileFloat 8s ease-in-out infinite",
        }}
      >
        {/* Phone Body */}
        <div className="absolute inset-0 bg-card/80 backdrop-blur-xl border-4 border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.6)] rounded-[32px] overflow-hidden flex flex-col items-center">
          <div className="w-16 h-5 bg-black/80 rounded-b-xl absolute top-0 z-20 flex justify-center items-center">
            <div className="w-2 h-2 rounded-full bg-white/20"></div>
          </div>

          <div className="w-full h-full p-3 pt-8 flex flex-col bg-black/40 relative overflow-hidden">
            <div className="relative flex-1 w-full">
              {/* Tab 0 */}
              <div
                className={`absolute inset-0 flex flex-col gap-3 transition-all duration-700 ${activeTab === 0 ? "translate-y-0 opacity-100 scale-100" : "translate-y-[-20px] opacity-0 scale-95 pointer-events-none"}`}
              >
                <div className="w-full h-24 rounded-xl bg-linear-to-br from-primary/40 to-primary/10 border border-primary/20"></div>
                <div className="flex gap-2">
                  <div className="w-1/2 h-20 rounded-xl bg-white/5 border border-white/5 p-2 flex flex-col gap-1.5">
                    <div className="w-6 h-6 rounded-md bg-primary/30 mb-1"></div>
                    <div className="w-full h-2 rounded-sm bg-white/20"></div>
                    <div className="w-2/3 h-2 rounded-sm bg-white/10"></div>
                  </div>
                  <div className="w-1/2 h-20 rounded-xl bg-white/5 border border-white/5 p-2 flex flex-col gap-1.5">
                    <div className="w-6 h-6 rounded-md bg-accent/30 mb-1"></div>
                    <div className="w-full h-2 rounded-sm bg-white/20"></div>
                    <div className="w-1/2 h-2 rounded-sm bg-white/10"></div>
                  </div>
                </div>
              </div>

              {/* Tab 1 */}
              <div
                className={`absolute inset-0 flex flex-col gap-3 transition-all duration-700 ${activeTab === 1 ? "translate-y-0 opacity-100 scale-100" : "translate-y-[20px] opacity-0 scale-95 pointer-events-none"}`}
              >
                <div className="w-full h-12 rounded-xl bg-primary/20 border border-primary/10"></div>
                <div className="w-full h-32 rounded-xl bg-white/5 border border-white/5 p-3 flex flex-col gap-2">
                  <div className="w-full h-20 rounded-lg bg-black/50"></div>
                  <div className="w-3/4 h-2 rounded-sm bg-white/20 mt-1"></div>
                  <div className="w-1/2 h-2 rounded-sm bg-white/10"></div>
                </div>
              </div>

              {/* Tab 2 */}
              <div
                className={`absolute inset-0 flex flex-col gap-2 transition-all duration-700 ${activeTab === 2 ? "translate-y-0 opacity-100 scale-100" : "translate-y-[40px] opacity-0 scale-95 pointer-events-none"}`}
              >
                <div className="w-full h-16 rounded-xl bg-accent/20 border border-accent/10 flex items-center p-3 gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/10"></div>
                  <div className="flex-1 flex flex-col gap-1.5">
                    <div className="w-full h-2 rounded-sm bg-white/20"></div>
                    <div className="w-2/3 h-2 rounded-sm bg-white/10"></div>
                  </div>
                </div>
                <div className="w-full h-16 rounded-xl bg-white/5 border border-white/5 flex items-center p-3 gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/10"></div>
                  <div className="flex-1 flex flex-col gap-1.5">
                    <div className="w-full h-2 rounded-sm bg-white/20"></div>
                    <div className="w-2/3 h-2 rounded-sm bg-white/10"></div>
                  </div>
                </div>
                <div className="w-full h-16 rounded-xl bg-white/5 border border-white/5 flex items-center p-3 gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/10"></div>
                  <div className="flex-1 flex flex-col gap-1.5">
                    <div className="w-full h-2 rounded-sm bg-white/20"></div>
                    <div className="w-2/3 h-2 rounded-sm bg-white/10"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Nav */}
            <div className="w-full h-16 rounded-xl bg-white/5 border border-white/5 mt-auto mb-2 flex items-center justify-around px-2 shrink-0 relative z-10">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${activeTab === 0 ? "bg-primary/40" : "bg-white/10"}`}
              ></div>
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${activeTab === 1 ? "bg-primary/40" : "bg-white/10"}`}
              ></div>
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${activeTab === 2 ? "bg-primary/40" : "bg-white/10"}`}
              ></div>
            </div>
          </div>
        </div>

        {/* Notification Bubble */}
        <div
          className="absolute top-16 -right-6 py-2 px-3 rounded-xl bg-card/90 backdrop-blur-2xl border border-white/10 shadow-2xl flex items-center gap-2 z-20"
          style={{
            animation: "mobileLayer2 5s ease-in-out infinite alternate",
          }}
        >
          <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center">
            <Bell className="w-3 h-3 text-red-400" />
          </div>
          <div className="flex flex-col gap-1">
            <div className="h-1.5 w-10 bg-white/40 rounded-full"></div>
            <div className="h-1.5 w-6 bg-white/20 rounded-full"></div>
          </div>
        </div>

        {/* App Widget */}
        <div
          className="absolute top-1/2 -left-8 w-20 h-20 rounded-2xl bg-card/90 backdrop-blur-2xl border border-white/10 shadow-2xl flex flex-col items-center justify-center gap-2 z-20"
          style={{
            animation: "mobileLayer1 6s ease-in-out infinite alternate-reverse",
          }}
        >
          <Smartphone className="w-6 h-6 text-primary" />
          <div className="h-1.5 w-8 bg-white/20 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}

export function DesignGraphic() {
  return (
    <div className="w-full h-full flex items-center justify-center relative p-4 group perspective-[1000px]">
      <style>{`
        @keyframes floatWorkspace {
          0%, 100% { transform: rotateX(15deg) rotateY(-10deg) translateY(0); }
          50% { transform: rotateX(18deg) rotateY(-5deg) translateY(-10px); }
        }
        @keyframes cursorMove {
          0% { transform: translate(0, 0); }
          25% { transform: translate(80px, -20px); }
          50% { transform: translate(140px, 40px); }
          75% { transform: translate(60px, 80px); }
          100% { transform: translate(0, 0); }
        }
        @keyframes drawShape {
          0%, 100% { width: 50px; height: 50px; border-radius: 25px; transform: rotate(0deg); }
          33% { width: 90px; height: 50px; border-radius: 15px; transform: rotate(20deg); }
          66% { width: 70px; height: 70px; border-radius: 35px; transform: rotate(-20deg); }
        }
        @keyframes drawStroke {
          0%, 100% { stroke-dashoffset: 200; }
          50% { stroke-dashoffset: 0; }
        }
        @keyframes paletteFloat {
          0%, 100% { transform: translateZ(40px) translateY(0); }
          50% { transform: translateZ(40px) translateY(-8px); }
        }
      `}</style>

      {/* Background ambient glow */}
      <div className="absolute inset-0 bg-primary/10 blur-[80px] rounded-full group-hover:bg-primary/20 transition-colors duration-500"></div>

      {/* 3D Workspace Container */}
      <div
        className="relative w-full max-w-[340px] aspect-4/3 z-10 transition-transform duration-700"
        style={{
          transformStyle: "preserve-3d",
          animation: "floatWorkspace 8s ease-in-out infinite",
        }}
      >
        {/* Main Canvas / Artboard */}
        <div className="absolute inset-0 bg-card/40 backdrop-blur-xl border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.4)] rounded-2xl overflow-hidden flex items-center justify-center">
          {/* Grid pattern on canvas */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-size-[24px_24px]"></div>

          {/* Morphing Graphic Shape */}
          <div
            className="relative z-10 bg-linear-to-tr from-primary to-accent shadow-[0_0_40px_hsl(var(--primary)/0.4)] flex items-center justify-center overflow-hidden"
            style={{ animation: "drawShape 6s ease-in-out infinite" }}
          >
            <div className="absolute inset-0 bg-white/20 mix-blend-overlay"></div>
          </div>

          {/* Vector Path / Bezier Curve drawing */}
          <svg
            viewBox="0 0 200 200"
            className="absolute inset-0 w-full h-full pointer-events-none z-0"
          >
            <path
              d="M 40 160 C 80 160, 80 40, 160 40"
              stroke="hsl(var(--primary))"
              strokeWidth="3"
              fill="none"
              strokeDasharray="200"
              strokeDashoffset="200"
              style={{ animation: "drawStroke 4s ease-in-out infinite" }}
              strokeLinecap="round"
            />

            {/* Dynamic anchor points */}
            <circle
              cx="40"
              cy="160"
              r="4"
              fill="white"
              className="drop-shadow-md"
            />
            <circle
              cx="160"
              cy="40"
              r="4"
              fill="white"
              className="drop-shadow-md"
            />

            {/* Bezier Handles */}
            <path
              d="M 40 160 L 80 160"
              stroke="rgba(255,255,255,0.4)"
              strokeWidth="1.5"
              strokeDasharray="3 3"
              fill="none"
            />
            <path
              d="M 160 40 L 80 40"
              stroke="rgba(255,255,255,0.4)"
              strokeWidth="1.5"
              strokeDasharray="3 3"
              fill="none"
            />
            <circle cx="80" cy="160" r="3" fill="hsl(var(--accent))" />
            <circle cx="80" cy="40" r="3" fill="hsl(var(--accent))" />
          </svg>

          {/* Bounding Box on the morphing shape */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-primary/50 border-dashed pointer-events-none transition-all duration-300"
            style={{
              animation: "drawShape 6s ease-in-out infinite",
              padding: "2px",
            }}
          >
            {/* Transform Handles */}
            <div className="absolute -top-1.5 -left-1.5 w-2.5 h-2.5 bg-white border border-primary shadow-sm"></div>
            <div className="absolute -top-1.5 -right-1.5 w-2.5 h-2.5 bg-white border border-primary shadow-sm"></div>
            <div className="absolute -bottom-1.5 -left-1.5 w-2.5 h-2.5 bg-white border border-primary shadow-sm"></div>
            <div className="absolute -bottom-1.5 -right-1.5 w-2.5 h-2.5 bg-white border border-primary shadow-sm"></div>
          </div>
        </div>

        {/* Floating Toolbars/Panels using TranslateZ for 3D effect */}

        {/* Left Toolbar */}
        <div
          className="absolute top-1/2 -translate-y-1/2 -left-6 w-12 py-3 rounded-2xl bg-card/80 backdrop-blur-2xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex flex-col items-center gap-3 z-20"
          style={{
            animation: "paletteFloat 6s ease-in-out infinite alternate",
          }}
        >
          <div className="w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center hover:bg-primary/20 transition-colors text-muted-foreground hover:text-primary">
            <MousePointer2 className="w-4 h-4" />
          </div>
          <div className="w-8 h-8 rounded-xl bg-primary/20 flex items-center justify-center text-primary shadow-inner border border-primary/20">
            <PenTool className="w-4 h-4" />
          </div>
          <div className="w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center hover:bg-primary/20 transition-colors text-muted-foreground hover:text-primary">
            <Type className="w-4 h-4" />
          </div>
          <div className="w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center hover:bg-primary/20 transition-colors text-muted-foreground hover:text-primary">
            <Palette className="w-4 h-4" />
          </div>
        </div>

        {/* Right Layers Panel */}
        <div
          className="absolute top-4 -right-8 w-36 rounded-2xl bg-card/80 backdrop-blur-2xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)] p-3 flex flex-col gap-2 z-20"
          style={{
            animation: "paletteFloat 7s ease-in-out infinite alternate-reverse",
          }}
        >
          <div className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider mb-1 flex items-center gap-1.5">
            <Layers className="w-3 h-3" /> Layers
          </div>

          <div className="flex items-center gap-2 p-1.5 rounded-lg bg-primary/20 border border-primary/20">
            <Circle className="w-3.5 h-3.5 text-primary shrink-0" />
            <div className="flex-1 h-1.5 bg-primary/40 rounded-full"></div>
          </div>

          <div className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-white/5 transition-colors">
            <Square className="w-3.5 h-3.5 text-muted-foreground shrink-0" />
            <div className="w-3/4 h-1.5 bg-white/20 rounded-full"></div>
          </div>

          <div className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-white/5 transition-colors">
            <Type className="w-3.5 h-3.5 text-muted-foreground shrink-0" />
            <div className="w-full h-1.5 bg-white/20 rounded-full"></div>
          </div>
        </div>

        {/* Animated Mouse Cursor */}
        <div
          className="absolute top-[20%] left-[20%] z-30 pointer-events-none drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]"
          style={{
            animation: "cursorMove 6s ease-in-out infinite",
            transformStyle: "preserve-3d",
          }}
        >
          {/* Custom OS Cursor style */}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="1.5"
            className="rotate-[-15deg] drop-shadow-md"
          >
            <path d="M4 4l16 16-5.5.5-2.5 4.5-2.5-4.5-5.5-.5z" fill="black" />
          </svg>
          <div className="absolute top-5 left-4 bg-primary text-white text-[11px] font-medium px-2.5 py-0.5 rounded-full shadow-lg whitespace-nowrap border border-white/10">
            John
          </div>
        </div>
      </div>
    </div>
  );
}

export function CloudGraphic() {
  return (
    <div className="w-full h-full flex items-center justify-center relative p-4 group perspective-[1000px]">
      <style>{`
        @keyframes stackFloat {
          0%, 100% { transform: rotateX(25deg) rotateZ(-15deg) translateY(0); }
          50% { transform: rotateX(28deg) rotateZ(-12deg) translateY(-10px); }
        }
        @keyframes dataPulse {
          0% { transform: translateY(0); opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { transform: translateY(-40px); opacity: 0; }
        }
      `}</style>

      {/* Background ambient glow */}
      <div className="absolute inset-0 bg-primary/10 blur-[80px] rounded-full group-hover:bg-primary/20 transition-colors duration-500"></div>

      <div
        className="relative w-full max-w-[340px] aspect-4/3 z-10 transition-transform duration-700 bg-card/40 backdrop-blur-xl border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.5)] rounded-2xl overflow-hidden flex flex-col"
        style={{
          transformStyle: "preserve-3d",
          animation: "stackFloat 8s ease-in-out infinite",
        }}
      >
        {/* Header */}
        <div className="h-8 border-b border-white/10 bg-white/5 flex items-center px-4 gap-2 shrink-0 z-20 relative">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
          <div className="ml-auto text-[10px] text-muted-foreground font-mono flex items-center gap-1.5">
            <Cloud className="w-3 h-3" /> infrastructure.tf
          </div>
        </div>

        {/* Flat Background Content (Code/Terminal) */}
        <div className="absolute inset-0 top-8 flex-1 p-4 flex flex-col gap-2 opacity-30 z-0 pointer-events-none">
          <div className="flex items-center gap-2">
             <span className="text-green-400 text-[10px] font-mono">aws_instance.web:</span>
             <div className="h-1.5 w-16 bg-white/20 rounded-full"></div>
          </div>
          <div className="flex items-center gap-2">
             <span className="text-blue-400 text-[10px] font-mono">aws_db_instance.main:</span>
             <div className="h-1.5 w-24 bg-white/20 rounded-full"></div>
          </div>
          <div className="flex items-center gap-2">
             <span className="text-yellow-400 text-[10px] font-mono">creating...</span>
             <div className="h-1.5 w-12 bg-white/20 rounded-full"></div>
          </div>
          <div className="mt-4 w-full h-px bg-white/5"></div>
          <div className="flex items-center gap-2 mt-2">
             <span className="text-primary text-[10px] font-mono">Apply complete!</span>
             <div className="h-1.5 w-20 bg-white/20 rounded-full"></div>
          </div>
        </div>

        {/* 3D Stack */}
        <div className="absolute inset-0 top-8 flex flex-col items-center justify-center z-10" style={{ transformStyle: "preserve-3d" }}>
          {/* Top Layer: Cloud Edge */}
          <div
            className="absolute w-[200px] h-[100px] bg-primary/10 backdrop-blur-xl border border-primary/30 rounded-3xl flex items-center justify-center shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
            style={{ transform: "translateZ(80px)" }}
          >
            <div
              className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%)] bg-size-[200%_200%]"
              style={{ animation: "shimmerLine 3s infinite" }}
            ></div>
            <Cloud className="w-10 h-10 text-white drop-shadow-[0_0_15px_hsl(var(--primary))]" />
            {/* Data streams falling from cloud */}
            <div
              className="absolute top-full left-1/4 w-1 h-8 bg-linear-to-b from-primary to-transparent"
              style={{ animation: "dataPulse 2s infinite" }}
            ></div>
            <div
              className="absolute top-full left-1/2 w-1 h-8 bg-linear-to-b from-primary to-transparent"
              style={{ animation: "dataPulse 2s infinite 0.7s" }}
            ></div>
            <div
              className="absolute top-full right-1/4 w-1 h-8 bg-linear-to-b from-primary to-transparent"
              style={{ animation: "dataPulse 2s infinite 1.4s" }}
            ></div>
          </div>

          {/* Middle Layer: API / Gateway */}
          <div
            className="absolute w-[240px] h-[120px] bg-card/60 backdrop-blur-md border border-white/10 rounded-2xl flex items-center justify-center gap-4 shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
            style={{ transform: "translateZ(40px)" }}
          >
            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
              <Server className="w-5 h-5 text-muted-foreground" />
            </div>
            <div className="w-12 h-12 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center shadow-[0_0_20px_hsl(var(--primary)/0.3)]">
              <Globe className="w-5 h-5 text-primary" />
            </div>
            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
              <Server className="w-5 h-5 text-muted-foreground" />
            </div>
          </div>

          {/* Bottom Layer: Databases */}
          <div
            className="absolute w-[280px] h-[140px] bg-black/40 backdrop-blur-sm border border-white/5 rounded-xl flex items-end justify-center gap-6 pb-4 shadow-[0_30px_50px_rgba(0,0,0,0.6)]"
            style={{ transform: "translateZ(0px)" }}
          >
            <div className="flex flex-col gap-2 items-center">
              <Database className="w-6 h-6 text-accent/60" />
              <div className="w-16 h-2 rounded-full bg-accent/20"></div>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <Database className="w-6 h-6 text-accent" />
              <div className="w-16 h-2 rounded-full bg-accent/40 shadow-[0_0_10px_hsl(var(--accent))]"></div>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <Database className="w-6 h-6 text-accent/60" />
              <div className="w-16 h-2 rounded-full bg-accent/20"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SupportGraphic() {
  return (
    <div className="w-full h-full flex items-center justify-center relative p-4 group perspective-[1000px]">
      <style>{`
        @keyframes supportFloat {
          0%, 100% { transform: rotateX(20deg) rotateY(-15deg) translateY(0); }
          50% { transform: rotateX(22deg) rotateY(-12deg) translateY(-10px); }
        }
        @keyframes scanSweep {
          0% { left: -20%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { left: 120%; opacity: 0; }
        }
        @keyframes blinkNormal {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        @keyframes alertBlink {
          0%, 30%, 100% { background-color: rgba(34, 197, 94, 0.1); border-color: rgba(34, 197, 94, 0.3); color: #4ade80; }
          40%, 60% { background-color: rgba(239, 68, 68, 0.2); border-color: rgba(239, 68, 68, 0.5); color: #f87171; box-shadow: 0 0 20px rgba(239, 68, 68, 0.4); }
        }
        @keyframes floatLayer1 {
          0%, 100% { transform: translateZ(30px) translateY(0); }
          50% { transform: translateZ(30px) translateY(-5px); }
        }
        @keyframes floatLayer2 {
          0%, 100% { transform: translateZ(60px) translateY(0); }
          50% { transform: translateZ(60px) translateY(-8px); }
        }
        @keyframes waveScroll {
          to { stroke-dashoffset: -200; }
        }
      `}</style>

      {/* Background ambient glow */}
      <div className="absolute inset-0 bg-blue-500/10 blur-[80px] rounded-full group-hover:bg-blue-500/20 transition-colors duration-500"></div>

      <div
        className="relative w-full max-w-[340px] aspect-4/3 z-10 transition-transform duration-700"
        style={{
          transformStyle: "preserve-3d",
          animation: "supportFloat 8s ease-in-out infinite",
        }}
      >
        {/* Main Dashboard Panel */}
        <div className="absolute inset-0 bg-card/40 backdrop-blur-xl border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.5)] rounded-2xl overflow-hidden flex flex-col">
          {/* Header */}
          <div className="h-8 border-b border-white/10 bg-white/5 flex items-center px-4 gap-2 shrink-0">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
            <div className="ml-auto text-[10px] text-muted-foreground font-mono flex items-center gap-1.5">
              <Terminal className="w-3 h-3" /> sys_monitor.sh
            </div>
          </div>

          {/* Content area */}
          <div className="flex-1 relative p-4 flex flex-col gap-4">
            {/* Server Status Rows */}
            <div className="flex flex-col gap-2 relative z-10">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-2 rounded-lg bg-white/5 border border-white/5"
                >
                  <Server className="w-4 h-4 text-muted-foreground" />
                  <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary/60 rounded-full"
                      style={{ width: `${80 - i * 15}%` }}
                    ></div>
                  </div>
                  <div
                    className="w-2 h-2 rounded-full bg-green-400"
                    style={{
                      animation: `blinkNormal ${1 + i * 0.5}s infinite`,
                    }}
                  ></div>
                </div>
              ))}
            </div>

            {/* Network Graph Area */}
            <div className="flex-1 rounded-lg bg-black/40 border border-white/10 relative overflow-hidden flex items-end">
              {/* Grid */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-size-[10px_10px]"></div>

              {/* Activity SVG Wave */}
              <svg
                viewBox="0 0 200 60"
                className="absolute bottom-0 w-full h-[80%]"
                preserveAspectRatio="none"
              >
                <path
                  d="M 0 30 Q 10 10, 20 30 T 40 30 T 60 30 T 80 10 T 100 50 T 120 30 T 140 30 T 160 20 T 180 40 T 200 30 L 200 60 L 0 60 Z"
                  fill="hsl(var(--primary)/0.1)"
                />
                <path
                  d="M 0 30 Q 10 10, 20 30 T 40 30 T 60 30 T 80 10 T 100 50 T 120 30 T 140 30 T 160 20 T 180 40 T 200 30"
                  fill="none"
                  stroke="hsl(var(--primary))"
                  strokeWidth="1.5"
                  strokeDasharray="10 10"
                  style={{ animation: "waveScroll 3s linear infinite" }}
                />
              </svg>

              {/* Sweeping Scanner Line */}
              <div
                className="absolute top-0 bottom-0 w-8 bg-linear-to-r from-transparent via-primary/30 to-primary/80 border-r border-primary shadow-[0_0_15px_hsl(var(--primary))]"
                style={{ animation: "scanSweep 4s ease-in-out infinite" }}
              ></div>
            </div>
          </div>
        </div>

        {/* Floating Elements (Z-translated) */}

        {/* Top Right: Security Shield */}
        <div
          className="absolute -top-6 -right-6 w-16 h-16 rounded-2xl bg-card/80 backdrop-blur-2xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex items-center justify-center z-20"
          style={{ animation: "floatLayer2 7s ease-in-out infinite alternate" }}
        >
          <div className="absolute inset-0 bg-blue-500/20 rounded-2xl animate-ping opacity-20"></div>
          <ShieldCheck className="w-8 h-8 text-blue-400 drop-shadow-[0_0_10px_rgba(96,165,250,0.8)]" />
        </div>

        {/* Left Floating Node: Device Alert Widget */}
        <div
          className="absolute top-1/3 -left-10 p-3 rounded-xl bg-card/80 backdrop-blur-2xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex items-center gap-3 z-20"
          style={{
            animation: "floatLayer1 5s ease-in-out infinite alternate-reverse",
          }}
        >
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors border"
            style={{ animation: "alertBlink 8s infinite" }}
          >
            <Laptop className="w-5 h-5" />
          </div>
          <div className="flex flex-col gap-1 pr-2">
            <div className="h-1.5 w-12 bg-white/20 rounded-full"></div>
            <div className="h-1.5 w-8 bg-white/10 rounded-full"></div>
          </div>
        </div>

        {/* Bottom Right Floating Node: Uptime Check */}
        <div
          className="absolute -bottom-4 right-4 py-2 px-4 rounded-full bg-green-500/10 backdrop-blur-2xl border border-green-500/30 shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex items-center gap-2 z-20"
          style={{ animation: "floatLayer2 6s ease-in-out infinite alternate" }}
        >
          <CheckCircle2 className="w-4 h-4 text-green-400" />
          <span className="text-green-400 text-[10px] font-bold tracking-wider">
            SYSTEM OPTIMAL
          </span>
        </div>

        {/* Middle Floating Element: Lock */}
        <div
          className="absolute top-[60%] left-[20%] w-8 h-8 rounded-full bg-card/80 backdrop-blur-2xl border border-white/10 shadow-lg flex items-center justify-center z-20"
          style={{ animation: "floatLayer1 4s ease-in-out infinite alternate" }}
        >
          <Lock className="w-3.5 h-3.5 text-muted-foreground" />
        </div>
      </div>
    </div>
  );
}

export function AIGraphic() {
  return (
    <div className="w-full h-full flex items-center justify-center p-4 group perspective-[1000px]">
      {/* Background ambient glow */}
      <div className="absolute inset-0 bg-primary/10 blur-[80px] rounded-full group-hover:bg-primary/20 transition-colors duration-500"></div>

      <div
        className="relative w-full max-w-[400px] aspect-4/3 z-10 transition-transform duration-700 bg-card/40 backdrop-blur-xl border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.5)] rounded-2xl overflow-hidden flex flex-col"
        style={{
          transformStyle: "preserve-3d",
          animation: "aiFloat 8s ease-in-out infinite",
        }}
      >
        {/* Header */}
        <div className="h-8 border-b border-white/10 bg-white/5 flex items-center px-4 gap-2 shrink-0 z-20 relative">
          <div className="text-[10px] text-muted-foreground font-mono flex items-center gap-1.5">
            <Workflow className="w-3 h-3" /> automation_flow
          </div>
        </div>

        {/* Content area */}
        <div className="flex-1 relative w-full overflow-hidden">
          {/* Background Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-size-[16px_16px] mask-[radial-gradient(ellipse_70%_70%_at_50%_50%,#000_100%,transparent_100%)] pointer-events-none"></div>

          <style>{`
            @keyframes dashFlow {
              from { stroke-dashoffset: 20; }
              to { stroke-dashoffset: 0; }
            }
            @keyframes dashFlowReverse {
              from { stroke-dashoffset: 0; }
              to { stroke-dashoffset: 20; }
            }
            @keyframes nodePulse {
              0%, 100% { border-color: rgba(255, 255, 255, 0.1); box-shadow: 0 0 0 transparent; }
              50% { border-color: hsl(var(--primary) / 0.5); box-shadow: 0 0 15px hsl(var(--primary) / 0.3); }
            }
            @keyframes aiFloat {
              0%, 100% { transform: rotateX(15deg) rotateY(15deg) translateY(0); }
              50% { transform: rotateX(18deg) rotateY(12deg) translateY(-10px); }
            }
          `}</style>

          {/* SVG Connections */}
          <svg
            viewBox="0 0 400 300"
            preserveAspectRatio="none"
            className="absolute inset-0 w-full h-full pointer-events-none z-0"
          >
            <defs>
              <marker
                id="arrow"
                viewBox="0 0 10 10"
                refX="5"
                refY="5"
                markerWidth="4"
                markerHeight="4"
                orient="auto-start-reverse"
              >
                <path d="M 0 0 L 10 5 L 0 10 z" fill="rgba(255,255,255,0.3)" />
              </marker>
              <marker
                id="arrow-active"
                viewBox="0 0 10 10"
                refX="5"
                refY="5"
                markerWidth="4"
                markerHeight="4"
                orient="auto-start-reverse"
              >
                <path d="M 0 0 L 10 5 L 0 10 z" fill="hsl(var(--primary))" />
              </marker>
            </defs>

            {/* Base Paths (Solid) */}
            <path
              d="M 84 100 L 120 100"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="2"
              fill="none"
              markerEnd="url(#arrow)"
            />
            <path
              d="M 240 100 L 260 100"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="2"
              fill="none"
              markerEnd="url(#arrow)"
            />
            <path
              d="M 300 100 C 330 100, 320 50, 340 50"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="2"
              fill="none"
              markerEnd="url(#arrow)"
            />
            <path
              d="M 300 100 C 330 100, 320 150, 340 150"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="2"
              fill="none"
              markerEnd="url(#arrow)"
            />

            {/* Dashed Paths to Tools */}
            <path
              d="M 140 124 C 140 160, 120 180, 120 204"
              stroke="rgba(255,255,255,0.2)"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              fill="none"
            />
            <path
              d="M 160 124 C 160 160, 160 180, 160 204"
              stroke="rgba(255,255,255,0.2)"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              fill="none"
            />
            <path
              d="M 190 124 C 190 160, 200 180, 200 204"
              stroke="rgba(255,255,255,0.2)"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              fill="none"
            />
            <path
              d="M 220 124 C 220 160, 240 180, 240 204"
              stroke="rgba(255,255,255,0.2)"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              fill="none"
            />

            {/* Animated Highlight Paths */}
            <path
              d="M 84 100 L 120 100"
              stroke="hsl(var(--primary))"
              strokeWidth="2"
              strokeDasharray="10 50"
              fill="none"
              style={{ animation: "dashFlow 1s linear infinite" }}
            />
            <path
              d="M 240 100 L 260 100"
              stroke="hsl(var(--primary))"
              strokeWidth="2"
              strokeDasharray="10 50"
              fill="none"
              style={{ animation: "dashFlow 1s linear infinite 0.5s" }}
            />
            <path
              d="M 300 100 C 330 100, 320 50, 340 50"
              stroke="hsl(var(--primary))"
              strokeWidth="2"
              strokeDasharray="10 80"
              fill="none"
              style={{ animation: "dashFlow 1.5s linear infinite 1s" }}
            />
            <path
              d="M 300 100 C 330 100, 320 150, 340 150"
              stroke="hsl(var(--primary))"
              strokeWidth="2"
              strokeDasharray="10 80"
              fill="none"
              style={{ animation: "dashFlow 1.5s linear infinite 1.2s" }}
            />

            {/* Animated Dashed Paths to Tools */}
            <path
              d="M 140 124 C 140 160, 120 180, 120 204"
              stroke="hsl(var(--primary))"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              fill="none"
              style={{ animation: "dashFlowReverse 1s linear infinite" }}
            />
            <path
              d="M 160 124 C 160 160, 160 180, 160 204"
              stroke="hsl(var(--primary))"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              fill="none"
              style={{ animation: "dashFlowReverse 1s linear infinite" }}
            />
            <path
              d="M 190 124 C 190 160, 200 180, 200 204"
              stroke="hsl(var(--primary))"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              fill="none"
              style={{ animation: "dashFlowReverse 1s linear infinite" }}
            />
            <path
              d="M 220 124 C 220 160, 240 180, 240 204"
              stroke="hsl(var(--primary))"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              fill="none"
              style={{ animation: "dashFlowReverse 1s linear infinite" }}
            />

            {/* Connection Ports (Dots) */}
            <circle cx="84" cy="100" r="3" fill="rgba(255,255,255,0.5)" />
            <circle cx="120" cy="100" r="3" fill="hsl(var(--primary))" />
            <circle cx="240" cy="100" r="3" fill="hsl(var(--primary))" />
            <circle cx="260" cy="100" r="3" fill="rgba(255,255,255,0.5)" />
            <circle cx="300" cy="100" r="3" fill="rgba(255,255,255,0.5)" />
            <circle cx="340" cy="50" r="3" fill="rgba(255,255,255,0.5)" />
            <circle cx="340" cy="150" r="3" fill="rgba(255,255,255,0.5)" />

            <circle cx="140" cy="124" r="3" fill="hsl(var(--primary))" />
            <circle cx="160" cy="124" r="3" fill="hsl(var(--primary))" />
            <circle cx="190" cy="124" r="3" fill="hsl(var(--primary))" />
            <circle cx="220" cy="124" r="3" fill="hsl(var(--primary))" />

            <circle cx="120" cy="204" r="3" fill="rgba(255,255,255,0.5)" />
            <circle cx="160" cy="204" r="3" fill="rgba(255,255,255,0.5)" />
            <circle cx="200" cy="204" r="3" fill="rgba(255,255,255,0.5)" />
            <circle cx="240" cy="204" r="3" fill="rgba(255,255,255,0.5)" />
          </svg>

          {/* Nodes */}
          {/* Trigger Node */}
          <div
            className="absolute top-[calc((76/300)*100%)] left-[calc((36/400)*100%)] w-[calc((48/400)*100%)] h-[calc((48/300)*100%)] rounded-2xl bg-card/90 border border-white/10 flex items-center justify-center shadow-lg backdrop-blur-md z-10 hover:border-primary/50 transition-colors"
            style={{ transform: "translateZ(20px)" }}
          >
            <FileEdit className="w-5 h-5 text-emerald-400" />
          </div>

          {/* AI Agent Node */}
          <div
            className="absolute top-[calc((76/300)*100%)] left-[calc((120/400)*100%)] w-[calc((120/400)*100%)] h-[calc((48/300)*100%)] rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center shadow-[0_20px_40px_rgba(0,0,0,0.5)] z-10"
            style={{
              animation: "nodePulse 3s infinite",
              transform: "translateZ(40px)",
            }}
          >
            <Bot className="w-6 h-6 text-white" />
          </div>

          {/* Router Node */}
          <div
            className="absolute top-[calc((80/300)*100%)] left-[calc((260/400)*100%)] w-[calc((40/400)*100%)] h-[calc((40/300)*100%)] rounded-xl bg-card/90 border border-white/10 flex items-center justify-center shadow-lg backdrop-blur-md z-10 hover:border-primary/50 transition-colors"
            style={{ transform: "translateZ(20px)" }}
          >
            <GitMerge className="w-4 h-4 text-orange-400" />
          </div>

          {/* Action 1 Node */}
          <div
            className="absolute top-[calc((30/300)*100%)] left-[calc((340/400)*100%)] w-[calc((40/400)*100%)] h-[calc((40/300)*100%)] rounded-xl bg-card/90 border border-white/10 flex items-center justify-center shadow-lg backdrop-blur-md z-10 hover:border-primary/50 transition-colors"
            style={{ transform: "translateZ(20px)" }}
          >
            <MessageSquare className="w-4 h-4 text-blue-400" />
          </div>

          {/* Action 2 Node */}
          <div
            className="absolute top-[calc((130/300)*100%)] left-[calc((340/400)*100%)] w-[calc((40/400)*100%)] h-[calc((40/300)*100%)] rounded-xl bg-card/90 border border-white/10 flex items-center justify-center shadow-lg backdrop-blur-md z-10 hover:border-primary/50 transition-colors"
            style={{ transform: "translateZ(20px)" }}
          >
            <Zap className="w-4 h-4 text-yellow-400" />
          </div>

          {/* Tool Nodes */}
          <div
            className="absolute top-[calc((204/300)*100%)] left-[calc((104/400)*100%)] w-[calc((32/400)*100%)] h-[calc((32/300)*100%)] rounded-full bg-card/90 border border-white/10 flex items-center justify-center shadow-lg backdrop-blur-md z-10 hover:border-primary/50 transition-colors"
            style={{ transform: "translateZ(10px)" }}
          >
            <BrainCircuit className="w-3.5 h-3.5 text-purple-400" />
          </div>

          <div
            className="absolute top-[calc((204/300)*100%)] left-[calc((144/400)*100%)] w-[calc((32/400)*100%)] h-[calc((32/300)*100%)] rounded-full bg-card/90 border border-white/10 flex items-center justify-center shadow-lg backdrop-blur-md z-10 hover:border-primary/50 transition-colors"
            style={{ transform: "translateZ(10px)" }}
          >
            <Database className="w-3.5 h-3.5 text-cyan-400" />
          </div>

          <div
            className="absolute top-[calc((204/300)*100%)] left-[calc((184/400)*100%)] w-[calc((32/400)*100%)] h-[calc((32/300)*100%)] rounded-full bg-card/90 border border-white/10 flex items-center justify-center shadow-lg backdrop-blur-md z-10 hover:border-primary/50 transition-colors"
            style={{ transform: "translateZ(10px)" }}
          >
            <Box className="w-3.5 h-3.5 text-pink-400" />
          </div>

          <div
            className="absolute top-[calc((204/300)*100%)] left-[calc((224/400)*100%)] w-[calc((32/400)*100%)] h-[calc((32/300)*100%)] rounded-full bg-card/90 border border-white/10 flex items-center justify-center shadow-lg backdrop-blur-md z-10 hover:border-primary/50 transition-colors"
            style={{ transform: "translateZ(10px)" }}
          >
            <Plus className="w-3.5 h-3.5 text-muted-foreground" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function PerformanceGraphic() {
  return (
    <div className="w-full h-full flex items-center justify-center relative p-4 group perspective-[1000px]">
      <style>{`
        @keyframes marketFloat {
          0%, 100% { transform: rotateX(15deg) rotateY(-15deg) translateY(0); }
          50% { transform: rotateX(18deg) rotateY(-12deg) translateY(-10px); }
        }
        @keyframes barGrow1 {
          0%, 100% { height: 40%; }
          50% { height: 70%; }
        }
        @keyframes barGrow2 {
          0%, 100% { height: 60%; }
          50% { height: 90%; }
        }
        @keyframes barGrow3 {
          0%, 100% { height: 30%; }
          50% { height: 60%; }
        }
        @keyframes lineDash {
          to { stroke-dashoffset: -200; }
        }
        @keyframes floatCard1 {
          0%, 100% { transform: translateZ(40px) translateY(0); }
          50% { transform: translateZ(40px) translateY(-5px); }
        }
        @keyframes floatCard2 {
          0%, 100% { transform: translateZ(60px) translateY(0); }
          50% { transform: translateZ(60px) translateY(-8px); }
        }
      `}</style>

      {/* Background ambient glow */}
      <div className="absolute inset-0 bg-orange-500/10 blur-[80px] rounded-full group-hover:bg-orange-500/20 transition-colors duration-500"></div>

      <div
        className="relative w-full max-w-[340px] aspect-4/3 z-10 transition-transform duration-700"
        style={{
          transformStyle: "preserve-3d",
          animation: "marketFloat 8s ease-in-out infinite",
        }}
      >
        {/* Main Dashboard Window */}
        <div className="absolute inset-0 bg-card/60 backdrop-blur-xl border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.5)] rounded-2xl overflow-hidden flex flex-col z-10">
          <div className="h-8 border-b border-white/10 bg-white/5 flex items-center px-4 gap-2 shrink-0">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
            <div className="mx-auto w-1/3 h-3 rounded-md bg-white/10"></div>
          </div>

          <div className="flex-1 p-4 flex flex-col gap-4">
            <div className="flex justify-between items-center">
               <div className="flex flex-col gap-1">
                 <div className="h-3 w-20 bg-white/20 rounded-md"></div>
                 <div className="h-5 w-32 bg-primary/40 rounded-md mt-1"></div>
               </div>
               <div className="w-10 h-10 rounded-full bg-orange-500/20 border border-orange-500/30 flex items-center justify-center">
                 <Target className="w-5 h-5 text-orange-400" />
               </div>
            </div>

            {/* Chart Area */}
            <div className="flex-1 rounded-xl bg-black/40 border border-white/5 relative overflow-hidden flex items-end p-4 gap-4">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-size-[16px_16px]"></div>
              
              <div className="w-full h-full relative z-10 flex items-end justify-between">
                <div className="w-1/4 bg-blue-500/40 rounded-t-sm" style={{ animation: "barGrow1 4s ease-in-out infinite" }}></div>
                <div className="w-1/4 bg-purple-500/40 rounded-t-sm" style={{ animation: "barGrow3 5s ease-in-out infinite" }}></div>
                <div className="w-1/4 bg-orange-500/50 rounded-t-sm shadow-[0_0_15px_rgba(249,115,22,0.4)]" style={{ animation: "barGrow2 4.5s ease-in-out infinite" }}></div>
              </div>

              {/* Trend Line SVG */}
              <svg viewBox="0 0 200 100" className="absolute inset-0 w-full h-full z-20 pointer-events-none" preserveAspectRatio="none">
                <path d="M 0 80 Q 50 20, 100 60 T 200 10" fill="none" stroke="hsl(var(--primary))" strokeWidth="3" strokeDasharray="10 10" style={{ animation: "lineDash 3s linear infinite" }} />
              </svg>
            </div>
          </div>
        </div>

        {/* Floating Elements (Z-translated) */}
        {/* Top Right: Conversion Badge */}
        <div
          className="absolute -top-4 -right-4 py-2 px-3 rounded-xl bg-green-500/10 backdrop-blur-2xl border border-green-500/30 shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex items-center gap-2 z-20"
          style={{ animation: "floatCard2 6s ease-in-out infinite alternate" }}
        >
          <TrendingUp className="w-4 h-4 text-green-400" />
          <span className="text-green-400 text-[10px] font-bold tracking-wider">
            +142% ROI
          </span>
        </div>

        {/* Bottom Left: Ad Campaign Widget */}
        <div
          className="absolute -bottom-6 -left-6 p-3 rounded-xl bg-card/80 backdrop-blur-2xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex flex-col gap-2 z-20 w-40"
          style={{ animation: "floatCard1 5s ease-in-out infinite alternate-reverse" }}
        >
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-pink-500/20 flex items-center justify-center">
              <Megaphone className="w-4 h-4 text-pink-400" />
            </div>
            <div className="flex flex-col gap-1">
              <div className="h-2 w-16 bg-white/20 rounded-full"></div>
              <div className="h-2 w-10 bg-white/10 rounded-full"></div>
            </div>
          </div>
          <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden mt-1">
            <div className="h-full bg-pink-400 w-[75%] rounded-full"></div>
          </div>
        </div>

        {/* Right Floating Icon */}
        <div
          className="absolute top-1/2 -right-8 w-12 h-12 rounded-2xl bg-card/80 backdrop-blur-2xl border border-white/10 shadow-lg flex items-center justify-center z-20"
          style={{ animation: "floatCard1 4s ease-in-out infinite alternate" }}
        >
          <MousePointerClick className="w-5 h-5 text-blue-400" />
        </div>
      </div>
    </div>
  );
}

