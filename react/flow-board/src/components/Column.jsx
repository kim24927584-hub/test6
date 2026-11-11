import React, { useState } from 'react'
import Card from './Card'
import CardForm from './CardForm';

function Column({column, cards, onAddCard}) {
  const [isAdding, setIsAdding] = useState(false);
  const handleAdd = (text) =>{
    onAddCard(column.id, text);
    setIsAdding(false);
  }
  return (
    <section className='column' style={{'--column-accent': column.color}}>
        <div className='column-header'>
            <h2 className='column-title'>{column.title}</h2>
            <span className='column-count'>{cards.length}</span>
        </div>
        <div className='column-cards'>
          {cards.map((card)=>(
            <Card
              key={card.id}
              card={card}
            />
          ))}
            
        </div>
        {isAdding ? (
          <CardForm
            onSubmit={handleAdd}
            onCancel={()=>setIsAdding(false)}
            placeholder="작업내용을입력하세요"          
          />
        ):(
          <button className='add-btn'
          onClick={()=>setIsAdding(true)}
           aria-label="카드추가" >
          +카드추가
        </button>
        )}
        
    </section>
  )
}

export default Column