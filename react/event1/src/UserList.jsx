import React from 'react'
import User from './User'

function UserList({users, onRemove, onToggle}) {
  
  return (
    <div>
      <div>
        {users.map(function(user){
          return <User user={user} key={user.id} onRemove={onRemove} onToggle={onToggle}/>
        })}
      </div>
    </div>
  )
}

export default UserList