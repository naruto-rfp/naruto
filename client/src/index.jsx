import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { createFastContext } from './lib/fastContext'
import './styles/index.css'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

const { StoreProvider } = createFastContext({
  modal: {
    content: null,
    overlay: true,
    scrollLock: true,
  },
  session: null,
})

root.render(
  <StoreProvider>
    <App />
  </StoreProvider>
)
