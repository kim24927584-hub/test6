type Item = {
  id: number,
  name: string,
  price: number
}
type Props = {
  items: Item[]
}

export default function ProductList({ items } : Props) {
  return (
    <ul>
      {items.map((item : Item) => (
        <li key={item.id}>
          {item.name} - {item.price}원
        </li>
      ))}
    </ul>
  );
}