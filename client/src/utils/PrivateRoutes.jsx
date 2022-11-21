import { Outlet, Navigate } from 'react-router-dom'

function PrivateRoutes() {
  // Auth stuff goes here
  // temp auth
  const auth = { token: false }

  return auth.token ? <Outlet /> : <Navigate to="/login/" />
}

export default PrivateRoutes
