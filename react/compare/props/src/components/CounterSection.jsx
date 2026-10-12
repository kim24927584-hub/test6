import React from 'react'
import Counter from './Counter'

function CounterSection({
  count,
  decrementCount,
  incrementCount,
  resetCount
}) {
  return (
    <section className='section'>
      <h2>카운터</h2>
      <Counter 
        count={count}
        incrementCount={incrementCount}
        decrementCount = {decrementCount} 
        resetCount={resetCount}
      />
    </section>
  )
}

export default CounterSection