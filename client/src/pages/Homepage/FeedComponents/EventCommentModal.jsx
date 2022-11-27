import React from 'react'

const EventComment = function () {
  return (
    <div className=" text-black py-2">
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
  )
}

export default EventComment