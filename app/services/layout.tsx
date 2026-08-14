import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "AI Automation, Business Software & Managed Technology | Verexa Technologies" },
  description:
    "Explore AI and workflow automation, custom business software, managed technology, and cloud infrastructure services for GTA businesses.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Technology Services for GTA Businesses | Verexa Technologies",
    description:
      "Automation, business software, managed technology, and cloud infrastructure tied to real operating needs.",
    url: "/services",
    type: "website",
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
