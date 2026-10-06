
import { useState } from 'react';
import Todoitem from './Todoitem';
import './TodoList.css';

function TodoList({todo, onUpdate, onDelete}) {
    const [search, setSearch] = useState("");
    const onChangeSearch = (e) =>{
    setSearch(e.target.value);
    console.log(e.target.value);
    //검색폼의 value (타이핑치는 글자) State변수 search(검색단어)를 설정
  }
  const getSearchResult = () =>{
    return search === "" ? todo : todo.filter((it) => it.content.toLowerCase().includes(search.toLowerCase()) )
    //search === "" ? todo  검색단어가 없으면  todo prop 자체를 리턴
    //검색단어가 있으면 it 항목에 search에 저장되있는 (단어) 포함되 있으면 it(레코드)을 리턴
}
  return (
    <div className='TodoList'>
        <h4>TodoList 🌱</h4>
        <input 
            value={search}
            onChange={onChangeSearch}
            className="searchbar"
            placeholder="검색어를 입력하세요"
        />
        <div className="list_wrapper">
           {getSearchResult().map((it) =>(
            <Todoitem key={it.id} {...it} onUpdate={onUpdate} onDelete={onDelete}/>
           ))}
             {/* ...it 이부분은 전개 연산자(Spread Operator) */}
           {/* 객체의 속성을 펼쳐서 자식 컴포넌트 (TodoItem)로 전달하는역할 */}

        </div>

    </div>
    

  );
}

export default TodoList