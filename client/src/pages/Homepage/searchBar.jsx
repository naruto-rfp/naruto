import React, { useState } from 'react'

export default function SearchBar() {
  const [searchText, setSearchText] = useState('')

  const handleSearch = function (e) {
    e.preventDefault()
    // route the search to the team name or user name
    setSearchText('')
  }

  return (
    <div className="flex item-center justify-left">
      <form className="relative" onSubmit={(e) => handleSearch(e)}>
        <svg
          className="h-5 w-5 absolute right-0"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
        <input
          type="text"
          placeholder="Search..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </form>
    </div>
  )
}