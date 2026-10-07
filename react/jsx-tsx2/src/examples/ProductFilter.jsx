import React from 'react'

function ProductFilter({items, filter}) {
  const list = filter === "all" ? items : items.filter((p) => p.category === filter);
  return (
    <ul className='list'>
      {list.map((item)=>(
        <li key={item.id}>
          {item.name} <span className="tag">{item.category}</span>
        </li>
      ))}
    </ul>
  )
}

export default ProductFilter