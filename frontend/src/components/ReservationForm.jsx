import React, { useState } from 'react'
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter, FaInstagram } from "react-icons/fa6";
import axios from 'axios'
import { backendUrl } from '../App'
import { toast } from 'react-toastify'

const ReservationForm = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        guests: "1",
    })

    const handleChanges = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post(`${backendUrl}/api/reservations/create`, formData)
            toast.success("Reservation made successfully!")

            setFormData({
                name: "",
                email: "",
                phone: "",
                date: "",
                time: "",
                guests: "1"
            })
        } catch (error) {
            console.log(error);
            toast.error("Reservation failed!")
        }
    }

    const generateTimeSlots = () => {
        const slots = []
        for (let hour = 9; hour <= 21; hour++) {
            const startHour = hour % 12 === 0 ? 12 : hour % 12;
            const startPeriod = hour < 12 ? 'AM' : 'PM';

            const endHour = (hour + 1) % 12 === 0 ? 12 : (hour + 1) % 12;
            const endPeriod = (hour + 1) < 12 ? 'AM' : 'PM';

            slots.push(`${startHour}:00 ${startPeriod} - ${endHour}:00 ${endPeriod}`);
        }
        return slots;
    }

    return (
        <div className='min-h-screen bg-[#ffe2b7] p-6 md:p-12'>
            <div className='max-w-6xl mx-auto grid md:grid-cols-3 gap-8'>
                <form onSubmit={handleSubmit} className='md:col-span-2 bg-white p-8 rounded-lg shadow-md'>
                    <h2 className='text-xl font-semibold text-orange-400 uppercase'>Reserve a Table</h2>
                    <h1 className='text-3xl font-bold mb-4'>Dine With Us - <span className='text-orange-400'>Reserve Now</span></h1>

                    <div className='grid md:grid-cols-2 gap-4'>
                        <div className='grid gap-1.5'>
                            <label htmlFor="" className='font-bold'>Full Name</label>
                            <input type="text" placeholder="Full Name" name="name" value={formData.name} onChange={handleChanges} className='w-full p-3 mb-3 border rounded-lg focus:ring focus:ring-blue-300' required />
                        </div>
                        <div className='grid gap-1.5'>
                            <label htmlFor="" className='font-bold'>Email</label>
                            <input type="email" placeholder="Email" name="email" value={formData.email} onChange={handleChanges} className='w-full p-3 mb-3 border rounded-lg focus:ring focus:ring-blue-300' required />
                        </div>
                        <div className='grid gap-1.5'>
                            <label htmlFor="" className='font-bold'>Phone Number</label>
                            <input type="tel" placeholder="Phone Number" name="phone" value={formData.phone} onChange={handleChanges} className='w-full p-3 mb-3 border rounded-lg focus:ring focus:ring-blue-300' required />
                        </div>
                        <div className='grid gap-1.5'>
                            <label htmlFor="" className='font-bold'>Reservation Date</label>
                            <input type="date" name="date" value={formData.date} onChange={handleChanges} className='w-full p-3 mb-3 border rounded-lg focus:ring focus:ring-blue-300' required />
                        </div>
                        <div className='grid gap-1.5'>
                            <label htmlFor="" className='font-bold'>Reservation Time</label>
                            <select name="time" value={formData.time} onChange={handleChanges} className='w-full p-3 mb-3 border rounded-lg focus:ring focus:ring-blue-300' required>
                                {generateTimeSlots().map((slot, index) => (
                                    <option value={slot} key={index}>{slot} </option>
                                ))}
                            </select>
                        </div>
                        <div className='grid gap-1.5'>
                            <label htmlFor="" className='font-bold'>Number of Guests</label>
                            <select name="guests" value={formData.guests} onChange={handleChanges} className='w-full p-3 mb-3 border rounded-lg focus:ring focus:ring-blue-300'>
                                {[...Array(10).keys()].map((num) => (
                                    <option value={num + 1} key={num + 1}>{num + 1} Guest(s)</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <button type="submit" className='w-full bg-orange-600 mt-4 text-white p-3 rounded-lg'>Reserve Now</button>
                </form>

                <div className='bg-black text-gray-300 p-8 rounded-lg shadow-md space-y-10'>
                    <div className='text-lg font-bold'>
                        <h3>Address</h3>
                        <p>123, Xyz Street, N-axis, Sample City, State, Country</p>
                    </div>
                    <div className='text-lg font-bold'>
                        <h3>Open Time</h3>
                        <p>Mon - Fri: 11:00 AM - 10:00 PM</p>
                        <p>Sat - Sun: 09:00 AM - 11:00 PM</p>
                    </div>
                    <div className='text-lg font-bold'>
                        <h3>Contact</h3>
                        <p>Phone: +(62) 000-0000</p>
                        <p>Email: QuickDine@gmail.com</p>
                    </div>
                    <div className='text-lg font-bold mb-2'>
                        <h3>Stay Connected!</h3>
                        <div className='flex gap-4 mt-2'>
                            <FaFacebook className='text-4xl text-red-500' />
                            <FaSquareXTwitter className='text-4xl text-red-500' />
                            <FaInstagram className='text-4xl text-red-500' />
                            <FaYoutube className='text-4xl text-red-500' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReservationForm
