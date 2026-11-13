import React, { useState } from 'react'

function Card({card, onDragStart, onDragEnd, onDelete, onUpdate}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(card.text);

  const handleSave = () =>{
    const trimmed = editText.trim();
    if(trimmed && trimmed !== card.text){
      onUpdate(card.id, trimmed);

    }else if(!trimmed){
      setEditText(card.text);
    }
    setIsEditing(false);   // ← 이 줄 추가

  }
  const handleKeyDown = (e) =>{
    if(e.key === "Enter"){
      e.preventDefault();
      handleSave();
    }
    if(e.key === "Escape"){
      setEditText(card.text);
      setIsEditing(false);
    }
  }
  // 수정상태
  if(isEditing){
    return(
      <div className="card card-editing">
        <textarea name="" id=""
          value={editText}
          onChange={(e)=>setEditText(e.target.value)}
          onBlur={handleSave}
          onKeyDown={handleKeyDown}
          autoFocus
          rows={3}
        />
      </div>
    );
  }
  return (
    <div className='card'
    draggable
    onDragStart={(e)=>onDragStart(e,card)}
    onDragEnd={onDragEnd}
    >
      <p className='card-text' onDoubleClick={()=>setIsEditing(true)}>{card.text}</p>
      <button className='card-delete'
      onClick={()=>onDelete(card.id)}
      >x</button>
    </div>
  )
}

export default Card