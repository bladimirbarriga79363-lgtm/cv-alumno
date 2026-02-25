# CV Estudiante — React + Tailwind CSS

Página web personal tipo CV adaptada para estudiante universitario.
Diseño **dark mode** con acento en cian. Construida con React + Tailwind CSS.

---

## 🚀 Cómo iniciar

```bash
# 1. Instalar dependencias
npm install

# 2. Servidor de desarrollo
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173)

---

## 📁 Componentes

```
src/components/
├── Navbar.jsx        → Navegación fija (dark)
├── Hero.jsx          → Portada con nombre + status
├── About.jsx         → Bio + datos personales
├── Skills.jsx        → Stack con indicador de nivel
├── Projects.jsx      → Proyectos académicos/personales
├── Activities.jsx    → Actividades extracurriculares
├── Education.jsx     → Carrera + certificados
└── Footer.jsx        → Pie de página
```

---

## ✏️ Qué editar

| Archivo | Qué cambiar |
|---|---|
| `Navbar.jsx` | Tu nombre en el logo `<TU_NOMBRE />` |
| `Hero.jsx` | Nombre, apellido, carrera, ciudad |
| `About.jsx` | Bio, carrera, semestre, universidad, email, GitHub |
| `Skills.jsx` | Tecnologías y nivel (Aprendiendo / Practicando / Cómodo) |
| `Projects.jsx` | Título, descripción, tags, links de GitHub/demo |
| `Activities.jsx` | Hackathons, clubes, cursos extracurriculares |
| `Education.jsx` | Carrera, universidad, materias relevantes |
| `Footer.jsx` | Tu nombre, GitHub, LinkedIn |

---

## 🌐 Subir a Vercel

1. Haz `git push` de tu proyecto a GitHub
2. Ve a [vercel.com](https://vercel.com) → **New Project**
3. Importa tu repositorio — Vercel detecta Vite automáticamente
4. Click en **Deploy** ✅
