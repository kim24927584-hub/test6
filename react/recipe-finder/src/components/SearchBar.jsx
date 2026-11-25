// ============================================================
// 역할: 음식 이름 검색창 + 검색 버튼 (홈 화면과 검색 화면에서 같이 사용)
// props
//   - query   : 입력창에 보일 글자 (부모의 state)
//   - onChange: 글자가 바뀔 때 호출할 함수
//   - onSearch: 검색할 때 호출할 함수
//
// <form> 으로 감싸면 Enter 키를 눌러도 submit 이벤트가 발생하므로
// 버튼 클릭과 Enter 키를 한 번에 처리할 수 있습니다.
// ============================================================
function SearchBar({ query, onChange, onSearch }) {
  function handleSubmit(e) {
    e.preventDefault(); // form 기본 동작(페이지 새로고침) 막기
    onSearch();
  }

  return (
    <form className="search-bar input-group input-group-lg" onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-control"
        value={query}
        onChange={(e) => onChange(e.target.value)}
        placeholder="영어로 음식 이름을 입력하세요 (예: chicken, pasta)"
        aria-label="음식 이름 검색"
      />
      <button type="submit" className="btn btn-orange px-4">
        검색
      </button>
    </form>
  );
}

export default SearchBar;
