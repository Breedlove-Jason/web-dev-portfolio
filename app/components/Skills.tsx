const skillGroups = [
  {
    category: "Frontend",
    color: "from-cyan-400 to-blue-500",
    border: "border-cyan-500/30",
    skills: [
      { name: "TypeScript", level: 92 },
      { name: "React / Next.js", level: 95 },
      { name: "Tailwind CSS", level: 90 },
      { name: "HTML5 / CSS3", level: 95 },
    ],
  },
  {
    category: "Backend",
    color: "from-violet-400 to-purple-600",
    border: "border-violet-500/30",
    skills: [
      { name: "Python", level: 88 },
      { name: "FastAPI", level: 82 },
      { name: "Node.js", level: 80 },
      { name: "REST APIs", level: 90 },
    ],
  },
  {
    category: "Tools & Platforms",
    color: "from-emerald-400 to-teal-500",
    border: "border-emerald-500/30",
    skills: [
      { name: "Git / GitHub", level: 93 },
      { name: "Docker", level: 75 },
      { name: "Vercel / AWS", level: 78 },
      { name: "PostgreSQL", level: 80 },
    ],
  },
];

const techIcons = [
  { name: "TypeScript", icon: "TS", bg: "bg-blue-600" },
  { name: "Next.js", icon: "N", bg: "bg-gray-800 border border-gray-600" },
  { name: "React", icon: "⚛", bg: "bg-cyan-700" },
  { name: "Tailwind", icon: "TW", bg: "bg-sky-600" },
  { name: "Python", icon: "🐍", bg: "bg-yellow-600" },
  { name: "FastAPI", icon: "FA", bg: "bg-teal-700" },
  { name: "Node.js", icon: "⬢", bg: "bg-green-700" },
  { name: "Docker", icon: "🐳", bg: "bg-blue-700" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-gray-950">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-3">
            My Expertise
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Skills &amp;{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            A curated toolkit built through years of building production
            applications across the full web stack.
          </p>
        </div>

        {/* Tech icon cloud */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {techIcons.map((tech) => (
            <div
              key={tech.name}
              className="group flex flex-col items-center gap-2"
            >
              <div
                className={`w-14 h-14 rounded-xl ${tech.bg} flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform`}
              >
                {tech.icon}
              </div>
              <span className="text-xs text-gray-500 group-hover:text-gray-300 transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </div>

        {/* Skill bars */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className={`rounded-2xl bg-gray-900 border ${group.border} p-6`}
            >
              <h3
                className={`text-lg font-semibold mb-6 bg-gradient-to-r ${group.color} bg-clip-text text-transparent`}
              >
                {group.category}
              </h3>
              <div className="space-y-5">
                {group.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full bg-gradient-to-r ${group.color}`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
