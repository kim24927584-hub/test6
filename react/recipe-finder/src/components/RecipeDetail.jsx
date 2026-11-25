// ============================================================
// 역할: 음식 상세 정보를 모달 창으로 보여 줍니다.
//   (이미지, 이름, 카테고리, 국가, 재료와 용량, 조리 방법, 유튜브 링크, 즐겨찾기/닫기 버튼)
// props
//   - mealId          : 보여줄 음식의 id
//   - isFavorite      : 이미 즐겨찾기에 들어 있는지 (true/false)
//   - onToggleFavorite: 즐겨찾기 버튼을 눌렀을 때 호출할 함수 (음식 객체를 넘겨줌)
//   - onClose         : 닫기 버튼/바깥 영역/ESC 키를 눌렀을 때 호출할 함수
//
// 목록 API 에는 재료와 조리 방법이 없어서,
// 모달이 열릴 때 상세 API(lookup.php)를 호출해 자세한 정보를 가져옵니다.
// ============================================================
import { useEffect, useState } from 'react';
import { getIngredients, getMealDetail } from '../api/recipeApi';

function RecipeDetail({ mealId, isFavorite, onToggleFavorite, onClose }) {
  const [meal, setMeal] = useState(null);       // 상세 정보 데이터
  const [loading, setLoading] = useState(true); // 불러오는 중인지
  const [error, setError] = useState('');       // 오류 메시지

  // mealId 가 바뀔 때마다 상세 정보를 새로 가져옵니다.
  useEffect(() => {
    let ignore = false; // 모달이 닫힌 뒤 도착한 응답은 무시하기 위한 표시

    async function loadDetail() {
      setLoading(true);
      setError('');
      try {
        const data = await getMealDetail(mealId);
        if (ignore) return;
        if (data) {
          setMeal(data);
        } else {
          setError('음식 정보를 찾을 수 없습니다.'); // API 가 null 을 준 경우
        }
      } catch (err) {
        if (!ignore) setError(err.message);
      } finally {
        if (!ignore) setLoading(false);
      }
    }
    loadDetail();

    // 정리(cleanup) 함수: 컴포넌트가 사라질 때 실행됨
    return () => {
      ignore = true;
    };
  }, [mealId]);

  // ESC 키로 닫기 + 모달이 열려 있는 동안 뒤 화면 스크롤 막기
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape') onClose();
    }
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  // 재료 목록 만들기 (meal 이 아직 없으면 빈 배열)
  const ingredients = meal ? getIngredients(meal) : [];

  // 출신 국가: 예전 데이터는 strArea, 새 데이터는 strCountry 에 들어 있어 둘 다 확인
  const area = meal ? meal.strArea || meal.strCountry : '';

  return (
    // 어두운 바깥 영역을 누르면 닫힘
    <div className="modal-overlay" onClick={onClose}>
      {/* stopPropagation: 모달 안쪽을 눌렀을 때는 닫히지 않게 함 */}
      <div
        className="recipe-modal"
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose} aria-label="닫기">
          ✕
        </button>

        {loading && (
          <div className="text-center py-5">
            <div className="spinner-border text-warning mb-2" role="status" />
            <p className="mb-0">상세 정보를 불러오는 중입니다...</p>
          </div>
        )}

        {error && <div className="alert alert-danger m-4">{error}</div>}

        {meal && !loading && (
          <div className="p-3 p-md-4">
            <div className="row g-4">
              {/* 왼쪽: 이미지 */}
              <div className="col-md-5">
                {meal.strMealThumb ? (
                  <img className="detail-img" src={meal.strMealThumb} alt={meal.strMeal} />
                ) : (
                  <div className="detail-img no-image">이미지 없음</div>
                )}
              </div>

              {/* 오른쪽: 이름, 분류, 버튼 */}
              <div className="col-md-7">
                <h2 className="detail-title">{meal.strMeal}</h2>

                <div className="mb-3">
                  {meal.strCategory && (
                    <span className="badge tag-category me-1">{meal.strCategory}</span>
                  )}
                  {area && <span className="badge tag-area">{area}</span>}
                </div>

                <div className="d-flex flex-wrap gap-2">
                  {/* 즐겨찾기 버튼: 상태에 따라 글자와 색이 바뀜 */}
                  <button
                    className={isFavorite ? 'btn btn-danger' : 'btn btn-outline-danger'}
                    onClick={() => onToggleFavorite(meal)}
                  >
                    {isFavorite ? '♥ 즐겨찾기 해제' : '♡ 즐겨찾기 추가'}
                  </button>

                  {/* 유튜브 링크: 있을 때만 출력 (새 탭에서 열기) */}
                  {meal.strYoutube && (
                    <a
                      className="btn btn-outline-secondary"
                      href={meal.strYoutube}
                      target="_blank"
                      rel="noreferrer"
                    >
                      ▶ 유튜브 영상 보기
                    </a>
                  )}

                  <button className="btn btn-outline-dark" onClick={onClose}>
                    닫기
                  </button>
                </div>
              </div>

              {/* 재료 목록 */}
              <div className="col-12">
                <h4 className="section-heading">재료 ({ingredients.length})</h4>
                {ingredients.length > 0 ? (
                  <ul className="ingredient-list">
                    {ingredients.map((item, index) => (
                      // 같은 재료 이름이 두 번 나올 수 있어 번호(index)를 함께 key 로 사용
                      <li key={`${item.name}-${index}`}>
                        <span>{item.name}</span>
                        <span className="measure">{item.measure}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-muted">등록된 재료 정보가 없습니다.</p>
                )}
              </div>

              {/* 조리 방법 */}
              <div className="col-12">
                <h4 className="section-heading">조리 방법</h4>
                <p className="instructions">
                  {meal.strInstructions || '등록된 조리 방법이 없습니다.'}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default RecipeDetail;
