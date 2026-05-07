import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries We Serve | Verexa Technologies",
  description: "High-impact digital infrastructure for the GTA's most critical sectors: Real Estate, Healthcare, Legal, Construction, and Retail. Trusted technology partners.",
  keywords: ["GTA Real Estate Tech", "Healthcare Software Canada", "Legal Tech Toronto", "Construction Management Apps", "Retail Digital Solutions GTA"],
  openGraph: {
    title: "Industries We Serve | Verexa Technologies",
    description: "We serve the GTA's most critical sectors with trust and reliability.",
    type: "website",
  },
};

export default function IndustriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
