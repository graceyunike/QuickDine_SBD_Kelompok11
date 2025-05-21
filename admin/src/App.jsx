import React from 'react'
import Login from './Components/Login'

export const backendUrl = 'http://localhost:7000'

const App = () => {
  return (
        <div>
        <Login />
        <Sidebar /> 
        </div>
  )
}

export default App