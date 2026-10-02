const works = [
  {
    id: 1,
    title: 'Todo 앱',
    desc: '추가 · 완료 · 삭제 실습',
    tag: 'React',
  },
  {
    id: 2,
    title: '검색 필터',
    desc: 'useMemo로 목록 필터링',
    tag: 'Hooks',
  },
  {
    id: 3,
    title: 'Router Simple',
    desc: 'Layout + Outlet 중첩 라우트',
    tag: 'Router',
  },
];

export default function Portfolio() {
  return (
    <article className="page">
      <h1>포트폴리오</h1>
      <p className="lead">map으로 카드 목록을 렌더링합니다.</p>
      <div className="card-grid">
        {works.map((item) => (
          <article className="work-card" key={item.id}>
            <span className="work-tag">{item.tag}</span>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
          </article>
        ))}
      </div>
    </article>
  );
}