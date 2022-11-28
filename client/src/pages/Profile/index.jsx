import { useState, useEffect } from 'react'
import { useOutletContext, useParams } from 'react-router-dom'
import axios from 'axios'
import RadarChart from './RadarChart'
import Info from './Info'
import About from './About'

export default function Profile() {
  const { currentUserData } = useOutletContext()
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
  const [editable, setEditable] = useState(false)

  const fetchData = async () => {
    const { data } = await axios.get(`/api/user/${id}`)
    setUserData((prev) => ({
      ...prev,
      id,
      firstName: data.firstName,
      lastName: data.lastName,
      about: data.about,
      email: data.email,
      profilePic: data.profilePic,
      speed: data.speed,
      reliability: data.reliability,
      strength: data.strength,
      jumping: data.jumping,
      aerobic: data.aerobic,
    }))

    if (data.id === currentUserData.id) {
      setEditable(true)
    }
  }

  useEffect(() => {
    fetchData()
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
          <About
            editable={editable}
            userData={userData}
            about={userData.about}
            fetchData={fetchData}
          />
        </div>
      </div>
    </>
  )
}
