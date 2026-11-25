// ============================================================
// 역할: 즐겨찾기 화면
//   - 저장해 둔 음식 목록을 보여 주고, 삭제할 수 있습니다.
//   - 즐겨찾기가 하나도 없으면 안내 문구를 보여 줍니다.
// props
//   - favorites   : 즐겨찾기 음식 배열 (App 이 관리, localStorage 와 연결됨)
//   - onRemove    : 삭제 버튼을 눌렀을 때 호출할 함수 (음식 id 전달)
//   - onOpenDetail: 음식 상세 모달을 열 때 호출 (음식 id 전달)
// ============================================================
import RecipeList from '../components/RecipeList';

function Favorites({ favorites, onRemove, onOpenDetail }) {
  return (
    <div>
      <h2 className="section-title">
        ♥ 즐겨찾기 <small className="text-muted fs-6">({favorites.length}개)</small>
      </h2>

      {/* 즐겨찾기 데이터는 이미 내 브라우저에 있으므로 loading, error 는 필요 없음 */}
      <RecipeList
        meals={favorites}
        loading={false}
        error=""
        emptyMessage="즐겨찾기한 음식이 없습니다. 마음에 드는 음식을 상세보기에서 ♡ 로 추가해 보세요."
        onSelect={onOpenDetail}
        onRemove={onRemove}
      />
    </div>
  );
}

export default Favorites;
