import React from 'react'
import Column from './Column'

function KanbanBoard({columns, cards, onAddCard}) {
  return (
  
    <main className='board'>
    {columns.map((column)=>(
        <div key={column.id} className='column-wrapper'>
            <Column 
                column={column}
                cards={cards.filter((c) =>c.columnId === column.id)}
                onAddCard={onAddCard}
            />

        </div>
     ))}   
    </main>
  )
}

export default KanbanBoard