import { Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Logo } from "@/components/logo";
import { company } from "@/lib/company";
import { featuredIndustries } from "@/lib/industries";
import { assessmentHref } from "@/lib/site";
import { services } from "@/lib/services";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border/10 bg-background/80 pb-8 pt-20 backdrop-blur-3xl">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mb-7 mt-4 max-w-sm text-sm font-medium leading-relaxed text-muted-foreground">
              {company.shortDescription}
            </p>
            <Link
              href={assessmentHref}
              data-cta="footer-assessment"
              className="inline-flex min-h-11 items-center rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground"
            >
              Book an Assessment
            </Link>
            <div className="mt-7 flex items-center gap-3">
              <SocialLink href={company.socials.twitter} label="Verexa on X">
                <Twitter className="h-4 w-4" />
              </SocialLink>
              <SocialLink href={company.socials.linkedin} label="Verexa on LinkedIn">
                <Linkedin className="h-4 w-4" />
              </SocialLink>
              <SocialLink href={company.socials.instagram} label="Verexa on Instagram">
                <Instagram className="h-4 w-4" />
              </SocialLink>
              <SocialLink href={company.socials.youtube} label="Verexa on YouTube">
                <Youtube className="h-4 w-4" />
              </SocialLink>
            </div>
          </div>

          <FooterColumn title="Services">
            {services.map((service) => (
              <FooterLink key={service.slug} href={`/services/${service.slug}`}>
                {service.shortTitle}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title="Solutions">
            {featuredIndustries.map((industry) => (
              <FooterLink key={industry.slug} href={`/industries/${industry.slug}`}>
                {industry.shortTitle}
              </FooterLink>
            ))}
            <FooterLink href="/industries">All industries</FooterLink>
          </FooterColumn>

          <FooterColumn title="Company">
            <FooterLink href="/portfolio">Work</FooterLink>
            <FooterLink href="/about">About</FooterLink>
            <FooterLink href="/insights">Insights</FooterLink>
            <FooterLink href="/contact">Contact</FooterLink>
            <FooterLink href="/resources/automation-assessment">
              Automation checklist
            </FooterLink>
          </FooterColumn>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/5 pt-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between md:text-sm">
          <p>
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <Image src="/flag.svg" alt="Canadian flag" width={20} height={20} />
            <span>Proudly Canadian</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="mb-6 text-xs font-semibold uppercase tracking-[0.18em] text-foreground">
        {title}
      </h2>
      <ul className="space-y-3">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        href={href}
        className="text-sm text-muted-foreground transition-colors hover:text-primary"
      >
        {children}
      </Link>
    </li>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-white/20 hover:text-white"
    >
      {children}
    </Link>
  );
}
