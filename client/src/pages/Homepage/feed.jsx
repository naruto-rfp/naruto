import React, { useState, useEffect } from 'react'
import Posts from './FeedComponents/Posts'
import Events from './FeedComponents/Events'
import axios from 'axios'

export default function Feed({  }) { //pass in user id and team id

  const [activeTab, setActiveTab] = useState(1)
  const [userPost, setUserPosts] = useState([])
  const [userTeamsEvents, setUserTeamsEvents] = useState([])
  // axios get request

  // useEffect(() => {
  //   axios.get(`/posts/${userId}`)
  //     .then((resp) => setUserPosts(resp))
  //     .catch((err) => console.log(err))
  // })

  const handleTabToggle = (tab) => {
    // if userTeamsEvents is empty
    if (!userTeamsEvents.length) {
      axios.get(`/events/${teamId}`)
        .then((resp) => setUserTeamsEvents(resp))
        .catch((err) => console.log(err))
      // axios get request for the events
      // reset the active tab to input tab number
    }
    // otherwise
      // reset the active tab to unput tab number
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
              <Posts />
              {/* map once the backend is connected */}
            </div>
            <div className={activeTab === 2 ? 'block' : 'hidden'}>
              <Events />
              {/* map once the backend is connected */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
  //map over all the post and creat a individual div for each post
  //map over all the event comments and cheers and pass down the event to each individual event modal
}
