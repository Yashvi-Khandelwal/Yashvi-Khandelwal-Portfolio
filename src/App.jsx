import { NavBar } from './components/NavBar'
import { Home } from './components/Home'
import { ContactForm } from './components/ContactForm'
import { Experience } from './components/Experience'
import { About } from './components/About'

function App() {

  return (
    <>
      <NavBar />
      <section id="home" aria-label="Home Section"><Home /></section>
      <section id="about" aria-label="About Section"><About /></section>
      <section id="experience" aria-label="Experience Section"><Experience /></section>
      <section id="contact" aria-label="Contact Section"><ContactForm /></section>
    </>
  )
}

export default App
