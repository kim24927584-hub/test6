import React from 'react'
import UserSection from './UserSection'
import CounterSection from './CounterSection'

function MainContent() {
  return (
    <main className="main-content">
      <CounterSection/>
      <UserSection/>
    </main>
  )
}

export default MainContent