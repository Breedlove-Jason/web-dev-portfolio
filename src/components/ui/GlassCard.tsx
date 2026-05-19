import type { ReactNode } from "react";

type GlassCardProps = {
  children: ReactNode;
  className?: string;
};

function joinClasses(...parts: (string | undefined)[]) {
  return parts.filter(Boolean).join(" ");
}

export function GlassCard({ children, className }: GlassCardProps) {
  return (
    <article className={joinClasses("glass-panel rounded-xl p-5", className)}>
      {children}
    </article>
  );
}
