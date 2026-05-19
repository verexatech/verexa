import { Metadata } from "next";
import { services } from "@/lib/services";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found - Verexa Technologies",
    };
  }

  return {
    title: `${service.title} Services | Verexa Technologies`,
    description: service.description,
    keywords: service.features.join(", "),
    openGraph: {
      title: `${service.title} | Verexa Technologies`,
      description: service.tagline,
      type: "website",
    },
  };
}

export default function ServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
