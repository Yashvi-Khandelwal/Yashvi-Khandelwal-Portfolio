import { useState } from 'react'
import { NavBar } from './components/NavBar'
import { Home } from './components/Home'
import { About } from './components/About'
import Timeline from './components/Experience'
import experiences from './data/experience'
import { ContactForm } from './components/ContactForm'
import { Contact } from './components/Contact'

function App() {

  return (
    <>
      <NavBar></NavBar>
      <Home></Home>
      <About></About>
     <Timeline experiences={experiences} />
     <ContactForm></ContactForm>
     {/* <Contact></Contact> */}
    </>
  )
}

export default App
