import React, { useState } from 'react'

interface Todo{
  id: number,
  text: string,
  done: boolean
}
interface TodoItemProps{
  todo: Todo,
  onToggle: (id:number)=>void
}
function TodoItem({todo, onToggle}:TodoItemProps){

  return (
    <label htmlFor="">
      <input 
      type="checkbox" 
      checked={todo.done}
      onChange={()=>onToggle(todo.id)}
      />
      {todo.text}
    </label>
  )
}
function App() {
  const [todos, setTodos] = useState<Todo[]>([
    {
      id:1,
      text: "빨래 개기",
      done: false
    }
  ]);
  const onToggle = (id: number) => {
    setTodos(
      todos.map((t)=> (t.id === id ? {...t, done: !t.done} : t))
    )
  }
  
  return (
    <div>
      <ul>
      {todos.map((t)=>{
        return (
          <li key={t.id}>
            <TodoItem todo={t} onToggle={onToggle}/>
          </li>
        )
      })}
      </ul>
    </div>
  )
}

export default App