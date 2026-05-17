import CursorGlow from './components/CursorGlow'
import Navbar from './components/Navbar'
import ScrollProgress from './components/ScrollProgress'
import SpaceBackground from './components/SpaceBackground'
import Stars from './components/Stars'

import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Education from './sections/Education'
import Certificates from './sections/Certificates'
import Contact from './sections/Contact'

const App = () => {
  return (
    <>
      <CursorGlow />

      <ScrollProgress />

      <Stars />

      <SpaceBackground />

      <Navbar />

      <Hero />

      <About />

      <Skills />

      <Projects />

      <Education />

      <Certificates />

      <Contact />
    </>
  )
}

export default App