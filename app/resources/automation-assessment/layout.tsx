import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Business Automation Self-Assessment | Verexa Technologies" },
  description:
    "Use this practical checklist to identify repetitive workflows that may be worth automating in your business.",
  alternates: { canonical: "/resources/automation-assessment" },
  openGraph: {
    title: "Business Automation Self-Assessment | Verexa Technologies",
    description:
      "A practical checklist for identifying a useful first automation opportunity.",
    url: "/resources/automation-assessment",
    type: "website",
  },
};

export default function AssessmentResourceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
