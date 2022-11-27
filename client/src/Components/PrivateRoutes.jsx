import { Outlet, Navigate, useNavigate } from 'react-router-dom'
import Navbar from './NavBar'
import Modal from './Modal'

function PrivateRoutes({ session, setSession }) {
  const navigate = useNavigate()
  // Auth stuff goes here
  // temp auth
  const logout = () => {
    fetch('/api/session', { method: 'DELETE', credentials: 'include' })
      .then(() => console.log('logged out'))
      .catch((err) => console.log(err))
    // Redirect to the login page after logging out to force a refresh
    // window.location.assign('/')
    // If want to keep user on the app without hard refresh:
    // ... use react-router-dom to navigate to the login or home page
    //
    // TEMP
    console.log('Trying to log out')
    navigate('/login')
    setSession(null)
  }

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
