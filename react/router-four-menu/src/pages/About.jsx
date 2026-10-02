export default function About() {
  return (
    <article className="page">
      <h1>소개</h1>
      <p>
        공통 레이아웃은 <code>Layout</code>에 두고, 자식 페이지는{' '}
        <code>Outlet</code> 자리에 렌더링합니다. 메뉴는 <code>NavLink</code>로
        연결합니다.
      </p>
      <section className="card-block">
        <h2>경로 요약</h2>
        <table className="route-table">
          <thead>
            <tr>
              <th>URL</th>
              <th>컴포넌트</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>/</code>
              </td>
              <td>Home</td>
            </tr>
            <tr>
              <td>
                <code>/about</code>
              </td>
              <td>About</td>
            </tr>
            <tr>
              <td>
                <code>/portfolio</code>
              </td>
              <td>Portfolio</td>
            </tr>
            <tr>
              <td>
                <code>/contact</code>
              </td>
              <td>Contact</td>
            </tr>
            <tr>
              <td>
                <code>/*</code>
              </td>
              <td>NotFound</td>
            </tr>
          </tbody>
        </table>
      </section>
    </article>
  );
}