import { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'

export const FilterButton = ({ selectedFilter, setFilter }) => {
  const [showFilterList, setShowFilterList] = useState(false)

  const toggleFilterList = () => {
    setShowFilterList((prev) => !prev)
  }

  return (
    <div className="flex flex-col relative items-center">
      <div
        className="bg-black cursor-pointer rounded-lg h-14 p-4 flex items-center justify-center "
        onClick={toggleFilterList}
        role="button"
        aria-label="Search by filter"
      >
        <p className="hidden lg:block text-white mr-2">Search By </p>
        <IoIosArrowDown className="text-white h-6 w-6" />
      </div>
      {showFilterList && (
        <div className="absolute top-12 ">
          <div className="py-3 ">
            <div
              className="w-4 h-4 left-10 absolute 
                    mt-1 bg-white rotate-45"
            ></div>
          </div>
          <ul className="px-1 py-2 bg-white rounded-lg w-22 lg:w-full shadow-md">
            <li
              className="px-3 py-1 hover:bg-slate-50 cursor-pointer"
              onClick={() => [setFilter('recipe'), toggleFilterList()]}
              data-testid="filter-by-recipe"
            >
              Recipe
            </li>
            <li
              className="px-3 py-1 hover:bg-slate-50  cursor-pointer"
              onClick={() => [setFilter('ingredient'), toggleFilterList()]}
              data-testid="filter-by-ingredient"
            >
              Ingredient
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}
