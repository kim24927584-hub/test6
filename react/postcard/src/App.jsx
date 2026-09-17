import PostCard from "./components/PostCard"

function App() {
  return (
    <div style={{padding:'2rem'}}>
      <h1>게시글 목록</h1>
      <PostCard 
        title="React 배우기" 
        author="홍길동" 
        content="React는 정말 재미있습니다!"
        date="2024-01-15"
      />
      <PostCard 
        title="Props 이해하기"
        author="김철수"
        content="Props는 부모에서 자식으로 데이터를 전달합니다."
        date="2024-01-16"
      />
      
      <PostCard 
        title="컴포넌트 분리"
        author="이영희"
        content="컴포넌트를 분리하면 코드가 깔끔해집니다."
        date="2024-01-17"
      />
    </div>
  )
}

export default App