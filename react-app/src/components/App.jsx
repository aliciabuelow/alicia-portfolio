import Navbar from './Navbar'
import Hero from './Hero'
import FeaturedProjects from './FeaturedProjects'
import MoreProjects from './MoreProjects'
import About from './About'
import Skills from './Skills'
import Contact from './Contact'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/global.css'

function App() {
  return (
   <div>
    <Navbar />
    <Hero />
    <FeaturedProjects />
    <MoreProjects />
    <About />
    <Skills />
    <Contact />

<footer>
  Designed and built by Alicia Buelow. Open-sourced on GitHub.
</footer>

    </div>
  )
}

export default App
