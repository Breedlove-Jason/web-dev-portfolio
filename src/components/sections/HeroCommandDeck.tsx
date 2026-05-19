import { GlassCard } from "@/components/ui/GlassCard";
import { NeonButton } from "@/components/ui/NeonButton";
import { NeuralProfileArtifact } from "@/components/ui/NeuralProfileArtifact";
import { SignalPill } from "@/components/ui/SignalPill";
import { cn } from "@/lib/utils";

const terminalLines = [
  "boot NeuralForge Lab",
  "loading portfolio modules...",
  "full-stack systems: online",
  "data science track: active",
  "AI workflow engine: connected",
  "ready for deployment",
] as const;

const statCards = [
  {
    title: "Full-stack",
    detail: "React • Next.js • Python",
  },
  {
    title: "Data science",
    detail: "ML research • analytics • visualization",
  },
  {
    title: "AI workflow",
    detail: "WebStorm • Cursor • Copilot • Gemini",
  },
  {
    title: "Production mindset",
    detail: "Git • responsive UI • real systems",
  },
] as const;

const roleBadges = [
  "Full-stack developer",
  "Data science track",
  "AI-assisted builder",
  "Product-minded engineer",
] as const;

const terminalDots = [
  { color: "bg-magenta/80", label: "Close" },
  { color: "bg-violet/80", label: "Minimize" },
  { color: "bg-cyan/80", label: "Maximize" },
] as const;

export function HeroCommandDeck() {
  return (
    <section
      className="hero-command-deck mb-14 min-h-[min(100vh-8rem,52rem)] lg:mb-16"
      aria-labelledby="hero-heading"
    >
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
        <div className="flex flex-col justify-center space-y-6 sm:space-y-7">
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-text-muted sm:text-sm">
            <span className="text-cyan">Portfolio</span>
            <span className="text-magenta">{" // "}</span>
            <span className="text-text-soft">NeuralForge Lab</span>
          </p>

          <h1
            id="hero-heading"
            className="text-3xl font-semibold leading-tight tracking-tight text-text-soft sm:text-4xl lg:text-[2.35rem] lg:leading-[1.15] xl:text-5xl"
          >
            I build full-stack systems, AI-assisted workflows, and data-driven
            interfaces.
          </h1>

          <p className="max-w-prose text-base leading-relaxed text-text-muted sm:text-lg">
            I&apos;m Jason Breedlove, a full-stack developer returning to data
            science through real projects: admin systems, cognitive training
            apps, analytics pipelines, crypto research tools, and AI-powered
            developer workflows.
          </p>

          <nav
            className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4"
            aria-label="Hero actions"
          >
            <NeonButton href="#projects" variant="primary">
              View Projects
            </NeonButton>
            <NeonButton href="#lab" variant="secondary">
              Explore Lab
            </NeonButton>
            <a
              href="#resume"
              className="inline-flex min-h-11 items-center justify-center px-2 text-sm font-medium text-text-muted underline-offset-4 transition-colors hover:text-cyan hover:underline focus-visible:rounded-sm sm:px-4"
            >
              Resume
            </a>
          </nav>

          <ul
            className="flex flex-wrap gap-2 pt-1"
            aria-label="Role focus areas"
          >
            {roleBadges.map((badge) => (
              <li key={badge}>
                <SignalPill>{badge}</SignalPill>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="relative z-0 mx-auto -mb-14 w-full max-w-140 sm:-mb-18 lg:-mb-22">
            <div className="mb-3 text-center font-mono text-[0.65rem] uppercase tracking-[0.45em] text-cyan-300/80">
              Neural identity <span className="text-fuchsia-400">{"//"}</span>{" "}
              online
            </div>
            <NeuralProfileArtifact />
          </div>

          <div className="relative z-10">
            <div
              className="hero-deck-glow pointer-events-none absolute -inset-3 rounded-2xl bg-cyan/5 blur-2xl"
              aria-hidden
            />
            <div className="hero-deck-panel glass-panel relative overflow-hidden rounded-2xl">
              <header className="flex items-center gap-3 border-b border-(--panel-border) px-4 py-3 sm:px-5">
                <div className="flex gap-1.5" aria-hidden>
                  {terminalDots.map(({ color, label }) => (
                    <span
                      key={label}
                      className={cn("size-2.5 rounded-full", color)}
                      title={label}
                    />
                  ))}
                </div>
                <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-cyan sm:text-xs">
                  System Status
                </p>
              </header>

              <div className="space-y-4 p-4 sm:p-5">
                <div
                  className="rounded-lg border border-(--panel-border) bg-bg-deep/60 p-3 sm:p-4"
                  role="group"
                  aria-label="System terminal output"
                >
                  <ul className="space-y-1.5 font-mono text-xs leading-relaxed text-text-muted sm:text-sm">
                    {terminalLines.map((line) => (
                      <li key={line} className="flex gap-2">
                        <span className="shrink-0 text-cyan" aria-hidden>
                          &gt;
                        </span>
                        <span className="text-text-soft/90">{line}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <ul className="grid gap-3 sm:grid-cols-2">
                  {statCards.map(({ title, detail }) => (
                    <li key={title}>
                      <GlassCard className="hero-stat-card h-full p-4 transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:border-cyan/25 hover:shadow-[0_0_20px_color-mix(in_srgb,var(--cyan)_12%,transparent)]">
                        <h2 className="mb-1.5 text-sm font-semibold text-cyan">
                          {title}
                        </h2>
                        <p className="text-xs leading-relaxed text-text-muted">
                          {detail}
                        </p>
                      </GlassCard>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
