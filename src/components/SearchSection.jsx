import React, { useState } from 'react'
import SearchBar from './SearchBar'
import { FilterButton } from './FilterButton'
import { HiPaperAirplane } from 'react-icons/hi2'

const SearchSection = ({ search, setSearch, searchRecipe }) => {
  const [selectedFilter, setFilter] = useState('recipe')
  return (
    <div className="flex w-full justify-center space-x-2 items-center">
      <SearchBar search={search} setSearch={setSearch} />
      <FilterButton selectedFilter={selectedFilter} setFilter={setFilter} />
      <div
        role="button"
        aria-label="Search for recipe"
        className="bg-black rounded-lg  h-14 p-4 cursor-pointer "
        onClick={() => searchRecipe(selectedFilter)}
      >
        <HiPaperAirplane className="text-white h-6 w-6" />
      </div>
    </div>
  )
}

export default SearchSection
