import { Outlet, Navigate } from 'react-router-dom'
import Navbar from './NavBar'
import Modal from './Modal'

function PrivateRoutes({ session, logout }) {
  // temp auth
  return session ? (
    <>
      <Navbar session={session} logout={logout} />
      <Outlet context={{ currentUserData: session.data }} />
      <Modal />
    </>
  ) : (
    <Navigate to="/login/" />
  )
}

export default PrivateRoutes
