import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "About Verexa | Verexa Technologies" },
  description:
    "Verexa helps growing GTA businesses modernize operations through automation, focused software, and managed technology.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Verexa Technologies",
    description:
      "A Toronto-based technology partner helping GTA businesses automate, build, integrate, and manage.",
    url: "/about",
    type: "website",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
