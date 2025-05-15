import React, { useState } from 'react'
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter, FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='flex flex-col gap-12 px-6 py-16 bg-white'>
      {/* top */}
      <div className='grid place-content-center gap-6 text-center'>
        <h2 className='text-4xl font-bold text-gray-800'>Need Update on Latest Offers?</h2>
        <p className='text-lg text-gray-600'>Subscribe to our newsletter to get frequent updates</p>
        <div className='flex items-center justify-center max-w-xl mx-auto w-full'>
          <input type="email" placeholder='Enter your email' className='flex-grow px-4 py-3 border-2 border-r-0 border-orange-500 rounded-l-full outline-none text-sm' />
          <button className='bg-orange-500 text-white px-6 py-3 rounded-r-full font-bold'>Join Now</button>
        </div>
      </div>
      {/* botton */}
      <div className='flex md:flex-row justify-between items-center text-center md:text-left gap-6'>
        {/* left */}
        <div>
          <h2 className='text-2xl font-bold text-gray-800'>QuickDine</h2>
          <div className='flex justify-center md:justify-start gap-4 mt-3 text-orange-500'>
            <FaFacebook className='text-3xl cursor-pointer' />
            <FaYoutube className='text-3xl cursor-pointer' />
            <FaSquareXTwitter className='text-3xl cursor-pointer' />
            <FaInstagram className='text-3xl cursor-pointer' />
          </div>
        </div>
        {/* right */}
        <div>
          <ul className='flex gap-6 justify-center text-gray-700 text-base font-medium'>
            <li>Home</li>
            <li>Services</li>
            <li>About Us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>
      <p className='text-center text-sm mt-4'>© 2025 QuickDine. All rights reserved.</p>
    </div>
  )
}

export default Footer 