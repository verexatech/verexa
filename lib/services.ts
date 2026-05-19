export type Service = {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  graphicId: "web" | "mobile" | "cloud" | "ai" | "support" | "design" | "performance";
  detailedDescription: string[];
  benefits: { title: string; description: string }[];
  process: { step: string; title: string; description: string }[];
  technologies: string[];
};

export const services: Service[] = [
  {
    id: "01",
    slug: "web-design-and-development",
    title: "Web Design & Development",
    tagline: "Digital experiences that convert.",
    description: "Crafting stunning, highly performant web applications tailored to your brand. We build fast, accessible, and scalable websites that look great on every device and drive measurable results.",
    features: [
      "Custom UI/UX Design & Branding",
      "Scalable Single Page Applications (React/Next.js)",
      "E-commerce Platforms & Integrations",
      "Performance & SEO Optimization",
    ],
    graphicId: "web",
    detailedDescription: [
      "In today's digital landscape, your website is often the first interaction a potential customer has with your brand. We don't just build websites; we craft digital experiences that leave a lasting impression.",
      "Our approach combines cutting-edge aesthetics with robust, scalable architecture. Whether you need a corporate portfolio, a high-converting landing page, or a complex e-commerce platform, our team ensures your digital presence is fast, accessible, and perfectly aligned with your business goals."
    ],
    benefits: [
      { title: "Enhanced User Experience", description: "Intuitive navigation and responsive layouts that keep visitors engaged across all devices." },
      { title: "Optimized Performance", description: "Lightning-fast load times and SEO best practices to improve your search rankings." },
      { title: "Scalable Architecture", description: "Built on modern frameworks like React and Next.js, allowing your platform to grow seamlessly." }
    ],
    process: [
      { step: "01", title: "Discovery", description: "Understanding your business goals, target audience, and functional requirements." },
      { step: "02", title: "Design", description: "Creating wireframes and high-fidelity prototypes for your review." },
      { step: "03", title: "Development", description: "Writing clean, efficient code and integrating necessary APIs and CMS platforms." },
      { step: "04", title: "Launch", description: "Rigorous testing, optimization, and finally deploying your site to the world." }
    ],
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Shopify"]
  },
  {
    id: "02",
    slug: "mobile-app-development",
    title: "Mobile App Development",
    tagline: "Your business, in their pocket.",
    description: "Native and cross-platform mobile experiences that engage users on the go. We design intuitive apps that leverage device capabilities to offer smooth, app-store ready experiences.",
    features: [
      "iOS & Android Native Development",
      "Cross-Platform Solutions (React Native)",
      "Intuitive Mobile UI/UX Design",
      "Seamless Backend API Integrations",
    ],
    graphicId: "mobile",
    detailedDescription: [
      "Mobile devices dominate digital consumption. Having a powerful, user-friendly mobile application is no longer optional for businesses aiming to stay competitive.",
      "We develop native and cross-platform applications that deliver native-like performance. From conceptualization to App Store launch, we handle every step of the mobile development lifecycle, ensuring your app is secure, scalable, and loved by your users."
    ],
    benefits: [
      { title: "Broader Reach", description: "Connect with your audience directly on the devices they use most." },
      { title: "High Performance", description: "Smooth animations and fast response times for a premium feel." },
      { title: "Cost-Effective", description: "Cross-platform solutions allow you to reach both iOS and Android users efficiently." }
    ],
    process: [
      { step: "01", title: "Strategy", description: "Defining the app's core value proposition and feature roadmap." },
      { step: "02", title: "UI/UX Design", description: "Crafting intuitive mobile interfaces tailored for touch interactions." },
      { step: "03", title: "Engineering", description: "Developing robust frontend and backend architectures." },
      { step: "04", title: "Deployment", description: "Handling App Store and Google Play submissions and compliance." }
    ],
    technologies: ["React Native", "Swift", "Kotlin", "Firebase", "GraphQL", "Redux"]
  },
  {
    id: "03",
    slug: "cloud-infrastructure",
    title: "Cloud Infrastructure",
    tagline: "Scale without limits.",
    description: "Scalable, secure, and robust cloud architectures for your enterprise. We engineer resilient backend systems to handle high traffic and ensure data security around the clock.",
    features: [
      "AWS, GCP & Azure Architecture",
      "Microservices & Auto-scaling Deployments",
      "DevOps Pipelines (CI/CD)",
      "Database Optimization & Migration",
    ],
    graphicId: "cloud",
    detailedDescription: [
      "A strong digital product requires a foundation that won't crumble under pressure. Our cloud infrastructure services ensure your applications are highly available, secure, and ready to scale at a moment's notice.",
      "We specialize in designing and migrating architectures on major cloud providers. By implementing DevOps best practices, CI/CD pipelines, and automated monitoring, we remove the operational headache so you can focus on your product."
    ],
    benefits: [
      { title: "Unmatched Reliability", description: "High availability setups that minimize downtime and ensure business continuity." },
      { title: "Cost Optimization", description: "Pay only for what you use with auto-scaling architectures." },
      { title: "Enhanced Security", description: "Implementation of strict identity management, encryption, and compliance standards." }
    ],
    process: [
      { step: "01", title: "Assessment", description: "Evaluating your current infrastructure and defining scaling requirements." },
      { step: "02", title: "Architecture", description: "Designing a resilient, secure cloud topology tailored to your needs." },
      { step: "03", title: "Migration", description: "Safely transferring data and applications with zero to minimal downtime." },
      { step: "04", title: "Optimization", description: "Continuous monitoring, cost analysis, and performance tuning." }
    ],
    technologies: ["AWS", "Google Cloud", "Microsoft Azure", "Docker", "Kubernetes", "Terraform"]
  },
  {
    id: "04",
    slug: "ai-automation",
    title: "AI Automation",
    tagline: "Work smarter, not harder.",
    description: "Streamline operations and elevate user experiences with intelligent AI solutions. We integrate cutting-edge machine learning models to automate repetitive tasks, extract insights, and create responsive applications that learn and adapt.",
    features: [
      "Custom LLM Integrations",
      "Automated Workflows & Data Processing",
      "Intelligent Chatbots & Assistants",
      "Predictive Analytics & Insights",
    ],
    graphicId: "ai",
    detailedDescription: [
      "Artificial Intelligence is transforming how businesses operate. We help you harness the power of AI to automate tedious workflows, gain deeper insights from your data, and create personalized experiences for your customers.",
      "From integrating advanced Large Language Models (LLMs) into your customer service to building predictive analytics engines, our team demystifies AI and turns it into a tangible asset for your company."
    ],
    benefits: [
      { title: "Increased Efficiency", description: "Automate repetitive tasks, freeing your team to focus on high-value work." },
      { title: "Data-Driven Decisions", description: "Extract actionable insights from vast amounts of unstructured data." },
      { title: "Enhanced Support", description: "Deploy intelligent chatbots that provide instant, accurate assistance 24/7." }
    ],
    process: [
      { step: "01", title: "Ideation", description: "Identifying workflows and touchpoints where AI can deliver the most impact." },
      { step: "02", title: "Data Prep", description: "Gathering, cleaning, and structuring your data for model training or integration." },
      { step: "03", title: "Integration", description: "Connecting AI models to your existing software ecosystem." },
      { step: "04", title: "Refinement", description: "Testing accuracy, reducing hallucinations, and optimizing prompts/models." }
    ],
    technologies: ["OpenAI", "Anthropic", "Python", "LangChain", "Vector Databases", "TensorFlow"]
  },
  {
    id: "05",
    slug: "it-and-tech-support",
    title: "IT & Tech Support",
    tagline: "Flawless operations, 24/7.",
    description: "Reliable technical assistance to keep your Canadian operations running flawlessly. Our proactive support prevents downtime and bridges the gap between technology and your workflow.",
    features: [
      "24/7 Helpdesk & Rapid Response SLAs",
      "Cybersecurity Audits & Monitoring",
      "Network Management & Provisioning",
      "Software Maintenance & Updates",
    ],
    graphicId: "support",
    detailedDescription: [
      "Technology should empower your business, not slow it down. Our comprehensive IT support services are designed to keep your operations running smoothly, securely, and efficiently.",
      "We act as your dedicated IT department, providing proactive monitoring, rapid troubleshooting, and strategic guidance to ensure your technology stack aligns perfectly with your business objectives."
    ],
    benefits: [
      { title: "Proactive Maintenance", description: "Identifying and resolving potential issues before they impact your business." },
      { title: "Robust Security", description: "Protecting your sensitive data with enterprise-grade cybersecurity measures." },
      { title: "Expert Guidance", description: "Strategic advice on technology investments and digital transformation." }
    ],
    process: [
      { step: "01", title: "Audit", description: "Comprehensive review of your existing IT infrastructure and security posture." },
      { step: "02", title: "Implementation", description: "Deploying necessary software, hardware, and security protocols." },
      { step: "03", title: "Monitoring", description: "24/7 surveillance of your network and systems for anomalies." },
      { step: "04", title: "Support", description: "Rapid response helpdesk for your team's day-to-day technical challenges." }
    ],
    technologies: ["Microsoft 365", "Google Workspace", "Cisco", "Fortinet", "CrowdStrike", "Zendesk"]
  },
  {
    id: "06",
    slug: "graphic-designing",
    title: "Graphic Designing",
    tagline: "Visuals that captivate.",
    description: "Captivating visual identities, branding, and striking UI/UX designs. We transform complex ideas into intuitive, beautiful, and engaging digital art that resonates with your audience.",
    features: [
      "Brand Identity & Logo Design",
      "Wireframing & Interactive Prototyping",
      "Marketing Collateral & Digital Assets",
      "User Research & Usability Testing",
    ],
    graphicId: "design",
    detailedDescription: [
      "Great design is more than just making things look pretty; it's about visual communication. We create compelling visual identities that capture the essence of your brand and resonate deeply with your target audience.",
      "Whether you're starting from scratch with a new brand identity or need a complete UI/UX overhaul for your software, our design team brings creativity, psychology, and strategic thinking to every pixel."
    ],
    benefits: [
      { title: "Brand Consistency", description: "A unified visual language across all your digital and physical touchpoints." },
      { title: "Higher Conversion", description: "Strategic UI/UX design that guides users effortlessly toward desired actions." },
      { title: "Memorable Identity", description: "Stand out in a crowded market with a unique and professional aesthetic." }
    ],
    process: [
      { step: "01", title: "Research", description: "Deep dive into your industry, competitors, and target audience." },
      { step: "02", title: "Concepting", description: "Developing mood boards, typography selections, and initial sketches." },
      { step: "03", title: "Iteration", description: "Refining designs based on your feedback and usability testing." },
      { step: "04", title: "Delivery", description: "Providing comprehensive design systems and production-ready assets." }
    ],
    technologies: ["Figma", "Adobe Creative Suite", "Framer", "Sketch", "Blender", "Webflow"]
  },
  {
    id: "07",
    slug: "performance-marketing",
    title: "Performance Marketing",
    tagline: "Data-driven growth.",
    description: "Maximize your ROI with targeted, data-backed marketing strategies. We create campaigns that not only increase visibility but drive meaningful conversions and sustainable growth for your business.",
    features: [
      "Search Engine Optimization (SEO)",
      "Pay-Per-Click (PPC) Advertising",
      "Social Media Campaigns",
      "Conversion Rate Optimization",
    ],
    graphicId: "performance",
    detailedDescription: [
      "In a crowded digital space, visibility is everything. Our performance marketing strategies are built on a foundation of data, ensuring every dollar you spend is optimized for maximum return on investment.",
      "We don't rely on guesswork. By combining advanced analytics, targeted advertising, and conversion rate optimization, we build sustainable growth engines that consistently generate high-quality leads and sales."
    ],
    benefits: [
      { title: "Measurable ROI", description: "Transparent reporting that ties every campaign directly to revenue." },
      { title: "Targeted Reach", description: "Reach the right audience, at the right time, on the right platform." },
      { title: "Continuous Growth", description: "Iterative testing and optimization to constantly improve campaign performance." }
    ],
    process: [
      { step: "01", title: "Analysis", description: "Auditing your current marketing efforts and setting concrete KPIs." },
      { step: "02", title: "Strategy", description: "Developing multi-channel campaigns tailored to your specific audience." },
      { step: "03", title: "Execution", description: "Launching targeted ads, optimizing SEO, and creating engaging content." },
      { step: "04", title: "Optimization", description: "A/B testing ad copy, landing pages, and targeting to maximize conversions." }
    ],
    technologies: ["Google Ads", "Meta Ads", "Google Analytics", "SEMrush", "HubSpot", "A/B Testing"]
  },
];
