import { useParams } from 'react-router'
import NavBar from '../components/NavBar'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSearchedRecipeById } from '../redux/slice/recipeSlice'

const RecipeDetail = () => {
  const { id } = useParams()

  const dispatch = useDispatch()
  const recipe = useSelector((state) => state.recipe)

  useEffect(() => {
    dispatch(getSearchedRecipeById(id))
  }, [id])

  return (
    <div className="bg-orange-50 dark:bg-gray-900 min-h-screen">
      <NavBar />
      <div className="container mx-auto lg:p-2 ">
        <img
          src={recipe?.image}
          className="object-cover w-full h-[400px] rounded-none lg:rounded-lg lg:mx-6 lg:my-4"
        />
        <div className="flex flex-col  space-y-6  lg:mx-6 lg:my-4 bg-white rounded-lg p-8 w-full dark:bg-gray-800">
          <p className="text-3xl dark:text-white">{recipe?.title}</p>

          <p
            className="text-sm dark:text-white"
            dangerouslySetInnerHTML={{ __html: recipe?.summary }}
          ></p>
          <p className="text-2xl dark:text-white">Ingredients</p>
          <div className="bg-slate-100 p-4 rounded-md dark:bg-gray-700">
            {recipe?.extendedIngredients
              .filter(
                (item, index, self) =>
                  self.findIndex((i) => i.id === item.id) === index
              )
              .map((i) => (
                <div key={i.id} className="p-2 flex items-center space-x-3">
                  <div className="bg-orange-800 w-2 h-2 rounded-full"></div>
                  <p className="dark:text-white">{i?.original}</p>
                </div>
              ))}
          </div>

          <p className="text-2xl dark:text-white">Instructions</p>
          <div className="bg-red-50 dark:bg-gray-700 p-4 rounded-md">
            {recipe?.analyzedInstructions[0]?.steps.map((i) => (
              <div key={i?.number} className="p-2 flex items-start space-x-3">
                <p className="text-orange-800">{i?.number}</p>
                <p className="dark:text-white">{i?.step}</p>
              </div>
            ))}
          </div>

          <p className="text-2xl dark:text-white">Nutrition</p>
          <p className="dark:text-white">
            The table shows nutritional values per serving without additional
            fillings
          </p>
          <div className=" grid grid-cols-2 p-2  ">
            <p className="p-2 dark:text-white">Carbs</p>
            <p className="p-2 dark:text-white">
              {recipe?.nutrition?.caloricBreakdown?.percentCarbs}
            </p>
            <hr />
            <hr />
            <p className="p-2 dark:text-white">Protein</p>
            <p className="p-2 dark:text-white">
              {recipe?.nutrition?.caloricBreakdown?.percentProtein}
            </p>
            <hr />
            <hr />
            <p className="p-2 dark:text-white">Fat</p>
            <p className="p-2 dark:text-white">
              {recipe?.nutrition?.caloricBreakdown?.percentFat}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecipeDetail
