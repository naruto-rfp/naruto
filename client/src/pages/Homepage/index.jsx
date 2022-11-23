import React, { useState, useEffect } from 'react'
import SearchBar from './searchBar'
import Feed from './feed'
import TeamsPlayFor from './teamsPlayFor'
import TeamsFollow from './teamsFollow'
import axios from 'axios'

export default function Home({ userId }) {
  const [currentUser, setCurrentUser] = useState({})

  // useEffect(() => {
  //   axios.get(`/user/${userId}`)
  //     .then((resp) => {
  //       setCurrentUser(resp)
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     })
  // }, [])

  return (
    <div className="flex flex-row">
      <div className="text-black flex-col justify-center w-2/3 pl-10">
        <SearchBar />
        <Feed userId={userId}/>
      </div>
      <div className="flex-col justify-center w-1/3 pr-10">
        <TeamsPlayFor />
        <TeamsFollow />
      </div>
    </div>
  )
}
