// ============================================================
// 역할: 홈 화면
//   - 큰 제목과 소개 문구, 검색창
//   - 랜덤 레시피 버튼
//   - 추천 음식(랜덤 4개)
//   - 음식 카테고리 목록
// props
//   - onSearch        : 검색어를 입력해 검색했을 때 호출 (App 이 검색 화면으로 이동시킴)
//   - onSelectCategory: 카테고리를 눌렀을 때 호출 (App 이 카테고리 화면으로 이동시킴)
//   - onOpenDetail    : 음식 상세 모달을 열 때 호출 (음식 id 전달)
// ============================================================
import { useEffect, useState } from 'react';
import { getCategories, getRandomMeal } from '../api/recipeApi';
import SearchBar from '../components/SearchBar';
import RecipeList from '../components/RecipeList';

function Home({ onSearch, onSelectCategory, onOpenDetail }) {
  // ----- 검색창 -----
  const [query, setQuery] = useState('');
  const [searchMessage, setSearchMessage] = useState(''); // 빈 검색어 안내

  // ----- 추천 음식 -----
  const [recommended, setRecommended] = useState([]);
  const [recLoading, setRecLoading] = useState(true);
  const [recError, setRecError] = useState('');

  // ----- 카테고리 -----
  const [categories, setCategories] = useState([]);
  const [catLoading, setCatLoading] = useState(true);
  const [catError, setCatError] = useState('');

  // ----- 랜덤 레시피 버튼 -----
  const [randomLoading, setRandomLoading] = useState(false);
  const [randomError, setRandomError] = useState('');

  // 화면이 처음 나타날 때 추천 음식과 카테고리를 한 번씩 불러옵니다.
  useEffect(() => {
    // 추천 음식: 랜덤 API 를 4번 동시에 호출
    async function loadRecommended() {
      try {
        const results = await Promise.all(
          Array.from({ length: 4 }, () => getRandomMeal())
        );
        // null 제거 + 같은 음식이 중복으로 나온 경우 제거
        const unique = results.filter(
          (meal, index) =>
            meal && results.findIndex((m) => m && m.idMeal === meal.idMeal) === index
        );
        setRecommended(unique);
      } catch (err) {
        setRecError(err.message);
      } finally {
        setRecLoading(false);
      }
    }

    async function loadCategories() { //카테고리 가져오기
      try {
        setCategories(await getCategories());
      } catch (err) {
        setCatError(err.message);
      } finally {
        setCatLoading(false);
      }
    }

    loadRecommended();
    loadCategories();
  }, []);

  // 검색 버튼 / Enter
  function handleSearch() {
    const keyword = query.trim();
    if (!keyword) {
      setSearchMessage('음식 이름을 입력해 주세요.');
      return;
    }
    setSearchMessage('');
    onSearch(keyword); // App 에게 "이 단어로 검색해 줘" 라고 알림
  }

  // 랜덤 레시피 버튼: 랜덤 음식 1개를 받아 바로 상세 모달로 보여 줌
  async function handleRandom() {
    setRandomLoading(true);
    setRandomError('');
    try {
      const meal = await getRandomMeal();
      if (meal) {
        onOpenDetail(meal.idMeal);
      } else {
        setRandomError('음식을 가져오지 못했습니다. 다시 시도해 주세요.');
      }
    } catch (err) {
      setRandomError(err.message);
    } finally {
      setRandomLoading(false);
    }
  }

  return (
    <div>
      {/* 상단 소개 영역 */}
      <section className="hero text-center">
        <h1 className="hero-title">오늘은 어떤 음식을 만들어 볼까요?</h1>
        <p className="hero-desc">
          세계 여러 나라의 레시피를 검색하고, 마음에 드는 음식은 즐겨찾기에 저장해 보세요.
        </p>

        <div className="hero-search mx-auto">
          <SearchBar query={query} onChange={setQuery} onSearch={handleSearch} />
          {searchMessage && <p className="text-danger mt-2 mb-0">{searchMessage}</p>}
        </div>

        <button
          className="btn btn-outline-orange mt-4"
          onClick={handleRandom}
          disabled={randomLoading}
        >
          {randomLoading ? '불러오는 중...' : '🎲 랜덤 레시피 보기'}
        </button>
        {randomError && <p className="text-danger mt-2 mb-0">{randomError}</p>}
      </section>

      {/* 추천 음식 */}
      <section className="mt-5">
        <h2 className="section-title">⭐ 오늘의 추천 음식</h2>
        <RecipeList
          meals={recommended}
          loading={recLoading}
          error={recError}
          emptyMessage="추천 음식을 불러오지 못했습니다."
          onSelect={onOpenDetail}
        />
      </section>

      {/* 카테고리 */}
      <section className="mt-5">
        <h2 className="section-title">🍽️ 음식 카테고리</h2>
        {catLoading && <p className="status text-center">카테고리를 불러오는 중입니다...</p>}
        {catError && <div className="alert alert-danger">{catError}</div>}
        <div className="d-flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category.idCategory}
              className="btn btn-outline-orange rounded-pill"
              onClick={() => onSelectCategory(category.strCategory)}
            >
              {category.strCategory}
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
