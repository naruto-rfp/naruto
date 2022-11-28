import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useStore } from '../../../lib/fastContext'
import EventComments from './EventCommentModal'

export default function Events({ event }) {
  const [eventTeam, setEventTeam] = useState('')
  const [eventComments, setEventComments] = useState([])
  const newDate = new Date(event.date)

  useEffect(() => {
    axios.get(`/api/teams/${event.teamId}`).then((resp) => setEventTeam(resp.data[0].name))
  }, [])

  useEffect(() => {
    if (event) {
      axios.get(`/api/eventcomments/${event.id}`).then((resp) => setEventComments(resp.data))
    }
  }, [])

  const [modal, setModal] = useStore('modal')
  const handleClick = () => {
    setModal({
      ...modal,
      content: (
        <div>
          {eventComments.map((comment) => {
            return <EventComments comment={comment} />
          })}
        </div>
      ),
    })
  }

  return (
    <div className="py-3">
      <div onClick={handleClick} className="px-4 py-3 w-50 flex flex-col border-2 border-blackCoral/10 rounded-md drop-shadow-lg">
        <div className="flex flex-row py-1">
          <div className="font-bold pr-3 text-xs">{event.name}</div>
          <div className="bg-blackCoral/30 rounded-md font-bold text-xs">Public</div>
        </div>
        <div className="text-xs pb-2">Team {eventTeam}</div>
        <div className="divide-y">
          <div className="text-lg pb-2">{event.description}</div>
          <div className="flex flex-row text-xs py-2">
            <div className="pr-5">{newDate.toGMTString()}</div>
            <div>@{event.location}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
