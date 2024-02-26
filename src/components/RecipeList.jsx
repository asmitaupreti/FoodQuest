import React from 'react'
import RecipeCard from './RecipeCard'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const RecipeList = () => {
  const navigate = useNavigate()
  const recipes = useSelector((state) => state.recipes) || []
  return (
    <div
      className="container mx-auto  mt-10 grid grid-cols-1 lg:grid-cols-3 "
      data-testid="recipe-grid"
    >
      {recipes.map((i) => (
        <RecipeCard
          key={i.id}
          item={i}
          navigate={navigate}
          dataTestId={`recipe-card-${i.id}`}
        />
      ))}
    </div>
  )
}

export default RecipeList
