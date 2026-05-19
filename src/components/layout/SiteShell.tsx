import type { ReactNode } from "react";

const navLinks = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Lab", href: "#lab" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
] as const;

type SiteShellProps = {
  children: ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  return (
    <div className="relative flex min-h-full flex-col">
      <div
        className="cyber-grid pointer-events-none fixed inset-0 -z-20"
        aria-hidden
      />
      <div
        className="pointer-events-none fixed inset-0 -z-10 bg-bg-deep/40"
        aria-hidden
      />

      <header className="relative z-10 border-b border-(--panel-border) bg-panel/70 backdrop-blur-md">
        <nav
          className="mx-auto flex w-full max-w-5xl flex-col gap-4 px-6 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-8"
          aria-label="Main"
        >
          <a
            href="#top"
            className="font-mono text-sm font-medium tracking-wide transition-colors hover:text-text-soft focus-visible:rounded-sm"
          >
            <span className="neon-text">NeuralForge</span>{" "}
            <span className="text-text-soft">Lab</span>
          </a>

          <ul className="flex flex-wrap items-center gap-x-4 gap-y-2 sm:justify-end sm:gap-x-6">
            {navLinks.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className="text-xs text-text-muted transition-colors hover:text-cyan focus-visible:rounded-sm sm:text-sm"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main id="top" className="relative z-10 flex-1">
        {children}
      </main>
    </div>
  );
}
