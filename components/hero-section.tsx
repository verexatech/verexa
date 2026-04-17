"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "motion/react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-20 flex flex-col items-center justify-center pt-48"
      >
        <h1 className="text-[42px] sm:text-5xl lg:text-7xl font-normal leading-[1.05] bg-linear-to-b from-foreground from-20% to-muted-foreground sm:from-foreground sm:from-30% sm:to-muted-foreground to-100% bg-clip-text text-transparent text-center pb-4 max-w-5xl mx-auto tracking-tight">
          Design.Code.
          <br />
          Deploy.Support.
        </h1>

        <p className="text-center md:text-xl sm:leading-8 sm:max-w-2xl opacity-80 text-foreground/82">
          Innovative digital solutions for GTA based businesses. Web, Mobile,
          Design, Infra and Support. All in one place.
        </p>

        <div className="mt-8 mb-[66px] flex gap-4">
          <Link href="/services">
            <Button
              variant="heroSecondary"
              className="px-[29px] py-[24px] rounded-full text-base font-semibold tracking-wide"
            >
              Explore Services
            </Button>
          </Link>
          <Link href="/contact">
            <Button
              variant="heroSecondary"
              className="px-[29px] py-[24px] rounded-full text-base font-semibold tracking-wide"
            >
              Contact Us
            </Button>
          </Link>
        </div>
      </motion.div>
      {/* Background Gradient to fade background at the bottom */}
      <div className="absolute bottom-0 inset-x-0 h-48 bg-linear-to-b from-transparent to-background pointer-events-none z-10" />

      <video
        autoPlay
        loop
        muted
        playsInline
        preload="none"
        poster="/hero-poster.png"
        className="-mt-36 lg:-mt-[15%] w-full h-[500px] lg:h-auto min-h-[60%] object-cover object-top opacity-80 pointer-events-none z-0"
      >
        <source src="/hero-bg.webm" type="video/webm" />
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>
    </section>
  );
}
