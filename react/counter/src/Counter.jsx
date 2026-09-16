import React, { useState } from 'react'

function Counter() {
  const [like,setLike] = useState(false);

  const toggleLike = function(){
    setLike(!like);
  }
  return (
    <div>
      <h1 onClick={toggleLike}>{like?"좋아요":"좋아요 취소"}</h1>
      
      
    </div>
  )
}

export default Counter