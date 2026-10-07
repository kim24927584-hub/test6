import React from 'react'
export type CategoryFilter = "all" | "IT" | "생활";
export type Product={id:number, name:string, category:"IT"|"생활"};

type Props = {items: Product[]; filter:CategoryFilter};
function ProductFilter({items, filter} : Props) {
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