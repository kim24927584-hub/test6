import React from 'react'
import Layout from './components/Layout'
import {Routes, Route} from "react-router-dom"
import About from "./pages/About"
import PortFolio from "./pages/Portfolio"
import Contact from "./pages/Contact"
import NotFound from "./pages/NotFound"
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route path="about" element={<About/>}/>
        <Route path="portfolio" element={<PortFolio/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="*" element={<NotFound/>}/>

      </Route>
    </Routes>
  )
}

export default App