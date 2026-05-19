export type ProjectExperienceEntry = {
  id: string;
  project: string;
  role: string;
  period: string;
  bullets: string[];
  stack: string[];
};

export type SkillGroup = {
  category: string;
  skills: string[];
};

export const profileSummary =
  "Full-stack developer building practical web systems, AI-assisted workflows, analytics tools, and interactive product experiences. Currently focused on strengthening TypeScript/Next.js engineering, returning to applied data science, and turning real projects into production-quality portfolio case studies.";

export const targetRoles = [
  "Full-stack developer",
  "Frontend developer",
  "Junior data scientist",
  "Data analyst / analytics engineer",
  "AI-assisted developer workflow specialist",
] as const;

export const coreStrengths = [
  "Full-stack application development",
  "Responsive UI and admin dashboard design",
  "React and Next.js component architecture",
  "Python data analysis and ML research workflows",
  "API-driven product development",
  "AI-assisted coding, debugging, and documentation",
  "Technical writing and case-study presentation",
] as const;

export const projectExperience: ProjectExperienceEntry[] = [
  {
    id: "american-legion-post-84-admin-cms",
    project: "American Legion Post 84 Admin CMS",
    role: "Full-stack developer",
    period: "Active project",
    bullets: [
      "Built a branded admin CMS for managing members, officers, events, news, pages, donations, dues, and payments.",
      "Implemented payment workflows using Stripe checkout, webhook processing, manual payment entry, and unified revenue metrics.",
      "Designed responsive admin tables, polished form workflows, toast feedback, and project-specific UI standards.",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "Tailwind CSS",
      "shadcn/ui",
      "Stripe",
      "Resend",
    ],
  },
  {
    id: "takeneuroiq",
    project: "TakeNeuroIQ",
    role: "Frontend / product developer",
    period: "Active project",
    bullets: [
      "Built an interactive cognitive training prototype with multiple puzzle families and neural-style performance feedback.",
      "Developed game loops, player scoring, session analytics, and developer testing tools.",
      "Designed a cyberpunk-inspired interface focused on engagement, feedback, and future analytics expansion.",
    ],
    stack: [
      "React",
      "Vite",
      "Tailwind CSS",
      "JavaScript",
      "Planned analytics visualization tooling",
    ],
  },
  {
    id: "cryptoforge",
    project: "CryptoForge",
    role: "Python research developer",
    period: "Research prototype",
    bullets: [
      "Built simulation-first crypto research tooling for BTC, ETH, and SOL strategy testing.",
      "Implemented walk-forward parameter sweeps, confidence thresholds, position sizing, and CSV/JSON reporting.",
      "Focused on model evaluation, safe research workflows, and analysis before any live-trading consideration.",
    ],
    stack: [
      "Python",
      "pandas",
      "scikit-learn",
      "Exchange API data workflows",
    ],
  },
  {
    id: "neuralforge-lab-portfolio",
    project: "NeuralForge Lab Portfolio",
    role: "Full-stack portfolio developer",
    period: "Active build",
    bullets: [
      "Built this interactive portfolio to present projects as case studies, not just links.",
      "Created a reusable cyberpunk-inspired design system with accessible, recruiter-friendly content.",
      "Showcases full-stack systems, AI-assisted development workflows, and data-science return path.",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
];

export const technicalSkills: SkillGroup[] = [
  {
    category: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "responsive UI",
    ],
  },
  {
    category: "Backend",
    skills: ["Python", "Django", "Flask", "Node.js", "API design", "Prisma"],
  },
  {
    category: "Data",
    skills: [
      "pandas",
      "scikit-learn",
      "CSV/JSON reporting",
      "model evaluation",
      "analytics workflows",
    ],
  },
  {
    category: "Tools",
    skills: [
      "Git",
      "WebStorm",
      "Cursor",
      "GitHub Copilot",
      "Gemini",
      "ChatGPT",
      "Notion",
    ],
  },
  {
    category: "Platforms",
    skills: [
      "Stripe",
      "Resend",
      "Vercel-ready architecture",
      "local dev workflows",
    ],
  },
];

export const educationTraining = [
  "AI Engineering and full-stack web development coursework",
  "Self-directed project-based learning in TypeScript, React, Python, and applied data science",
  "Ongoing portfolio case-study development",
] as const;
