export type WorkflowStage = {
  id: string;
  title: string;
  description: string;
  tools: string[];
  outcome: string;
};

export type AiTool = {
  name: string;
  role: string;
  strength: string;
};

export const workflowHonestyNote =
  "AI accelerates my workflow, but I still review architecture, code quality, accessibility, and runtime behavior before treating work as complete.";

export const workflowStages: WorkflowStage[] = [
  {
    id: "plan",
    title: "Plan",
    description:
      "Break large project goals into scoped implementation steps, define file paths, identify risks, and create clear prompts before coding.",
    tools: ["ChatGPT", "Notion", "project notes"],
    outcome:
      "Smaller implementation steps, fewer context mistakes, better project continuity.",
  },
  {
    id: "build",
    title: "Build",
    description:
      "Use IDE-integrated AI to implement one focused change at a time while keeping project architecture and coding standards intact.",
    tools: ["WebStorm AI", "Cursor", "GitHub Copilot", "Gemini"],
    outcome:
      "Faster component creation, safer refactors, and cleaner code reviews.",
  },
  {
    id: "debug",
    title: "Debug",
    description:
      "Paste exact errors, logs, screenshots, and affected files into a focused debugging loop instead of guessing.",
    tools: ["ChatGPT", "WebStorm", "terminal output", "browser devtools"],
    outcome:
      "Better diagnosis, smaller fixes, less time wasted chasing symptoms.",
  },
  {
    id: "review",
    title: "Review",
    description:
      "Check generated code for type safety, accessibility, responsive layout, maintainability, and project consistency.",
    tools: ["TypeScript", "ESLint", "Git diffs", "manual QA"],
    outcome:
      "AI output becomes reviewed software, not blind automation.",
  },
  {
    id: "document",
    title: "Document",
    description:
      "Capture decisions, implementation notes, case-study details, and future tasks so projects become portfolio-ready proof of work.",
    tools: ["Markdown", "Notion", "README files", "portfolio case studies"],
    outcome:
      "Projects become explainable to recruiters, collaborators, and future maintainers.",
  },
];

export const aiTools: AiTool[] = [
  {
    name: "ChatGPT",
    role: "Planning and diagnosis",
    strength:
      "Architecture, debugging, planning, writing project prompts",
  },
  {
    name: "WebStorm AI",
    role: "IDE-native implementation",
    strength: "Project-aware implementation inside the IDE",
  },
  {
    name: "Cursor",
    role: "Focused iteration",
    strength: "Focused edits, refactors, alternate implementation passes",
  },
  {
    name: "GitHub Copilot",
    role: "Inline acceleration",
    strength: "Completions, repetitive code, quick scaffolding",
  },
  {
    name: "Gemini",
    role: "Context tasks",
    strength: "Fast implementation prompts and context-agent tasks",
  },
  {
    name: "Local models",
    role: "Private experimentation",
    strength: "Offline planning, private notes, future experimentation",
  },
];
