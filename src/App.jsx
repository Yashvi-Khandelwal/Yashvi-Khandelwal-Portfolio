import { NavBar } from './components/NavBar'
import { Home } from './components/Home'
import { About } from './components/About'
// import experiences from './data/experience'
import { ContactForm } from './components/ContactForm'
// import Timeline from "./components/Experience";

function App() {

  return (
    <>
      <NavBar />
      <section id="home"><Home /></section>
      <section id="about"><About /></section>
      {/* <section id="experience"><Timeline /></section> */}
      <section id="contact"><ContactForm /></section>
    </>
  )
}

export default App
