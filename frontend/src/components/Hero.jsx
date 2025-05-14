import React from 'react'
import bgImage from '../assets/hero.jpg'

const Hero = () => {
  return (
    <div className='relative h-[100vh] w-full bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${bgImage})` }}>
        <div className='absolute inset-0 bg-grey-900 opacity-30 z-10'></div>

        <div className='relative z-20 flex flex-col items-center justify-center h-full text-white text-center px-4'>
            <h2 className= 'text-lg md:text-xl mb-4 tracking-widest uppercase'>Where Luxury Meets Diner</h2>
            <h1 className='text-4xl md:text-6xl font-bold mb-6'>QuickDine</h1>
            <button className= 'bg-orange-500 text-black font-bold px-6 py-3 rounded-lg'>BOOK A TABLE</button>
        </div>
    </div>
  )
}

export default Hero