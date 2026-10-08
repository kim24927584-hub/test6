import React from 'react'
import { AppProvider, useApp } from './context/AppContext'
import Toolbar from './components/Toolbar';
import ContentPanel from './components/ContentPanel';

function AppShell(){
  const {theme} = useApp();
  return(
   <div className={`app ${theme}`}>
      <header>
         <h1>Props 예제</h1>
         <span className="badge">상태는 App · props로 전달</span>
      </header>
      <Toolbar />
      <ContentPanel/>
    </div>
    )
}
function App() {
  return (
    <AppProvider>
      <AppShell/>
    </AppProvider>
  )
}

export default App