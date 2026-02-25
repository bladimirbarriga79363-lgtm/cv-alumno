import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Activities from './components/Activities'
import Education from './components/Education'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-dark font-body text-light min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Activities />
        <Education />
      </main>
      <Footer />
    </div>
  )
}

export default App
