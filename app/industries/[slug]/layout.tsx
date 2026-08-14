import type { Metadata } from "next";

import { industries } from "@/lib/industries";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const industry = industries.find((item) => item.slug === slug);
  if (!industry) return { title: "Industry Not Found" };

  const title = `${industry.shortTitle} Automation Solutions Toronto`;
  return {
    title: { absolute: `${title} | Verexa Technologies` },
    description: industry.description,
    alternates: { canonical: `/industries/${industry.slug}` },
    openGraph: {
      title: `${title} | Verexa Technologies`,
      description: industry.description,
      url: `/industries/${industry.slug}`,
      type: "website",
    },
  };
}

export default function IndustryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
