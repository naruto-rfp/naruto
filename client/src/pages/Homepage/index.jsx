import React from 'react'
import SearchBar from './searchBar'
import Feed from './feed'
import TeamsPlayFor from './teamsPlayFor'
import TeamsFollow from './teamsFollow'

// get userId from session?
export default function Home({ userId }) {
  return (
    <div className="flex flex-row pt-10">
      <div className="text-black flex-col justify-center w-2/3 pl-20">
        <SearchBar />
        <Feed userId={userId} />
      </div>
      <div className="flex-col justify-center w-1/3 pr-20">
        <TeamsPlayFor />
        <TeamsFollow />
      </div>
    </div>
  )
}
