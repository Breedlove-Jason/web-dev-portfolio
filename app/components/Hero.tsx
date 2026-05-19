export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950" />
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-600 rounded-full filter blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(6,182,212,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.3) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="text-cyan-400 font-mono text-sm md:text-base tracking-widest uppercase mb-4">
          Hello, World! I&apos;m
        </p>
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
          Jason{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
            Breedlove
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-4 font-light">
          Full-Stack Web Developer
        </p>
        <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Building modern, performant web applications with{" "}
          <span className="text-cyan-400 font-medium">TypeScript</span>,{" "}
          <span className="text-cyan-400 font-medium">Next.js</span>,{" "}
          <span className="text-cyan-400 font-medium">Tailwind CSS</span>, and{" "}
          <span className="text-cyan-400 font-medium">Python</span>.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-500 px-8 py-3 text-base font-semibold text-gray-950 hover:bg-cyan-400 transition-all hover:scale-105 shadow-lg shadow-cyan-500/25"
          >
            View My Work
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-600 px-8 py-3 text-base font-semibold text-gray-300 hover:border-cyan-500 hover:text-cyan-400 transition-all hover:scale-105"
          >
            Get In Touch
          </a>
        </div>

        {/* Tech stack badges */}
        <div className="mt-16 flex flex-wrap justify-center gap-3 text-xs font-mono">
          {["TypeScript", "Next.js 15", "Tailwind CSS", "Python", "FastAPI", "React 19"].map(
            (tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-full border border-gray-700 text-gray-400 bg-gray-900/50"
              >
                {tech}
              </span>
            )
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500">
        <span className="text-xs tracking-widest uppercase font-mono">
          Scroll
        </span>
        <div className="w-0.5 h-10 bg-gradient-to-b from-gray-500 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
