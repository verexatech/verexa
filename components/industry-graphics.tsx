import {
  Building2,
  HeartPulse,
  Scale,
  ShieldCheck,
  FileText,
  Stethoscope,
  PenTool,
  HardHat,
  CheckCircle2,
  Star,
  ShoppingBag,
  Smartphone,
  Store,
  Ruler,
} from "lucide-react";

export function RealEstateGraphic() {
  return (
    <div className="w-full h-full flex items-center justify-center relative p-4 group perspective-[1000px]">
      <style>{`
        @keyframes reFloat {
          0%, 100% { transform: rotateX(25deg) rotateZ(-15deg) translateY(0); }
          50% { transform: rotateX(28deg) rotateZ(-12deg) translateY(-10px); }
        }
        @keyframes pinBounce {
          0%, 100% { transform: translateY(0) translateZ(40px); }
          50% { transform: translateY(-15px) translateZ(40px); }
        }
        @keyframes pulseRing {
          0% { transform: scale(0.8) translateZ(0); opacity: 0.8; }
          100% { transform: scale(2.5) translateZ(0); opacity: 0; }
        }
      `}</style>

      {/* Background ambient glow */}
      <div className="absolute inset-0 bg-primary/10 blur-[80px] rounded-full group-hover:bg-primary/20 transition-colors duration-500"></div>

      <div
        className="relative w-full max-w-[340px] aspect-4/3 z-10 transition-transform duration-700 bg-card/40 backdrop-blur-xl border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.5)] rounded-2xl overflow-hidden flex flex-col"
        style={{
          transformStyle: "preserve-3d",
          animation: "reFloat 8s ease-in-out infinite",
        }}
      >
        {/* Header */}
        <div className="h-8 border-b border-white/10 bg-white/5 flex items-center px-4 gap-2 shrink-0 z-20 relative">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
          <div className="ml-auto text-[10px] text-muted-foreground font-mono flex items-center gap-1.5">
            <Building2 className="w-3 h-3" /> property_map.sys
          </div>
        </div>

        {/* Flat Background Content (Map Grid) */}
        <div className="absolute inset-0 top-8 flex-1 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-size-[20px_20px] opacity-40 z-0 pointer-events-none flex flex-col items-center justify-center">
          {/* Abstract roads / plots */}
          <div className="absolute w-full h-1 bg-white/10 top-1/2 rotate-12"></div>
          <div className="absolute w-full h-1 bg-white/10 top-1/3 -rotate-12"></div>
          <div className="absolute h-full w-1 bg-white/10 left-1/3 rotate-12"></div>
          <div className="absolute h-full w-1 bg-white/10 right-1/4 -rotate-6"></div>
        </div>

        {/* 3D Stack */}
        <div
          className="absolute inset-0 top-8 flex items-center justify-center z-10"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Main Property Card (Floating) */}
          <div
            className="absolute w-[180px] h-[100px] bg-card/80 backdrop-blur-md border border-white/10 rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.5)] flex flex-col p-3 gap-2"
            style={{ transform: "translateZ(60px) translate(-30px, 20px)" }}
          >
            <div className="flex justify-between items-center">
              <div className="w-16 h-2 rounded-full bg-primary/40"></div>
              <div className="text-[10px] text-white/60 font-mono">$1.2M</div>
            </div>
            <div className="w-3/4 h-1.5 rounded-full bg-white/20"></div>
            <div className="w-1/2 h-1.5 rounded-full bg-white/10"></div>
            <div className="mt-auto flex gap-2">
              <div className="w-8 h-8 rounded bg-primary/20 border border-primary/30 flex items-center justify-center">
                <Building2 className="w-4 h-4 text-primary" />
              </div>
              <div className="flex-1 rounded bg-white/5 border border-white/5 relative overflow-hidden">
                <div className="absolute bottom-0 left-0 h-full w-3/4 bg-primary/40"></div>
              </div>
            </div>
          </div>

          {/* Secondary Property Card */}
          <div
            className="absolute w-[140px] h-[70px] bg-card/60 backdrop-blur-md border border-white/10 rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.5)] flex flex-col p-2 gap-1.5"
            style={{ transform: "translateZ(30px) translate(60px, -40px)" }}
          >
            <div className="flex justify-between items-center">
              <div className="w-12 h-1.5 rounded-full bg-primary/40"></div>
              <div className="text-[8px] text-white/60 font-mono">$850K</div>
            </div>
            <div className="w-2/3 h-1.5 rounded-full bg-white/10"></div>
            <div className="w-1/3 h-1.5 rounded-full bg-white/5 mt-1"></div>
          </div>

          {/* Map Pins */}
          <div
            className="absolute"
            style={{
              transform: "translate(-50px, -20px)",
              transformStyle: "preserve-3d",
            }}
          >
            <div
              className="absolute w-8 h-8 rounded-full border border-primary/50"
              style={{ animation: "pulseRing 2s infinite" }}
            ></div>
            <div
              className="absolute w-4 h-4 rounded-full bg-primary shadow-[0_0_15px_hsl(var(--primary))]"
              style={{
                animation: "pinBounce 2s infinite",
                left: "8px",
                top: "8px",
              }}
            ></div>
            <div
              className="w-1 h-8 bg-linear-to-t from-primary to-transparent opacity-50 mx-auto"
              style={{ transform: "translateY(12px) translateZ(20px)" }}
            ></div>
          </div>

          <div
            className="absolute"
            style={{
              transform: "translate(40px, 30px)",
              transformStyle: "preserve-3d",
            }}
          >
            <div
              className="absolute w-6 h-6 rounded-full border border-accent/50"
              style={{ animation: "pulseRing 2.5s infinite 1s" }}
            ></div>
            <div
              className="absolute w-3 h-3 rounded-full bg-accent shadow-[0_0_15px_hsl(var(--accent))]"
              style={{
                animation: "pinBounce 2.5s infinite 1s",
                left: "6px",
                top: "6px",
              }}
            ></div>
            <div
              className="w-0.5 h-6 bg-linear-to-t from-accent to-transparent opacity-50 mx-auto"
              style={{ transform: "translateY(9px) translateZ(20px)" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function HealthcareGraphic() {
  return (
    <div className="w-full h-full flex items-center justify-center relative p-4 group perspective-[1000px]">
      <style>{`
        @keyframes healthFloat {
          0%, 100% { transform: rotateX(20deg) rotateZ(10deg) translateY(0); }
          50% { transform: rotateX(23deg) rotateZ(13deg) translateY(-10px); }
        }
        @keyframes ecgScan {
          0% { stroke-dashoffset: 100; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes pulseHeart {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
      `}</style>

      {/* Background ambient glow */}
      <div className="absolute inset-0 bg-primary/10 blur-[80px] rounded-full group-hover:bg-primary/20 transition-colors duration-500"></div>

      <div
        className="relative w-full max-w-[340px] aspect-4/3 z-10 transition-transform duration-700 bg-card/40 backdrop-blur-xl border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.5)] rounded-2xl overflow-hidden flex flex-col"
        style={{
          transformStyle: "preserve-3d",
          animation: "healthFloat 8s ease-in-out infinite",
        }}
      >
        {/* Header */}
        <div className="h-8 border-b border-white/10 bg-white/5 flex items-center px-4 gap-2 shrink-0 z-20 relative">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
          <div className="ml-auto text-[10px] text-muted-foreground font-mono flex items-center gap-1.5">
            <HeartPulse className="w-3 h-3" /> diagnostics.exe
          </div>
        </div>

        {/* Flat Background Content */}
        <div className="absolute inset-0 top-8 flex-1 p-4 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[12px_12px] opacity-40 z-0 pointer-events-none flex flex-col gap-4">
          {/* Abstract grid data */}
          <div className="w-1/2 h-2 bg-white/20 rounded-full"></div>
          <div className="w-1/3 h-2 bg-white/10 rounded-full"></div>
          <div className="w-2/3 h-2 bg-white/10 rounded-full mt-auto"></div>
        </div>

        {/* 3D Stack */}
        <div
          className="absolute inset-0 top-8 flex items-center justify-center z-10"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Main Vital Panel (Floating) */}
          <div
            className="absolute w-[220px] h-[120px] bg-black/60 backdrop-blur-xl border border-primary/20 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.6)] flex flex-col p-4 gap-3"
            style={{ transform: "translateZ(50px)" }}
          >
            <div className="flex justify-between items-start">
              <div className="flex gap-2 items-center">
                <div
                  className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center"
                  style={{ animation: "pulseHeart 1.5s infinite" }}
                >
                  <HeartPulse className="w-4 h-4 text-primary" />
                </div>
                <div className="flex flex-col">
                  <span className="text-primary text-xs font-mono">BPM</span>
                  <span className="text-white font-bold text-lg leading-none">
                    72
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-accent text-[8px] font-mono">SPO2</span>
                <span className="text-white text-sm font-medium">98%</span>
              </div>
            </div>

            {/* ECG Waveform Screen */}
            <div className="flex-1 w-full relative overflow-hidden mt-2">
              <svg
                viewBox="0 0 100 30"
                className="w-full h-full absolute inset-0 z-10"
                preserveAspectRatio="none"
              >
                <path
                  d="M 0 15 L 10 15 L 15 5 L 20 25 L 25 15 L 35 15 L 40 5 L 45 25 L 50 15 L 60 15 L 65 0 L 70 30 L 75 15 L 100 15"
                  fill="none"
                  stroke="hsl(var(--primary))"
                  strokeWidth="1.5"
                  strokeDasharray="100"
                  style={{ animation: "ecgScan 2s linear infinite" }}
                  className="drop-shadow-[0_0_5px_rgba(var(--primary),0.8)]"
                />
              </svg>
            </div>
          </div>

          {/* Floating Tools/Indicators */}
          <div
            className="absolute w-[60px] h-[60px] bg-card/80 backdrop-blur-md border border-white/10 rounded-xl shadow-2xl flex items-center justify-center"
            style={{ transform: "translateZ(80px) translate(100px, -60px)" }}
          >
            <Stethoscope className="w-7 h-7 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
          </div>

          <div
            className="absolute w-[80px] h-[40px] bg-green-500/10 backdrop-blur-md border border-green-500/20 rounded-lg shadow-2xl flex items-center justify-center gap-2"
            style={{ transform: "translateZ(30px) translate(-90px, 70px)" }}
          >
            <ShieldCheck className="w-4 h-4 text-green-400" />
            <span className="text-[10px] text-green-400 font-mono">SECURE</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function LegalGraphic() {
  return (
    <div className="w-full h-full flex items-center justify-center relative p-4 group perspective-[1000px]">
      <style>{`
        @keyframes legalFloat {
          0%, 100% { transform: rotateX(25deg) rotateZ(15deg) translateY(0); }
          50% { transform: rotateX(28deg) rotateZ(12deg) translateY(-10px); }
        }
        @keyframes scanLine {
          0%, 100% { transform: translateY(0); opacity: 0; }
          10%, 90% { opacity: 1; }
          50% { transform: translateY(60px); }
        }
        @keyframes balanceScale {
          0%, 100% { transform: rotateZ(-5deg); }
          50% { transform: rotateZ(5deg); }
        }
      `}</style>

      {/* Background ambient glow */}
      <div className="absolute inset-0 bg-primary/10 blur-[80px] rounded-full group-hover:bg-primary/20 transition-colors duration-500"></div>

      <div
        className="relative w-full max-w-[340px] aspect-4/3 z-10 transition-transform duration-700 bg-card/40 backdrop-blur-xl border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.5)] rounded-2xl overflow-hidden flex flex-col"
        style={{
          transformStyle: "preserve-3d",
          animation: "legalFloat 8s ease-in-out infinite",
        }}
      >
        {/* Header */}
        <div className="h-8 border-b border-white/10 bg-white/5 flex items-center px-4 gap-2 shrink-0 z-20 relative">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
          <div className="ml-auto text-[10px] text-muted-foreground font-mono flex items-center gap-1.5">
            <Scale className="w-3 h-3" /> compliance_engine.sh
          </div>
        </div>

        {/* Flat Background Content */}
        <div className="absolute inset-0 top-8 flex-1 p-4 z-0 pointer-events-none flex flex-col items-center justify-center gap-2 opacity-30">
          <div className="w-full h-px bg-white/20"></div>
          <div className="w-3/4 h-px bg-white/10"></div>
          <div className="w-1/2 h-px bg-white/5"></div>
        </div>

        {/* 3D Stack */}
        <div
          className="absolute inset-0 top-8 flex items-center justify-center z-10"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Main Document Panel (Floating) */}
          <div
            className="absolute w-[160px] h-[200px] bg-card/90 backdrop-blur-md border border-white/10 rounded-lg shadow-[0_20px_40px_rgba(0,0,0,0.5)] flex flex-col p-4 gap-4"
            style={{ transform: "translateZ(30px) translate(-30px, 0)" }}
          >
            <FileText className="w-6 h-6 text-primary/60" />
            <div className="flex flex-col gap-2">
              <div className="w-full h-1.5 rounded-full bg-white/20"></div>
              <div className="w-5/6 h-1.5 rounded-full bg-white/20"></div>
              <div className="w-full h-1.5 rounded-full bg-white/20"></div>
              <div className="w-2/3 h-1.5 rounded-full bg-white/20"></div>
            </div>
            <div className="mt-auto border-t border-white/10 pt-2 flex justify-between items-center">
              <div className="w-12 h-4 rounded bg-primary/20 border border-primary/30"></div>
              <PenTool className="w-3 h-3 text-white/40" />
            </div>
            {/* Scanner Line */}
            <div
              className="absolute left-0 right-0 top-12 h-0.5 bg-primary shadow-[0_0_10px_hsl(var(--primary))]"
              style={{ animation: "scanLine 3s ease-in-out infinite" }}
            ></div>
          </div>

          {/* Verification Badge */}
          <div
            className="absolute w-[120px] h-[50px] bg-card/80 backdrop-blur-md border border-white/10 rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.5)] flex items-center p-2 gap-3"
            style={{ transform: "translateZ(60px) translate(60px, -60px)" }}
          >
            <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
              <CheckCircle2 className="w-4 h-4 text-green-400" />
            </div>
            <div className="flex flex-col gap-1">
              <div className="w-10 h-1 rounded-full bg-white/40"></div>
              <div className="w-16 h-1 rounded-full bg-white/20"></div>
            </div>
          </div>

          {/* Floating Scale */}
          <div
            className="absolute w-[80px] h-[80px] bg-primary/10 backdrop-blur-xl border border-primary/30 rounded-full shadow-[0_20px_40px_rgba(0,0,0,0.5)] flex items-center justify-center"
            style={{ transform: "translateZ(80px) translate(50px, 40px)" }}
          >
            <div
              style={{
                animation: "balanceScale 4s ease-in-out infinite",
                transformOrigin: "top center",
              }}
            >
              <Scale className="w-8 h-8 text-white drop-shadow-[0_0_15px_hsl(var(--primary))]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ConstructionGraphic() {
  return (
    <div className="w-full h-full flex items-center justify-center relative p-4 group perspective-[1000px]">
      <style>{`
        @keyframes constructFloat {
          0%, 100% { transform: rotateX(30deg) rotateZ(-20deg) translateY(0); }
          50% { transform: rotateX(33deg) rotateZ(-17deg) translateY(-10px); }
        }
        @keyframes drawWireframe {
          0% { stroke-dashoffset: 100; opacity: 0; }
          20% { opacity: 1; }
          80% { stroke-dashoffset: 0; opacity: 1; }
          100% { stroke-dashoffset: 0; opacity: 0; }
        }
      `}</style>

      {/* Background ambient glow */}
      <div className="absolute inset-0 bg-primary/10 blur-[80px] rounded-full group-hover:bg-primary/20 transition-colors duration-500"></div>

      <div
        className="relative w-full max-w-[340px] aspect-4/3 z-10 transition-transform duration-700 bg-card/40 backdrop-blur-xl border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.5)] rounded-2xl overflow-hidden flex flex-col"
        style={{
          transformStyle: "preserve-3d",
          animation: "constructFloat 8s ease-in-out infinite",
        }}
      >
        {/* Header */}
        <div className="h-8 border-b border-white/10 bg-white/5 flex items-center px-4 gap-2 shrink-0 z-20 relative">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
          <div className="ml-auto text-[10px] text-muted-foreground font-mono flex items-center gap-1.5">
            <HardHat className="w-3 h-3" /> CAD_render.exe
          </div>
        </div>

        {/* Flat Background Content (Blueprint Grid) */}
        <div className="absolute inset-0 top-8 flex-1 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-size-[16px_16px] opacity-60 z-0 pointer-events-none"></div>

        {/* 3D Stack */}
        <div
          className="absolute inset-0 top-8 flex items-center justify-center z-10"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Wireframe Structure (Floating) */}
          <div
            className="absolute w-[180px] h-[180px] flex items-center justify-center"
            style={{ transform: "translateZ(40px)" }}
          >
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full relative z-10"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                d="M 20 80 L 20 30 L 50 10 L 80 30 L 80 80 M 50 10 L 50 80 M 35 45 L 65 45 M 20 60 L 80 60 M 35 80 L 35 45 M 65 80 L 65 45"
                stroke="hsl(var(--primary))"
                strokeDasharray="100"
                style={{ animation: "drawWireframe 4s ease-in-out infinite" }}
                className="drop-shadow-[0_0_8px_rgba(var(--primary),0.5)]"
              />
            </svg>
          </div>

          {/* Floating Tools/Panels */}
          <div
            className="absolute w-[100px] h-[40px] bg-card/80 backdrop-blur-md border border-white/10 rounded-lg shadow-2xl flex flex-col justify-center px-3 gap-1"
            style={{ transform: "translateZ(70px) translate(-70px, 60px)" }}
          >
            <div className="text-[6px] text-muted-foreground uppercase font-mono tracking-widest">
              Dimensions
            </div>
            <div className="w-1/2 h-1.5 rounded-full bg-primary/40"></div>
          </div>

          <div
            className="absolute w-[60px] h-[60px] bg-card/80 backdrop-blur-xl border border-white/10 rounded-full shadow-[0_20px_40px_rgba(0,0,0,0.5)] flex items-center justify-center"
            style={{ transform: "translateZ(60px) translate(80px, -50px)" }}
          >
            <Ruler className="w-6 h-6 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] transform -rotate-45" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function FoodRetailGraphic() {
  return (
    <div className="w-full h-full flex items-center justify-center relative p-4 group perspective-[1000px]">
      <style>{`
        @keyframes retailFloat {
          0%, 100% { transform: rotateX(22deg) rotateZ(18deg) translateY(0); }
          50% { transform: rotateX(25deg) rotateZ(15deg) translateY(-10px); }
        }
        @keyframes moveTicket {
          0% { transform: translateY(10px); opacity: 0; }
          20% { transform: translateY(0); opacity: 1; }
          80% { transform: translateY(-30px); opacity: 1; }
          100% { transform: translateY(-40px); opacity: 0; }
        }
      `}</style>

      {/* Background ambient glow */}
      <div className="absolute inset-0 bg-primary/10 blur-[80px] rounded-full group-hover:bg-primary/20 transition-colors duration-500"></div>

      <div
        className="relative w-full max-w-[340px] aspect-4/3 z-10 transition-transform duration-700 bg-card/40 backdrop-blur-xl border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.5)] rounded-2xl overflow-hidden flex flex-col"
        style={{
          transformStyle: "preserve-3d",
          animation: "retailFloat 8s ease-in-out infinite",
        }}
      >
        {/* Header */}
        <div className="h-8 border-b border-white/10 bg-white/5 flex items-center px-4 gap-2 shrink-0 z-20 relative">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
          <div className="ml-auto text-[10px] text-muted-foreground font-mono flex items-center gap-1.5">
            <Store className="w-3 h-3" /> pos_system.js
          </div>
        </div>

        {/* Flat Background Content */}
        <div className="absolute inset-0 top-8 flex-1 p-4 z-0 pointer-events-none flex flex-col items-center opacity-30">
          <div className="w-full h-px bg-white/10 my-4"></div>
          <div className="w-full h-px bg-white/10 mb-4"></div>
          <div className="w-full h-px bg-white/10 mb-4"></div>
        </div>

        {/* 3D Stack */}
        <div
          className="absolute inset-0 top-8 flex items-center justify-center z-10"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* POS Terminal / Main Display */}
          <div
            className="absolute w-[140px] h-[160px] bg-card/80 backdrop-blur-md border border-white/10 rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.5)] flex flex-col p-3 gap-3"
            style={{ transform: "translateZ(40px) translate(-40px, 10px)" }}
          >
            <div className="flex gap-2 items-center border-b border-white/10 pb-2">
              <ShoppingBag className="w-4 h-4 text-primary" />
              <div className="w-1/2 h-1.5 rounded-full bg-white/20"></div>
            </div>

            {/* Animated Tickets */}
            <div className="flex-1 relative overflow-hidden flex flex-col justify-end gap-2 pb-2">
              <div
                className="w-full h-6 bg-white/5 border border-white/5 rounded flex items-center px-2"
                style={{ animation: "moveTicket 3s infinite linear" }}
              >
                <div className="w-3/4 h-1 rounded-full bg-primary/40"></div>
              </div>
              <div
                className="w-full h-6 bg-white/5 border border-white/5 rounded flex items-center px-2"
                style={{ animation: "moveTicket 3s infinite linear 1s" }}
              >
                <div className="w-2/3 h-1 rounded-full bg-white/20"></div>
              </div>
              <div
                className="w-full h-6 bg-white/5 border border-white/5 rounded flex items-center px-2"
                style={{ animation: "moveTicket 3s infinite linear 2s" }}
              >
                <div className="w-1/2 h-1 rounded-full bg-white/20"></div>
              </div>
            </div>
          </div>

          {/* Floating Mobile Device */}
          <div
            className="absolute w-[70px] h-[120px] bg-black/80 backdrop-blur-xl border border-white/20 rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.5)] flex flex-col p-1.5"
            style={{ transform: "translateZ(70px) translate(60px, -20px)" }}
          >
            <div className="w-full h-full bg-white/5 rounded-lg border border-white/10 flex flex-col items-center justify-center gap-3">
              <Smartphone className="w-6 h-6 text-white/50" />
              <div className="flex gap-1">
                <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
              </div>
            </div>
          </div>

          {/* Status Indicator */}
          <div
            className="absolute w-[40px] h-[40px] bg-card/90 backdrop-blur-md border border-white/10 rounded-full shadow-2xl flex items-center justify-center"
            style={{ transform: "translateZ(50px) translate(40px, 70px)" }}
          >
            <div
              className="w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_10px_hsl(var(--primary))]"
              style={{ animation: "pulseRing 2s infinite" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
