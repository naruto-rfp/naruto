import React, { useState, useEffect } from 'react'
import axios from 'axios'

const EventComment = function ({ comment }) {
  const [commentUser, setCommentUser] = useState('')

  useEffect(() => {
    axios.get(`/api/user/${comment.userId}`).then((resp) => setCommentUser(resp.data.username))
  })

  return (
    <div className="py-2">
      <div className='divide-y'>
        <div className="bg-gradient-to-r from-blackCoral to-greenYellow rounded-full font-bold text-xs pr-3 w-auto text-white text-center">{commentUser}</div>
        <div className='text-lg pb-2'>{comment.text}</div>
      </div>
    </div>
  )
}

export default EventComment