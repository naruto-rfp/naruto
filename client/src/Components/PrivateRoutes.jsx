import { Outlet, Navigate } from 'react-router-dom'

function PrivateRoutes({ session }) {
  // Auth stuff goes here
  // temp auth
  return session ? <Outlet /> : <Navigate to="/login/" />
}

export default PrivateRoutes
