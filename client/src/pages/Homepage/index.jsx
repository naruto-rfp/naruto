import React from 'react'
import { useOutletContext } from 'react-router-dom'
import SearchBar from './searchBar'
import Feed from './feed'
import TeamsPlayFor from './teamsPlayFor'
import TeamsFollow from './teamsFollow'

// get userId from session?
export default function Home() {
  const { currentUserData } = useOutletContext()
  return (
    <div className="flex flex-row pt-10">
      <div className="text-black flex-col justify-center w-2/3 pl-20">
        <SearchBar />
        <Feed /*userId={currentUserData.id}*/ />
      </div>
      <div className="flex-col justify-center w-1/3 pr-20">
        <TeamsPlayFor /*userId={currentUserData.id}*/ />
        <TeamsFollow /*userId={currentUserData.id}*/ />
      </div>
    </div>
  )
}
