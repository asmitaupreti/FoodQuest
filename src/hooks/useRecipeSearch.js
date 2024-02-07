import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  getSearchedRecipeByIngredient,
  getSearchedRecipes,
} from '../redux/slice/recipeSlice'
import { useNavigate } from 'react-router'

const useRecipeSearch = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [search, setSearch] = useState('')

  const handleSearch = async (selectedFilter) => {
    if (selectedFilter === 'recipe') {
      await dispatch(getSearchedRecipes(search))
    } else if (selectedFilter === 'ingredient') {
      await dispatch(getSearchedRecipeByIngredient(search))
    }
    navigate('/recipe')
  }

  return { search, setSearch, handleSearch }
}

export default useRecipeSearch
