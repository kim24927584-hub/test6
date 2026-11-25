// ============================================================
// 역할: 음식 한 개를 카드 모양으로 보여 줍니다. (이미지, 이름, 카테고리, 국가)
// props
//   - meal    : 음식 데이터 객체 (API 가 준 JSON 한 개)
//   - onSelect: 카드/상세보기 버튼을 눌렀을 때 호출할 함수 (음식 id 를 넘겨줌)
//   - onRemove: (선택) 있으면 '삭제' 버튼을 보여 줌 → 즐겨찾기 화면에서만 사용
//
// ※ 카테고리별 목록 API 는 일부 정보만 주기 때문에
//   strCategory / 국가 정보가 없을 수 있습니다. 있을 때만 보여 줍니다.
// ============================================================
function RecipeCard({ meal, onSelect, onRemove }) {
  // 출신 국가: 예전 데이터는 strArea, 새 데이터는 strCountry 에 들어 있어 둘 다 확인
  const area = meal.strArea || meal.strCountry;

  return (
    // 카드 어디를 눌러도 상세 모달이 열림
    <div className="recipe-card card h-100" onClick={() => onSelect(meal.idMeal)}>
      {meal.strMealThumb ? (
        <img
          src={meal.strMealThumb}
          className="card-img-top recipe-img"
          alt={meal.strMeal}
          loading="lazy"
        />
      ) : (
        // 이미지가 없을 때 대체 화면
        <div className="recipe-img no-image">이미지 없음</div>
      )}

      <div className="card-body d-flex flex-column">
        <h5 className="card-title recipe-name">{meal.strMeal}</h5>

        {/* 카테고리, 국가 배지: 값이 있을 때만 출력 */}
        <div className="mb-3">
          {meal.strCategory && <span className="badge tag-category me-1">{meal.strCategory}</span>}
          {area && <span className="badge tag-area">{area}</span>}
        </div>

        <div className="mt-auto d-flex gap-2">
          {/* 버튼을 눌렀을 때 카드의 onClick 까지 같이 실행되지 않도록 stopPropagation */}
          <button
            className="btn btn-orange btn-sm flex-grow-1"
            onClick={(e) => {
              e.stopPropagation();
              onSelect(meal.idMeal);
            }}
          >
            상세보기
          </button>

          {onRemove && (
            <button
              className="btn btn-outline-danger btn-sm"
              onClick={(e) => {
                e.stopPropagation();
                onRemove(meal.idMeal);
              }}
            >
              삭제
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default RecipeCard;
