import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Automation & Technology Insights | Verexa Technologies" },
  description:
    "Practical guidance on workflow automation, business software, and managed technology for GTA businesses.",
  alternates: { canonical: "/insights" },
  openGraph: {
    title: "Automation & Technology Insights | Verexa Technologies",
    description:
      "Grounded guidance for finding automation opportunities and improving business workflows.",
    url: "/insights",
    type: "website",
  },
};

export default function InsightsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
