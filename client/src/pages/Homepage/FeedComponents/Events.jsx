import React from 'react'
import { useStore } from '../../../lib/fastContext'

export default function Events() {  // team id is passed down
  const events = [{name: "Sunset Semi-Finals", status: "Public", date: "Nov 25 2022", location: "Sunset Recreation Center", description: "Come join us this coming Friday to cheer on your favorite team, the Sunset Oceans as they take on the Misson Blues in this year's community league semi-finals!"}]

  // axios request to get all the events related to the team id
    // set the events state with the result
  const [modal, setModal] = useStore('modal')
  const handleClick = () => {
    setModal({
      ...modal,
      content: (
        <div className="bg-black text-white py-2">
          <h1>Cheers 100</h1>

          <div className="flex flex-row py-2">
            <div className="bg-blackCoral/10 rounded-full flex justify-center align-bottom pr-2">
              <h1>AnonymousElephant</h1>
            </div>
            <div className="border border-blackCoral/10 rounded-full flex justify-center ">
              <h1>Can't wait to go!</h1>
            </div>
          </div>
          <div className="flex flex-row py-2">
            <div className="bg-blackCoral/10 rounded-full flex justify-center align-bottom pr-2">
              <h1>BlueOceanChamp</h1>
            </div>
            <div className="border border-blackCoral/10 rounded-full flex justify-center py-2">
              <h1>Oceans will take home the trophy!</h1>
            </div>
          </div>
          <div className="flex flex-row py-2">
            <div className="bg-blackCoral/10 rounded-full flex justify-center align-bottom pr-2">
              <h1>RandomDude</h1>
            </div>
            <div className="border border-blackCoral/10 rounded-full flex justify-center py-2">
              <h1>will there be free food?</h1>
            </div>
          </div>
        </div>
      ),
    })
  }

  return (
    <>
      {events.map((event) => {
        return (
          <div onClick={handleClick} className="px-4 py-2 w-50 flex flex-col border-2 border-blackCoral/10 rounded-md drop-shadow-lg">
            <div className="flex flex-row py-1">
              <div className="font-bold pr-5">{event.name}</div>
              <div className="bg-blackCoral/30 rounded-md font-bold">{event.status}</div>
            </div>
            <div className="flex flex-row text-xs py-1">
              <div className="pr-5">{event.date}</div>
              <div>{event.location}</div>
            </div>
            <div className="text-sm">{event.description}</div>
          </div>
        )
      })}
    </>
  )
}
