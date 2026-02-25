export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 max-w-6xl mx-auto pt-16 overflow-hidden"
    >
      {/* Fondo decorativo — círculo difuminado */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 rounded-full bg-cyan/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-72 h-72 rounded-full bg-cyan/3 blur-3xl pointer-events-none" />

      {/* Tag estatus */}
      <div className="flex items-center gap-2 mb-8 animate-fade-in">
        <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
        <span className="font-mono text-xs text-cyan tracking-widest uppercase">
          Disponible para mejorar
        </span>
      </div>

      
      <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-extrabold leading-none text-light mb-4 animate-fade-up">
        Bladimir
        <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-teal-400">
          Barriga
        </span>
      </h1>

      
      <p className="font-mono text-sm md:text-base text-soft mt-6 mb-3 animate-fade-up">
        <span className="text-cyan">$</span> estudiante de{' '}
        <span className="text-light font-medium">Ingeniería en Sistemas Computacionales</span>
        
      </p>

      <p className="font-mono text-xs md:text-sm text-muted animate-fade-up">
        <span className="text-cyan">$</span> 7° semestre · Instituto Tecnológico de Morelia ·{' '}
        <span className="text-soft">Morelia, Michoacán</span>
        <span className="inline-block w-2 h-4 bg-cyan ml-1 align-middle animate-blink" />
      </p>

      {/* Botones */}
      <div className="flex flex-wrap gap-4 mt-12 animate-fade-up">
        <a
          href="#projects"
          className="px-7 py-3 bg-cyan text-dark text-sm font-display font-bold tracking-wide hover:bg-teal-300 transition-colors duration-300"
        >
          Ver proyectos
        </a>
        <a
          href="#about"
          className="px-7 py-3 border border-border text-soft text-sm font-display font-medium tracking-wide hover:border-cyan hover:text-cyan transition-all duration-300"
        >
          Sobre mí
        </a>
      </div>

      
      
    </section>
  )
}
