import React, { useEffect, useState } from 'react'

function Ex03() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState("")
  useEffect(()=>{
  console.log('✅ [Ex03] 의존성 배열 없음 → 랜더링마다 실행', {count, text})
  
  })
  // 처음 실행시 한 번만 실행된다. 
  return (
      <div>
       <h3>Ex01: 의존성 배열 <code>[count]</code> — 값 변경시</h3>
         <pre className="code-block">{`useEffect(() => {
  console.log("count:", count);
}, [count]);  // ← count가 바뀔 때`}</pre>
        
      <p>
        <strong>한 줄:</strong> count가 변경되면 이 코드를 실행해라
      </p>
      <p>처음에도 한 번 실행되고, +1 할 때마다 콘솔 + 탭 제목이 바뀝니다.</p>

      <div className="count-display">{count}</div>
      <button className="btn" type="button" onClick={() => setCount(count + 1)}>
        +1
      </button>

      <div className="console-hint">💡 콘솔 + 브라우저 탭 제목 확인</div>
  
      </div>
    )
}

export default Ex03