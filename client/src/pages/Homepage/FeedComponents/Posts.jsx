import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Posts({ post }) {
  const [postTeam, setPostTeam] = useState('')

  useEffect(() => {
    axios
      .get(`/api/teams/${post.teamId}`)
      .then((resp) => {
        setPostTeam(resp.data[0])
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <div className="border-style: soild border-blackCoral">
      <div className="py-3">
        <div className="px-4 py-5 w-50 flex flex-col border-2 border-blackCoral/10 rounded-md drop-shadow-lg">
          <div className="flex flex-col pb-2">
            <div className="font-bold text-xs pr-3">{post.title}</div>
            <div className='text-xs'>Team {postTeam.name}</div>
          </div>
          <div className='divide-y'>
            <div className='text-lg pb-2'>{post.text}</div>
            <div className='text-xs pt-2'>{post.cheers} Cheers</div>
          </div>
        </div>
      </div>
    </div>
  )
}
