import './index.css'

import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import Router from './router'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense>
      <Router />
    </Suspense>
  </StrictMode>
)
