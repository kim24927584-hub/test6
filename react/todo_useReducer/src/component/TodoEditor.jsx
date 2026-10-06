import React from 'react'
import { useRef,useState } from 'react';
import './TodoEditor.css';

function TodoEditor({onCreate}) {
   const[content, setContent] = useState("");
    const inputRef = useRef();
    const onChangeContent = (e) =>{
        setContent(e.target.value);
        //console.log(e.target.value);
        //키보드로 실시간으로 입력사항을 content에 저장
    };
 const onKeyDown = (e) => {
        if(e.keyCode == 13){ //enter 아스키코드
            onSubmit();
        }
    };
    const onSubmit = () =>{
        if(!content){ // 입력창에 아무것도 안써있으면
            inputRef.current.focus();// input 창에 focus(클릭)
            return;
        }
        onCreate(content);
        setContent("");    
    }

  return (
    <div className='TodoEditor'>
       <h4>새로운 Todo 작성하기 ✏️ </h4>
        <div className="editor_wrapper">
            <input 
            placeholder="새로운 Todo..." 
            value={content} 
            onChange={onChangeContent} 
            onKeyDown={onKeyDown}
            />
            <button onClick={onSubmit}>추가</button>
       </div>
    </div>
  )
}

export default TodoEditor