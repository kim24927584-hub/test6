import React from 'react'
import InputSample from './InputSample'
import UserList from './UserList'
const users = [
    {
      id:1,
      username:"velopert",
      email:"public.velopert@gmail.com"
    },
    {
      id:2,
      username:"tester",
      email:"tester@example.com"
    },
    {
      id:3,
      username:"liz",
      email:"liz@example.com"
    }
  ]
function App() {
  return (
    <div>
      {/* <InputSample/> */}
      <UserList users={users}/>
    </div>
  )
}

export default App