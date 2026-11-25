// ============================================================
// 역할: TheMealDB API 호출 코드를 한 곳에 모아 둔 파일
// - 컴포넌트/페이지에서는 fetch 를 직접 쓰지 않고 이 파일의 함수만 호출합니다.
// - API 키는 필요 없습니다. (공개 테스트 키 "1" 이 주소에 들어 있음)
// - 오류가 나면 Error 를 던지고, 호출한 쪽(try/catch)에서 error.message 를 화면에 보여 줍니다.
// ============================================================

const BASE_URL = 'https://www.themealdb.com/api/json/v1/1';

/**
 * 공통 요청 함수
 * @param {string} path    예: '/search.php?s=chicken'
 * @param {object} options fetch 옵션 (필요할 때만)
 */
async function request(path, options = {}) {
  // 1) 네트워크 요청 (인터넷이 끊기면 여기서 오류가 발생)
  let response;
  try {
    response = await fetch(`${BASE_URL}${path}`, options);
  } catch {
    throw new Error('네트워크 오류가 발생했습니다. 인터넷 연결을 확인해 주세요.');
  }

  // 2) 상태 코드 확인 (200번대가 아니면 실패)
  if (!response.ok) {
    throw new Error(`데이터를 불러오지 못했습니다. (오류 코드: ${response.status})`);
  }

  // 3) 본문 읽기
  //    이 API 는 잘못된 값을 보내면 빈 응답("")을 줄 때가 있어서
  //    바로 response.json() 을 쓰지 않고 글자로 읽은 뒤 비어 있는지 확인합니다.
  const text = await response.text();
  if (!text) return {};

  try {
    return JSON.parse(text);
  } catch {
    throw new Error('서버 응답을 해석할 수 없습니다.');
  }
}

/**
 * 음식 이름으로 검색
 * - 검색어가 비어 있으면 API 를 호출하지 않고 빈 배열을 돌려줍니다.
 * - 결과가 없으면 API 는 meals: null 을 주므로 [] 로 바꿔 줍니다.
 */
export async function searchMeals(keyword) {
  const word = (keyword || '').trim();
  if (!word) return [];

  const data = await request(`/search.php?s=${encodeURIComponent(word)}`);
  return data.meals || [];
}

/** 카테고리 목록 가져오기 */
export async function getCategories() {
  const data = await request('/categories.php');
  return data.categories || [];
}

/**
 * 카테고리별 음식 목록
 * ※ 이 API 는 id, 이름, 이미지(idMeal, strMeal, strMealThumb)만 줍니다.
 */
export async function getMealsByCategory(category) {
  if (!category) return [];

  const data = await request(`/filter.php?c=${encodeURIComponent(category)}`);
  return data.meals || [];
}

/** 음식 한 개의 상세 정보 (없으면 null) */
export async function getMealDetail(id) {
  if (!id) return null;

  const data = await request(`/lookup.php?i=${encodeURIComponent(id)}`);
  return data.meals ? data.meals[0] : null;
}

/** 랜덤 음식 1개 (매번 새로 받기 위해 캐시를 사용하지 않음) */
export async function getRandomMeal() {
  const data = await request('/random.php', { cache: 'no-store' });
  return data.meals ? data.meals[0] : null;
}

/**
 * 재료 목록 만들기
 * API 는 재료를 배열이 아니라 strIngredient1 ~ strIngredient20,
 * 용량을 strMeasure1 ~ strMeasure20 처럼 번호 붙은 속성으로 줍니다.
 * 비어 있거나 null 인 칸은 건너뛰고 [{ name, measure }, ...] 배열로 만들어 줍니다.
 */
export function getIngredients(meal) {
  const list = [];

  for (let i = 1; i <= 20; i++) {
    const name = meal[`strIngredient${i}`];   // 예: meal['strIngredient3']
    const measure = meal[`strMeasure${i}`];

    // 재료 이름이 있을 때만 추가 (null, '', ' ' 는 제외)
    if (name && name.trim()) {
      list.push({
        name: name.trim(),
        measure: measure ? measure.trim() : '',
      });
    }
  }

  return list;
}
