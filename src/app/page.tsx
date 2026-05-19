export default function Home() {
  return (
    <main className="mx-auto flex min-h-full w-full max-w-3xl flex-col justify-center px-6 py-16 sm:px-10 sm:py-24">
      <article
        className="rounded-2xl border border-[var(--panel-border)] bg-panel p-8 shadow-[0_0_40px_color-mix(in_srgb,var(--cyan)_8%,transparent)] sm:p-12"
        aria-labelledby="site-title"
      >
        <header className="mb-8 space-y-4 border-b border-[var(--panel-border)] pb-8">
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-cyan sm:text-sm">
            NeuralForge Lab
          </p>
          <h1
            id="site-title"
            className="text-3xl font-semibold tracking-tight text-text-soft sm:text-4xl md:text-5xl"
          >
            Jason Breedlove
          </h1>
          <p className="font-mono text-sm text-violet sm:text-base">
            Full-stack developer returning to data science
          </p>
        </header>

        <section className="mb-10 space-y-4" aria-labelledby="intro-heading">
          <h2 id="intro-heading" className="sr-only">
            About
          </h2>
          <p className="max-w-prose text-base leading-relaxed text-text-muted sm:text-lg">
            I build real-world web applications, AI-assisted workflows,
            analytics systems, and interactive products — blending software
            engineering with data-driven thinking to ship tools that are
            useful, measurable, and built to last.
          </p>
        </section>

        <nav
          className="flex flex-col gap-3 sm:flex-row sm:gap-4"
          aria-label="Primary actions"
        >
          <a
            href="#projects"
            className="inline-flex min-h-11 items-center justify-center rounded-lg border border-cyan/60 bg-cyan/10 px-6 py-2.5 text-center text-sm font-medium text-cyan transition-colors hover:border-cyan hover:bg-cyan/20 focus-visible:outline-offset-2 sm:text-base"
          >
            View Projects
          </a>
          <a
            href="/resume.pdf"
            className="inline-flex min-h-11 items-center justify-center rounded-lg border border-violet/50 bg-violet/10 px-6 py-2.5 text-center text-sm font-medium text-text-soft transition-colors hover:border-magenta hover:bg-magenta/10 hover:text-magenta focus-visible:outline-offset-2 sm:text-base"
            download
          >
            Download Resume
          </a>
        </nav>
      </article>

      <footer className="mt-8 text-center font-mono text-xs text-text-muted">
        <span className="text-cyan/80">neuralforge</span>
        <span className="text-text-muted"> / </span>
        <span>command center v0.1</span>
      </footer>
    </main>
  );
}
