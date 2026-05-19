import type { ProjectStatus } from "@/data/projects";
import { cn } from "@/lib/utils";

type StatusBadgeProps = {
  status: ProjectStatus;
  className?: string;
};

const statusStyles: Record<ProjectStatus, string> = {
  "In development": "border-cyan/40 bg-cyan/10 text-cyan",
  "Research prototype": "border-violet/40 bg-violet/10 text-violet",
  "Concept / architecture": "border-magenta/40 bg-magenta/10 text-magenta",
  "Product concept": "border-text-muted/40 bg-bg-deep/40 text-text-muted",
  "Active build": "border-cyan/50 bg-cyan/15 text-cyan",
};

export function StatusBadge({ status, className }: StatusBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.22em]",
        statusStyles[status],
        className,
      )}
    >
      {status}
    </span>
  );
}

