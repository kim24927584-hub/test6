import Header from './component/Header'
import { useState, useRef, useReducer } from 'react';
import TodoList from './component/TodoList';
import TodoEditor from './component/TodoEditor';
//useReducer 란?
//리액트에서 간단한 상태관리 useState
// 여러개 - useReducer가 가독성 , 유지보수가 쉽다.
//const [state, dispatch] = useReducer(reducer,intialstate);
//state 현재 상태값(이전엔 todo)
//dispatch 상태 명령 (액션)을 보낼 함수 - 변경상태를 요청
// reducer => 상태를 실제로 변경하는 로직함수
// intialstate => 초기값
//action -> 어떤 변경을 할지 설명 
const mockTodo =[
  {
    id:0,
    isDone : false,
    content:"react 공부하기",
    createdDate : new Date().getTime(),
  },
   {
    id: 1,
    isDone: false,
    content: "빨래 널기",
    createdDate: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "노래 연습하기",
    createdDate: new Date().getTime(),
  },
];
//상태변경로로직
function reducer(state, action){
  switch (action.type) {
    case "CREATE":
        return [action.newItem,...state];
    case "UPDATE" :
         return state.map((it)=>
          it.id === action.targetId ? {...it,isDone:!it.isDone} : it
        )
    case "DELETE" :
      return state.filter((it)=> it.id !== action.targetId);
    default:
      return state;
  }
}



function App() {
 //  const[todo,setTodo] = useState(mockTodo);
 const [todo, dispatch] = useReducer(reducer, mockTodo);
    const idRef = useRef(3);

   const onCreate = (content) => {
      dispatch({
        type:"CREATE",
        newItem:{
          id:idRef.current,
          content,
          isDone :false,
          createdDate : new Date().getTime(),
        }
      });
     idRef.current += 1;
   }

    const onUpdate = (targetId) =>{
     dispatch({type:"UPDATE", targetId})
    };

    const onDelete = (targetId) =>{
       dispatch({type:"DELETE", targetId})
    }
  return (
    <div>
      <Header/>
      <TodoEditor onCreate={onCreate}/>
      <TodoList todo={todo} onUpdate={onUpdate} onDelete={onDelete}/>
      
    </div>
  )
}

export default App