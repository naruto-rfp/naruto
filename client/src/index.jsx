import React from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import Profile from './Components/Profile/index'
import Team from './Components/Team/index'
import Shop from './Components/Shop/index'
import Checkout from './Components/Checkout/index'
import './styles/index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/profile',
    element: <Profile />,
  },
  {
    path: '/team',
    element: <Team />,
  },
  {
    path: '/shop',
    element: <Shop />,
  },
  {
    path: '/checkout',
    element: <Checkout />,
  },
])

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

root.render(<RouterProvider router={router} />)
