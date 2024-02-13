import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className='bg-[#fafafa] text-[#4b4c4d] grid h-[100vh] m-0 text-[36px] w-full'>
    <App />
    </div>
  </React.StrictMode>,
)
