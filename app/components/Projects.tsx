const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce application with real-time inventory management, Stripe payments, and a Next.js App Router frontend. Built with TypeScript end-to-end.",
    tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS"],
    color: "from-cyan-500 to-blue-600",
    icon: "🛒",
    github: "https://github.com/Breedlove-Jason",
    demo: "#",
    featured: true,
  },
  {
    title: "AI Data Dashboard",
    description:
      "A Python FastAPI backend powering a real-time analytics dashboard. Uses pandas and scikit-learn for data processing, with a React frontend displaying interactive charts.",
    tags: ["Python", "FastAPI", "React", "Pandas", "TypeScript"],
    color: "from-violet-500 to-purple-600",
    icon: "📊",
    github: "https://github.com/Breedlove-Jason",
    demo: "#",
    featured: true,
  },
  {
    title: "Portfolio CMS",
    description:
      "A headless CMS built with Next.js and Tailwind CSS, featuring dynamic content management, dark mode, and MDX blog support with syntax highlighting.",
    tags: ["Next.js", "TypeScript", "MDX", "Tailwind CSS"],
    color: "from-emerald-500 to-teal-600",
    icon: "📝",
    github: "https://github.com/Breedlove-Jason",
    demo: "#",
    featured: false,
  },
  {
    title: "REST API Boilerplate",
    description:
      "A production-ready Python FastAPI boilerplate with JWT auth, rate limiting, async database access via SQLAlchemy, and full OpenAPI documentation.",
    tags: ["Python", "FastAPI", "SQLAlchemy", "JWT", "Docker"],
    color: "from-orange-500 to-red-600",
    icon: "⚡",
    github: "https://github.com/Breedlove-Jason",
    demo: "#",
    featured: false,
  },
  {
    title: "Weather App",
    description:
      "A beautiful weather application built with Next.js and Tailwind, fetching real-time data from the OpenWeather API with animated weather icons and forecast graphs.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "OpenWeather API"],
    color: "from-sky-500 to-cyan-600",
    icon: "🌤",
    github: "https://github.com/Breedlove-Jason",
    demo: "#",
    featured: false,
  },
  {
    title: "Chat Application",
    description:
      "A real-time chat application built with Next.js, WebSockets, and a Python backend. Features rooms, direct messages, and end-to-end message encryption.",
    tags: ["Next.js", "Python", "WebSockets", "TypeScript"],
    color: "from-pink-500 to-rose-600",
    icon: "💬",
    github: "https://github.com/Breedlove-Jason",
    demo: "#",
    featured: false,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-gray-900">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-3">
            My Work
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Featured{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            A selection of projects showcasing my skills across the full web
            development stack.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative rounded-2xl bg-gray-950 border border-gray-800 overflow-hidden hover:border-gray-600 transition-all hover:-translate-y-1 duration-300"
            >
              {/* Top gradient bar */}
              <div
                className={`h-1 w-full bg-gradient-to-r ${project.color}`}
              />

              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-3xl">{project.icon}</span>
                  {project.featured && (
                    <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                      Featured
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-md bg-gray-800 text-gray-400 font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition-colors"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Code
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-cyan-400 transition-colors"
                  >
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
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/Breedlove-Jason"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-gray-600 px-8 py-3 text-sm font-semibold text-gray-300 hover:border-cyan-500 hover:text-cyan-400 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
