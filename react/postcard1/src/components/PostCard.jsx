function PostCard({ title,author,content,date }) {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '1rem',
      margin: '1rem 0',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}
    onMouseEnter={function(e){
      e.currentTarget.style.transform="translateY(-4px)";
      e.currentTarget.style.boxShadow="0 4px 12px rgba(0,0,0,0.15)"
    }}
    onMouseLeave={function(e){
      e.currentTarget.style.transform="translateY(0px)";
      e.currentTarget.style.boxShadow="0 4px 12px rgba(0,0,0,0.1)"
    }}
    >

        <h3 style={{marginTop:0}}>{title}</h3>
        <div style={{
            fontSize:'0.9rem',
            color:'#666',
            marginBottom:'0.5rem'
        }}>
             <span>작성자 : {author}</span>
             <span style={{ marginLeft: '1rem' }}>작성일: {date}</span>
        </div>
         <p>{content}</p>
    </div>
  )
}

export default PostCard