import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type SignalPillProps = {
  children: ReactNode;
  className?: string;
};

export function SignalPill({ children, className }: SignalPillProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-cyan/25 bg-cyan/5 px-3 py-1.5 text-xs font-medium text-text-soft transition-[color,background-color,border-color,box-shadow] duration-200 hover:border-cyan/45 hover:bg-cyan/10 hover:text-cyan hover:shadow-[0_0_12px_color-mix(in_srgb,var(--cyan)_15%,transparent)]",
        className,
      )}
    >
      {children}
    </span>
  );
}
