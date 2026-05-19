import Link from "next/link";
import { Logo } from "@/components/logo";
import { Twitter, Linkedin, Instagram, Youtube } from "lucide-react";
import Image from "next/image";
import { company } from "@/lib/company";

export function Footer() {
  return (
    <footer className="border-t border-border/10 bg-background/80 backdrop-blur-3xl pt-20 pb-8 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-[1250px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 sm:gap-x-8 gap-y-12 lg:gap-8 mb-8 md:mb-16">
          {/* Brand Col */}
          <div className="col-span-3 md:col-span-2 lg:col-span-2">
            <Logo />
            <p className="text-muted-foreground text-sm font-medium leading-relaxed max-w-sm mt-4 mb-8">
              {company.shortDescription}
            </p>
            <div className="flex items-center gap-4">
              <SocialLink
                href={company.socials.twitter}
                icon={<Twitter className="w-4 h-4" />}
              />
              <SocialLink
                href={company.socials.linkedin}
                icon={<Linkedin className="w-4 h-4" />}
              />
              <SocialLink
                href={company.socials.instagram}
                icon={<Instagram className="w-4 h-4" />}
              />
              <SocialLink
                href={company.socials.youtube}
                icon={<Youtube className="w-4 h-4" />}
              />
            </div>
          </div>

          {/* Links Col 1 */}
          <div className="col-span-1">
            <h4 className="text-foreground tracking-wide uppercase text-xs font-semibold mb-6">
              Quick Links
            </h4>
            <ul className="space-y-4">
              <FooterLink href="/services">Services</FooterLink>
              <FooterLink href="/industries">Industries</FooterLink>
              <FooterLink href="/portfolio">Portfolio</FooterLink>
              <FooterLink href="/about">About</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
            </ul>
          </div>

          {/* Links Col 2 */}
          <div className="col-span-1">
            <h4 className="text-foreground tracking-wide uppercase text-xs font-semibold mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li>
                <span className="text-muted-foreground text-sm hover:text-white transition-colors">
                  {company.contact.location}
                </span>
              </li>
              <li>
                <a
                  href={`mailto:${company.contact.email}`}
                  className="text-muted-foreground text-sm hover:text-primary transition-colors relative group block w-fit"
                >
                  {company.contact.email}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${company.contact.phone.replace(/[^0-9+]/g, "")}`}
                  className="text-muted-foreground text-sm hover:text-primary transition-colors relative group block w-fit"
                >
                  {company.contact.phone}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all group-hover:w-full"></span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs md:text-sm font-normal bg-linear-to-b from-foreground from-20% to-muted-foreground sm:from-foreground sm:from-30% sm:to-muted-foreground to-100% bg-clip-text text-transparent flex items-center justify-center gap-2">
            © {new Date().getFullYear()} {company.name}{" "}
            <span className="text-nowrap">All rights reserved.</span>
          </p>
          <p className="text-xs md:text-sm font-normal bg-linear-to-b from-foreground from-20% to-muted-foreground sm:from-foreground sm:from-30% sm:to-muted-foreground to-100% bg-clip-text text-transparent flex items-center justify-center gap-2">
            Proudly Canadian{" "}
            <Image
              src="/flag.svg"
              alt="Canadian flag"
              width={20}
              height={20}
              style={{ height: "auto" }}
            />
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <Link
      href={href}
      target="_blank"
      className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-white hover:bg-white/10 hover:border-white/20 transition-all shadow-inner hover:shadow-lg hover:-translate-y-1"
    >
      {icon}
    </Link>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <Link
        href={href}
        className="text-muted-foreground text-sm hover:text-primary transition-colors relative group"
      >
        {children}
        <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all group-hover:w-full"></span>
      </Link>
    </li>
  );
}
