"use client";

import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
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

export default function ContactPage() {
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
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/30 relative flex flex-col">
      <Navbar />

      <section className="pt-36 pb-12 md:pt-48 md:pb-16 relative overflow-hidden flex-1 flex flex-col justify-center">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[40px_40px] mask-[linear-gradient(to_bottom,black_20%,transparent_100%)] pointer-events-none"></div>

        <div className="max-w-[1250px] mx-auto px-6 relative z-10 w-full">
          <div className="text-center mb-16 relative">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.05] bg-linear-to-b from-foreground from-20% to-muted-foreground sm:from-foreground sm:from-30% sm:to-muted-foreground to-100% bg-clip-text text-transparent mb-6">
              Work With Us
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Based in the GTA, Ontario — serving businesses across Canada with
              premium digital solutions. Let's create something extraordinary
              together.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
            {/* Left Column: Map */}
            <div className="w-full lg:w-1/2 flex flex-col items-center justify-center relative min-h-[400px] group">
              <div className="relative w-full flex items-center justify-center">
                {/* Elegant glow effect behind the map */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-primary/20 rounded-full blur-[140px] pointer-events-none group-hover:bg-primary/30 transition-colors duration-700"></div>

                {/* Note: The map is styled heavily with filters to mute its brightness and blend beautifully into the dark theme */}
                <img
                  src="/canada-map.png"
                  alt="Canada Map"
                  className="w-full max-w-lg h-auto object-contain opacity-60 brightness-[0.5] contrast-[1.4] invert transition-all duration-700 hover:opacity-80 hover:brightness-50"
                  style={{ filter: "brightness(0.8) contrast(1.2)" }}
                />
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-normal bg-linear-to-b from-foreground from-20% to-muted-foreground sm:from-foreground sm:from-30% sm:to-muted-foreground to-100% bg-clip-text text-transparent mt-6 flex items-center gap-4">
                Proudly Canadian <img src="/flag.svg" alt="flag" className="w-10 h-8" />
              </h3>
            </div>

            {/* Right Column: Form */}
            <div className="w-full lg:w-1/2 max-w-lg mx-auto lg:mx-0 relative z-20">
              <div className="bg-card/60 backdrop-blur-3xl border border-white/10 rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.3)] p-8 sm:p-10 w-full liquid-glass relative overflow-hidden">
                <div className="absolute -inset-x-12 -inset-y-12 bg-linear-to-bl from-primary/5 to-transparent opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500 z-0 pointer-events-none"></div>
                <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent pointer-events-none z-10"></div>

                <div className="relative z-20">
                  <h3 className="text-2xl md:text-3xl font-normal text-white mb-3 tracking-tight">
                    Ready to Get Started?
                  </h3>
                  <p className="text-muted-foreground text-sm sm:text-base mb-8">
                    Partner with our local experts to elevate your brand and
                    scale your digital presence.
                  </p>

                  <form
                    className="flex flex-col gap-5"
                    onSubmit={handleSubmit}
                    noValidate
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Name */}
                      <div className="flex flex-col gap-1.5">
                        <div
                          className={`h-12 bg-black/40 backdrop-blur-md rounded-xl border transition-all overflow-hidden ${errors.name ? "border-red-500/60 ring-1 ring-red-500/30" : "border-white/10 hover:border-primary/40 focus-within:border-primary/60 focus-within:ring-1 focus-within:ring-primary/40"}`}
                        >
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Full Name *"
                            className="w-full h-full bg-transparent px-4 py-2 outline-none text-white text-sm placeholder:text-muted-foreground/60"
                          />
                        </div>
                        {errors.name && (
                          <p className="text-red-400 text-xs px-1">
                            {errors.name}
                          </p>
                        )}
                      </div>

                      {/* Phone */}
                      <div className="flex flex-col gap-1.5">
                        <div
                          className={`h-12 bg-black/40 backdrop-blur-md rounded-xl border transition-all overflow-hidden ${errors.phone ? "border-red-500/60 ring-1 ring-red-500/30" : "border-white/10 hover:border-primary/40 focus-within:border-primary/60 focus-within:ring-1 focus-within:ring-primary/40"}`}
                        >
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Phone Number"
                            className="w-full h-full bg-transparent px-4 py-2 outline-none text-white text-sm placeholder:text-muted-foreground/60"
                          />
                        </div>
                        {errors.phone && (
                          <p className="text-red-400 text-xs px-1">
                            {errors.phone}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-1.5">
                      <div
                        className={`h-12 bg-black/40 backdrop-blur-md rounded-xl border transition-all overflow-hidden ${errors.email ? "border-red-500/60 ring-1 ring-red-500/30" : "border-white/10 hover:border-primary/40 focus-within:border-primary/60 focus-within:ring-1 focus-within:ring-primary/40"}`}
                      >
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Email Address *"
                          className="w-full h-full bg-transparent px-4 py-2 outline-none text-white text-sm placeholder:text-muted-foreground/60"
                        />
                      </div>
                      {errors.email && (
                        <p className="text-red-400 text-xs px-1">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-1.5">
                      <div
                        className={`bg-black/40 backdrop-blur-md rounded-xl border transition-all overflow-hidden ${errors.message ? "border-red-500/60 ring-1 ring-red-500/30" : "border-white/10 hover:border-primary/40 focus-within:border-primary/60 focus-within:ring-1 focus-within:ring-primary/40"}`}
                      >
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Your Message *"
                          rows={4}
                          className="w-full bg-transparent px-4 py-3 outline-none text-white text-sm resize-none placeholder:text-muted-foreground/60"
                        ></textarea>
                      </div>
                      {errors.message && (
                        <p className="text-red-400 text-xs px-1">
                          {errors.message}
                        </p>
                      )}
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
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
