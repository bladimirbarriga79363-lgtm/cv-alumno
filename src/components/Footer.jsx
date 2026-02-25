export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border py-8 px-6 md:px-12 bg-surface">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-muted">
          <span className="text-cyan">Bladimir Barriga</span> — Construido con React + Tailwind CSS
        </p>

        <div className="flex gap-6">
          
          <a
            href="https://github.com/bladimirbarriga79363-lgtm"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-muted hover:text-cyan transition-colors duration-200"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}
