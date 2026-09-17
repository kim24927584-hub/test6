import React from 'react'

function Card({name, age, img}) {
  return (
      <div style={{
        display:"flex",
        flexDirection:"column",
        border:"solid 1px black",
        borderRadius:"10px",
        boxShadow:"5px black"
      }}>
        
        <img src={img} alt="" style={{
          
        }}/>
        <div style={{
          padding: 15
        }}>
          <p style={{
            fontWeight:"bold",
            color:"black",
            paddingBottom:20  
          }}>{name}</p>
           나이: {age} 
        </div>
        
      </div>
  )
}

export default Card