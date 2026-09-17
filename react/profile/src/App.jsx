import React from 'react'
import CardList from './components/CardList'

function App() {
  const users = [
    {
      id:1,
      name:"홍길동",
      age: 25,
      job: "프론트엔드 개발자",
      img:"/img/man1.jpg"
    },
    {
      id:2,
      name:"김철수",
      age: 31,
      job: "UI/UX 디자이너",
      img:"/img/man2.jpg"
    }
  ]
  return (
    <div>
      <CardList users= {users}/>
    </div>
  )
}

export default App