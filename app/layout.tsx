import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { IBM_Plex_Mono, Inter } from "next/font/google";
import Script from "next/script";

import { ChatWidget } from "@/components/ChatWidget";
import { ConversionTracking } from "@/components/conversion-tracking";
import { PageTransition } from "@/components/page-transition";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import { company } from "@/lib/company";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://verexa.ca"),
  title: {
    default: "AI Automation & Managed Technology Toronto | Verexa Technologies",
    template: "%s | Verexa Technologies",
  },
  description:
    "Verexa helps GTA businesses automate repetitive work, build custom business software, and manage the technology behind their operations.",
  keywords: [
    "AI automation Toronto",
    "AI automation services Toronto",
    "business process automation GTA",
    "workflow automation Toronto",
    "workflow automation GTA",
    "small business automation Toronto",
    "AI consulting Toronto",
    "AI integration services Toronto",
    "AI workflow consulting",
    "business automation consulting",
    "document processing automation",
    "email automation services",
    "CRM automation Toronto",
    "reporting automation",
    "data extraction automation",
    "internal AI assistant",
    "company knowledge assistant",
    "customer enquiry automation",
    "system integration Toronto",
    "API integration services Toronto",
    "custom business software Toronto",
    "custom software development GTA",
    "managed technology services Toronto",
    "internal business software",
    "business application development",
    "custom web applications Toronto",
    "client portal development",
    "internal dashboard development",
    "operations software development",
    "SaaS development Toronto",
    "mobile app development Toronto",
    "managed technology GTA",
    "managed business applications Toronto",
    "application management services",
    "cloud management Toronto",
    "cloud infrastructure Toronto",
    "Microsoft 365 management Toronto",
    "Google Workspace management",
    "automation monitoring services",
    "business technology support Toronto",
    "technology assessment Toronto",
    "automation assessment Toronto",
    "technology consulting GTA",
    "digital operations consulting",
    "Toronto technology partner",
    "GTA technology company",
    "professional services automation",
    "law firm automation Toronto",
    "accounting firm automation",
    "recruiting automation Toronto",
    "insurance workflow automation",
    "real estate automation Toronto",
    "property management automation Toronto",
    "tenant workflow automation",
    "construction automation Toronto",
    "trades business automation",
    "field service workflow automation",
    "invoice processing automation",
    "document workflow automation",
    "CRM integration services",
    "QuickBooks integration services",
    "Clio integration services",
    "business systems integration",
    "Canadian AI automation company",
    "Verexa Technologies",
    "Verexa Toronto",
  ],
  authors: [{ name: company.name }],
  creator: company.name,
  publisher: company.name,
  alternates: { canonical: "/" },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "AI Automation & Managed Technology Toronto | Verexa Technologies",
    description:
      "Automate repetitive work, build better internal systems, and keep the technology behind your business running.",
    url: "https://verexa.ca",
    siteName: "Verexa Technologies",
    images: [
      {
        url: "/banner.png",
        width: 1200,
        height: 630,
        alt: "Verexa Technologies",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Automation & Managed Technology Toronto | Verexa Technologies",
    description:
      "Practical automation, custom software, and managed technology for GTA businesses.",
    images: ["/banner.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  name: company.name,
  url: "https://verexa.ca",
  logo: "https://verexa.ca/logo.png",
  description: company.shortDescription,
  email: company.contact.email,
  telephone: company.contact.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Toronto",
    addressRegion: "ON",
    addressCountry: "CA",
  },
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Greater Toronto Area",
  },
  sameAs: Object.values(company.socials),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="overscroll-none cursor-none overflow-x-hidden">
      <head>
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-0G8RVCC870"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0G8RVCC870');
          `}
        </Script>
      </head>
      <body
        className={`${inter.variable} ${ibmPlexMono.variable} bg-background font-sans text-foreground antialiased`}
      >
        <SmoothCursor />
        <PageTransition>{children}</PageTransition>
        <ChatWidget />
        <ConversionTracking />
        <Analytics />
      </body>
    </html>
  );
}
