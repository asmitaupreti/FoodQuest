import NavBarHome from '../components/NavBarHome'
import SearchSection from '../components/SearchSection'
import useRecipeSearch from '../hooks/useRecipeSearch'

const Home = () => {
  const { search, setSearch, handleSearch } = useRecipeSearch()

  return (
    <div className="flex flex-col bg-orange-50 dark:bg-gray-900 max-h-screen">
      <NavBarHome />
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="container mx-auto flex w-full justify-center space-x-2 items-center">
          <SearchSection
            search={search}
            setSearch={setSearch}
            searchRecipe={handleSearch}
          />
        </div>
      </div>
    </div>
  )
}

export default Home
