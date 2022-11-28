import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import logo from '../../lib/images/sports-colored.png'

axios.defaults.withCredentials = true

function Login({ setSession }) {
  const navigate = useNavigate()
  const [showModal, setShowModal] = useState(false)
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  })
  const [newUser, setNewUser] = useState({
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  })

  const login = () => {
    axios
      .post('/api/login', credentials)
      .then((data) => {
        setSession(data)
        setCredentials({
          username: '',
          password: '',
        })
        navigate('/')
      })
      .catch((err) => console.log('Err', err))
    setCredentials({
      username: '',
      password: '',
    })
  }

  const register = () => {
    console.log(Object.values(newUser))
    if (Object.values(newUser).includes('')) {
      // window.alert('please fill in all necessary information!')
    } else {
      axios
        .post('/api/user', newUser)
        .then((data) => {
          setSession(data)
          setShowModal(!showModal)
          setNewUser({
            username: '',
            firstName: '',
            lastName: '',
            email: '',
            password: '',
          })
          navigate('/')
        })
        .catch((err) => console.log(err))
    }
  }

  return (
    <div>
      <section className="h-full gradient-form md:h-screen justify-center">
        <div className="container py-6 px-6 h-full justify-center items-center mx-auto">
          <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
            <div className="xl:w-10/12">
              <div className="block bg-white shadow-lg rounded-lg">
                <div className="lg:flex lg:flex-wrap g-0">
                  <div className="lg:w-6/12 px-4 md:px-0">
                    <div className="md:p-12 md:mx-6">
                      <div className="text-center mx-auto">
                        <img className="mx-auto" src={logo} alt="logo" />
                        <h4 className="text-xl font-semibold mt-1 mb-12 pb-1">Welcome to TeamUP</h4>
                      </div>
                      <form>
                        <p className="mb-4">Please login to your account</p>
                        <div className="mb-4">
                          <input
                            type="text"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="exampleFormControlInput1"
                            placeholder="Username"
                            onChange={(e) =>
                              setCredentials({ ...credentials, username: e.target.value })
                            }
                          />
                        </div>
                        <div className="mb-4">
                          <input
                            type="password"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="exampleFormControlInput1"
                            placeholder="Password"
                            onChange={(e) =>
                              setCredentials({ ...credentials, password: e.target.value })
                            }
                          />
                        </div>
                        <div className="text-center pt-1 mb-12 pb-1">
                          <button
                            className="inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3 bg-gradient-to-r from-blackCoral to-greenYellow"
                            type="button"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                            onClick={login}
                          >
                            Log in
                          </button>
                          <a className="text-gray-500" href="#!">
                            Forgot password?
                          </a>
                        </div>
                        <div className="flex items-center justify-between pb-6">
                          <p className="mb-0 mr-2">Don&#39;t have an account?</p>
                          <button
                            type="button"
                            className="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                            onClick={() => {
                              setShowModal(!showModal)
                            }}
                          >
                            Sign Up Here!
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="lg:w-6/12 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none bg-gradient-to-b from-blackCoral to-greenYellow">
                    <div className="text-white px-4 py-6 md:p-12 md:mx-6">
                      <h4 className="text-xl font-semibold mb-6">
                        The premier site to connect recreational sports teams and fans
                      </h4>
                      <p className="text-sm">
                        Welcome to TeamUP, the best community for the recreational sports fan. We
                        support recreational adult leagues, intramural leagues, and much more! Keep
                        up to date with all the latest news on your favorite teams and shop our
                        selection of local jerseys. In addition, our platform makes it easy for
                        coaches to manage their teams through event creation, rsvp management, and
                        posting team dues. A real one stop shop for all involved in your local
                        sports community.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div
        className={
          showModal
            ? 'modal fade fixed top-0 left-0 w-full h-full outline-none overflow-x-hidden overflow-y-auto'
            : 'modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto'
        }
        id="registrationModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog relative w-auto pointer-events-none">
          <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
            <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 rounded-t-md">
              <h5
                className="text-xl font-medium leading-normal text-gray-800"
                id="exampleModalLabel"
              >
                Sign Up
              </h5>
              <button
                type="button"
                className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <form>
              <div className="mb-4">
                Username:
                <input
                  type="text"
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleFormControlInput1"
                  placeholder="Username"
                  onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
                />
              </div>
              <div className="mb-4">
                First Name:
                <input
                  type="text"
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleFormControlInput1"
                  placeholder="First Name"
                  onChange={(e) => setNewUser({ ...newUser, firstName: e.target.value })}
                />
              </div>
              <div className="mb-4">
                Last Name:
                <input
                  type="text"
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleFormControlInput1"
                  placeholder="Last Name"
                  onChange={(e) => setNewUser({ ...newUser, lastName: e.target.value })}
                />
              </div>
              <div className="mb-4">
                Email:
                <input
                  type="text"
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleFormControlInput1"
                  placeholder="Email"
                  onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                />
              </div>
              <div className="mb-4">
                Password:
                <input
                  type="password"
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleFormControlInput1"
                  placeholder="Password"
                  onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
                />
              </div>
            </form>
            <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4  rounded-b-md">
              <button
                type="button"
                className="px-6
                  py-2.5
                  bg-gradient-to-r from-blackCoral to-greenYellow
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
                onClick={() => {
                  setShowModal(!showModal)
                }}
              >
                Cancel
              </button>
              <button
                type="button"
                className="px-6
                  py-2.5
                  bg-gradient-to-r from-blackCoral to-greenYellow
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
                onClick={() => {
                  register()
                }}
              >
                Register User!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
