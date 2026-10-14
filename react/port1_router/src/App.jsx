import React, { useEffect, useState } from 'react'
import About from './components/About'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
useEffect(()=>{
 // 1. 스크롤이 일어날 때 마다 실행할 함수 정의
  const handleScroll = () =>{
      setIsScrolled(window.scrollY > 50)
      // $(window).scrollTop();
      //세로 스크롤 위치가 50px 이상이면 true ,아니면false
    }
    window.addEventListener('scroll', handleScroll);  
    
    //컴포넌트가 사라질 때  실행될 정리함수(cleanup) 함수 - 메모리 누수 방지 
    return  () => window.removeEventListener('scroll', handleScroll);

   
},[]);
//[] 빈의존성 배열 딱한번만 이벤트 리스너를 등록 



  return (
    <div className='App'>
      <Header isScrolled={isScrolled}/>
      <Routes>
        <Route path='/' element={<Hero/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </div>
  )
}

export default App