// ── Edita con tus proyectos reales (académicos o personales) ──
const projects = [
  {
    number: '01',
    type: 'Académico',
    title: 'Página web de mi preparatoria',
    description:
      'Describe el proyecto: Fue una página web desarrollada para mi preparatoria (COBAEM plantel Gabriel Zamora). Era una página web informativa para que los jóvenes a punto de entrar a la prepa vieran todo lo que ofrecía el plantel. La desarrollé en equipo con otras 2 personas para la materia de páginas web.',
    tags: ['HTML', 'CSS',],
    links: {
      demo: '#',
      
    },
  },
  {
    number: '02',
    type: 'Personal',
    title: 'Página web de empresa familiar',
    description:
      'Un proyecto que hice por mi cuenta para prácticar ya que en ese momento la empresa de mi familia necesitaba una página web para exponer sus productos y poder ver lo que ofrecían y ofrecer información de contacto para poder realizar una cotización o apartar ciertas preventas de algún producto.',
    tags: ['HTML y CSS', 'JavaScript', 'MySQL'],
    links: {
      demo: null,
      
    },
  },
  {
    number: '03',
    type: 'Académico',
    title: 'App web (EcoGastro)',
    description:
      'Proyecto desarrollado en equipo dentro de la universidad el semestre pasado en la materia de Ingeniería de Software, era un sistema presupuestador alimenticio para administrar un plan semanal de recetas, utilizar bien lo que tienes en casa y cuanto gastarías en todo esto. Lo hicimos en base a la metodología Scrum y mi papel fue de scrum master y desarrollador.',
    tags: ['JavaScript', 'Node.js', 'PostgreSQL'],
    links: {
      demo: null,
      
    },
  },
]

const typeColor = {
  'Académico': 'text-blue-400 bg-blue-400/10 border-blue-400/20',
  'Personal':  'text-cyan bg-cyan/10 border-cyan/20',
  'Equipo':    'text-purple-400 bg-purple-400/10 border-purple-400/20',
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 px-6 md:px-12 max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-16">
        <p className="font-mono text-xs text-cyan tracking-widest uppercase mb-4">
          // 03 — proyectos
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-light leading-tight">
          Lo que he
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-teal-400">
            construido
          </span>
        </h2>
      </div>

      {/* Grid proyectos */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((project) => (
          <article
            key={project.number}
            className="group bg-card border border-border p-6 flex flex-col gap-4 hover:border-cyan/50 transition-all duration-300"
          >
            {/* Filas superiores */}
            <div className="flex items-start justify-between">
              <span className="font-mono text-4xl font-bold text-border group-hover:text-cyan/20 transition-colors duration-300">
                {project.number}
              </span>
              <span
                className={`font-mono text-xs px-2 py-1 border rounded-sm ${typeColor[project.type] ?? typeColor['Personal']}`}
              >
                {project.type}
              </span>
            </div>

            {/* Título */}
            <h3 className="font-display text-xl font-bold text-light leading-snug">
              {project.title}
            </h3>

            {/* Descripción */}
            <p className="text-sm font-light text-soft leading-relaxed flex-1">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-xs px-2 py-1 bg-surface border border-border text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-5 pt-3 border-t border-border">
              {project.links.github && project.links.github !== '#' && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-soft hover:text-cyan transition-colors duration-200"
                >
                  GitHub →
                </a>
              )}
              {project.links.demo && project.links.demo !== '#' && (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-soft hover:text-cyan transition-colors duration-200"
                >
                  Demo →
                </a>
              )}
              
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
