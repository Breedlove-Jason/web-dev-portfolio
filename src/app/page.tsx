import { SiteShell } from "@/components/layout/SiteShell";
import { GlassCard } from "@/components/ui/GlassCard";
import { NeonButton } from "@/components/ui/NeonButton";
import { SectionHeading } from "@/components/ui/SectionHeading";

const previewCards = [
  {
    title: "Full-stack systems",
    description:
      "Production web apps, APIs, and dashboards built for reliability and scale.",
  },
  {
    title: "Data science comeback",
    description:
      "Analytics pipelines, experimentation, and insight-driven product decisions.",
  },
  {
    title: "AI-assisted development",
    description:
      "Workflow automation and intelligent tooling that accelerates delivery.",
  },
] as const;

export default function Home() {
  return (
    <SiteShell>
      <div className="mx-auto w-full max-w-5xl px-6 py-12 sm:px-8 sm:py-16">
        <section className="glass-panel mb-10 rounded-2xl p-8 sm:p-10">
          <SectionHeading
            eyebrow="NeuralForge Lab"
            title="Jason Breedlove"
            description="Full-stack developer returning to data science"
          />

          <p className="mt-6 max-w-prose text-base leading-relaxed text-text-muted sm:text-lg">
            I build real-world web applications, AI-assisted workflows,
            analytics systems, and interactive products — blending software
            engineering with data-driven thinking to ship tools that are useful,
            measurable, and built to last.
          </p>

          <nav
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4"
            aria-label="Primary actions"
          >
            <NeonButton href="#projects" variant="primary">
              View Projects
            </NeonButton>
            <NeonButton href="/resume.pdf" variant="secondary" download>
              Download Resume
            </NeonButton>
          </nav>
        </section>

        <section aria-labelledby="focus-areas-heading">
          <h2
            id="focus-areas-heading"
            className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-text-muted"
          >
            Focus areas
          </h2>
          <ul className="grid gap-4 sm:grid-cols-3">
            {previewCards.map(({ title, description }) => (
              <li key={title}>
                <GlassCard>
                  <h3 className="mb-2 text-base font-semibold text-text-soft">
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed text-text-muted">
                    {description}
                  </p>
                </GlassCard>
              </li>
            ))}
          </ul>
        </section>

        <footer className="mt-10 text-center font-mono text-xs text-text-muted">
          <span className="text-cyan/80">neuralforge</span>
          <span> / command center v0.1</span>
        </footer>
      </div>
    </SiteShell>
  );
}
