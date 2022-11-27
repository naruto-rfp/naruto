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
    // TODO: should be called based on id
    axios.put(`/api/user/${currentUserData.id}/edit`, inputs).then(() => {
      setModal(false)
      fetchData()
    })
  }

  return (
    <div>
      {about}
      {editable ? (
        <button
          className="bg-gradient-to-r from-blackCoral to-greenYellow text-white float-right font-bold py-2 px-4 rounded"
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
  )
}
