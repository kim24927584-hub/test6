import React from 'react'
import { useParams } from 'react-router-dom';

function ProductDetail() {
  const {id} = useParams();
  return (
    <div>
      <h1>상품 상세 페이지</h1>
      <p>
        선택한 상품 ID : {id}
      </p>
    </div>
  )
}

export default ProductDetail