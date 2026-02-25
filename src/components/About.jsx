export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-12 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-start">

        {/* Columna izquierda */}
        <div>
          <p className="font-mono text-xs text-cyan tracking-widest uppercase mb-4">
            // 01 — sobre mí
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-light leading-tight">
            ¿Quién
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-teal-400">
              soy?
            </span>
          </h2>

          {/* Foto placeholder */}
          <div className="mt-10 w-52 h-52 overflow-hidden border border-border">
          <img
          src="/YO.jpg"
          alt="Foto Personal"
          className="w-full h-full object-cover"
  />
</div>
        </div>

        {/* Columna derecha */}
        <div className="flex flex-col gap-8 md:pt-16">
          {/* Descripción personal */}
          <p className="text-base font-light text-soft leading-relaxed">
            Mi nombre es Bladimir Barriga, y estoy acutalmente cursando la carrera de Ingeniería en Sistemas Computacionales en el Instituto Tecnológico de Morelia (ITM). Me apasiona el desarrollo de software y la creación de soluciones tecnológicas innovadoras. 
            Lo que me motivó a estudiar esta carrera fue el interés de poder resolver problemas mediante la ayuda del software.
            Me interesa mucho siempre aprender nuevas herramientas y tecnologías y así expandir mis conocimientos al saber utilizar estas herramientas y tecnologías.
          </p>

          <p className="text-base font-light text-soft leading-relaxed">
            Personalmente soy un poco mejor en la parte del backend, pero me gustaría mucho ser mejor en la parte visual, realizar
            cosas más llamativas para la experiencia del usuario. Para lograr esto trato de aprender y practicar lo más que puedo de manera autónoma con ayuda de información en internet (videos, cursos, etc). 
            
          </p>

          {/* Datos */}
          <div className="border-t border-border pt-8 grid grid-cols-2 gap-y-5 gap-x-6">
            {[
              { label: 'Carrera', value: 'Ingeniería en Sistemas Computacionales' },
              { label: 'Semestre', value: '7° semestre' },
              { label: 'Universidad', value: 'Instituto Tecnológico de Morelia (ITM)' },
              { label: 'Ciudad', value: 'Morelia, Michoacán' },
              { label: 'Email', value: 'bladimirbarriga79363@gmail.com' },
              { label: 'GitHub', value: 'bladimirbarriga79363-lgtm' },
            ].map((item) => (
              <div key={item.label}>
                <p className="font-mono text-xs text-cyan tracking-widest uppercase mb-1">
                  {item.label}
                </p>
                <p className="text-sm text-light font-medium">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
