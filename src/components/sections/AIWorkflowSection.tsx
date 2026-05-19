import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { aiTools, workflowHonestyNote, workflowStages } from "@/data/workflow";
import { cn } from "@/lib/utils";

export function AIWorkflowSection() {
  return (
    <section
      id="lab"
      className="scroll-mt-24 border-t border-[var(--panel-border)] py-12 sm:py-14"
      aria-labelledby="lab-heading"
    >
      <div className="mb-10" id="lab-heading">
        <SectionHeading
          eyebrow="Lab"
          title="AI-assisted development workflow"
          description="How I use modern AI coding tools as part of a disciplined build process — with engineering judgment still in the loop."
        />
      </div>

      <div className="mb-8 flex flex-wrap items-center gap-3 font-mono text-[10px] uppercase tracking-[0.35em] text-text-muted sm:text-xs">
        <span className="rounded border border-violet/30 bg-violet/10 px-2.5 py-1 text-violet">
          Pipeline active
        </span>
        <span className="text-magenta/80">workflow_v1</span>
        <span className="hidden sm:inline text-cyan/70">5 stages</span>
        <span className="hidden sm:inline text-text-muted/60">|</span>
        <span className="hidden sm:inline text-cyan/70">human review required</span>
      </div>

      <ol className="relative mb-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5">
        {workflowStages.map((stage, index) => (
          <li key={stage.id} className="relative min-w-0">
            {index < workflowStages.length - 1 ? (
              <span
                className="pointer-events-none absolute top-8 right-0 z-0 hidden h-px w-4 translate-x-full bg-gradient-to-r from-violet/40 to-transparent 2xl:block"
                aria-hidden
              />
            ) : null}
            <GlassCard
              className={cn(
                "relative h-full border border-violet/15 p-5 transition-[border-color,box-shadow,transform] duration-200",
                "hover:-translate-y-0.5 hover:border-violet/30 hover:shadow-[0_0_20px_color-mix(in_srgb,var(--violet)_12%,transparent)]",
              )}
            >
              <div className="mb-4 flex items-start justify-between gap-3">
                <span
                  className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg border border-cyan/40 bg-cyan/10 font-mono text-sm font-semibold text-cyan shadow-[0_0_16px_color-mix(in_srgb,var(--cyan)_18%,transparent)]"
                  aria-hidden
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-magenta/80">
                  stage_{stage.id}
                </span>
              </div>

              <h3 className="mb-2 text-lg font-semibold text-text-soft">
                {stage.title}
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-text-muted">
                {stage.description}
              </p>

              <div className="mb-4 space-y-2">
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-cyan/80">
                  Tools
                </p>
                <ul className="flex flex-wrap gap-1.5">
                  {stage.tools.map((tool) => (
                    <li key={tool}>
                      <span className="inline-block rounded border border-[var(--panel-border)] bg-bg-deep/50 px-2 py-0.5 text-xs text-text-soft">
                        {tool}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-lg border border-[var(--panel-border)] bg-bg-deep/40 p-3">
                <p className="mb-1 font-mono text-[10px] uppercase tracking-[0.28em] text-violet/90">
                  Outcome
                </p>
                <p className="text-xs leading-relaxed text-text-muted">
                  {stage.outcome}
                </p>
              </div>
            </GlassCard>
          </li>
        ))}
      </ol>

      <GlassCard className="mb-8 border border-fuchsia-500/15 p-6 sm:p-8">
        <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.35em] text-fuchsia-400/90">
              Toolchain matrix
            </p>
            <h3 className="text-xl font-semibold text-text-soft sm:text-2xl">
              AI tools in the stack
            </h3>
          </div>
          <p className="max-w-md text-sm text-text-muted">
            Each tool has a defined role. None replace architecture decisions,
            testing, or ownership of the final code.
          </p>
        </div>

        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {aiTools.map((tool) => (
            <li
              key={tool.name}
              className="rounded-lg border border-[var(--panel-border)] bg-bg-deep/50 p-4 transition-[border-color,box-shadow] duration-200 hover:border-cyan/25 hover:shadow-[0_0_12px_color-mix(in_srgb,var(--cyan)_8%,transparent)]"
            >
              <p className="mb-1 font-semibold text-cyan">{tool.name}</p>
              <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.22em] text-violet/90">
                {tool.role}
              </p>
              <p className="text-sm leading-relaxed text-text-muted">
                {tool.strength}
              </p>
            </li>
          ))}
        </ul>
      </GlassCard>

      <blockquote className="rounded-xl border border-[var(--panel-border)] bg-panel/40 px-5 py-4 font-mono text-sm leading-relaxed text-text-muted sm:px-6 sm:py-5">
        <span className="text-cyan/80">&gt;</span> {workflowHonestyNote}
      </blockquote>
    </section>
  );
}
