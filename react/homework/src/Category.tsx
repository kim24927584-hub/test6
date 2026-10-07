import { useState } from 'react';

type Category = "all"|"IT"|"생활";
export default function Category() {
  const [category, setCategory] = useState<Category>('all');
  const categories : Category[] = ['all', 'IT', '생활'];

  return (
    <div>
      {categories.map((item) => (
        <button key={item} onClick={() => setCategory(item)}>
          {item}
        </button>
      ))}
      <p>선택: {category}</p>
    </div>
  );
}