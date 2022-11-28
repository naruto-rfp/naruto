import React from 'react'
import { useOutletContext } from 'react-router-dom'
import SearchBar from './searchBar'
import Feed from './feed'
import TeamsPlayFor from './teamsPlayFor'
import TeamsFollow from './teamsFollow'

export default function Home() {
  const { currentUserData } = useOutletContext()
  return (
    <div className="flex flex-row pt-10">
      <div className="text-black flex-col w-2/3 pl-20 justify-center items-center">
        <SearchBar />
        <Feed userId={currentUserData.id} />
      </div>
      <div className="flex-col w-1/3 pr-20">
        <TeamsPlayFor userId={currentUserData.id} />
        <TeamsFollow userId={currentUserData.id} />
      </div>
    </div>
  )
}
