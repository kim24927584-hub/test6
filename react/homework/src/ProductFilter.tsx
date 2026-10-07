import { useState } from 'react';

type Product = {
  id: number,
  name: string,
  category: string
}
const products : Product[] = [
  { id: 1, name: '노트북', category: 'IT' },
  { id: 2, name: '텀블러', category: '생활' },
  { id: 3, name: '키보드', category: 'IT' },
];
type Category = "all"|"IT"|"생활";

export default function ProductFilter() {
  const [filter, setFilter] = useState<Category>('all');

  const list =
    filter === 'all'
      ? products
      : products.filter((p) => p.category === filter);

  
  const categories : Category[] = ["all", "IT", "생활"];
  return (
    <div>
      <div>
        {categories.map((item) => (
          <button key={item} onClick={()=>setFilter(item)}>
            {item}
          </button>
        ))}
      </div>
      <ul>
        {list.map((p) => (
          <li key={p.id}>
            {p.name}
            <span>{p.category}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}