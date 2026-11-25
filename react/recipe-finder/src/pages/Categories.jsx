// ============================================================
// 역할: 카테고리 화면
//   1) 카테고리 목록을 API 에서 가져와 카드 버튼으로 보여 줍니다.
//   2) 카테고리를 누르면 그 카테고리의 음식 목록을 보여 줍니다.
//   3) 음식 카드를 누르면 상세 모달이 열립니다.
// props
//   - category        : 선택된 카테고리 이름 (App 이 관리. 홈에서 선택해도 채워짐)
//   - onSelectCategory: 카테고리를 눌렀을 때 호출할 함수
//   - onOpenDetail    : 음식 상세 모달을 열 때 호출 (음식 id 전달)
// ============================================================
import { useEffect, useState } from 'react';
import { getCategories, getMealsByCategory } from '../api/recipeApi';
import RecipeList from '../components/RecipeList';

function Categories({ category, onSelectCategory, onOpenDetail }) {
  // ----- 카테고리 목록 -----
  const [categories, setCategories] = useState([]);
  const [catLoading, setCatLoading] = useState(true);
  const [catError, setCatError] = useState('');

  // ----- 선택한 카테고리의 음식 목록 -----
  const [meals, setMeals] = useState([]);
  // 카테고리가 이미 선택돼 있으면 처음부터 '로딩 중'으로 시작 (결과 없음 문구 깜빡임 방지)
  const [mealsLoading, setMealsLoading] = useState(Boolean(category));
  const [mealsError, setMealsError] = useState('');

  // 화면이 처음 나타날 때 카테고리 목록을 한 번 불러옵니다.
  useEffect(() => {
    async function loadCategories() {
      try {
        setCategories(await getCategories());
      } catch (err) {
        setCatError(err.message);
      } finally {
        setCatLoading(false);
      }
    }
    loadCategories();
  }, []);

  // category(선택된 카테고리)가 바뀔 때마다 그 카테고리의 음식 목록을 불러옵니다.
  useEffect(() => {
    if (!category) {
      setMeals([]);
      return;
    }

    let ignore = false;

    async function loadMeals() {
      setMealsLoading(true);
      setMealsError('');
      try {
        const result = await getMealsByCategory(category);
        if (!ignore) setMeals(result);
      } catch (err) {
        if (!ignore) {
          setMeals([]);
          setMealsError(err.message);
        }
      } finally {
        if (!ignore) setMealsLoading(false);
      }
    }
    loadMeals();

    return () => {
      ignore = true;
    };
  }, [category]);

  // 카테고리 카드를 눌렀을 때
  function handleSelect(name) {
    // 다른 카테고리를 누르면 미리 '로딩 중'으로 바꿔 둠
    if (name !== category) setMealsLoading(true);
    onSelectCategory(name);
  }

  return (
    <div>
      <h2 className="section-title">📂 카테고리</h2>

      {/* 카테고리 카드 버튼 */}
      {catLoading && <p className="status text-center py-4">카테고리를 불러오는 중입니다...</p>}
      {catError && <div className="alert alert-danger">{catError}</div>}

      <div className="category-grid">
        {categories.map((item) => (
          <button
            key={item.idCategory}
            // 선택된 카테고리면 active 클래스 추가
            className={category === item.strCategory ? 'category-btn active' : 'category-btn'}
            onClick={() => handleSelect(item.strCategory)}
          >
            <img src={item.strCategoryThumb} alt="" loading="lazy" />
            <span>{item.strCategory}</span>
          </button>
        ))}
      </div>

      {/* 선택한 카테고리의 음식 목록 */}
      <section className="mt-5">
        {category ? (
          <>
            <h3 className="section-title">🍴 {category} 음식</h3>
            <RecipeList
              meals={meals}
              loading={mealsLoading}
              error={mealsError}
              emptyMessage="이 카테고리에 등록된 음식이 없습니다."
              onSelect={onOpenDetail}
            />
          </>
        ) : (
          <p className="status text-center py-4">위에서 카테고리를 선택해 주세요.</p>
        )}
      </section>
    </div>
  );
}

export default Categories;
