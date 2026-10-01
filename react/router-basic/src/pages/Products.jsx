import React from 'react'
import {Link} from "react-router-dom"
const products = [
  { id: 1, name: "노트북", price: 1200000 },
  { id: 2, name: "마우스", price: 30000 },
  { id: 3, name: "키보드", price: 80000 },
];

function Products() {
  return (
    <div>
      {products.map(function(p){
        return(
          <div key={p.id}>
            <h3>{p.name}</h3>
            <p>{p.price.toLocaleString()}</p>
            <Link to={`/product/${p.id}`}>상세페이지 이동</Link>
          </div>
        )
      })}
    </div>
  )
}

export default Products