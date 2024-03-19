import { createAsyncThunk, createSlice, isAnyOf } from '@reduxjs/toolkit'
import {
  getRecipeById,
  getRecipeByIngredient,
  getRecipes,
} from '../api/recipeApiCilent'

const initialState = {
  recipes: [],
  recipe: null,
  status: 'idle',
  error: null,
}

export const getSearchedRecipes = createAsyncThunk(
  'recipe/getSearchedRecipes',
  // The payload creator receives the partial `{title, content, user}` object
  async (query) => {
    // We send the initial data to the fake API server
    const response = await getRecipes(query)
    // The response includes the complete post object, including unique ID

    return response.results
  }
)

export const getSearchedRecipeById = createAsyncThunk(
  'recipe/getSearchedRecipeById',
  // The payload creator receives the partial `{title, content, user}` object
  async (id) => {
    // We send the initial data to the fake API server
    const response = await getRecipeById(id)
    // The response includes the complete post object, including unique ID

    return response.results
  }
)

export const getSearchedRecipeByIngredient = createAsyncThunk(
  'recipe/getSearchedRecipeByIngredient',
  // The payload creator receives the partial `{title, content, user}` object
  async (query) => {
    // We send the initial data to the fake API server
    const response = await getRecipeByIngredient(query)
    // The response includes the complete post object, including unique ID
    return response.results
  }
)

const recipeSlice = createSlice({
  name: 'recipes',
  initialState,
  extraReducers(builder) {
    builder
      .addCase(getSearchedRecipeById.fulfilled, (state, action) => {
        state.status = 'succeeded'
        // Add any fetched recipes to the array
        state.recipe = action.payload
      })
      .addMatcher(
        isAnyOf(
          getSearchedRecipes.pending,
          getSearchedRecipeByIngredient.pending,
          getSearchedRecipeById.pending
        ),
        (state) => {
          state.status = 'loading'
        }
      )
      .addMatcher(
        isAnyOf(
          getSearchedRecipes.rejected,
          getSearchedRecipeByIngredient.rejected,
          getSearchedRecipeById.rejected
        ),
        (state, action) => {
          state.status = 'failed'
          state.error = action.error.message
        }
      )
      .addMatcher(
        isAnyOf(
          getSearchedRecipes.fulfilled,
          getSearchedRecipeByIngredient.fulfilled
        ),
        (state, action) => {
          state.status = 'succeeded'
          state.recipes = action.payload
        }
      )
  },
})

export default recipeSlice.reducer
