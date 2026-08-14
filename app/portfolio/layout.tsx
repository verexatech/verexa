import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Technology Case Studies | Verexa Technologies" },
  description:
    "Explore Verexa case studies covering AI products, workflow automation, custom business software, and cloud-backed applications.",
  alternates: { canonical: "/portfolio" },
  openGraph: {
    title: "Technology Case Studies | Verexa Technologies",
    description:
      "The problems, solutions, engineering focus, and demonstrated capabilities behind selected Verexa work.",
    url: "/portfolio",
    type: "website",
  },
};

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
