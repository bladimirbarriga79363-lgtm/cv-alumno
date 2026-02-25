const education = [
  {
    degree: 'Ingeniería en Sistemas Computacionales',
    institution: 'Instituto Tecnológico de Morelia (ITM)',
    period: '2023 — (en curso)',
    status: 'En curso',
    description:
      'Actualmente curso el 7° semestre. Y las áreas que me han gustado mucho y que disfruté el aprender fueron: Desarrollo de software, bases de datos, redes y sistemas operativos.',
    tags: ['Bases de Datos', 'Redes', 'Diseño de Software', 'Programación', 'Mátemáticas', 'Cálculo (Ciencias Básicas)'],
    images: [], 
  },
  {
    degree: 'Curso de manejo de drones',
    institution: 'Instituto Tecnológico de Morelia (ITM)',
    period: '2023',
    status: 'Completado',
    description:
      'Un curso que tomé dentro de la universidad para aprender a manejar drones, el curso se enfocaba en el manejo de drones para fotografía aérea y videografía, aprendí a manejar diferentes tipos de drones, a realizar vuelos seguros y a capturar imágenes y videos de alta calidad desde el aire. Actualmente también se manejar drones de uso agrícola para fumigación, monitoreo de cultivos y mapeo de parcelas.',
    tags: ['Teoría de vuelo', 'Tecnologías (simuladores de vuelo)', 'Prácticas de vuelo con drones reales'],
    
    images: [
      '/drone1.jpg',
      '/drone3.jpg',
      '/drone4.png',
    ],
  },
]

const statusColor = {
  'En curso':   'text-cyan bg-cyan/10 border-cyan/20',
  'Completado': 'text-green-400 bg-green-400/10 border-green-400/20',
}

export default function Education() {
  return (
    <section id="education" className="py-24 md:py-32 px-6 md:px-12 max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-16">
        <p className="font-mono text-xs text-cyan tracking-widest uppercase mb-4">
          // 05 — educación
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-light leading-tight">
          Formación
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-teal-400">
            académica
          </span>
        </h2>
      </div>

      {/* Cards educación */}
      <div className="flex flex-col gap-6">
        {education.map((item, index) => (
          <div
            key={index}
            className="bg-card border border-border p-6 md:p-8 hover:border-cyan/40 transition-colors duration-300"
          >
            {/* Encabezado */}
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
              <div>
                <h3 className="font-display text-2xl font-bold text-light">
                  {item.degree}
                </h3>
                <p className="font-mono text-sm text-cyan mt-1">{item.institution}</p>
              </div>
              <div className="flex items-center gap-3 flex-shrink-0">
                <span
                  className={`font-mono text-xs px-2 py-1 border rounded-sm ${statusColor[item.status] ?? statusColor['En curso']}`}
                >
                  {item.status}
                </span>
                <span className="font-mono text-xs text-muted border border-border px-3 py-1">
                  {item.period}
                </span>
              </div>
            </div>

            {/* Descripción */}
            <p className="text-sm font-light text-soft leading-relaxed mb-5">
              {item.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-xs px-3 py-1 border border-border text-muted hover:border-cyan/40 hover:text-cyan transition-colors duration-200"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Galería de imágenes */}
            {item.images && item.images.length > 0 && (
              <div className="mt-6 pt-6 border-t border-border">
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {item.images.map((src, i) => (
                    <div
                      key={i}
                      className="aspect-video overflow-hidden border border-border hover:border-cyan/40 transition-colors duration-300"
                    >
                      <img
                        src={src}
                        alt={`${item.degree} — foto ${i + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}