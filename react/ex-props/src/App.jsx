import React, { useState } from 'react'
import Toolbar from "./components/Toolbar"
import ContentPanel from './components/ContentPanel'

function App() {
  const [theme, setTheme] = useState("light");
  const [count, setCount] = useState(0);
  const toggleTheme = () => {
    setTheme((t)=>(t==="light" ? "dark" : "light"))
  }
  return (
    <div className={`app ${theme}`}>
      <header>
        <h1>Props 예제</h1>
        <span className="badge">상태는 App  ·  Props로 전달</span>
      </header>
      <Toolbar
      theme={theme}
      onToggleTheme = {toggleTheme}
      count = {count}
      onIncrement = {() => setCount ((c) => c+1)}
      />
      <ContentPanel theme={theme} count={count}/>
    </div>
  )
}

export default App