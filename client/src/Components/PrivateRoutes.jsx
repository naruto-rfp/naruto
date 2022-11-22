import { Outlet, Navigate } from 'react-router-dom'
import Modal from './Modal'

function PrivateRoutes({ session }) {
  // Auth stuff goes here
  // temp auth
  return session ? (
    <>
      <Outlet />
      <Modal />
    </>
  ) : (
    <Navigate to="/login/" />
  )
}

export default PrivateRoutes
