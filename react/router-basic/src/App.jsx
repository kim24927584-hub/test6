import React from 'react'
import {BrowserRouter, Link, Route, Router, Routes} from "react-router-dom"
import Home from '../../router/src/pages/Home'
import Products from './pages/Products'
import About from '../../router/src/pages/About'
import ProductDetail from './pages/ProductDetail'
function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">홈</Link>
        <Link to="/products">상품</Link>
        <Link to="/about">소개</Link>

      </nav>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/product/:id' element={<ProductDetail/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App