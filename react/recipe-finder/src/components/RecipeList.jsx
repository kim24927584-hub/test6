import React from 'react'
import RecipeCard from './RecipeCard';

function RecipeList({meals, loading, error, emptyMessage, onSelect, onRemove}) {
    if (loading) {
    return (
      <div className="status text-center py-5">
        <div className="spinner-border text-warning mb-2" role="status" />
        <p className="mb-0">불러오는 중입니다...</p>
      </div>
    );
  }
  if(error){
      return <div className="alert alert-danger text-center my-4">{error}</div>;
  }
  if(meals.length === 0){
      return <div className="status text-center py-5">{emptyMessage}</div>;
  }
    return (
    <div className='row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 g-4'>
        {meals.map((meal)=>(
            <div className="col" key={meal.idMeal}>
                <RecipeCard meal={meal} onSelect={onSelect} onRemove={onRemove}/>
            </div>
        ))}
    </div>
  )
}

export default RecipeList