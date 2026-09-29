import React, { useState } from 'react'
import { useMemo } from 'react';

function App() {
    const [counter, setCounter] = useState(0);
    const [number, setNumber] = useState(10);

    const result = useMemo(() => {
        console.log("계산 실행");
        return number * 2;
    }, [number]);

    console.log("App 렌더링");

    return (
        <>
            <p>counter: {counter}</p>
            <p>result: {result}</p>
            <button onClick={() => setCounter(counter + 1)}>
                증가
            </button>
        </>
    );
}

export default App