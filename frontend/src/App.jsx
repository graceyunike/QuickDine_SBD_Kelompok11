import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MenuDisplay from './components/MenuDisplay'
import ReservationForm from './components/ReservationForm'

const App = () => {
  return (
    <div> 
      <Navbar />
      <Hero />
      <MenuDisplay />
      <ReservationForm />
    </div>
  )
}
export default App


