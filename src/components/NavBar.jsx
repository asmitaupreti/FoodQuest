import { FaMoon, FaSun } from 'react-icons/fa'
import { logo } from '../assets'
import useTheme from '../context/ThemeContext'
import SearchSection from './SearchSection'
import useRecipeSearch from '../hooks/useRecipeSearch'

const NavBar = () => {
  const { theme, darkTheme, lightTheme } = useTheme()

  const { search, setSearch, handleSearch } = useRecipeSearch()

  return (
    <div className="bg-orange-700 p-6 dark:bg-gray-900">
      <div className="flex justify-between items-center">
        <div className=" hidden lg:flex  items-center space-x-2">
          <img src={logo} className="h-14" />
          <p className="text-white text-xl font-semibold  w-[170px] ">
            Flavor Quest
          </p>
        </div>
        <SearchSection
          search={search}
          setSearch={setSearch}
          searchRecipe={handleSearch}
        />

        <div className="flex space-x-2  p-2">
          <div className="bg-black rounded-lg p-2" onClick={lightTheme}>
            <FaSun
              className={`${
                theme == 'light' ? 'text-orange-700' : 'text-white'
              }`}
            />
          </div>
          <div className="bg-black rounded-lg p-2" onClick={darkTheme}>
            <FaMoon
              className={`${
                theme == 'dark' ? 'text-orange-700' : 'text-white'
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar
