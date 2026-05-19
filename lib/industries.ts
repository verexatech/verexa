export type Industry = {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  graphicId: "real-estate" | "healthcare" | "legal" | "construction" | "food-retail";
  detailedDescription: string[];
  benefits: { title: string; description: string }[];
  process: { step: string; title: string; description: string }[];
  technologies: string[];
};

export const industries: Industry[] = [
  {
    id: "01",
    slug: "real-estate-and-property-management",
    title: "Real Estate & Property Management",
    tagline: "Responsive systems for GTA's housing demand.",
    description: "With immigration driving relentless demand in the GTA, real estate professionals need digital tools that can keep up. We transform outdated infrastructure into modern, scalable platforms.",
    features: [
      "Listing & Search App",
      "Tenant / Client Portal",
      "Brand Identity Package",
      "Cloud Document System",
    ],
    graphicId: "real-estate",
    detailedDescription: [
      "The Greater Toronto Area's real estate market is one of the most dynamic and competitive in the world. To stay ahead, brokerages, developers, and property managers require digital solutions that offer speed, reliability, and unparalleled user experiences.",
      "We build robust digital ecosystems that streamline property listings, simplify tenant management, and securely handle sensitive financial documentation. By modernizing your digital infrastructure, we help you close deals faster and manage portfolios with ease."
    ],
    benefits: [
      { title: "Accelerated Workflows", description: "Automate repetitive administrative tasks, freeing up agents to focus on closing deals." },
      { title: "Enhanced Client Experience", description: "Provide buyers and tenants with intuitive portals for searching properties and paying rent." },
      { title: "Secure Document Management", description: "Ensure all contracts and financial data are encrypted and compliant with local regulations." }
    ],
    process: [
      { step: "01", title: "Discovery", description: "Mapping out your specific property portfolio and target audience needs." },
      { step: "02", title: "Architecture", description: "Designing secure databases and intuitive interfaces for listings and portals." },
      { step: "03", title: "Development", description: "Integrating MLS feeds, payment gateways, and CRM systems." },
      { step: "04", title: "Deployment", description: "Launching your new platform with zero downtime and full staff training." }
    ],
    technologies: ["React", "Next.js", "MLS API Integration", "AWS", "Stripe", "Salesforce"]
  },
  {
    id: "02",
    slug: "healthcare-dental-and-wellness",
    title: "Healthcare, Dental & Wellness",
    tagline: "Mission-critical tech for patient trust.",
    description: "In healthcare, downtime isn't just an inconvenience; it disrupts care. We provide secure, cloud infrastructure and 24/7 IT support to keep your practice resilient.",
    features: [
      "Online Booking System",
      "PHI Data Privacy Audits",
      "Clinic Branding & Signage",
      "Health Monitoring Integrations",
    ],
    graphicId: "healthcare",
    detailedDescription: [
      "Trust and reliability are the cornerstones of the healthcare industry. Patients expect seamless digital experiences when booking appointments or accessing their records, while practitioners require absolute data security and uninterrupted system uptime.",
      "We empower clinics, dental offices, and wellness centers with HIPAA/PHIPA compliant digital solutions. From resilient cloud architectures to intuitive patient portals, our technology ensures your practice operates efficiently while prioritizing patient care and data privacy."
    ],
    benefits: [
      { title: "Uncompromised Security", description: "Rigorous adherence to PHIPA compliance and implementation of advanced encryption." },
      { title: "Streamlined Operations", description: "Reduce no-shows and administrative overhead with automated booking and reminders." },
      { title: "Improved Patient Care", description: "Give practitioners instant, reliable access to critical patient data when it matters most." }
    ],
    process: [
      { step: "01", title: "Compliance Audit", description: "Evaluating your current systems against strict healthcare privacy regulations." },
      { step: "02", title: "Secure Design", description: "Architecting zero-trust networks and user-friendly patient interfaces." },
      { step: "03", title: "Integration", description: "Seamlessly connecting your new digital tools with existing EMR/EHR systems." },
      { step: "04", title: "Ongoing Support", description: "Providing 24/7 monitoring and IT support to guarantee system availability." }
    ],
    technologies: ["Cloud Security", "EMR Integrations", "Next.js", "PostgreSQL", "Twilio", "Docker"]
  },
  {
    id: "03",
    slug: "professional-and-legal-services",
    title: "Professional & Legal Services",
    tagline: "Digital scale for fast-growing firms.",
    description: "Law firms, accounting practices, and advisory firms are the backbone of Toronto's volume of small businesses. We bridge the digital divide for firms that are outgrowing their current tech.",
    features: [
      "Secure Client Portal",
      "Cloud Workspace Setup",
      "Professional Brand Package",
      "Clio Integration",
    ],
    graphicId: "legal",
    detailedDescription: [
      "As your professional practice grows, managing client communications, sensitive documents, and billing across disparate systems becomes a bottleneck. To scale efficiently, you need a cohesive digital strategy that exudes professionalism and guarantees confidentiality.",
      "We specialize in modernizing the technological backbone of law firms, accountants, and consultants. By deploying secure client portals, migrating operations to reliable cloud workspaces, and integrating industry-specific software, we enable your firm to handle higher volumes with unparalleled precision."
    ],
    benefits: [
      { title: "Client Confidentiality", description: "Enterprise-grade security protocols ensuring all client data remains strictly protected." },
      { title: "Operational Efficiency", description: "Centralized workspaces that eliminate data silos and streamline collaboration." },
      { title: "Professional Authority", description: "A polished, high-performance digital presence that instills trust and credibility." }
    ],
    process: [
      { step: "01", title: "Workflow Analysis", description: "Identifying bottlenecks in your current client intake and document management processes." },
      { step: "02", title: "Strategy Formulation", description: "Selecting the optimal mix of cloud solutions and custom software to fit your firm's needs." },
      { step: "03", title: "System Migration", description: "Securely transferring your sensitive data to the new infrastructure without disruption." },
      { step: "04", title: "Optimization", description: "Refining integrations with practice management tools like Clio or QuickBooks." }
    ],
    technologies: ["Microsoft 365", "Clio API", "Custom Portals", "Azure", "React", "Cybersecurity Protocols"]
  },
  {
    id: "04",
    slug: "construction-trades-and-home-services",
    title: "Construction, Trades & Home Services",
    tagline: "Look as professional online as you are on the job.",
    description: "Most GTA tradespeople operate with zero online presence, paper-based quoting, and word-of-mouth alone. We give contractors and home-service businesses the digital tools to generate leads, manage their crews, and win more work.",
    features: [
      "Project Portfolio Website",
      "Field Team Mobile App",
      "Brand & Truck Wrap Design",
      "Cloud Job Management",
    ],
    graphicId: "construction",
    detailedDescription: [
      "In the trades and construction industry, reputation is everything, but relying solely on word-of-mouth limits your growth. A strong digital presence and efficient backend operations are now critical differentiators in a crowded market.",
      "We provide contractors with end-to-end digital upgrades. From designing high-converting portfolio websites that showcase your best work, to developing mobile applications that keep your field teams synced with the back office, we digitize your operations so you can focus on the build."
    ],
    benefits: [
      { title: "Consistent Lead Generation", description: "SEO-optimized websites and digital marketing strategies that attract high-quality clients." },
      { title: "Field-to-Office Sync", description: "Mobile tools that allow crews to access plans, submit hours, and update job statuses in real time." },
      { title: "Elevated Brand Image", description: "Professional branding that commands higher rates and sets you apart from 'fly-by-night' operators." }
    ],
    process: [
      { step: "01", title: "Brand Audit", description: "Evaluating your current visual identity and local market positioning." },
      { step: "02", title: "Digital Blueprint", description: "Designing your new website and planning the required field management tools." },
      { step: "03", title: "Development", description: "Building responsive web platforms and intuitive mobile applications." },
      { step: "04", title: "Launch & Growth", description: "Deploying your tools and executing targeted local SEO campaigns." }
    ],
    technologies: ["Next.js", "React Native", "Local SEO", "Figma", "Google Workspace", "Jobber Integration"]
  },
  {
    id: "05",
    slug: "food-retail-and-local-hospitality",
    title: "Food, Retail & Local Hospitality",
    tagline: "Own your customer data. Cut the middleman.",
    description: "GTA restaurants, cafés, and boutique retailers paying 20–30% commissions to third-party platforms are leaving money on the table. We build commission-free ordering, loyalty tools, and strong brand presence that keeps customers coming back directly.",
    features: [
      "Online Ordering Website",
      "Loyalty & Rewards App",
      "Brand & Menu Design",
      "Cloud POS & Inventory Setup",
    ],
    graphicId: "food-retail",
    detailedDescription: [
      "The local hospitality and retail sectors have been squeezed by exorbitant fees from third-party delivery and booking platforms. To survive and thrive, you must reclaim your customer relationships and profit margins by bringing your digital operations in-house.",
      "We build tailored digital solutions that empower restaurants and retailers. By deploying custom online ordering systems, engaging loyalty applications, and modernizing your point-of-sale infrastructure, we help you build a direct, profitable connection with your community."
    ],
    benefits: [
      { title: "Increased Profit Margins", description: "Eliminate steep third-party commissions with your own direct ordering and booking platform." },
      { title: "Customer Ownership", description: "Capture valuable customer data to drive targeted marketing and personalized loyalty programs." },
      { title: "Streamlined Operations", description: "Sync your online sales directly with your inventory and kitchen management systems." }
    ],
    process: [
      { step: "01", title: "Assessment", description: "Analyzing your current tech stack, POS systems, and third-party dependencies." },
      { step: "02", title: "System Design", description: "Creating a seamless omnichannel experience linking in-store and online operations." },
      { step: "03", title: "Implementation", description: "Developing custom e-commerce platforms and integrating them with your POS." },
      { step: "04", title: "Marketing Integration", description: "Setting up automated marketing tools to drive adoption of your new direct channels." }
    ],
    technologies: ["Shopify", "Square API", "Next.js", "React Native", "CRM Integrations", "Tailwind CSS"]
  },
];
