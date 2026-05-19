import { Metadata } from "next";
import { industries } from "@/lib/industries";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const industry = industries.find((i) => i.slug === slug);

  if (!industry) {
    return {
      title: "Industry Not Found - Verexa Technologies",
    };
  }

  return {
    title: `${industry.title} Tech Solutions | Verexa Technologies`,
    description: industry.description,
    keywords: industry.features.join(", "),
    openGraph: {
      title: `${industry.title} | Verexa Technologies`,
      description: industry.tagline,
      type: "website",
    },
  };
}

export default function IndustryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
