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
    // TODO: replace 1 to { id } in useParams
    axios.get('/api/user/1').then((results) => {
      console.log(results)
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
        jumping: results.data.aerobic,
      }))
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <section className="h-full justify-center">
      <div className="text-gray-600 body-font">
        <div className="flex justify-center items-center flex-wrap mb-10">
          <img
            className="h-64"
            src="https://media.discordapp.net/attachments/1042931039699488860/1045026016264990740/Naruto_Banner.webp"
            alt=""
          />
        </div>
        <div className="grid grid-cols-4 gap-4">
          <div className="items-center text-center bg-darkBlueGray rounded-lg h-96">
            <Info
              firstName={userData.firstName}
              lastName={userData.lastName}
              profilePic={userData.profilePic}
            />
          </div>
          <div className="border-solid border-2 border-indigo-600 items-center text-center h-96">
            <RadarChart />
          </div>
          <div className="items-center text-center h-96">Followers</div>
          <div className="items-center text-center h-96">Members</div>
        </div>
        <div className="flex justify-center items-center flex-wrap mt-10">
          <About about={userData.about} />
        </div>
      </div>
    </section>
  )
}
