import { useState } from 'react'
import EditProfileModal from './EditProfileModal'

export default function About({ userData, about }) {
  const [modal, setModal] = useState(false)
  const [inputs, setInputs] = useState({
    speed: userData.speed,
    reliability: userData.reliability,
    jumping: userData.jumping,
    aerobic: userData.aerobic,
    strength: userData.strength,
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
    // axios post profile change
  }

  return (
    <div>
      about is : {about}
      <button
        className="bg-gradient-to-r from-blackCoral to-greenYellow text-white float-right font-bold py-2 px-4 rounded"
        type="button"
        onClick={handleEditModalPopUp}
      >
        Edit Profile
      </button>
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
