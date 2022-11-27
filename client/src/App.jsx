import React, { useEffect, useState, createContext } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Homepage'
import Profile from './pages/Profile'
import Store from './pages/Store'
import Team from './pages/Team'
import Login from './pages/Login'
import Checkout from './pages/Checkout'
import PrivateRoutes from './components/PrivateRoutes'
import Success from './pages/Store/Success'
import Cancel from './pages/Store/Cancel'
import { useStore } from './lib/fastContext'

const UserContext = createContext()

const App = function App() {
  // const navigate = useNavigate()
  const [currentUser, setCurrentUser] = useState('')
  const [session, setSession] = useStore('session')
  const logout = async () => {
    await fetch('/api/session', { method: 'DELETE', credentials: 'include' }).catch(console.error)
    // Redirect to the login page after logging out to force a refresh
    // window.location.assign('/')
    // If want to keep user on the app without hard refresh:
    // ... use react-router-dom to navigate to the login or home page
    //
    // TEMP
    console.log('Trying to log out')
    // navigate('/')
    setSession(null)
  }

  // Get the user session on intial mounting
  useEffect(() => {
    fetch('/api/session', { credentials: 'include' })
      .then((res) => res.json())
      .then((ses) => {
        // TEMP: remove logging
        console.log(ses)
        // setCurrentUser(ses)
        setSession(ses)
      })
      .catch((err) => {
        console.error(err)
        // setSession('session')
        setSession(null)
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <UserContext.Provider user={currentUser}>
      <BrowserRouter>
        <Routes>
          <Route element={<PrivateRoutes session={session} />}>
            <Route element={<Home />} path="/" />
            <Route element={<Profile />} path="/profile" />
            <Route element={<Store />} path="/store" />
            <Route element={<Team />} path="/team" />
            <Route element={<Checkout />} path="/checkout" />
            <Route element={<Success />} path="/success" />
            <Route element={<Cancel />} path="/cancel" />
          </Route>
          <Route
            element={
              <Login setSession={setSession} logout={logout} setCurrentUser={setCurrentUser} />
            }
            path="/login"
          />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  )
}

export default App
