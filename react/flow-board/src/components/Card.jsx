import React from 'react'

function Card({card}) {
  return (
    <div className='card'>
      <p className='card-text'>{card.text}</p>
      <button className='card-delete'>x</button>
    </div>
  )
}

export default Card