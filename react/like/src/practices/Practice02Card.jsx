import React, { useState } from 'react'

const products = [
  { id: 1, name: '노트북', price: 1200000, quantity: 1 },
  { id: 2, name: '마우스', price: 30000, quantity: 1 },
  { id: 3, name: '키보드', price: 80000, quantity: 1 },
];
function Practice02Card() {
  const [cart, setCart] = useState(products);
  const increase = function(id){
    setCart(
      cart.map(function(item){
        return item.id === id ? {...item,quantity:item.quantity+1} : item
      })
    )
  }
  const decrease = function(id){
    setCart(
      cart.map(function(item){
        return item.id === id ? {...item,quantity:Math.max(1, item.quantity-1)} : item
      })
    )
  }
  return (
    <div className='panel'>
      {cart.map((item) => {
        return (
        <div key={item.id}>
          <span>{item.price}원</span>
          <button 
          onClick={()=>increase(item.id)}
          >
            +
          </button>
          <strong>{item.name}</strong>
          <span>{item.quantity}</span>
          <button 
          onClick={()=>decrease(item.id)}
          >
            -
          </button>
        </div>
        );
      })}
    </div>
  )
}

export default Practice02Card