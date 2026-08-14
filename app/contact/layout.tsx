import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Book a Technology Assessment | Verexa Technologies" },
  description:
    "Tell Verexa about a workflow, system, or recurring technology problem and identify a practical first step.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Book a Technology Assessment | Verexa Technologies",
    description:
      "Show us where the work gets stuck. We will help identify a practical technology or automation next step.",
    url: "/contact",
    type: "website",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
