import React, { useState } from 'react'

export default function Posts({userPosts}) {
  const [userPostsTest, setUserPosts] = useState(['testing number 1', 'testing number 2', 'testing number 3' ])

  return (
    <div className="border-style: soild border-blackCoral">
      {userPostsTest.map((post) => {
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
