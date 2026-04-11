"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/logo";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);

      // Clear hash when scrolled straight to top
      if (window.scrollY < 100 && window.location.hash) {
        window.history.replaceState(null, "", window.location.pathname);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`fixed top-0 z-50 w-full transition-all duration-500 flex justify-center ${scrolled ? "pt-4 px-4" : "pt-0 px-0"}`}
      >
        <nav
          className={`flex items-center justify-between transition-all duration-500 ${
            scrolled
              ? "w-full max-w-5xl rounded-full shadow-md py-3 px-10 bg-background/50 backdrop-blur-xl liquid-glass"
              : "w-full max-w-full rounded-none border-b border-transparent py-6 px-10 sm:px-36"
          }`}
        >
          <Logo />

          <div className="hidden md:flex items-center gap-10 pr-2">
            {navLinks.map(({ href, label }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`text-md font-medium transition-colors relative group py-2 ${
                    isActive
                      ? "text-primary"
                      : "text-foreground/90 hover:text-primary"
                  }`}
                >
                  {label}
                  <span className="absolute bottom-1 left-0 h-[2px] rounded-full bg-primary transition-all duration-300 w-0 group-hover:w-full" />
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 -mr-2 text-foreground/80 hover:text-white transition-colors cursor-pointer relative z-60"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-background/95 backdrop-blur-2xl transition-all duration-500 flex flex-col items-center justify-center md:hidden ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] pointer-events-none -translate-y-1/2"></div>
        <div
          className={`flex flex-col items-center gap-8 transition-all duration-500 delay-100 ${
            mobileMenuOpen
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-3xl font-medium tracking-wide transition-colors ${
                  isActive
                    ? "text-primary"
                    : "text-foreground/90 hover:text-primary"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
