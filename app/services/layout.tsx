import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | Verexa Technologies",
  description: "End-to-end digital solutions: Web Design, Mobile Apps, Cloud Infrastructure, AI Automation, and IT Support. Based in GTA, serving Brampton, Mississauga, and Toronto.",
  keywords: ["Web Development GTA", "Mobile App Developers Toronto", "Cloud Infrastructure Canada", "AI Automation Services", "IT Support Brampton"],
  openGraph: {
    title: "Our Services | Verexa Technologies",
    description: "Captivating web designs, robust cloud infrastructures, and AI-powered solutions.",
    type: "website",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
