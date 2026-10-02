import React from 'react'
import {Routes, Route} from "react-router-dom"
import Layout from './components/Layout'
import About from "./pages/About"
import Home from './pages/Home'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route path='about' element={<About></About> }/>
        <Route index element={<Home/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Route>
    </Routes>
  )
}

export default App