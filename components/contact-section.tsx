"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

type FormData = { name: string; phone: string; email: string; message: string };
type FormErrors = Partial<Record<keyof FormData, string>>;

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) {
    errors.name = "Full name is required.";
  } else if (data.name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters.";
  }
  if (data.phone && !/^[\d\s\-\+\(\)]{7,15}$/.test(data.phone)) {
    errors.phone = "Enter a valid phone number.";
  }
  if (!data.email.trim()) {
    errors.email = "Email address is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Enter a valid email address.";
  }
  if (!data.message.trim()) {
    errors.message = "Message cannot be empty.";
  } else if (data.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters.";
  }
  return errors;
}

export function WorkWithUsSection() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", phone: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 3000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 3000);
      }
    } catch (error) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section
      id="contact"
      className="bg-background pt-24 overflow-hidden relative border-t border-border/10 scroll-mt-24"
    >
      <div className="max-w-[1250px] mx-auto px-4 sm:px-6 relative z-10 text-center mb-16">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.05] bg-linear-to-b from-foreground from-20% to-muted-foreground sm:from-foreground sm:from-30% sm:to-muted-foreground to-100% bg-clip-text text-transparent mb-6">
          Work With Us
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
          Based in the GTA, Ontario — serving businesses across Canada with
          premium digital solutions.
        </p>
      </div>

      <div className="relative mx-auto max-w-7xl z-20 w-full mt-6 sm:mt-8 h-[600px] flex items-center justify-center">
        {/* Map Background */}
        <div className="absolute inset-0 w-full h-full opacity-60 pointer-events-none flex justify-center items-center">
          <img
            src="/world-map.svg"
            className="w-full h-auto object-cover opacity-90 brightness-150 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
            alt="world map"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        </div>

        {/* Floating CTA Form Card */}
        <div className="relative z-30 bg-card/60 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-8 w-full max-w-lg mx-4 sm:mx-auto">
          <h3 className="text-3xl font-normal text-foreground mb-3">
            Ready to Get Started?
          </h3>
          <p className="text-muted-foreground text-base mb-6">
            Partner with our GTA-based team of experts to elevate your
            brand and scale your digital presence across Canada.
          </p>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit} noValidate>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Name */}
              <div className="flex flex-col gap-1">
                <div className={`h-12 bg-black/20 backdrop-blur-md rounded-xl border transition-all overflow-hidden ${errors.name ? "border-red-500/60 ring-1 ring-red-500/30" : "border-white/10 hover:border-primary/30 focus-within:border-primary/50 focus-within:ring-1 focus-within:ring-primary/30"}`}>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name *"
                    className="w-full h-full bg-transparent px-4 py-2 outline-none text-white text-sm"
                  />
                </div>
                {errors.name && <p className="text-red-400 text-xs px-1">{errors.name}</p>}
              </div>
              {/* Phone */}
              <div className="flex flex-col gap-1">
                <div className={`h-12 bg-black/20 backdrop-blur-md rounded-xl border transition-all overflow-hidden ${errors.phone ? "border-red-500/60 ring-1 ring-red-500/30" : "border-white/10 hover:border-primary/30 focus-within:border-primary/50 focus-within:ring-1 focus-within:ring-primary/30"}`}>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="w-full h-full bg-transparent px-4 py-2 outline-none text-white text-sm"
                  />
                </div>
                {errors.phone && <p className="text-red-400 text-xs px-1">{errors.phone}</p>}
              </div>
            </div>
            {/* Email */}
            <div className="flex flex-col gap-1">
              <div className={`h-12 bg-black/20 backdrop-blur-md rounded-xl border transition-all overflow-hidden ${errors.email ? "border-red-500/60 ring-1 ring-red-500/30" : "border-white/10 hover:border-primary/30 focus-within:border-primary/50 focus-within:ring-1 focus-within:ring-primary/30"}`}>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address *"
                  className="w-full h-full bg-transparent px-4 py-2 outline-none text-white text-sm"
                />
              </div>
              {errors.email && <p className="text-red-400 text-xs px-1">{errors.email}</p>}
            </div>
            {/* Message */}
            <div className="flex flex-col gap-1">
              <div className={`bg-black/20 backdrop-blur-md rounded-xl border transition-all overflow-hidden ${errors.message ? "border-red-500/60 ring-1 ring-red-500/30" : "border-white/10 hover:border-primary/30 focus-within:border-primary/50 focus-within:ring-1 focus-within:ring-primary/30"}`}>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message *"
                  rows={4}
                  className="w-full bg-transparent px-4 py-3 outline-none text-white text-sm resize-none"
                ></textarea>
              </div>
              {errors.message && <p className="text-red-400 text-xs px-1">{errors.message}</p>}
            </div>
            <Button
              type="submit"
              variant="default"
              disabled={status === "loading"}
              className={`w-full h-12 rounded-xl mt-2 text-base font-semibold transition-all duration-300 ${status === "success" ? "bg-green-500 text-white hover:bg-green-600" : status === "error" ? "bg-red-500 text-white hover:bg-red-600" : "liquid-glass"}`}
            >
              {status === "loading"
                ? "Sending..."
                : status === "success"
                  ? "Message Sent!"
                  : status === "error"
                    ? "Error Sending"
                    : "Send Message"}
            </Button>
          </form>
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
