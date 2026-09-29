import React from 'react'
import ServiceCard from './ServiceCard'

/** 사진 포함 카드 6장 */
const cards = [
  {
    id: 1,
    title: '웹 개발',
    text: 'HTML · CSS · Bootstrap으로 반응형 사이트를 만듭니다.',
    img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80',
    btn: 'outline-primary',
  },
  {
    id: 2,
    title: '모바일 UI',
    text: '작은 화면 우선 Mobile First 레이아웃.',
    img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80',
    btn: 'outline-success',
  },
  {
    id: 3,
    title: '쇼핑몰',
    text: '상품 카드 · Modal · Navbar 구성 예제.',
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
    btn: 'outline-danger',
  },
  {
    id: 4,
    title: '포트폴리오',
    text: '원페이지 · 탭 · 아코디언 활용.',
    img: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&q=80',
    btn: 'outline-secondary',
  },
  {
    id: 5,
    title: 'JavaScript',
    text: '이벤트 · DOM · 인터랙션 기초.',
    img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80',
    btn: 'outline-warning',
  },
  {
    id: 6,
    title: 'React',
    text: '컴포넌트 · Props · map 렌더링.',
    img: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&q=80',
    btn: 'outline-info',
  },
]

function App() {
  return (
    <div>
      <nav class="navbar navbar-dark bg-dark">
        <div class="container">
          <a class="navbar-brand" href="../index.html">← Bootstrap 예제</a>
          <span class="navbar-text text-white-50">Card × 6 · 사진 포함</span>
        </div>
      </nav>
      <main class="container py-5">
        <div class="text-center mb-4">
          <h1 class="h3 fw-bold">Bootstrap 카드 6장 (사진)</h1>
          <p class="text-muted mb-0">
            <code>card-img-top</code> + <code>col-12 col-md-6 col-lg-4</code> → PC 3열 × 2행
          </p>
        </div>

        <div class="row g-4">
          {cards.map(function(card){
            return <ServiceCard card={card}/>
          })}
          
        </div>
          
      </main>
    </div>
  )
}

export default App