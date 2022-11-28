/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import axios from 'axios'
import { useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import ChangeProfilePicModal from './ChangeProfilePicModal'

export default function Info({ profilePic, firstName, lastName, fetchData, editable }) {
  const { currentUserData } = useOutletContext()
  const [modal, setModal] = useState(false)
  const [input, setInput] = useState({
    profilePic: '',
  })

  const handleChangeProfilePicModalPopUp = () => {
    setModal((prev) => !prev)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setInput({
      ...input,
      [name]: value,
    })
  }

  const handleChangeProfilePicSubmit = (e) => {
    e.preventDefault()
    axios.put(`/api/user/${currentUserData.id}/profilePic`, input).then(() => {
      setModal(false)
      fetchData()
    })
  }
  return (
    <div className="flex flex-grow rounded-md flex-col gap-8 bg-gray-300 px-6 py-8">
      <div className="centered">
        <div
          onClick={handleChangeProfilePicModalPopUp}
          className="avatar w-24 h-24 centered border"
        >
          <img className="object-cover" src={profilePic} alt="" />
        </div>
      </div>
      <div className="text-center text-2xl">
        <h3>
          {firstName} {lastName}
        </h3>
      </div>
      <div className="flex flex-row justify-around">
        <div className="flex flex-col font-medium">
          <span className="text-xl">Posts</span>
          <span className="mt-2 text-2xl tect-center">498</span>
        </div>
        <div className="flex flex-col font-medium">
          <span className="text-xl">Followers</span>
          <span className="mt-2 text-2xl text-center">3</span>
        </div>
        {editable && modal ? (
          <ChangeProfilePicModal
            modal={modal}
            handleChangeProfilePicModalPopUp={handleChangeProfilePicModalPopUp}
            handleInputChange={handleInputChange}
            handleChangeProfilePicSubmit={handleChangeProfilePicSubmit}
          />
        ) : null}
      </div>
    </div>
  )
}
