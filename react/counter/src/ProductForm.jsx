import React, { useState } from 'react'

function ProductForm() {
  const [input, setInput] = useState({title: "", price: "", category: ""})
  const {title, price, category} = input;
  const onChange = function(e){
    const {name, value} = e.target;
    setInput({
      ...input,
      [name]: value
    })

  }
  const reset = function(){
    setInput({
      title: " ",
      category: "",
      price: ""
    })
  }
  return (
    <div>
      <input onChange={onChange} type="text" name='category' value={category} /><br/>
      <input onChange={onChange} type="text" name='title' placeholder='상품명을 입력하세요' value={title} /> <br/>
      <input onChange={onChange} type="text" name='price'  value={price}/> 
      
      <p>[{input.category}]: {input.title} - {input.price}</p>
      
      <button onClick={reset}>초기화</button>
    </div>
  )
}

export default ProductForm