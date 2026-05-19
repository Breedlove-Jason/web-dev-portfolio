import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";

const actionBaseClasses =
  "inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] transition-colors";

type ActionLinkProps = {
  label: string;
  href?: string;
};

const statusStyles = {
  "In development": "border-cyan/40 bg-cyan/10 text-cyan",
  "Research prototype": "border-violet/40 bg-violet/10 text-violet",
  "Concept / architecture": "border-magenta/40 bg-magenta/10 text-magenta",
  "Product concept": "border-text-muted/40 bg-bg-deep/40 text-text-muted",
  "Active build": "border-cyan/50 bg-cyan/15 text-cyan",
} as const;

function StatusBadge({ status }: { status: keyof typeof statusStyles }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.22em]",
        statusStyles[status],
      )}
    >
      {status}
    </span>
  );
}

function ActionLink({ label, href }: ActionLinkProps) {
  if (!href) {
    return (
      <span
        className={cn(actionBaseClasses, "cursor-not-allowed text-text-muted/60")}
      >
        {label}
        <span className="text-[10px] normal-case tracking-normal">
          Coming soon
        </span>
      </span>
    );
  }

  return (
    <a href={href} className={cn(actionBaseClasses, "text-cyan hover:text-magenta")}>
      {label}
    </a>
  );
}

export function ProjectGalleryView() {
  const orderedProjects = [...projects].sort(
    (a, b) => Number(b.featured) - Number(a.featured),
  );

  return (
    <section id="projects" className="scroll-mt-24 py-12 sm:py-14">
      <div className="mb-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          eyebrow="Projects"
          title="Project gallery"
          description="Proof-of-work systems, research, and product prototypes from NeuralForge Lab."
        />
        <p className="max-w-sm text-sm text-text-muted">
          Featured builds highlight the most active systems. Each card lists current status, stack, and outcomes.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {orderedProjects.map((project) => (
          <GlassCard
            key={project.id}
            className="group flex h-full flex-col gap-5 border border-transparent p-6 transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-1 hover:border-cyan/20 hover:shadow-[0_0_22px_color-mix(in_srgb,var(--cyan)_12%,transparent)]"
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-text-muted">
                {project.category}
              </p>
              <StatusBadge status={project.status} />
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-text-soft">{project.title}</h3>
              <p className="text-sm text-text-muted">{project.subtitle}</p>
            </div>

            <p className="text-sm leading-relaxed text-text-muted">{project.description}</p>

            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">
                Stack
              </p>
              <ul className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <li
                    key={`${project.id}-${tech}`}
                    className="rounded-full border border-(--panel-border) bg-bg-deep/40 px-3 py-1 text-xs text-text-soft"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">
                Highlights
              </p>
              <ul className="space-y-2 text-sm text-text-muted">
                {project.highlights.slice(0, 4).map((highlight) => (
                  <li key={`${project.id}-${highlight}`} className="flex gap-2">
                    <span className="mt-1 size-1.5 shrink-0 rounded-full bg-cyan" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-auto flex flex-wrap gap-3 pt-2">
              <ActionLink label="Case Study" href={project.caseStudyUrl} />
              <ActionLink label="GitHub" href={project.githubUrl} />
              <ActionLink label="Demo" href={project.demoUrl} />
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}

export default ProjectGalleryView;


