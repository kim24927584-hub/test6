import React from 'react'
import Example1 from './example1'
import Example2 from './example2'
import Example3 from './example3'
import Example4 from './example4'
import { useState } from 'react';

function App() {
  const[tab,setTab] = useState(1);
  return (
    <div className='app'>
      <h1>useMemo& useCallback</h1>
      <p style={{marginBottom:20, color:"#666"}}>콘솔에서 로그 확인</p>
      <div style={{marginBottom:20, flexWrap:"wrap",display:"flex",gap:8}}>
        <button className='btn btn-primary' onClick={()=>setTab(1)}>useMemo1</button>
        <button className='btn btn-primary' onClick={()=>setTab(2)}>useMemo2</button>
        <button className="btn btn-primary" onClick={()=>setTab(3)}>useCallback1</button>
        <button className="btn btn-primary" onClick={()=>setTab(4)}>useCallback2</button>
      </div>
      {tab === 1 && <Example1/>}
      {tab === 2 && <Example2/>}
      {tab === 3 && <Example3/>}
      {tab === 4 && <Example4/>}
      
    </div>
    
  )
}

export default App