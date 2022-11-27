import { Outlet, useNavigate } from 'react-router-dom'
import Navbar from './NavBar'
import Modal from './Modal'

function PrivateRoutes({ session, logout, currentUser }) {
  const navigate = useNavigate()
  // Auth stuff goes here
  // temp auth
  return session ? (
    <>
      <Navbar session={session} logout={logout} />
      <Outlet />
      <Modal />
    </>
  ) : (
    navigate('/')
  )
}

export default PrivateRoutes
