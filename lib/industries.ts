export type Industry = {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  features: string[];
  graphicId:
    | "real-estate"
    | "healthcare"
    | "legal"
    | "construction"
    | "food-retail";
  detailedDescription: string[];
  benefits: { title: string; description: string }[];
  process: { step: string; title: string; description: string }[];
  examples: { title: string; description: string }[];
  integrations: string[];
  featured: boolean;
};

export const industries: Industry[] = [
  {
    id: "01",
    slug: "professional-and-legal-services",
    title: "Professional Services",
    shortTitle: "Professional Services",
    tagline: "Move client work forward with less administration.",
    description:
      "Practical automation and software for accounting, legal, consulting, recruiting, staffing, and insurance teams.",
    features: [
      "Client intake and onboarding",
      "Document collection and processing",
      "Matter, engagement, and task workflows",
      "Internal knowledge assistants",
      "Client portals and status updates",
      "Reporting and system integrations",
    ],
    graphicId: "legal",
    detailedDescription: [
      "Professional-service teams create value through judgement and client relationships, yet much of the day can disappear into intake, document handling, status updates, and work spread across email and spreadsheets.",
      "We help firms simplify those workflows with automation, focused internal software, secure client experiences, and connections between the systems already in use. Sensitive decisions remain with the right people; the repetitive movement of information does not have to.",
    ],
    benefits: [
      {
        title: "Cleaner intake",
        description:
          "Collect the right information and documents, route new work, and keep an auditable record.",
      },
      {
        title: "Less status chasing",
        description:
          "Give staff and clients a clearer view of requests, next steps, and outstanding items.",
      },
      {
        title: "Knowledge that is easier to use",
        description:
          "Help teams find approved procedures, templates, and answers from controlled internal sources.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Map the client journey",
        description:
          "Trace intake, documents, approvals, handoffs, delivery, and follow-up.",
      },
      {
        step: "02",
        title: "Find the friction",
        description:
          "Identify repeated entry, delayed decisions, and places where information gets lost.",
      },
      {
        step: "03",
        title: "Connect the workflow",
        description:
          "Automate or build the highest-value flow around existing tools and responsibilities.",
      },
      {
        step: "04",
        title: "Manage and improve",
        description:
          "Document ownership, monitor the system, and refine it as the firm grows.",
      },
    ],
    examples: [
      {
        title: "Client intake",
        description:
          "Turn a form or email into a structured record, document checklist, assigned owner, and next-step message.",
      },
      {
        title: "Document workflow",
        description:
          "Extract and validate information from incoming files, then route exceptions for human review.",
      },
      {
        title: "Weekly reporting",
        description:
          "Combine practice, finance, or CRM data into a repeatable management summary.",
      },
    ],
    integrations: [
      "Microsoft 365",
      "Google Workspace",
      "Clio",
      "QuickBooks",
      "CRM platforms",
      "Document storage",
    ],
    featured: true,
  },
  {
    id: "02",
    slug: "real-estate-and-property-management",
    title: "Real Estate & Property Management",
    shortTitle: "Real Estate",
    tagline: "Connect leads, documents, tenants, and property operations.",
    description:
      "Automation and business systems for brokerages, property managers, developers, and real-estate service teams.",
    features: [
      "Lead capture and CRM routing",
      "Tenant and owner portals",
      "Maintenance request workflows",
      "Lease and document processing",
      "Property and portfolio dashboards",
      "Notifications and follow-up automation",
    ],
    graphicId: "real-estate",
    detailedDescription: [
      "Real-estate and property teams coordinate people, documents, time-sensitive requests, and multiple external systems. When those handoffs rely on inboxes and spreadsheets, response times and visibility suffer.",
      "We build connected workflows that help teams capture enquiries, route maintenance, process documents, communicate status, and see what requires attention—without replacing useful systems simply for the sake of change.",
    ],
    benefits: [
      {
        title: "Faster routing",
        description:
          "Send leads and service requests to the right person with the details needed to act.",
      },
      {
        title: "Better visibility",
        description:
          "Give teams a shared view of outstanding requests, documents, and next steps.",
      },
      {
        title: "More consistent communication",
        description:
          "Use triggered updates and reminders while preserving human ownership of important conversations.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Map the operation",
        description:
          "Review lead, property, tenant, maintenance, and document workflows.",
      },
      {
        step: "02",
        title: "Choose the first flow",
        description:
          "Prioritize the bottleneck with a clear owner and useful operational impact.",
      },
      {
        step: "03",
        title: "Build and connect",
        description:
          "Integrate the relevant property, CRM, communication, and document systems.",
      },
      {
        step: "04",
        title: "Adopt and manage",
        description:
          "Train users, document the workflow, and monitor it after launch.",
      },
    ],
    examples: [
      {
        title: "Lead-to-agent workflow",
        description:
          "Capture an enquiry, enrich the record, route it by agreed rules, and create the follow-up task.",
      },
      {
        title: "Maintenance coordination",
        description:
          "Collect tenant details and media, prioritize the request, assign a vendor, and send status updates.",
      },
      {
        title: "Lease document intake",
        description:
          "Extract key fields, validate required information, and store the record in the appropriate system.",
      },
    ],
    integrations: [
      "CRM platforms",
      "Property management systems",
      "Microsoft 365",
      "Google Workspace",
      "Stripe",
      "Document storage",
    ],
    featured: true,
  },
  {
    id: "03",
    slug: "construction-trades-and-home-services",
    title: "Construction & Trades",
    shortTitle: "Construction & Trades",
    tagline: "Keep leads, jobs, crews, and billing connected.",
    description:
      "Workflow automation and field-to-office systems for contractors, trades, and home-service businesses.",
    features: [
      "Lead qualification and follow-up",
      "Quoting and approval workflows",
      "Scheduling and job coordination",
      "Field forms, photos, and updates",
      "Invoice and document automation",
      "Operations dashboards",
    ],
    graphicId: "construction",
    detailedDescription: [
      "Construction and service businesses run across jobsites, vehicles, offices, customer conversations, and supplier relationships. Small gaps between those places create delayed quotes, missing information, and extra administrative work.",
      "We connect the field and office with practical mobile workflows, automation, integrations, and focused business software. The goal is straightforward: help information arrive where it is needed, when it is needed.",
    ],
    benefits: [
      {
        title: "Quicker follow-through",
        description:
          "Route new leads, collect job details, and keep quote follow-up from depending on memory.",
      },
      {
        title: "Field-to-office continuity",
        description:
          "Capture updates, photos, hours, and approvals once and make them available to the office.",
      },
      {
        title: "Cleaner job records",
        description:
          "Keep customer, site, quote, job, and invoice information connected throughout the workflow.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Follow a job",
        description:
          "Map the process from first enquiry through quote, schedule, field work, and invoice.",
      },
      {
        step: "02",
        title: "Identify the handoffs",
        description:
          "Find delays, duplicate entry, missing information, and unclear ownership.",
      },
      {
        step: "03",
        title: "Build the workflow",
        description:
          "Connect office tools and field-friendly interfaces around the priority process.",
      },
      {
        step: "04",
        title: "Roll out and support",
        description:
          "Introduce the system with the team, document it, and improve it from real use.",
      },
    ],
    examples: [
      {
        title: "Lead-to-quote",
        description:
          "Qualify a request, assign an estimator, collect site details, and trigger quote follow-up.",
      },
      {
        title: "Field reporting",
        description:
          "Let crews submit structured updates and photos that immediately become part of the job record.",
      },
      {
        title: "Invoice preparation",
        description:
          "Use approved job information, hours, and materials to prepare the next billing step.",
      },
    ],
    integrations: [
      "Jobber",
      "QuickBooks",
      "Microsoft 365",
      "Google Workspace",
      "CRM platforms",
      "Custom mobile tools",
    ],
    featured: true,
  },
  {
    id: "04",
    slug: "healthcare-dental-and-wellness",
    title: "Healthcare, Dental & Wellness",
    shortTitle: "Healthcare & Wellness",
    tagline: "Reduce administrative friction around the patient journey.",
    description:
      "Patient-facing tools and carefully scoped workflow improvements for clinics and wellness practices.",
    features: [
      "Appointment and reminder workflows",
      "Digital intake and form routing",
      "Patient communication tools",
      "Internal dashboards and reporting",
      "Workspace and access administration",
      "Integration planning",
    ],
    graphicId: "healthcare",
    detailedDescription: [
      "Clinics and wellness practices balance patient experience with sensitive information, staff capacity, and established clinical systems. Improvements must respect those constraints.",
      "We focus on carefully scoped administrative workflows, patient-facing tools, and technology management. Privacy, security, clinical-system access, and compliance responsibilities are defined with the practice and appropriate specialists before implementation.",
    ],
    benefits: [
      {
        title: "Simpler administration",
        description:
          "Reduce repetitive work around forms, reminders, routing, and internal reporting.",
      },
      {
        title: "Clearer patient communication",
        description:
          "Provide consistent next steps and status information around non-clinical workflows.",
      },
      {
        title: "Defined responsibility",
        description:
          "Document system ownership and involve privacy, security, or clinical specialists where required.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Scope",
        description:
          "Define the administrative workflow, data involved, system owners, and applicable constraints.",
      },
      {
        step: "02",
        title: "Design safeguards",
        description:
          "Agree on access, review, retention, exception handling, and specialist responsibilities.",
      },
      {
        step: "03",
        title: "Implement carefully",
        description:
          "Build and test the workflow with representative users and controlled data.",
      },
      {
        step: "04",
        title: "Document and support",
        description:
          "Provide operating guidance and support within the agreed engagement scope.",
      },
    ],
    examples: [
      {
        title: "Digital intake routing",
        description:
          "Collect administrative information, check completeness, and route it to the authorized team.",
      },
      {
        title: "Appointment reminders",
        description:
          "Trigger approved reminders and record delivery status around existing booking workflows.",
      },
    ],
    integrations: [
      "Booking platforms",
      "Microsoft 365",
      "Google Workspace",
      "Communication APIs",
      "Approved practice systems",
    ],
    featured: false,
  },
  {
    id: "05",
    slug: "food-retail-and-local-hospitality",
    title: "Food, Retail & Local Hospitality",
    shortTitle: "Food, Retail & Hospitality",
    tagline: "Connect customer demand with day-to-day operations.",
    description:
      "Customer-facing applications and workflow improvements for local retail and hospitality operators.",
    features: [
      "Online ordering and booking experiences",
      "Customer enquiry automation",
      "Loyalty and follow-up workflows",
      "Inventory and operations dashboards",
      "POS and commerce integrations",
      "Web and mobile applications",
    ],
    graphicId: "food-retail",
    detailedDescription: [
      "Local operators often manage orders, bookings, customer messages, inventory, and promotions across separate systems. That fragmentation creates avoidable manual work and makes the customer journey harder to see.",
      "We build focused digital experiences and integrations that connect customer actions to the operating systems behind them, while keeping the scope realistic for the team that will run it.",
    ],
    benefits: [
      {
        title: "A more direct customer journey",
        description:
          "Make it easier for customers to order, book, ask questions, or return.",
      },
      {
        title: "Connected operations",
        description:
          "Reduce manual movement between customer-facing tools and internal systems.",
      },
      {
        title: "Useful customer context",
        description:
          "Keep consent-aware records that support service and relevant follow-up.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Map the customer flow",
        description:
          "Review discovery, ordering or booking, fulfilment, service, and return visits.",
      },
      {
        step: "02",
        title: "Review the stack",
        description:
          "Identify current commerce, POS, booking, messaging, and reporting systems.",
      },
      {
        step: "03",
        title: "Connect the priority journey",
        description:
          "Build the customer experience and integrations around a clear operational goal.",
      },
      {
        step: "04",
        title: "Launch and learn",
        description:
          "Measure adoption, support the team, and improve the highest-friction steps.",
      },
    ],
    examples: [
      {
        title: "Enquiry automation",
        description:
          "Answer common questions, route special requests, and preserve the conversation for staff.",
      },
      {
        title: "Operations reporting",
        description:
          "Combine useful sales, booking, or fulfilment data into a regular management view.",
      },
    ],
    integrations: [
      "Shopify",
      "Square",
      "Booking platforms",
      "CRM platforms",
      "Communication APIs",
      "Custom applications",
    ],
    featured: false,
  },
];

export const featuredIndustries = industries.filter(
  (industry) => industry.featured,
);
