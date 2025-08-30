import { useEffect } from 'react'
import Header from './components/Header'
import NavBar from './components/Navbar';
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
      <min className="position-relative rounded-top-5" style={{ top: '-30px' }}>

      </min>
    </>
  )
}

export default App
