export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-gray-900">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Avatar / Visual */}
          <div className="flex-shrink-0">
            <div className="relative w-56 h-56 md:w-72 md:h-72">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500 to-violet-600 rotate-6 opacity-30" />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-violet-600/20 border border-gray-700 flex items-center justify-center text-8xl">
                👨‍💻
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="flex-1">
            <p className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-3">
              About Me
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Passionate Developer &amp;{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
                Problem Solver
              </span>
            </h2>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                Hi! I&apos;m Jason Breedlove, a full-stack web developer with a
                passion for crafting high-quality digital experiences. I
                specialize in building scalable, modern web applications using
                cutting-edge technologies.
              </p>
              <p>
                My front-end workflow revolves around{" "}
                <span className="text-cyan-400">TypeScript</span>,{" "}
                <span className="text-cyan-400">React</span>, and{" "}
                <span className="text-cyan-400">Next.js</span> for server-side
                rendering and static generation, styled with{" "}
                <span className="text-cyan-400">Tailwind CSS</span> for
                pixel-perfect, responsive designs.
              </p>
              <p>
                On the back end, I leverage{" "}
                <span className="text-cyan-400">Python</span> with frameworks
                like <span className="text-cyan-400">FastAPI</span> and{" "}
                <span className="text-cyan-400">Django</span> to build robust
                APIs and data pipelines, making my stack versatile across the
                full spectrum of web development.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-6">
              {[
                { value: "5+", label: "Years Experience" },
                { value: "30+", label: "Projects Shipped" },
                { value: "100%", label: "Client Satisfaction" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-3xl font-extrabold bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
                    {stat.value}
                  </p>
                  <p className="text-gray-500 text-sm mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-6 py-2.5 text-sm font-semibold text-gray-950 hover:bg-cyan-400 transition-colors"
              >
                Contact Me
              </a>
              <a
                href="/resume.pdf"
                className="inline-flex items-center gap-2 rounded-full border border-gray-600 px-6 py-2.5 text-sm font-semibold text-gray-300 hover:border-cyan-500 hover:text-cyan-400 transition-colors"
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
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
