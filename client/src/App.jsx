import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import Home from './pages/Homepage'
import Profile from './pages/Profile'
import Store from './pages/Store'
import Team from './pages/Team'
import Login from './pages/Login'
import Checkout from './pages/Checkout'
import PrivateRoutes from './components/PrivateRoutes'
import { useStore } from './lib/fastContext'
import NavBar from './components/NavBar'

// const UserContext = createContext()

const App = function App() {
  // const navigate = useNavigate()
  const [currentUser, setCurrentUser] = useState('')
  const [session, setSession] = useStore('session')

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
      <Outlet currentUser={currentUser} />
      <Routes>
        <Route element={<PrivateRoutes session={session} setSession={setSession} />}>
          <Route element={<Home />} path="/" />
          <Route element={<Profile />} path="/profile/:id" />
          <Route element={<Store />} path="/store" />
          <Route element={<Team />} path="/team/:id" />
          <Route element={<Checkout />} path="/checkout" />
        </Route>
        <Route
          element={<Login setSession={setSession} setCurrentUser={setCurrentUser} />}
          path="/login"
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
