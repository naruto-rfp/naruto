import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Homepage'
import Profile from './Components/Profile'
import Shop from './Components/Shop'
import Team from './Components/Team'
import Login from './Components/Login'
import PrivateRoutes from './utils/PrivateRoutes'
import Checkout from './Components/Checkout'
import Navbar from './Components/NavBar'

const App = function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route element={<Home />} path="/" />
          <Route element={<Profile />} path="/profile/" />
          <Route element={<Shop />} path="/shop/" />
          <Route element={<Team />} path="/team/" />
          <Route element={<Checkout />} path="/checkout/" />
        </Route>
        <Route element={<Login />} path="/login/" />
      </Routes>
    </BrowserRouter>
  )
}

export default App
