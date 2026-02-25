// ── Actividades extracurriculares, hackathons, comunidades, etc. ──

const activities = [
  {
    title: 'Ingles intermedio B1',
    organization: 'Easy English Classes Uruapan, Mich.',
    period: '2022',
    description:
      'Tomé por 1 año el curso de inglés hasta un nivel B1 en la escuela: Easy English Classes Uruapan, Mich.',
  },
  
  {
    title: 'Curso de Python',
    organization: 'Space Karani',
    period: '2025',
    description:
      'Un curso de python que tomé hace 1 año impartido por un experto en python donde aprendí lo esencial de este lenguaje de programación, lo tomé para poder aprender un nuevo lenguaje de programación y así poder estar mejor preparado.',
  },
]

export default function Activities() {
  return (
    <section id="activities" className="py-24 md:py-32 bg-surface px-6 md:px-12">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-16">
          <p className="font-mono text-xs text-cyan tracking-widest uppercase mb-4">
            // 04 — actividades
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-light leading-tight">
            Más allá
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-teal-400">
              del aula
            </span>
          </h2>
        </div>

        {/* Cards actividades */}
        <div className="grid md:grid-cols-3 gap-5">
          {activities.map((act, i) => (
            <div
              key={i}
              className="bg-card border border-border p-6 flex flex-col gap-4 hover:border-cyan/40 transition-colors duration-300"
            >
              {/* Icon + period */}
              <div className="flex items-start justify-between">
                <span className="text-3xl">{act.icon}</span>
                <span className="font-mono text-xs text-muted bg-surface border border-border px-2 py-1">
                  {act.period}
                </span>
              </div>

              <div>
                <h3 className="font-display text-lg font-bold text-light">{act.title}</h3>
                <p className="font-mono text-xs text-cyan mt-1">{act.organization}</p>
              </div>

              <p className="text-sm font-light text-soft leading-relaxed">
                {act.description}
              </p>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  )
}
