import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav className='flex justify-between p-[2rem] bg-black text-white'>
            <div>
                <h2 className= 'font-bold text-2xl'>QuickDine</h2>
            </div>

            <div>
                <ul className='flex justify-between gap-8'>
                    <li>
                        <a href="#home" className='font-bold text-lg cursor-pointer hover:text-orange-500'>HOME</a>
                    </li>
                    <li>
                        <a href="#reservations" className='font-bold text-lg cursor-pointer hover:text-orange-500'>RESERVATIONS</a>
                    </li>
                    <li>
                        <a href="#menu" className='font-bold text-lg cursor-pointer hover:text-orange-500'>MENU</a>
                    </li>
                    <li>
                        <a href="#contact" className='font-bold text-lg cursor-pointer hover:text-orange-500'>CONTACT</a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Navbar