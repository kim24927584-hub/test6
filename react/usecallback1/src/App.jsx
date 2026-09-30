import UserList from './UserList';
import CreateUser from './CreateUser';
import { useCallback, useMemo, useRef } from 'react'
import { useState } from 'react';

function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는중...');
  return users.filter(user => user.active).length;
}

function App() {
  const [inputs, setInputs] = useState({
    username:'',
    email:''
  });
  //키보드로 입력하는 상태를 inputs 라는 객체로 관리
const {username, email} = inputs; //구조분해할당
// const username = inputs.username;
// const email = inputs.email;


  const onChange = useCallback(e => {
      const {name, value} = e.target;
      

      setInputs({
        ...inputs, //  username : 'hong' - 기존값을 기억
        [name]: value //[name] username ,email - value 키보드입력 hong, hong@gmail.com
      });
    },[inputs]
  )


   const [users , setUsers ] = useState([
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
      active:true
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
      active:true
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
      active:false
    }
  ]);
  const nextId = useRef(4); //초기값을 4지정(더미데이터로 아이디 이미3번지정)
  const onCreate = useCallback(() => {
      const user ={//하나의 데이터
        id:nextId.current, 
        username,
        email
      };
// const user = {
//   id: 4,
//   username: '홍길동',
//   email: 'hong@test.com'
// };

      setUsers([...users, user]); //...users(기존에 1,2,3), 방금만든 4번 user

      //리셋과 같은역할
      setInputs({
        username:'',
        email:''
      });

    nextId.current += 1;
  }
,[users,username, email]);

  const onRemove = useCallback(id => {
    //리엑트는 삭제 라는 개념이 없다. 
    //user.id가 파라미터로 일치하지않는 원소만 추출해서 새로운 배열을 만듬
    // user.id 가 id 인 것만 제거
    setUsers(users.filter(user => user.id !== id));

  },[users]
);

  const onToggle = useCallback(id => {
    setUsers(
      users.map(user =>
        user.id === id ? { ...user, active: !user.active } : user
        // id같은면 active를 변경하고, id가 다르면 기존 user를 그대로 사용
      )
    );
  },[users]);
  const count = useMemo(function(){ 
    return countActiveUsers(users);
  },[users])
  return (
    <div>
     <CreateUser 
      username={username} 
      email ={email} 
      onChange={onChange} 
      onCreate={onCreate}
     />
     <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
     <div>활성사용자 수 : {count}</div>
     </div>
  )
}

export default App