import { GlassCard } from "@/components/ui/GlassCard";
import { NeonButton } from "@/components/ui/NeonButton";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  coreStrengths,
  educationTraining,
  profileSummary,
  projectExperience,
  targetRoles,
  technicalSkills,
} from "@/data/resume";

export function ResumeSection() {
  return (
    <section
      id="resume"
      className="scroll-mt-24 border-t border-[var(--panel-border)] py-12 sm:py-14"
      aria-labelledby="resume-heading"
    >
      <div id="resume-heading" className="mb-8">
        <SectionHeading
          eyebrow="Resume"
          title="Resume signal"
          description={profileSummary}
        />
      </div>

      <GlassCard className="mb-8 border border-cyan/20 p-6 sm:p-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.35em] text-cyan/80">
              Project-based experience
            </p>
            <p className="max-w-2xl text-sm leading-relaxed text-text-muted">
              This resume section highlights active portfolio work and real
              project delivery. It avoids fake employment history and focuses on
              demonstrated systems and outcomes.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <NeonButton variant="secondary" disabled>
              Download PDF coming soon
            </NeonButton>
            <NeonButton href="#contact" variant="primary">
              Contact Jason
            </NeonButton>
          </div>
        </div>
      </GlassCard>

      <div className="mb-8">
        <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.32em] text-violet/90">
          Target roles
        </p>
        <ul className="flex flex-wrap gap-2">
          {targetRoles.map((role) => (
            <li key={role}>
              <span className="inline-flex items-center rounded-full border border-violet/35 bg-violet/10 px-3 py-1 text-xs text-text-soft transition-colors hover:border-violet/55">
                {role}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <GlassCard className="mb-8 p-6 sm:p-8">
        <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.32em] text-magenta/90">
          Core strengths
        </p>
        <ul className="grid gap-3 sm:grid-cols-2">
          {coreStrengths.map((strength) => (
            <li
              key={strength}
              className="rounded-lg border border-[var(--panel-border)] bg-bg-deep/40 px-3 py-2 text-sm text-text-muted"
            >
              <span className="mr-2 text-cyan" aria-hidden>
                ▸
              </span>
              <span className="text-text-soft">{strength}</span>
            </li>
          ))}
        </ul>
      </GlassCard>

      <div className="mb-8 space-y-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-cyan/85">
          Project experience
        </p>
        <ul className="space-y-4">
          {projectExperience.map((entry) => (
            <li key={entry.id}>
              <GlassCard className="border border-transparent p-5 transition-[border-color,box-shadow] duration-200 hover:border-cyan/20 hover:shadow-[0_0_20px_color-mix(in_srgb,var(--cyan)_10%,transparent)] sm:p-6">
                <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-text-soft">
                      {entry.project}
                    </h3>
                    <p className="text-sm text-cyan">{entry.role}</p>
                  </div>
                  <span className="inline-flex items-center self-start rounded border border-[var(--panel-border)] bg-bg-deep/50 px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.2em] text-violet/90">
                    {entry.period}
                  </span>
                </div>

                <ul className="mb-4 space-y-2">
                  {entry.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex gap-2 text-sm leading-relaxed text-text-muted"
                    >
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-cyan" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div>
                  <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.28em] text-magenta/85">
                    Stack reference
                  </p>
                  <ul className="flex flex-wrap gap-1.5">
                    {entry.stack.map((skill) => (
                      <li key={`${entry.id}-${skill}`}>
                        <span className="inline-block rounded border border-[var(--panel-border)] bg-bg-deep/40 px-2 py-0.5 text-xs text-text-soft">
                          {skill}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </GlassCard>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-8 grid gap-4 lg:grid-cols-2">
        <GlassCard className="p-6 sm:p-8">
          <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.32em] text-violet/90">
            Technical skills
          </p>
          <ul className="space-y-3">
            {technicalSkills.map((group) => (
              <li key={group.category}>
                <p className="mb-1 text-sm font-semibold text-text-soft">
                  {group.category}
                </p>
                <p className="text-sm leading-relaxed text-text-muted">
                  {group.skills.join(" • ")}
                </p>
              </li>
            ))}
          </ul>
        </GlassCard>

        <GlassCard className="p-6 sm:p-8">
          <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.32em] text-cyan/85">
            Education & training
          </p>
          <ul className="space-y-2.5 text-sm leading-relaxed text-text-muted">
            {educationTraining.map((entry) => (
              <li key={entry} className="flex gap-2">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-violet" />
                <span>{entry}</span>
              </li>
            ))}
          </ul>
        </GlassCard>
      </div>
    </section>
  );
}
