import { useState } from 'react'
import axios from 'axios'
import { useStore } from '../../lib/fastContext'

export default function ChangeBannerPic({ updatePic }) {
  const [modal, setModal] = useStore('modal')
  const [url, setUrl] = useState('')
  const handleCloseModal = () => {
    setModal({
      ...modal,
      content: null,
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()

    const { data } = await axios.post('/api/teams/1/changeBannerPic', { bannerUrl: url })

    if (data.success) {
      updatePic(url)
      handleCloseModal()
    }
  }

  return (
    <div className="modal-dialog w-auto pointer-events-none">
      <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
        <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 rounded-t-md">
          <h5 className="text-xl font-medium leading-normal text-gray-800" id="exampleModalLabel">
            Change Banner Image
          </h5>
          <button
            type="button"
            className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            Enter the image address
            <input
              type="text"
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleFormControlInput1"
              placeholder="Enter the image address"
              name="profilePic"
              onChange={(e) => setUrl(e.target.value)}
            />
          </div>
          <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4  rounded-b-md">
            <button
              type="button"
              onClick={handleCloseModal}
              className="px-6
                  py-2.5
                  bg-purple-600
                  text-white
                  font-medium
                  text-xs
                  leading-tight
                  uppercase
                  rounded
                  shadow-md
                  hover:bg-purple-700 hover:shadow-lg
                  focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0
                  active:bg-purple-800 active:shadow-lg
                  transition
                  duration-150
                  ease-in-out"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="submit"
              className="px-6
                  py-2.5
                  bg-blue-600
                  text-white
                  font-medium
                  text-xs
                  leading-tight
                  uppercase
                  rounded
                  shadow-md
                  hover:bg-blue-700 hover:shadow-lg
                  focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                  active:bg-blue-800 active:shadow-lg
                  transition
                  duration-150
                  ease-in-out
                  ml-1"
            >
              Save changes
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
