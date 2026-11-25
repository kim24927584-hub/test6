// ============================================================
// 역할: 앱의 중심 컴포넌트.
//  - 여러 화면이 함께 쓰는 데이터(state)를 관리합니다.
//      · 현재 화면(page)
//      · 검색어(keyword), 선택한 카테고리(category)
//      · 즐겨찾기 목록(favorites) ← localStorage 와 연결
//      · 상세 모달에 보여줄 음식(selectedMealId)
//  - 화면(pages)과 컴포넌트에 props 로 데이터와 함수를 전달합니다.
//
// 화면(page) 종류: 'home' | 'search' | 'categories' | 'favorites'
// ============================================================
import { useCallback, useEffect, useState } from 'react';
import { loadFavorites, saveFavorites } from './utils/favoriteStorage';
import Header from './components/Header';
import RecipeDetail from './components/RecipeDetail';
import Home from './pages/Home';
import Search from './pages/Search';
import Categories from './pages/Categories';
import Favorites from './pages/Favorites';

function App() {
  // ----- 화면 전환 -----
  const [page, setPage] = useState('home');

  // ----- 화면 사이에서 공유하는 값 -----
  const [keyword, setKeyword] = useState('');   // 검색 화면에서 검색할 단어
  const [category, setCategory] = useState(''); // 카테고리 화면에서 선택한 카테고리

  // ----- 즐겨찾기: 처음 한 번만 localStorage 에서 읽어 옴 -----
  const [favorites, setFavorites] = useState(() => loadFavorites());

  // ----- 상세 모달: null 이면 닫혀 있음 -----
  const [selectedMealId, setSelectedMealId] = useState(null);

  // favorites 가 바뀔 때마다 localStorage 에 저장 → 새로고침해도 유지됨
  useEffect(() => {
    saveFavorites(favorites);
  }, [favorites]);

  // 홈에서 검색했을 때: 검색어를 저장하고 검색 화면으로 이동
  function handleSearchFromHome(word) {
    setKeyword(word);
    setPage('search');
  }

  // 홈에서 카테고리를 눌렀을 때: 카테고리를 저장하고 카테고리 화면으로 이동
  function handleCategoryFromHome(name) {
    setCategory(name);
    setPage('categories');
  }

  // 즐겨찾기 추가/삭제 (상세 모달의 버튼)
  function toggleFavorite(meal) {
    const exists = favorites.some((fav) => fav.idMeal === meal.idMeal);

    if (exists) {
      // filter: 해당 음식만 빼고 나머지를 남김
      setFavorites(favorites.filter((fav) => fav.idMeal !== meal.idMeal));
    } else {
      // 카드에 필요한 정보만 골라서 저장 (재료/조리법까지 저장하면 용량이 커짐)
      const simpleMeal = {
        idMeal: meal.idMeal,
        strMeal: meal.strMeal,
        strMealThumb: meal.strMealThumb,
        strCategory: meal.strCategory,
        strArea: meal.strArea || meal.strCountry, // 국가 정보는 두 이름 중 있는 것 사용
      };
      setFavorites([...favorites, simpleMeal]);
    }
  }

  // 즐겨찾기 화면의 삭제 버튼
  function removeFavorite(id) {
    setFavorites(favorites.filter((fav) => fav.idMeal !== id));
  }

  // 모달 닫기 (useCallback: RecipeDetail 의 useEffect 가 불필요하게 다시 실행되지 않게 함)
  const closeDetail = useCallback(() => setSelectedMealId(null), []);

  // 지금 열린 음식이 즐겨찾기에 들어 있는지
  const isFavorite = favorites.some((fav) => fav.idMeal === selectedMealId);

  return (
    <div className="app">
      <Header currentPage={page} onChangePage={setPage} favoritesCount={favorites.length} />

      <main className="container py-4">
        {/* page 값에 따라 해당 화면만 출력 (조건부 렌더링) */}
        {page === 'home' && (
          <Home
            onSearch={handleSearchFromHome}
            onSelectCategory={handleCategoryFromHome}
            onOpenDetail={setSelectedMealId}
          />
        )}

        {page === 'search' && (
          <Search keyword={keyword} onSearch={setKeyword} onOpenDetail={setSelectedMealId} />
        )}

        {page === 'categories' && (
          <Categories
            category={category}
            onSelectCategory={setCategory}
            onOpenDetail={setSelectedMealId}
          />
        )}

        {page === 'favorites' && (
          <Favorites
            favorites={favorites}
            onRemove={removeFavorite}
            onOpenDetail={setSelectedMealId}
          />
        )}
      </main>

      <footer className="app-footer text-center py-4">
        Data from TheMealDB · MY RECIPE
      </footer>

      {/* 음식을 선택했을 때만 상세 모달 표시 */}
      {selectedMealId && (
        <RecipeDetail
          mealId={selectedMealId}
          isFavorite={isFavorite}
          onToggleFavorite={toggleFavorite}
          onClose={closeDetail}
        />
      )}
    </div>
  );
}

export default App;
