const STORAGE_KEY = 'recipe_favorites';
/** 저장된 즐겨찾기 읽기 (없거나 깨져 있으면 빈 배열) */
export function loadFavorites() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return Array.isArray(saved) ? saved : [];
  } catch {
    return [];
  }
}

/** 즐겨찾기 목록 저장 */
export function saveFavorites(list) {
     localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
}