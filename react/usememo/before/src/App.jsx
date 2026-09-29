import React, { useState } from 'react'

function App() {
  const [number, setNumber] = useState(1);
  const [count, setCount] = useState(0);
  console.log("App 렌더링");

  const double = number *2;
  return (
    <div>
      <h2>결과: {double}</h2>

      <button onClick={()=>{setNumber(number+1)}}>number 증가</button>
      <button onClick={()=>{setCount(count+1)}}>count 증가</button>

      <p>number: {number}</p>
      <p>count: {count}</p>
    </div>
  )
}

export default App