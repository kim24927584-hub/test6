import React from 'react'
import { useRef } from 'react';
import CreateUser from './CreateUser';
import UserList from './UserList';
import { useState } from 'react';

function App() {
  const [inputs, setInputs] = useState({
    username:"",
    email:""
  })
  const {username, email} = inputs;
  const onChange = function(e){
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name]:value
    });
  }
   const [users, setUsers] = useState([
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com'
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com'
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com'
    }
  ]);
  const nextId = useRef(4);
  const onCreate = function(){
    const user={
      id:nextId.current,
      username,
      email
    };
    setUsers([...users,user])

    setInputs({
      username:"",
      email:""
    })
    nextId.current += 1;
  };
  const onRemove = function(userId){
    setUsers(
      users.filter(function(user){
        return user.id !== userId
      })
    )
  }
  const onToggle = function(userId){
    setUsers(
      users.map(function(user){
        user.id === userId ? user.active = !user.active : user;
      })
    )
  }
  return (
    <div>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
    </div>
  )
}

export default App