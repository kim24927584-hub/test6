import React, { createContext, useContext, useState } from 'react'

const AppContext = createContext();

export function AppProvider({children}) {
  const [count,setCount] = useState(0);
  const [user, setUser] = useState({
     name: "홍길동",
     age:25,
  });

  const updateUserName = (name) => setUser({...user, name});
  // ...user  기존의 user 를 펼쳐 놓고 name을 변경 
  const updateUserAge = (age) => setUser({...user, age});
  //기존의 user 를 펼쳐 놓고 age 변경

  const incrementCount = () => setCount(count + 1);
  const decrementCount = () => setCount(count - 1);
  const resetCount = () => setCount(0);

  const value = {
    
    user,
    updateUserName,
    updateUserAge,
    count,
    incrementCount,
    decrementCount,
    resetCount,
  }
  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
  const context = useContext(AppContext)
  if (context === null) {
    throw new Error('useAppContext는 AppProvider 안에서만 사용할 수 있습니다')
  }
  return context
}

export default AppContext