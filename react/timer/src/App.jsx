import { useState } from "react";
import Timer from "./timer";

// App 컴포넌트
function App() {

    const [show, setShow] = useState(true);

    return (
        <div
            style={{
                padding: "30px",
                maxWidth: "500px",
                margin: "0 auto",
            }}
        >

            <h1>useEffect Cleanup 예제</h1>

            <button
                onClick={() => setShow(!show)}
                style={{
                    padding: "10px 20px",
                    cursor: "pointer",
                }}
            >
                {show ? "타이머 숨기기" : "타이머 보이기"}
            </button>

            {/* show가 true일 때만 Timer 생성 */}
            {show && <Timer />}

        </div>
    );
}

export default App;