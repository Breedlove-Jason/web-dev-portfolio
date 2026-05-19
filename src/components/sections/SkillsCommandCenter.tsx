import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SkillChip } from "@/components/ui/SkillChip";
import { currentFocus, skillCategories } from "@/data/skills";

const capabilityMap = [
  {
    name: "UI Systems",
    status: "Operational",
    activeSignals: 5,
  },
  {
    name: "API + Admin Workflows",
    status: "Operational",
    activeSignals: 4,
  },
  {
    name: "Payments + Commerce",
    status: "In build",
    activeSignals: 3,
  },
  {
    name: "Data Research",
    status: "Active",
    activeSignals: 4,
  },
  {
    name: "AI Workflow Integration",
    status: "Active",
    activeSignals: 4,
  },
  {
    name: "Product Delivery",
    status: "Expanding",
    activeSignals: 3,
  },
] as const;

export function SkillsCommandCenter() {
  return (
    <section id="skills" className="scroll-mt-24 py-12 sm:py-14" aria-labelledby="skills-heading">
      <div className="mb-8">
        <SectionHeading
          eyebrow="Skills"
          title="Skills command center"
          description="A live capability overview across frontend engineering, full-stack systems, data science, AI-assisted development, and product/UI thinking."
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="grid gap-6 md:grid-cols-2 lg:col-span-2">
          {skillCategories.map((category) => (
            <GlassCard
              key={category.id}
              className="h-full border border-transparent p-6 transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:border-cyan/20 hover:shadow-[0_0_18px_color-mix(in_srgb,var(--cyan)_10%,transparent)]"
            >
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 id={category.id} className="text-xl font-semibold text-text-soft">
                    {category.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-text-muted">
                    {category.description}
                  </p>
                </div>

                <ul className="flex flex-wrap gap-2" aria-labelledby={category.id}>
                  {category.skills.map((skill) => (
                    <li key={`${category.id}-${skill}`}>
                      <SkillChip>{skill}</SkillChip>
                    </li>
                  ))}
                </ul>
              </div>
            </GlassCard>
          ))}
        </div>

        <div className="space-y-6">
          <GlassCard className="p-6">
            <h3 className="mb-4 text-xl font-semibold text-text-soft">Current build focus</h3>
            <ul className="space-y-2.5 text-sm leading-relaxed text-text-muted">
              {currentFocus.map((focus) => (
                <li key={focus} className="flex gap-2.5">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-cyan" aria-hidden />
                  <span>{focus}</span>
                </li>
              ))}
            </ul>
          </GlassCard>

          <GlassCard className="relative overflow-hidden p-6">
            <div
              className="pointer-events-none absolute inset-0 opacity-50"
              aria-hidden
            >
              <div className="grid h-full grid-cols-10 gap-1 p-3">
                {Array.from({ length: 70 }).map((_, index) => (
                  <span
                    key={index}
                    className="rounded-full bg-cyan/20 shadow-[0_0_8px_color-mix(in_srgb,var(--cyan)_12%,transparent)]"
                  />
                ))}
              </div>
            </div>

            <div className="relative">
              <h3 className="mb-4 text-xl font-semibold text-text-soft">Capability map</h3>
              <ul className="space-y-3">
                {capabilityMap.map((item) => (
                  <li key={item.name} className="rounded-lg border border-(--panel-border) bg-bg-deep/50 p-3">
                    <div className="mb-2 flex items-center justify-between gap-2">
                      <p className="text-sm font-medium text-text-soft">{item.name}</p>
                      <span className="text-[11px] uppercase tracking-[0.16em] text-cyan">
                        {item.status}
                      </span>
                    </div>
                    <div className="grid grid-cols-5 gap-1.5" aria-hidden>
                      {Array.from({ length: 5 }).map((_, idx) => (
                        <span
                          key={`${item.name}-${idx}`}
                          className={
                            idx < item.activeSignals
                              ? "h-1.5 rounded-full bg-cyan/90 shadow-[0_0_10px_color-mix(in_srgb,var(--cyan)_20%,transparent)]"
                              : "h-1.5 rounded-full bg-text-muted/20"
                          }
                        />
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}

