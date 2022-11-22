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
import { useStore } from '../../lib/fastContext'


  const [modal, setModal] = useStore('modal')
  const handleClick = () => {
    setModal({
      ...modal,
      content: (
        <div className="bg-black text-white">
          <h1>Test</h1>
        </div>
      ),
    })
  }

  return (
    <div className="text-black">
      <div>home page here</div>
      <div>
        <button type="button" onClick={handleClick} className="px-4 py-2 bg-sky-500">
          Open Modal
        </button>
      </div>
    </div>
  )
}
