import React, { useState } from 'react'
import { useMemo } from 'react';

function App() {
    const [counter, setCounter] = useState(0);
    const [number, setNumber] = useState(10);

    const handleClick = useCallback(function(){
      console.log("handleClick 호출")
    },[number])

    console.log("App 렌더링");

    

    return (
        <>
            <p>counter: {counter}</p>
            
            <button onClick={() => setCounter(counter + 1)}>
                증가
            </button>
            <button onClick={handleClick}>
                숫자 확인
            </button>
        </>
    );
}

export default App