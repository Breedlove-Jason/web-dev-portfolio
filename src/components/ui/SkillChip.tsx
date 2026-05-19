import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SkillChipProps = {
  children: ReactNode;
  className?: string;
};

export function SkillChip({ children, className }: SkillChipProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-cyan/20 bg-cyan/5 px-3 py-1 text-xs font-medium text-text-soft transition-[border-color,background-color,color,box-shadow] duration-200 hover:border-cyan/40 hover:bg-cyan/10 hover:text-cyan hover:shadow-[0_0_12px_color-mix(in_srgb,var(--cyan)_14%,transparent)]",
        className,
      )}
    >
      {children}
    </span>
  );
}

