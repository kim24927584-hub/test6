import React from 'react'

function test() {
  interface Product{
    id : number,
    name : string,
    price : number,
    sale? : boolean
  }
  const book: Product = {
    id: 123,
    name:  "전자레인지",
    price:  13000};

  interface Todo{
    id: number,
    text: string,
    done: boolean
  }
  const todos: Todo[] = [
    {
      id:123,
      text: "hello",
      done: true
    }
  ]
  return (
    <div>test</div>
  )
}

export default test






