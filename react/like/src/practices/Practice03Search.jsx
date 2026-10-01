import {useState, useMemo} from 'react'
const products = [
  { id: 1, name: '노트북', category: '전자기기', price: 1200000 },
  { id: 2, name: '마우스', category: '전자기기', price: 30000 },
  { id: 3, name: '키보드', category: '전자기기', price: 80000 },
  { id: 4, name: '티셔츠', category: '의류', price: 25000 },
  { id: 5, name: '청바지', category: '의류', price: 60000 },
  { id: 6, name: '노트북 거치대', category: '전자기기', price: 35000 },
];

function Practice03Search() {
  const [keyword, setKeyword] = useState(''); //상품 검색
  const [category, setCategory] = useState('전체'); //카테고리


  const fillteredProducts = useMemo(function(){
    console.log("필터실행");
    return products.filter(function(product){
      const keywordMatch =  product.name.includes(keyword);
      const categoryMatch = category === "전체" || product.category === category;
      return keywordMatch && categoryMatch;
    })
  },[keyword, category])
  return (
    <div>
        <h2>상품 검색 기능</h2>
        <div>
            <input type="text"
                   value={keyword}
                   onChange={(e) => setKeyword(e.target.value)} 
                   placeholder='상품검색'
            />
        </div>
        <div>
            <label htmlFor="category">카테고리</label>
            <select 
                id="category" 
                value={category}
                onChange={(e) => setCategory(e.target.value)}
            >
                <option value="전체">전체</option>
                <option value="전자기기">전자기기</option>
                <option value="의류">의류</option>
            </select>
        </div>


        {fillteredProducts.map((product) =>(  
            <div key={product.id}>
                <div>
                    <strong>{product.name}</strong>
                    <div>{product.category}</div>
                </div> 
                <span>{product.price.toLocaleString()}원</span>
             </div>
        ))};
    </div>
  )
}

export default Practice03Search