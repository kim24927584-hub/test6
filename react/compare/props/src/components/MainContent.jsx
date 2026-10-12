import React from 'react'
import UserSection from './UserSection'
import CounterSection from './counterSection'

function MainContent({ user, updateUserName, updateUserAge, count, decrementCount,incrementCount,resetCount}) {
  return (
    <main className="main-content">
      <CounterSection
        // user={user}
        // updateUserName={updateUserName}
        // updateUserAge={updateUserAge}
        count={count}
        incrementCount={incrementCount}
        decrementCount = {decrementCount} 
        resetCount={resetCount}
      />
    </main>
  )
}

export default MainContent