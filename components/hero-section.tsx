"use client";

import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="relative z-20 flex flex-col items-center justify-center pt-48">
        <h1 className="text-[42px] sm:text-5xl lg:text-7xl font-normal leading-[1.05] bg-linear-to-b from-foreground from-20% to-muted-foreground sm:from-foreground sm:from-30% sm:to-muted-foreground to-100% bg-clip-text text-transparent text-center pb-4 max-w-5xl mx-auto tracking-tight">
          Code.Design.
          <br />
          Deploy.Support.
        </h1>

        <p className="text-center md:text-xl sm:leading-8 sm:max-w-2xl opacity-80 text-foreground/82">
          Innovative digital solutions for Canadian businesses.
          Web, Mobile, Design, Infra and Support — all in one place.
        </p>

        <div className="mt-8 mb-[66px] flex gap-4">
          <Button
            variant="heroSecondary"
            className="px-[29px] py-[24px] rounded-full text-base font-semibold tracking-wide"
            onClick={() => (window.location.href = "#services")}
          >
            Explore Services
          </Button>
          <Button
            variant="heroSecondary"
            className="px-[29px] py-[24px] rounded-full text-base font-semibold tracking-wide"
            onClick={() => (window.location.href = "#contact")}
          >
            Contact Us
          </Button>
        </div>
      </div>
      {/* Background Gradient to fade background at the bottom */}
      <div className="absolute bottom-0 inset-x-0 h-48 bg-linear-to-b from-transparent to-background pointer-events-none z-10" />

      <img
        src="/hero-bg.gif"
        alt="Hero Background"
        className="-mt-36 lg:-mt-[15%] w-full h-[500px] lg:h-auto min-h-[60%] object-cover object-top opacity-90 pointer-events-none z-0"
      />
    </section>
  );
}
