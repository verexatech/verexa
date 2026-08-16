"use client";

import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { Logo } from "@/components/logo";
import { featuredIndustries } from "@/lib/industries";
import { assessmentHref, blogHref } from "@/lib/site";
import { services } from "@/lib/services";

const mainLinks = [
  { href: "/portfolio", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/insights", label: "Insights" },
  { href: blogHref, label: "Blog" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<"services" | "solutions" | null>(null);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobile = () => setMobileMenuOpen(false);
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <div
        className={`fixed top-0 z-[70] flex w-full justify-center transition-all duration-500 ${
          scrolled ? "px-3 pt-3" : "px-0 pt-0"
        }`}
      >
        <nav
          aria-label="Primary navigation"
          className={`flex items-center justify-between transition-all duration-500 ${
            scrolled
              ? "w-full max-w-7xl rounded-full border border-white/10 bg-background/75 px-5 py-3 shadow-xl backdrop-blur-2xl sm:px-7"
              : "w-full border-b border-transparent px-6 py-6 sm:px-10 lg:px-16"
          }`}
        >
          <Logo />

          <div className="hidden items-center gap-1 lg:flex">
            <DesktopMenu
              label="Services"
              href="/services"
              active={isActive("/services")}
              open={openMenu === "services"}
              onToggle={() =>
                setOpenMenu((current) =>
                  current === "services" ? null : "services",
                )
              }
              onClose={() => setOpenMenu(null)}
            >
              <p className="px-4 pb-2 pt-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                What we do
              </p>
              {services.map((service) => (
                <DropdownLink
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  title={service.title}
                  description={service.tagline}
                  onClick={() => setOpenMenu(null)}
                />
              ))}
              <div className="mt-2 border-t border-white/8 pt-2">
                <DropdownLink
                  href="/services"
                  title="All services"
                  description="Compare the full service structure."
                  onClick={() => setOpenMenu(null)}
                />
              </div>
            </DesktopMenu>

            <DesktopMenu
              label="Solutions"
              href="/industries"
              active={isActive("/industries")}
              open={openMenu === "solutions"}
              onToggle={() =>
                setOpenMenu((current) =>
                  current === "solutions" ? null : "solutions",
                )
              }
              onClose={() => setOpenMenu(null)}
            >
              <p className="px-4 pb-2 pt-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                Focus industries
              </p>
              {featuredIndustries.map((industry) => (
                <DropdownLink
                  key={industry.slug}
                  href={`/industries/${industry.slug}`}
                  title={industry.shortTitle}
                  description={industry.tagline}
                  onClick={() => setOpenMenu(null)}
                />
              ))}
              <div className="mt-2 border-t border-white/8 pt-2">
                <DropdownLink
                  href="/industries"
                  title="All industry solutions"
                  description="See primary and additional industries."
                  onClick={() => setOpenMenu(null)}
                />
              </div>
            </DesktopMenu>

            {mainLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? "text-primary"
                    : "text-foreground/82 hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
            <Link
              href={assessmentHref}
              data-cta="navigation-assessment"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Book an Assessment
            </Link>
          </div>

          <button
            type="button"
            className="relative z-60 -mr-2 p-2 text-foreground/80 transition-colors hover:text-white lg:hidden"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </div>

      <div
        className={`fixed inset-0 z-[60] overflow-y-auto bg-background/98 px-6 pb-12 pt-28 backdrop-blur-2xl transition-all duration-300 lg:hidden ${
          mobileMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <div className="mx-auto max-w-xl space-y-9">
          <MobileGroup title="Services">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                onClick={closeMobile}
                className="block py-2 text-lg text-foreground/85"
              >
                {service.title}
              </Link>
            ))}
          </MobileGroup>
          <MobileGroup title="Solutions">
            {featuredIndustries.map((industry) => (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                onClick={closeMobile}
                className="block py-2 text-lg text-foreground/85"
              >
                {industry.shortTitle}
              </Link>
            ))}
            <Link
              href="/industries"
              onClick={closeMobile}
              className="block py-2 text-lg text-primary"
            >
              All industry solutions
            </Link>
          </MobileGroup>
          <div className="grid gap-3 border-t border-white/8 pt-7">
            {mainLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMobile}
                className="py-2 text-2xl font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <Link
            href={assessmentHref}
            onClick={closeMobile}
            data-cta="mobile-navigation-assessment"
            className="flex min-h-14 items-center justify-center rounded-full bg-primary px-6 text-center font-semibold text-primary-foreground"
          >
            Book a Technology Assessment
          </Link>
        </div>
      </div>
    </>
  );
}

function DesktopMenu({
  label,
  href,
  active,
  open,
  onToggle,
  onClose,
  children,
}: {
  label: string;
  href: string;
  active: boolean;
  open: boolean;
  onToggle: () => void;
  onClose: () => void;
  children: React.ReactNode;
}) {
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cancelClose = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const openOnHover = () => {
    cancelClose();
    if (!open) onToggle();
  };

  const closeAfterDelay = () => {
    cancelClose();
    closeTimerRef.current = setTimeout(onClose, 250);
  };

  useEffect(
    () => () => {
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    },
    [],
  );

  return (
    <div
      className="relative"
      onMouseEnter={openOnHover}
      onMouseLeave={closeAfterDelay}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) onClose();
      }}
    >
      <div className="flex items-center rounded-full">
        <Link
          href={href}
          className={`py-2 pl-4 pr-1 text-sm font-medium transition-colors ${active ? "text-primary" : "text-foreground/82 hover:text-primary"}`}
        >
          {label}
        </Link>
        <button
          type="button"
          onClick={onToggle}
          className="p-2 pr-3 text-foreground/65 hover:text-primary"
          aria-label={`Open ${label} menu`}
          aria-expanded={open}
        >
          <ChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
        </button>
      </div>
      <div
        className={`absolute left-1/2 top-full w-[390px] -translate-x-1/2 pt-3 transition-all ${
          open
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-2 opacity-0"
        }`}
      >
        <div className="rounded-3xl border border-white/10 bg-background/95 p-3 shadow-2xl backdrop-blur-2xl">
          {children}
        </div>
      </div>
    </div>
  );
}

function DropdownLink({
  href,
  title,
  description,
  onClick,
}: {
  href: string;
  title: string;
  description: string;
  onClick: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block rounded-2xl px-4 py-3 transition-colors hover:bg-white/5"
    >
      <span className="block font-medium text-foreground">{title}</span>
      <span className="mt-1 block text-xs leading-relaxed text-muted-foreground">
        {description}
      </span>
    </Link>
  );
}

function MobileGroup({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
        {title}
      </p>
      <div>{children}</div>
    </div>
  );
}
