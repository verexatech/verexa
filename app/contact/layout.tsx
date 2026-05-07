import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Verexa Technologies",
  description:
    "Ready to start your next project? Contact Verexa Technologies today. Based in the GTA, serving businesses across Brampton, Mississauga, Toronto, and all of Canada.",
  keywords: ["Contact Verexa", "Hire Web Developers GTA", "Tech Support Toronto", "Digital Agency Contact", "Brampton Software Company"],
  openGraph: {
    title: "Contact Us | Verexa Technologies",
    description: "Let's create something extraordinary together. Get in touch for premium digital solutions.",
    type: "website",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
