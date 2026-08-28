import type { Metadata } from "next";

import { services } from "@/lib/services";

type Props = { params: Promise<{ slug: string }> };

const seoTitles: Record<string, string> = {
  "ai-automation": "AI Automation Services Across the GTA",
  "custom-business-software": "Custom Business Software Across the GTA",
  "managed-technology": "Managed Technology Services Across the GTA",
  "cloud-infrastructure": "Cloud Infrastructure Services Across the GTA",
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) return { title: "Service Not Found" };

  const title = seoTitles[service.slug] ?? service.title;
  const description = `${service.description} Serving businesses across the Greater Toronto Area.`;
  return {
    title: { absolute: `${title} | Verexa Technologies` },
    description,
    keywords: [
      `${service.shortTitle} GTA`,
      `${service.title} Greater Toronto Area`,
      service.title,
      "GTA technology partner",
      "Verexa Technologies",
    ],
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: `${title} | Verexa Technologies`,
      description,
      url: `/services/${service.slug}`,
      type: "website",
    },
  };
}

export default function ServiceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
