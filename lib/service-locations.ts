export const primaryServiceSlugs = [
  "ai-automation",
  "custom-business-software",
  "managed-technology",
] as const;

export type PrimaryServiceSlug = (typeof primaryServiceSlugs)[number];

export type LocationOpportunity = {
  title: string;
  situation: string;
  approach: string;
};

export type ServiceLocationDetail = {
  intro: string;
  localFit: string;
  opportunities: [
    LocationOpportunity,
    LocationOpportunity,
    LocationOpportunity,
  ];
};

export type ServiceLocation = {
  slug: string;
  name: string;
  region: string;
  context: string;
  sectors: string[];
  businessAreas: string[];
  serviceDetails: Record<PrimaryServiceSlug, ServiceLocationDetail>;
};

export const serviceLocations: ServiceLocation[] = [
  {
    slug: "toronto",
    name: "Toronto",
    region: "City of Toronto",
    context:
      "Toronto businesses range from compact professional-service teams to multi-location operators and large corporate environments. That mix creates recurring needs around document-heavy workflows, connected client service, secure internal systems, and dependable ownership of day-to-day technology.",
    sectors: [
      "Professional services",
      "Financial services",
      "Real estate",
      "Construction",
      "Technology",
    ],
    businessAreas: ["Downtown", "North York", "Scarborough", "Etobicoke"],
    serviceDetails: {
      "ai-automation": {
        intro:
          "We help Toronto teams turn high-volume administrative work into monitored workflows that connect the systems they already use. The goal is a practical reduction in copying, sorting, chasing, and reporting—not an AI layer without an operating purpose.",
        localFit:
          "This is especially useful where client volume, document volume, or coordination across offices has outgrown email and spreadsheets.",
        opportunities: [
          {
            title: "Client and matter intake",
            situation:
              "Professional teams repeatedly review enquiries, collect missing information, and re-enter details into practice or customer systems.",
            approach:
              "Structure incoming information, request missing fields, create the right record, and route exceptions to a person for review.",
          },
          {
            title: "Property and project documents",
            situation:
              "Real estate and construction teams receive invoices, reports, work orders, and approvals through disconnected channels.",
            approach:
              "Extract the required details, validate them against business rules, and move approved data into the system of record.",
          },
          {
            title: "Management reporting",
            situation:
              "Leaders depend on manual exports from several applications to understand work, revenue, service, or project status.",
            approach:
              "Collect and normalize agreed data on a schedule, then deliver a repeatable report with traceable source information.",
          },
        ],
      },
      "custom-business-software": {
        intro:
          "We build focused software for Toronto organizations whose processes no longer fit a collection of spreadsheets and subscriptions. Each application is shaped around its real users, permissions, handoffs, and reporting needs.",
        localFit:
          "The strongest projects replace a visible operating bottleneck with one clear workspace for staff, clients, vendors, or field teams.",
        opportunities: [
          {
            title: "Client service portal",
            situation:
              "Requests, documents, approvals, and status updates are spread across long email threads and shared folders.",
            approach:
              "Create a secure portal with role-aware requests, uploads, notifications, and a shared history of each engagement.",
          },
          {
            title: "Multi-team operations system",
            situation:
              "Sales, delivery, finance, and management maintain separate views of the same customer or project.",
            approach:
              "Connect the critical records and actions in a workflow that gives each role the information it needs.",
          },
          {
            title: "Mobile field workflow",
            situation:
              "Field updates arrive through calls, photos, paper forms, and end-of-day messages that office staff must reconcile.",
            approach:
              "Provide a mobile flow for assignments, forms, evidence, approvals, and downstream billing or reporting.",
          },
        ],
      },
      "managed-technology": {
        intro:
          "We provide Toronto businesses with a defined management layer for agreed applications, automations, cloud services, access, and workplace technology. Coverage and responsibilities are documented before ongoing support begins.",
        localFit:
          "This fits teams that rely on several business systems but do not need—or are not ready to build—a large internal technology function.",
        opportunities: [
          {
            title: "Application ownership",
            situation:
              "A critical portal, integration, or internal application has users and vendors but no clear operational owner.",
            approach:
              "Establish intake, triage, release, vendor-coordination, and documentation practices around the agreed application scope.",
          },
          {
            title: "Joiner and leaver coordination",
            situation:
              "Access changes are handled differently across email, cloud storage, business applications, and shared credentials.",
            approach:
              "Use approved checklists and ownership records to coordinate repeatable account and permission changes.",
          },
          {
            title: "Automation and cloud oversight",
            situation:
              "Workflows or hosted applications can fail when an API, credential, data format, or vendor configuration changes.",
            approach:
              "Monitor covered systems, respond to alerts, coordinate recovery, and document changes that affect reliability.",
          },
        ],
      },
    },
  },
  {
    slug: "mississauga",
    name: "Mississauga",
    region: "Peel Region",
    context:
      "Mississauga combines corporate offices with advanced manufacturing, life sciences, financial services, technology, and logistics operations. Businesses often coordinate information across office, warehouse, vendor, and customer systems, making reliable integrations and clear operational workflows especially valuable.",
    sectors: [
      "Advanced manufacturing",
      "Financial services",
      "Technology",
      "Life sciences",
      "Smart logistics",
    ],
    businessAreas: [
      "City Centre",
      "Meadowvale",
      "Airport Corporate Centre",
      "Port Credit",
    ],
    serviceDetails: {
      "ai-automation": {
        intro:
          "We help Mississauga businesses automate the movement of documents, requests, and operational data between office and delivery systems. Human review stays in place for exceptions, approvals, and decisions with financial or customer impact.",
        localFit:
          "The work is well suited to organizations handling frequent orders, shipments, invoices, quality records, customer enquiries, or cross-department reporting.",
        opportunities: [
          {
            title: "Order and shipment coordination",
            situation:
              "Customer requests, carrier updates, and delivery documents arrive through several inboxes and portals.",
            approach:
              "Capture the required fields, update the relevant record, notify the responsible team, and surface incomplete or conflicting information.",
          },
          {
            title: "Quality and compliance documents",
            situation:
              "Manufacturing and life-sciences teams spend time classifying forms, certificates, and supporting records before review.",
            approach:
              "Organize incoming files, extract agreed fields, apply validation rules, and present exceptions for authorized approval.",
          },
          {
            title: "Corporate reporting workflows",
            situation:
              "Regional teams consolidate recurring operational data from spreadsheets, CRMs, finance tools, and shared drives.",
            approach:
              "Connect approved sources and produce a consistent reporting package with scheduled delivery and source traceability.",
          },
        ],
      },
      "custom-business-software": {
        intro:
          "We build custom business software for Mississauga operations that need a clearer link between office teams, customers, suppliers, and physical operations. The application starts with the workflow and extends only where the business case is clear.",
        localFit:
          "Typical fits include internal operations systems, supplier portals, logistics dashboards, and mobile tools that replace fragmented tracking.",
        opportunities: [
          {
            title: "Supplier and vendor portal",
            situation:
              "Documents, purchase information, delivery updates, and approvals are exchanged through email with limited shared visibility.",
            approach:
              "Create a controlled portal for submissions, status, validation, notifications, and a complete transaction history.",
          },
          {
            title: "Operations control centre",
            situation:
              "Teams cannot see orders, inventory events, service issues, or delivery status without checking several systems.",
            approach:
              "Bring the essential signals and actions into a role-based dashboard connected to the existing source systems.",
          },
          {
            title: "Warehouse or field application",
            situation:
              "Front-line updates are delayed because staff rely on paper, shared terminals, or informal messages.",
            approach:
              "Build a focused mobile workflow for assignments, scans, photos, forms, exceptions, and supervisor review.",
          },
        ],
      },
      "managed-technology": {
        intro:
          "We manage agreed business applications, cloud environments, automations, access, and workplace platforms for Mississauga organizations. The service creates a practical ownership model across internal teams and outside vendors.",
        localFit:
          "This is useful when the business has multiple locations, operational systems, or specialist providers but no single party coordinating the whole environment.",
        opportunities: [
          {
            title: "Multi-site application coordination",
            situation:
              "Office, warehouse, and field locations depend on the same systems but experience issues and changes differently.",
            approach:
              "Define covered systems, a common request path, escalation ownership, and documentation that reflects each operating location.",
          },
          {
            title: "Vendor and integration ownership",
            situation:
              "A business depends on several software vendors whose responsibilities overlap when data stops moving correctly.",
            approach:
              "Triage the issue across the full workflow, coordinate the responsible vendor, verify recovery, and record the outcome.",
          },
          {
            title: "Cloud and access administration",
            situation:
              "Permissions, shared resources, environments, and service accounts have accumulated without consistent review.",
            approach:
              "Document the current state, resolve priority gaps, and establish approved routines for covered access and configuration changes.",
          },
        ],
      },
    },
  },
  {
    slug: "brampton",
    name: "Brampton",
    region: "Peel Region",
    context:
      "Brampton has substantial advanced-manufacturing, food-processing, logistics, health, technology, and construction activity. Many growing organizations must keep office processes aligned with production, distribution, field service, and customer communication as transaction volume increases.",
    sectors: [
      "Advanced manufacturing",
      "Food processing",
      "Logistics",
      "Health and life sciences",
      "Construction",
    ],
    businessAreas: [
      "Downtown Brampton",
      "Bramalea",
      "Steeles employment corridor",
      "Highway 407 employment areas",
    ],
    serviceDetails: {
      "ai-automation": {
        intro:
          "We help Brampton businesses reduce the manual coordination behind orders, production records, deliveries, service requests, and customer follow-up. Automations are designed with clear exception paths so operational staff remain in control.",
        localFit:
          "The strongest opportunities appear where the same information is repeatedly copied between email, spreadsheets, accounting tools, and operational systems.",
        opportunities: [
          {
            title: "Purchase order processing",
            situation:
              "Orders arrive in inconsistent formats and staff re-enter line items, customer details, and dates into internal systems.",
            approach:
              "Extract agreed fields, validate them against account rules, flag exceptions, and create a review-ready transaction.",
          },
          {
            title: "Delivery document workflow",
            situation:
              "Bills of lading, proof of delivery, and customer confirmations are stored and reconciled manually.",
            approach:
              "Classify each document, connect it to the right job or order, and trigger the appropriate billing or follow-up step.",
          },
          {
            title: "Service enquiry routing",
            situation:
              "Requests for quotes, repairs, appointments, or order support reach a shared inbox without consistent prioritization.",
            approach:
              "Identify the request type, collect missing details, update the CRM, and route it to the responsible person or queue.",
          },
        ],
      },
      "custom-business-software": {
        intro:
          "We create custom software for Brampton businesses that need office, production, distribution, and field teams to work from a shared process. The system can connect existing tools instead of replacing everything at once.",
        localFit:
          "Good candidates include quoting systems, production and job tracking, customer portals, and mobile workflows for delivery or field crews.",
        opportunities: [
          {
            title: "Production and job tracking",
            situation:
              "Schedules, material status, quality checks, and completion updates live in separate spreadsheets or whiteboards.",
            approach:
              "Provide a shared job record with milestones, ownership, exceptions, and role-specific views from intake through completion.",
          },
          {
            title: "Quoting and order portal",
            situation:
              "Customers and staff exchange specifications, revisions, and approvals through email before an order can begin.",
            approach:
              "Guide users through structured requirements, pricing inputs, approval steps, and conversion into an active order.",
          },
          {
            title: "Delivery or field workflow",
            situation:
              "Drivers and field teams submit photos, signatures, forms, and issue notes through disconnected channels.",
            approach:
              "Use a mobile application to capture evidence against the correct job and notify office staff when review is required.",
          },
        ],
      },
      "managed-technology": {
        intro:
          "We give Brampton businesses defined ownership across agreed applications, workplace platforms, automations, cloud services, and vendors. The engagement is scoped around what the operation relies on and who is responsible when it changes.",
        localFit:
          "This supports organizations whose technology footprint has grown alongside new staff, facilities, operational software, or customer channels.",
        opportunities: [
          {
            title: "Operations-system support",
            situation:
              "Production, logistics, or service software is critical to daily work but support is split between internal staff and vendors.",
            approach:
              "Create a documented intake and escalation model, coordinate fixes, and maintain ownership records for the covered environment.",
          },
          {
            title: "Location and account onboarding",
            situation:
              "New employees, devices, shared resources, and application permissions are set up differently across teams or sites.",
            approach:
              "Establish approved onboarding steps, role-based access expectations, verification, and a record of completed changes.",
          },
          {
            title: "Backup and recovery readiness",
            situation:
              "Important business data exists across cloud drives, applications, and databases without one understood recovery plan.",
            approach:
              "Map covered data, confirm vendor capabilities, address priority gaps, and document recovery responsibilities and procedures.",
          },
        ],
      },
    },
  },
  {
    slug: "markham",
    name: "Markham",
    region: "York Region",
    context:
      "Markham has a strong concentration of technology, professional services, finance, life sciences, advanced manufacturing, and related knowledge-based work. Teams often need well-structured systems that connect specialized staff, complex information, customer delivery, and management reporting.",
    sectors: [
      "Technology",
      "Professional services",
      "Finance and insurance",
      "Life sciences",
      "Advanced manufacturing",
    ],
    businessAreas: [
      "Markham Centre",
      "Unionville",
      "Highway 7 corridor",
      "Woodbine–404 employment areas",
    ],
    serviceDetails: {
      "ai-automation": {
        intro:
          "We help Markham teams apply AI and workflow automation to research, documents, client service, technical operations, and reporting. Each workflow is grounded in approved sources, measurable steps, and a defined role for human review.",
        localFit:
          "This approach fits knowledge-based organizations where skilled staff lose time gathering information, preparing recurring outputs, or coordinating work between systems.",
        opportunities: [
          {
            title: "Technical knowledge assistant",
            situation:
              "Employees search policies, product information, project files, and technical documentation across several repositories.",
            approach:
              "Create a source-aware assistant that searches approved material, cites its basis, and escalates when confidence is low.",
          },
          {
            title: "Client document preparation",
            situation:
              "Professional and financial teams assemble recurring briefs, summaries, or review packages from structured and unstructured sources.",
            approach:
              "Collect approved inputs, prepare a consistent draft, and route it through the required subject-matter and compliance reviews.",
          },
          {
            title: "Product and service operations",
            situation:
              "Requests, incidents, usage signals, and customer updates are reviewed across separate technical and commercial tools.",
            approach:
              "Connect the agreed signals, classify work, prepare updates, and maintain human ownership of priority decisions.",
          },
        ],
      },
      "custom-business-software": {
        intro:
          "We build custom business software for Markham companies with specialized products, services, data, or approval models. The result is a focused system that supports the operating advantage of the business rather than forcing it into a generic workflow.",
        localFit:
          "Common fits include customer platforms, internal product operations, technical service portals, and data-rich management applications.",
        opportunities: [
          {
            title: "Customer success workspace",
            situation:
              "Account information, implementation work, support issues, renewals, and product feedback are managed in disconnected tools.",
            approach:
              "Create a unified account workspace with role-aware actions, integrations, timelines, and signals that require attention.",
          },
          {
            title: "Technical service portal",
            situation:
              "Customers and partners submit complex requirements or support details through forms that do not match the real process.",
            approach:
              "Build a guided portal for structured submissions, evidence, review steps, updates, and a complete service history.",
          },
          {
            title: "Data and decision application",
            situation:
              "Specialists spend time preparing the same data views and decision packages for recurring operational questions.",
            approach:
              "Combine the approved sources, business rules, analysis, and decisions in a repeatable internal application.",
          },
        ],
      },
      "managed-technology": {
        intro:
          "We manage agreed applications, cloud environments, automations, identity, and vendor relationships for Markham organizations that need consistent technical ownership. Scope, response expectations, and specialist boundaries are made explicit.",
        localFit:
          "This is valuable when internal leaders need a dependable operating partner across a mixed environment of SaaS, custom applications, and cloud services.",
        opportunities: [
          {
            title: "SaaS and custom-app ownership",
            situation:
              "Teams rely on a mix of purchased and internally developed applications with different support paths and release practices.",
            approach:
              "Document ownership and dependencies, standardize intake, and coordinate changes across the covered application portfolio.",
          },
          {
            title: "Cloud environment administration",
            situation:
              "Development, testing, and production resources have grown without consistent configuration, access, or cost review.",
            approach:
              "Establish an agreed environment model, address priority gaps, and manage covered configuration and access changes.",
          },
          {
            title: "Technical vendor coordination",
            situation:
              "Network, software, cloud, and workplace vendors each address only one part of an end-to-end issue.",
            approach:
              "Own triage across the workflow, coordinate the right provider, validate the result, and update operational documentation.",
          },
        ],
      },
    },
  },
  {
    slug: "vaughan",
    name: "Vaughan",
    region: "York Region",
    context:
      "Vaughan's business base includes construction, advanced manufacturing, transportation, logistics, finance, and a growing innovation economy. Operational information often moves between offices, job sites, warehouses, customers, and external partners, creating strong opportunities for better-connected systems.",
    sectors: [
      "Construction",
      "Advanced manufacturing",
      "Transportation and logistics",
      "Finance and insurance",
      "Innovation economy",
    ],
    businessAreas: [
      "Vaughan Metropolitan Centre",
      "Concord",
      "Woodbridge",
      "Highway 400 employment corridor",
    ],
    serviceDetails: {
      "ai-automation": {
        intro:
          "We help Vaughan businesses automate repetitive coordination across estimates, projects, purchasing, deliveries, service, and reporting. The workflow connects existing systems and sends exceptions to the people accountable for the outcome.",
        localFit:
          "The best starting points are high-frequency processes where office and operational teams repeatedly exchange the same documents and status updates.",
        opportunities: [
          {
            title: "Estimate and tender intake",
            situation:
              "Teams review incoming specifications, drawings, addenda, and deadlines before deciding how to respond.",
            approach:
              "Organize the package, extract agreed project details, identify missing inputs, and create a structured review task.",
          },
          {
            title: "Project document control",
            situation:
              "Purchase orders, site reports, change requests, invoices, and approvals arrive through several channels.",
            approach:
              "Classify documents, associate them with the correct project, validate required fields, and trigger the next owned step.",
          },
          {
            title: "Delivery and exception updates",
            situation:
              "Office, warehouse, and customer teams spend time chasing order status and resolving incomplete delivery information.",
            approach:
              "Connect status signals, notify the right parties, and route delays or mismatches through a visible exception workflow.",
          },
        ],
      },
      "custom-business-software": {
        intro:
          "We build custom software for Vaughan organizations that need a single operating flow across project, manufacturing, distribution, or customer-service work. Systems are delivered in useful stages and can integrate with existing finance and CRM platforms.",
        localFit:
          "High-value projects often connect field and office work, standardize project controls, or give customers and vendors better visibility.",
        opportunities: [
          {
            title: "Project operations platform",
            situation:
              "Estimating, scheduling, procurement, site updates, deficiencies, and billing are tracked in separate files and applications.",
            approach:
              "Create one project record with role-specific workflows, approvals, evidence, and integration points for finance or CRM.",
          },
          {
            title: "Dealer or customer portal",
            situation:
              "Customers request quotes, submit orders, check availability, and ask for updates through email or phone.",
            approach:
              "Provide secure self-service for agreed transactions while giving internal teams control over exceptions and approvals.",
          },
          {
            title: "Shop-floor and warehouse workflow",
            situation:
              "Production or fulfillment updates are captured late because available systems are not suited to front-line use.",
            approach:
              "Build a focused interface for assignments, scans, counts, quality steps, completion evidence, and exception reporting.",
          },
        ],
      },
      "managed-technology": {
        intro:
          "We manage defined applications, automations, cloud services, workplace platforms, and vendor coordination for Vaughan businesses. The operating model connects office and front-line needs without making unclear promises about unlimited support.",
        localFit:
          "This is a strong fit for growing multi-site or project-based companies whose technology responsibilities are spread across staff and suppliers.",
        opportunities: [
          {
            title: "Field and office support ownership",
            situation:
              "Issues affecting job-site, warehouse, and office workflows enter through different people and are resolved inconsistently.",
            approach:
              "Create one intake and triage model for covered systems, with clear escalation to internal owners or specialist providers.",
          },
          {
            title: "Business application lifecycle",
            situation:
              "Applications are adopted to solve immediate problems but configuration, access, renewal, and change ownership remain unclear.",
            approach:
              "Maintain an application register, agreed ownership, review points, and repeatable handling for covered changes and issues.",
          },
          {
            title: "Operational continuity planning",
            situation:
              "The business is unsure how a vendor outage, failed integration, or unavailable administrator would affect daily work.",
            approach:
              "Map dependencies, clarify recovery responsibilities, document practical workarounds, and address the highest-priority gaps.",
          },
        ],
      },
    },
  },
  {
    slug: "oakville",
    name: "Oakville",
    region: "Halton Region",
    context:
      "Oakville has a strong base in professional services, advanced manufacturing, technology and digital media, and health and life sciences. Its mix of small expert firms and major employers creates demand for systems that are polished for clients while remaining practical for internal teams.",
    sectors: [
      "Professional services",
      "Advanced manufacturing",
      "Technology and digital media",
      "Health and life sciences",
      "Corporate offices",
    ],
    businessAreas: [
      "Midtown Oakville",
      "Bronte",
      "Downtown Oakville",
      "QEW employment corridor",
    ],
    serviceDetails: {
      "ai-automation": {
        intro:
          "We help Oakville businesses use AI and automation to remove repetitive administration from client service, document review, internal knowledge, and operational reporting. Each system is designed around source quality, review requirements, and a clear business owner.",
        localFit:
          "This works well for expert teams that want to increase capacity without reducing the care, judgement, or presentation quality their clients expect.",
        opportunities: [
          {
            title: "Professional-client onboarding",
            situation:
              "New engagements require repeated collection, review, filing, and follow-up across forms, email, and practice systems.",
            approach:
              "Coordinate intake, identify missing information, create approved records, and keep sensitive decisions with the responsible professional.",
          },
          {
            title: "Manufacturing document review",
            situation:
              "Teams process specifications, supplier documents, inspection records, and certificates with recurring validation steps.",
            approach:
              "Extract and organize agreed information, apply deterministic checks, and prepare exceptions for qualified review.",
          },
          {
            title: "Internal knowledge access",
            situation:
              "Employees rely on experienced colleagues to locate policies, procedures, project history, or product information.",
            approach:
              "Build a permission-aware assistant that answers from approved sources and shows the material supporting each response.",
          },
        ],
      },
      "custom-business-software": {
        intro:
          "We create custom software for Oakville businesses whose client experience or specialized internal process deserves a better fit than standard platforms provide. Design, workflow, data, and ongoing ownership are considered together.",
        localFit:
          "Strong candidates include premium client portals, professional operations systems, manufacturing tools, and data-rich applications for specialized teams.",
        opportunities: [
          {
            title: "Professional-service client portal",
            situation:
              "Clients expect a clear, secure experience but documents, requests, meetings, and updates remain scattered across channels.",
            approach:
              "Provide a branded portal for agreed client actions while maintaining an organized internal service workflow.",
          },
          {
            title: "Specialized workflow application",
            situation:
              "A differentiated service depends on business rules and expertise that generic software does not represent well.",
            approach:
              "Turn the proven process into a role-aware system with structured decisions, evidence, handoffs, and reporting.",
          },
          {
            title: "Manufacturing visibility dashboard",
            situation:
              "Managers combine exports and staff updates to understand order, quality, inventory, or production status.",
            approach:
              "Connect the required sources and present a governed operating view with exceptions and owned actions.",
          },
        ],
      },
      "managed-technology": {
        intro:
          "We give Oakville organizations a consistent owner for agreed applications, automations, cloud services, access, and technology vendors. The service is designed to complement internal leadership and specialist providers with clear boundaries.",
        localFit:
          "This suits professional and operating teams that need dependable technology management but value a focused, relationship-based support model.",
        opportunities: [
          {
            title: "Client-system reliability",
            situation:
              "Portals, forms, scheduling, document exchange, and communication tools directly affect the client experience.",
            approach:
              "Monitor and manage covered systems, coordinate incidents, and plan changes around service commitments and business priorities.",
          },
          {
            title: "Application and licence review",
            situation:
              "Subscriptions, permissions, integrations, and overlapping tools have grown without a consistent management rhythm.",
            approach:
              "Create an inventory, confirm ownership and usage, and establish routine reviews for the applications in scope.",
          },
          {
            title: "Vendor-led environment coordination",
            situation:
              "The business has capable vendors but no internal time to coordinate dependencies, changes, and follow-through.",
            approach:
              "Own the operating thread across approved providers, track decisions, verify outcomes, and maintain shared documentation.",
          },
        ],
      },
    },
  },
  {
    slug: "richmond-hill",
    name: "Richmond Hill",
    region: "York Region",
    context:
      "Richmond Hill's economy includes professional and technical services, health and medical technology, finance, insurance, information, and culture. Many organizations handle sensitive client information and specialized work that benefits from clear permissions, structured processes, and reliable system ownership.",
    sectors: [
      "Professional and technical services",
      "Health and medical technology",
      "Finance and insurance",
      "Information services",
      "Real estate",
    ],
    businessAreas: [
      "Richmond Hill Centre",
      "Beaver Creek",
      "Yonge Street corridor",
      "Highway 7–404 area",
    ],
    serviceDetails: {
      "ai-automation": {
        intro:
          "We help Richmond Hill businesses automate document-heavy and information-heavy workflows while preserving approval, privacy, and professional judgement. AI is used only where it improves a defined step in the process.",
        localFit:
          "The approach is well suited to health, financial, professional, and property teams dealing with recurring intake, records, follow-up, and reporting.",
        opportunities: [
          {
            title: "Structured intake and triage",
            situation:
              "Staff review forms, referrals, client messages, and supporting documents before deciding the next service step.",
            approach:
              "Organize the submission, identify missing information, apply approved routing rules, and escalate judgement calls to staff.",
          },
          {
            title: "Record and document preparation",
            situation:
              "Teams repeatedly summarize source material and prepare consistent files for internal or client review.",
            approach:
              "Draft from authorized sources, retain citations or links, and require the appropriate professional approval before use.",
          },
          {
            title: "Follow-up and renewal workflow",
            situation:
              "Recurring reviews, renewals, outstanding documents, or service milestones depend on individual reminders.",
            approach:
              "Track the agreed dates and status, prepare communications, update the system of record, and surface exceptions.",
          },
        ],
      },
      "custom-business-software": {
        intro:
          "We build custom software for Richmond Hill organizations with specialized client journeys, permission models, or information workflows. The application can connect existing tools while replacing the fragmented steps that create the most friction.",
        localFit:
          "Typical projects include secure portals, case or service-management systems, operational dashboards, and specialized professional tools.",
        opportunities: [
          {
            title: "Secure service portal",
            situation:
              "Clients submit sensitive information, documents, updates, and requests through channels that provide limited structure or visibility.",
            approach:
              "Create a permission-aware portal with guided submissions, status, secure communication, and an auditable service history.",
          },
          {
            title: "Case and workflow management",
            situation:
              "Staff use shared files or generic CRM stages to manage work with detailed rules, dependencies, and approvals.",
            approach:
              "Represent the real service lifecycle with role-specific actions, deadlines, evidence, and escalation paths.",
          },
          {
            title: "Practice or branch dashboard",
            situation:
              "Leaders cannot easily compare workload, service levels, outcomes, and outstanding risks across teams or locations.",
            approach:
              "Build a governed view from approved systems with consistent definitions and drill-down to owned actions.",
          },
        ],
      },
      "managed-technology": {
        intro:
          "We manage agreed business applications, workplace systems, cloud services, automations, access, and vendor relationships for Richmond Hill teams. Responsibilities are documented to support trust, continuity, and sensible escalation.",
        localFit:
          "This is valuable for organizations where service delivery depends on technology but ownership is split among office managers, vendors, and busy professionals.",
        opportunities: [
          {
            title: "Sensitive-access administration",
            situation:
              "Permissions across client records, shared documents, email, and line-of-business applications are handled inconsistently.",
            approach:
              "Define approved access patterns and a repeatable process for covered joiner, mover, leaver, and exception requests.",
          },
          {
            title: "Practice application ownership",
            situation:
              "Core scheduling, client, billing, or document systems have vendor support but no one coordinating their combined operation.",
            approach:
              "Maintain the application map, triage cross-system issues, coordinate vendors, and document configuration and process decisions.",
          },
          {
            title: "Continuity and recovery coordination",
            situation:
              "Leadership is uncertain which data is protected, how systems would be restored, and who would lead each recovery step.",
            approach:
              "Review the covered environment, verify vendor assumptions, address priority gaps, and document accountable recovery roles.",
          },
        ],
      },
    },
  },
  {
    slug: "burlington",
    name: "Burlington",
    region: "Halton Region",
    context:
      "Burlington supports advanced manufacturing, biomedical and life sciences, clean technology, food and beverage, ICT, and professional services. Its business community includes specialized operators that need technology to connect technical work, commercial processes, compliance records, and customer delivery.",
    sectors: [
      "Advanced manufacturing",
      "Biomedical and life sciences",
      "Clean technology",
      "Food and beverage",
      "Professional services",
    ],
    businessAreas: [
      "Downtown Burlington",
      "Aldershot",
      "Appleby",
      "QEW employment corridor",
    ],
    serviceDetails: {
      "ai-automation": {
        intro:
          "We help Burlington businesses automate the recurring document, data, and coordination work around technical operations and customer service. Workflows are designed with validation, traceability, and explicit exception ownership.",
        localFit:
          "The best opportunities often sit between commercial and operational systems: quotes, specifications, orders, quality records, service requests, and recurring reports.",
        opportunities: [
          {
            title: "Specification and quote intake",
            situation:
              "Technical requirements arrive as emails, documents, and attachments that must be interpreted before a quote or response begins.",
            approach:
              "Extract agreed details, identify missing inputs, create a structured opportunity, and route technical judgement to the right person.",
          },
          {
            title: "Quality record processing",
            situation:
              "Inspection results, certificates, batch records, and supporting documents require repeated organization and verification.",
            approach:
              "Classify and associate records, run deterministic completeness checks, and prepare exceptions for authorized review.",
          },
          {
            title: "Service and maintenance coordination",
            situation:
              "Requests, equipment details, scheduling, technician notes, and follow-up actions move through separate channels.",
            approach:
              "Connect intake to the correct asset or customer record, coordinate status, and trigger required communication or review.",
          },
        ],
      },
      "custom-business-software": {
        intro:
          "We build custom business software for Burlington companies that need specialized technical and commercial workflows in one dependable system. The solution can connect existing ERP, finance, CRM, or document platforms where those tools remain the right fit.",
        localFit:
          "Common opportunities include product and service portals, quality workflows, technical operations systems, and field applications.",
        opportunities: [
          {
            title: "Technical product portal",
            situation:
              "Customers and partners need specifications, configurations, documents, quotes, and service information that staff currently provide manually.",
            approach:
              "Create a controlled self-service experience linked to approved product data and internal review workflows.",
          },
          {
            title: "Quality and compliance application",
            situation:
              "Teams manage checks, evidence, deviations, approvals, and corrective actions across spreadsheets and shared folders.",
            approach:
              "Build a structured record with accountable steps, permissions, evidence, notifications, and reporting.",
          },
          {
            title: "Field service system",
            situation:
              "Technicians and office staff coordinate assignments, parts, site information, service notes, and billing through disconnected tools.",
            approach:
              "Provide a mobile-first workflow from dispatch through completion, customer confirmation, and downstream administration.",
          },
        ],
      },
      "managed-technology": {
        intro:
          "We provide Burlington organizations with clear ownership across agreed applications, cloud systems, automations, workplace tools, access, and vendors. The model supports specialized businesses without pretending every technology need belongs to one provider.",
        localFit:
          "It works well where operational and office systems are interdependent and leadership needs one partner to coordinate reliability and planned change.",
        opportunities: [
          {
            title: "Operational application support",
            situation:
              "ERP extensions, quality tools, portals, or integrations are essential to work but have fragmented support paths.",
            approach:
              "Document dependencies, centralize intake, coordinate the responsible provider, validate fixes, and maintain operating records.",
          },
          {
            title: "Cloud service governance",
            situation:
              "Cloud accounts, shared data, service identities, and subscriptions have expanded without consistent ownership or review.",
            approach:
              "Inventory the covered environment, clarify administrators, address priority gaps, and establish a maintenance rhythm.",
          },
          {
            title: "Change and vendor coordination",
            situation:
              "A change to one system affects integrations, staff procedures, reporting, or external providers in ways no one coordinates.",
            approach:
              "Plan covered changes across dependencies, communicate responsibilities, verify outcomes, and update documentation.",
          },
        ],
      },
    },
  },
  {
    slug: "oshawa",
    name: "Oshawa",
    region: "Durham Region",
    context:
      "Oshawa combines advanced manufacturing and automotive expertise with healthcare, education, energy, professional services, and emerging technology activity. Growing organizations often need better connections between technical operations, customer or student services, administration, and management reporting.",
    sectors: [
      "Advanced manufacturing",
      "Automotive technology",
      "Healthcare",
      "Education",
      "Emerging technology",
    ],
    businessAreas: [
      "Downtown Oshawa",
      "North Oshawa",
      "Oshawa harbour area",
      "Highway 401 employment corridor",
    ],
    serviceDetails: {
      "ai-automation": {
        intro:
          "We help Oshawa businesses automate repetitive work across operational documents, service intake, internal knowledge, and reporting. Each workflow is tested against real exceptions and includes an accountable path for human review.",
        localFit:
          "This is useful for teams balancing technical delivery with high volumes of forms, requests, updates, and administrative handoffs.",
        opportunities: [
          {
            title: "Production and supplier documents",
            situation:
              "Teams receive specifications, orders, certificates, and issue records that must be matched to products, suppliers, or jobs.",
            approach:
              "Classify each document, extract the required data, validate key fields, and route discrepancies for review.",
          },
          {
            title: "Service and program intake",
            situation:
              "Applications, referrals, customer enquiries, or support requests require the same early review and follow-up steps.",
            approach:
              "Organize the submission, identify missing information, update the destination system, and assign the next owned action.",
          },
          {
            title: "Operations reporting",
            situation:
              "Leaders manually assemble performance, service, project, or financial information from multiple systems.",
            approach:
              "Collect approved data on a schedule, apply consistent definitions, and produce a repeatable report with source traceability.",
          },
        ],
      },
      "custom-business-software": {
        intro:
          "We build custom software for Oshawa organizations that need a better fit for technical operations, service delivery, or multi-team coordination. Projects begin with the smallest useful workflow and expand only when use and value are clear.",
        localFit:
          "Good candidates include supplier and customer portals, production tools, service-management systems, and mobile applications for operational teams.",
        opportunities: [
          {
            title: "Supplier collaboration portal",
            situation:
              "Technical requirements, documents, delivery commitments, and issue resolution are coordinated through email and shared files.",
            approach:
              "Create a shared, permission-aware process for submissions, status, approvals, exceptions, and supporting records.",
          },
          {
            title: "Service delivery platform",
            situation:
              "Requests, appointments, assigned work, documentation, and follow-up sit in separate systems or manual trackers.",
            approach:
              "Build one service record from intake through delivery, communication, evidence, and reporting.",
          },
          {
            title: "Operational data application",
            situation:
              "Teams have useful data but cannot turn it into consistent day-to-day decisions without manual analysis.",
            approach:
              "Combine approved sources with business rules, useful views, alerts, and accountable actions in a focused application.",
          },
        ],
      },
      "managed-technology": {
        intro:
          "We manage agreed applications, automations, cloud environments, workplace services, access, and vendor coordination for Oshawa organizations. The engagement gives technology-dependent teams a documented operating partner and escalation path.",
        localFit:
          "This is a good fit when a growing organization has capable staff and vendors but lacks consistent ownership across the whole technology environment.",
        opportunities: [
          {
            title: "Application portfolio ownership",
            situation:
              "Departmental applications and subscriptions have different administrators, renewal dates, integrations, and support expectations.",
            approach:
              "Create an agreed register, ownership model, review rhythm, and intake process for the systems in scope.",
          },
          {
            title: "Automation and integration monitoring",
            situation:
              "Data flows between forms, finance, CRM, reporting, or operational systems can fail without a visible owner.",
            approach:
              "Monitor covered workflows, investigate alerts, coordinate recovery, and address repeat causes through documented changes.",
          },
          {
            title: "Access and continuity controls",
            situation:
              "Staff changes and vendor reliance create uncertainty around accounts, administrative access, backups, and recovery responsibility.",
            approach:
              "Document approved access, verify critical ownership, review covered recovery arrangements, and close priority gaps.",
          },
        ],
      },
    },
  },
  {
    slug: "whitby",
    name: "Whitby",
    region: "Durham Region",
    context:
      "Whitby's growing economy includes advanced manufacturing, professional and technical services, information and communications technology, and downtown and lifestyle businesses. Its mix of established operators and growing firms creates practical needs for scalable processes, shared systems, and dependable technology management.",
    sectors: [
      "Advanced manufacturing",
      "Professional and technical services",
      "Information technology",
      "Downtown businesses",
      "Clean energy",
    ],
    businessAreas: [
      "Downtown Whitby",
      "Brooklin",
      "Port Whitby",
      "Highway 401–412 employment areas",
    ],
    serviceDetails: {
      "ai-automation": {
        intro:
          "We help Whitby businesses automate repetitive administration before growth turns workarounds into permanent bottlenecks. The focus is on dependable workflows for enquiries, documents, follow-up, reporting, and system updates.",
        localFit:
          "This approach gives growing teams additional capacity while keeping approvals and customer-impacting decisions with the right people.",
        opportunities: [
          {
            title: "Lead and enquiry follow-up",
            situation:
              "New enquiries arrive through forms, email, social channels, and phone notes without one consistent response process.",
            approach:
              "Capture the request, collect missing details, update the CRM, assign ownership, and prepare an appropriate follow-up.",
          },
          {
            title: "Invoice and document handling",
            situation:
              "Staff repeatedly download, rename, file, read, and re-enter information from invoices, orders, or service forms.",
            approach:
              "Extract agreed data, apply validation rules, organize the source document, and route exceptions for approval.",
          },
          {
            title: "Recurring business reporting",
            situation:
              "Owners and managers depend on manual spreadsheet preparation to understand sales, work, cash flow, or service performance.",
            approach:
              "Connect the approved sources and deliver a consistent reporting view on an agreed schedule.",
          },
        ],
      },
      "custom-business-software": {
        intro:
          "We build focused software for Whitby businesses that have outgrown generic tools but do not need unnecessary enterprise complexity. The application is shaped around the people doing the work and the customers or partners they serve.",
        localFit:
          "Good first projects include operations dashboards, client portals, job-management systems, and simple mobile workflows that eliminate duplicate administration.",
        opportunities: [
          {
            title: "Growing-business operations hub",
            situation:
              "Customer, job, document, invoice, and status information is split across spreadsheets and several subscriptions.",
            approach:
              "Create one role-aware workspace for the essential records and actions while integrating systems that should remain.",
          },
          {
            title: "Customer self-service portal",
            situation:
              "Customers contact staff for routine requests, uploads, scheduling, approvals, and progress updates.",
            approach:
              "Provide a secure portal for agreed self-service actions with notifications and an organized internal workflow.",
          },
          {
            title: "Field and shop workflow",
            situation:
              "Updates from job sites, workshops, or delivery teams arrive late and require office staff to enter them again.",
            approach:
              "Use a mobile-friendly flow for assigned work, forms, photos, exceptions, completion, and downstream administration.",
          },
        ],
      },
      "managed-technology": {
        intro:
          "We give Whitby businesses a clear management layer across agreed applications, automations, cloud services, workplace tools, access, and vendors. Coverage can grow with the operation while responsibilities remain explicit.",
        localFit:
          "This is designed for organizations that need dependable technology ownership without immediately building a full internal department.",
        opportunities: [
          {
            title: "Technology ownership baseline",
            situation:
              "As the team grows, no one has a complete view of applications, administrators, vendors, subscriptions, and dependencies.",
            approach:
              "Inventory the covered environment, assign ownership, identify priority risks, and establish a practical management rhythm.",
          },
          {
            title: "Employee access lifecycle",
            situation:
              "New hires and departures require manual changes across email, files, business software, shared accounts, and devices.",
            approach:
              "Use approved role-based checklists, verification, and records for the covered joiner, mover, and leaver process.",
          },
          {
            title: "Vendor and issue coordination",
            situation:
              "Owners and managers spend time translating problems between software, connectivity, cloud, and workplace vendors.",
            approach:
              "Triage the end-to-end issue, coordinate the responsible provider, verify recovery, and document what changed.",
          },
        ],
      },
    },
  },
];

export function isPrimaryServiceSlug(slug: string): slug is PrimaryServiceSlug {
  return primaryServiceSlugs.includes(slug as PrimaryServiceSlug);
}

export function getServiceLocation(citySlug: string) {
  return serviceLocations.find((location) => location.slug === citySlug);
}
