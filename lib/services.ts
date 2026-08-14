export type ServiceExample = {
  title: string;
  problem: string;
  workflow: string;
  outcome: string;
};

export type Service = {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  features: string[];
  graphicId: "software" | "cloud" | "ai" | "managed";
  detailedDescription: string[];
  benefits: { title: string; description: string }[];
  process: { step: string; title: string; description: string }[];
  examples: ServiceExample[];
  integrations: string[];
  primary: boolean;
};

export const services: Service[] = [
  {
    id: "01",
    slug: "ai-automation",
    title: "AI & Workflow Automation",
    shortTitle: "AI Automation",
    tagline: "Give repetitive work to reliable systems.",
    description:
      "We map the manual work slowing your team down, then connect AI and automation to the tools you already use.",
    features: [
      "Business process automation",
      "Document and data processing",
      "AI assistants with source-aware answers",
      "Email, CRM, and reporting workflows",
      "System integrations and human approval steps",
      "Monitoring and ongoing improvement",
    ],
    graphicId: "ai",
    detailedDescription: [
      "Automation should solve a visible operating problem—not add another tool for your team to manage. We begin with the workflow, the people involved, the systems that hold the data, and the decisions that still need a human.",
      "From there, we build a practical automation with clear checkpoints, exception handling, and ownership. Your team gets a system that fits the way the business actually works, plus support after it goes live.",
    ],
    benefits: [
      {
        title: "Less manual administration",
        description:
          "Move repetitive copying, sorting, follow-up, and reporting out of your team’s day.",
      },
      {
        title: "Fewer disconnected steps",
        description:
          "Connect email, forms, documents, CRMs, and internal tools into one dependable workflow.",
      },
      {
        title: "Control where it matters",
        description:
          "Keep approvals, audit trails, and human review around sensitive or high-impact decisions.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Discover",
        description:
          "Map the current workflow, volume, exceptions, systems, and time spent.",
      },
      {
        step: "02",
        title: "Prioritize",
        description:
          "Choose a useful first automation based on impact, feasibility, and risk.",
      },
      {
        step: "03",
        title: "Integrate",
        description:
          "Build, connect, test, and document the workflow with your team.",
      },
      {
        step: "04",
        title: "Manage",
        description:
          "Monitor the automation, handle exceptions, and improve it as the business changes.",
      },
    ],
    examples: [
      {
        title: "Automate incoming enquiries",
        problem: "New enquiries are copied between email, spreadsheets, and a CRM.",
        workflow:
          "Email or form → extract key details → create or update CRM record → notify the right person → draft follow-up",
        outcome:
          "A consistent intake process with faster routing and fewer missed details.",
      },
      {
        title: "Automate documents",
        problem: "Staff repeatedly read PDFs, invoices, and forms to re-enter the same data.",
        workflow:
          "Document → extract fields → validate rules → request approval when needed → update the destination system",
        outcome:
          "Less re-keying, clearer exception handling, and a traceable process.",
      },
      {
        title: "Build an internal AI assistant",
        problem: "Employees lose time searching policies, procedures, and project files.",
        workflow:
          "Question → search approved company sources → produce a sourced answer → escalate when confidence is low",
        outcome:
          "Faster access to internal knowledge without replacing the source documents.",
      },
      {
        title: "Automate reporting",
        problem: "Weekly reporting depends on manual exports and spreadsheet consolidation.",
        workflow:
          "Business systems → collect and normalize data → generate analysis → deliver a scheduled management report",
        outcome:
          "A repeatable reporting rhythm with less preparation work.",
      },
    ],
    integrations: [
      "Microsoft 365",
      "Google Workspace",
      "QuickBooks",
      "HubSpot",
      "Salesforce",
      "OpenAI",
      "Custom APIs",
    ],
    primary: true,
  },
  {
    id: "02",
    slug: "custom-business-software",
    title: "Custom Business Software",
    shortTitle: "Business Software",
    tagline: "Software shaped around your operation.",
    description:
      "We build internal systems, client portals, web applications, and mobile tools when off-the-shelf software does not fit.",
    features: [
      "Internal dashboards and operations systems",
      "Client, vendor, and employee portals",
      "Custom web applications and SaaS products",
      "Mobile and field applications",
      "API and business-system integrations",
      "Product design and user experience",
    ],
    graphicId: "software",
    detailedDescription: [
      "Growing businesses often reach a point where spreadsheets, disconnected subscriptions, and manual handoffs become the system. Custom software can replace that friction with one clear operating flow.",
      "We design and build around the real users, permissions, data, and edge cases in your business. Web development, mobile development, and UI/UX are capabilities within this work—not separate ends in themselves.",
    ],
    benefits: [
      {
        title: "One operating view",
        description:
          "Bring the information and actions a team needs into a focused, role-aware workspace.",
      },
      {
        title: "A better fit",
        description:
          "Support the workflow that differentiates your business instead of forcing it into a generic tool.",
      },
      {
        title: "Room to evolve",
        description:
          "Start with the highest-value workflow and extend the system as needs become clearer.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Discover",
        description:
          "Define the users, business rules, current tools, constraints, and desired result.",
      },
      {
        step: "02",
        title: "Design",
        description:
          "Prototype the critical journeys and validate them with the people who will use the system.",
      },
      {
        step: "03",
        title: "Build",
        description:
          "Deliver the product in useful increments with testing and regular review.",
      },
      {
        step: "04",
        title: "Operate",
        description:
          "Launch, document, support, and improve the application as usage grows.",
      },
    ],
    examples: [
      {
        title: "Operations dashboard",
        problem: "Managers cannot see work status without asking multiple people or opening several systems.",
        workflow:
          "Connected sources → role-based dashboard → alerts and actions → shared operating history",
        outcome:
          "A clearer view of the operation and fewer status-chasing conversations.",
      },
      {
        title: "Client portal",
        problem: "Documents, requests, and updates move through long email threads.",
        workflow:
          "Secure sign-in → requests and uploads → status updates → notifications and records",
        outcome:
          "A more consistent client experience and a cleaner internal process.",
      },
      {
        title: "Field application",
        problem: "Office and field teams rely on paper, calls, and end-of-day updates.",
        workflow:
          "Assigned work → mobile updates → photos and forms → office review → downstream billing or reporting",
        outcome:
          "Information moves between the field and office without duplicate entry.",
      },
    ],
    integrations: [
      "Microsoft 365",
      "Google Workspace",
      "Stripe",
      "QuickBooks",
      "CRM platforms",
      "Industry APIs",
      "Cloud databases",
    ],
    primary: true,
  },
  {
    id: "03",
    slug: "managed-technology",
    title: "Managed Technology",
    shortTitle: "Managed Technology",
    tagline: "Keep critical business technology dependable.",
    description:
      "We manage the applications, cloud systems, automations, access, and business technology that your company depends on.",
    features: [
      "Application and automation management",
      "Cloud environment administration",
      "Microsoft 365 and Google Workspace support",
      "Backups, access, and configuration management",
      "Technology troubleshooting and coordination",
      "Roadmaps, documentation, and vendor liaison",
    ],
    graphicId: "managed",
    detailedDescription: [
      "Many businesses need consistent ownership of their technology without building a large internal team. We provide a practical management layer across the applications, automations, cloud services, and workplace systems in an agreed scope.",
      "Every engagement defines what is covered, who owns each system, how requests are handled, and when specialist vendors are required. We do not describe this as a 24/7 helpdesk or security operations centre unless those capabilities are explicitly included in a written service agreement.",
    ],
    benefits: [
      {
        title: "Clear ownership",
        description:
          "Know who maintains each covered system and how issues or changes are handled.",
      },
      {
        title: "Fewer surprises",
        description:
          "Use documented configurations, routine reviews, and agreed maintenance practices.",
      },
      {
        title: "Technology that keeps pace",
        description:
          "Review the stack as the team, workflow, vendors, and business priorities change.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Assess",
        description:
          "Inventory the systems, owners, dependencies, access, pain points, and current vendors.",
      },
      {
        step: "02",
        title: "Define",
        description:
          "Agree on coverage, responsibilities, communication, response expectations, and exclusions.",
      },
      {
        step: "03",
        title: "Stabilize",
        description:
          "Resolve priority gaps, document the environment, and establish repeatable maintenance.",
      },
      {
        step: "04",
        title: "Manage",
        description:
          "Handle covered requests, review system health, and plan improvements with the business.",
      },
    ],
    examples: [
      {
        title: "Application ownership",
        problem: "A business-critical application has no clear maintenance owner after launch.",
        workflow:
          "Support intake → triage → fix or vendor coordination → release → documentation",
        outcome:
          "A defined path for issues, changes, and ongoing improvement.",
      },
      {
        title: "Automation monitoring",
        problem: "Automated workflows fail silently when data or connected systems change.",
        workflow:
          "Health checks → alert → diagnosis → recovery → root-cause follow-up",
        outcome:
          "Better visibility into the workflows the operation relies on.",
      },
      {
        title: "Access and workspace administration",
        problem: "Account access and permissions are handled inconsistently as staff change.",
        workflow:
          "Approved request → access change → verification → documented record",
        outcome:
          "A more consistent joiner, mover, and leaver process.",
      },
    ],
    integrations: [
      "Microsoft 365",
      "Google Workspace",
      "AWS",
      "Google Cloud",
      "Microsoft Azure",
      "Business applications",
      "Custom automations",
    ],
    primary: true,
  },
  {
    id: "04",
    slug: "cloud-infrastructure",
    title: "Cloud & Infrastructure",
    shortTitle: "Cloud & Infrastructure",
    tagline: "A stable foundation for software and automation.",
    description:
      "We design, migrate, and improve cloud environments for the applications and workflows your business runs.",
    features: [
      "Cloud architecture and migration planning",
      "Application deployment and delivery pipelines",
      "Database, backup, and recovery design",
      "Identity, access, and environment configuration",
      "Performance and cost reviews",
      "Operational documentation",
    ],
    graphicId: "cloud",
    detailedDescription: [
      "Cloud work is most valuable when it supports a clear application or operating need. We design environments around availability, access, recovery, cost, and the team that will maintain them.",
      "This capability supports our software, automation, and managed technology work, and is also available for focused migrations or infrastructure improvements.",
    ],
    benefits: [
      {
        title: "Designed for the workload",
        description:
          "Match architecture and operating complexity to what the application actually requires.",
      },
      {
        title: "Recoverable by design",
        description:
          "Plan backups, access, deployments, and recovery before they become urgent.",
      },
      {
        title: "Documented operations",
        description:
          "Leave the business with a clear view of environments, responsibilities, and runbooks.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Assess",
        description:
          "Review the workload, current environment, dependencies, costs, and operational risks.",
      },
      {
        step: "02",
        title: "Design",
        description:
          "Define the target architecture, access model, migration path, and recovery approach.",
      },
      {
        step: "03",
        title: "Implement",
        description:
          "Build or migrate in controlled stages with testing and rollback planning.",
      },
      {
        step: "04",
        title: "Optimize",
        description:
          "Document the environment and review reliability, performance, and cost over time.",
      },
    ],
    examples: [
      {
        title: "Application launch environment",
        problem: "A new business application needs a dependable production foundation.",
        workflow:
          "Architecture → environments → deployment pipeline → monitoring → operating documentation",
        outcome:
          "A repeatable path from code to a managed production system.",
      },
      {
        title: "Cloud migration",
        problem: "An existing application is constrained by its current hosting or deployment process.",
        workflow:
          "Inventory → target design → staged migration → validation → handover",
        outcome:
          "A controlled move with clear ownership and recovery planning.",
      },
    ],
    integrations: [
      "AWS",
      "Google Cloud",
      "Microsoft Azure",
      "Vercel",
      "Docker",
      "PostgreSQL",
      "Managed databases",
    ],
    primary: false,
  },
];

export const primaryServices = services.filter((service) => service.primary);

export const additionalCapabilities = [
  "Web applications",
  "Mobile applications",
  "Cloud infrastructure",
  "Product design",
  "UI/UX",
  "System integrations",
];
