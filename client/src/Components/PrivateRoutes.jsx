import { Outlet, Navigate } from 'react-router-dom'
import Navbar from './NavBar'
import Modal from './Modal'

function PrivateRoutes({ session, logout }) {
  // Auth stuff goes here
  // temp auth
  return session ? (
    <>
      <Navbar session={session} logout={logout} />
      <Outlet />
      <Modal />
    </>
  ) : (
    <Navigate to="/login/" />
  )
}

export default PrivateRoutes
