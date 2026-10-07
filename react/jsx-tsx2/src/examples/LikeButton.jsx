import React, { useState } from 'react'

function LikeButton({label}) {
  const [liked, setLiked] = useState(false);
  return (
    <button type='button' className='btn'
    onClick={()=>setLiked(!liked)}>
{liked ? '🤍 취소' : `❤️ ${label}`}      
    </button>
  )
}

export default LikeButton