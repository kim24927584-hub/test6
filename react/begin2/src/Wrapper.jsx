function Wrapper({children}){
  const style= {
    border: "solid 1px black"
  }
  return (
    <div style={style}>
      {children}
    </div>
  )
}

export default Wrapper