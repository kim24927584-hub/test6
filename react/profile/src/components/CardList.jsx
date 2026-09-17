import React from 'react'
import Card from './Card'

function CardList({users}) {
  return (
    <div style={{
      display:'flex',
        flexWrap:"wrap",
        gap:"1.25rem"
    }}>
      {users.map(function(user){
          return <Card key={user.id} name={user.name} age={user.age} img={user.img}/>
      })}
    </div>
  )
}

export default CardList