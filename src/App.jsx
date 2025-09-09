import { useEffect } from 'react'
import Header from './components/Header'
import NavBar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import Aos from 'aos'
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    Aos.init()
  }, [])

  return (
    <>
      <NavBar />
      <Header />
      <main className="position-relative rounded-top-5" style={{ top: '-30px' }}>
            <div className="direction fs-1 position-relative">
                <a href="#about-me" className="arrow position-absolute position-absolute start-50 translate-middle mt-1">
                    <i className="fa-solid fa-chevron-up"></i>
                </a>
            </div>

            <About />
            <Skills />
            <Projects />
            <Contacts />
      </main>
      <Footer />
    </>
  )
}

export default App
