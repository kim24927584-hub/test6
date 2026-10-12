import React from 'react'
import { useAppContext } from '../context/AppContext'

function Header() {
  const {user} = useAppContext();
  return (
    <header className='header'>
        <h1>Props Drilling 방식</h1>
         <p>
            현재 사용자 : {user.name} ({user.age}세) 
        </p>   
    </header>
  )
}

export default Header