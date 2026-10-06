import { useState, useReducer } from 'react';

function reducer(state, action){
  switch(action.type){
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "RESET":
      return 0;
    default:
      return state;
  }
}
function Counter1() {
  // const [count, setCount] = useState(0);

  const [count, dispatch] = useReducer(reducer, 0);
  return (
    <>
      <h2>{count}</h2>

      <button onClick={() => dispatch({type: "INCREMENT"})}>
        +1
      </button>

      <button onClick={() => dispatch({type: "DECREMENT"})}>
        -1
      </button>
      <button onClick={() => dispatch({type: "RESET"})}>
        초기화
      </button>
    </>
  );
}

export default Counter1;