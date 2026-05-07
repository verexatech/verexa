import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Verexa Technologies | GTA-Based Digital Studio",
  description:
    "Learn about Verexa Technologies, a GTA-based technology company crafting exceptional digital experiences. We partner with startups and enterprises across Canada to build beautiful, performant products.",
  keywords: ["About Verexa", "GTA Technology Company", "Digital Studio Canada", "Software Development GTA", "Toronto Tech Partner"],
  openGraph: {
    title: "About Verexa Technologies | GTA-Based Digital Studio",
    description: "Crafting exceptional digital experiences for businesses across the Greater Toronto Area and all of Canada.",
    type: "website",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
