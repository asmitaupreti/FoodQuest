import axiosInstance from './apiConfig'

async function getRecipes(query) {
  try {
    const response = await axiosInstance.get(`/getRecipes?query=${query}`)
    return response.data
  } catch (error) {
    console.error('Error getting recipes:', error)
    throw error
  }
}

async function getRecipeById(id) {
  try {
    const response = await axiosInstance.get(`/getRecipe/${id}`)
    return response.data
  } catch (error) {
    console.error('Error getting recipe detail:', error)
    throw error
  }
}

async function getRecipeByIngredient(query) {
  try {
    const response = await axiosInstance.get(
      `/getRecipesByIngredient?query=${query}`
    )
    return response.data
  } catch (error) {
    console.error('Error getting recipes based on ingredients:', error)
    throw error
  }
}

export { getRecipeById, getRecipeByIngredient, getRecipes }
