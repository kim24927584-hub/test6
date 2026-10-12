import React from 'react'
import { AppProvider } from './context/AppContext'
import Header from './components/Header'
import MainContent from './components/MainContent'

function App() {
  return (
    <AppProvider>
      <div className="app">
        <Header />
        <MainContent/>
      </div>
    </AppProvider>
  )
}

export default App