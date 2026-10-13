import React, { useEffect, useState } from 'react'
import About from './components/about'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Header from './components/Header'

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(()=>{
    const handleScroll=()=>{
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll",handleScroll);
    return ()=>window.removeEventListener("scroll",handleScroll)
  },[]);
  return (
    <div className='app'>
      <Header isScrolled={isScrolled}/>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      
    </div>
  )
}

export default App