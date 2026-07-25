export const personalInfo = {
  name: "Suraj Goswami",
  email: "surajgoswami01@gmail.com",
  github: "https://github.com/SurajG20",
  linkedin: "https://linkedin.com/in/suraj-goswami01",
  resume: "/Suraj_Goswami_Resume.pdf",
  profilePicture: "/profile.jpg",
  heroHeadline: "Backend-Focused Full Stack Engineer building scalable, production-grade systems.",
  heroDescription:
    "2.5+ years building scalable backend systems, AI-powered applications, and real-time platforms using Node.js, TypeScript, React.js, Redis, PostgreSQL, and AWS.",
  role: "Backend-Focused Full Stack Engineer",
};

export const quickStats = [
  { value: "20K+", label: "Monthly Active Users" },
  { value: "4s → <100ms", label: "Latency improvement" },
  { value: "40%", label: "Latency reduction" },
  { value: "<15 min", label: "Issue detection time" },
];

export const brandStatement = `Backend-Focused Full Stack Engineer specializing in scalable backend systems, distributed architectures, AI-powered applications, real-time platforms, and payment infrastructure.

I enjoy designing production-ready software that solves real-world problems through clean architecture, asynchronous processing, scalable APIs, and cloud-native engineering.`;

export const workExperience = [
  {
    company: "WisewayTec",
    location: "Remote",
    position: "Backend-Focused Full Stack Engineer",
    period: "September 2024 – Present",
    achievements: [
      "Architected a Telegram Mini App gaming platform supporting over 20K monthly active users, built on distributed Socket.IO rooms for live games and event-driven rewards.",
      "Reduced backend request latency from ~4 seconds to under 100 milliseconds (97% reduction) using BullMQ and Redis-based asynchronous processing.",
      "Designed a Redis-backed Socket.IO architecture delivering low-latency real-time communication.",
      "Built scalable crypto payment infrastructure, including staking workflows, webhook processing, and transaction lifecycle management.",
      "Implemented secure KYC workflows and third-party integrations.",
      "Deployed Prometheus and Grafana monitoring, reducing production issue detection time from hours to under 15 minutes.",
      "Designed distributed backend services focused on scalability and fault tolerance.",
      "Added unit and integration testing for critical backend services.",
    ],
    stack: [
      "Node.js",
      "TypeScript",
      "Redis",
      "BullMQ",
      "Socket.IO",
      "MongoDB",
      "MySQL",
      "Prometheus",
      "Grafana",
      "AWS",
    ],
  },
  {
    company: "Wiselogics Digital Solutions",
    location: "Remote",
    position: "Full Stack Developer",
    period: "March 2024 – August 2024",
    achievements: [
      "Built scalable backend systems for logistics, banking, CRM, and EV delivery platforms.",
      "Designed REST APIs serving 10K+ monthly users.",
      "Reduced ride-booking response latency by 40% through backend optimization with Socket.IO live tracking and location-based matching.",
      "Built server-side rendered applications using Next.js.",
      "Automated USDOT motor carrier data extraction using Python pipelines, saving ops teams 20+ hours/week.",
      "Integrated Razorpay, Stripe, Magento, and banking payment systems.",
      "Implemented JWT authentication and role-based authorization.",
    ],
    stack: [
      "Node.js",
      "Express.js",
      "Next.js",
      "React.js",
      "PostgreSQL",
      "Python",
      "Socket.IO",
      "JWT",
      "Stripe",
      "Magento",
    ],
  },
  {
    company: "Livinart Technologies",
    location: "Remote",
    position: "Backend Developer Intern",
    period: "October 2023 – January 2024",
    achievements: [
      "Built backend services using Node.js and Express.js.",
      "Developed REST APIs and authentication systems.",
      "Worked on ride-booking and loan management platforms.",
      "Implemented real-time communication using Socket.IO.",
      "Optimized backend performance and API response time.",
    ],
    stack: ["Node.js", "Express.js", "Socket.IO", "REST APIs"],
  },
];

export const education = [
  {
    institution: "Samrat Ashok Technological Institute",
    location: "Madhya Pradesh, India",
    degree: "B.Tech in Electrical Engineering",
    period: "2020 – 2024",
    achievements: ["CGPA: 8.26"],
  },
];

export const skills = [
  {
    label: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "SQL"],
  },
  {
    label: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "NestJS",
      "REST APIs",
      "Socket.IO",
      "WebSockets",
      "BullMQ",
      "JWT",
      "Microservices",
    ],
  },
  {
    label: "Frontend",
    items: ["React.js", "Next.js", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    label: "Databases",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
  },
  {
    label: "Cloud & DevOps",
    items: ["AWS", "Docker", "Git", "GitHub Actions", "CI/CD", "Linux", "Nginx"],
  },
  {
    label: "AI",
    items: [
      "OpenAI API",
      "GraphRAG",
      "Neo4j",
      "Tree-sitter",
      "Prompt Engineering",
      "Ollama",
      "Anthropic",
      "Gemini",
    ],
  },
  {
    label: "Monitoring",
    items: ["Prometheus", "Grafana"],
  },
];

export const selectedWork = [
  {
    title: "GraphMind",
    context: "AI Repository Knowledge Platform",
    summary:
      "An AI-powered repository knowledge platform that parses repositories using Tree-sitter, constructs Neo4j knowledge graphs, and enables GraphRAG-powered repository understanding.",
    stack: ["Node.js", "React.js", "FastAPI", "Neo4j", "Tree-sitter", "GraphRAG"],
    description: [
      "Built a deterministic repository parsing pipeline using Tree-sitter ahead of LLM integration to reduce risk of unreliable early output.",
      "Constructed Neo4j knowledge graphs for hybrid vector and graph retrieval across codebases.",
      "Implemented BYOK architecture supporting OpenAI, Anthropic, Gemini, and Ollama.",
      "Enabled symbol search and repository understanding through GraphRAG-powered queries.",
    ],
  },
  {
    title: "AI Calorie Tracker",
    context: "AI Application",
    summary:
      "AI-powered nutrition tracking application that analyzes natural language meal descriptions using OpenAI APIs, reducing manual logging by 90%.",
    stack: ["Next.js", "Node.js", "PostgreSQL", "Redis", "OpenAI API"],
    description: [
      "Built AI-powered meal recognition from natural language descriptions using OpenAI APIs.",
      "Reduced manual nutrition logging by 90% through automated estimation and calorie tracking.",
      "Implemented Redis caching for performance optimization and authentication for secure access.",
      "Designed responsive dashboard with real-time nutrition insights.",
    ],
  },
  {
    title: "Custodia",
    context: "Decentralized Escrow Platform",
    summary:
      "Decentralized escrow platform on Binance Smart Chain supporting milestone-based payments with smart contracts and dispute workflows.",
    stack: ["Solidity", "Node.js", "React.js", "WalletConnect", "BSC"],
    description: [
      "Built smart contract-based escrow system with milestone-based payment release on BSC.",
      "Implemented WalletConnect for wallet integration and hybrid authentication flows.",
      "Designed dispute workflows for secure and transparent transaction resolution.",
    ],
  },
];

export const certifications = [
  {
    name: "Programming, Data Structures and Algorithms using Python",
    issuer: "NPTEL, IIT Madras",
    date: "March 2023",
    type: "Certification",
    detail: "Score: 78%",
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
  { metric: "20K+", label: "Monthly Active Users" },
  { metric: "15+", label: "Production REST APIs" },
  { metric: "100+", label: "Concurrent real-time sessions" },
  { metric: "90%", label: "Manual logging reduction" },
];
