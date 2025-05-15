import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MenuDisplay from './components/MenuDisplay'
import ReservationForm from './components/ReservationForm'
import Footer from './components/Footer'

const App = () => {
  return (
    <div> 
      <Navbar />
      <Hero />
      <MenuDisplay />
      <ReservationForm />
      <Footer /> 
    </div>
  )
}
export default App


