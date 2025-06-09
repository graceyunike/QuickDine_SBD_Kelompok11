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
        <div id="menu">
          <MenuDisplay />
        </div>
        <div id="reservations">
          <ReservationForm />
        </div>
        <div id="contact">
          <Footer />
        </div>
    </div>
  )
}
export default App


