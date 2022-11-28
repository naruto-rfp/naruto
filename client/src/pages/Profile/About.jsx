import axios from 'axios'
import { useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import EditProfileModal from './EditProfileModal'

export default function About({ editable, userData, about, fetchData }) {
  const { currentUserData } = useOutletContext()
  const [modal, setModal] = useState(false)
  const [inputs, setInputs] = useState({
    speed: userData.speed,
    reliability: userData.reliability,
    strength: userData.strength,
    jumping: userData.jumping,
    aerobic: userData.aerobic,
    about: userData.about,
  })

  const handleEditModalPopUp = () => {
    setModal((prev) => !prev)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setInputs({
      ...inputs,
      [name]: value,
    })
  }

  const handleEditProfileSubmit = (e) => {
    e.preventDefault()
    console.log('form submitted!')
    axios.put(`/api/user/${currentUserData.id}/edit`, inputs).then(() => {
      setModal(false)
      fetchData()
    })
  }

  return (
    <section className="about py-6">
      <div className="px-6 py-8 rounded-md bg-gray-300">
        <div className="heading">
          <h3 className="text-2xl font-medium">About</h3>
        </div>
        <div className="body flex flex-row gap-16">
          <div className="mt-2 flex-grow">{about}</div>
          <div>
            {editable ? (
              <button
                className="btn flex flex-row gap-2 rounded-md border bg-gradient-to-r from-blackCoral to-greenYellow text-white float-right font-bold"
                type="button"
                onClick={handleEditModalPopUp}
              >
                Edit Profile
              </button>
            ) : null}
            {modal ? (
              <EditProfileModal
                modal={modal}
                handleEditModalPopUp={handleEditModalPopUp}
                handleInputChange={handleInputChange}
                handleEditProfileSubmit={handleEditProfileSubmit}
              />
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}
