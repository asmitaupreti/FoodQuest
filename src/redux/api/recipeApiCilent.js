import axiosInstance from './apiConfig'

async function getRecipes(query) {
  try {
    const response = await axiosInstance.get(`recipes?query=${query}`)

    return response.data.data
  } catch (error) {
    console.error('Error getting recipes:', error)
    throw error
  }
}

async function getRecipeById(id) {
  try {
    const response = await axiosInstance.get(`recipes/recipe-detail/${id}`)
    return response.data.data
  } catch (error) {
    console.error('Error getting recipe detail:', error)
    throw error
  }
}

async function getRecipeByIngredient(query) {
  try {
    const response = await axiosInstance.get(
      `/recipes/recipe-by-ingredient?ingredients=${query}`
    )
    return response.data.data
  } catch (error) {
    console.error('Error getting recipes based on ingredients:', error)
    throw error
  }
}

export { getRecipeById, getRecipeByIngredient, getRecipes }
