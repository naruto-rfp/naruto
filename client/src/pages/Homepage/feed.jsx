import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Posts from './FeedComponents/Posts'
import Events from './FeedComponents/Events'

export default function Feed({ userId }) {
  const [activeTab, setActiveTab] = useState(1)
  const [userPosts, setUserPosts] = useState([])
  const [userTeamsEvents, setUserTeamsEvents] = useState([])

  useEffect(() => {
    axios.get(`/posts/${userId}`)
      .then((resp) => setUserPosts(resp))
      .catch((err) => console.log(err))
  })

  // still need to implement
  const handleTabToggle = (tab) => {
    // reset the current active tab
    // if userTeamEvents is empty
     // get request to coaches, member, and fan to get all team id where the current userId exist
    //  get all the events matching the teamid passed in as param
    // set the userTeamEvents with the respond events
  }

  return (
    <div>
      <div className="container mx-auto mt-12">
        <div className="flex flex-col items-left justify-center max-w-xl">
          <ul className="flex space-x-2">
            <li>
              <button
                type="button"
                href="#"
                onClick={() => setActiveTab(1)}
                className={`${
                  activeTab === 1 ? 'bg-gradient-to-r from-blackCoral to-greenYellow text-white' : 'bg-blackCoral/10'
                } inline-block px-4 py-2 text-gray-600 bg-white rounded shadow`}
              >
                Posts
              </button>
            </li>
            <li>
              <button
                type="button"
                href="#"
                onClick={() => setActiveTab(2)}
                className={`${
                  activeTab === 2 ? 'bg-gradient-to-r from-blackCoral to-greenYellow text-white' : 'bg-blackCoral/10'
                } inline-block px-4 py-2 text-gray-600 bg-white rounded shadow`}
              >
                Events
              </button>
            </li>
          </ul>
          <div className="p-3 mt-6 bg-white h-full">
            <div className={activeTab === 1 ? 'block' : 'hidden'}>
              <Posts userPosts={userPosts}/>
              {/* map once the backend is connected */}
            </div>
            <div className={activeTab === 2 ? 'block' : 'hidden'}>
              <Events userTeamsEvents={userTeamsEvents}/>
              {/* map once the backend is connected */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
