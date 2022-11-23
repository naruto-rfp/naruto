import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function SearchBar() {
  const [searchText, setSearchText] = useState('')
  const navigate = useNavigate()

  const handleSearch = function (e) {
    // will need to route the search to the team or profile page
    e.preventDefault()
    if (searchText.trim()) {
      navigate(`/team/${searchText}`)
    } else {
      navigate('/team')
    }
  }

  return (
    <div className="flex justify-left">
      <form className="relative w-2/3" onSubmit={(e) => handleSearch(e)}>
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
          className="rounded-full bg-blackCoral/10 w-full"
          type="text"
          placeholder="Search..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </form>
    </div>
  )
}
