import { FaMoon, FaSun } from 'react-icons/fa'
import { logo } from '../assets'
import useTheme from '../context/ThemeContext'
const NavBarHome = () => {
  const { theme, darkTheme, lightTheme } = useTheme()

  return (
    <div className="bg-orange-50 p-6 shadow-md dark:bg-gray-900">
      <div className="flex justify-between items-center">
        <div className="flex  items-center space-x-2">
          <img src={logo} className="h-14" />
          <p className="text-orange-700 text-xl font-semibold hidden lg:block">
            Flavor Quest
          </p>
        </div>

        <p className="text-orange-700 text-xl italic space-x-2  text-center">
          Get ready to dive into the realm of food
        </p>
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

export default NavBarHome
