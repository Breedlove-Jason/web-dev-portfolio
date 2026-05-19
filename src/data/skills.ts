export type SkillCategory = {
  id: string;
  title: string;
  description: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend-engineering",
    title: "Frontend Engineering",
    description:
      "Building modern, responsive interfaces with reusable components, polished layouts, and recruiter-friendly user experiences.",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Responsive UI",
      "Component systems",
      "Accessibility basics",
    ],
  },
  {
    id: "backend-full-stack-systems",
    title: "Backend & Full-Stack Systems",
    description:
      "Building practical systems that manage real data, admin workflows, payments, users, and business logic.",
    skills: [
      "Python",
      "Django",
      "Flask",
      "Node.js",
      "API design",
      "Prisma",
      "PostgreSQL",
      "Server actions",
      "Stripe workflows",
    ],
  },
  {
    id: "data-science-analytics",
    title: "Data Science & Analytics",
    description:
      "Returning to data science through applied projects, simulation workflows, analytics dashboards, and machine learning research tools.",
    skills: [
      "Python",
      "pandas",
      "scikit-learn",
      "Walk-forward testing",
      "Data visualization",
      "Model evaluation",
      "CSV/JSON reporting",
      "Research workflows",
    ],
  },
  {
    id: "ai-assisted-development",
    title: "AI-Assisted Development",
    description:
      "Using AI tools as a serious development multiplier: planning, debugging, refactoring, documentation, and iterative implementation.",
    skills: [
      "WebStorm AI",
      "Cursor",
      "GitHub Copilot",
      "Gemini",
      "ChatGPT",
      "Context prompts",
      "Agent workflows",
      "Local LLM planning",
    ],
  },
  {
    id: "product-ui-thinking",
    title: "Product & UI Thinking",
    description:
      "Thinking beyond code by shaping projects into usable, understandable, visually strong products.",
    skills: [
      "Admin CMS design",
      "UX polish",
      "Case study writing",
      "Product roadmaps",
      "Design systems",
      "Dashboard layouts",
      "Interactive portfolio design",
    ],
  },
];

export const currentFocus: string[] = [
  "Building production-style portfolio case studies",
  "Strengthening full-stack TypeScript workflows",
  "Returning to applied data science and ML",
  "Documenting real-world project architecture",
  "Improving deployment and demo readiness",
];

