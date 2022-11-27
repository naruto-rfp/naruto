import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import RadarChart from './RadarChart'
import Info from './Info'
import About from './About'

export default function Profile() {
  const { id } = useParams()
  const [userData, setUserData] = useState({
    id: null,
    firstName: '',
    lastName: '',
    about: '',
    email: '',
    profilePic: '',
    speed: 0,
    reliability: 0,
    strength: 0,
    jumping: 0,
    aerobic: 0,
  })

  useEffect(() => {
    axios.get('/api/user/1').then((results) => {
      setUserData((prev) => ({
        ...prev,
        id,
        firstName: results.data.firstName,
        lastName: results.data.lastName,
        about: results.data.about,
        email: results.data.email,
        profilePic: results.data.profilePic,
        speed: results.data.speed,
        reliability: results.data.reliability,
        strength: results.data.strength,
        jumping: results.data.jumping,
        aerobic: results.data.aerobic,
      }))
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <section className="justify-center">
        <div className="text-gray-600 body-font">
          <div className="flex justify-center items-center flex-wrap mb-10">
            <img
              className="h-64 w-full object-cover"
              src="https://media.discordapp.net/attachments/1042931039699488860/1045026016264990740/Naruto_Banner.webp"
              alt=""
            />
          </div>
        </div>
      </section>
      <div className="max-w-6xl mx-auto mt-12">
        <section className="py-6 flex flex-row gap-4">
          <Info
            firstName={userData.firstName}
            lastName={userData.lastName}
            profilePic={userData.profilePic}
          />
          <div className="bg-white flex-grow-0 rounded-md px-6 py-8">
            <RadarChart
              speed={userData.speed}
              reliability={userData.reliability}
              strength={userData.strength}
              jumping={userData.jumping}
              aerobic={userData.aerobic}
            />
          </div>

          <div className="flex-grow rounded-md px-6 py-8 bg-rose-400">
            <div className="heading text-center">
              <h1 className="text-xl">Team Members</h1>
            </div>
          </div>

          <div className="flex-grow rounded-md px-y py-8 bg-rose-400">
            <div className="heading text-center">
              <h1 className="text-xl">Fans</h1>
            </div>
          </div>
        </section>
        <div className="flex border-solid border-2 border-indigo-600 h-80  justify-center items-center flex-wrap mt-10">
          <About userData={userData} about={userData.about} />
        </div>
      </div>
    </>
  )
}
