import React from 'react'

function Card({card, onDragStart, onDragEnd}) {
  return (
    <div className='card'
    draggable
    onDragStart={(e)=>onDragStart(e,card)}
    onDragEnd={onDragEnd}
    >
      <p className='card-text'>{card.text}</p>
      <button className='card-delete'>x</button>
    </div>
  )
}

export default Card