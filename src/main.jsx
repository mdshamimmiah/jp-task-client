
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import App from './Routes/Routes.jsx'
import React from 'react'
import AuthProvider from './provider/AuthProvider.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<AuthProvider>
<RouterProvider router={App} />
</AuthProvider>
  </React.StrictMode>,
)
