import React, { useState, useEffect } from 'react'
import SearchBar from './searchBar'
import Feed from './feed'
import TeamsPlayFor from './teamsPlayFor'
import TeamsFollow from './teamsFollow'
import axios from 'axios'

export default function Home({ userId }) {
  const [currentUser, setCurrentUser] = useState({})

  useEffect(() => {
    axios.get(`/user/${userId}`)
      .then((resp) => {
        setCurrentUser(resp)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <>
    <div className="text-black">
      <SearchBar />
      <Feed />
    </div>
    <div>
      <TeamsPlayFor/>
      <teamsFollow/>
    </div>
    </>
  )
}
