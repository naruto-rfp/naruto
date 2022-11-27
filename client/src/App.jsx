import { useEffect, useState, createContext } from 'react'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import Home from './pages/Homepage'
import Profile from './pages/Profile'
import Store from './pages/Store'
import Team from './pages/Team'
import Login from './pages/Login'
import Checkout from './pages/Checkout'
import PrivateRoutes from './components/PrivateRoutes'
import { useStore } from './lib/fastContext'

const UserContext = createContext()

const App = function App() {
  const navigate = useNavigate()
  const [currentUser, setCurrentUser] = useState('')
  const [session, setSession] = useStore('session')
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

  // Get the user session on intial mounting
  useEffect(() => {
    fetch('/api/session', { credentials: 'include' })
      .then((res) => res.json())
      .then((ses) => {
        // TEMP: remove logging
        console.log(ses)
        setCurrentUser(ses)
        setSession(ses)
      })
      .catch((err) => {
        console.log(err)
        // setSession('session')
        setSession(null)
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoutes session={session} logout={logout} />}>
          <Route element={<Home />} path="/" />
          <Route element={<Profile />} path="/profile/:id" />
          <Route element={<Store />} path="/store" />
          <Route element={<Team />} path="/team" />
          <Route element={<Checkout />} path="/checkout" />
        </Route>
        <Route element={<Login setSession={setSession} />} path="/login" />
      </Routes>
    </BrowserRouter>
  )
}

export default App
