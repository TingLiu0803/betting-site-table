import React from 'react'

interface SearchProps {
  searchQuery: string
  setSearchQuery: (query: string) => void
}

const Search: React.FC<SearchProps> = ({ searchQuery, setSearchQuery }) => {
  return (
    <input
      type="text"
      placeholder="Search by player or team"
      value={searchQuery}
      onChange={e => setSearchQuery(e.target.value)}
      className="form-input w-full rounded-lg border-2 border-orange-500 mr-4 p-2 shadow-lg focus:border-orange-600 focus:ring focus:ring-orange-300 focus:ring-opacity-50 transition duration-200 ease-in-out"
    />
  )
}

export default Search
