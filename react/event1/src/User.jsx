import React from 'react'

function User({user, onRemove, onToggle}) {
  return (
    <div>
      <b 
        style={{
          cursor:"pointer",
          color:user.active ? "green": "black"
        }}
      >{user.username}</b><span>({user.email})</span>
      <button onClick={function(){onRemove(user.id)}}>삭제</button>
      <button onClick={function(){onToggle(user.id)}}>수정</button>
    </div>
  )
}

export default User