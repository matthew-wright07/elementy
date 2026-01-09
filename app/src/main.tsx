import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from "./app"
import { Toaster } from 'react-hot-toast'


createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App/>
    <Toaster position="bottom-right" 
    toastOptions={{
    style: {
      background: "#ef4444",
      color: "#ffffff",
    },
    error: {
      iconTheme: {
        primary: "#ef4444",
        secondary: "#ffffff",
      },
    },
    }}/>
  </BrowserRouter>,
)
