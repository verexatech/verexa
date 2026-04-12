import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import "./globals.css";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import { PageTransition } from "@/components/page-transition";

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
  title: {
    default:
      "Verexa Technologies | Premium Digital Solutions for GTA Businesses",
    template: "%s | Verexa Technologies",
  },
  description:
    "Empowering Canadian businesses with cutting-edge digital experiences. We specialize in web design, mobile app development, graphic design, cloud infrastructure, and IT support based in the GTA, Canada.",
  keywords: [
    "Verexa Technologies",
    "Technology Company GTA",
    "Canadian Technology Company",
    "GTA Software Company",
    "Digital Solutions Ontario",
    "Small Business Tech Solutions Canada",
    "Startup Technology Partner Canada",
    // City of Toronto
    "Web Design Toronto",
    "IT Support Toronto",
    "Software Development Toronto",
    "Mobile App Development Toronto",
    // Peel Region
    "Web Design Mississauga",
    "IT Support Mississauga",
    "Software Development Mississauga",
    "Web Design Brampton",
    "IT Support Brampton",
    "Software Development Brampton",
    "Web Design Caledon",
    "IT Support Caledon",
    // York Region
    "Web Design Vaughan",
    "IT Support Vaughan",
    "Web Design Markham",
    "IT Support Markham",
    "Web Design Richmond Hill",
    "IT Support Richmond Hill",
    "Web Design Newmarket",
    "IT Support Newmarket",
    "Web Design Aurora",
    "Web Design King",
    "Web Design Whitchurch-Stouffville",
    "Web Design East Gwillimbury",
    "Web Design Georgina",
    // Halton Region
    "Web Design Oakville",
    "IT Support Oakville",
    "Web Design Burlington",
    "IT Support Burlington",
    "Web Design Milton",
    "Web Design Halton Hills",
    // Durham Region
    "Web Design Oshawa",
    "IT Support Oshawa",
    "Web Design Pickering",
    "Web Design Ajax",
    "Web Design Whitby",
    "Web Design Clarington",
    "Web Design Brock",
    "Web Design Scugog",
    "Web Design Uxbridge",
    // Services
    "Cloud Infrastructure GTA",
    "Graphic Design Toronto",
    "UI/UX Design Canada",
    "Mobile App Development Canada",
    "Tech Support Small Business Canada",
  ],
  authors: [{ name: "Verexa Technologies" }],
  creator: "Verexa Technologies",
  publisher: "Verexa Technologies",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Verexa Technologies | Premium Digital Solutions for GTA Businesses",
    description:
      "Empowering Canadian businesses with cutting-edge digital experiences. GTA-based technology company specializing in web, mobile, cloud & IT support.",
    url: "https://verexa.ca",
    siteName: "Verexa Technologies",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Verexa Technologies Logo",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Verexa Technologies | Digital Solutions",
    description:
      "Empowering Canadian businesses with cutting-edge digital experiences. GTA-based. Canada-focused.",
    images: ["/logo.png"],
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
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overscroll-none cursor-none">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-0G8RVCC870"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0G8RVCC870');
          `}
        </Script>
      </head>
      <body
        className={`${inter.variable} ${ibmPlexMono.variable} font-sans antialiased bg-background text-foreground`}
      >
        <SmoothCursor />
        <PageTransition>{children}</PageTransition>
        <Analytics />
      </body>
    </html>
  );
}
