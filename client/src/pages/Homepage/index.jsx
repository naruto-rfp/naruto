import React from 'react'
import SearchBar from './searchBar'
import Feed from './feed'
import TeamsPlayFor from './teamsPlayFor'
import TeamsFollow from './teamsFollow'

export default function Home({ userId }) {
  return (
    <div className="flex flex-row pt-10">
      <div className="text-black flex-col justify-center w-2/3 pl-10">
        <SearchBar />
        <Feed userId={userId} />
      </div>
      <div className="flex-col justify-center w-1/3 pr-10">
        <TeamsPlayFor />
        <TeamsFollow />
      </div>
    </div>
  )
}
