import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MenuDisplay from './components/MenuDisplay'
import ReservationForm from './components/ReservationForm'
import Footer from './components/Footer'
import { ToastContainer } from 'react-toastify'

export const backendUrl = 'http://localhost:7000'

const App = () => {
  return (
    <div> 
      <ToastContainer />
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


