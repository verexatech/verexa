import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Portfolio | Verexa Technologies",
  description:
    "Explore Verexa Technologies' portfolio of premium digital products built for ambitious startups and growing businesses across Canada. From AI-powered SaaS platforms to sleek web applications.",
  keywords: [
    "Verexa Portfolio",
    "Web Development Portfolio GTA",
    "SaaS Development Toronto",
    "Digital Product Portfolio Canada",
    "App Development Case Studies",
  ],
  openGraph: {
    title: "Our Portfolio | Verexa Technologies",
    description:
      "Premium digital products built by Verexa Technologies for ambitious startups and growing businesses.",
    type: "website",
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
