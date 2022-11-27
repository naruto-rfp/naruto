import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Posts({ post }) {
  // const [userPostsTest, setUserPosts] = useState([{id: 1, user_id: 1, team_id: 1, likes: 120, title: 'Random Test Data1', content: '1Just some random test data and text adsadsadsadadadadadsdad'}, {id: 2, user_id: 2, team_id: 2, likes: 220, title: 'Random Test Data2', content: '2Just some random test data and text adsadsadsadadadadadsdad'}, {id: 3, user_id: 3, team_id: 3, likes: 320, title: 'Random Test Data3', content: '3Just some random test data and text adsadsadsadadadadadsdad'}])

  const [postTeam, setPostTeam] = useState('')

  // get team name from teams table where teams id is equal to post.team_id
  useEffect(() => {
    axios
      .get(`/team/${post.team_id}`)
      .then((resp) => {
        setPostTeam(resp)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <div className="border-style: soild border-blackCoral">
      {/* {userPostsTest.map((post) => { */}
        {/* return ( */}
          <div className="py-3">
            <div className="px-4 py-5 w-50 flex flex-col border-2 border-blackCoral/10 rounded-md drop-shadow-lg">
              <div className="flex flex-col pb-2">
                <div className="font-bold text-xs pr-3">{post.title}</div>
                <div className='text-xs'>@{post.teamName}</div>
              </div>
              <div className='divide-y'>
                <div className='text-lg pb-2'>{post.content}</div>
                <div className='text-xs pt-2'>{post.likes} Cheers</div>
              </div>
            </div>
          </div>
        {/* ) */}
      {/* })} */}
    </div>
  )
}
