import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/NavBar'
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

const App = function App() {
  const [session, setSession] = useStore('session')
  const logout = async () => {
    await fetch('/api/session', { method: 'DELETE' }).catch(console.error)
    // Redirect to the login page after logging out to force a refresh
    // window.location.assign('/')
    // If want to keep user on the app without hard refresh:
    // ... use react-router-dom to navigate to the login or home page
    //
    // TEMP
    setSession(null)
  }

  // Get the user session on intial mounting
  useEffect(() => {
    fetch('/api/session', { credentials: 'include' })
      .then((res) => res.json())
      .then((ses) => {
        // TEMP: remove logging
        console.log(ses)
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
    <BrowserRouter>
      <Navbar session={session} logout={logout} />
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
        <Route element={<Login />} path="/login" />
      </Routes>
    </BrowserRouter>
  )
}

export default App
