export type ContactProfile = {
  name: string;
  headline: string;
  summary: string;
  email: string;
  location: string;
  availability: string;
};

export type ContactLink = {
  name: string;
  href: string;
  label: string;
  disabled?: boolean;
};

export const contactProfile: ContactProfile = {
  name: "Jason Breedlove",
  headline: "Let’s build something useful, intelligent, and beautifully engineered.",
  summary:
    "I’m looking for opportunities where I can contribute as a full-stack developer while continuing to grow into applied data science, analytics, AI-assisted development, and product-focused engineering.",
  email: "j@jasonbreedlove.com",
  location: "Auburn, California",
  availability: "Open to developer, data, and AI-assisted engineering opportunities",
};

export const contactLinks: ContactLink[] = [
  {
    name: "Email",
    href: "mailto:j@jasonbreedlove.com?subject=Portfolio%20Inquiry%20-%20Jason%20Breedlove",
    label: "Email Jason",
  },
  {
    name: "GitHub",
    href: "#",
    label: "GitHub coming soon",
    disabled: true,
  },
  {
    name: "LinkedIn",
    href: "#",
    label: "LinkedIn coming soon",
    disabled: true,
  },
  {
    name: "Resume",
    href: "#resume",
    label: "View resume",
  },
];

export const collaborationSignals = [
  "Full-stack web applications",
  "Admin dashboards and CMS systems",
  "Data analysis and ML research tooling",
  "AI-assisted developer workflows",
  "Interactive product prototypes",
  "Technical documentation and case studies",
] as const;
