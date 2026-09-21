import { useEffect, useState } from "react";



function Ex01() {
  const [count, setCount] = useState(0)
   useEffect(()=>{
    console.log('✅ [Ex01] [] → 처음 한 번만 실행')
   },[])
  // 처음 실행시 한 번만 실행된다. 
  return (
    <div>
     <h3>Ex01: 의존성 배열 <code>[]</code> — 처음 한 번만</h3>
      <pre className="code-block">{`useEffect(() => {
        console.log("실행!");
        }, []);  // ← 빈 배열`}</pre>
        <p>
        <strong>흐름:</strong> App 실행 → 렌더링 → useEffect 실행 → 끝
      </p>
      <p>
        +1로 count를 바꿔도 <strong>콘솔에 Effect가 다시 안 찍힙니다.</strong>
      </p>

      <div className="count-display">{count}</div>
      <button className="btn" type="button" onClick={() => setCount(count + 1)}>
        +1 (Effect는 안 돌아감)
      </button>

      <div className="console-hint">
        💡 F12 → Console · 이 탭을 다시 고르면 마운트되어 1회 다시 실행
      </div>

    </div>
  )
}

export default Ex01

// useEffect = 컴포넌트가 렌더링된 후 특정 작업을 실행할 때 사용하는 Hook

// 대표적으로 다음 작업에 사용합니다.

// 화면이 처음 나타났을 때 실행
// State가 변경됐을 때 실행
// API 호출
// 타이머
// 이벤트 등록/해제
// 외부 라이브러리와 연동