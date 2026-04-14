"use client";

import { useState, useEffect } from "react";
import {
  Building2,
  HeartPulse,
  Scale,
  ShieldCheck,
  FileText,
  Activity,
  Stethoscope,
  Monitor,
  PenTool,
} from "lucide-react";
import { motion } from "framer-motion";

export function RealEstateGraphic() {
  return (
    <div className="w-full max-w-[340px] px-4 z-10 group">
      <div className="w-full h-[220px] rounded-xl bg-card/60 backdrop-blur-sm border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)] flex flex-col overflow-hidden relative">
        {/* Mac OS Title Bar */}
        <div className="h-8 border-b border-white/5 bg-white/5 flex items-center px-4 gap-2 shrink-0 z-20 backdrop-blur-xl relative">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
        </div>

        <div className="p-4 flex flex-col gap-3 flex-1 relative overflow-hidden">
          {/* Scrolling Feed Container */}
          <div 
            className="flex flex-col gap-3 w-full"
            style={{ animation: "slowScroll 12s linear infinite" }}
          >
            {[1, 2].map((group) => (
              <div key={group} className="flex flex-col gap-3 w-full shrink-0">
                {/* Header Section (Now Scrolling) */}
                <div className="flex gap-4 items-start relative z-20 my-1">
                  <div 
                     className="w-14 h-14 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center shrink-0"
                  >
                    <Building2 className="w-7 h-7 text-primary drop-shadow-[0_0_10px_rgba(var(--primary),0.5)]" />
                  </div>
                  <div className="flex-1 flex flex-col gap-2 pt-1.5">
                    <div className="w-full h-2.5 rounded-full bg-white/20"></div>
                    <div className="w-2/3 h-2.5 rounded-full bg-white/10"></div>
                  </div>
                </div>

                {/* Listing Items */}
                  <div className="w-full h-20 rounded-lg bg-white/5 border border-white/5 flex gap-3 p-2 relative overflow-hidden group/item">
                    {/* Shimmer effect inside card */}
                    <div className="absolute inset-0 -translate-x-full bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.05),transparent)] group-hover/item:animate-[shimmerLine_2s_infinite]"></div>
                    
                    <div className="w-1/3 h-full rounded bg-primary/10 border border-primary/20 flex items-center justify-center">
                    </div>
                    <div className="flex-1 flex flex-col gap-2 py-1">
                       <div className="w-3/4 h-2 rounded-full bg-white/20"></div>
                       <div className="w-1/2 h-2 rounded-full bg-white/10"></div>
                       <div className="mt-auto flex gap-1">
                          <div className="w-8 h-1.5 rounded-full bg-primary/40"></div>
                           <div className="w-8 h-1.5 rounded-full bg-white/10"></div>
                       </div>
                    </div>
                  </div>
              </div>
            ))}
          </div>

          {/* Gradient Overlay to fade scroll */}
          <div className="absolute inset-x-0 bottom-0 h-12 bg-linear-to-t from-card/80 to-transparent z-10 pointer-events-none"></div>
        </div>
      </div>
    </div>
  );
}

export function HealthcareGraphic() {
  return (
    <div className="w-full flex justify-center z-10 group/health">
      <div className="relative w-64 h-56 flex items-center justify-center">
        {/* Main Diagnostic Monitor Centerpiece */}
        <div className="relative w-48 h-36 rounded-2xl bg-card/60 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.5)] flex flex-col overflow-hidden">
          {/* Monitor Header */}
          <div className="h-6 bg-white/5 border-b border-white/5 flex items-center px-3 justify-between">
            <div className="flex gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-red-400 opacity-60"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-yellow-400 opacity-60"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-green-400 opacity-60"></div>
            </div>
          </div>

          <div className="p-3 flex flex-col gap-2 flex-1 relative overflow-hidden">
            {/* Monitor Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[12px_12px] opacity-40"></div>
            
            <div className="flex items-center gap-3 relative z-10">
              <div className="w-10 h-10 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center">
                 <HeartPulse className="w-6 h-6 text-primary animate-pulse" />
              </div>
              <div className="flex-1 space-y-2">
                 <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      animate={{ x: ['-100%', '100%'] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                      className="h-full w-1/3 bg-linear-to-r from-transparent via-primary/50 to-transparent"
                    />
                 </div>
                 <div className="h-1.5 w-2/3 bg-white/5 rounded-full"></div>
              </div>
            </div>

            {/* ECG Waveform Screen */}
            <div className="mt-2 flex-1 bg-black/40 rounded-lg border border-white/5 p-2 relative overflow-hidden">
               <svg viewBox="0 0 100 30" className="w-full h-full relative z-10">
                  <motion.path
                    d="M 0 15 L 10 15 L 15 5 L 20 25 L 25 15 L 35 15 L 40 5 L 45 25 L 50 15 L 60 15 L 65 0 L 70 30 L 75 15 L 100 15"
                    fill="none"
                    stroke="hsl(var(--primary))"
                    strokeWidth="1.5"
                    animate={{ 
                      strokeDashoffset: [100, 0]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity, 
                      ease: "linear"
                    }}
                    strokeDasharray="100"
                    className="drop-shadow-[0_0_5px_rgba(var(--primary),0.8)]"
                  />
               </svg>
               {/* Scanning Scanline */}
               <motion.div 
                 animate={{ x: ['0%', '100%'] }}
                 transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                 className="absolute inset-y-0 w-8 bg-linear-to-r from-transparent via-primary/10 to-transparent z-20"
               />
            </div>
          </div>
        </div>

        {/* Floating Stethoscope - Linear Float */}
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-6 -right-4 z-20"
        >
          <div className="p-4 rounded-2xl bg-card/80 backdrop-blur-md border border-white/20 shadow-2xl flex items-center justify-center group-hover/health:scale-110 transition-transform duration-500">
             <Stethoscope className="w-10 h-10 text-primary drop-shadow-[0_0_15px_rgba(var(--primary),0.5)]" />
          </div>
        </motion.div>

        {/* Floating Security Badge - Linear Float */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-0 left-0 z-20"
        >
          <div className="p-3 rounded-xl bg-card/80 backdrop-blur-md border border-white/20 shadow-2xl flex items-center justify-center">
             <ShieldCheck className="w-6 h-6 text-green-400 drop-shadow-[0_0_10px_rgba(74,222,128,0.5)]" />
          </div>
        </motion.div>

        {/* Status Indicators - Pulsing Only */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-2">
           {[...Array(3)].map((_, i) => (
             <motion.div 
               key={i}
               animate={{ opacity: [0.3, 1, 0.3] }}
               transition={{ duration: 1, repeat: Infinity, delay: i * 0.3 }}
               className="w-2 h-2 rounded-full bg-primary/40 shadow-[0_0_8px_rgba(var(--primary),0.5)]"
             />
           ))}
        </div>
      </div>
    </div>
  );
}

export function LegalGraphic() {
  return (
    <div className="w-full h-2/3 flex justify-center items-center z-10 group/legal">
      <div className="relative w-56 h-48">
        {/* Stacked Documents */}
        <motion.div 
          animate={{ y: [0, -8, 0], rotate: [-6, -4, -6] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 left-4 w-40 h-52 bg-card/40 backdrop-blur-sm border border-white/10 rounded-xl shadow-xl transition-transform duration-500"
        />
        <motion.div 
          animate={{ y: [0, -12, 0], rotate: [-2, 0, -2] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute left-8 w-40 h-52 bg-card/60 backdrop-blur-md border border-white/10 rounded-xl shadow-2xl transition-transform duration-500 flex flex-col p-4 gap-3"
        >
          <FileText className="w-8 h-8 text-primary/60" />
          <div className="space-y-2 relative overflow-hidden">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="w-full h-2 rounded-full bg-white/20 relative overflow-hidden">
                 <motion.div 
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: i * 0.4 }}
                    className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent"
                 />
              </div>
            ))}
            <div className="w-2/3 h-2 rounded-full bg-white/10"></div>
          </div>

          {/* Electronic Signature Area */}
          <div className="mt-auto pt-4 border-t border-white/5 relative">
             <div className="text-[6px] text-muted-foreground uppercase tracking-widest mb-1 opacity-40">Digital Signature Required</div>
             <div className="h-10 w-full bg-black/20 rounded border border-white/5 relative overflow-hidden">
                <svg viewBox="0 0 100 40" className="w-full h-full relative z-10">
                   <motion.path
                     d="M 10 30 C 20 30 25 10 35 25 C 45 35 55 5 65 25 C 75 35 85 10 95 30"
                     fill="none"
                     stroke="hsl(var(--primary))"
                     strokeWidth="2"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     initial={{ pathLength: 0 }}
                     animate={{ pathLength: 1 }}
                     transition={{ 
                       duration: 3, 
                       repeat: Infinity, 
                       repeatDelay: 2,
                       ease: "easeInOut" 
                     }}
                   />
                </svg>
                {/* Pen following path */}
                <motion.div
                  className="absolute z-20 pointer-events-none"
                  style={{ top: '50%', left: '0%' }}
                  animate={{ 
                    x: [10, 35, 65, 95],
                    y: [10, -5, 5, 10], 
                    opacity: [0, 1, 1, 0]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    repeatDelay: 2,
                    ease: "easeInOut" 
                  }}
                >
                   <PenTool className="w-4 h-4 text-white -rotate-45 drop-shadow-[0_0_10px_rgba(var(--primary),0.5)]" />
                </motion.div>
             </div>
          </div>
        </motion.div>

        {/* Scale/Gavel Element */}
        <motion.div 
          animate={{ 
            y: [0, -5, 0],
            rotate: [0, 2, 0, -2, 0]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-12 -right-4 w-24 h-24 rounded-full bg-primary/20 border border-primary/40 backdrop-blur-xl flex items-center justify-center shadow-[0_0_40px_rgba(var(--primary),0.3)] z-20 hover:scale-110 transition-transform duration-500"
        >
          <Scale className="w-10 h-10 text-white drop-shadow-md" />
          <div className="absolute inset-0 rounded-full bg-primary/20 animate-pulse"></div>
        </motion.div>
      </div>
    </div>
  );
}
