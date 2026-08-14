import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Industry Automation Solutions Toronto | Verexa Technologies" },
  description:
    "Workflow automation and custom business systems for professional services, real estate, construction, and other GTA businesses.",
  alternates: { canonical: "/industries" },
  openGraph: {
    title: "Industry Automation Solutions | Verexa Technologies",
    description:
      "Practical technology solutions informed by how professional services, property, and construction teams operate.",
    url: "/industries",
    type: "website",
  },
};

export default function IndustriesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
