import { useEffect } from 'react'

const SearchResult = ({ setSearch, searchSuggestion }) => {
  return (
    <div
      className={`${
        searchSuggestion.length > 0 ? 'h-[250px] p-4' : 'h-0'
      } absolute top-16 bg-white dark:bg-gray-900  w-full space-y-4 mt-1 rounded-lg shadow-md  overflow-y-scroll transition-all delay-250 duration-300 `}
    >
      {searchSuggestion.length > 0 &&
        searchSuggestion.map((item, key) => (
          <div
            key={key}
            onClick={() => setSearch(item.title)}
            className="hover:bg-slate-50  dark:hover:bg-slate-700 p-2 cursor-pointer"
          >
            <p className="dark:text-white">{item.title}</p>
          </div>
        ))}
    </div>
  )
}

export default SearchResult
