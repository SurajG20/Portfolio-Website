export const personalInfo = {
  name: "Suraj Goswami",
  email: "surajgoswami3000@gmail.com",
  phone: "+91 9691414058",
  location: "Mohali, India",
  github: "https://github.com/SurajG20",
  linkedin: "https://linkedin.com/in/suraj-goswami01",
  resume: "/Suraj_Goswami_Resume.pdf",
  profilePicture: "/profile.jpg",
  role: "AI & Full Stack Engineer",
  heroHeadline: "I build production AI systems on backends that don't break.",
  heroDescription:
    "2.5+ years shipping fintech, real-time, and AI-powered systems — LLM integrations, RAG pipelines, payment infrastructure, and event-driven backends with Node.js, TypeScript, Python, Redis, PostgreSQL, and AWS.",
};

export const availabilityBadge = "Open to AI Engineer roles";

export const quickStats = [
  { value: "97%", label: "Latency reduced" },
  { value: "100+", label: "Daily payments processed" },
  { value: "10K+", label: "Monthly users served" },
  { value: "20 hrs/wk", label: "Manual ops automated" },
];

export const brandStatement = `AI-focused engineer who ships LLM-powered products to production — RAG pipelines, GraphRAG knowledge graphs, and multi-provider LLM layers — built on 2.5+ years of hard backend engineering across payments, async processing, and real-time systems.

I care about the unglamorous parts that make AI work in production: reliable queues, idempotent retries, observability, and cost-aware architecture.`;

export const workExperience = [
  {
    company: "WisewayTec",
    location: "Mohali, India",
    position: "Full Stack Engineer",
    period: "September 2024 – Present",
    achievements: [
      "Reduced backend request latency from 4s to under 100ms — a 97% reduction — by moving long-running processing to BullMQ worker queues backed by Redis.",
      "Architected and deployed a multi-tenant crypto payment gateway used by 3+ production clients, processing 100+ daily payments with stablecoin/token support, real-time price feeds, webhooks, and KYC workflows.",
      "Engineered asynchronous payment-processing pipelines with BullMQ and Redis, implementing scheduled reconciliation and retry jobs to recover failed transactions.",
      "Developed production AI backend services using FastAPI and SQLAlchemy, integrating LLM APIs into application data workflows.",
      "Built and operated a Telegram Mini App gaming platform serving 20K+ monthly active users on distributed Socket.IO rooms.",
      "Deployed Prometheus + Grafana monitoring, cutting production issue detection time from hours to under 15 minutes.",
    ],
    stack: [
      "Node.js",
      "TypeScript",
      "FastAPI",
      "SQLAlchemy",
      "Redis",
      "BullMQ",
      "PostgreSQL",
      "MongoDB",
      "Socket.IO",
      "AWS",
      "Docker",
      "Prometheus",
      "Grafana",
    ],
  },
  {
    company: "Wiselogics Digital Solutions",
    location: "Mohali, India",
    position: "Full Stack Developer",
    period: "March 2024 – August 2024",
    achievements: [
      "Engineered backend services for banking, CRM, and logistics platforms with JWT authentication and role-based access control serving 10K+ monthly users.",
      "Developed React.js and Next.js interfaces for banking, CRM, and logistics applications, integrating REST APIs and server-side rendering.",
      "Automated USDOT motor carrier data extraction with Python pipelines, eliminating 20+ hours/week of manual operations work.",
      "Integrated Razorpay and Stripe gateways into production checkout flows; shipped via GitHub Actions CI/CD maintaining 99.5% uptime.",
      "Reduced ride-booking response latency by 40% through Socket.IO live tracking and location-based matching.",
    ],
    stack: [
      "Node.js",
      "Express.js",
      "Next.js",
      "React.js",
      "PostgreSQL",
      "Python",
      "JWT",
      "Stripe",
      "Razorpay",
      "GitHub Actions",
    ],
  },
  {
    company: "Livinart Technologies",
    location: "Remote",
    position: "Backend Developer Intern",
    period: "October 2023 – January 2024",
    achievements: [
      "Built backend services and REST APIs with authentication systems for ride-booking and loan management platforms.",
      "Implemented real-time communication using Socket.IO and optimized API response times.",
    ],
    stack: ["Node.js", "Express.js", "Socket.IO", "REST APIs"],
  },
];

export const education = [
  {
    institution: "Samrat Ashok Technological Institute",
    location: "Vidisha, Madhya Pradesh, India",
    degree: "B.Tech in Electrical & Electronics Engineering (EEE)",
    period: "2020 – 2024",
    achievements: ["CGPA: 8.26/10"],
  },
];

export const skills = [
  {
    label: "AI & LLM Engineering",
    highlight: true,
    items: [
      "OpenAI APIs",
      "Anthropic",
      "LangChain",
      "RAG",
      "GraphRAG",
      "Qdrant",
      "Neo4j",
      "Tree-sitter",
      "Prompt Engineering",
      "Ollama",
    ],
  },
  {
    label: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "SQL"],
  },
  {
    label: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "NestJS",
      "FastAPI",
      "SQLAlchemy",
      "REST APIs",
      "WebSockets",
      "BullMQ",
      "Redis",
      "Microservices",
      "Event-Driven Architecture",
    ],
  },
  {
    label: "Frontend",
    items: ["React.js", "Next.js", "Tailwind CSS"],
  },
  {
    label: "Databases & Cloud",
    items: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Neo4j",
      "Qdrant",
      "AWS (EC2 · S3 · Lambda)",
      "Docker",
      "GitHub Actions",
      "CI/CD",
    ],
  },
  {
    label: "Web3",
    items: ["Solidity", "Smart Contracts", "Wallet Integration"],
  },
  {
    label: "Observability",
    items: ["Prometheus", "Grafana"],
  },
];

export type Project = {
  title: string;
  context: string;
  summary: string;
  repoUrl: string;
  liveUrl?: string;
  stack: string[];
  description: string[];
};

export const selectedWork: Project[] = [
  {
    title: "GraphMind",
    context: "GraphRAG · Repository Intelligence",
    summary:
      "A GraphRAG platform that answers repository-architecture questions using hybrid vector and graph retrieval over codebases.",
    repoUrl: "https://github.com/SurajG20/ai-repo-workspace",
    stack: ["FastAPI", "Tree-sitter", "Neo4j", "Qdrant", "LangChain", "Next.js"],
    description: [
      "Parses repositories deterministically with Tree-sitter ahead of any LLM call, keeping output grounded and reproducible.",
      "Constructs Neo4j knowledge graphs indexed into Qdrant for hybrid vector + graph retrieval.",
      "Pluggable BYOK provider layer supports OpenAI, Anthropic, and Ollama — swap models without changing application logic.",
    ],
  },
  {
    title: "Custodia",
    context: "Decentralized Escrow Protocol",
    summary:
      "Milestone-based escrow on Binance Smart Chain — Solidity smart contracts release funds automatically when conditions are met.",
    repoUrl: "https://github.com/SurajG20/escrow-freelancer",
    liveUrl: "https://escrow-freelancer.vercel.app",
    stack: ["Solidity", "Next.js", "Supabase", "Reown", "WalletConnect"],
    description: [
      "Solidity escrow contracts with automated milestone-release conditions on BSC.",
      "Reown/WalletConnect integration for wallet auth and transaction signing flows.",
      "Supabase-backed off-chain state mirroring the on-chain escrow lifecycle.",
    ],
  },
  {
    title: "Calorie Tracker",
    context: "LLM-Powered Nutrition App",
    summary:
      "Converts natural-language meal descriptions into structured nutrition data using OpenAI APIs, protected by Redis rate limiting.",
    repoUrl: "https://github.com/SurajG20/calorie-tracker",
    liveUrl: "https://calorie-tracker-suraj-goswamis-projects.vercel.app",
    stack: ["Next.js", "Node.js", "OpenAI API", "PostgreSQL", "Redis"],
    description: [
      "Natural language in, structured macros out — LLM responses validated into typed nutrition records in PostgreSQL.",
      "Redis-based rate limiting protects OpenAI spend; caching keeps repeat queries instant.",
      "Responsive dashboard with real-time daily intake insights.",
    ],
  },
  {
    title: "BudgetWise",
    context: "AI Financial Planning · Full Stack",
    summary:
      "Personal finance planner tracking income and 7 expense categories with a 50/30/20 dashboard and an AI health check that cites your actual numbers.",
    repoUrl: "https://github.com/SurajG20/BudgetWise",
    liveUrl: "https://budget-wise-swart.vercel.app",
    stack: ["Next.js", "Prisma", "SQLite", "Tailwind CSS", "Recharts", "JWT"],
    description: [
      "JWT auth with httpOnly cookies guarding income, expenses, dashboard, and AI routes with month/year filtering.",
      "Dashboard with net savings, 50/30/20 gauge, Recharts income-vs-expenses and category donut, plus per-category budget bars.",
      "AI health check returns exactly 3 grounded recommendations with metrics citations, persisted for review without re-query.",
    ],
  },
  {
    title: "CareerPath AI",
    context: "AI Career Counseling Chat",
    summary:
      "Streaming career-counseling chat app with session persistence, secure auth, and dark/light themed responsive UI.",
    repoUrl: "https://github.com/SurajG20/ai-chat-application",
    liveUrl: "https://chat-application-suraj-goswamis-projects.vercel.app",
    stack: ["Next.js 15", "tRPC", "NextAuth.js", "Drizzle ORM", "PostgreSQL", "OpenAI"],
    description: [
      "Streaming AI counseling responses with chat session management and history persistence.",
      "tRPC backend with Drizzle ORM on PostgreSQL and NextAuth email/password authentication.",
      "Responsive chat interface with dark/light theme support and logout confirmation flow.",
    ],
  },
  {
    title: "SiliconTrace (Wexa AI)",
    context: "Supply-Chain Risk Explorer · Graph DB",
    summary:
      "Pick any fab worldwide, take it offline, and see which finished products die, revenue at risk, and where to dual-source.",
    repoUrl: "https://github.com/SurajG20/wexa-ai-assessment",
    liveUrl: "https://wexa-ai-drab.vercel.app",
    stack: ["Next.js", "Neo4j", "CognoDB", "Cypher", "Recharts", "Tailwind CSS"],
    description: [
      "Recursive BOM graph with 515 nodes and 999 relationships across 60 suppliers, 141 facilities, and 30 products.",
      "Blast-radius Cypher traversals rank impacted products by revenue at risk with deduplicated multi-route fan-out.",
      "Alternate-supplier queries find sources entirely outside the impacted region; deterministic idempotent seeding.",
    ],
  },
  {
    title: "Pyrock AI",
    context: "Multilingual Construction Assistant",
    summary:
      "Turns informal English/Hindi/Hinglish site messages into structured events while deterministic code owns material inventory math.",
    repoUrl: "https://github.com/SurajG20/pyrock.ai",
    liveUrl: "https://pyrock-ai.vercel.app",
    stack: ["Next.js", "Drizzle ORM", "libSQL", "Zod", "OpenAI", "Anthropic"],
    description: [
      "Pluggable extraction backends — OpenAI, Anthropic, free OpenCode endpoint, and offline mock — selected by env.",
      "Deterministic stock register where balance always equals received minus used, with durable idempotency.",
      "WhatsApp-style field thread beside the ledger; Zod validation keeps LLM output out of business-state calculations.",
    ],
  },
  {
    title: "ShipStream TMS",
    context: "Transport Management System",
    summary:
      "Operations-style TMS demo serving 6,000 seeded shipments across 46 US lanes through a GraphQL API and React ops console.",
    repoUrl: "https://github.com/SurajG20/shipstream-tms",
    liveUrl: "https://shipstream-tms.vercel.app",
    stack: ["NestJS", "GraphQL", "Prisma", "PostgreSQL", "React 19", "Tailwind CSS"],
    description: [
      "NestJS code-first GraphQL API with JWT auth and ADMIN/EMPLOYEE role guards.",
      "Prisma data layer with raw-SQL KPI queries and seeded shipments plus tracking events.",
      "Vite + React 19 console with typed graphql-codegen hooks, charts, and Leaflet lane maps.",
    ],
  },
  {
    title: "Inventory Order System",
    context: "Inventory & Order Management",
    summary:
      "FastAPI + PostgreSQL backend with a Vite React dashboard for stock levels, orders, and sales analytics.",
    repoUrl: "https://github.com/SurajG20/inventory-order-management",
    liveUrl: "https://inventory-order-system-mu.vercel.app",
    stack: ["FastAPI", "SQLAlchemy", "PostgreSQL", "React", "Vite", "TanStack Query"],
    description: [
      "Async FastAPI service with SQLAlchemy models, Alembic migrations, and dashboard aggregation queries.",
      "Inventory and order workflows with Pydantic validation and Postgres-backed persistence.",
      "React dashboard with React Query caching, form validation, and charted sales insights.",
    ],
  },
  {
    title: "Portfolio Dashboard",
    context: "Stock Analytics · OctaByte Assignment",
    summary:
      "Holdings dashboard with live prices, P/E and earnings context, sector breakdown, and 15-second auto-refresh.",
    repoUrl: "https://github.com/SurajG20/octa-byte-ai-assignment",
    liveUrl: "https://octa-byte-ai-assignment-ochre.vercel.app",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "yahoo-finance2", "Cheerio", "TanStack Table"],
    description: [
      "Live CMP per holding via Yahoo Finance with P/E and earnings context scraped from Google Finance.",
      "Summary cards for invested value, current value, P/L, plus sector-wise allocation breakdown.",
      "Five-minute in-memory cache with graceful fallback to last values and loading skeletons.",
    ],
  },
  {
    title: "System Design Notes",
    context: "Engineering Knowledge Base",
    summary:
      "Static Astro knowledge base covering distributed systems, databases, caching, messaging, and real-world case studies.",
    repoUrl: "https://github.com/SurajG20/system-design-notes",
    liveUrl: "https://system-design-notes-seven.vercel.app",
    stack: ["Astro", "MDX", "TypeScript", "Markdown"],
    description: [
      "Structured notes on CAP, consensus, scalability, sharding, caching strategies, queues, and event-driven design.",
      "Case studies including Netflix architecture plus monolith-vs-microservices tradeoff guides.",
      "Content-collections powered static site deployed on Vercel for fast reading.",
    ],
  },
];

export const certifications = [
  {
    name: "Programming, Data Structures and Algorithms using Python",
    issuer: "NPTEL, IIT Madras",
    date: "March 2023",
    type: "Certification",
    detail: "Score: Elite",
  },
  {
    name: "Full Stack Development Bootcamp",
    issuer: "John Smilga, Udemy",
    date: "2023",
    type: "Bootcamp",
    detail: "Completed",
  },
];

export const engineeringHighlights = [
  { metric: "97%", label: "Latency reduction" },
  { metric: "3+", label: "Clients on payment gateway" },
  { metric: "100+", label: "Daily payments processed" },
  { metric: "20K+", label: "Monthly active users" },
];
