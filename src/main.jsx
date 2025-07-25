import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ClerkProvider } from '@clerk/react-router'

const Clerk_Key = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!Clerk_Key) throw new Error("Clerk key required")

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ClerkProvider publishableKey={Clerk_Key}>
        <App />
      </ClerkProvider>
    </BrowserRouter>
  </StrictMode>
)
