import express, { Router } from 'express'
import cors from 'cors'
import 'dotenv/config'
import serverless from 'serverless-http'

const baseUrl = 'https://api.spoonacular.com'
const api = express()
const router = Router()
api.use(cors())

const PORT = 8000
const apiKey = process.env.API_KEY

router.get('/getRecipes', async (req, res) => {
  const { query } = req.query
  const response = await fetch(
    `${baseUrl}/recipes/complexSearch?apiKey=${apiKey}&query=${query}`
  )
  const data = await response.json()
  res.json(data)
})

router.get('/getRecipesByIngredient', async (req, res) => {
  const { query } = req.query
  const response = await fetch(
    `${baseUrl}/recipes/findByIngredients?apiKey=${apiKey}&ingredients=${query}&number=10&ignorePantry=false`
  )
  const data = await response.json()
  res.json(data)
})

router.get('/getRecipe/:id', async (req, res) => {
  const id = req.params.id
  const response = await fetch(
    `${baseUrl}/recipes/informationBulk?apiKey=${apiKey}&ids=${id}&includeNutrition=true`
  )
  const data = await response.json()
  res.json(data)
})

api.use('/.netlify/functions/api', router)

api.listen(8000, () => console.log(`Server is running on ${PORT} `))
export const handler = serverless(api)
