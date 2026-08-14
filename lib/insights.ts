export type InsightSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type Insight = {
  slug: string;
  title: string;
  description: string;
  category: string;
  published: string;
  readingTime: string;
  sections: InsightSection[];
};

export const insights: Insight[] = [
  {
    slug: "find-first-workflow-to-automate",
    title: "How to find the first workflow worth automating",
    description:
      "A practical way to separate useful automation opportunities from expensive distractions.",
    category: "Automation strategy",
    published: "August 2026",
    readingTime: "6 min read",
    sections: [
      {
        heading: "Start with repeated work, not an AI feature",
        paragraphs: [
          "The strongest first automation is usually a process the team can explain in plain language. It happens often, follows recognizable rules, uses information that already exists, and creates visible frustration when it slows down.",
          "A request to “add AI” is too broad. A request to reduce the time spent reading incoming forms, checking required fields, updating a CRM, and assigning follow-up is specific enough to evaluate.",
        ],
      },
      {
        heading: "Look for five useful signals",
        paragraphs: [
          "You do not need a formal transformation program to find worthwhile candidates. Walk through a normal week and listen for the work people describe as repetitive, fragile, or dependent on one person remembering every step.",
        ],
        bullets: [
          "The same information is copied between two or more systems.",
          "The process begins with a predictable email, form, document, or status change.",
          "Staff spend time checking completeness or applying straightforward rules.",
          "Delays create missed follow-up, customer frustration, or management blind spots.",
          "A person still needs to approve exceptions or higher-risk decisions.",
        ],
      },
      {
        heading: "Score impact, feasibility, and risk",
        paragraphs: [
          "A high-volume process is not automatically a good first project. Consider the hours involved, the quality of current data, access to connected systems, the cost of an error, and whether someone owns the process.",
          "A contained workflow with reliable inputs and a clear owner is often a better first win than a larger process with unclear rules. The first project should create confidence and operating knowledge that makes the next one easier.",
        ],
      },
      {
        heading: "Keep humans at the right checkpoints",
        paragraphs: [
          "Automation does not have to mean removing people from the process. It can prepare a record, identify missing information, draft a response, and route an exception while leaving approval with the responsible employee.",
          "Define what the system may do, what requires review, how uncertainty is handled, and how a failed workflow becomes visible. Those decisions are part of the product, not cleanup after launch.",
        ],
      },
    ],
  },
  {
    slug: "professional-services-automation-opportunities",
    title: "Five automation opportunities inside a professional-services firm",
    description:
      "Where accounting, legal, consulting, recruiting, and insurance teams can reduce administrative handoffs.",
    category: "Professional services",
    published: "August 2026",
    readingTime: "7 min read",
    sections: [
      {
        heading: "Follow the client journey",
        paragraphs: [
          "Professional-service work is different across disciplines, but the supporting journey is often familiar: enquiry, qualification, intake, document collection, delivery, status communication, and billing.",
          "Each transition is an opportunity for information to be delayed, entered twice, or stored in the wrong place. Mapping that journey exposes the workflows most likely to benefit from automation.",
        ],
      },
      {
        heading: "1. Enquiry and intake routing",
        paragraphs: [
          "A structured workflow can capture the enquiry, identify the service requested, create a CRM or practice-management record, assign an owner, and prepare the next-step message. Higher-risk qualification decisions should remain with the appropriate professional.",
        ],
      },
      {
        heading: "2. Document collection and completeness",
        paragraphs: [
          "Instead of manually checking every submission, a workflow can organize files, extract expected fields, flag missing items, and generate a request for what is outstanding. The source file remains available for review and audit.",
        ],
      },
      {
        heading: "3. Internal knowledge access",
        paragraphs: [
          "A source-aware assistant can help employees find approved procedures, templates, and internal guidance. It should show where an answer came from, respect permissions, and make uncertainty visible rather than presenting every response as authoritative.",
        ],
      },
      {
        heading: "4. Status communication",
        paragraphs: [
          "Clients often ask for updates because the process provides no useful signal between major milestones. Triggered messages or a focused portal can show what was received, what is outstanding, and what happens next without exposing sensitive internal work.",
        ],
      },
      {
        heading: "5. Management reporting",
        paragraphs: [
          "A scheduled workflow can collect agreed data from practice, finance, or CRM systems and prepare a consistent management summary. This does not replace judgement; it reduces the preparation required before leaders can apply it.",
        ],
      },
    ],
  },
  {
    slug: "property-management-workflows-to-connect",
    title: "Property-management workflows that should not live in separate inboxes",
    description:
      "A practical look at lead routing, maintenance requests, documents, and portfolio reporting.",
    category: "Real estate",
    published: "August 2026",
    readingTime: "6 min read",
    sections: [
      {
        heading: "The handoff is usually the problem",
        paragraphs: [
          "Property operations span tenants, owners, staff, vendors, documents, and time-sensitive requests. Each group may use a different channel, which makes the handoff between them more important than any single application.",
          "The first goal is not to replace every system. It is to make the priority journey visible from request through resolution.",
        ],
      },
      {
        heading: "Lead capture and assignment",
        paragraphs: [
          "New enquiries can be structured, checked for essential details, added to the relevant CRM, routed using agreed rules, and assigned a follow-up task. The agent or leasing team still owns the relationship.",
        ],
      },
      {
        heading: "Maintenance request coordination",
        paragraphs: [
          "A useful workflow gathers the property, unit, urgency, access notes, description, and supporting media at the beginning. It can then notify the right person, track assignment, and send controlled status updates.",
        ],
      },
      {
        heading: "Lease and document intake",
        paragraphs: [
          "Incoming files can be classified, key information can be prepared for review, and incomplete submissions can be routed for follow-up. Because the documents matter, the original source and review decision should remain traceable.",
        ],
      },
      {
        heading: "Portfolio reporting",
        paragraphs: [
          "A management view should answer operating questions: what is open, what is overdue, which properties need attention, and which exceptions require a person. Start with those decisions before deciding which charts to build.",
        ],
      },
    ],
  },
  {
    slug: "construction-field-office-workflow",
    title: "Connecting the field and office without another round of data entry",
    description:
      "How construction and trades teams can connect leads, jobs, field updates, and invoice preparation.",
    category: "Construction & trades",
    published: "August 2026",
    readingTime: "6 min read",
    sections: [
      {
        heading: "Follow one job from enquiry to invoice",
        paragraphs: [
          "The easiest way to understand construction workflow friction is to follow a real job. Note where the same customer, site, scope, schedule, labour, material, and approval information is requested or entered again.",
          "Those repeated handoffs are candidates for integration or a focused field-to-office tool.",
        ],
      },
      {
        heading: "Lead-to-quote follow-through",
        paragraphs: [
          "A workflow can collect job details, assign an estimator, schedule the next action, and keep quote follow-up visible. It should make incomplete leads obvious instead of allowing them to disappear into an inbox.",
        ],
      },
      {
        heading: "Field updates that become job records",
        paragraphs: [
          "Crews should be able to submit the required status, hours, notes, approvals, and photos through an interface designed for the field. The information can then update the job record without an office employee retyping it.",
        ],
      },
      {
        heading: "Preparing the billing step",
        paragraphs: [
          "Approved time, completed work, materials, and change information can prepare the next invoice or accounting action. A responsible person should review the billing record before it is issued.",
        ],
      },
      {
        heading: "Adoption is an operating requirement",
        paragraphs: [
          "A technically correct system still fails if it asks the field for too much information or works poorly on a phone. Start with the minimum data required for the next decision, test it with real users, and expand only when the value is clear.",
        ],
      },
    ],
  },
];
