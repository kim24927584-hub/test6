export default function Home() {
  return (
    <article className="page">
      <h1>홈</h1>
      <p className="lead">
        React Router로 만든 4메뉴 미니 사이트입니다. 헤더와 푸터는 고정되고,
        가운데만 페이지가 바뀝니다.
      </p>
      <ul className="feature-list">
        <li>
          <strong>소개</strong> — 사이트와 라우팅 구조를 설명합니다.
        </li>
        <li>
          <strong>포트폴리오</strong> — 프로젝트 카드를 보여 줍니다.
        </li>
        <li>
          <strong>문의</strong> — 데모용 연락 폼입니다.
        </li>
      </ul>
    </article>
  );
}