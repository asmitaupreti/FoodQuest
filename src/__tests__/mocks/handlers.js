import { HttpResponse, http } from 'msw'
import { recipeById, recipeByIngredient, recipeByquery } from './data'

export const handlers = [
  http.get('/.netlify/functions/api/getRecipes', ({ request }) => {
    const url = new URL(request.url)
    const query = url.searchParams.get('query')
    if (query) {
      console.log('Matched query for pasta')

      return HttpResponse.json(recipeByquery)
    }
    // You can add more conditional checks here for other query values
    // or define separate handlers for different scenarios
  }),

  http.get('/.netlify/functions/api/getRecipesByIngredient', ({ request }) => {
    const url = new URL(request.url)
    const query = url.searchParams.get('query')
    if (query) {
      console.log('Matched query for carrot ')
      return HttpResponse.json(recipeByIngredient)
    }
  }),

  http.get('/.netlify/functions/api/getRecipe/:id', ({ params }) => {
    const { id } = params
    if (id) {
      console.log('Matched recipe with ID 10')
      return HttpResponse.json(recipeById)
    }
  }),
]
