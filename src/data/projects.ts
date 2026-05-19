export type ProjectStatus =
  | "In development"
  | "Research prototype"
  | "Concept / architecture"
  | "Product concept"
  | "Active build";

export type Project = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  status: ProjectStatus;
  category: string;
  stack: string[];
  highlights: string[];
  demoUrl?: string;
  githubUrl?: string;
  caseStudyUrl?: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    id: "american-legion-admin-cms",
    title: "American Legion Post 84 Admin CMS",
    subtitle: "Operations, payments, and member workflows in one command center.",
    description:
      "A full admin CMS and payment management system for an American Legion post, including members, officers, events, news, pages, donations, dues, payments, activity tracking, and branded admin workflows.",
    status: "In development",
    category: "Full-stack admin platform",
    stack: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "Tailwind CSS",
      "shadcn/ui",
      "Stripe",
      "Resend",
    ],
    highlights: [
      "Built responsive admin dashboards and CMS modules",
      "Implemented donation, dues, and unified payment tracking",
      "Added Stripe checkout and webhook flows",
      "Created branded navy/gold admin UI patterns",
      "Designed activity tracking and member management workflows",
    ],
    featured: true,
  },
  {
    id: "take-neuro-iq",
    title: "TakeNeuroIQ",
    subtitle: "Cognitive training with adaptive scoring and analytics insights.",
    description:
      "A cognitive training and analytics platform with puzzle families, neural-style scoring, adaptive difficulty concepts, player profiles, and interactive performance feedback.",
    status: "In development",
    category: "Cognitive training platform",
    stack: [
      "React",
      "Vite",
      "Tailwind CSS",
      "JavaScript",
      "Analytics utilities",
      "Recharts planned",
    ],
    highlights: [
      "Built multiple puzzle families and gameplay loops",
      "Designed cyberpunk neural UI patterns",
      "Added session analytics and player feedback systems",
      "Created developer testing tools for puzzle answers",
      "Planned AI coaching and advanced cognitive analytics",
    ],
    featured: true,
  },
  {
    id: "crypto-forge",
    title: "CryptoForge",
    subtitle: "Simulation-first ML research for crypto market behavior.",
    description:
      "A simulation-first crypto research tool for testing machine learning models across BTC, ETH, and SOL with walk-forward validation, confidence thresholds, position sizing, and performance summaries.",
    status: "Research prototype",
    category: "Data science / trading research",
    stack: [
      "Python",
      "pandas",
      "scikit-learn",
      "Coinbase API",
      "Walk-forward testing",
    ],
    highlights: [
      "Built simulation-only research workflow",
      "Added multi-asset walk-forward sweeps",
      "Compared model behavior across market regimes",
      "Generated CSV/JSON reports for analysis",
      "Focused on safety before live trading",
    ],
    featured: false,
  },
  {
    id: "aethermind-ai",
    title: "Aethermind AI",
    subtitle: "An agent-driven command hub for developer tooling.",
    description:
      "A planned AI command hub for coordinating developer tools, coding agents, local models, notes, prompts, and project workflows.",
    status: "Concept / architecture",
    category: "AI developer workflow platform",
    stack: ["Next.js", "TypeScript", "AI agents", "Local LLMs", "IDE integrations"],
    highlights: [
      "Designed agent-based workflow concepts",
      "Planned integrations for IDEs and AI tools",
      "Explored local model and cloud model orchestration",
      "Focused on developer productivity and context management",
    ],
    featured: false,
  },
  {
    id: "content-junkie",
    title: "Content Junkie",
    subtitle: "Personalized discovery hubs for entertainment and creator media.",
    description:
      "A content discovery platform concept designed to aggregate entertainment, social, gaming, news, and creator content into personalized communities and discovery hubs.",
    status: "Product concept",
    category: "Content aggregation platform",
    stack: [
      "React",
      "Next.js",
      "APIs",
      "Recommendation systems",
      "ML concepts",
    ],
    highlights: [
      "Planned hub-based content communities",
      "Designed streaming availability and content search concepts",
      "Explored ML-assisted de-duplication and recommendations",
      "Created product roadmap and platform vision",
    ],
    featured: false,
  },
  {
    id: "neuralforge-lab",
    title: "NeuralForge Lab",
    subtitle: "Command-center portfolio for full-stack and data science work.",
    description:
      "This portfolio itself, built as an interactive command-center style showcase for full-stack development, data science, AI workflows, and product thinking.",
    status: "Active build",
    category: "Portfolio / personal brand",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    highlights: [
      "Built with a recruiter-friendly and interactive design strategy",
      "Uses reusable design system components",
      "Designed to grow into a case-study-driven portfolio",
      "Shows both technical capability and product presentation",
    ],
    featured: true,
  },
];

