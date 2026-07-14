import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Experience from "./components/Experience"
import Certifications from "./components/Certifications"
import Achievements from "./components/Achievements"
import Resume from "./components/Resume"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground relative">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Certifications />
        <Achievements />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
