import type { Metadata } from "next";

import { services } from "@/lib/services";

type Props = { params: Promise<{ slug: string }> };

const seoTitles: Record<string, string> = {
  "ai-automation": "AI Automation Services Toronto",
  "custom-business-software": "Custom Business Software Toronto",
  "managed-technology": "Managed Technology Services Toronto",
  "cloud-infrastructure": "Cloud Infrastructure Services Toronto",
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) return { title: "Service Not Found" };

  const title = seoTitles[service.slug] ?? service.title;
  return {
    title: { absolute: `${title} | Verexa Technologies` },
    description: service.description,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: `${title} | Verexa Technologies`,
      description: service.description,
      url: `/services/${service.slug}`,
      type: "website",
    },
  };
}

export default function ServiceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
