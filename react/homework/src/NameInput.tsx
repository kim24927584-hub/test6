import { useState } from 'react';

export default function NameInput() {
  const [name, setName] = useState<string>('');

  const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  return (
    <div>
      <h2>이름 입력</h2>
      <input
        value={name}
        placeholder="이름을 입력하세요"
        onChange={onChange}
      />
      <p>안녕하세요, {name}</p>
    </div>
  );
}