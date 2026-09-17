import React from 'react'
import User from './User'

function UserList({users}) {
  
  return (
    <div>
      <div>
        {users.map(function(user){
          return <User user={user} key={user.id}/>
        })}
      </div>
    </div>
  )
}

export default UserList