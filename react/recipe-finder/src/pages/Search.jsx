// ============================================================
// 역할: 음식 검색 화면
//   - 검색창에 입력한 이름으로 음식을 찾아 카드로 보여 줍니다.
//   - 결과 없음 / 로딩 / 오류 메시지를 처리합니다.
// props
//   - keyword     : 지금 검색 중인 단어 (App 이 관리. 홈에서 검색해도 이 값이 채워짐)
//   - onSearch    : 새 검색어로 검색할 때 호출할 함수
//   - onOpenDetail: 음식 상세 모달을 열 때 호출 (음식 id 전달)
// ============================================================
import { useEffect, useState } from 'react';
import { searchMeals } from '../api/recipeApi';
import SearchBar from '../components/SearchBar';
import RecipeList from '../components/RecipeList';

function Search({ keyword, onSearch, onOpenDetail }) {
  const [query, setQuery] = useState(keyword); // 입력창 글자
  const [meals, setMeals] = useState([]);      // 검색 결과
  // 검색어가 이미 있으면 처음부터 '로딩 중'으로 시작
  // (그래야 데이터가 오기 전에 "검색 결과가 없습니다"가 잠깐 깜빡이지 않음)
  const [loading, setLoading] = useState(Boolean(keyword));
  const [error, setError] = useState('');

  // keyword(검색할 단어)가 바뀔 때마다 API 를 호출합니다.
  useEffect(() => {
    // 검색어가 비어 있으면 API 를 호출하지 않음
    if (!keyword) {
      setMeals([]);
      setError('');
      return;
    }

    let ignore = false; // 이전 검색의 늦은 응답이 화면을 덮어쓰지 않게 하는 표시

    async function loadMeals() {
      setLoading(true);
      setError('');
      try {
        const result = await searchMeals(keyword);
        if (!ignore) setMeals(result);
      } catch (err) {
        if (!ignore) {
          setMeals([]);
          setError(err.message);
        }
      } finally {
        if (!ignore) setLoading(false);
      }
    }
    loadMeals();

    return () => {
      ignore = true;
    };
  }, [keyword]);

  // 검색 버튼 / Enter : 입력한 글자를 App 의 keyword 로 올려 보냄
  function handleSearch() {
    const word = query.trim();
    // 새로운 단어로 검색할 때는 미리 '로딩 중'으로 바꿔 둠 (깜빡임 방지)
    if (word && word !== keyword) setLoading(true);
    onSearch(word);
  }

  return (
    <div>
      <h2 className="section-title">🔍 음식 검색</h2>

      <div className="mb-4">
        <SearchBar query={query} onChange={setQuery} onSearch={handleSearch} />
      </div>

      {/* 검색어가 없을 때는 안내 문구, 있을 때는 결과 목록 */}
      {!keyword ? (
        <p className="status text-center py-5">
          음식 이름을 영어로 입력하고 검색해 보세요. (예: chicken, pasta, soup)
        </p>
      ) : (
        <>
          <p className="text-muted">
            '<strong>{keyword}</strong>' 검색 결과
            {!loading && !error && ` (${meals.length}개)`}
          </p>
          <RecipeList
            meals={meals}
            loading={loading}
            error={error}
            emptyMessage="검색 결과가 없습니다. 다른 이름으로 검색해 보세요."
            onSelect={onOpenDetail}
          />
        </>
      )}
    </div>
  );
}

export default Search;
