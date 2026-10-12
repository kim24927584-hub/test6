import React from 'react'

function Counter({
    count,
    decrementCount,
    incrementCount,
    resetCount,
}) {
  return (
    <div className='counter'>
        <div className="counter-display">{count}</div>
        <div className="button-group">
            <button onClick={decrementCount}>-</button>
            <button onClick={resetCount}>Reset</button>
            <button onClick={incrementCount}>+</button>
        </div>
    </div>
  )
}

export default Counter