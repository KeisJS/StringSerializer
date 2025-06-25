import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from '@/pages/root'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
