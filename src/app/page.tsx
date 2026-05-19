import { HeroCommandDeck } from "@/components/sections/HeroCommandDeck";
import { SkillsCommandCenter } from "@/components/sections/SkillsCommandCenter";
import { SiteShell } from "@/components/layout/SiteShell";
import { GlassCard } from "@/components/ui/GlassCard";
import { ProjectGalleryView as ProjectGallery } from "@/components/sections/ProjectGalleryView";

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
      <div className="mx-auto w-full max-w-6xl px-6 py-10 sm:px-8 sm:py-14 lg:py-16">
        <HeroCommandDeck />

        <ProjectGallery />

        <SkillsCommandCenter />

        <section className="mb-14" aria-labelledby="focus-areas-heading">
          <h2
            id="focus-areas-heading"
            className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-text-muted"
          >
            Focus areas
          </h2>
          <ul className="grid gap-4 sm:grid-cols-3">
            {previewCards.map(({ title, description }) => (
              <li key={title}>
                <GlassCard className="transition-[border-color,box-shadow] duration-200 hover:border-cyan/20 hover:shadow-[0_0_16px_color-mix(in_srgb,var(--cyan)_10%,transparent)]">
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

        <section
          id="lab"
          className="scroll-mt-24 border-t border-(--panel-border) py-12 sm:py-14"
          aria-labelledby="lab-heading"
        >
          <header className="space-y-3">
            <p className="font-mono text-xs uppercase tracking-[0.3em] sm:text-sm">
              <span className="text-cyan">Lab</span>
              <span className="text-magenta">{" //"}</span>
            </p>
            <h2
              id="lab-heading"
              className="text-2xl font-semibold tracking-tight text-text-soft sm:text-3xl"
            >
              Experiments & pipelines
            </h2>
            <p className="max-w-prose text-base leading-relaxed text-text-muted">
              Analytics prototypes, crypto research tools, and AI workflow demos.
            </p>
          </header>
          <p className="mt-4 font-mono text-xs text-text-muted">
            Section anchor ready — content ships next.
          </p>
        </section>

        <section
          id="resume"
          className="scroll-mt-24 border-t border-(--panel-border) py-12 sm:py-14"
          aria-labelledby="resume-heading"
        >
          <header className="space-y-3">
            <p className="font-mono text-xs uppercase tracking-[0.3em] sm:text-sm">
              <span className="text-cyan">Resume</span>
              <span className="text-magenta">{" //"}</span>
            </p>
            <h2
              id="resume-heading"
              className="text-2xl font-semibold tracking-tight text-text-soft sm:text-3xl"
            >
              Experience & skills
            </h2>
            <p className="max-w-prose text-base leading-relaxed text-text-muted">
              Timeline, stack, and downloadable resume — placeholder for now.
            </p>
          </header>
          <p className="mt-4 font-mono text-xs text-text-muted">
            Section anchor ready — content ships next.
          </p>
        </section>

        <section
          id="contact"
          className="scroll-mt-24 border-t border-(--panel-border) py-12 sm:py-14"
          aria-labelledby="contact-heading"
        >
          <header className="space-y-3">
            <p className="font-mono text-xs uppercase tracking-[0.3em] sm:text-sm">
              <span className="text-cyan">Contact</span>
              <span className="text-magenta">{" //"}</span>
            </p>
            <h2
              id="contact-heading"
              className="text-2xl font-semibold tracking-tight text-text-soft sm:text-3xl"
            >
              Get in touch
            </h2>
            <p className="max-w-prose text-base leading-relaxed text-text-muted">
              Email and social links will land here soon.
            </p>
          </header>
          <p className="mt-4 font-mono text-xs text-text-muted">
            Section anchor ready — content ships next.
          </p>
        </section>

        <footer className="mt-10 border-t border-(--panel-border) pt-8 text-center font-mono text-xs text-text-muted">
          <span className="text-cyan/80">neuralforge</span>
          <span> / command center v0.1</span>
        </footer>
      </div>
    </SiteShell>
  );
}
