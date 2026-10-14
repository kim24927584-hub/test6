import React from 'react'
import { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import './Header.css';
import { NavLink } from 'react-router-dom';


function Header({isScrolled}) {
    const [isMenuOpen,setIsMenuOpen] = useState(false);

    const menuItems = [
    { name: '홈', to:'/' },
    { name: '소개', to: '/about' },
    { name: '기술', to: '/skills'  },
    { name: '프로젝트', to: '/projects' },
    { name: '연락처', to: '/contact' },
  ]
  const handleMenuClick = ()=> {
        setIsMenuOpen(!isMenuOpen)
  }

  const handleLinkClick = ()=> {
        setIsMenuOpen(false)
  }

  return (
    <header className={`header ${isScrolled ? 'scrolled':''}`}>
        <div className="container">
            <nav className="nav">
                <div className="logo">
                    <NavLink to="/" end onClick={handleLinkClick}>
                        Portfolio
                    </NavLink>
                </div>
                <ul className={`nav-menu ${isMenuOpen ? 'active':''}`}>
                    {menuItems.map((item, index) =>(
                        <li key={index}>
                          <NavLink
                            to={item.to}
                            end={item.to === '/'}
                            // end 속성을 주어 item.to 정확히 '/' 메인홈인식
                            onClick={handleLinkClick}
                            className={({ isActive }) => (isActive ? 'active' : undefined)}
                            >
                            {item.name}
                            </NavLink>
                        </li>
                        //handleLinkClick : 메뉴 링크 클릭 -> 메뉴닫기
                    ))}
                </ul>
                <button className="menu-toggle" onClick={handleMenuClick}>
                    {isMenuOpen ? <FaTimes/> : <FaBars/>}
                    {/* handleMenuClick : 햄버거 버튼 클릭 -> 메뉴토글 */}
                </button>
                {/* 삼항 연산자 : 열려있을때는 X아이콘(fatime) 닫혀있을때는 햄버거(FaBars) */}

            </nav>
        </div>
    </header>
  )
}

export default Header

