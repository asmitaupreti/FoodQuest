import NavBar from '../components/NavBar'
import RecipeList from '../components/RecipeList'

const RecipeListDisplay = () => {
  return (
    <div className="bg-orange-50 dark:bg-gray-900 min-h-screen">
      <NavBar />
      <RecipeList />
    </div>
  )
}

export default RecipeListDisplay
