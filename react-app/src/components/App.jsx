import Navbar from './Navbar'
import Hero from './Hero'
import FeaturedProjects from './FeaturedProjects'
import MoreProjects from './MoreProjects'
import About from './About'
import Contact from './Contact'

import '../styles/App.css'

function App() {
  return (
   <div className="App">
    <Navbar />
    <Hero />
    <FeaturedProjects />
    <MoreProjects />
    <About />
    <Contact />
    </div>
  )
}

export default App
