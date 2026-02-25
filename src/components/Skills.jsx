// ── Niveles: "Aprendiendo" | "Practicando" | "Cómodo" ──
const skillGroups = [
  {
    category: 'Lenguajes',
    skills: [
      { name: 'JavaScript', level: 'Practicando' },
      { name: 'Python', level: 'Cómodo' },
      { name: 'Java', level: 'Cómodo' },
      { name: 'TypeScript', level: 'Aprendiendo' },
      { name: 'C / C++', level: 'Aprendiendo' },
    ],
  },
  {
    category: 'Frontend',
    skills: [
      { name: 'React', level: 'Practicando' },
      { name: 'Tailwind CSS', level: 'Aprendiendo' },
      { name: 'HTML & CSS', level: 'Cómodo' },
      { name: 'Next.js', level: 'Aprendiendo' },
    ],
  },
  {
    category: 'Backend / BD',
    skills: [
      { name: 'Node.js', level: 'Practicando' },
      { name: 'MySQL', level: 'Cómodo' },
      { name: 'PostgreSQL', level: 'Cómodo' },
      { name: 'REST APIs', level: 'Practicando' },
    ],
  },
  {
    category: 'Herramientas',
    skills: [
      { name: 'Git & GitHub', level: 'Cómodo' },
      { name: 'VS Code', level: 'Cómodo' },
      { name: 'Figma', level: 'Aprendiendo' },
      { name: 'Linux básico', level: 'Practicando' },
    ],
  },
]

// Color del badge según el modo
const levelColor = {
  'Aprendiendo': 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20',
  'Practicando': 'text-blue-400 bg-blue-400/10 border-blue-400/20',
  'Cómodo':      'text-cyan bg-cyan/10 border-cyan/20',
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 bg-surface px-6 md:px-12">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-16">
          <p className="font-mono text-xs text-cyan tracking-widest uppercase mb-4">
            // 02 — habilidades
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-light leading-tight">
            Stack &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-teal-400">
              tecnologías
            </span>
          </h2>

          {/* Leyenda niveles */}
          <div className="flex flex-wrap gap-3 mt-6">
            {Object.entries(levelColor).map(([level, color]) => (
              <span
                key={level}
                className={`font-mono text-xs px-3 py-1 border rounded-sm ${color}`}
              >
                {level}
              </span>
            ))}
          </div>
        </div>

        {/* Grid categorías */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillGroups.map((group) => (
            <div key={group.category} className="bg-card border border-border p-5">
              <h3 className="font-mono text-xs text-cyan uppercase tracking-widest mb-5 pb-3 border-b border-border">
                {group.category}
              </h3>
              <ul className="flex flex-col gap-3">
                {group.skills.map((skill) => (
                  <li key={skill.name} className="flex items-center justify-between gap-2">
                    <span className="text-sm text-soft font-medium">{skill.name}</span>
                    <span
                      className={`font-mono text-xs px-2 py-0.5 border rounded-sm ${levelColor[skill.level]}`}
                    >
                      {skill.level}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
