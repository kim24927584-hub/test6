import React from 'react'
import CounterSection from './CounterSection'
import UserSection from './UserSection'

function MainContent() {
  return (
   <main className="main-content">
    <CounterSection/>
    <UserSection/>
   </main>
  )
}

export default MainContent