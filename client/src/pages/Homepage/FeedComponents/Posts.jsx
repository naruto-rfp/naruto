import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Posts({userId}) {
  const [userPosts, setUserPosts] = useState(['testing number 1', 'testing number 2', 'testing number 3' ])
  useEffect(() => {
    axios
      .get(`/post/${userId}`)
      .then((resp) => setUserPosts(resp))
      .catch((err) => console.log(err))
  }, [])

  return (
    <div className="border-style: soild border-blackCoral">
      {userPosts.map((post) => {
        return (
          <div className="py-3">
            <div className="px-4 py-5 w-50 flex flex-col border-2 border-blackCoral/10 rounded-md drop-shadow-lg">
              <div className="flex flex-row align-top">
                <div className="font-bold text-md pr-3">Title</div>
                <div className='text-xs'>@Team</div>
              </div>
              <div className='text-sm'>Text</div>
              <div className='text-xs'>Cheers</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
