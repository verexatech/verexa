export type CaseStudy = {
  id: string;
  slug: string;
  number: string;
  label: string;
  name: string;
  tagline: string;
  summary: string;
  problem: string;
  solution: string[];
  engineering: string[];
  outcomes: string[];
  services: string[];
  url: string;
  image: string;
  tags: string[];
  featured: boolean;
};

export const caseStudies: CaseStudy[] = [
  {
    id: "coprep",
    slug: "coprep-ai",
    number: "01",
    label: "AI product",
    name: "CoPrep AI",
    tagline: "An AI assistant for interview preparation and live support.",
    summary:
      "A job-search platform that brings interview assistance, mock practice, and career tools into one product experience.",
    problem:
      "Interview preparation is fragmented across question banks, resume tools, generic advice, and live practice. The product needed to organize those activities around a candidate’s role and application context.",
    solution: [
      "A web product for AI-assisted interview preparation and real-time question support.",
      "Candidate context from resumes and job descriptions to make guidance more relevant.",
      "Supporting career workflows including mock interviews and resume-focused tools.",
    ],
    engineering: [
      "Designing a responsive AI interaction loop that presents useful information without overwhelming the interview flow.",
      "Organizing several career workflows inside a consistent account and product experience.",
      "Building clear states for AI processing, user inputs, and generated guidance.",
    ],
    outcomes: [
      "A live product that supports interview preparation and real-time interview assistance.",
      "One account experience spanning interview, resume, and job-search tools.",
      "A product foundation that can support role-specific and multilingual assistance.",
    ],
    services: ["AI & Workflow Automation", "Custom Business Software", "Cloud & Infrastructure"],
    url: "https://www.coprep.ai/",
    image: "/portfolio/coprep.png",
    tags: ["AI product", "SaaS", "Web application"],
    featured: true,
  },
  {
    id: "typeinvoice",
    slug: "typeinvoice",
    number: "02",
    label: "Business software",
    name: "TypeInvoice",
    tagline: "A focused way to create professional invoices.",
    summary:
      "A browser-based invoice creator built around a simple editor, immediate preview, and PDF output.",
    problem:
      "Creating a polished invoice can require a full accounting product or a template that is awkward to edit. The opportunity was a faster, focused experience for producing a professional document.",
    solution: [
      "A structured invoice editor with the essential customer, line-item, and payment fields.",
      "A live document preview so users can see the final invoice while editing.",
      "PDF generation for a ready-to-send output.",
    ],
    engineering: [
      "Keeping editor state and document preview synchronized as invoice details change.",
      "Producing a consistent invoice layout across screen sizes and PDF output.",
      "Reducing the workflow to the fields and actions required for the document.",
    ],
    outcomes: [
      "A live invoice-creation workflow available directly in the browser.",
      "Immediate visual feedback through the synchronized preview.",
      "Downloadable professional invoice PDFs without a complex setup process.",
    ],
    services: ["Custom Business Software", "Product Design", "Cloud & Infrastructure"],
    url: "https://typeinvoice.com/",
    image: "/portfolio/typeinvoice.png",
    tags: ["Productivity", "Document workflow", "Web application"],
    featured: true,
  },
  {
    id: "cryptex",
    slug: "cryptex",
    number: "03",
    label: "Learning platform",
    name: "Cryptex",
    tagline: "An AI-supported crypto trading learning experience.",
    summary:
      "A focused product concept for learning about crypto trading through an interactive, data-oriented interface.",
    problem:
      "Crypto learning material is often disconnected from the market concepts and interfaces learners are trying to understand. The product needed to make that learning experience more coherent and approachable.",
    solution: [
      "An AI-supported learning product focused on crypto trading concepts.",
      "A dashboard-style interface that organizes educational and market-oriented information.",
      "A responsive web experience for exploring the product across devices.",
    ],
    engineering: [
      "Presenting dense financial concepts in a hierarchy that remains readable.",
      "Balancing dashboard information with a guided learning experience.",
      "Creating reusable interface patterns for data and educational content.",
    ],
    outcomes: [
      "A deployed learning-platform concept with a distinct product identity.",
      "A reusable interface foundation for AI guidance and crypto education.",
      "A clearer demonstration of the product’s learning proposition than a generic market dashboard.",
    ],
    services: ["Custom Business Software", "AI & Workflow Automation", "Product Design"],
    url: "https://trycryptex.vercel.app/",
    image: "/portfolio/cryptex.png",
    tags: ["AI learning", "Dashboard", "Web application"],
    featured: false,
  },
  {
    id: "elevategrad",
    slug: "elevategrad",
    number: "04",
    label: "Education platform",
    name: "ElevateGrad",
    tagline: "Student engagement and career opportunity in one platform.",
    summary:
      "A university-focused platform connecting students with peers, campus activity, and career opportunities.",
    problem:
      "Student communities, campus events, peer connections, and career opportunities often live in separate channels. The platform needed to bring those experiences together without losing clarity.",
    solution: [
      "A unified student experience spanning community, campus events, and career discovery.",
      "Structured journeys for finding opportunities and connecting with relevant peers.",
      "A responsive platform designed for frequent student use.",
    ],
    engineering: [
      "Organizing community and career features into a navigable information architecture.",
      "Designing reusable content and discovery patterns across different opportunity types.",
      "Supporting a consistent experience across desktop and mobile breakpoints.",
    ],
    outcomes: [
      "A live platform that communicates a clear student-engagement and career proposition.",
      "One destination for discovering campus activity, peer connections, and job opportunities.",
      "A product foundation that can expand with additional university and employer workflows.",
    ],
    services: ["Custom Business Software", "Product Design", "Cloud & Infrastructure"],
    url: "https://elevategrad.com/",
    image: "/portfolio/elevategrad.png",
    tags: ["Education", "Community", "Career platform"],
    featured: false,
  },
  {
    id: "solovio",
    slug: "solovio",
    number: "05",
    label: "Workflow automation",
    name: "Solovio",
    tagline: "Instagram conversation automation for solo creators.",
    summary:
      "A creator operations product for automating Instagram replies, sending useful links, and capturing leads from audience conversations.",
    problem:
      "Creators can lose hours replying to repeated Instagram comments and direct messages while manually tracking interested followers. The product needed to automate repeatable responses without making setup feel like enterprise software.",
    solution: [
      "Triggers for comments, direct messages, story replies, keywords, and live interactions.",
      "A visual workflow for writing replies, sharing links, and guiding a follower to the next step.",
      "A simple workspace for capturing and managing conversation responses and potential leads.",
    ],
    engineering: [
      "Representing trigger-and-response logic in a setup flow that solo operators can understand.",
      "Coordinating external platform events with reliable message and lead-processing workflows.",
      "Making automation state, limits, and responses visible without adding unnecessary complexity.",
    ],
    outcomes: [
      "A live product for Instagram comment and direct-message automation.",
      "A repeatable workflow for instant replies, link delivery, and lead capture.",
      "A focused interface designed for creators, educators, coaches, and consultants operating without a large team.",
    ],
    services: ["AI & Workflow Automation", "Custom Business Software", "Cloud & Infrastructure"],
    url: "https://solovio.app/",
    image: "/portfolio/solovio.png",
    tags: ["Automation", "Creator tools", "SaaS"],
    featured: true,
  },
];

export const featuredCaseStudies = caseStudies.filter((study) => study.featured);
