import { useEffect, useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import SearchResult from './SearchResult'
import { useSelector } from 'react-redux'

const SearchBar = ({ search, setSearch }) => {
  const searchSuggestion = useSelector((state) => state.recipes)
  const [filteredSearchedData, setFilteredSearchedData] = useState([])

  const fetchSuggestion = async (value) => {
    if (value != '') {
      const filterData = searchSuggestion
        .filter((item) => {
          const searchTerm = search.toLowerCase()
          const title = item.title.toLowerCase()

          return (
            title && title.includes(searchTerm) && title !== value.toLowerCase()
          )
        })
        .slice(0, 5)
      setFilteredSearchedData(filterData)
    } else {
      setFilteredSearchedData([])
    }
  }

  const onHandleChange = (e) => {
    setSearch(e.target.value)
  }

  useEffect(() => {
    fetchSuggestion(search)
  }, [search])

  return (
    <div className=" flex flex-col w-[75%] lg:w-[50%] relative ">
      <div className="bg-white dark:bg-gray-900 border-orange-700 border-2  rounded-lg p-3 flex items-center space-x-3">
        <FaSearch className="text-orange-700" />
        <input
          type="text"
          value={search}
          onChange={(e) => onHandleChange(e)}
          placeholder="Search......"
          className="text-xl bg-transparent outline-none w-full placeholder:text-orange-600 dark:text-white"
        />
      </div>
      <SearchResult
        setSearch={setSearch}
        searchSuggestion={filteredSearchedData}
      />
    </div>
  )
}

export default SearchBar
