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

export const selectedWork = [
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
    title: "Calorie Tracker",
    context: "LLM-Powered Nutrition App",
    summary:
      "Converts natural-language meal descriptions into structured nutrition data using OpenAI APIs, protected by Redis rate limiting.",
    repoUrl: "https://github.com/SurajG20/Calorie-Tracker",
    stack: ["Next.js", "Node.js", "OpenAI API", "PostgreSQL", "Redis"],
    description: [
      "Natural language in, structured macros out — LLM responses validated into typed nutrition records in PostgreSQL.",
      "Redis-based rate limiting protects OpenAI spend; caching keeps repeat queries instant.",
      "Responsive dashboard with real-time daily intake insights.",
    ],
  },
  {
    title: "Custodia",
    context: "Decentralized Escrow Protocol",
    summary:
      "Milestone-based escrow on Binance Smart Chain — Solidity smart contracts release funds automatically when conditions are met.",
    repoUrl: "https://github.com/SurajG20/Custodia",
    stack: ["Solidity", "Next.js", "Supabase", "Reown", "WalletConnect"],
    description: [
      "Solidity escrow contracts with automated milestone-release conditions on BSC.",
      "Reown/WalletConnect integration for wallet auth and transaction signing flows.",
      "Supabase-backed off-chain state mirroring the on-chain escrow lifecycle.",
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
