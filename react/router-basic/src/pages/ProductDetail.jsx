import React from 'react'
import { useParams } from 'react-router-dom'

function ProductDetail() {
  const {id} = useParams();
  console.log(id);
  return (
    <div>
      <h1>상품 상세 페이지</h1>
      <p>상품 id 값 {id}</p>
    </div>
  )
}

export default ProductDetail