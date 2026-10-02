import React from 'react'
import {NavLink, Outlet} from "react-router-dom"
function Layout() {
  const navLinkClass = function(isActive){
    return isActive ? "nav-link nav-link--active" : "nav-link";
  }
  return (
    <div className='layout'>
      <header>
        <NavLink to="/">
          RouterSimple
        </NavLink>
        <nav>
          <NavLink to="/" className={navLinkClass} end>홈</NavLink>
          <NavLink to="/about" className={navLinkClass}>소개</NavLink>
          <NavLink to="/portfolio" className={navLinkClass}>포트폴리오</NavLink>
          <NavLink to="/contact" className={navLinkClass}>문의</NavLink>
        </nav>
      </header>

      <main>
        <Outlet/>
      </main>
      <footer>푸터</footer>

    </div>
  )
}

export default Layout