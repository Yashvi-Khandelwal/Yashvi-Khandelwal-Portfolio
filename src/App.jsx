import { useState } from 'react'
import { NavBar } from './components/NavBar'
import { Home } from './components/Home'
import { About } from './components/About'
import Timeline from './components/Experience'
import experiences from './data/experience'
import { ContactForm } from './components/ContactForm'

function App() {

  return (
    <>
      <NavBar></NavBar>
      <Home></Home>
      <About></About>
     <Timeline experiences={experiences} />
     <ContactForm></ContactForm>
    </>
  )
}

export default App
