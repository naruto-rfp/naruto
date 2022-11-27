import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Posts from './FeedComponents/Posts'
import Events from './FeedComponents/Events'

export default function Feed({ userId }) {
  // test data
  const [userPostsTest, setUserPostsTest] = useState([{id: 1, user_id: 1, teamName: 'team1', likes: 120, title: 'Random Test Data1 in feed', content: '1Just some random test data and text adsadsadsadadadadadsdad'}, {id: 2, user_id: 2, teamName: 'team2', likes: 220, title: 'Random Test Data2', content: '2Just some random test data and text adsadsadsadadadadadsdad'}, {id: 3, user_id: 3, teamName: 'team3', likes: 320, title: 'Random Test Data3', content: '3Just some random test data and text adsadsadsadadadadadsdad'}, {id: 4, user_id: 4, teamName: 'team4', likes: 420, title: 'Random Test Data4', content: '4Just some random test data and text adsadsadsadadadadadsdad'}, {id: 5, user_id: 5, teamName: 'team5', likes: 520, title: 'Random Test Data5', content: '5Just some random test data and text adsadsadsadadadadadsdad'}])

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
{/* <div className="h-"></div> */}
          {/* <div className="overflow-y-auto"> */}
          <div className="p-3 mt-6 bg-white h-full overflow-y-auto ">
            <div className={activeTab === 1 ? 'block' : 'hidden'}>
              {
                userPostsTest.map((post) => {
                  return <Posts post={post}/>
                })
              }
            </div>
            {/* </div> */}

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
