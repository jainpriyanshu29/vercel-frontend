import React from 'react'
import PublicRoutes from './PublicRoutes';
import { BrowserRouter } from "react-router-dom"

function App() {
  return (

    <>
      <BrowserRouter>
        <PublicRoutes />
      </BrowserRouter>
    </>

  )
}

export default App