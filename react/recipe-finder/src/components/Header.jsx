// ============================================================
// 역할: 화면 맨 위의 로고와 메뉴 (홈 / 음식 검색 / 카테고리 / 즐겨찾기)
// props
//   - currentPage    : 지금 보고 있는 화면 이름 ('home' | 'search' | 'categories' | 'favorites')
//   - onChangePage   : 메뉴를 눌렀을 때 호출할 함수 (App 이 화면을 바꿔 줌)
//   - favoritesCount : 즐겨찾기 개수 (메뉴 옆 숫자 표시용)
// ============================================================

// 메뉴를 배열로 두면 map 으로 반복 출력할 수 있어 코드가 짧아집니다.
const MENUS = [
  { page: 'home', label: '홈' },
  { page: 'search', label: '음식 검색' },
  { page: 'categories', label: '카테고리' },
  { page: 'favorites', label: '즐겨찾기' },
];

function Header({ currentPage, onChangePage, favoritesCount }) {
  return (
    <header className="app-header">
      <div className="container d-flex flex-wrap align-items-center justify-content-between gap-2 py-2">
        {/* 로고를 누르면 홈으로 이동 */}
        <button className="logo" onClick={() => onChangePage('home')}>
          🍳 MY <span>RECIPE</span>
        </button>

        <nav className="nav-menu">
          {MENUS.map((menu) => (
            <button
              key={menu.page}
              // 현재 화면과 같으면 active 클래스를 추가해 강조
              className={currentPage === menu.page ? 'nav-btn active' : 'nav-btn'}
              onClick={() => onChangePage(menu.page)}
            >
              {menu.label}
              {/* 즐겨찾기 메뉴에만 개수 표시 (1개 이상일 때) */}
              {menu.page === 'favorites' && favoritesCount > 0 && (
                <span className="badge rounded-pill ms-1 count-badge">{favoritesCount}</span>
              )}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
