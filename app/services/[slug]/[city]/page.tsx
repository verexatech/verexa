import type { Metadata } from "next";
import {
  Building2,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  MapPin,
} from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

import { AssessmentCta } from "@/components/assessment-cta";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { Reveal } from "@/components/page-transition";
import {
  AIGraphic,
  SupportGraphic,
  WebGraphic,
} from "@/components/service-graphics";
import {
  getServiceLocation,
  isPrimaryServiceSlug,
  serviceLocations,
  type PrimaryServiceSlug,
  type ServiceLocation,
} from "@/lib/service-locations";
import { primaryServices, type Service } from "@/lib/services";
import { assessmentHref } from "@/lib/site";

type Props = {
  params: Promise<{ slug: string; city: string }>;
};

type Faq = {
  question: string;
  answer: string;
};

const seoServiceNames: Record<PrimaryServiceSlug, string> = {
  "ai-automation": "AI Automation Services",
  "custom-business-software": "Custom Business Software",
  "managed-technology": "Managed Technology Services",
};

const proseServiceNames: Record<PrimaryServiceSlug, string> = {
  "ai-automation": "AI automation",
  "custom-business-software": "custom business software",
  "managed-technology": "managed technology",
};

const graphicMap = {
  ai: <AIGraphic />,
  software: <WebGraphic />,
  managed: <SupportGraphic />,
};

export function generateStaticParams() {
  return primaryServices.flatMap((service) => {
    if (!isPrimaryServiceSlug(service.slug)) return [];

    return serviceLocations.map((location) => ({
      slug: service.slug,
      city: location.slug,
    }));
  });
}

function getPageData(slug: string, city: string) {
  if (!isPrimaryServiceSlug(slug)) return null;

  const service = primaryServices.find((item) => item.slug === slug);
  const location = getServiceLocation(city);
  if (!service || !location) return null;

  return {
    service,
    location,
    detail: location.serviceDetails[slug],
    serviceSlug: slug,
  };
}

function buildFaqs(
  service: Service,
  serviceSlug: PrimaryServiceSlug,
  location: ServiceLocation,
): Faq[] {
  const projectTypes = location.serviceDetails[serviceSlug].opportunities
    .map((opportunity) => opportunity.title.toLowerCase())
    .join(", ");

  const firstStep =
    serviceSlug === "managed-technology"
      ? "an inventory of the systems, owners, vendors, access, and support gaps in scope"
      : serviceSlug === "custom-business-software"
        ? "one costly workflow that standard software does not support well"
        : "one repetitive workflow with visible volume, effort, and exceptions";
  const coverageArea =
    location.slug === "toronto"
      ? "Toronto and surrounding GTA communities"
      : `${location.name} in ${location.region}`;

  return [
    {
      question: `Does Verexa provide ${proseServiceNames[serviceSlug]} services in ${location.name}?`,
      answer: `Yes. Verexa is a Toronto-based technology partner serving businesses across the Greater Toronto Area, including ${coverageArea}. The working model and any in-person requirements are agreed during discovery.`,
    },
    {
      question: `What ${proseServiceNames[serviceSlug]} projects are a good fit for ${location.name} businesses?`,
      answer: `Strong local opportunities include ${projectTypes}. We confirm the workflow, users, systems, exceptions, and expected value before recommending a solution.`,
    },
    {
      question: "Can you work with our existing systems and technology vendors?",
      answer: `Usually. Common platforms include ${service.integrations
        .slice(0, 5)
        .join(", ")}. Discovery confirms available access, APIs, vendor responsibilities, risks, and the right integration or support model.`,
    },
    {
      question: "How does an engagement begin?",
      answer: `We start with ${firstStep}. From there, we define a useful first scope, responsibilities, assumptions, measures of success, and the path to ongoing ownership.`,
    },
  ];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, city } = await params;
  const pageData = getPageData(slug, city);

  if (!pageData) {
    return {
      title: { absolute: "Service Area Not Found | Verexa Technologies" },
      robots: { index: false, follow: false },
    };
  }

  const { service, location, serviceSlug } = pageData;
  const title = `${seoServiceNames[serviceSlug]} in ${location.name}`;
  const description = `Verexa provides practical ${proseServiceNames[serviceSlug]} for ${location.name} businesses across the GTA. Explore local use cases, capabilities, and delivery.`;
  const canonical = `/services/${service.slug}/${location.slug}`;

  return {
    title: { absolute: `${title} | Verexa Technologies` },
    description,
    keywords: [
      `${seoServiceNames[serviceSlug]} ${location.name}`,
      `${service.shortTitle} ${location.name}`,
      `${service.shortTitle} ${location.region}`,
      `${service.shortTitle} GTA`,
      "Verexa Technologies",
    ],
    alternates: { canonical },
    openGraph: {
      title: `${title} | Verexa Technologies`,
      description,
      url: canonical,
      siteName: "Verexa Technologies",
      images: [
        {
          url: "/banner.png",
          width: 1200,
          height: 630,
          alt: "Verexa Technologies",
        },
      ],
      type: "website",
      locale: "en_CA",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Verexa Technologies`,
      description,
      images: ["/banner.png"],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function ServiceLocationPage({ params }: Props) {
  const { slug, city } = await params;
  const pageData = getPageData(slug, city);
  if (!pageData) notFound();

  const { service, location, detail, serviceSlug } = pageData;
  const faqs = buildFaqs(service, serviceSlug, location);
  const canonicalUrl = `https://verexa.ca/services/${service.slug}/${location.slug}`;
  const relatedServices = primaryServices.filter(
    (item) => item.slug !== service.slug,
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${canonicalUrl}#service`,
        name: `${seoServiceNames[serviceSlug]} in ${location.name}`,
        description: detail.intro,
        url: canonicalUrl,
        serviceType: service.title,
        provider: {
          "@type": "Organization",
          "@id": "https://verexa.ca/#organization",
          name: "Verexa Technologies Inc.",
          url: "https://verexa.ca",
        },
        areaServed: {
          "@type": "City",
          name: location.name,
          containedInPlace: {
            "@type": "AdministrativeArea",
            name: location.region,
          },
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Services",
            item: "https://verexa.ca/services",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: service.title,
            item: `https://verexa.ca/services/${service.slug}`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: location.name,
            item: canonicalUrl,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Navbar />

      <section className="relative overflow-hidden pb-16 pt-32 md:pb-24 md:pt-40">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-size-[64px_64px]" />
        <div className="absolute left-1/2 top-16 h-96 w-[760px] -translate-x-1/2 rounded-full bg-primary/8 blur-[140px]" />
        <Reveal priority className="relative z-10 mx-auto max-w-7xl px-6">
          <nav
            aria-label="Breadcrumb"
            className="mb-10 flex flex-wrap items-center gap-2 text-sm text-muted-foreground"
          >
            <Link
              href="/services"
              className="transition-colors hover:text-primary"
            >
              Services
            </Link>
            <span aria-hidden="true">/</span>
            <Link
              href={`/services/${service.slug}`}
              className="transition-colors hover:text-primary"
            >
              {service.shortTitle}
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-foreground/80">{location.name}</span>
          </nav>

          <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-20">
            <div className="flex-1">
              <p className="mb-5 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                <MapPin className="h-4 w-4" />
                {location.name} service area
              </p>
              <h1 className="bg-linear-to-b from-foreground from-20% to-muted-foreground bg-clip-text text-5xl font-normal leading-[1.02] text-transparent sm:text-6xl lg:text-7xl">
                {service.title}
                <span className="mt-2 block text-3xl sm:text-4xl lg:text-5xl">
                  for {location.name} businesses
                </span>
              </h1>
              <p className="mt-7 max-w-3xl text-lg leading-relaxed text-foreground/76 md:text-xl">
                {detail.intro}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={assessmentHref}
                  data-cta={`${service.slug}-${location.slug}-assessment`}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 font-semibold text-primary-foreground"
                >
                  Book a Technology Assessment
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="w-full flex-1">
              <div className="relative mx-auto flex h-[390px] w-full max-w-lg items-center justify-center overflow-hidden rounded-[40px] border border-white/8 bg-card/25 shadow-2xl">
                {graphicMap[service.graphicId as keyof typeof graphicMap]}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="border-y border-white/5 bg-card/10 py-20 md:py-24">
        <Reveal className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Local operating context
            </p>
            <h2 className="text-4xl font-normal sm:text-5xl">
              Built around how {location.name} businesses work.
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
              {location.context}
            </p>
            <p className="mt-5 max-w-3xl leading-relaxed text-foreground/76">
              {detail.localFit}
            </p>
          </div>

          <aside className="rounded-[32px] border border-white/8 bg-background/55 p-7 sm:p-8">
            <div className="flex items-center gap-3">
              <Building2 className="h-5 w-5 text-primary" />
              <h2 className="text-xl font-medium">Business landscape</h2>
            </div>
            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              Relevant sectors
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {location.sectors.map((sector) => (
                <span
                  key={sector}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-foreground/78"
                >
                  {sector}
                </span>
              ))}
            </div>
            <p className="mt-7 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              Serving teams across
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {location.businessAreas.map((area) => (
                <span
                  key={area}
                  className="rounded-full border border-primary/15 bg-primary/6 px-3 py-1.5 text-xs text-foreground/78"
                >
                  {area}
                </span>
              ))}
            </div>
          </aside>
        </Reveal>
      </section>

      <section className="py-20 md:py-28">
        <Reveal className="mx-auto max-w-7xl px-6">
          <div className="mb-12 max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Practical opportunities
            </p>
            <h2 className="text-4xl font-normal sm:text-5xl">
              Where {proseServiceNames[serviceSlug]} can create value in{" "}
              {location.name}.
            </h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {detail.opportunities.map((opportunity, index) => (
              <article
                key={opportunity.title}
                className="rounded-[30px] border border-white/8 bg-card/25 p-7"
              >
                <span className="text-sm font-semibold text-primary">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 text-2xl font-medium">
                  {opportunity.title}
                </h3>
                <div className="mt-6 space-y-5 text-sm leading-relaxed">
                  <div>
                    <p className="mb-1 font-semibold uppercase tracking-wider text-foreground/60">
                      Situation
                    </p>
                    <p className="text-muted-foreground">
                      {opportunity.situation}
                    </p>
                  </div>
                  <div>
                    <p className="mb-1 font-semibold uppercase tracking-wider text-foreground/60">
                      Practical approach
                    </p>
                    <p className="text-foreground/82">{opportunity.approach}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="border-y border-white/5 bg-card/10 py-20 md:py-28">
        <Reveal className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Capabilities
            </p>
            <h2 className="text-4xl font-normal sm:text-5xl">
              A service scoped to the operating problem.
            </h2>
            <ul className="mt-9 grid gap-4 sm:grid-cols-2">
              {service.features.map((feature) => (
                <li
                  key={feature}
                  className="flex gap-3 rounded-2xl border border-white/8 bg-background/45 p-4 text-sm text-foreground/85"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Delivery
            </p>
            <div className="space-y-3">
              {service.process.map((step) => (
                <article
                  key={step.step}
                  className="grid grid-cols-[auto_1fr] gap-5 rounded-2xl border border-white/8 bg-background/45 p-5"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/12 text-sm font-semibold text-primary">
                    {step.step}
                  </span>
                  <div>
                    <h3 className="text-lg font-medium">{step.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="py-20 md:py-28">
        <Reveal className="mx-auto max-w-5xl px-6">
          <div className="mb-10">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Common questions
            </p>
            <h2 className="text-4xl font-normal sm:text-5xl">
              Planning {proseServiceNames[serviceSlug]} in {location.name}.
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <article
                key={faq.question}
                className="rounded-2xl border border-white/8 bg-card/25 p-6 sm:p-7"
              >
                <h3 className="text-lg font-medium">{faq.question}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  {faq.answer}
                </p>
              </article>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="border-t border-white/5 bg-card/10 py-16 md:py-20">
        <Reveal className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-medium">
              Other services in {location.name}
            </h2>
            <div className="mt-5 space-y-3">
              {relatedServices.map((relatedService) => (
                <Link
                  key={relatedService.slug}
                  href={`/services/${relatedService.slug}/${location.slug}`}
                  className="group flex items-center justify-between rounded-2xl border border-white/8 bg-background/45 px-5 py-4 transition-colors hover:border-primary/35"
                >
                  <span>{relatedService.title}</span>
                  <ChevronRight className="h-4 w-4 text-primary transition-transform group-hover:translate-x-1" />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-medium">
              {service.shortTitle} across the GTA
            </h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {serviceLocations
                .filter((item) => item.slug !== location.slug)
                .map((item) => (
                  <Link
                    key={item.slug}
                    href={`/services/${service.slug}/${item.slug}`}
                    className="rounded-full border border-white/10 bg-background/45 px-4 py-2 text-sm text-foreground/75 transition-colors hover:border-primary/35 hover:text-primary"
                  >
                    {item.name}
                  </Link>
                ))}
            </div>
            <Link
              href={`/services/${service.slug}`}
              className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-primary"
            >
              <ChevronLeft className="h-4 w-4" />
              Back to the GTA-wide {service.shortTitle} service
            </Link>
          </div>
        </Reveal>
      </section>

      <AssessmentCta compact />
      <Footer />
    </main>
  );
}
